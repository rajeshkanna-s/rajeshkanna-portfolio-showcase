import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../public/screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sites = [
  // Main Projects
  { slug: 'zezha', title: 'Zezha', url: 'https://zezha.in' },
  { slug: 'healthyplates', title: 'HealthyPlates', url: 'https://healthyplates.in' },
  { slug: 'zezhatools', title: 'ZezhaTools', url: 'https://zezhatools.com' },
  { slug: 'zezhatalent', title: 'ZezhaTalent', url: 'https://zezhatalent.in' },
  { slug: 'reportsiq', title: 'ReportsIQ', url: 'https://reportsiq.in' },
  { slug: 'zezhaschool', title: 'ZezhaSchool', url: 'https://zezhaschool.netlify.app/' },

  // Tool Projects
  { slug: 'promptcrafty', title: 'AI Prompt Generator', url: 'https://promptcrafty.netlify.app/' },
  { slug: 'wishcrafty', title: 'Wish Craft', url: 'https://wishcrafty.lovable.app/' },
  { slug: 'smartbible', title: 'AI Explained Smart Bible', url: 'https://smartbible.netlify.app/' },
  { slug: 'aiengineerrdmap', title: 'AI Engineer Roadmap', url: 'https://aiengineerrdmap.netlify.app/' },
  { slug: 'parkingmate', title: 'ParkingMate', url: 'https://parkingmate.netlify.app/' },
  { slug: 'taxcompare', title: 'TAX Calculator Compare', url: 'https://zezhatools.com/taxcompare-calculator' },
  { slug: 'invoicegen', title: 'Invoice Generator', url: 'https://inv-c.netlify.app/' },
  { slug: 'resumebuilder', title: 'Resume Builder', url: 'https://zezhatools.lovable.app/' },
  { slug: 'fitnessadvisor', title: 'AI Fitness Advisor', url: 'https://fitness-advisor.netlify.app/' },
  { slug: 'aifinadvisor', title: 'AI Financial Planner', url: 'https://ai-fin-advisor.netlify.app/' },
  { slug: 'fits5', title: 'Fitness & BMI Tool', url: 'https://fits5.netlify.app/' },
  { slug: 'restobills', title: 'Restaurant Billing App', url: 'https://restobills.netlify.app/' },
  { slug: 'ragsupportsuite', title: 'RAG AI Support Suite', url: 'https://ragsupportsuite.netlify.app/' },
  { slug: 'tamilnadudev', title: 'Tamil Nadu Developer Hub', url: 'https://tamilnadudev.netlify.app/' },
  { slug: 'fintechautomative', title: 'Fintech & Automotive', url: 'https://fintechautomative.netlify.app/' },
  { slug: 'aimarketingengine', title: 'AI Marketing Content Engine', url: 'https://aimarketingengine.netlify.app/' },
  { slug: 'mybiofolio', title: 'Bio & Link Builder', url: 'https://mybiofolio.netlify.app/' },
  { slug: 'exptkr', title: 'Expense Tracker', url: 'https://exptkr.netlify.app/' },
  { slug: 'dfits', title: 'Daily Fitness & Health', url: 'https://dfits.netlify.app/' },
  { slug: 'aiapiss', title: 'AI APIs Explorer', url: 'https://aiapiss.netlify.app/' },

  // Freelance Business Portfolio
  { slug: 'rasmia', title: 'RasMia', url: 'https://rasmia.netlify.app/' },
  { slug: 'tastetableshowcase', title: 'Taste & Table Showcase', url: 'https://rajeshkanna-s.github.io/taste-and-table-showcase/' },
  { slug: 'tastetable', title: 'Taste & Table', url: 'https://tastetable.netlify.app/' },
  { slug: 'lexco', title: 'Lex & Co', url: 'https://lex-co.netlify.app/' },
  { slug: 'brightsmilo', title: 'BrightSmilo', url: 'https://brightsmilo.netlify.app/' },
  { slug: 'pulsefits', title: 'PulseFit', url: 'https://pulse-fits.netlify.app/' },
  { slug: 'homeeserv', title: 'HomeeServ', url: 'https://homeeserv.netlify.app/' },
  { slug: 'theempire', title: 'The Empire', url: 'https://the-empire.netlify.app/' },
  { slug: 'contwriter', title: 'ContentWriter', url: 'https://contwriter.netlify.app/' },
  { slug: 'realestatepj', title: 'Real Estate PJ', url: 'https://realestatepj.netlify.app/' },
  { slug: 'energeticcanvas', title: 'Energetic Canvas', url: 'https://energetic-canvas.netlify.app/' },
  { slug: 'musebeauty', title: 'MuseBeauty', url: 'https://musebeauty.netlify.app/' },
  { slug: 'labellacasa', title: 'La Bella Casa', url: 'https://labellacasa.netlify.app/' },
  { slug: 'lovesconnect', title: 'Loves Connect', url: 'https://loves-connect.netlify.app/' },
  { slug: 'natarajanwoodcarvings', title: 'Natarajan Wood Carvings', url: 'https://natarajanwoodcarvings.in/' },
  { slug: 'flexfitclub', title: 'FlexFit Club', url: 'https://flexfitclub.netlify.app/' },
  { slug: 'norapixel', title: 'NoraPixel', url: 'https://norapixel.netlify.app/' },
  { slug: 'elshaddaiwoods', title: 'El Shaddai Woods', url: 'https://elshaddaiwoods.netlify.app/' },

  // Freelance Professional Portfolio
  { slug: 'alenportfolio', title: 'Alen Portfolio', url: 'https://rajeshkanna-s.github.io/alen-portfolio-website/' },
  { slug: 'netflixportfolio', title: 'Netflix Developer Portfolio', url: 'https://rajeshkanna-s.github.io/netflix-developer-portfolio/' },
  { slug: 'portfolioadv3d', title: 'Advanced 3D Portfolio', url: 'https://rajeshkanna-s.github.io/portfolio-adv-3d/' },
  { slug: 'videodeveloper', title: 'Video Developer Portfolio', url: 'https://rajeshkanna-s.github.io/video-developer-portfolio/' },
  { slug: 'portfolioadvancedpro', title: 'Advanced Pro Portfolio', url: 'https://rajeshkanna-s.github.io/portfolio-advanced-pro/' },
  { slug: 'rushmitha', title: 'Rushmitha Varshini', url: 'https://rushmitha.netlify.app/' },
  { slug: 'keerthanag', title: 'Keerthana G', url: 'https://keerthanag.netlify.app/' },
  { slug: 'miar', title: 'Mia Developer', url: 'https://mia-r.netlify.app/' },
  { slug: 'keerthana-g', title: 'Keerthana G (Interactive)', url: 'https://keerthana-g.netlify.app/' },
  { slug: 'priyadesigner', title: 'Priya Designer', url: 'https://priya-designer.netlify.app/' },
  { slug: 'enscraftstu', title: 'EnsCraft Studio', url: 'https://enscraft-stu.netlify.app/' },
  { slug: 'growthenginestudio', title: 'Growth Engine', url: 'https://growth-engine-studio.netlify.app/' },
  { slug: 'arjunprof', title: 'Arjun Professional', url: 'https://arjunprof.netlify.app/' },
  { slug: 'skillshinerahul', title: 'SkillShine Rahul', url: 'https://skill-shine-rahul.netlify.app/' },
  { slug: 'designerpage', title: 'Designer Page', url: 'https://designerpage.netlify.app/' },
  { slug: 'fronteedeveloper', title: 'Frontee Developer', url: 'https://frontee-developer.netlify.app/' },
  { slug: 'framephotographer', title: 'Frame Photographer', url: 'https://frame-photographer.netlify.app/' },
  { slug: 'devcoder', title: 'DevCoder', url: 'https://devcoder.netlify.app/' },

  // Freelance Tool Projects
  { slug: 'woodcalc', title: 'WoodCalc', url: 'https://woodcalc.netlify.app/' },
];

