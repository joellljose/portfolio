import React, { useState } from 'react';
import { Sparkles, CheckSquare, Square, Copy, Check, Eye, Play, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/sound';

interface ActionItem {
  id: string;
  task: string;
  owner: string;
  deadline: string;
  priority: 'HIGH' | 'MEDIUM' | 'NORMAL';
  completed: boolean;
}

const SAMPLE_CAPTIONS = [
  { speaker: "Joel Jose", time: "10:14 AM", text: "Let's finalize the Gemini API endpoint and ensure the MutationObserver de-duplicates repeated captions." },
  { speaker: "Alex (Lead)", time: "10:15 AM", text: "Agreed. Joel, please make sure the export functionality generates compliant Markdown by this Friday." },
  { speaker: "Sarah (Design)", time: "10:16 AM", text: "I'll update the Chrome extension manifest v3 popup styling by tomorrow 5 PM." },
  { speaker: "Joel Jose", time: "10:17 AM", text: "Got it. I will test the localStorage persistence to prevent checklist state loss on browser tab refresh." },
];

export const MeetMashDemo: React.FC = () => {
  const [captions] = useState(SAMPLE_CAPTIONS);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [copied, setCopied] = useState(false);

  const [actionItems, setActionItems] = useState<ActionItem[]>([
    {
      id: 'task-1',
      task: 'Finalize Gemini API integration & Markdown export parser',
      owner: 'Joel Jose',
      deadline: 'Friday, 5:00 PM',
      priority: 'HIGH',
      completed: true,
    },
    {
      id: 'task-2',
      task: 'Test localStorage persistence for clean checklist state recovery',
      owner: 'Joel Jose',
      deadline: 'Thursday, 3:00 PM',
      priority: 'HIGH',
      completed: false,
    },
    {
      id: 'task-3',
      task: 'Update Chrome Extension Manifest V3 popup styling',
      owner: 'Sarah',
      deadline: 'Tomorrow, 5:00 PM',
      priority: 'MEDIUM',
      completed: false,
    },
  ]);

  const toggleTask = (id: string) => {
    soundFx.playKeyClick();
    setActionItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  };

  const handleRunAnalysis = () => {
    soundFx.playKeyClick();
    setIsSummarizing(true);
    setTimeout(() => {
      setIsSummarizing(false);
      soundFx.playSuccess();
    }, 800);
  };

  const handleCopyMarkdown = () => {
    soundFx.playSuccess();
    const md = `# MeetMash AI Meeting Summary
**Date:** October 2026
**Participants:** Joel Jose, Alex (Lead), Sarah (Design)

## Executive Summary
The engineering team finalized the Google Meet AI assistant architecture, reviewing MutationObserver de-duplication, Chrome Extension Manifest V3 compliance, and Gemini-driven action item extraction.

## Extracted Action Items
${actionItems
  .map(
    (t) =>
      `- [${t.completed ? 'x' : ' '}] **${t.task}** | Owner: \`${t.owner}\` | Due: *${t.deadline}* [${t.priority}]`
  )
  .join('\n')}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cyber-card rounded-2xl overflow-hidden border border-purple-500/20 bg-[#090d18]">
      {/* Chrome Extension Simulated Header */}
      <div className="p-3 bg-[#0d1222] border-b border-purple-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-purple-600/30 border border-purple-400 flex items-center justify-center text-[10px] font-bold text-purple-300">
            M
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-slate-100">MeetMash v1.2</span>
            <span className="text-[10px] font-mono text-purple-400 ml-2">Chrome Extension</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            MutationObserver: Capturing
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-800">
        {/* Left Column: Live Captions Feed */}
        <div className="md:col-span-6 p-4 bg-[#070b14] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Eye className="w-3.5 h-3.5" />
              Live Captions Stream (De-duplicated)
            </span>
            <span className="text-[10px] text-slate-500">Google Meet Tab</span>
          </div>

          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1 text-xs">
            {captions.map((c, i) => (
              <div key={i} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1">
                <div className="flex items-center justify-between font-mono text-[10.5px]">
                  <span className="font-semibold text-slate-300">{c.speaker}</span>
                  <span className="text-slate-500">{c.time}</span>
                </div>
                <p className="text-slate-300 font-sans text-xs">{c.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleRunAnalysis}
            disabled={isSummarizing}
            className="w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-slate-800 text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-colors shadow-md shadow-purple-600/20"
          >
            {isSummarizing ? (
              <>
                <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Gemini API Extracting Tasks...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Re-run Gemini AI Analysis</span>
              </>
            )}
          </button>
        </div>

        {/* Right Column: AI Action Items & Markdown Export */}
        <div className="md:col-span-6 p-4 bg-[#080d19] space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Extracted Action Items ({actionItems.filter((t) => t.completed).length}/{actionItems.length})
            </span>
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px] transition-colors"
              title="Copy Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy MD</span>
                </>
              )}
            </button>
          </div>

          {/* Action Items List */}
          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
            {actionItems.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleTask(item.id)}
                className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  item.completed
                    ? 'bg-slate-900/40 border-slate-800 text-slate-500 line-through'
                    : 'bg-slate-900/80 border-slate-800 hover:border-purple-500/40 text-slate-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 text-purple-400">
                    {item.completed ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-sans leading-snug ${item.completed ? 'text-slate-500' : 'text-slate-200'}`}>
                      {item.task}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-slate-400">
                      <span className="text-cyan-400">@{item.owner}</span>
                      <span>•</span>
                      <span>{item.deadline}</span>
                      <span
                        className={`ml-auto px-1.5 py-0.2 rounded font-semibold ${
                          item.priority === 'HIGH'
                            ? 'bg-rose-950/80 text-rose-300 border border-rose-800'
                            : 'bg-amber-950/80 text-amber-300 border border-amber-800'
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-500/20 text-[10.5px] font-mono text-purple-200 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>State synchronized to browser local storage.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
