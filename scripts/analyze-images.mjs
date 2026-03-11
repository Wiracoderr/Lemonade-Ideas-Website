import sharp from 'sharp';

const files = [
    'C:/Users/Tarek/.gemini/antigravity/brain/11c86570-c1de-433e-91d1-df1ff0c63342/media__1773247564037.png',
    'C:/Users/Tarek/.gemini/antigravity/brain/11c86570-c1de-433e-91d1-df1ff0c63342/media__1773247592472.png'
];

async function analyze() {
    for (const file of files) {
        try {
            const metadata = await sharp(file).metadata();
            console.log(`File: ${file}`);
            console.log(`Width: ${metadata.width}, Height: ${metadata.height}, Format: ${metadata.format}, HasAlpha: ${metadata.hasAlpha}`);
        } catch (e) {
            console.log(`Error reading ${file}: ${e.message}`);
        }
    }
}
analyze();
