import React from 'react';
import { Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-950/60">
      <div className="mb-8">
        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
          Career Log
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Education &amp; Experience
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Academic foundations, verified internships, and national hackathon milestones.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-emerald-900/50 space-y-8">
        {RESUME_DATA.timeline.map((item) => (
          <div key={item.id} className="relative">
            {/* Green Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#030604] border-2 border-emerald-400" />

            <div className="minimal-card p-5 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.degree}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400">
                    {item.institution}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </span>
                  <span>•</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 font-bold border border-emerald-900">
                    {item.scoreLabel}: {item.score}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                <span>{item.location}</span>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-300 pt-1 font-sans">
                {item.details.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* IEEE Student Membership Box */}
      <div className="mt-8 minimal-card p-5 flex items-start gap-4">
        <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400 shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-white">IEEE Student Member</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
              BMCE Branch
            </span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Baselios Mathews II College of Engineering — participating in technical activities, state-level workshops, and professional development initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};
