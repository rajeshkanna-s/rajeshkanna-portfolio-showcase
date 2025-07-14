import { useState, useEffect } from 'react';
import { Code2, Database, Globe, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: [
        { name: 'Java & Spring Boot', level: 90 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'C & C++', level: 70 },
      ]
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'JSP', level: 85 },
        { name: 'jQuery', level: 85 },
        { name: 'Responsive Design', level: 88 },
        { name: 'Web APIs', level: 92 },
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 97 },
        { name: 'Git', level: 90 },
        { name: 'Eclipse/STS', level: 95 },
        { name: 'Postman', level: 95 },
        { name: 'Jira', level: 90 },
      ]
    },
    {
      icon: Wrench,
      title: 'Professional Skills',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 85 },
        { name: 'Communication', level: 85 },
        { name: 'Advanced Excel', level: 97 },
        { name: 'Time Management', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 sm:space-x-3 text-lg sm:text-xl">
                  <div className="p-1.5 sm:p-2 bg-gradient-primary rounded-lg">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-foreground">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm sm:text-base">{skill.name}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 rounded bg-gray-200 overflow-hidden">
                      <div
                        className={`skill-progress bg-gradient-primary h-2 rounded ${isVisible ? 'w-full' : 'w-0'}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-10 sm:mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              'API Integration', 'Payment Processing', 'KYC Compliance', 'Data Structures & Algorithms',
              'Microservices', 'Technical Support', 'System Integration', 'Software Architecture',
              'Agile Development', 'Code Review', 'Performance Optimization', 'Security Best Practices'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-secondary text-secondary-foreground rounded-full font-medium hover:scale-105 transition-transform cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;