import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';

const KEY_FILE_PATH = 'D:\\agent manager\\Lemonade Ideas Website\\indexig-lemonade-ideas-b9ea22fc177c.json';
const BASE_URL = 'https://www.lemonadeideas.com';
const LOCALES = ['en', 'es'];

// Base application routes
const baseRoutes = [
  '',
  '/contact',
  '/terms-of-service',
  '/social-media-management',
  '/blogs'
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runIndexer() {
  console.log('🤖 INITIALIZING GOOGLE INDEXING API DEPLOYMENT...');
  console.log(`🔑 Loading Service Account Key from: ${KEY_FILE_PATH}`);

  if (!fs.existsSync(KEY_FILE_PATH)) {
    console.error(`❌ CRITICAL: Key file not found! Pipeline halting.`);
    process.exit(1);
  }

  // 1. Gather all URLs
  const urlsToSubmit = [];
  
  // Base Routes
  baseRoutes.forEach(route => {
    LOCALES.forEach(locale => {
      urlsToSubmit.push(`${BASE_URL}/${locale}${route}`);
    });
  });

  // Blog Routes
  const blogsPath = path.join(process.cwd(), 'src', 'data', 'blogs.json');
  if (fs.existsSync(blogsPath)) {
    const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
    blogsData.forEach(blog => {
      LOCALES.forEach(locale => {
        urlsToSubmit.push(`${BASE_URL}/${locale}/blogs/${blog.slug}`);
      });
    });
  } else {
    console.warn(`⚠️ Warning: blogs.json not found at ${blogsPath}`);
  }

  console.log(`🌐 Extracted ${urlsToSubmit.length} URLs from internal architecture.`);
  console.log('----------------------------------------------------');

  // 2. Authenticate
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  let successCount = 0;
  let failureCount = 0;

  // 3. Execute
  for (let i = 0; i < urlsToSubmit.length; i++) {
    const url = urlsToSubmit[i];
    console.log(`[${i + 1}/${urlsToSubmit.length}] Firing PING for: ${url}`);
    
    try {
      const response = await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      // A successful request usually returns 200
      console.log(`   ✅ [SUCCESS] Payload accepted.`);
      successCount++;
    } catch (error) {
      console.log(`   ❌ [FAILURE] Failed to index.`);
      if (error.response && error.response.data && error.response.data.error) {
        console.log(`      Error: ${error.response.data.error.message}`);
      } else {
         console.log(`      Error: ${error.message}`);
      }
      failureCount++;
    }

    // 500ms delay to prevent rate limits
    await delay(500);
  }

  console.log('----------------------------------------------------');
  console.log('🎯 INDEXING TACTICAL REPORT:');
  console.log(`✅ Successes: ${successCount}`);
  console.log(`❌ Failures: ${failureCount}`);
  
  if (failureCount === 0) {
     console.log('🟢 Total Dominion. Routine Completed Successfully.');
  } else {
     console.log('🔴 Partial Failure. Review logs above. Check IAM ownership credentials in Google Search Console if all failed.');
  }
}

runIndexer().catch(err => {
   console.error('CRITICAL FATAL EXCEPTION:', err);
});
