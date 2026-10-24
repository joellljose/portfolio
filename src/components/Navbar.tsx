import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, FileText } from 'lucide-react';
import { soundFx } from '../utils/sound';
import { ModeToggle } from './ModeToggle';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { label: '// home', href: '#hero' },
    { label: '// skills', href: '#skills' },
    { label: '// projects', href: '#projects' },
    { label: '// timeline', href: '#timeline' },
    { label: '// contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#020503]/90 backdrop-blur-md border-b border-emerald-500/20 shadow-lg shadow-black/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => soundFx.playKeyClick()}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center font-mono font-bold text-black shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
            JJ
          </div>
          <div className="flex items-center font-mono text-sm font-bold text-white tracking-wide">
            <span className="text-emerald-400">&lt;</span>
            <span>JoelJose</span>
            <span className="text-green-400">/&gt;</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => soundFx.playKeyClick()}
              className="px-3.5 py-1.5 rounded-lg text-slate-400 hover:text-emerald-300 hover:bg-emerald-950/40 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Right */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Mode Switcher: Advanced vs Minimal */}
          <ModeToggle variant="navbar" />

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Sound FX' : 'Enable Cyber Sound FX'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all ${
              soundEnabled
                ? 'bg-emerald-950/70 border-emerald-500/60 text-emerald-300 shadow-sm shadow-emerald-500/20'
                : 'bg-black/60 border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/30'
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px]">SFX: ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-[11px]">SFX: OFF</span>
              </>
            )}
          </button>

          {/* Resume Modal Button */}
          <button
            onClick={() => {
              soundFx.playHover();
              onOpenResume();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-medium transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-black border border-slate-800 text-slate-400"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-black border border-slate-800 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#020603]/98 backdrop-blur-xl border-b border-emerald-500/20 px-6 py-5 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                soundFx.playKeyClick();
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-slate-300 hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 text-xs">Portfolio View:</span>
              <ModeToggle variant="navbar" />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-black font-bold flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
