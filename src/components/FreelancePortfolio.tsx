import {
  ExternalLink,
  Briefcase,
  User,
  Wrench,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  title: string;
  industry: string;
  url: string;
  image: string;
  color: string;
}

const FreelancePortfolio = () => {
  const businessProjects: PortfolioItem[] = [
    { title: 'Taste & Table', industry: 'Café & Restaurant', url: 'https://tastetable.netlify.app/', image: '/screenshots/tastetable.webp', color: 'from-orange-500 to-red-500' },
    { title: 'Lex & Co', industry: 'Law Firm', url: 'https://lex-co.netlify.app/', image: '/screenshots/lexco.webp', color: 'from-slate-600 to-slate-800' },
    { title: 'BrightSmilo', industry: 'Dental Clinic', url: 'https://brightsmilo.netlify.app/', image: '/screenshots/brightsmilo.webp', color: 'from-cyan-500 to-blue-600' },
    { title: 'PulseFit', industry: 'Gym & Fitness', url: 'https://pulse-fits.netlify.app/', image: '/screenshots/pulsefits.webp', color: 'from-red-500 to-pink-600' },
    { title: 'HomeeServ', industry: 'Home Services', url: 'https://homeeserv.netlify.app/', image: '/screenshots/homeeserv.webp', color: 'from-green-500 to-emerald-600' },
    { title: 'The Empire', industry: 'Real Estate', url: 'https://the-empire.netlify.app/', image: '/screenshots/theempire.webp', color: 'from-amber-500 to-yellow-600' },
    { title: 'ContentWriter', industry: 'Content Agency', url: 'https://contwriter.netlify.app/', image: '/screenshots/contwriter.webp', color: 'from-violet-500 to-purple-600' },
    { title: 'Real Estate PJ', industry: 'Real Estate', url: 'https://realestatepj.netlify.app/', image: '/screenshots/realestatepj.webp', color: 'from-emerald-500 to-teal-600' },
    { title: 'Energetic Canvas', industry: 'Creative Studio', url: 'https://energetic-canvas.netlify.app/', image: '/screenshots/energeticcanvas.webp', color: 'from-pink-500 to-fuchsia-600' },
    { title: 'MuseBeauty', industry: 'Beauty Salon', url: 'https://musebeauty.netlify.app/', image: '/screenshots/musebeauty.webp', color: 'from-rose-400 to-pink-600' },
    { title: 'La Bella Casa', industry: 'Interior Design', url: 'https://labellacasa.netlify.app/', image: '/screenshots/labellacasa.webp', color: 'from-yellow-500 to-amber-600' },
    { title: 'Loves Connect', industry: 'Matchmaking', url: 'https://loves-connect.netlify.app/', image: '/screenshots/lovesconnect.webp', color: 'from-red-400 to-rose-600' },
    { title: 'Natarajan Wood Carvings', industry: 'Traditional Wooden Art', url: 'https://natarajanwoodcarvings.in/', image: '/screenshots/natarajanwoodcarvings.webp', color: 'from-amber-700 to-orange-900' },
    { title: 'FlexFit Club', industry: 'Premium Gym & Fitness', url: 'https://flexfitclub.netlify.app/', image: '/screenshots/flexfitclub.webp', color: 'from-zinc-700 to-slate-900' },
    { title: 'NoraPixel', industry: 'Creative Agency', url: 'https://norapixel.netlify.app/', image: '/screenshots/norapixel.webp', color: 'from-violet-600 to-indigo-700' },
    { title: 'El Shaddai Woods', industry: 'Wooden Doors & Windows', url: 'https://elshaddaiwoods.netlify.app/', image: '/screenshots/elshaddaiwoods.webp', color: 'from-amber-600 to-yellow-800' },
  ];

  const professionalProjects: PortfolioItem[] = [
    { title: 'Priya Designer', industry: 'Graphic Designer', url: 'https://priya-designer.netlify.app/', image: '/screenshots/priyadesigner.webp', color: 'from-pink-500 to-purple-600' },
    { title: 'EnsCraft Studio', industry: 'Creative Studio', url: 'https://enscraft-stu.netlify.app/', image: '/screenshots/enscraftstu.webp', color: 'from-indigo-500 to-blue-600' },
    { title: 'Growth Engine', industry: 'Business Consultant', url: 'https://growth-engine-studio.netlify.app/', image: '/screenshots/growthenginestudio.webp', color: 'from-green-500 to-teal-600' },
    { title: 'Arjun Professional', industry: 'Executive Portfolio', url: 'https://arjunprof.netlify.app/', image: '/screenshots/arjunprof.webp', color: 'from-blue-500 to-cyan-600' },
    { title: 'SkillShine Rahul', industry: 'Student Portfolio', url: 'https://skill-shine-rahul.netlify.app/', image: '/screenshots/skillshinerahul.webp', color: 'from-amber-500 to-orange-600' },
    { title: 'Designer Page', industry: 'UX/UI Designer', url: 'https://designerpage.netlify.app/', image: '/screenshots/designerpage.webp', color: 'from-rose-500 to-red-600' },
    { title: 'Frontee Developer', industry: 'Web Developer', url: 'https://frontee-developer.netlify.app/', image: '/screenshots/fronteedeveloper.webp', color: 'from-cyan-500 to-blue-600' },
    { title: 'Frame Photographer', industry: 'Photographer', url: 'https://frame-photographer.netlify.app/', image: '/screenshots/framephotographer.webp', color: 'from-slate-600 to-slate-800' },
    { title: 'DevCoder', industry: 'Software Developer', url: 'https://devcoder.netlify.app/', image: '/screenshots/devcoder.webp', color: 'from-emerald-500 to-green-700' },
  ];

  const toolProjects: PortfolioItem[] = [
    { title: 'Expense Tracker', industry: 'Finance Tool', url: 'https://exptkr.netlify.app/', image: '/screenshots/exptkr.webp', color: 'from-green-500 to-emerald-600' },
    { title: 'RestoBills', industry: 'Restaurant Billing', url: 'https://restobills.netlify.app/', image: '/screenshots/restobills.webp', color: 'from-orange-500 to-red-600' },
    { title: 'WoodCalc', industry: 'Wooden Box Calculator', url: 'https://woodcalc.netlify.app/', image: '/screenshots/woodcalc.webp', color: 'from-amber-700 to-orange-700' },
  ];

  const ProjectCard = ({ project }: { project: PortfolioItem }) => {
    const displayUrl = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    return (
      <Card
        onClick={() => window.open(project.url, '_blank')}
        className="glass-card hover-lift group overflow-hidden flex flex-col border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg bg-card cursor-pointer"
      >
        {/* Browser Window Header */}
        <div className="bg-slate-900 px-3 py-2 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span className="text-[11px] font-mono text-slate-400 truncate max-w-[130px]">
            {displayUrl}
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>

        {/* Real Website Snapshot Visual */}
        <div className="relative w-full h-[170px] overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>

          {/* Hover Visit Link Overlay */}
          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px] z-10">
            <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <ExternalLink className="w-3.5 h-3.5" />
              Visit Website
            </span>
          </div>

          {/* Industry Badge */}
          <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
            <span className="px-2 py-0.5 bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-semibold rounded-full border border-white/20 shadow-sm">
              {project.industry}
            </span>
          </div>
        </div>

        {/* Card Content & Action Button */}
        <CardContent className="p-4 flex flex-col flex-1 justify-between space-y-3">
          <div>
            <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h4>
            <p className="text-muted-foreground text-xs mt-0.5 font-medium">{project.industry}</p>
          </div>

          <div className="pt-1">
            <Button
              variant="default"
              size="sm"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-semibold text-xs h-8 gap-1.5 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.url, '_blank');
              }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Site
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  const SectionHeader = ({
    icon: Icon,
    title,
    subtitle,
    count,
  }: {
    icon: typeof Briefcase;
    title: string;
    subtitle: string;
    count: number;
  }) => (
    <div className="flex items-center justify-between mb-6 pb-2 border-b border-border/60">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-gradient-primary rounded-xl shadow-sm">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground hidden sm:block">{subtitle}</p>
        </div>
      </div>
      <span className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-bold rounded-full">
        {count} Sites
      </span>
    </div>
  );

  return (
    <section
      id="freelance-portfolio"
      className="section-padding bg-gradient-to-b from-background via-accent/10 to-background"
    >
      <div className="section-container max-w-[1400px]">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
            My Freelance Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Websites I've Built for Clients
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            30+ premium websites delivered to businesses and professionals across India
          </p>
        </div>

        {/* ===== Business Portfolio ===== */}
        <div className="mb-14">
          <SectionHeader
            icon={Briefcase}
            title="Business Portfolio"
            subtitle="Custom websites for restaurants, dental clinics, gyms, real estate, and services"
            count={businessProjects.length}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {businessProjects.map((project, index) => (
              <ProjectCard key={`biz-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* ===== Professional Portfolio ===== */}
        <div className="mb-14">
          <SectionHeader
            icon={User}
            title="Professional Portfolio"
            subtitle="Personal portfolios for designers, consultants, photographers, and engineers"
            count={professionalProjects.length}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={`prof-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* ===== Business Tools ===== */}
        <div className="mb-12">
          <SectionHeader
            icon={Wrench}
            title="Business Tools & Calculators"
            subtitle="Custom web tools, billing software, and specialized calculation engines"
            count={toolProjects.length}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {toolProjects.map((project, index) => (
              <ProjectCard key={`tool-${index}`} project={project} />
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-8 sm:mt-12">
          <Card className="glass-card border border-border/80 shadow-md">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">30+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">Websites Delivered</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">15+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">Industries Covered</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">2-5</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">Days Turnaround</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">100%</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FreelancePortfolio;
