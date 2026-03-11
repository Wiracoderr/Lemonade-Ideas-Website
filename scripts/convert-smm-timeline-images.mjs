import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputFiles = [
    { in: 'Icons/1.jpg', out: 'public/images/smm-timeline-1.webp' },
    { in: 'Icons/2.jpg', out: 'public/images/smm-timeline-2.webp' },
    { in: 'Icons/3.jpg', out: 'public/images/smm-timeline-3.webp' }
];

async function processImages() {
    for (const file of inputFiles) {
        const inputPath = path.join(process.cwd(), file.in);
        const outputPath = path.join(process.cwd(), file.out);

        try {
            if (!fs.existsSync(inputPath)) {
                console.error(`ERROR: input file not found: ${inputPath}`);
                continue;
            }

            console.log(`Processing ${inputPath}...`);
            await sharp(inputPath)
                .resize({ width: 800, withoutEnlargement: true }) // optimized width for timeline images
                .webp({ quality: 80 })
                .toFile(outputPath);
                
            console.log(`Success: ${path.basename(outputPath)} written.`);
        } catch (err) {
            console.error(`Failed to process ${inputPath}:`, err);
        }
    }
}

processImages();
