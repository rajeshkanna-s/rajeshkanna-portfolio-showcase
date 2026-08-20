import {
  ExternalLink,
  Globe,
  Calculator,
  Wand2,
  Gift,
  BookOpen,
  Map,
  Dumbbell,
  TrendingUp,
  Scale,
  Receipt,
  Cpu,
  Users,
  Car,
  Megaphone,
  Link,
  PiggyBank,
  Heart,
  Terminal,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MainProject {
  title: string;
  description: string;
  url: string;
  image: string;
  color: string;
}

interface ToolProject {
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
  color: string;
  icon: any;
}

const Projects = () => {
  const mainProjects: MainProject[] = [
    {
      title: 'Zezha',
      description: 'A comprehensive digital platform offering modern solutions for businesses and individuals.',
      url: 'https://zezha.in',
      image: '/screenshots/zezha.webp',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'HealthyPlates',
      description: 'A healthy eating platform helping users discover nutritious recipes and meal plans for a healthier lifestyle.',
      url: 'https://healthyplates.in',
      image: '/screenshots/healthyplates.webp',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'ZezhaTools',
      description: 'A comprehensive web platform featuring multiple utility tools and calculators for various business and personal needs.',
      url: 'https://zezhatools.com',
      image: '/screenshots/zezhatools.webp',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'ZezhaTalent',
      description: 'A talent discovery and recruitment platform connecting skilled professionals with the right opportunities.',
      url: 'https://zezhatalent.in',
      image: '/screenshots/zezhatalent.webp',
      color: 'from-orange-500 to-amber-600',
    },
    {
      title: 'ReportsIQ',
      description: 'An intelligent reporting and analytics platform for data-driven business insights and decision making.',
      url: 'https://reportsiq.in',
      image: '/screenshots/reportsiq.webp',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'ZezhaSchool',
      description: 'An innovative educational platform designed to make learning accessible and engaging for students.',
      url: 'https://zezhaschool.netlify.app/',
      image: '/screenshots/zezhaschool.webp',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const toolProjects: ToolProject[] = [
    {
      title: 'AI Prompt Generator',
      description: 'Advanced prompt engineering helper generating optimized prompts for ChatGPT, Midjourney, and Claude.',
      url: 'https://promptcrafty.netlify.app/',
      image: '/screenshots/promptcrafty.webp',
      technologies: ['React', 'Prompt Engineering', 'AI APIs'],
      color: 'from-violet-600 to-blue-600',
      icon: Wand2,
    },
    {
      title: 'Wish Craft',
      description: 'AI-enabled digital invitation card creator for weddings, birthdays, and corporate events.',
      url: 'https://wishcrafty.lovable.app/',
      image: '/screenshots/wishcrafty.webp',
      technologies: ['React', 'Canvas API', 'Image Generation'],
      color: 'from-pink-500 to-purple-600',
      icon: Gift,
    },
    {
      title: 'AI Explained Smart Bible',
      description: 'AI-powered scripture reading platform offering dynamic context, translations, and explanations.',
      url: 'https://smartbible.netlify.app/',
      image: '/screenshots/smartbible.webp',
      technologies: ['React', 'Bible APIs', 'Gemini API'],
      color: 'from-amber-600 to-yellow-700',
      icon: BookOpen,
    },
    {
      title: 'AI Engineer Roadmap',
      description: 'Interactive visual roadmap detailing learning pathways and resources to become an AI Engineer.',
      url: 'https://aiengineerrdmap.netlify.app/',
      image: '/screenshots/aiengineerrdmap.webp',
      technologies: ['React', 'Mermaid.js', 'Tailwind CSS', 'PWA'],
      color: 'from-blue-600 to-cyan-500',
      icon: Map,
    },
    {
      title: 'ParkingMate',
      description: 'A smart parking management system that helps users find and book parking spaces efficiently with real-time tracking.',
      url: 'https://parkingmate.netlify.app/',
      image: '/screenshots/parkingmate.webp',
      technologies: ['React', 'Node.js', 'Supabase', 'Real-time APIs'],
      color: 'from-blue-500 to-indigo-600',
      icon: Globe,
    },
    {
      title: 'TAX Calculator Compare',
      description: 'A collection of specialized calculators including scientific, financial, and statistical calculation tools.',
      url: 'https://zezhatools.com/taxcompare-calculator',
      image: '/screenshots/taxcompare.webp',
      technologies: ['TypeScript', 'Math Libs', 'Responsive UI', 'PWA'],
      color: 'from-teal-500 to-emerald-600',
      icon: Calculator,
    },
    {
      title: 'Invoice Generator',
      description: 'Create beautiful invoices in seconds with a professional, easy-to-use invoice creation tool.',
      url: 'https://inv-c.netlify.app/',
      image: '/screenshots/invoicegen.webp',
      technologies: ['TypeScript', 'PDF Generation', 'Responsive Design'],
      color: 'from-emerald-500 to-teal-600',
      icon: Receipt,
    },
    {
      title: 'Resume Builder',
      description: 'Create your perfect resume in minutes with professionally designed templates and easy customization.',
      url: 'https://zezhatools.lovable.app/',
      image: '/screenshots/resumebuilder.webp',
      technologies: ['TypeScript', 'JSON Processing', 'Web APIs'],
      color: 'from-indigo-500 to-purple-600',
      icon: Globe,
    },
    {
      title: 'AI Fitness Advisor',
      description: 'Personalized AI-powered fitness and workout planning assistant tailored to individual user goals.',
      url: 'https://fitness-advisor.netlify.app/',
      image: '/screenshots/fitnessadvisor.webp',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI APIs'],
      color: 'from-emerald-500 to-teal-600',
      icon: Dumbbell,
    },
    {
      title: 'AI Financial Planner',
      description: 'Intelligent budgeting, investment suggestion, and financial planning advisor driven by AI.',
      url: 'https://ai-fin-advisor.netlify.app/',
      image: '/screenshots/aifinadvisor.webp',
      technologies: ['React', 'FinTech APIs', 'Gemini API', 'Recharts'],
      color: 'from-green-600 to-emerald-700',
      icon: TrendingUp,
    },
    {
      title: 'Fitness & BMI Tool',
      description: 'An advanced calculator for BMI, body fat percentage, daily calorie needs, and health metrics.',
      url: 'https://fits5.netlify.app/',
      image: '/screenshots/fits5.webp',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
      color: 'from-teal-400 to-cyan-600',
      icon: Scale,
    },
    {
      title: 'Restaurant Billing App',
      description: 'Streamlined billing, table management, and digital invoice generation platform for restaurants.',
      url: 'https://restobills.netlify.app/',
      image: '/screenshots/restobills.webp',
      technologies: ['React', 'Vite', 'LocalStorage', 'PDF Export'],
      color: 'from-orange-500 to-amber-600',
      icon: Receipt,
    },
    {
      title: 'RAG AI Support Suite',
      description: 'Retrieval-Augmented Generation chatbot system for smart customer support and document analysis.',
      url: 'https://ragsupportsuite.netlify.app/',
      image: '/screenshots/ragsupportsuite.webp',
      technologies: ['React', 'Node.js', 'Vector DB', 'LangChain'],
      color: 'from-indigo-600 to-purple-700',
      icon: Cpu,
    },
    {
      title: 'Tamil Nadu Developer Hub',
      description: 'Community hub and platform connecting developers across Tamil Nadu for collaboration and jobs.',
      url: 'https://tamilnadudev.netlify.app/',
      image: '/screenshots/tamilnadudev.webp',
      technologies: ['React', 'Community APIs', 'Tailwind CSS'],
      color: 'from-red-500 to-orange-600',
      icon: Users,
    },
    {
      title: 'Fintech & Automotive',
      description: 'Integrated platform offering automotive financing calculator and vehicle management solutions.',
      url: 'https://fintechautomative.netlify.app/',
      image: '/screenshots/fintechautomative.webp',
      technologies: ['React', 'FinTech APIs', 'Custom Algorithms'],
      color: 'from-slate-700 to-slate-900',
      icon: Car,
    },
    {
      title: 'AI Marketing Content Engine',
      description: 'Generative AI tool for automated copywriting, social media post creation, and marketing campaigns.',
      url: 'https://aimarketingengine.netlify.app/',
      image: '/screenshots/aimarketingengine.webp',
      technologies: ['React', 'OpenAI API', 'Clipboard API'],
      color: 'from-rose-500 to-pink-600',
      icon: Megaphone,
    },
    {
      title: 'Bio & Link Builder',
      description: 'Create highly customizable personal bio landing pages with links, social media integration, and analytics.',
      url: 'https://mybiofolio.netlify.app/',
      image: '/screenshots/mybiofolio.webp',
      technologies: ['React', 'Supabase', 'Drag & Drop', 'Analytics'],
      color: 'from-violet-500 to-fuchsia-600',
      icon: Link,
    },
    {
      title: 'Expense Tracker',
      description: 'Simple, elegant, and secure daily expense tracker with category-wise analysis and visual graphs.',
      url: 'https://exptkr.netlify.app/',
      image: '/screenshots/exptkr.webp',
      technologies: ['React', 'Recharts', 'LocalStorage'],
      color: 'from-red-400 to-rose-600',
      icon: PiggyBank,
    },
    {
      title: 'Daily Fitness & Health',
      description: 'Comprehensive suite of daily workout trackers, water intake logs, and macronutrient calculators.',
      url: 'https://dfits.netlify.app/',
      image: '/screenshots/dfits.webp',
      technologies: ['React', 'Tailwind CSS', 'Charts'],
      color: 'from-emerald-400 to-green-600',
      icon: Heart,
    },
    {
      title: 'AI APIs Explorer',
      description: 'Interactive playground for developers to test and integrate various artificial intelligence APIs.',
      url: 'https://aiapiss.netlify.app/',
      image: '/screenshots/aiapiss.webp',
      technologies: ['React', 'Monaco Editor', 'REST Clients'],
      color: 'from-indigo-500 to-indigo-800',
      icon: Terminal,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
            My Products
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Platforms and applications I've built to solve real-world problems
          </p>
        </div>

        {/* ===== Main Projects Section ===== */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-gradient-primary rounded-xl shadow-sm">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">My Platforms</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Full-scale web applications & digital platforms
              </p>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full ml-auto sm:ml-0">
              {mainProjects.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {mainProjects.map((project, index) => {
              const displayUrl = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
              return (
                <Card
                  key={index}
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
                  <div className="relative w-full h-[190px] overflow-hidden bg-slate-950">
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

                    {/* Live Badge */}
                    <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
                      <span className="px-2 py-0.5 bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-semibold rounded-full border border-white/20 flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Action Button */}
                  <CardContent className="p-4 flex flex-col flex-1 justify-between space-y-3">
                    <div>
                      <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
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
                        Visit Site
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* ===== Tool Projects Section ===== */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-gradient-primary rounded-xl shadow-sm">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Tools & Utilities</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Productivity apps, calculators, and AI assistants
              </p>
            </div>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full ml-auto sm:ml-0">
              {toolProjects.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {toolProjects.map((project, index) => {
              const displayUrl = project.url.replace(/^https?:\/\//, '').replace(/\/$/, '');

              return (
                <Card
                  key={index}
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
                        Open Live Tool
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-2.5 right-2.5 z-20 pointer-events-none">
                      <span className="px-2 py-0.5 bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-semibold rounded-full border border-white/20 flex items-center gap-1 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Action Button */}
                  <CardContent className="p-4 flex flex-col flex-1 justify-between space-y-3">
                    <div className="space-y-2">
                      <h4 className="font-bold text-foreground text-base group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 bg-muted text-muted-foreground text-[10px] font-medium rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
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
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Project Stats Banner */}
        <div className="mt-12 sm:mt-16">
          <Card className="glass-card border border-border/80 shadow-md">
            <CardContent className="p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">50+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">
                    Active Platforms & Tools
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">500K+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">
                    Lines of Code
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">15+</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">
                    Modern Tech Frameworks
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">100%</div>
                  <div className="text-muted-foreground text-xs sm:text-sm font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
