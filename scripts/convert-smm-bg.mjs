import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImage = path.join(process.cwd(), 'Icons', 'smm.jpg');
const outputPathWebp = path.join(process.cwd(), 'public', 'images', 'smm-bg.webp');
const outputPathMobileWebp = path.join(process.cwd(), 'public', 'images', 'smm-bg-mobile.webp');

async function processImage() {
    try {
        if (!fs.existsSync(inputImage)) {
            console.error(`ERROR: input file not found: ${inputImage}`);
            return;
        }

        console.log(`Processing ${inputImage}...`);
        
        // 1. Desktop version
        await sharp(inputImage)
            .resize({ width: 1920, withoutEnlargement: true }) // Max width 1920
            .webp({ quality: 80 })
            .toFile(outputPathWebp);
            
        console.log(`Success: ${path.basename(outputPathWebp)} written.`);

        // 2. Mobile version
        await sharp(inputImage)
            .resize({ width: 800, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outputPathMobileWebp);

        console.log(`Success: ${path.basename(outputPathMobileWebp)} written.`);
    } catch (err) {
        console.error('Failed to process image:', err);
    }
}

processImage();
