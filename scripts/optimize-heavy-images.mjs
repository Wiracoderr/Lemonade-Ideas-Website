import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

async function optimizeImage(filename, options) {
    const inputPath = path.join(PUBLIC_IMAGES_DIR, filename);
    const ext = path.extname(filename);
    const baseName = path.basename(filename, ext);
    
    // Output as webp
    const outputPath = path.join(PUBLIC_IMAGES_DIR, `${baseName}.webp`);
    
    try {
        console.log(`Processing: ${filename}`);
        // Read file into buffer so we can overwrite original if needed
        const buffer = await fs.readFile(inputPath);
        
        await sharp(buffer)
            .webp(options || { quality: 75, effort: 6 })
            .toFile(outputPath);
            
        console.log(`✅ Optimized: ${outputPath}`);
        
        // If the original was not a webp, we delete it to save space
        if (ext.toLowerCase() !== '.webp') {
            await fs.unlink(inputPath);
            console.log(`🗑️ Deleted original: ${filename}`);
        }
    } catch (e) {
        console.error(`❌ Error optimizing ${filename}:`, e.message);
    }
}

async function run() {
    console.log('Starting heavy image optimization...');
    
    // Re-compress existing webps with lower quality setting to reduce file size
    await optimizeImage('branding-story-mobile-bg.webp', { quality: 60, effort: 6 });
    await optimizeImage('branding-story-bg.webp', { quality: 60, effort: 6 });
    await optimizeImage('Mesa de trabajo 1.webp', { quality: 60, effort: 6 });
    
    // Convert PNGs to WEBP
    await optimizeImage('seochatgpt-banner.png', { quality: 75, effort: 6 });
    await optimizeImage('seochatgpt-banner-mobile.png', { quality: 75, effort: 6 });
    
    console.log('Finished image optimization.');
}

run();
