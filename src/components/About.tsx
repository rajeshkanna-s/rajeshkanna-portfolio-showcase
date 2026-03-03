import { User, Code, Award, Heart, Zap, Shield, Smartphone, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Zap,
      title: 'Clean UI Design',
      description: 'Pixel-perfect, modern interfaces that impress visitors and convert leads',
    },
    {
      icon: Shield,
      title: 'Fast Loading Speed',
      description: 'Optimized performance ensuring your site loads in under 2 seconds',
    },
    {
      icon: Search,
      title: 'SEO-Friendly',
      description: 'Built with search engines in mind — rank higher on Google',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Perfect experience on every device — desktop, tablet, and mobile',
    },
    {
      icon: Code,
      title: '8+ Years Experience',
      description: 'Professional software development and technical expertise',
    },
    {
      icon: Award,
      title: 'Affordable Pricing',
      description: 'Premium quality websites at budget-friendly prices for SMEs',
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
                Software Engineer & Freelance Web Developer
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed text-foreground">
              <p>
                I'm <span className="font-semibold text-primary">Rajeshkanna S</span>, a freelance web developer and
                software engineer from <span className="font-semibold text-secondary">Chennai, India</span>.
                I specialize in building portfolio websites, business websites, and landing pages for founders,
                professionals, and small businesses.
              </p>

              <p>
                With <span className="font-semibold text-primary">8+ years of experience</span> in
                professional software development, I bring enterprise-level quality to every freelance project.
                My expertise spans across Java, Spring Boot, React, Node.js, and modern web technologies.
              </p>

              <p>
                I've built <span className="font-semibold text-secondary">30+ websites</span> for businesses
                & professionals across India. Whether you need a stunning portfolio, a business website,
                or a custom web application — I deliver premium results at affordable prices.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">8+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">30+</div>
                <div className="text-muted-foreground text-sm">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-muted-foreground text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="glass-card hover-lift">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 bg-gradient-primary rounded-xl flex-shrink-0">
                      <highlight.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
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