import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, Trash2, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESUME_DATA } from '../data/resumeData';
import { soundFx } from '../utils/sound';

interface HistoryItem {
  id: string;
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string | React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      type: 'system',
      text: `Joel Jose Developer OS [Version 2.4.0-release]
(c) 2026 Joel Jose. All rights reserved. Type 'help' to inspect commands.`,
    },
    {
      id: 'init-2',
      type: 'output',
      text: `🚀 Initialized environment for Joel Jose (Aspiring Software Engineer & AI Developer).
Type 'hire' to start recruitment conversation or 'skills' for tech stack.`,
    },
  ]);
  const [isExpanded, setIsExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    soundFx.playKeyClick();

    const newHistory: HistoryItem[] = [
      ...history,
      { id: Math.random().toString(), type: 'input', text: `$ ${rawCmd}` },
    ];

    const lower = cmd.toLowerCase();
    const args = lower.split(' ');
    const mainCmd = args[0];

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1 text-slate-300">
              <p className="text-cyan-400 font-semibold mb-1">Available System Commands:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-4">
                <div><span className="text-emerald-400 font-mono">whoami</span> - Developer profile</div>
                <div><span className="text-emerald-400 font-mono">skills</span> - Tech stack & proficiencies</div>
                <div><span className="text-emerald-400 font-mono">projects</span> - AI & Web applications</div>
                <div><span className="text-emerald-400 font-mono">edu</span> - College & certifications</div>
                <div><span className="text-emerald-400 font-mono">contact</span> - Email & phone info</div>
                <div><span className="text-emerald-400 font-mono">hire</span> - Trigger recruitment</div>
                <div><span className="text-emerald-400 font-mono">gemini [query]</span> - Ask AI assistant</div>
                <div><span className="text-emerald-400 font-mono">clear</span> - Flush terminal screen</div>
                <div><span className="text-emerald-400 font-mono">sudo</span> - Root privilege test</div>
              </div>
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'whoami':
      case 'about':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold text-base">{RESUME_DATA.personal.name}</span>
                <span className="px-2 py-0.5 text-xs rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                  {RESUME_DATA.personal.title}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{RESUME_DATA.personal.summary}</p>
              <p className="text-xs text-slate-400">
                📍 Location: <span className="text-slate-200">{RESUME_DATA.personal.location}</span> | 🎓 Degree:{' '}
                <span className="text-slate-200">B.Tech CSE (2023 - Present)</span>
              </p>
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'skills':
      case 'stack':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 text-slate-300">
              <p className="text-cyan-400 font-semibold">Active Tech Stack & Proficiency:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {RESUME_DATA.skills.slice(0, 10).map((s) => (
                  <div key={s.id} className="flex items-center justify-between p-1.5 rounded bg-slate-900/60 border border-slate-800">
                    <span className="font-mono text-slate-200">{s.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${s.proficiency}%` }} />
                      </div>
                      <span className="text-slate-400 text-[10px] w-6">{s.proficiency}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'projects':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-3">
              <p className="text-cyan-400 font-semibold">Featured Engineering Projects:</p>
              {RESUME_DATA.projects.map((p) => (
                <div key={p.id} className="p-2.5 rounded bg-slate-900/80 border border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold">{p.title}</span>
                    <span className="text-[10px] text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded border border-cyan-900">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-slate-300">{p.summary}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'edu':
      case 'education':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-2 text-xs">
              <p className="text-cyan-400 font-semibold">Education & Milestones:</p>
              {RESUME_DATA.timeline.map((item) => (
                <div key={item.id} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between font-medium text-slate-200">
                    <span>{item.degree}</span>
                    <span className="text-emerald-400 font-mono">{item.scoreLabel}: {item.score}</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">{item.institution} • {item.period}</div>
                </div>
              ))}
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'contact':
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="space-y-1.5 text-xs text-slate-300">
              <p className="text-cyan-400 font-semibold">Direct Communication Channels:</p>
              <p>📧 Email: <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-cyan-300 underline">{RESUME_DATA.personal.email}</a></p>
              <p>📱 Phone: <a href={`tel:${RESUME_DATA.personal.phone}`} className="text-cyan-300">{RESUME_DATA.personal.phone}</a></p>
              <p>💼 LinkedIn: <a href={RESUME_DATA.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{RESUME_DATA.personal.linkedin}</a></p>
              <p>🐙 GitHub: <a href={RESUME_DATA.personal.github} target="_blank" rel="noreferrer" className="text-purple-400 underline">{RESUME_DATA.personal.github}</a></p>
              <p>📍 Location: Kollam, Kerala, India</p>
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'hire':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#10b981', '#a855f7'],
        });
        soundFx.playSuccess();
        newHistory.push({
          id: Math.random().toString(),
          type: 'success',
          text: (
            <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Recruiter Mode Activated!
              </div>
              <p>
                Joel Jose is actively available for Software Engineer, AI Developer, and Flutter Engineer roles!
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={`mailto:${RESUME_DATA.personal.email}?subject=Interview%20Invitation%20for%20Joel%20Jose&body=Hi%20Joel,%20We%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect!`}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-mono font-medium"
                >
                  Schedule Interview &rarr;
                </a>
                <span className="text-slate-400">or call {RESUME_DATA.personal.phone}</span>
              </div>
            </div>
          ),
        });
        break;

      case 'gemini':
      case 'ai':
        const query = args.slice(1).join(' ');
        const reply = query
          ? `Gemini 1.5 Pro: Analyzing "${query}"... Based on Joel Jose's engineering profile, he specializes in Google Gemini API integrations, full-stack JavaScript/Python workflows, and Flutter architectures. He is prepared to build high-performance systems for your engineering squad.`
          : 'Gemini AI Assistant: Please provide a prompt! Example: "gemini why hire Joel?"';
        newHistory.push({
          id: Math.random().toString(),
          type: 'output',
          text: (
            <div className="text-xs p-2 rounded bg-purple-950/30 border border-purple-500/30 text-purple-200 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>{reply}</div>
            </div>
          ),
        });
        soundFx.playSuccess();
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo':
        newHistory.push({
          id: Math.random().toString(),
          type: 'error',
          text: `root@joel-core: Permission granted! You now have unrestricted viewing rights to Joel's portfolio.`,
        });
        soundFx.playBeep(350, 0.1, 'square');
        break;

      default:
        newHistory.push({
          id: Math.random().toString(),
          type: 'error',
          text: `bash: command not found: "${cmd}". Type 'help' to view available system instructions.`,
        });
        soundFx.playBeep(220, 0.1, 'sawtooth');
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const handleShortcutClick = (cmd: string) => {
    handleCommand(cmd);
  };

  return (
    <div
      className={`cyber-card rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl transition-all duration-300 ${
        isExpanded ? 'fixed inset-4 z-50 bg-slate-950/95 flex flex-col' : 'w-full'
      }`}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f1d] border-b border-cyan-500/20">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="ml-3 flex items-center gap-2 text-xs font-mono text-slate-300">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">joel@dev-workstation</span>
            <span className="text-slate-500">:~</span>
            <span className="text-emerald-400">#main</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setHistory([]);
              soundFx.playBeep(500, 0.05);
            }}
            title="Clear Terminal"
            className="p-1 text-slate-400 hover:text-red-400 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? 'Minimize' : 'Expand Terminal'}
            className="p-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className={`p-4 font-mono text-xs overflow-y-auto space-y-3 bg-[#080d19]/90 scanline-overlay ${
          isExpanded ? 'flex-1' : 'max-h-[360px] min-h-[220px]'
        }`}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="leading-relaxed">
            {item.type === 'input' && (
              <div className="text-cyan-300 font-semibold flex items-center gap-2">
                <span className="text-emerald-400 select-none">➜</span>
                <span>{item.text}</span>
              </div>
            )}
            {item.type === 'system' && (
              <div className="text-slate-400 whitespace-pre-wrap border-l-2 border-cyan-500/40 pl-2">
                {item.text}
              </div>
            )}
            {item.type === 'output' && (
              <div className="text-slate-200 pl-4">{item.text}</div>
            )}
            {item.type === 'error' && (
              <div className="text-rose-400 pl-4 font-medium">{item.text}</div>
            )}
            {item.type === 'success' && (
              <div className="pl-4">{item.text}</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Fast-Action Chips */}
      <div className="px-4 py-2 bg-[#090e1c] border-t border-cyan-500/10 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
        <span className="text-slate-500 text-[10px] select-none mr-1">Quick:</span>
        {['help', 'whoami', 'skills', 'projects', 'hire', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleShortcutClick(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-colors whitespace-nowrap"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Bar */}
      <div className="flex items-center px-4 py-2.5 bg-[#0a0f1d] border-t border-cyan-500/20">
        <span className="text-emerald-400 font-mono text-xs mr-2 font-bold select-none">joel:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help', 'skills', 'hire', or 'whoami'..."
          className="flex-1 bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder:text-slate-600"
        />
        <button
          onClick={() => handleCommand(inputVal)}
          disabled={!inputVal.trim()}
          className="p-1 text-cyan-400 hover:text-cyan-300 disabled:text-slate-600 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
