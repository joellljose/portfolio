import React from 'react';
import { Binary, Layers, Cpu, Database, Globe, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const CoreConceptsSection: React.FC = () => {
  const getConceptIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Binary className="w-4 h-4 text-emerald-400" />;
      case 1:
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 4:
        return <Globe className="w-4 h-4 text-emerald-400" />;
      default:
        return <Binary className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-950/60">
      <div className="mb-8">
        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
          Foundations
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Core CS &amp; Engineering Concepts
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Theoretical foundations and professional problem-solving principles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RESUME_DATA.coreConcepts.map((concept, idx) => (
          <div
            key={concept.title}
            className="minimal-card p-4 space-y-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-black border border-slate-800">
                {getConceptIcon(idx)}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white font-sans">
                {concept.title}
              </h3>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              {concept.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {concept.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-black border border-slate-800 text-[10px] font-mono text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Soft Skills Card */}
        <div className="minimal-card p-4 space-y-3 bg-[#08120a] border-emerald-900/60">
          <h3 className="text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-wider font-mono">
            Professional Soft Skills
          </h3>
          <div className="space-y-1.5 text-xs">
            {RESUME_DATA.additional.softSkills.map((s) => (
              <div key={s.name} className="flex items-center justify-between p-1.5 rounded bg-black/60 border border-slate-800">
                <span className="text-slate-200">{s.name}</span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                  <Check className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
