import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';

const URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCGy4K9K7k7TvvrZ9OiIua4GxRTPUUoS7Y8QISucrV20YzVOUIokLxX236STa0rsew706G2Z2MfpHJhBf-OlgJWopyEn6vjCpa2XbkwOsFwZrzVoquIpWR-_tGmh-pmrXeFffFH49gU0Lv0a8D5ljqCHKMrJ-p3ZfMJIq8ll2C6VQxwNX22V-HkRC0cswLQZTfRXLiWLzRNez6pXNLfpZXqXOvKraIRJGc2ELAw7MZcx5dfYp-dA6x-9u55c-TtFd8jF0hdrw-Jzfo";
const OUT_DIR = path.join(process.cwd(), 'public', 'images');

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    try {
        console.log("Starting mobile image optimization...");
        
        // 1. Download Google Image for Fast Track
        const tempImage = path.join(OUT_DIR, 'temp-fast-track.jpg');
        console.log("Downloading Fast Track image...");
        await downloadImage(URL, tempImage);
        
        // Produce Desktop WebP version (max width 1200px)
        console.log("Creating Desktop Fast Track Webp...");
        await sharp(tempImage)
            .resize(1200, null, { withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(path.join(OUT_DIR, 'smm-fast-track.webp'));

        // Produce Mobile WebP version (max width 800px)
        console.log("Creating Mobile Fast Track Webp...");
        await sharp(tempImage)
            .resize(800, null, { withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(path.join(OUT_DIR, 'smm-fast-track-mobile.webp'));

        fs.unlinkSync(tempImage);

        // 2. Create Mobile Experience Image
        console.log("Creating Mobile Experience Image...");
        const expImage = path.join(OUT_DIR, 'smm-experience.webp');
        if (fs.existsSync(expImage)) {
            await sharp(expImage)
                .resize({ width: 800, height: 1000, fit: 'cover', position: 'right' }) // Portrait cut
                .webp({ quality: 80 })
                .toFile(path.join(OUT_DIR, 'smm-experience-mobile.webp'));
        } else {
            console.log("Warning: smm-experience.webp not found!");
        }

        console.log("All mobile image processing complete.");
    } catch (e) {
        console.error("Error processing images:", e);
    }
}

run();
