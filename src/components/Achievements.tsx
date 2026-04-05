import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const certificates = [
    {
      title: 'Building High Performance Teams',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Building+HighPerformance+Teams-1.jpg'
    },
    {
      title: 'Building Professional Relationships',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Building+Professional+Relationships-1.jpg'
    },
    {
      title: 'Building Self Confidence',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Building+SelfConfidence-1.jpg'
    },
    {
      title: 'Communicating with Confidence',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Communicating+with+Confidence-1.jpg'
    },
    {
      title: 'Corporate Finance Foundations',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Corporate+Finance+Foundations-1.jpg'
    },
    {
      title: 'Creating a Career Plan',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Creating+a+Career+Plan-1.jpg'
    },
    {
      title: 'Customer Service Leadership',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Customer+Service+Leadership+(1)-1.jpg'
    },
    {
      title: 'Customer Service Leadership (Advanced)',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Customer+Service+Leadership-1.jpg'
    },
    {
      title: 'Excel Advanced Formulas and Functions',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Excel+Advanced+Formulas+and+Functions-1.jpg'
    },
    {
      title: 'Financial Modeling Foundations',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Financial+Modeling+Foundations+(1)-1.jpg'
    },
    {
      title: 'Financial Modeling Foundations (Advanced)',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Financial+Modeling+Foundations-1.jpg'
    },
    {
      title: 'Happiness Tips',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Happiness+Tips-1.jpg'
    },
    {
      title: 'Improving Your Leadership Communications',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Improving+Your+Leadership+Communications-1.jpg'
    },
    {
      title: 'Microsoft Project 2019 Essential Training',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Microsoft+Project+2019+and+Project+Online+Desktop+Essential+Training-1.jpg'
    },
    {
      title: 'Strategic Thinking',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_Strategic+Thinking-1.jpg'
    },
    {
      title: 'The Human Resources Hero',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/CertificateOfCompletion_The+Human+Resources+Hero+(1)-1.jpg'
    },
    {
      title: 'Professional Certification',
      url: 'https://my--files.s3.us-east-1.amazonaws.com/%23CERTIFICATE/Rajeshkanna_S_certficate_250920171316-1.jpg'
    }
  ];

  const totalSlides = certificates.length;

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((currentSlide + 1) % totalSlides), [currentSlide, totalSlides, goTo]);
  const prev = useCallback(() => goTo((currentSlide - 1 + totalSlides) % totalSlides), [currentSlide, totalSlides, goTo]);

  // Auto-play: slides left to right every 4s
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, 4000);
  }, [next]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [startAutoPlay]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  const resumeAutoPlay = () => startAutoPlay();

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <section id="certificates" className="section-padding bg-muted/30 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm font-semibold rounded-full mb-4">
            Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4">
            Certificate Completions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional development and continuous learning achievements
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {/* Slide Window */}
          <div className="overflow-hidden rounded-2xl shadow-lg border border-border bg-white dark:bg-slate-800">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {certificates.map((cert, i) => (
                <div key={i} className="w-full flex-shrink-0 relative">
                  <img
                    src={cert.url}
                    alt={cert.title}
                    className="w-full h-auto max-h-[520px] object-contain bg-white dark:bg-slate-900"
                    loading="lazy"
                  />
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-6 pb-5 pt-14">
                    <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow-md">
                      {cert.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev / Next Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full
                       bg-white/90 dark:bg-slate-800/90 border border-border
                       shadow-md hover:shadow-lg
                       flex items-center justify-center
                       text-foreground hover:text-primary
                       transition-all duration-200 hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-10
                       w-10 h-10 sm:w-12 sm:h-12 rounded-full
                       bg-white/90 dark:bg-slate-800/90 border border-border
                       shadow-md hover:shadow-lg
                       flex items-center justify-center
                       text-foreground hover:text-primary
                       transition-all duration-200 hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Slide counter */}
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
            {currentSlide + 1} / {totalSlides}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? 'w-8 h-2.5 bg-gradient-to-r from-blue-600 to-cyan-500'
                  : 'w-2.5 h-2.5 bg-muted-foreground/25 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: <Award className="h-5 w-5 text-primary mx-auto mb-1" />, value: `${totalSlides}`, label: 'Certificates' },
            { icon: null, value: '5+', label: 'Categories' },
            { icon: null, value: '8+', label: 'Years Learning' },
            { icon: null, value: '100%', label: 'Dedication' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-border hover:shadow-sm transition-shadow">
              {stat.icon}
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;