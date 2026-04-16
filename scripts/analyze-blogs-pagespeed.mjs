import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path constants
const ENV_PATH = path.join(__dirname, '../.env.local');
const BLOGS_PATH = path.join(__dirname, '../src/data/blogs.json');
const CSV_PATH = path.join(__dirname, '../pagespeed_blogs_audit.csv');

// Configuration
const BASE_URL = 'https://lemonadeideas.com';
const LOCALES = ['en', 'es'];
const STRATEGIES = ['mobile', 'desktop'];
const DELAY_MS = 4000;
const IS_DRY_RUN = process.argv.includes('--dry-run');

// Parse .env.local to get PAGESPEED_API_KEY
let apiKey = '';
try {
  const envContent = fs.readFileSync(ENV_PATH, 'utf-8');
  const match = envContent.match(/PAGESPEED_API_KEY=(.*)/);
  if (match) {
    apiKey = match[1].trim();
  }
} catch (e) {
  console.warn(`Could not read .env.local at ${ENV_PATH}`);
}

if (!apiKey) {
  console.error("FATAL: PAGESPEED_API_KEY is missing or not found in .env.local");
  process.exit(1);
}

// Load Blogs
let blogs = [];
try {
  const blogsContent = fs.readFileSync(BLOGS_PATH, 'utf-8');
  blogs = JSON.parse(blogsContent);
} catch (e) {
  console.error(`FATAL: Could not read or parse blogs.json at ${BLOGS_PATH}`);
  process.exit(1);
}

// Initialize CSV File
if (!fs.existsSync(CSV_PATH)) {
  fs.writeFileSync(CSV_PATH, 'URL,Language,Device,Performance,SEO,Status\n', 'utf-8');
}

// Helper for delaying requests
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runAudit() {
  console.log(`Starting PageSpeed Insights Audit for Blogs...`);
  if (IS_DRY_RUN) console.log(`[DRY RUN MODE] Only processing max 2 blogs.`);

  // Generate URL tasks
  let tasks = [];
  
  // For dry-run, take only first 2 blogs (x2 locales x2 strategies = 8 requests)
  const targetBlogs = IS_DRY_RUN ? blogs.slice(0, 2) : blogs;

  for (const blog of targetBlogs) {
    for (const locale of LOCALES) {
      const url = `${BASE_URL}/${locale}/blogs/${blog.slug}`;
      for (const strategy of STRATEGIES) {
        tasks.push({ url, locale, strategy });
      }
    }
  }

  console.log(`Total API Requests to make: ${tasks.length}`);
  console.log(`Estimated time (with ${DELAY_MS / 1000}s interval): ~${((tasks.length * DELAY_MS) / 60000).toFixed(2)} minutos`);
  console.log("-".repeat(50));

  for (let i = 0; i < tasks.length; i++) {
    const { url, locale, strategy } = tasks[i];
    console.log(`[${i + 1}/${tasks.length}] Auditing: ${url} | Strategy: ${strategy}`);

    try {
      const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&category=seo&strategy=${strategy}&key=${apiKey}`;
      
      const response = await fetch(apiEndpoint);
      
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      
      let perfScore = 'null';
      let seoScore = 'null';
      let status = 'Success';

      // Parse lighthouse results gracefully
      if (data.lighthouseResult && data.lighthouseResult.categories) {
        if (data.lighthouseResult.categories.performance?.score !== undefined) {
          perfScore = Math.round(data.lighthouseResult.categories.performance.score * 100);
        }
        if (data.lighthouseResult.categories.seo?.score !== undefined) {
          seoScore = Math.round(data.lighthouseResult.categories.seo.score * 100);
        }
      } else {
        status = 'Incomplete Data';
      }

      const csvLine = `"${url}","${locale}","${strategy}","${perfScore}","${seoScore}","${status}"\n`;
      fs.appendFileSync(CSV_PATH, csvLine, 'utf-8');
      
      console.log(`-> Perf: ${perfScore} | SEO: ${seoScore} | Status: ${status}`);

    } catch (error) {
      console.error(`-> Error for ${url} (${strategy}): ${error.message}`);
      // Write error to CSV
      const csvLine = `"${url}","${locale}","${strategy}","null","null","Error: ${error.message.replace(/"/g, '""')}"\n`;
      fs.appendFileSync(CSV_PATH, csvLine, 'utf-8');
    }

    // Wait before next request unless it's the very last one
    if (i < tasks.length - 1) {
      await delay(DELAY_MS);
    }
  }

  console.log("-".repeat(50));
  console.log(`Audit Finished. Results appended to ${CSV_PATH}`);
}

runAudit();
