import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (BE)',
      field: 'Computer Science and Engineering',
      institution: 'PERI Institute of Technology',
      period: '2014 - 2018',
      location: 'Chennai, India',
      type: 'Full-time',
      description: 'Comprehensive study of computer science fundamentals, software engineering principles, and practical application development.',
      highlights: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Object-Oriented Programming'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science Stream',
      institution: 'Govt Boys Higher Secondary School',
      period: '2012 - 2014',
      location: 'Chennai, India',
      type: 'Full-time',
      description: 'Focused on mathematics, physics, and chemistry with strong analytical and problem-solving foundation.',
      highlights: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Computer Science',
        'Analytical Thinking',
        'Problem Solving'
      ]
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      field: 'General Education',
      institution: 'Govt Boys Higher Secondary School',
      period: '2011 - 2012',
      location: 'Chennai, India',
      type: 'Full-time',
      description: 'Foundation education covering core subjects with emphasis on academic excellence and discipline.',
      highlights: [
        'Core Subjects',
        'Academic Excellence',
        'Foundational Skills',
        'Discipline',
        'Time Management',
        'Study Habits'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-accent/30 to-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that built my technical expertise and analytical thinking
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card hover-lift">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left - Education Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                        <p className="text-lg font-semibold text-primary">{edu.field}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{edu.institution}</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                      {edu.type}
                    </div>
                  </div>

                  {/* Right - Description & Highlights */}
                  <div className="lg:col-span-2 space-y-6">
                    <p className="text-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Key Subjects/Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Key Areas of Study:</span>
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {edu.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Journey Summary */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-gradient mb-4">Educational Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My educational background in Computer Science and Engineering has provided me with a strong foundation 
                in software development principles, algorithms, and system design. This academic journey, combined with 
                continuous learning and practical experience, has shaped my approach to problem-solving and technical innovation.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">4+</div>
                  <div className="text-muted-foreground">Years of Study</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">CS&E</div>
                  <div className="text-muted-foreground">Specialization</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">2018</div>
                  <div className="text-muted-foreground">Graduate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;