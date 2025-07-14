import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      title: 'Microsoft Project 2019 and Project Online Desktop Essential Training',
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

  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="certificates" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Certificate Completions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional development and continuous learning achievements
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={certificates[currentSlide].url}
                  alt={certificates[currentSlide].title}
                  className="w-full h-auto max-h-[600px] object-contain bg-white"
                  loading="lazy"
                />
                
                {/* Navigation Buttons */}
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Certificate Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-lg md:text-xl font-semibold">
                    {certificates[currentSlide].title}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 overflow-x-auto max-w-full pb-2">
            {certificates.map((cert, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  currentSlide === index 
                    ? 'border-primary shadow-lg scale-110' 
                    : 'border-muted-foreground/20 hover:border-primary/50'
                }`}
              >
                <img
                  src={cert.url}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted-foreground/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Statistics */}
        <Card className="glass-card max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold text-gradient">Continuous Learning</h3>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">{certificates.length}</div>
                  <div className="text-muted-foreground">Certificates Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">8+</div>
                  <div className="text-muted-foreground">Years Learning</div>
                </div>
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Committed to professional development and staying current with industry best practices through continuous education and skill enhancement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certificates;