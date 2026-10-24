import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, CheckCircle, Cpu, Sparkles } from 'lucide-react';
import { TechLogo } from './TechLogos';
import { KtuAppDemo } from './KtuAppDemo';
import { MeetMashDemo } from './MeetMashDemo';
import { soundFx } from '../utils/sound';
import { GithubIcon } from './SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'all' | 'ktu' | 'meetmash'>('all');

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black border border-emerald-500/40 text-emerald-400 text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>PRODUCTION-GRADE ACADEMIC PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured Engineering Work
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Real-world applications integrating Google Gemini API, Flutter mobile engineering, and browser extensions.
        </p>

        {/* Project Selector Tabs */}
        <div className="flex items-center justify-center gap-2 pt-3">
          {[
            { id: 'all', label: 'All Projects (2)' },
            { id: 'ktu', label: 'AI KTU Notes App' },
            { id: 'meetmash', label: 'MeetMash Chrome Extension' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playHover();
                setActiveProjectTab(tab.id as typeof activeProjectTab);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeProjectTab === tab.id
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/60 shadow-lg shadow-emerald-500/15'
                  : 'bg-black/60 text-slate-400 border border-slate-800 hover:text-emerald-300 hover:border-emerald-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {/* Project 1: AI KTU Notes App */}
        {(activeProjectTab === 'all' || activeProjectTab === 'ktu') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cyber-card rounded-3xl p-6 sm:p-8 border border-emerald-500/25 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Details from Resume */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold">
                    Flagship Mobile Application
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black border border-slate-800 text-slate-400 text-xs font-mono">
                    Academic Project
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    AI KTU Notes App
                  </h3>
                  <p className="text-emerald-400 font-mono text-xs mt-1">
                    Flutter • Dart • Python • Firebase • Google Gemini API
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  Architected an AI-powered KTU study application combining syllabus-based notes, quizzes,
                  community discussions, and personalized learning assistance powered by the Google Gemini API.
                </p>

                {/* Resume Highlights */}
                <div className="space-y-3 text-xs text-slate-300 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-100">Intelligent Academic Assistant:</strong> Architected a cross-platform mobile application using Flutter, Dart, Firebase, and Gemini API combining syllabus notes, quizzes, and personalized learning tools.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-100">Gemini-Powered Resolution:</strong> Integrated doubt resolution, code explanation, summarization, diagram generation, and semantic search directly in-app.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-100">Firebase Cloud Backend:</strong> Implemented Firebase Auth, Firestore real-time synchronization, Cloud Storage, and role-based access control (RBAC) for academic resources.
                    </span>
                  </div>
                </div>

                {/* Stack Logos Bar */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-emerald-500/80 block mb-2 uppercase tracking-wider">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['flutter', 'dart', 'python', 'firebase', 'gemini'].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        <TechLogo name={tech} size={16} />
                        <span className="capitalize">{tech === 'gemini' ? 'Gemini API' : tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href="https://github.com/joellljose"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-colors shadow-md shadow-emerald-500/20"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                  <a
                    href="#ktu-interactive"
                    onClick={() => soundFx.playHover()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-emerald-950/40 text-slate-200 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Live Simulator Ready</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Interactive Mobile Simulator */}
              <div className="lg:col-span-6" id="ktu-interactive">
                <KtuAppDemo />
              </div>
            </div>
          </motion.div>
        )}

        {/* Project 2: MeetMash */}
        {(activeProjectTab === 'all' || activeProjectTab === 'meetmash') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cyber-card rounded-3xl p-6 sm:p-8 border border-emerald-500/25 relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Details from Resume */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-mono font-semibold">
                    Chrome Extension &amp; AI Productivity
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black border border-slate-800 text-slate-400 text-xs font-mono">
                    Academic Project
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    MeetMash
                  </h3>
                  <p className="text-emerald-400 font-mono text-xs mt-1">
                    JavaScript • Google Gemini API • Chrome APIs • MutationObserver
                  </p>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  Built an AI-powered Google Meet Chrome extension that converts real-time meeting conversations
                  into actionable checklists, priority matrices, and executive summaries with one click.
                </p>

                {/* Resume Highlights */}
                <div className="space-y-3 text-xs text-slate-300 font-sans">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-100">Live Caption Intelligence:</strong> Built an AI Chrome extension capturing live captions from Google Meet to generate executive summaries, topic insights, and actionable meeting tasks.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-100">Real-Time De-duplication:</strong> Implemented real-time transcript de-duplication with DOM MutationObserver and persistent task tracking via browser local storage.
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-100">Automated Action Extraction:</strong> Developed deadline detection, priority tagging, and automated Markdown export for instant developer collaboration.
                    </span>
                  </div>
                </div>

                {/* Stack Logos Bar */}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-emerald-500/80 block mb-2 uppercase tracking-wider">
                    Technologies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['javascript', 'gemini', 'html'].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black border border-slate-800 text-slate-300 text-xs font-mono"
                      >
                        <TechLogo name={tech} size={16} />
                        <span className="capitalize">{tech === 'gemini' ? 'Gemini API' : tech}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black border border-slate-800 text-slate-300 text-xs font-mono">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Chrome Extension APIs</span>
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href="https://github.com/joellljose"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFx.playHover()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-colors shadow-md shadow-emerald-500/20"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                  <a
                    href="#meetmash-interactive"
                    onClick={() => soundFx.playHover()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-emerald-950/40 text-slate-200 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono transition-colors"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span>Live Simulator Ready</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Interactive Chrome Extension Simulator */}
              <div className="lg:col-span-6" id="meetmash-interactive">
                <MeetMashDemo />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
