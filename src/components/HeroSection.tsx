import React from 'react';
import { ArrowRight, Download, Mail, Phone, MapPin, GraduationCap, Code2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects, onOpenContact }) => {
  return (
    <section id="about" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left 8 Cols: Main Bio & Details */}
        <div className="lg:col-span-8 space-y-6">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Available for Full-Time Roles &amp; Internships</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Joel <span className="text-emerald-400">Jose</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-300">
              Aspiring Software Engineer &amp; AI Developer
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kollam, Kerala, India</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>B.Tech CSE @ BMCE (CGPA: 7.88)</span>
              </span>
            </div>
          </div>

          {/* Professional Summary from Resume */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {RESUME_DATA.personal.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#070e09] hover:bg-[#0c1810] text-slate-200 border border-slate-800 hover:border-emerald-500/40 text-xs sm:text-sm font-medium transition-colors"
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>View Projects</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#070e09] hover:bg-[#0c1810] text-slate-300 hover:text-white border border-slate-800 text-xs sm:text-sm font-mono transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Resume (PDF)</span>
            </button>
          </div>

          {/* Quick Contact Line */}
          <div className="pt-4 border-t border-emerald-950/60 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{RESUME_DATA.personal.email}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={`tel:${RESUME_DATA.personal.phone}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{RESUME_DATA.personal.phone}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={RESUME_DATA.personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>github/{RESUME_DATA.personal.githubUsername}</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={RESUME_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-slate-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span>linkedin/{RESUME_DATA.personal.linkedinUsername}</span>
            </a>
          </div>
        </div>

        {/* Right 4 Cols: Quick Stats & Role Focus */}
        <div className="lg:col-span-4 space-y-4">
          <div className="minimal-card p-5 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Overview &amp; Credentials
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {RESUME_DATA.stats.map((s) => (
                <div key={s.label} className="p-3 rounded-lg bg-black/60 border border-emerald-950">
                  <div className="text-xl font-bold font-mono text-emerald-400">{s.value}</div>
                  <div className="text-xs font-medium text-slate-200 mt-0.5">{s.label}</div>
                  <div className="text-[10px] text-slate-500">{s.change}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-emerald-950 space-y-2">
              <span className="text-[11px] font-mono text-slate-400 block">
                Target Roles:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {RESUME_DATA.personal.openToRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/50 text-emerald-300 border border-emerald-900/60"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
