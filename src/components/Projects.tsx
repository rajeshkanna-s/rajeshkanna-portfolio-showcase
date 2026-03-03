import { ExternalLink, Globe, Calculator, Rocket } from 'lucide-react';
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
      url: null, // Coming Soon
      color: 'from-pink-500 to-rose-600',
      comingSoon: true,
    },
  ];

  const toolProjects = [
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
      title: 'EMI Calculator',
      description: 'A comprehensive EMI calculation tool for loans and mortgages with advanced features for financial planning.',
      image: '/lovable-uploads/loancalc.png',
      technologies: ['TypeScript', 'HTML5', 'CSS3', 'Financial Algorithms'],
      url: 'https://zezhatools.com/loan-calculator',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-1.5 bg-pink-100 dark:bg-pink-800/50 text-pink-600 dark:text-pink-300 text-sm font-semibold rounded-full mb-4">
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
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
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
                  <div className="text-3xl font-bold text-gradient mb-2">20+</div>
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
