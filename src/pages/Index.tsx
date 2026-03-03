import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import HowIWork from '@/components/HowIWork';
import WhyChooseMe from '@/components/WhyChooseMe';
import FreelancePortfolio from '@/components/FreelancePortfolio';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import TopStrengths from '@/components/TopStrengths';
import Education from '@/components/Education';
import Certificates from '@/components/Achievements';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <HowIWork />
      <WhyChooseMe />
      <FreelancePortfolio />
      <Experience />
      <Skills />
      <TopStrengths />
      <Education />
      <Certificates />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
