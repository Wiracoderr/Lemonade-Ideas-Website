import sharp from 'sharp';

async function extractAlpha() {
    const img = sharp('public/images/test1.png');
    const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
    
    // find bounding box of alpha > 0
    let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
    
    for (let y = 0; y < info.height; y++) {
        for (let x = 0; x < info.width; x++) {
            const idx = (y * info.width + x) * info.channels;
            const a = info.channels === 4 ? data[idx + 3] : 255;
            
            // if we are also dealing with a white background, we might check for non-white
            const r = data[idx], g = data[idx+1], b = data[idx+2];
            // Let's assume the user uploaded a screenshot with white background if alpha is 255 and it's white.
            // But if it has true alpha transparency...
            if (a > 10 && !(r > 240 && g > 240 && b > 240 && a === 255)) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    
    console.log(`Non-white/transparent Content Bounding Box: minX=${minX}, maxX=${maxX}, minY=${minY}, maxY=${maxY}`);
    
    // Crop it
    const cropWidth = maxX - minX + 1;
    const cropHeight = maxY - minY + 1;
    
    if (cropWidth > 0 && cropHeight > 0) {
        await sharp('public/images/test1.png')
            .extract({ left: minX, top: minY, width: cropWidth, height: cropHeight })
            .toFile('public/images/extracted-asset.png');
        console.log('Extracted and saved to extracted-asset.png');
    }
}

extractAlpha().catch(console.error);
