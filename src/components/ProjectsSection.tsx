import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { TechLogo } from './TechLogos';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-950/60">
      <div className="mb-8">
        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
          Featured Work
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Academic &amp; Engineering Projects
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Production-grade applications built with Google Gemini API, Flutter mobile, and Chrome Extension APIs.
        </p>
      </div>

      <div className="space-y-6">
        {RESUME_DATA.projects.map((project) => (
          <div
            key={project.id}
            className="minimal-card p-6 sm:p-7 space-y-5"
          >
            {/* Project Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-emerald-950/60">
              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                    {project.badge}
                  </span>
                </div>
                <p className="text-xs font-mono text-emerald-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* GitHub Link */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black hover:bg-emerald-950/60 text-slate-200 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono transition-colors self-start sm:self-auto"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Project Code</span>
                <ExternalLink className="w-3 h-3 text-slate-500 ml-1" />
              </a>
            </div>

            {/* Resume Highlights */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
              {project.highlights.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills with Authentic Logos */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              {project.stack.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  <TechLogo name={tech} size={14} />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
