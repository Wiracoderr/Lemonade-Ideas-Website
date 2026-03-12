import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImagePath = 'D:/agent manager/Lemonade Ideas Website/Icons/Branding & Strategy - Lemonade ideas.png';
const outputDir = 'D:/agent manager/Lemonade Ideas Website/public/images/branding';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function extractImages() {
    try {
        console.log('Loading source image...');
        const image = sharp(inputImagePath);
        const metadata = await image.metadata();
        console.log(`Original Size: ${metadata.width}x${metadata.height}`);

        const width = metadata.width;

        const extractions = [
            {
                name: 'branding-hero-bg.webp',
                // Extracting top section (hero background)
                extract: { left: 0, top: 0, width: width, height: Math.floor(width * 0.45) },
                resize: { width: 1920 }
            },
            {
                name: 'branding-fast-track.webp',
                // Extracting the hand drawn word "BRAND"
                extract: { left: Math.floor(width * 0.05), top: Math.floor(width * 0.47), width: Math.floor(width * 0.4), height: Math.floor(width * 0.3) },
                resize: { width: 800 }
            },
            {
                name: 'branding-timeline-bg.webp',
                // Extracting timeline bulb image
                extract: { left: Math.floor(width * 0.05), top: Math.floor(width * 0.95), width: Math.floor(width * 0.35), height: Math.floor(width * 0.5) },
                resize: { width: 600 }
            },
            {
                name: 'branding-dark-experience-bg.webp',
                // Extracting overlapping dark section image (why should I try again)
                extract: { left: 0, top: Math.floor(width * 1.55), width: width, height: Math.floor(width * 0.35) },
                resize: { width: 1920 }
            },
            {
                name: 'branding-brand-story-bg.webp',
                // Extract bottom dark story
                extract: { left: Math.floor(width * 0.4), top: Math.floor(width * 2.85), width: Math.floor(width * 0.6), height: Math.floor(width * 0.4) },
                resize: { width: 900 }
            }
        ];

        for (const item of extractions) {
            console.log(`Extracting ${item.name}...`);
            await sharp(inputImagePath)
                .extract(item.extract)
                .resize(item.resize.width)
                .webp({ quality: 85, effort: 6 })
                .toFile(path.join(outputDir, item.name));
            console.log(`✅ Saved ${item.name}`);
        }

        console.log('🎉 All branding images extracted and optimized successfully!');

    } catch (error) {
        console.error('Error extracting images:', error);
    }
}

extractImages();
