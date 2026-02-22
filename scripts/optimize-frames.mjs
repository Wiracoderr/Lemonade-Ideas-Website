/**
 * optimize-frames.mjs
 * Compresses the 80 animation frames into two branches:
 *   - public/frames/mobile/  → 400×400 WebP, target ~25-30 KB each
 *   - public/frames/desktop/ → 1080×1080 WebP, target ~50-60 KB each
 *
 * Run: node scripts/optimize-frames.mjs
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = path.join(process.cwd(), 'public', 'frames');
const MOBILE_DIR = path.join(SOURCE_DIR, 'mobile');
const DESKTOP_DIR = path.join(SOURCE_DIR, 'desktop');

// WebP quality settings — tune here if sizes drift out of range
const MOBILE_QUALITY = 52;   // targets ~25-30 KB at 400×400
const DESKTOP_QUALITY = 30;   // targets ~50-55 KB at 1080×1080

// Ensure output dirs exist
fs.mkdirSync(MOBILE_DIR, { recursive: true });
fs.mkdirSync(DESKTOP_DIR, { recursive: true });

// Collect source JPEGs (exclude sub-dirs and manifest)
const sourceFiles = fs
    .readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter(d => d.isFile() && /\.(jpe?g)$/i.test(d.name))
    .map(d => d.name)
    .sort((a, b) => {
        const na = parseInt((a.match(/\d+$|(\d+)\.\w+$/)?.[0] ?? '0'), 10);
        const nb = parseInt((b.match(/\d+$|(\d+)\.\w+$/)?.[0] ?? '0'), 10);
        return na - nb;
    });

if (sourceFiles.length === 0) {
    console.error('[Error] No JPEG source frames found in', SOURCE_DIR);
    process.exit(1);
}

console.log(`[Info] Processing ${sourceFiles.length} frames…`);

let mobileTotal = 0;
let desktopTotal = 0;

for (let i = 0; i < sourceFiles.length; i++) {
    const file = sourceFiles[i];
    const src = path.join(SOURCE_DIR, file);
    // Output filename: zero-padded index + .webp
    const outName = `frame_${String(i).padStart(3, '0')}.webp`;

    // ── MOBILE ──────────────────────────────────────────────────────────
    const mobileOut = path.join(MOBILE_DIR, outName);
    await sharp(src)
        .resize(400, 400, {
            fit: 'cover',
            position: 'centre',
        })
        .webp({ quality: MOBILE_QUALITY, effort: 6, smartSubsample: true })
        .toFile(mobileOut);

    const mobileSize = fs.statSync(mobileOut).size;
    mobileTotal += mobileSize;

    // ── DESKTOP ─────────────────────────────────────────────────────────
    const desktopOut = path.join(DESKTOP_DIR, outName);
    await sharp(src)
        .resize(1080, 1080, {
            fit: 'cover',
            position: 'centre',
        })
        .webp({ quality: DESKTOP_QUALITY, effort: 6, smartSubsample: true })
        .toFile(desktopOut);

    const desktopSize = fs.statSync(desktopOut).size;
    desktopTotal += desktopSize;

    process.stdout.write(
        `  [${String(i + 1).padStart(2)}/${sourceFiles.length}] ${outName}` +
        `  mobile=${(mobileSize / 1024).toFixed(1)}KB` +
        `  desktop=${(desktopSize / 1024).toFixed(1)}KB\n`
    );
}

const count = sourceFiles.length;
console.log('\n─────────────────────────────────────────────────');
console.log(`[Done] ${count} frames optimized`);
console.log(`  Mobile  total : ${(mobileTotal / 1024 / 1024).toFixed(2)} MB  (avg ${(mobileTotal / count / 1024).toFixed(1)} KB/frame)`);
console.log(`  Desktop total : ${(desktopTotal / 1024 / 1024).toFixed(2)} MB  (avg ${(desktopTotal / count / 1024).toFixed(1)} KB/frame)`);
console.log('─────────────────────────────────────────────────');
console.log('[Next] Run: node scripts/build-frames-manifest.mjs');
