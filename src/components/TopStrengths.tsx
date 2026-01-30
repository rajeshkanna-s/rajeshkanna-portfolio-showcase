import { CheckCircle2, Code2, Bug, Database, Users, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TopStrengths = () => {
  const strengths = [
    {
      icon: Code2,
      title: 'Clean API Design',
      description: 'Designing clean, maintainable REST APIs'
    },
    {
      icon: Bug,
      title: 'Production Debugging',
      description: 'Debugging and resolving complex production issues'
    },
    {
      icon: Database,
      title: 'Performance Optimization',
      description: 'Optimizing database queries and application performance'
    },
    {
      icon: Users,
      title: 'Stakeholder Collaboration',
      description: 'Collaborating closely with non-technical stakeholders'
    },
    {
      icon: GraduationCap,
      title: 'Team Mentorship',
      description: 'Mentoring and supporting junior engineers'
    }
  ];

  return (
    <section id="strengths" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Top Strengths
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Core competencies that drive exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {strengths.map((strength, index) => (
            <Card 
              key={index} 
              className="glass-card hover-lift group text-center"
            >
              <CardContent className="p-6 flex flex-col items-center space-y-4">
                <div className="p-3 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                  <strength.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {strength.description}
                  </p>
                </div>
                <CheckCircle2 className="h-5 w-5 text-primary opacity-70" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStrengths;
