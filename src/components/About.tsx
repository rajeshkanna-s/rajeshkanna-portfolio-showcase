import { User, Code, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: '8+ Years Experience',
      description: 'Professional software development experience and Technical Support',
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Specialized in Java, Spring Boot, and API development',
    },
    {
      icon: User,
      title: 'Client-Focused',
      description: 'Delivered solutions for diverse business requirements',
    },
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Committed to innovation and continuous learning',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-accent/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                About Me
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Transforming ideas into powerful digital solutions
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-foreground">
              <p>
                I'm a dedicated and highly skilled Software Engineer with total{' '}
                <span className="font-semibold text-primary">8+ years of experience</span>{' '}
                as a specialized developer and technical support. My expertise spans across API development, 
                product innovation, loan processing, KYC compliance, and web application development.
              </p>
              
              <p>
                I have a proven ability to deliver high-quality software solutions that 
                optimize business processes and enhance user experiences. My technical 
                expertise combined with a passion for innovation drives me to contribute 
                to the success of forward-thinking organizations.
              </p>

              <p>
                Currently seeking challenging opportunities as a{' '}
                <span className="font-semibold text-secondary">Java Developer</span>{' , '}
                <span className="font-semibold text-secondary">API Developer</span>{' and '}
                <span className="font-semibold text-secondary">Full Stack Developer</span>{' '}
                to leverage my technical expertise and drive innovation in dynamic 
                development environments.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">8+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-4 sm:space-y-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <highlight.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;