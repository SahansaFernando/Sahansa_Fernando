import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Resume } from '../components/Resume';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';
import { AnimatedBackground } from '../components/AnimatedBackground';

export function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0118] text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}
