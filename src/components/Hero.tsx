import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/5 opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg md:text-xl font-medium opacity-90">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Rajeshkanna
                <span className="block text-transparent bg-gradient-to-r from-pink-200 to-blue-200 bg-clip-text">
                  S
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-200">
                Software Engineer
              </h2>
              <p className="text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
                Passionate Software Engineer with 6+ years of experience in full-stack development, 
                API integration, and technical support. Specialized in Java, Spring Boot, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-medium"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=17F81SgzsZ-7pKuZnxijNL64vo0uZp2mc', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href="https://www.linkedin.com/in/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:rajeshkannaprogrammer@gmail.com"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:8667454755"
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Image/Animation */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-white/10 rounded-full flex items-center justify-center animate-pulse-soft">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-6xl md:text-8xl font-bold text-white/80">
                    RS
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-12 w-6 h-6 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;