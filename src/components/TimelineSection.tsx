import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, GitBranch, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { soundFx } from '../utils/sound';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-emerald-500/40 text-emerald-400 text-xs font-mono">
          <GitBranch className="w-3.5 h-3.5" />
          <span>GIT COMMIT LOG &amp; MILESTONES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Education &amp; Experience
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Interactive developer career log structured as a version-controlled engineering history.
        </p>
      </div>

      {/* Git Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Git Branch Trunk Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-emerald-400 via-green-500 to-emerald-600 opacity-40" />

        <div className="space-y-12">
          {RESUME_DATA.timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-8`}
              >
                {/* Center Commit Node */}
                <div
                  onMouseEnter={() => soundFx.playHover()}
                  className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020503] border-2 border-emerald-400 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/40 hover:scale-125 transition-transform cursor-pointer"
                >
                  <GitCommit className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>

                {/* Milestone Card */}
                <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? 'sm:text-right' : ''}`}>
                  <div className="cyber-card rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/50 transition-all duration-300 group">
                    {/* Commit hash & period badge */}
                    <div
                      className={`flex items-center gap-2 mb-2 text-xs font-mono text-slate-400 ${
                        isEven ? 'sm:justify-end' : ''
                      }`}
                    >
                      <span className="text-emerald-400 font-bold">{item.commitHash}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {item.period}
                      </span>
                    </div>

                    {/* Degree / Role */}
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.degree}
                    </h3>

                    {/* Institution & Location */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mt-1 text-xs text-slate-400 ${
                        isEven ? 'sm:justify-end' : ''
                      }`}
                    >
                      <span className="text-slate-300 font-medium">{item.institution}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        {item.location}
                      </span>
                    </div>

                    {/* Score / Status Badge */}
                    <div className={`mt-3 ${isEven ? 'sm:flex sm:justify-end' : ''}`}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black border border-emerald-500/40 text-emerald-300 text-xs font-mono">
                        <Award className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.scoreLabel}: <strong>{item.score}</strong></span>
                      </span>
                    </div>

                    {/* Details bullet points */}
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-300 font-sans text-left">
                      {item.details.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Additional Professional Memberships */}
      <div className="mt-16 max-w-3xl mx-auto p-6 rounded-2xl bg-[#030805] border border-emerald-500/25 cyber-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-white">IEEE Student Member</h4>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">
                BMCE Student Branch
              </span>
            </div>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">
              Baselios Mathews II College of Engineering (BMCE) — actively participating in engineering activities,
              technical seminars, workshops, and professional development initiatives across Kerala.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
