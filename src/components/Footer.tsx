import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020503] border-t border-emerald-950/60 py-8 px-4 sm:px-6 lg:px-8 text-xs font-mono text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Branding & Status */}
        <div className="space-y-0.5 text-center sm:text-left">
          <div className="text-slate-300 font-bold">
            Joel Jose <span className="text-emerald-500 font-normal">/ Software Engineer</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Kollam, Kerala • B.Tech CSE (Baselios Mathews II College of Engineering)
          </p>
        </div>

        {/* Right: Social & Scroll To Top */}
        <div className="flex items-center gap-3">
          <a
            href={RESUME_DATA.personal.github}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={RESUME_DATA.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${RESUME_DATA.personal.email}`}
            className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-emerald-950/60 hover:bg-emerald-900 text-emerald-400 border border-emerald-900 transition-colors ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
