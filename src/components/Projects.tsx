import { ExternalLink, Github, Code2, Globe, Calculator, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'AI Text Bot',
      description: 'An intelligent chatbot application built with modern AI technologies for natural language processing and conversation management.',
      image: '/lovable-uploads/db9da8b4-1c70-4135-838e-f26e313b4406.png',
      technologies: ['JavaScript', 'AI/ML', 'Natural Language Processing', 'REST APIs'],
      category: 'AI & Machine Learning',
      links: {
        live: '#',
        github: 'https://github.com/rajeshkanna-s'
      },
      icon: Bot
    },
    {
      title: 'EMI Calculator',
      description: 'A comprehensive EMI calculation tool for loans and mortgages with advanced features for financial planning and analysis.',
      image: '/lovable-uploads/db9da8b4-1c70-4135-838e-f26e313b4406.png',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Financial Algorithms'],
      category: 'Financial Tools',
      links: {
        live: '#',
        github: 'https://github.com/rajeshkanna-s'
      },
      icon: Calculator
    },
    {
      title: 'JSON Viewer',
      description: 'A powerful JSON visualization and formatting tool with syntax highlighting, validation, and tree view capabilities.',
      image: '/lovable-uploads/db9da8b4-1c70-4135-838e-f26e313b4406.png',
      technologies: ['JavaScript', 'JSON Processing', 'Web APIs', 'Data Visualization'],
      category: 'Developer Tools',
      links: {
        live: '#',
        github: 'https://github.com/rajeshkanna-s'
      },
      icon: Code2
    },
    {
      title: 'ZezhaTools Web Platform',
      description: 'A comprehensive web platform featuring multiple utility tools and calculators for various business and personal needs.',
      image: '/lovable-uploads/db9da8b4-1c70-4135-838e-f26e313b4406.png',
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs'],
      category: 'Full-Stack Development',
      links: {
        live: 'https://www.zezhatools.com',
        github: 'https://github.com/rajeshkanna-s'
      },
      icon: Globe
    },
    {
      title: 'Advanced Calculator Suite',
      description: 'A collection of specialized calculators including scientific, financial, and statistical calculation tools.',
      image: '/lovable-uploads/db9da8b4-1c70-4135-838e-f26e313b4406.png',
      technologies: ['JavaScript', 'Mathematical Libraries', 'Responsive Design', 'PWA'],
      category: 'Utility Applications',
      links: {
        live: '#',
        github: 'https://github.com/rajeshkanna-s'
      },
      icon: Calculator
    },
    {
      title: 'Tax Calculator',
      description: 'An intelligent tax calculation system with support for multiple tax regimes and automated compliance checking.',
      image: '/lovable-uploads/db9da8b4-1c70-4135-838e-f26e313b4406.png',
      technologies: ['JavaScript', 'Tax Algorithms', 'Form Validation', 'Chart.js'],
      category: 'Financial Tools',
      links: {
        live: '#',
        github: 'https://github.com/rajeshkanna-s'
      },
      icon: Calculator
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-lift group overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-primary overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-white opacity-80" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4">
                  {project.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.links.live, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.links.github, '_blank')}
                    className="flex-1"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient text-center mb-8">
                Project Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">6+</div>
                  <div className="text-muted-foreground">Active Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">50K+</div>
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to work on new projects and bring innovative ideas to life. 
                Let's discuss how we can create something amazing together.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Start a Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;