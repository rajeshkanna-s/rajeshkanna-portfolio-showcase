import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/screenshots');

const newSites = [
  { slug: 'comportfolio', title: 'com-portfolio', url: 'https://com-portfolio.netlify.app/' },
  { slug: 'comportfolio2', title: 'com-portfolio-2', url: 'https://com-portfolio-2.netlify.app/' },
];

async function captureHero(site) {
  const jpgPath = path.join(outputDir, `${site.slug}.jpg`);
  const webpPath = path.join(outputDir, `${site.slug}.webp`);

  const providers = [
    `https://image.thum.io/get/width/1200/crop/800/wait/4/noanimate/${site.url}`,
    `https://image.thum.io/get/width/1280/crop/800/wait/6/${site.url}`,
    `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&waitForTimeout=4000&meta=false&embed=screenshot.url`,
    `https://s0.wp.com/mshots/v1/${encodeURIComponent(site.url)}?w=1280&h=800`,
  ];

  for (const providerUrl of providers) {
    try {
      console.log(`[TRYING] ${site.title} (${site.slug}) via ${providerUrl.substring(0, 60)}...`);
      const response = await fetch(providerUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
        signal: AbortSignal.timeout(35000),
      });

      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        if (buffer.length > 8000) {
          console.log(`[RAW OK] ${site.slug} downloaded ${buffer.length} bytes`);

          const webpBuffer = await sharp(buffer)
            .resize(640, null, { fit: 'inside', withoutEnlargement: true })
            .webp({ quality: 85, effort: 4 })
            .toBuffer();
          fs.writeFileSync(webpPath, webpBuffer);

          const jpgBuffer = await sharp(buffer)
            .resize(640, null, { fit: 'inside', withoutEnlargement: true })
            .jpeg({ quality: 85, progressive: true, mozjpeg: true })
            .toBuffer();
          fs.writeFileSync(jpgPath, jpgBuffer);

          console.log(`[SAVED] ${site.slug}.webp (${webpBuffer.length} B), ${site.slug}.jpg (${jpgBuffer.length} B)`);
          return true;
        } else {
          console.warn(`[TOO SMALL] ${site.slug} received only ${buffer.length} bytes`);
        }
      } else {
        console.warn(`[HTTP FAIL] ${response.status} from ${providerUrl.substring(0, 40)}`);
      }
    } catch (err) {
      console.warn(`[ERROR] ${site.slug} provider failed: ${err.message}`);
    }
  }

  console.error(`[FAILED ALL] Could not capture ${site.slug}`);
  return false;
}

async function run() {
  for (const site of newSites) {
    await captureHero(site);
  }
}

run();
