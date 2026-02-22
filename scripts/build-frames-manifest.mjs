import fs from 'fs';
import path from 'path';

const framesDir = path.join(process.cwd(), 'public', 'frames');
const manifestPath = path.join(process.cwd(), 'public', 'frames', 'manifest.json');

function buildManifest() {
  if (!fs.existsSync(framesDir)) {
    console.warn(`[Warn] Frames directory not found: ${framesDir}`);
    // Create it and write empty
    fs.mkdirSync(framesDir, { recursive: true });
    fs.writeFileSync(manifestPath, JSON.stringify([]));
    return;
  }

  const files = fs.readdirSync(framesDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp'].includes(ext);
  });

  // Sort files numerically if possible, otherwise alphabetically
  imageFiles.sort((a, b) => {
    const numA = a.match(/\d+/g);
    const numB = b.match(/\d+/g);
    
    if (numA && numB) {
      // Use the last number mapped in filename (useful for seq numbers like _001)
      const lastNumA = parseInt(numA[numA.length - 1], 10);
      const lastNumB = parseInt(numB[numB.length - 1], 10);
      if (lastNumA !== lastNumB) {
        return lastNumA - lastNumB;
      }
    }
    return a.localeCompare(b);
  });

  const manifest = imageFiles.map(file => `/frames/${file}`);

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`[Success] Generated frames manifest with ${manifest.length} frames.`);
}

buildManifest();
