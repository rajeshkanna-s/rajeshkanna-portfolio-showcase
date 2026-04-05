import { ArrowDown, MessageCircle, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useCallback } from 'react';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'AI Engineer',
  'AI Builder',
  'AI Developer',
  'Freelancer',
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const typeRole = useCallback(() => {
    const fullText = roles[currentRole];
    
    if (!isDeleting) {
      // Typing forward
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setTypingSpeed(80 + Math.random() * 60); // natural feel

      if (displayText === fullText) {
        // Pause at full word, then start deleting
        setTypingSpeed(2000);
        setIsDeleting(true);
      }
    } else {
      // Deleting
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setTypingSpeed(40);

      if (displayText === '') {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTypingSpeed(300);
      }
    }
  }, [currentRole, displayText, isDeleting]);

  useEffect(() => {
    const timer = setTimeout(typeRole, typingSpeed);
    return () => clearTimeout(timer);
  }, [typeRole, typingSpeed]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-2 sm:px-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white/5 opacity-50"></div>
      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center justify-center w-full">
          {/* Left Side - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left text-gray-800 dark:text-white space-y-6 md:space-y-8 animate-fade-in mt-10 sm:mt-16 w-full">
            <div className="space-y-3 md:space-y-5 w-full">
              {/* Big Rotating Headline */}
              <h1 className="hero-headline">
                <span className="hero-headline-static">
                  I am Rajeshkanna.
                </span>
                <br />
                <span className="hero-headline-static">
                  I am a{' '}
                </span>
                <span className="hero-headline-rotating">
                  {displayText}
                  <span className="hero-cursor">|</span>
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed text-gray-700 dark:text-gray-200">
                I help founders, professionals, and small businesses create stunning online portfolios & websites that bring more clients, more trust, and more visibility.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Button
                onClick={() => window.open('https://wa.me/918667454755', '_blank')}
                size="lg"
                className="w-full sm:w-auto bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-medium font-semibold text-base sm:text-lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 font-semibold text-base sm:text-lg"
                onClick={() => scrollToSection('freelance-portfolio')}
              >
                <ArrowDown className="mr-2 h-5 w-5" />
                View My Freelancing Portfolio
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-2 sm:pt-4 w-full">
              <a
                href="https://www.linkedin.com/in/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-800 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition-all duration-300 hover:scale-110 text-blue-600 dark:text-blue-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://github.com/rajeshkanna-s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-800 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition-all duration-300 hover:scale-110 text-blue-600 dark:text-blue-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:rajeshkannaprogrammer@gmail.com"
                className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-800 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition-all duration-300 hover:scale-110 text-blue-600 dark:text-blue-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="tel:8667454755"
                className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-800 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition-all duration-300 hover:scale-110 text-blue-600 dark:text-blue-300"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
          {/* Right Side - Image/Animation */}
          <div className="flex justify-center items-center lg:justify-end mb-8 lg:mb-0 w-full">
            <div className="relative flex items-center justify-center w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-200/30 dark:bg-blue-800/30 rounded-full animate-pulse-soft shadow-lg">
              <div className="w-24 h-24 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-blue-300/40 dark:bg-blue-700/40 rounded-full flex items-center justify-center">
                <div className="text-3xl sm:text-6xl md:text-8xl font-bold text-blue-600 dark:text-blue-200 select-none">
                  RS
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-8 sm:h-8 bg-blue-300 rounded-full animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 sm:w-12 sm:h-12 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-6 w-3 h-3 sm:w-6 sm:h-6 bg-white rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-blue-600 dark:text-blue-300 opacity-70 hover:opacity-100 transition-opacity"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;