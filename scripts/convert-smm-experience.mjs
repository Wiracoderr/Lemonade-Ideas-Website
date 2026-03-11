import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImage = path.join(process.cwd(), 'Icons/picture-for-social-media-1.jpg');
const outputPathWebp = path.join(process.cwd(), 'public', 'images', 'smm-experience.webp');

async function processImage() {
    try {
        if (!fs.existsSync(inputImage)) {
            console.error(`ERROR: input file not found: ${inputImage}`);
            return;
        }

        console.log(`Processing ${inputImage}...`);
        await sharp(inputImage)
            .resize({ width: 1200, withoutEnlargement: true }) // optimized width
            .webp({ quality: 80 })
            .toFile(outputPathWebp);
            
        console.log(`Success: ${path.basename(outputPathWebp)} written.`);
    } catch (err) {
        console.error(`Failed to process ${inputImage}:`, err);
    }
}

processImage();
