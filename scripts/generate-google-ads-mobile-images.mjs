import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicImagesDir = path.join(process.cwd(), 'public', 'images');

const imagesToProcess = [
    { name: 'google-ads-hero-bg.webp', format: 'webp' },
    { name: 'fono-accel.avif', format: 'avif' },
    { name: 'google-ads-challenges.webp', format: 'webp' },
    { name: 'google-ads-timeline.avif', format: 'avif' },
    { name: 'mesa-de-trabajo-1-100.webp', format: 'webp' }
];

async function generateMobileImages() {
    for (const image of imagesToProcess) {
        const inputPath = path.join(publicImagesDir, image.name);
        const nameWithoutExt = path.parse(image.name).name;
        const outputPath = path.join(publicImagesDir, `${nameWithoutExt}-mobile.${image.format}`);

        if (!fs.existsSync(inputPath)) {
            console.error(`ERROR: input file not found: ${inputPath}`);
            continue;
        }

        try {
            console.log(`Processing ${image.name} -> ${path.basename(outputPath)}...`);
            await sharp(inputPath)
                .resize({
                    width: 800,
                    withoutEnlargement: true,
                })
                .toFile(outputPath);
            console.log(`Success: ${path.basename(outputPath)} written.`);
        } catch (err) {
            console.error(`Failed to process ${image.name}:`, err);
        }
    }
}

generateMobileImages();
