import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import TopStrengths from '@/components/TopStrengths';
import Education from '@/components/Education';
import Certificates from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <TopStrengths />
      <Education />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