async function downloadScreenshot(site) {
  const filePath = path.join(outputDir, `${site.slug}.jpg`);
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 5000) {
    console.log(`[SKIP] ${site.slug}.jpg already exists (${fs.statSync(filePath).size} bytes)`);
    return true;
  }

  // List of high-speed snapshot providers to try
  const providers = [
    `https://image.thum.io/get/width/1200/crop/800/noanimate/${site.url}`,
    `https://api.microlink.io/?url=${encodeURIComponent(site.url)}&screenshot=true&meta=false&embed=screenshot.url`,
  ];

  for (const providerUrl of providers) {
    try {
      console.log(`[FETCHING] ${site.title} (${site.slug}) via ${providerUrl.substring(0, 30)}...`);
      const response = await fetch(providerUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        signal: AbortSignal.timeout(25000),
      });

      if (response.ok) {
        const buffer = Buffer.from(await response.arrayBuffer());
        if (buffer.length > 5000) {
          fs.writeFileSync(filePath, buffer);
          console.log(`[SUCCESS] Saved ${site.slug}.jpg (${Math.round(buffer.length / 1024)} KB)`);
          return true;
        }
      }
    } catch (err) {
      console.warn(`[RETRY] Failed with provider: ${err.message}`);
    }
  }

  console.error(`[FAILED] Could not download screenshot for ${site.slug} (${site.url})`);
  return false;
}

async function run() {
  console.log(`Starting capture for ${sites.length} sites...`);
  // Process in batches of 4 for speed
  const concurrency = 4;
  for (let i = 0; i < sites.length; i += concurrency) {
    const batch = sites.slice(i, i + concurrency);
    await Promise.all(batch.map((site) => downloadScreenshot(site)));
  }
  console.log('All screenshots processing finished!');
}

run();
