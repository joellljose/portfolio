import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { TechLogo } from './TechLogos';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'languages' | 'frameworks-cloud' | 'tools-ai'>('all');

  const filteredSkills = RESUME_DATA.skills.filter((s) => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-950/60">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Languages, Tools &amp; Frameworks
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5">
          {[
            { id: 'all', label: 'All (16)' },
            { id: 'languages', label: 'Languages (9)' },
            { id: 'frameworks-cloud', label: 'Frameworks & Cloud (4)' },
            { id: 'tools-ai', label: 'AI & Tools (3)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as typeof selectedCategory)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                selectedCategory === tab.id
                  ? 'bg-emerald-500 text-black font-bold'
                  : 'bg-[#070e09] text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="minimal-card p-3.5 space-y-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-black border border-slate-800 shrink-0">
                <TechLogo name={skill.id} size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-100 truncate">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-400">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-900 rounded-full mt-1 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed font-sans">
              {skill.highlight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
