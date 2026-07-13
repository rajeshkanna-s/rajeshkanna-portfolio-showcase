import { Heart, ArrowUp } from 'lucide-react';

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
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left text-sm text-white/95">
            {/* Left - Brand & Copyright */}
            <div className="flex flex-col gap-0.5">
              <h3 className="text-lg font-bold">Rajeshkanna S</h3>
              <p className="text-white/80 text-xs">Software Engineer & Freelance Web Developer</p>
              <p className="text-white/60 text-xs mt-1">
                © {currentYear} Rajeshkanna S. All Rights Reserved.
              </p>
            </div>

            {/* Center - Links */}
            <div className="flex flex-wrap justify-center gap-5 text-sm font-medium">
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
                  className="hover:underline hover:text-white transition-colors text-white/90"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right - Built by & Scroll to Top */}
            <div className="flex flex-col md:items-end gap-2.5">
              <p className="text-white/80 flex items-center justify-center md:justify-end gap-1.5 text-xs">
                Built by{' '}
                <a
                  href="https://www.linkedin.com/in/rajeshkanna-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline transition-colors font-medium"
                >
                  Rajeshkanna S
                </a>
                {' '}with{' '}
                <Heart className="h-3 w-3 text-red-300 fill-current" />
              </p>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-600 transition-all duration-300 font-medium text-xs hover:scale-105"
              >
                <ArrowUp className="h-3.5 w-3.5" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;