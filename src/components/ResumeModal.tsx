import React from 'react';
import { X, Printer, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { soundFx } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playSuccess();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0f1d] border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-mono font-bold text-white">Joel_Jose_Resume.pdf</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => {
                soundFx.playKeyClick();
                onClose();
              }}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-rose-950 text-slate-400 hover:text-rose-400 border border-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Resume Printable Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 font-sans text-xs sm:text-sm bg-[#080d1a]">
          {/* Resume Header */}
          <div className="border-b border-slate-700/80 pb-6 text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
              {RESUME_DATA.personal.name}
            </h1>
            <p className="text-sm text-cyan-400 font-mono font-semibold">
              {RESUME_DATA.personal.title}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-cyan-400" />{RESUME_DATA.personal.location}</span>
              <span>|</span>
              <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-cyan-300 hover:underline">{RESUME_DATA.personal.email}</a>
              <span>|</span>
              <a href={`tel:${RESUME_DATA.personal.phone}`} className="text-slate-300">{RESUME_DATA.personal.phone}</a>
              <span>|</span>
              <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/{RESUME_DATA.personal.linkedinUsername}</a>
              <span>|</span>
              <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">github.com/{RESUME_DATA.personal.githubUsername}</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs">
              {RESUME_DATA.personal.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              SKILLS
            </h2>
            <div className="space-y-1 text-xs text-slate-300">
              <p>
                <strong className="text-white">Programming Languages:</strong> Python, Java, JavaScript, Dart, C++, C, PHP, SQL, HTML
              </p>
              <p>
                <strong className="text-white">Tools &amp; Technologies:</strong> Git, GitHub, Docker, Firebase, Flutter, Node.js, Google Gemini API
              </p>
              <p>
                <strong className="text-white">Core Concepts:</strong> Data Structures, Object-Oriented Programming, Operating Systems, Database Fundamentals, Web Development
              </p>
              <p>
                <strong className="text-white">Soft Skills:</strong> Communication, Teamwork, Time Management, Problem-Solving, Quick Learning
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-bold text-white">
                  <span>B.Tech Computer Science Engineering, Baselios Mathews II College of Engineering</span>
                  <span className="font-mono text-cyan-400">August 2023 – Present</span>
                </div>
                <div className="flex justify-between text-slate-400 font-mono text-[11px]">
                  <span>CGPA: 7.88</span>
                  <span>Sasthamkotta, Kollam, Kerala</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-bold text-white">
                  <span>12th (+2) Computer Science, CVKMHSS</span>
                  <span className="font-mono text-cyan-400">June 2021 – March 2023</span>
                </div>
                <div className="flex justify-between text-slate-400 font-mono text-[11px]">
                  <span>Percentage: 86%</span>
                  <span>Eastkallada, Kollam, Kerala</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              ACADEMIC PROJECTS
            </h2>
            <div className="space-y-4 text-xs">
              {/* Project 1 */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-bold text-white">
                  <span>AI KTU Notes App | <span className="font-mono font-normal text-slate-300">Flutter, Dart, Python, Firebase, Google Gemini API</span></span>
                  <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline font-mono">Project Link</a>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
                  <li>Architected an AI-powered KTU study application using Flutter, Dart, Firebase, and Google Gemini API, combining syllabus-based notes, quizzes, community discussions, and personalized learning tools.</li>
                  <li>Integrated Gemini-powered doubt resolution, code explanation, summarization, diagram generation, and semantic search to provide interactive learning assistance within the mobile app.</li>
                  <li>Implemented Firebase Authentication, Firestore, Cloud Storage, real-time synchronization, and role-based access control for secure user management and academic resource delivery.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-bold text-white">
                  <span>MeetMash | <span className="font-mono font-normal text-slate-300">JavaScript, Gemini API, Chrome APIs</span></span>
                  <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline font-mono">Project Link</a>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
                  <li>Built an AI-powered Google Meet Chrome extension using JavaScript and Gemini API to capture live captions and generate executive summaries, topic insights, and actionable meeting tasks.</li>
                  <li>Implemented real-time transcript de-duplication with MutationObserver and persistent task tracking using browser local storage, ensuring clean transcripts and reliable checklist state.</li>
                  <li>Developed automated action-item extraction, priority/deadline detection, and Markdown export, enabling users to convert meeting discussions into structured, downloadable outputs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li>24 Hour National-Level Gen.AI Hackathon (Certificate of Participation) – MBITS / HexinOX, March 2025</li>
              <li>Cloud Computing Internship – Networkz Systems, July 2026</li>
            </ul>
          </div>

          {/* Additional Information */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/20 pb-1">
              ADDITIONAL INFORMATION
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li>Memberships: IEEE Student Member, BMCE – participating in technical activities, workshops, and professional development initiatives.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
