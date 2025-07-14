import { Award, Star, Trophy, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: 'STAR PERFORMER Award',
      organization: 'Kuwy Technology Service Pvt Ltd',
      description: 'Recognized for outstanding support performance and exceptional contribution to team success.',
      year: '2023',
      category: 'Performance Excellence'
    },
    {
      icon: FileText,
      title: 'Software Competition Winner',
      organization: 'Industry Recognition',
      description: 'Successfully implemented and defined over 20 business metrics along with 30+ years of combined experience.',
      year: '2022',
      category: 'Technical Innovation'
    },
    {
      icon: Trophy,
      title: 'Process Improvement Leader',
      organization: 'Barclays Shared Services',
      description: 'Demonstrated a proven track record of successfully completing numerous projects and streamlining business processes.',
      year: '2019',
      category: 'Process Excellence'
    },
    {
      icon: Award,
      title: 'Technical Proficiency Recognition',
      organization: 'Multiple Platforms',
      description: 'Earned recognition for successfully implementing various software metrics and maintaining high-quality standards.',
      year: '2021',
      category: 'Technical Skills'
    }
  ];

  const certifications = [
    'Java Programming Certification',
    'Spring Framework Certification',
    'RESTful API Development',
    'Database Management Systems',
    'Agile Development Methodologies',
    'Software Testing & Quality Assurance'
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional accomplishments and certifications that demonstrate my commitment to excellence
          </p>
        </div>

        {/* Main Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-full flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-muted-foreground bg-secondary/10 px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Highlights */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Key Accomplishments */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient mb-6 flex items-center space-x-2">
                <Trophy className="h-6 w-6" />
                <span>Key Accomplishments</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-foreground">
                    Successfully developed and integrated 50+ RESTful APIs for various business applications
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-foreground">
                    Improved system performance by 40% through code optimization and database query enhancement
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-foreground">
                    Led cross-functional teams in delivering critical projects within tight deadlines
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-foreground">
                    Mentored junior developers and contributed to team knowledge sharing initiatives
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Right - Certifications */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient mb-6 flex items-center space-x-2">
                <FileText className="h-6 w-6" />
                <span>Certifications & Training</span>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-secondary rounded-lg">
                <p className="text-secondary-foreground text-center font-medium">
                  Committed to continuous learning and professional development
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="mt-16">
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient text-center mb-8">
                Professional Impact
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">6+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-muted-foreground">APIs Developed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">20+</div>
                  <div className="text-muted-foreground">Business Metrics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-muted-foreground">Project Success</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;