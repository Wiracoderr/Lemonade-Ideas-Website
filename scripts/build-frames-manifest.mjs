/**
 * build-frames-manifest.mjs
 * Generates three manifest files:
 *   public/frames/manifest.json         ← legacy (root JPEGs)
 *   public/frames/mobile/manifest.json  ← optimized WebP 400×400
 *   public/frames/desktop/manifest.json ← optimized WebP 1080×1080
 */

import fs from 'fs';
import path from 'path';

const framesDir = path.join(process.cwd(), 'public', 'frames');
const mobileDir = path.join(framesDir, 'mobile');
const desktopDir = path.join(framesDir, 'desktop');

function sortImages(files) {
  return files
    .filter(f => /\.(jpe?g|webp|png)$/i.test(f))
    .sort((a, b) => {
      const numA = a.match(/\d+/g);
      const numB = b.match(/\d+/g);
      if (numA && numB) {
        const la = parseInt(numA[numA.length - 1], 10);
        const lb = parseInt(numB[numB.length - 1], 10);
        if (la !== lb) return la - lb;
      }
      return a.localeCompare(b);
    });
}

function buildManifest(dir, urlPrefix, manifestPath) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(manifestPath, JSON.stringify([]));
    console.log(`[Warn] Dir not found, created empty manifest: ${manifestPath}`);
    return 0;
  }
  const files = fs.readdirSync(dir).filter(f => {
    // exclude sub-directories and existing manifest files
    return fs.statSync(path.join(dir, f)).isFile();
  });
  const images = sortImages(files);
  const manifest = images.map(f => `${urlPrefix}/${f}`);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  return manifest.length;
}

// ── Legacy root manifest (original JPEGs) ──────────────────────────────────
const rootCount = buildManifest(
  framesDir,
  '/frames',
  path.join(framesDir, 'manifest.json')
);
console.log(`[Success] Root manifest: ${rootCount} frames`);

// ── Mobile manifest ─────────────────────────────────────────────────────────
const mobileCount = buildManifest(
  mobileDir,
  '/frames/mobile',
  path.join(mobileDir, 'manifest.json')
);
console.log(`[Success] Mobile manifest: ${mobileCount} frames`);

// ── Desktop manifest ────────────────────────────────────────────────────────
const desktopCount = buildManifest(
  desktopDir,
  '/frames/desktop',
  path.join(desktopDir, 'manifest.json')
);
console.log(`[Success] Desktop manifest: ${desktopCount} frames`);
