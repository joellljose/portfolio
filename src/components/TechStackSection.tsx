import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, Check, Terminal, Cpu } from 'lucide-react';
import { RESUME_DATA, SkillItem } from '../data/resumeData';
import { TechLogo } from './TechLogos';
import { soundFx } from '../utils/sound';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'frameworks-cloud' | 'tools-ai'>('all');
  const [activeSkill, setActiveSkill] = useState<SkillItem>(RESUME_DATA.skills[0]);
  const [copied, setCopied] = useState(false);

  const filteredSkills = RESUME_DATA.skills.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  const handleCopyCode = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(activeSkill.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const selectSkill = (skill: SkillItem) => {
    soundFx.playKeyClick();
    setActiveSkill(skill);
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      {/* Background Section Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-emerald-500/40 text-emerald-400 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
          <span>TECHNICAL ARSENAL &amp; ECOSYSTEM</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Stack &amp; Technologies
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Interactive developer matrix with verified proficiency, authentic logos, and production code implementations.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: 'all', label: 'All Technologies (16)' },
            { id: 'languages', label: 'Languages (9)' },
            { id: 'frameworks-cloud', label: 'Frameworks & Cloud (4)' },
            { id: 'tools-ai', label: 'AI & Tools (3)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playHover();
                setSelectedCategory(tab.id as typeof selectedCategory);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === tab.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/60 shadow-lg shadow-emerald-500/15'
                  : 'bg-black/60 text-slate-400 border border-slate-800 hover:text-emerald-300 hover:border-emerald-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Left interactive stack cards, Right code & inspector window */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Tech Grid */}
        <div className="lg:col-span-7">
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const isActive = activeSkill.id === skill.id;
                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => selectSkill(skill)}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`group relative p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                      isActive
                        ? 'bg-[#06140b] border-emerald-400 shadow-xl shadow-emerald-500/20 scale-[1.02]'
                        : 'bg-[#030805]/90 hover:bg-[#06140b]/90 border-slate-800/80 hover:border-emerald-500/40'
                    }`}
                  >
                    {/* Glowing highlight indicator */}
                    {isActive && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-black border border-slate-800 group-hover:border-emerald-900 transition-colors shrink-0">
                        <TechLogo name={skill.id} size={26} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-slate-100 font-sans truncate group-hover:text-emerald-300 transition-colors">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono text-emerald-400 ml-1">
                            {skill.proficiency}%
                          </span>
                        </div>
                        {/* Mini progress bar */}
                        <div className="w-full h-1 bg-slate-900 rounded-full mt-1.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 0.6 }}
                            className="h-full rounded-full"
                            style={{
                              background: isActive
                                ? 'linear-gradient(90deg, #00ff88, #10b981)'
                                : 'linear-gradient(90deg, #064e26, #10b981)',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="mt-2 text-[10.5px] text-slate-400 line-clamp-1 leading-normal font-sans">
                      {skill.highlight}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right: Live Code Inspector IDE & Skill Deep-Dive */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="cyber-card rounded-2xl overflow-hidden border border-emerald-500/25 shadow-2xl">
            {/* IDE Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#030805] border-b border-emerald-500/20">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="ml-2 flex items-center gap-2 text-xs font-mono text-slate-300">
                  <TechLogo name={activeSkill.id} size={15} />
                  <span className="text-emerald-300 font-semibold">{activeSkill.name}</span>
                  <span className="text-emerald-800">/</span>
                  <span className="text-slate-400">snippet.{activeSkill.snippetLang}</span>
                </div>
              </div>

              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/80 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-[11px] font-mono transition-colors"
                title="Copy Code"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* IDE Body: Syntax Code Window */}
            <div className="p-4 bg-[#010402] overflow-x-auto text-xs font-mono leading-relaxed max-h-[300px]">
              <pre className="text-emerald-200/90">
                <code>{activeSkill.codeSnippet}</code>
              </pre>
            </div>

            {/* Skill Deep Dive Card */}
            <div className="p-4 bg-[#030805] border-t border-emerald-500/20 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Production Application:</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-700/70 text-emerald-300">
                  Proficiency: {activeSkill.proficiency}%
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {activeSkill.highlight}
              </p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400 font-mono">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified in academic AI &amp; Web projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Stack Marquee Banner */}
      <div className="mt-14 pt-8 border-t border-emerald-950/60">
        <div className="text-center text-xs font-mono text-emerald-500/70 uppercase tracking-widest mb-4">
          Integrated Technologies &amp; Runtime Ecosystem
        </div>
        <div className="flex overflow-hidden relative w-full mask-linear">
          <div className="flex gap-8 py-2 animate-marquee whitespace-nowrap">
            {[...RESUME_DATA.skills, ...RESUME_DATA.skills].map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                onClick={() => selectSkill(item)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 border border-slate-800 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-300 transition-all cursor-pointer"
              >
                <TechLogo name={item.id} size={18} />
                <span className="text-xs font-mono">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
