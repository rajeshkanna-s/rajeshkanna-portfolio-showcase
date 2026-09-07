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
  { slug: 'webroast', title: 'Web Roast', url: 'https://rajeshkanna-s.github.io/web-roast/' },
  { slug: 'pulseform', title: 'Pulseform Fitness', url: 'https://rajeshkanna-s.github.io/pulseform-fitness/' },
  { slug: 'velorachocolate', title: 'Velora Chocolate', url: 'https://rajeshkanna-s.github.io/velora-chocolate/' },
  { slug: 'solaraatelier', title: 'Solara Atelier', url: 'https://rajeshkanna-s.github.io/solara-atelier/' },
  { slug: 'aurelialuxury', title: 'Aurelia Luxury Estates', url: 'https://rajeshkanna-s.github.io/aurelia-luxury-estates/' },
  { slug: 'tidalveil', title: 'Tidal Veil Skincare', url: 'https://rajeshkanna-s.github.io/tidal-veil-skincare/' },
  { slug: 'rootsole', title: 'Rootsole Footwear', url: 'https://rajeshkanna-s.github.io/rootsole-footwear/' },
  { slug: 'kinroot', title: 'Kinroot Fitness', url: 'https://rajeshkanna-s.github.io/kinroot-fitness/' },
  { slug: 'auranoir', title: 'Aura Noir Perfume', url: 'https://rajeshkanna-s.github.io/aura-noir-perfume/' },
  { slug: 'nocturnedining', title: 'Nocturne Dining', url: 'https://rajeshkanna-s.github.io/nocturne-dining/' },
  { slug: 'gustoitalian', title: 'Gusto Italian', url: 'https://rajeshkanna-s.github.io/gusto-italian/' },
  { slug: 'novasneakers', title: 'Nova Sneakers', url: 'https://rajeshkanna-s.github.io/nova-sneakers/' },
  { slug: 'maisonbraise', title: 'Maison Braise', url: 'https://rajeshkanna-s.github.io/maison-braise/' },
  { slug: 'emberrestaurant', title: 'Ember Restaurant', url: 'https://rajeshkanna-s.github.io/ember-restaurant/' },
  { slug: 'solunacove', title: 'Soluna Cove Resort', url: 'https://rajeshkanna-s.github.io/soluna-cove-resort/' },
  { slug: 'aureliadevelopments', title: 'Aurelia Developments', url: 'https://rajeshkanna-s.github.io/aurelia-developments/' },
  { slug: 'miravale', title: 'Mira Vale Studio', url: 'https://rajeshkanna-s.github.io/mira-vale-studio/' },
];

async function captureSite(site) {
  const jpgPath = path.join(outputDir, `${site.slug}.jpg`);
  const webpPath = path.join(outputDir, `${site.slug}.webp`);

  const providers = [
    // 1. thum.io 1200x800 crop
    `https://image.thum.io/get/width/1200/crop/800/wait/5/noanimate/${site.url}`,
    // 2. thum.io 1280x800
    `https://image.thum.io/get/width/1280/crop/800/wait/6/${site.url}`,
    // 3. microlink screenshot
    `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&waitForTimeout=5000&meta=false&embed=screenshot.url`,
    // 4. wordpress mshots
    `https://s0.wp.com/mshots/v1/${encodeURIComponent(site.url)}?w=1280&h=800`,
  ];

  for (const providerUrl of providers) {
    try {
      console.log(`[TRYING] ${site.title} (${site.slug}) via ${providerUrl.substring(0, 65)}...`);
      const response = await fetch(providerUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        },
        signal: AbortSignal.timeout(40000),
      });

      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        if (buffer.length > 8000) {
          console.log(`[RAW OK] ${site.slug}: downloaded ${buffer.length} bytes`);

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
          console.warn(`[TOO SMALL] ${site.slug}: received only ${buffer.length} bytes`);
        }
      } else {
        console.warn(`[HTTP FAIL] ${response.status} from ${providerUrl.substring(0, 45)}`);
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
  const results = [];
  for (const site of targetSites) {
    const success = await captureSite(site);
    results.push({ slug: site.slug, success });
  }
  
  console.log('\n--- Capture Summary ---');
  let successCount = 0;
  for (const r of results) {
    console.log(`${r.slug}: ${r.success ? 'SUCCESS' : 'FAILED'}`);
    if (r.success) successCount++;
  }
  console.log(`Total: ${successCount}/${targetSites.length} captured successfully.`);
}

run();
