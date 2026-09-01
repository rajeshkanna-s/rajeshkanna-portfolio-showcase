import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targetSites = [
  { slug: 'rasmia', title: 'RasMia', url: 'https://rasmia.netlify.app/' },
  { slug: 'alenportfolio', title: 'Alen Portfolio', url: 'https://rajeshkanna-s.github.io/alen-portfolio-website/' },
  { slug: 'netflixportfolio', title: 'Netflix Developer Portfolio', url: 'https://rajeshkanna-s.github.io/netflix-developer-portfolio/' },
  { slug: 'portfolioadv3d', title: 'Advanced 3D Portfolio', url: 'https://rajeshkanna-s.github.io/portfolio-adv-3d/' },
  { slug: 'videodeveloper', title: 'Video Developer Portfolio', url: 'https://rajeshkanna-s.github.io/video-developer-portfolio/' },
  { slug: 'portfolioadvancedpro', title: 'Advanced Pro Portfolio', url: 'https://rajeshkanna-s.github.io/portfolio-advanced-pro/' },
  { slug: 'tastetableshowcase', title: 'Taste & Table Showcase', url: 'https://rajeshkanna-s.github.io/taste-and-table-showcase/' },
];

async function captureHero(site) {
  const jpgPath = path.join(outputDir, `${site.slug}.jpg`);
  const webpPath = path.join(outputDir, `${site.slug}.webp`);

  const providers = [
    // 1. thum.io standard 1200x800 crop
    `https://image.thum.io/get/width/1200/crop/800/wait/4/noanimate/${site.url}`,
    // 2. thum.io full width 1280
    `https://image.thum.io/get/width/1280/crop/800/wait/6/${site.url}`,
    // 3. microlink screenshot
    `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&waitForTimeout=4000&meta=false&embed=screenshot.url`,
    // 4. wordpress mshots
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

          // Resize to 640px wide while preserving aspect ratio, just like existing assets
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
  console.log(`Starting capture for ${targetSites.length} target sites...`);
  for (const site of targetSites) {
    const success = await captureHero(site);
    if (!success) {
      console.error(`Failed to capture ${site.slug}`);
    }
  }
  console.log('Finished capturing all 7 sites!');
}

run();
