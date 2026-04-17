import fs from 'fs';
import { google } from 'googleapis';

const KEY_FILE_PATH = 'D:\\agent manager\\Lemonade Ideas Website\\indexig-lemonade-ideas-b9ea22fc177c.json';
const SITE_URL = 'sc-domain:lemonadeideas.com';
const SITEMAP_URL = 'https://www.lemonadeideas.com/sitemap.xml';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchSitemap() {
  console.log(`📡 Fetching sitemap from: ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`);
  const xml = await res.text();

  // Extract all <loc> URLs from the XML
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1].trim());
  }
  console.log(`✅ Extracted ${urls.length} URLs from sitemap.\n`);
  return urls;
}

async function inspectUrl(searchconsole, url) {
  try {
    const response = await searchconsole.urlInspection.index.inspect({
      requestBody: {
        inspectionUrl: url,
        siteUrl: SITE_URL,
      },
    });

    const result = response.data.inspectionResult || {};
    const indexStatus = result.indexStatusResult || {};
    const crawl = indexStatus.lastCrawlTime || 'N/A';
    const coverageState = indexStatus.coverageState || 'UNKNOWN';
    const verdict = indexStatus.verdict || 'UNKNOWN';
    const indexingState = indexStatus.indexingState || 'UNKNOWN';
    const robotsTxtState = indexStatus.robotsTxtState || 'N/A';
    const pageFetchState = indexStatus.pageFetchState || 'N/A';
    const crawledAs = indexStatus.crawledAs || 'N/A';
    const referringUrls = indexStatus.referringUrls || [];

    return {
      url,
      coverageState,
      indexingState,
      verdict,
      lastCrawlTime: crawl,
      robotsTxtState,
      pageFetchState,
      crawledAs,
      referringUrls,
      error: null,
    };
  } catch (err) {
    const msg = err.response?.data?.error?.message || err.message || 'Unknown error';
    return {
      url,
      coverageState: 'API_FAILURE',
      indexingState: 'API_FAILURE',
      verdict: 'API_FAILURE',
      lastCrawlTime: 'N/A',
      robotsTxtState: 'N/A',
      pageFetchState: 'N/A',
      crawledAs: 'N/A',
      referringUrls: [],
      error: msg,
    };
  }
}

