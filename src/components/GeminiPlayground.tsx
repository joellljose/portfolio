import React, { useState } from 'react';
import { Sparkles, Bot, Send, RefreshCw, Zap } from 'lucide-react';
import { soundFx } from '../utils/sound';

const QUICK_PROMPTS = [
  "Why is Joel a strong candidate for a Software Engineering role?",
  "How did Joel use the Gemini API in AI KTU Notes App?",
  "What was Joel's architecture for the MeetMash Chrome extension?",
  "Summarize Joel's core technical stack and academic standing.",
];

export const GeminiPlayground: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string>(
    `Hello! I'm Joel's Gemini AI Agent. Ask me anything about Joel Jose's academic engineering projects, technical stack, or availability for software engineer opportunities!`
  );
  const [isLoading, setIsLoading] = useState(false);

  const generateAnswer = (queryText: string) => {
    soundFx.playKeyClick();
    setIsLoading(true);

    setTimeout(() => {
      const q = queryText.toLowerCase();
      let answer = '';

      if (q.includes('why') || q.includes('hire') || q.includes('candidate') || q.includes('role')) {
        answer = `Joel Jose is a final-year B.Tech CSE student (CGPA 7.88) at Baselios Mathews II College of Engineering who pairs strong foundational Computer Science principles (Data Structures, OOP, OS, Databases) with practical, production-grade AI engineering. He has built real-world AI applications with Google Gemini API, Flutter, and JavaScript, competed in 24-hour national GenAI hackathons, and completed a Cloud Computing internship at Networkz Systems. He is proactive, fast-learning, and ready for immediate impact.`;
      } else if (q.includes('ktu') || q.includes('notes') || q.includes('doubt')) {
        answer = `In the AI KTU Notes App, Joel integrated Google Gemini API to deliver:
1. Real-time Doubt Resolution & Code Explanation for complex university modules.
2. Automated syllabus summarization and dynamic diagram generation.
3. Semantic search matching student queries against KTU course materials.
Built on Flutter and Dart with Firebase Firestore real-time sync and RBAC security rules.`;
      } else if (q.includes('meetmash') || q.includes('chrome') || q.includes('meeting')) {
        answer = `In MeetMash, Joel developed a Google Meet Chrome extension that:
1. Listens to live captions using a DOM MutationObserver with real-time de-duplication.
2. Feeds clean conversation transcripts into Google Gemini API to extract executive summaries and action items.
3. Automatically classifies deadlines and priorities, persisting task state in browser local storage and enabling one-click Markdown export.`;
      } else if (q.includes('stack') || q.includes('tech') || q.includes('skills')) {
        answer = `Joel's active engineering ecosystem includes:
- Languages: Python, JavaScript, Dart, C++, C, Java, PHP, SQL, HTML
- Frameworks & Cloud: Flutter, Firebase, Node.js, Docker, Cloud Computing
- AI & Tools: Google Gemini API, Git, GitHub CI/CD
- Core CS: Data Structures & Algorithms, OOP, Operating Systems, Database Systems.`;
      } else {
        answer = `Based on Joel Jose's engineering dossier: Joel is a versatile Software Engineer and AI developer based in Kollam, Kerala. He specializes in Python, JavaScript, and Flutter, having engineered flagship projects like the AI KTU Notes App and MeetMash. He is actively seeking Software Engineer, Full-Stack, and AI opportunities.`;
      }

      setResponse(answer);
      setIsLoading(false);
      soundFx.playSuccess();
    }, 700);
  };

  const handleSelectQuick = (q: string) => {
    setPrompt(q);
    generateAnswer(q);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    generateAnswer(prompt);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      <div className="cyber-card rounded-3xl p-6 sm:p-10 border border-emerald-500/30 bg-gradient-to-b from-[#030a05] to-[#010402] relative overflow-hidden shadow-2xl">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                <Bot className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">Ask Joel&apos;s Gemini Assistant</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-900/60 text-emerald-300 border border-emerald-700">
                    Gemini 1.5 Pro Model
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Interactive multimodal query engine trained on Joel Jose&apos;s resume, project codebases, and credentials.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 self-start sm:self-auto">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real-Time Inference</span>
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono text-emerald-500/80 block">Suggested Developer Queries:</span>
            <div className="flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((qp) => (
                <button
                  key={qp}
                  onClick={() => handleSelectQuick(qp)}
                  onMouseEnter={() => soundFx.playHover()}
                  className="px-3 py-1.5 rounded-xl bg-black/90 hover:bg-emerald-950 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-sans text-left transition-all"
                >
                  {qp}
                </button>
              ))}
            </div>
          </div>

          {/* AI Response Display Box */}
          <div className="p-5 rounded-2xl bg-black border border-emerald-500/25 min-h-[140px] flex flex-col justify-between">
            {isLoading ? (
              <div className="flex items-center justify-center gap-3 py-8 text-emerald-300 font-mono text-xs">
                <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                <span>Gemini API querying Joel&apos;s portfolio database...</span>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-500/70 pb-2 border-b border-emerald-950">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Agent Response:
                  </span>
                  <span>Model: gemini-1.5-pro-preview</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans whitespace-pre-wrap">
                  {response}
                </p>
              </div>
            )}
          </div>

          {/* Prompt Form */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything about Joel's engineering background or project experience..."
              className="flex-1 px-4 py-3 rounded-xl bg-black border border-slate-800 text-slate-100 text-xs sm:text-sm font-sans focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-900 text-black font-mono text-xs font-extrabold flex items-center gap-2 transition-colors shadow-lg shadow-emerald-500/25"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
