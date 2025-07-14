import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Kuwy Technology Service Pvt Ltd',
      period: 'Feb 2021 - Present',
      location: 'Chennai, India',
      type: 'Full-time',
      description: [
        'Collaborated to analyze user requirements and translate them into technical specifications',
        'Developed robust web applications using Java, Spring MVC, and Spring Boot frameworks',
        'Integrated diverse third-party APIs for payments, data verification, and various services',
        'Created RESTful APIs to facilitate seamless data exchange and system interoperability',
        'Enhanced user experience by collaborating on responsive UI/UX design implementation',
        'Demonstrated proficiency in Core Java, designing complex, multithreaded applications and optimizing algorithms'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring MVC', 'REST APIs', 'MySQL', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Technical Support Specialist',
      company: 'Barclays Shared Services',
      period: 'June 2017 - Sept 2020',
      location: 'Chennai, India',
      type: 'Full-time',
      description: [
        'Responded to user inquiries and provided technical assistance via email and live chat',
        'Supported loan origination and payment processing software, diagnosing and resolving software issues promptly',
        'Documented and tracked user issues in a ticketing system for timely resolution',
        'Collaborated with cross-functional teams to escalate and resolve complex issues efficiently',
        'Worked with clients to troubleshoot payment processing discrepancies, improving payment accuracy'
      ],
      technologies: ['Technical Support', 'Payment Processing', 'Issue Resolution', 'Customer Service', 'Documentation']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles that shaped my expertise in software development and technical support
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  {/* Left - Company Info */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Briefcase className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-base sm:text-lg font-semibold text-primary">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="inline-block px-2 py-1 bg-secondary/10 text-secondary text-xs sm:text-sm font-medium rounded-full">
                      {exp.type}
                    </div>
                  </div>

                  {/* Right - Description */}
                  <div className="lg:col-span-2 space-y-4 sm:space-y-6 mt-4 lg:mt-0">
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-3 flex-shrink-0"></div>
                          <span className="text-foreground text-sm sm:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 sm:mb-3">Key Technologies:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;