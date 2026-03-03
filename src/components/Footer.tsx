import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 opacity-50"></div>

      <div className="section-container relative z-10">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center text-center">
            {/* Left - Brand */}
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Rajeshkanna S</h3>
              <p className="text-white/80">Software Engineer & Freelance Web Developer</p>
            </div>

            {/* Center - Links */}
            <div className="text-center mb-4 md:mb-0">
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'freelance-portfolio', label: 'Portfolio' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'contact', label: 'Contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Scroll to Top */}
            <div className="text-center md:text-right mb-2 md:mb-0">
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
              Built by{' '}
              <a
                href="https://www.linkedin.com/in/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-200 transition-colors font-medium"
              >
                Rajeshkanna S
              </a>
              {' '}with{' '}
              <Heart className="h-4 w-4 text-pink-300 fill-current" />
            </p>
            <p className="text-white/60 text-sm mt-2">
              © {currentYear} Rajeshkanna S. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;