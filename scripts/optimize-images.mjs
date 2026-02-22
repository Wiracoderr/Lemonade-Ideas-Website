import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/frames';
const desktopDir = 'public/frames/desktop';
const mobileDir = 'public/frames/mobile';

// Create directories if they don't exist
[desktopDir, mobileDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const files = fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.jpg'))
    .sort();

console.log(`Encontrados ${files.length} frames. Iniciando optimización...`);

const manifests = {
    desktop: [],
    mobile: []
};

async function processImages() {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const inputPath = path.join(inputDir, file);
        const fileName = path.parse(file).name;

        console.log(`Procesando [${i + 1}/${files.length}]: ${file}`);

        try {
            const image = sharp(inputPath);
            const metadata = await image.metadata();

            // 1:1 Center Crop calculation
            const size = Math.min(metadata.width, metadata.height);
            const left = Math.round((metadata.width - size) / 2);
            const top = Math.round((metadata.height - size) / 2);

            // Desktop Version (1080x1080 WebP)
            const desktopName = `${fileName}.webp`;
            const desktopPath = path.join(desktopDir, desktopName);
            await image.clone()
                .extract({ left, top, width: size, height: size })
                .resize(1080, 1080)
                .webp({ quality: 80 })
                .toFile(desktopPath);

            manifests.desktop.push(`/frames/desktop/${desktopName}`);

            // Mobile Version (800x800 WebP)
            const mobileName = `${fileName}.webp`;
            const mobilePath = path.join(mobileDir, mobileName);
            await image.clone()
                .extract({ left, top, width: size, height: size })
                .resize(800, 800)
                .webp({ quality: 75 })
                .toFile(mobilePath);

            manifests.mobile.push(`/frames/mobile/${mobileName}`);
        } catch (err) {
            console.error(`Error procesando ${file}:`, err);
            throw err;
        }
    }

    // Write manifests
    fs.writeFileSync(path.join(inputDir, 'manifest-desktop.json'), JSON.stringify(manifests.desktop, null, 2));
    fs.writeFileSync(path.join(inputDir, 'manifest-mobile.json'), JSON.stringify(manifests.mobile, null, 2));

    console.log('Optimización completada con éxito.');
    console.log(`Desktop: ${manifests.desktop.length} frames en /frames/desktop/`);
    console.log(`Mobile: ${manifests.mobile.length} frames en /frames/mobile/`);
}

processImages().catch(err => {
    console.error('Error durante la optimización:', err);
    process.exit(1);
});
