import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = 'd:/agent manager/Lemonade Ideas Website/lemonade-webapp/public/images/blogs/b2b-linkedin-ads';
fs.mkdirSync(outDir, { recursive: true });

const images = [
  { in: 'C:/Users/Tarek/.gemini/antigravity/brain/f03f0986-ce1c-4f46-86ce-2a2585b870d7/linkedin_hero_1773699007851.png', out: 'hero.webp' },
  { in: 'C:/Users/Tarek/.gemini/antigravity/brain/f03f0986-ce1c-4f46-86ce-2a2585b870d7/linkedin_scroll_1773699024036.png', out: 'scroll.webp' },
  { in: 'C:/Users/Tarek/.gemini/antigravity/brain/f03f0986-ce1c-4f46-86ce-2a2585b870d7/linkedin_dashboard_1773699040037.png', out: 'dashboard.webp' },
  { in: 'C:/Users/Tarek/.gemini/antigravity/brain/f03f0986-ce1c-4f46-86ce-2a2585b870d7/linkedin_executive_1773699053526.png', out: 'executive.webp' }
];

async function run() {
  for (const img of images) {
    await sharp(img.in).webp({ quality: 80 }).toFile(path.join(outDir, img.out));
    console.log(`Converted ${img.out}`);
  }
}
run();
