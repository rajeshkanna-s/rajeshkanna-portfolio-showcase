import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/screenshots');

const newSites = [
  { slug: 'miar', title: 'Mia Portfolio', url: 'https://mia-r.netlify.app' },
  { slug: 'keerthanag', title: 'Keerthana G Portfolio', url: 'https://keerthanag.netlify.app/' },
  { slug: 'keerthana-g', title: 'Keerthana G Portfolio (V2)', url: 'https://keerthana-g.netlify.app/' },
];

async function captureAndSave(site) {
  const jpgPath = path.join(outputDir, `${site.slug}.jpg`);
  const webpPath = path.join(outputDir, `${site.slug}.webp`);

  const providers = [
    `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&waitForTimeout=5000&meta=false&embed=screenshot.url`,
    `https://image.thum.io/get/width/1200/crop/800/wait/6/${site.url}`,
    `https://image.thum.io/get/width/1200/crop/800/wait/4/noanimate/${site.url}`,
  ];

  for (const providerUrl of providers) {
    try {
      console.log(`[FETCHING] ${site.title} (${site.slug}) via ${providerUrl}...`);
      const response = await fetch(providerUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        signal: AbortSignal.timeout(45000),
      });

      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        if (buffer.length > 8000) {
          console.log(`[DOWNLOADED] ${site.slug} raw image: ${buffer.length} bytes`);
          
          // Optimize with Sharp to WebP & JPG
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

          console.log(`[OPTIMIZED & SAVED] ${site.slug}.webp (${webpBuffer.length} bytes), ${site.slug}.jpg (${jpgBuffer.length} bytes)`);
          return true;
        } else {
          console.log(`[BUFFER TOO SMALL] ${buffer.length} bytes, trying next provider...`);
        }
      } else {
        console.warn(`[HTTP ERROR] ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.warn(`[RETRY] Error for ${site.slug} with provider: ${err.message}`);
    }
  }

  console.error(`[FAILED] Could not capture ${site.slug}`);
  return false;
}

async function run() {
  for (const site of newSites) {
    await captureAndSave(site);
  }
}

run();
