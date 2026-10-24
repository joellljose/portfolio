import React, { useState } from 'react';
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

export const App: React.FC = () => {
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
    <div className="min-h-screen bg-[#06080e] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Interactive Canvas */}
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

      {/* Interactive Printable / Downloadable Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;
