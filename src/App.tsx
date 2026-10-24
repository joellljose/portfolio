import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
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
    <div className="min-h-screen bg-[#030604] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Navigation */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content */}
      <main>
        <HeroSection
          onOpenResume={handleOpenResume}
          onExploreProjects={scrollToProjects}
          onOpenContact={scrollToContact}
        />

        <TechStackSection />

        <ProjectsSection />

        <TimelineSection />

        <CoreConceptsSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Printable / Downloadable Digital Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;
