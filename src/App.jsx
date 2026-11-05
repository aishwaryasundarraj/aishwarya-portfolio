import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PrivacyFocus from './components/PrivacyFocus';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Hackathon from './components/Hackathon';
import SoftSkills from './components/SoftSkills';
import Interests from './components/Interests';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CommandPalette from './components/CommandPalette';
import ResumeModal from './components/ResumeModal';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        <ScrollProgress />
        
        <Navbar
          onOpenResume={() => setResumeOpen(true)}
          onOpenCommandPalette={() => setPaletteOpen(true)}
        />

        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <PrivacyFocus />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Hackathon />
          <SoftSkills />
          <Interests />
          <ResumeCTA onOpenResume={() => setResumeOpen(true)} />
          <Contact onOpenResume={() => setResumeOpen(true)} />
        </main>

        <Footer />

        <BackToTop />

        <CommandPalette
          isOpen={paletteOpen}
          onClose={() => setPaletteOpen(false)}
        />

        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
