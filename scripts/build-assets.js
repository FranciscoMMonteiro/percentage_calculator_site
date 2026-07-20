/**
 * One-off asset generation: the optimized background and the Open Graph card.
 * Run with `npm run assets` after dropping a new full-resolution artwork at
 * public/background.png — the committed PNG is already downscaled output, so
 * re-running this without a fresh source only recompresses it.
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

const buildBackground = async () => {
  const source = path.join(publicDir, 'background.png');
  await sharp(source)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(path.join(publicDir, 'background.webp'));

  // Keep a PNG fallback, but a far smaller one than the 1.3 MB original.
  await sharp(source)
    .resize({ width: 1280, withoutEnlargement: true })
    .png({ quality: 70, compressionLevel: 9, palette: true })
    .toFile(path.join(publicDir, 'background.min.png'));
};

const OG_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c2c5a"/>
      <stop offset="100%" stop-color="#081834"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ff8a5b"/>
      <stop offset="100%" stop-color="#f05b2a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="90" r="320" fill="#ff7a45" opacity="0.16"/>
  <circle cx="60" cy="600" r="280" fill="#2466b2" opacity="0.30"/>
  <text x="80" y="300" font-family="Inter, Arial, sans-serif" font-size="86" font-weight="800" fill="#ffffff">
    Percentage Calculator
  </text>
  <text x="80" y="372" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="500" fill="#c9d9f7">
    Fill any two fields — the third is calculated instantly
  </text>
  <rect x="80" y="430" width="220" height="8" rx="4" fill="url(#accent)"/>
  <text x="80" y="530" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="600" fill="#8fb4ee">
    calcpercentages.com
  </text>
</svg>`;

const buildOgImage = async () => {
  await sharp(Buffer.from(OG_SVG))
    .png({ compressionLevel: 9 })
    .toFile(path.join(publicDir, 'og-image.png'));
};

await buildBackground();
await buildOgImage();
console.log('assets written to public/');
