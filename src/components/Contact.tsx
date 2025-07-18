import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateName = (input: string) => {
    return /^[A-Za-z\s]+$/.test(input) && input.length >= 3 && input.length <= 25;
  };

  const validateEmail = (input: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
  };

  const validateSubject = (input: string) => {
    return input.length >= 10 && input.length <= 100;
  };

  const validateMessage = (input: string) => {
    return input.length >= 25 && input.length <= 500;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    if (!validateName(formData.name)) {
      newErrors.name = 'Name must be 3-25 letters and spaces only.';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!validateSubject(formData.subject)) {
      newErrors.subject = 'Subject must be 10-100 characters.';
    }
    if (!validateMessage(formData.message)) {
      newErrors.message = 'Message must be 25-500 characters.';
    }
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      toast({
        title: "Validation Error",
        description: "Please check the highlighted fields and try again.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      // Initialize EmailJS if not already done
      emailjs.init("yeIOTD4_n_jgpIkBo");
      
      // Using EmailJS
      await emailjs.sendForm("service_5eim7li", "template_jij3tij", e.target as HTMLFormElement);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({ name: '', email: '', subject: '', message: '' });
      setAttemptedSubmit(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("EmailJS error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'rajeshkannaprogrammer@gmail.com',
      link: 'mailto:rajeshkannaprogrammer@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8667454***',
      link: 'tel:+918667454***'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Chennai, India',
      link: null
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.rajeshkanna.in',
      link: 'https://www.rajeshkanna.in'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rajeshkanna-s',
      color: 'hover:text-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/rajeshkanna-s',
      color: 'hover:text-gray-800'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:rajeshkannaprogrammer@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-accent/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <Card className="glass-card w-full">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="title" value="Contact Us" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                    {attemptedSubmit && errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                    {attemptedSubmit && errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full"
                  />
                  {attemptedSubmit && errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="w-full resize-none"
                  />
                  {attemptedSubmit && errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300 text-base sm:text-lg"
                  size="lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 w-full">
            {/* Contact Details */}
            <Card className="glass-card w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-full">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="glass-card w-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">Follow Me</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-muted rounded-full ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-medium`}
                      aria-label={social.name}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Connect with me on social media for updates on my latest projects and professional insights.
                </p>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass-card w-full">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse"></div>
                  <h3 className="font-semibold text-foreground mb-2">Available for Projects</h3>
                  <p className="text-muted-foreground text-sm">
                    Currently accepting new opportunities and collaborations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10 sm:mt-16">
          <Card className="glass-card max-w-full sm:max-w-3xl mx-auto">
            <CardContent className="p-4 sm:p-8">
              <h3 className="text-2xl font-semibold text-gradient mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need a full-stack web application, API development, or technical consultation, 
                I'm here to help bring your ideas to life with cutting-edge technology and best practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                  onClick={() => window.open('mailto:rajeshkannaprogrammer@gmail.com', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://www.linkedin.com/in/rajeshkanna-s', '_blank')}
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;