function generateReport(results) {
  const total = results.length;
  const indexed = results.filter(r => r.verdict === 'PASS').length;
  const failed = results.filter(r => r.verdict === 'API_FAILURE').length;
  const errored = total - indexed - failed;

  let report = `# 🎯 Indexing Audit Report — lemonadeideas.com\n\n`;
  report += `**Generated:** ${new Date().toISOString()}\n\n`;
  report += `---\n\n`;
  report += `## 📊 Global Metrics\n\n`;
  report += `| Metric | Count |\n|---|---|\n`;
  report += `| Total URLs Processed | ${total} |\n`;
  report += `| ✅ Indexed (PASS) | ${indexed} |\n`;
  report += `| ⚠️ Errors / Excluded | ${errored} |\n`;
  report += `| ❌ API Failures | ${failed} |\n\n`;

  // Group by verdict
  const groups = {};
  results.forEach(r => {
    const key = `${r.verdict} | ${r.coverageState}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(r);
  });

  report += `---\n\n`;
  report += `## 📋 Verdict Breakdown\n\n`;

  for (const [groupKey, items] of Object.entries(groups)) {
    report += `### ${groupKey} (${items.length} URLs)\n\n`;
    report += `| # | URL | Indexing State | Page Fetch | Robots.txt | Last Crawl |\n`;
    report += `|---|---|---|---|---|---|\n`;
    items.forEach((item, i) => {
      const shortUrl = item.url.replace('https://www.lemonadeideas.com/', '/');
      report += `| ${i + 1} | ${shortUrl} | ${item.indexingState} | ${item.pageFetchState} | ${item.robotsTxtState} | ${item.lastCrawlTime === 'N/A' ? 'N/A' : new Date(item.lastCrawlTime).toLocaleDateString()} |\n`;
    });
    report += `\n`;
  }

  // Error-specific diagnostics
  const nonPass = results.filter(r => r.verdict !== 'PASS' && r.verdict !== 'API_FAILURE');
  if (nonPass.length > 0) {
    const errorGroups = {};
    nonPass.forEach(r => {
      const key = r.coverageState || r.indexingState || 'UNKNOWN';
      if (!errorGroups[key]) errorGroups[key] = [];
      errorGroups[key].push(r);
    });

    report += `---\n\n`;
    report += `## 🔴 Critical Error Diagnosis\n\n`;

    for (const [errorType, items] of Object.entries(errorGroups)) {
      report += `### Error Category: \`${errorType}\`\n\n`;
      report += `**Affected URLs (${items.length}):**\n`;
      items.forEach(item => {
        report += `- ${item.url}\n`;
      });
      report += `\n`;

      // Diagnostic prescriptions based on error type
      if (errorType.toLowerCase().includes('noindex')) {
        report += `**🔧 Diagnosis:** These pages have a \`noindex\` meta tag or X-Robots-Tag header. Check the \`<head>\` of the rendered page for \`<meta name="robots" content="noindex">\`. In Next.js, verify that no \`robots\` metadata export is setting \`noindex: true\`.\n\n`;
      } else if (errorType.toLowerCase().includes('redirect')) {
        report += `**🔧 Diagnosis:** These URLs are issuing HTTP redirects (301/302). Check \`next.config.js\` redirects, middleware.ts locale redirects, and trailing slash configuration. The canonical URL after redirect is what Google will index.\n\n`;
      } else if (errorType.toLowerCase().includes('not found') || errorType.toLowerCase().includes('404')) {
        report += `**🔧 Diagnosis:** Page returns HTTP 404. Verify the route exists in \`src/app/[locale]/\` and that the slug matches the sitemap entry exactly.\n\n`;
      } else if (errorType.toLowerCase().includes('blocked') || errorType.toLowerCase().includes('robots')) {
        report += `**🔧 Diagnosis:** \`robots.txt\` is blocking Googlebot from crawling these URLs. Check \`src/app/robots.ts\` for overly broad \`Disallow\` rules.\n\n`;
      } else if (errorType.toLowerCase().includes('crawled') && errorType.toLowerCase().includes('not indexed')) {
        report += `**🔧 Diagnosis:** Google crawled the page but chose not to index it. This is typically a content quality or duplicate content signal. Ensure the page has substantial unique content, proper canonical tags, and is not thin or duplicate.\n\n`;
      } else if (errorType.toLowerCase().includes('discovered') && errorType.toLowerCase().includes('not indexed')) {
        report += `**🔧 Diagnosis:** Google discovered the URL but has not yet crawled it. This is a crawl budget issue. Ensure internal linking is strong and submit these URLs via the Indexing API to accelerate.\n\n`;
      } else if (errorType.toLowerCase().includes('alternate')) {
        report += `**🔧 Diagnosis:** Google considers this URL an alternate version (e.g., hreflang alternate). The canonical version is being indexed instead. Verify \`alternates\` metadata in \`page.tsx\` and ensure hreflang tags are correct.\n\n`;
      } else if (errorType.toLowerCase().includes('duplicate')) {
        report += `**🔧 Diagnosis:** Google detected duplicate content. Ensure each page has a unique canonical URL set via the \`alternates.canonical\` metadata export, and that no two pages serve identical content.\n\n`;
      } else {
        report += `**🔧 Diagnosis:** Review the raw API response for this coverage state. Cross-reference with Google Search Console UI under Coverage > Excluded for detailed exclusion reasons.\n\n`;
      }
    }
  }

  // API failures section
  const apiFails = results.filter(r => r.verdict === 'API_FAILURE');
  if (apiFails.length > 0) {
    report += `---\n\n`;
    report += `## ❌ API Failures\n\n`;
    report += `| URL | Error Message |\n|---|---|\n`;
    apiFails.forEach(item => {
      report += `| ${item.url} | ${item.error} |\n`;
    });
    report += `\n`;
  }

  return report;
}

async function main() {
  console.log('🤖 INITIALIZING INDEXING AUDIT — lemonadeideas.com');
  console.log('='.repeat(60));

  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error('❌ CRITICAL: Service Account key not found.');
    process.exit(1);
  }

  // Authenticate
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  console.log('🔑 Authenticated with Service Account.\n');

  // Fetch sitemap
  const urls = await fetchSitemap();

  // Sequential inspection
  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const progress = `[${i + 1}/${urls.length}]`;
    process.stdout.write(`${progress} Inspecting: ${url.replace('https://www.lemonadeideas.com/', '/')} ... `);

    const result = await inspectUrl(searchconsole, url);
    results.push(result);

    if (result.error) {
      console.log(`❌ API FAILURE: ${result.error}`);
    } else {
      console.log(`${result.verdict === 'PASS' ? '✅' : '⚠️'} ${result.verdict} | ${result.coverageState}`);
    }

    // 600ms delay between requests to respect rate limits
    await delay(600);
  }

  console.log('\n' + '='.repeat(60));
  console.log('📝 Generating consolidated report...\n');

  const report = generateReport(results);

  // Write report
  const reportPath = 'C:\\Users\\Tarek\\.gemini\\antigravity\\brain\\00e18f54-a79c-46f4-9b55-840f92e789a4\\indexing_audit_report.md';
  fs.writeFileSync(reportPath, report, 'utf8');
  console.log(`✅ Report written to: ${reportPath}`);

  // Also write raw JSON for future reference
  const jsonPath = 'C:\\Users\\Tarek\\.gemini\\antigravity\\brain\\00e18f54-a79c-46f4-9b55-840f92e789a4\\scratch\\indexing_audit_raw.json';
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`✅ Raw JSON data written to: ${jsonPath}`);
}

main().catch(err => {
  console.error('CRITICAL FATAL EXCEPTION:', err);
  process.exit(1);
});
