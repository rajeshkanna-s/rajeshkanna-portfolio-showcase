import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-white/5 opacity-50"></div>
      
      <div className="section-container relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left - Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Rajeshkanna S</h3>
              <p className="text-white/80">Software Engineer</p>
            </div>

            {/* Center - Links */}
            <div className="text-center">
              <div className="flex flex-wrap justify-center gap-6">
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('experience');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('skills');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('projects');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Right - Scroll to Top */}
            <div className="text-center md:text-right">
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Bottom */}
          <div className="text-center">
            <p className="text-white/80 flex items-center justify-center gap-2">
              © {currentYear} Rajeshkanna S. Designed and developed with{' '}
              <Heart className="h-4 w-4 text-pink-300 fill-current" />
              by{' '}
              <a 
                href="https://www.linkedin.com/in/rajeshkanna-s" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200 transition-colors font-medium"
              >
                Rajeshkanna
              </a>
            </p>
            <p className="text-white/60 text-sm mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;