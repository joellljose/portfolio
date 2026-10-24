import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { soundFx } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playSuccess();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050811] border-t border-cyan-500/15 pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold text-sm">
            <span className="text-cyan-400">&lt;</span>
            <span>{RESUME_DATA.personal.name}</span>
            <span className="text-purple-400">/&gt;</span>
            <span className="text-slate-500 font-normal">|</span>
            <span className="text-xs text-slate-400 font-normal">{RESUME_DATA.personal.title}</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Kollam, Kerala • B.Tech CSE (Baselios Mathews II College of Engineering)
          </p>
        </div>

        {/* Center: Tech stack disclaimer */}
        <div className="flex items-center gap-2 text-[11px] text-slate-500 text-center">
          <span>Engineered with React, TypeScript &amp; Cyber Motion</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>

        {/* Right: Social & Scroll To Top */}
        <div className="flex items-center gap-3">
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 transition-colors ml-2"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-900 text-center text-[10.5px] text-slate-600">
        &copy; {new Date().getFullYear()} Joel Jose. Built for high-impact software engineering opportunities.
      </div>
    </footer>
  );
};
