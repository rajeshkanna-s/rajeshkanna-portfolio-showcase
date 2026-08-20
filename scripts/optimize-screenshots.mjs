import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const screenshotsDir = path.resolve(__dirname, '../public/screenshots');

async function optimizeImages() {
  const files = fs.readdirSync(screenshotsDir).filter((f) => f.endsWith('.jpg') || f.endsWith('.png'));
  console.log(`Found ${files.length} images to optimize...`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const inputPath = path.join(screenshotsDir, file);
    const beforeSize = fs.statSync(inputPath).size;
    totalBefore += beforeSize;

    const ext = path.extname(file);
    const base = path.basename(file, ext);
    const tempPath = path.join(screenshotsDir, `${base}_opt.webp`);
    const finalWebpPath = path.join(screenshotsDir, `${base}.webp`);
    const finalJpgPath = path.join(screenshotsDir, `${base}.jpg`);

    try {
      // Resize to 640px width (perfect 2x retina for 300px cards) and compress to WebP
      const webpBuffer = await sharp(inputPath)
        .resize(640, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toBuffer();

      fs.writeFileSync(finalWebpPath, webpBuffer);

      // Also create a compressed tiny progressive JPG for fallback
      const jpgBuffer = await sharp(inputPath)
        .resize(640, null, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true, mozjpeg: true })
        .toBuffer();

      fs.writeFileSync(finalJpgPath, jpgBuffer);

      totalAfter += webpBuffer.length;
      console.log(`[OPTIMIZED] ${file}: ${Math.round(beforeSize / 1024)}KB -> ${Math.round(webpBuffer.length / 1024)}KB (${Math.round((1 - webpBuffer.length / beforeSize) * 100)}% smaller)`);
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }

  console.log(`\n========================================`);
  console.log(`Total Size Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Size After: ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Overall reduction: ${Math.round((1 - totalAfter / totalBefore) * 100)}%!`);
  console.log(`========================================\n`);
}

optimizeImages();
