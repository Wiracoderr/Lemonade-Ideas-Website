import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImage = path.join(process.cwd(), 'Icons', 'picture-for-google-ads-1.png');
const outputPath = path.join(process.cwd(), 'public', 'images', 'picture-for-google-ads-1-mobile.webp');

async function processImage() {
    try {
        if (!fs.existsSync(inputImage)) {
            console.error(`ERROR: input file not found: ${inputImage}`);
            return;
        }

        console.log(`Processing ${inputImage} -> ${outputPath}...`);
        
        // Resize to a proportional mobile ratio (e.g. 800x1000), cover to crop sides appropriately
        await sharp(inputImage)
            .resize({
                width: 800,
                height: 1000,
                fit: 'cover',
                position: 'center' // crops symmetrically
            })
            .webp({ quality: 80 })
            .toFile(outputPath);
            
        console.log(`Success: ${path.basename(outputPath)} written.`);
    } catch (err) {
        console.error('Failed to process image:', err);
    }
}

processImage();
