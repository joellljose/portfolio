import React, { useState } from 'react';
import { ViewModeProvider } from './context/ViewModeContext';
import { MatrixBackground } from './components/MatrixBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { GeminiPlayground } from './components/GeminiPlayground';
import { TimelineSection } from './components/TimelineSection';
import { CoreConceptsSection } from './components/CoreConceptsSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { ModeToggle } from './components/ModeToggle';

const PortfolioContent: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => setResumeOpen(true);
  const handleCloseResume = () => setResumeOpen(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#020503] text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Background Interactive Canvas (Matrix or subtle calm grid) */}
      <MatrixBackground />

      {/* Navigation HUD */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenResume={handleOpenResume}
          onExploreProjects={scrollToProjects}
          onOpenContact={scrollToContact}
        />

        <TechStackSection />

        <ProjectsSection />

        <GeminiPlayground />

        <TimelineSection />

        <CoreConceptsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Mode Toggle Pill (Advanced <-> Minimal) */}
      <ModeToggle variant="floating" />

      {/* Interactive Printable / Downloadable Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ViewModeProvider>
      <PortfolioContent />
    </ViewModeProvider>
  );
};

export default App;
