import {
  ExternalLink, Globe, Calculator, Rocket, Dumbbell, TrendingUp, Scale, Receipt, Cpu, Map, Users,
  Car, Megaphone, Link, PiggyBank, Heart, Terminal, BookOpen, Wand2, Gift
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const mainProjects = [
    {
      title: 'Zezha',
      description: 'A comprehensive digital platform offering modern solutions for businesses and individuals.',
      url: 'https://zezha.in',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'HealthyPlates',
      description: 'A healthy eating platform helping users discover nutritious recipes and meal plans for a healthier lifestyle.',
      url: 'https://healthyplates.in',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'ZezhaTools',
      description: 'A comprehensive web platform featuring multiple utility tools and calculators for various business and personal needs.',
      url: 'https://zezhatools.com',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'ZezhaTalent',
      description: 'A talent discovery and recruitment platform connecting skilled professionals with the right opportunities.',
      url: 'https://zezhatalent.in',
      color: 'from-orange-500 to-amber-600',
    },
    {
      title: 'ReportsIQ',
      description: 'An intelligent reporting and analytics platform for data-driven business insights and decision making.',
      url: 'https://reportsiq.in',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'ZezhaSchool',
      description: 'An innovative educational platform designed to make learning accessible and engaging for students.',
      url: 'https://zezhaschool.netlify.app/',
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const toolProjects = [
    {
      title: 'AI Prompt Generator',
      description: 'Advanced prompt engineering helper generating optimized prompts for ChatGPT, Midjourney, and Claude.',
      url: 'https://promptcrafty.netlify.app/',
      technologies: ['React', 'Prompt Engineering Models', 'Copy APIs'],
      color: 'from-violet-600 to-blue-600',
      icon: Wand2,
    },
    {
      title: 'Wish Craft',
      description: 'AI-enabled digital invitation card creator for weddings, birthdays, and corporate events.',
      url: 'https://wishcrafty.lovable.app/',
      technologies: ['React', 'Canvas API', 'Image Generation'],
      color: 'from-pink-500 to-purple-600',
      icon: Gift,
    },
    {
      title: 'AI Explained Smart Bible',
      description: 'AI-powered scripture reading platform offering dynamic context, translations, and explanations.',
      url: 'https://smartbible.netlify.app/',
      technologies: ['React', 'Bible APIs', 'Gemini API'],
      color: 'from-amber-600 to-yellow-700',
      icon: BookOpen,
    },
    {
      title: 'AI Engineer Roadmap',
      description: 'Interactive visual roadmap detailing learning pathways and resources to become an AI Engineer.',
      url: 'https://aiengineerrdmap.netlify.app/',
      technologies: ['React', 'Mermaid.js', 'Tailwind CSS', 'PWA'],
      color: 'from-blue-600 to-cyan-500',
      icon: Map,
    },
    {
      title: 'ParkingMate',
      description: 'A smart parking management system that helps users find and book parking spaces efficiently with real-time availability tracking.',
      image: '/lovable-uploads/parkingmate.png',
      technologies: ['React', 'Node.js', 'Supabase', 'Real-time APIs'],
      url: 'https://parkingmate.netlify.app/',
    },
    {
      title: 'TAX Calculator Compare',
      description: 'A collection of specialized calculators including scientific, financial, and statistical calculation tools.',
      image: '/lovable-uploads/taxcompare.png',
      technologies: ['TypeScript', 'Mathematical Libraries', 'Responsive Design', 'PWA'],
      url: 'https://zezhatools.com/taxcompare-calculator',
    },
    {
      title: 'Invoice Generator',
      description: 'Create beautiful invoices in seconds with a professional, easy-to-use invoice creation tool.',
      image: '/lovable-uploads/invoicegen.png',
      technologies: ['TypeScript', 'PDF Generation', 'Responsive Design'],
      url: 'https://myinv.lovable.app/',
    },
    {
      title: 'Resume Builder',
      description: 'Create your perfect resume in minutes with professionally designed templates and easy customization.',
      image: '/lovable-uploads/resumebuilder.png',
      technologies: ['TypeScript', 'JSON Processing', 'Web APIs'],
      url: 'https://zezhatools.lovable.app/',
    },
    {
      title: 'AI Fitness Advisor',
      description: 'Personalized AI-powered fitness and workout planning assistant tailored to individual user goals.',
      url: 'https://fitness-advisor.netlify.app/',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AI APIs'],
      color: 'from-emerald-500 to-teal-600',
      icon: Dumbbell,
    },
    {
      title: 'AI Financial Planner',
      description: 'Intelligent budgeting, investment suggestion, and financial planning advisor driven by AI.',
      url: 'https://ai-fin-advisor.netlify.app/',
      technologies: ['React', 'FinTech APIs', 'Gemini API', 'Recharts'],
      color: 'from-green-600 to-emerald-700',
      icon: TrendingUp,
    },
    {
      title: 'Fitness & BMI Tool',
      description: 'An advanced calculator for BMI, body fat percentage, daily calorie needs, and health metrics.',
      url: 'https://fits5.netlify.app/',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
      color: 'from-teal-400 to-cyan-600',
      icon: Scale,
    },
    {
      title: 'Restaurant Billing App',
      description: 'Streamlined billing, table management, and digital invoice generation platform for restaurants.',
      url: 'https://restobills.netlify.app/',
      technologies: ['React', 'Vite', 'LocalStorage', 'PDF Export'],
      color: 'from-orange-500 to-amber-600',
      icon: Receipt,
    },
    {
      title: 'RAG AI Support Suite',
      description: 'Retrieval-Augmented Generation chatbot system for smart customer support and document analysis.',
      url: 'https://ragsupportsuite.netlify.app/',
      technologies: ['React', 'Node.js', 'Vector DB', 'LangChain'],
      color: 'from-indigo-600 to-purple-700',
      icon: Cpu,
    },
    {
      title: 'Tamil Nadu Developer Hub',
      description: 'Community hub and platform connecting developers across Tamil Nadu for collaboration and jobs.',
      url: 'https://tamilnadudev.netlify.app/',
      technologies: ['React', 'Community APIs', 'Tailwind CSS'],
      color: 'from-red-500 to-orange-600',
      icon: Users,
    },
    {
      title: 'Fintech & Automotive',
      description: 'Integrated platform offering automotive financing calculator and vehicle management solutions.',
      url: 'https://fintechautomative.netlify.app/',
      technologies: ['React', 'FinTech APIs', 'Custom Algorithms'],
      color: 'from-slate-700 to-slate-900',
      icon: Car,
    },
    {
      title: 'AI Marketing Content Engine',
      description: 'Generative AI tool for automated copywriting, social media post creation, and marketing campaigns.',
      url: 'https://aimarketingengine.netlify.app/',
      technologies: ['React', 'OpenAI API', 'Copy-to-Clipboard API'],
      color: 'from-rose-500 to-pink-600',
      icon: Megaphone,
    },
    {
      title: 'Bio & Link Builder',
      description: 'Create highly customizable personal bio landing pages with links, social media integration, and analytics.',
      url: 'https://mybiofolio.netlify.app/',
      technologies: ['React', 'Supabase', 'Drag-and-Drop UI', 'Analytics'],
      color: 'from-violet-500 to-fuchsia-600',
      icon: Link,
    },
    {
      title: 'Expense Tracker',
      description: 'Simple, elegant, and secure daily expense tracker with category-wise analysis and visual graphs.',
      url: 'https://exptkr.netlify.app/',
      technologies: ['React', 'Recharts', 'LocalStorage'],
      color: 'from-red-400 to-rose-600',
      icon: PiggyBank,
    },
    {
      title: 'Daily Fitness & Health',
      description: 'Comprehensive suite of daily workout trackers, water intake logs, and macronutrient calculators.',
      url: 'https://dfits.netlify.app/',
      technologies: ['React', 'Tailwind CSS', 'Charts'],
      color: 'from-emerald-400 to-green-600',
      icon: Heart,
    },
    {
      title: 'AI APIs Explorer',
      description: 'Interactive playground for developers to test and integrate various artificial intelligence APIs.',
      url: 'https://aiapiss.netlify.app/',
      technologies: ['React', 'Monaco Editor', 'REST Clients'],
      color: 'from-indigo-500 to-indigo-800',
      icon: Terminal,
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
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

        {/* ===== Main Projects with Iframe Previews ===== */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-gradient-primary rounded-xl">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">My Platforms</h3>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">{mainProjects.length}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {mainProjects.map((project, index) => (
              <Card
                key={index}
                className={`glass-card hover-lift group overflow-hidden ${project.comingSoon ? '' : 'cursor-pointer'}`}
                onClick={() => !project.comingSoon && project.url && window.open(project.url, '_blank')}
              >
                {/* Live Preview or Coming Soon */}
                <div
                  className="relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800"
                  style={{ height: '320px' }}
                >
                  {project.comingSoon ? (
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex flex-col items-center justify-center`}>
                      <Rocket className="h-16 w-16 text-white/80 mb-4 animate-bounce" />
                      <span className="text-white text-2xl font-bold">Coming Soon</span>
                      <span className="text-white/70 text-sm mt-2">Currently in Development</span>
                    </div>
                  ) : (
                    <>
                      <iframe
                        src={project.url!}
                        title={project.title}
                        className="absolute top-0 left-0 border-0 pointer-events-none"
                        style={{
                          width: '1280px',
                          height: '900px',
                          transform: 'scale(0.45)',
                          transformOrigin: 'top left',
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300 z-10"></div>
                    </>
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span className={`px-3 py-1.5 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
                      {project.comingSoon ? '🚧 Developing' : '🌐 Live'}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-3">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{project.description}</p>
                    </div>
                    {!project.comingSoon && project.url && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-primary hover:text-white transition-all font-semibold flex-shrink-0"
                        onClick={(e) => { e.stopPropagation(); window.open(project.url!, '_blank'); }}
                      >
                        <ExternalLink className="h-4 w-4 mr-1.5" />
                        Visit
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ===== Tool Projects ===== */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-gradient-primary rounded-xl">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Tools & Utilities</h3>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">{toolProjects.length}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {toolProjects.map((project, index) => (
              <Card key={index} className="glass-card hover-lift group overflow-hidden cursor-pointer"
                onClick={() => window.open(project.url, '_blank')}
              >
                {/* Project Live Preview or Image */}
                <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800" style={{ height: '220px' }}>
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                    </>
                  ) : (
                    <>
                      {/* Gradient & Icon background fallback shown while iframe loads */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color || 'from-blue-500 to-indigo-600'} flex flex-col items-center justify-center p-6 text-center text-white opacity-40`}>
                        {project.icon ? (
                          <project.icon className="h-12 w-12 text-white/95 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <Globe className="h-12 w-12 text-white/95 mb-3 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        <span className="font-bold text-sm tracking-wider uppercase opacity-90">{project.title}</span>
                      </div>

                      {/* Live Iframe Preview */}
                      {project.url && (
                        <iframe
                          src={project.url}
                          title={project.title}
                          className="absolute top-0 left-0 border-0 pointer-events-none w-full h-full z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            width: '1280px',
                            height: '900px',
                            transform: 'scale(0.42)',
                            transformOrigin: 'top left',
                          }}
                          loading="lazy"
                          sandbox="allow-scripts allow-same-origin"
                        />
                      )}
                      
                      {/* Overlay to intercept hover events and show overlay */}
                      <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-all duration-300 z-20"></div>
                    </>
                  )}
                </div>

                <CardContent className="p-4 sm:p-5 space-y-3">
                  <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-white transition-all font-semibold"
                      onClick={(e) => { e.stopPropagation(); window.open(project.url, '_blank'); }}
                    >
                      <ExternalLink className="h-4 w-4 mr-1.5" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="mt-10 sm:mt-16">
          <Card className="glass-card">
            <CardContent className="p-4 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-muted-foreground">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">500K+</div>
                  <div className="text-muted-foreground">Lines of Code</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                  <div className="text-muted-foreground">Technologies Used</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
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
