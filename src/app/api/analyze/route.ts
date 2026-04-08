import { NextResponse } from 'next/server';

export const maxDuration = 300; // 300 seconds max Vercel timeout

const cache = new Map<string, { data: any; timestamp: number }>();
const CACHE_DURATION_MS = 30 * 60 * 1000; 

const fetchWithTimeout = async (url: string, timeoutMs: number, options: RequestInit = {}) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err: any) {
    clearTimeout(id);
    if (err.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeoutMs}ms`);
    }
    throw err;
  }
};

const runGoogleAudit = async (url: string, strategy: 'mobile' | 'desktop') => {
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (!apiKey) throw new Error("Missing API Key");

  // Google runPagespeed URL packed with all 4 major lighthouse categories
  const queries = [
    `url=${encodeURIComponent(url)}`,
    `strategy=${strategy}`,
    `category=performance`,
    `category=seo`,
    `category=best-practices`,
    `category=accessibility`,
    `key=${apiKey}`
  ].join('&');

  const psUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${queries}`;
  const psRes = await fetchWithTimeout(psUrl, 300000); // 5 minute timeout limit
  
  if (!psRes.ok) throw new Error(`Google API HTTP Error: ${psRes.status}`);

  const psJson = await psRes.json();
  const lighthouse = psJson.lighthouseResult;
  
  if (!lighthouse || !lighthouse.categories) {
     throw new Error("Lighthouse payload empty");
  }

  const cat = lighthouse.categories;
  const audits = lighthouse.audits;

  return {
    success: true,
    scores: {
      performance: Math.round((cat.performance?.score || 0) * 100),
      seo: Math.round((cat.seo?.score || 0) * 100),
      accessibility: Math.round((cat.accessibility?.score || 0) * 100),
      bestPractices: Math.round((cat['best-practices']?.score || 0) * 100)
    },
    metrics: {
      fcp: audits['first-contentful-paint']?.displayValue || 'N/A',
      lcp: audits['largest-contentful-paint']?.displayValue || 'N/A',
    },
    seoAudits: {
      hasTitle: audits['document-title']?.score === 1,
      hasMetaDesc: audits['meta-description']?.score === 1,
      isCrawlable: audits['is-crawlable']?.score === 1,
      crawlableAnchors: audits['crawlable-anchors']?.score === 1,
      validHttpStatus: audits['http-status-code']?.score === 1
    }
  };
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { url } = body;

    if (!url) {
      return NextResponse.json({ error: "URL is required payload field." }, { status: 400 });
    }

    url = url.trim();
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }

    const cachedItem = cache.get(url);
    const now = Date.now();
    
    if (cachedItem && (now - cachedItem.timestamp) < CACHE_DURATION_MS) {
       return NextResponse.json({ success: true, data: cachedItem.data, cached: true });
    }

    const [mobilePerfResult, desktopPerfResult] = await Promise.allSettled([
      runGoogleAudit(url, 'mobile'),
      runGoogleAudit(url, 'desktop')
    ]);

    let finalMobile = { success: false, error: "Timeout/Failure" } as any;
    if (mobilePerfResult.status === 'fulfilled') {
      finalMobile = mobilePerfResult.value;
    } else {
      console.error("Mobile error:", mobilePerfResult.reason);
    }

    let finalDesktop = { success: false, error: "Timeout/Failure" } as any;
    if (desktopPerfResult.status === 'fulfilled') {
      finalDesktop = desktopPerfResult.value;
    } else {
      console.error("Desktop error:", desktopPerfResult.reason);
    }

    const finalData = {
      rawUrl: url,
      mobile: finalMobile,
      desktop: finalDesktop
    };

    cache.set(url, { data: finalData, timestamp: Date.now() });

    return NextResponse.json({
      success: true,
      data: finalData,
      cached: false
    });

  } catch (error: any) {
    console.error("Fatal routing error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
