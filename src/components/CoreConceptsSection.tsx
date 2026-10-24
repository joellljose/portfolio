import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Layers3, Cpu, Database, Globe2, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { soundFx } from '../utils/sound';

export const CoreConceptsSection: React.FC = () => {
  const getConceptIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary':
        return <Binary className="w-5 h-5 text-emerald-400" />;
      case 'Layers3':
        return <Layers3 className="w-5 h-5 text-green-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-green-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-emerald-500/40 text-emerald-400 text-xs font-mono">
          <Binary className="w-3.5 h-3.5" />
          <span>ENGINEERING FOUNDATIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Core CS Competencies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Rigorous academic foundations supporting software scalability, algorithmic efficiency, and resilient architecture.
        </p>
      </div>

      {/* Grid of Core CS Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.coreConcepts.map((concept, idx) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            onMouseEnter={() => {
              soundFx.playHover();
            }}
            className="cyber-card rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Ambient hover light */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-black border border-slate-800 group-hover:border-emerald-500/40 transition-colors">
                {getConceptIcon(concept.icon)}
              </div>
              <h3 className="text-base font-bold text-white font-sans group-hover:text-emerald-300 transition-colors">
                {concept.title}
              </h3>
            </div>

            <p className="text-xs text-slate-300 font-sans leading-relaxed mb-4">
              {concept.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-emerald-950/60">
              {concept.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-black border border-slate-800 text-[10.5px] font-mono text-slate-400 group-hover:text-emerald-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Soft Skills & Working Philosophy Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="cyber-card rounded-2xl p-6 border border-emerald-500/40 bg-emerald-950/20 transition-all duration-300 relative group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-sans group-hover:text-emerald-300 transition-colors">
              Professional Soft Skills
            </h3>
          </div>

          <div className="space-y-2 text-xs">
            {RESUME_DATA.additional.softSkills.map((s) => (
              <div key={s.name} className="flex items-center justify-between p-1.5 rounded bg-black/60 border border-slate-800">
                <span className="font-sans text-slate-200">{s.name}</span>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-900">
                  {s.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
