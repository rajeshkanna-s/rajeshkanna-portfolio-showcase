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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 px-2 sm:px-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/5 opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-gray-800 dark:text-white space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-2 md:space-y-4">
              {/* <p className="text-base sm:text-lg md:text-xl font-medium opacity-90">
                Hello, I'm
              </p> */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Rajeshkanna S
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-600 dark:text-pink-300">
                Software Engineer
              </h2>
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-xl leading-relaxed">
                Passionate Software Engineer and Technical support with 8+ years of experience in full-stack development, 
                API integration, and technical support. Specialized in Java, Spring Boot, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-medium"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white dark:border-pink-300 dark:text-pink-300 dark:hover:bg-pink-300 dark:hover:text-gray-900 transition-all duration-300"
                onClick={() => window.open('https://drive.google.com/uc?export=download&id=17F81SgzsZ-7pKuZnxijNL64vo0uZp2mc', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6 pt-2 sm:pt-4">
              <a
                href="https://www.linkedin.com/in/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-800 rounded-full hover:bg-pink-200 dark:hover:bg-pink-700 transition-all duration-300 hover:scale-110 text-pink-600 dark:text-pink-300"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://github.com/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-800 rounded-full hover:bg-pink-200 dark:hover:bg-pink-700 transition-all duration-300 hover:scale-110 text-pink-600 dark:text-pink-300"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:rajeshkannaprogrammer@gmail.com"
                className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-800 rounded-full hover:bg-pink-200 dark:hover:bg-pink-700 transition-all duration-300 hover:scale-110 text-pink-600 dark:text-pink-300"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="tel:8667454***"
                className="p-2 sm:p-3 bg-pink-100 dark:bg-pink-800 rounded-full hover:bg-pink-200 dark:hover:bg-pink-700 transition-all duration-300 hover:scale-110 text-pink-600 dark:text-pink-300"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Image/Animation */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-pink-200/30 dark:bg-pink-800/30 rounded-full flex items-center justify-center animate-pulse-soft">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-pink-300/40 dark:bg-pink-700/40 rounded-full flex items-center justify-center">
                  <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-pink-600 dark:text-pink-200">
                    RS
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-pink-300 rounded-full animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-8 h-8 sm:w-12 sm:h-12 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-pink-600 dark:text-pink-300 opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;