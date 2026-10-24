import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Download, ArrowRight, Mail, MapPin, Award, Terminal as TerminalIcon } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { Terminal } from './Terminal';
import { soundFx } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

const ROLES = [
  "Aspiring Software Engineer",
  "Google Gemini AI Developer",
  "Flutter & Mobile Architect",
  "Python & JavaScript Engineer",
];

export const HeroSection: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects, onOpenContact }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for developer titles
  useEffect(() => {
    const fullText = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const triggerHireCelebration = () => {
    soundFx.playSuccess();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#10b981', '#a855f7', '#f59e0b'],
    });
    onOpenContact();
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Developer Information & Intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span>Available for Hire • S/W Engineer & Internships</span>
          </motion.div>

          {/* Main Title & Typewriter */}
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
                JOEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-500 text-glow-cyan">JOSE</span>
              </h1>
            </motion.div>

            {/* Dynamic Role Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 flex items-center gap-2 text-xl sm:text-2xl font-mono text-cyan-300"
            >
              <span className="text-purple-400 font-bold">&gt;</span>
              <span className="font-semibold text-slate-100">{currentText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
            </motion.div>
          </div>

          {/* Location & College Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400"
          >
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kollam, Kerala, India</span>
            </div>
            <div className="h-3 w-px bg-slate-700" />
            <div className="flex items-center gap-1.5 text-slate-300">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>B.Tech CSE @ BMCE (CGPA 7.88)</span>
            </div>
          </motion.div>

          {/* Professional Summary from Resume */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-sans"
          >
            Final-year B.Tech Computer Science student specializing in building AI-integrated systems,
            modern mobile applications with Flutter, and robust software tools powered by the{' '}
            <span className="text-cyan-300 font-semibold underline decoration-cyan-500/40 underline-offset-4">Google Gemini API</span>.
            Dedicated to clean architecture, data structures, and production-grade engineering.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <button
              onClick={triggerHireCelebration}
              onMouseEnter={() => soundFx.playHover()}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Hire Joel</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                soundFx.playHover();
                onExploreProjects();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 text-sm font-medium transition-all"
            >
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={() => {
                soundFx.playHover();
                onOpenResume();
              }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-sm font-mono transition-all"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Resume</span>
            </button>
          </motion.div>

          {/* Social and Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4 pt-4 border-t border-slate-800/80 text-slate-400"
          >
            <span className="text-xs font-mono text-slate-500">Connect:</span>
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
              title="Send Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <div className="text-xs font-mono text-slate-500 ml-auto hidden sm:block">
              {RESUME_DATA.personal.email}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Live Interactive Developer Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          {/* Subtle decoration elements */}
          <div className="absolute -top-3 -right-3 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-[10px] font-mono text-cyan-300 backdrop-blur-sm z-20 flex items-center gap-1.5 shadow-lg">
            <TerminalIcon className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>Interactive Terminal</span>
          </div>

          <Terminal />

          {/* Quick Stats Grid underneath terminal */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
            {RESUME_DATA.stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all text-center"
              >
                <div className="text-xl font-mono font-bold text-cyan-300">{s.value}</div>
                <div className="text-[11px] font-medium text-slate-200">{s.label}</div>
                <div className="text-[10px] text-slate-500 truncate">{s.change}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
