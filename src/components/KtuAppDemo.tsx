import React, { useState } from 'react';
import { Smartphone, Sparkles, BookOpen, CheckCircle, Database, RefreshCw, Send, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/sound';

const PRESET_QUERIES = [
  {
    topic: "Compiler Design (CS304)",
    query: "Explain LR(0) vs SLR(1) parsing with KTU key points",
    response: `### KTU CS304 - LR(0) vs SLR(1) Parsing Table Construction:
1. **LR(0) Parser:** Places REDUCE actions in all columns of the action table for an item A -> α. without checking follow symbols.
2. **SLR(1) Parser:** Places REDUCE actions **ONLY** in the FOLLOW(A) columns. This eliminates reduce-reduce and shift-reduce conflicts common in LR(0).
- **Exam Key Insight:** SLR(1) uses LR(0) canonical collection of items + 1-symbol lookahead from Follow set.`,
  },
  {
    topic: "Operating Systems (CS204)",
    query: "Explain Banker's Algorithm safety state check",
    response: `### KTU CS204 - Banker's Algorithm (Deadlock Avoidance):
1. **Data Structures:** Available[m], Max[n][m], Allocation[n][m], Need[n][m] where Need = Max - Allocation.
2. **Safety Algorithm:**
   - Initialize Work = Available and Finish[i] = false for all processes.
   - Find index $i$ such that Finish[i] == false and Need[i] <= Work.
   - Work = Work + Allocation[i]; Finish[i] = true.
   - If all processes finish, state is SAFE.`,
  },
  {
    topic: "Database Management (CS208)",
    query: "What is BCNF vs 3NF with real example?",
    response: `### KTU CS208 - 3NF vs BCNF (Boyce-Codd Normal Form):
- **3NF Rule:** For every FD X -> Y, either X is a super key OR Y is a prime attribute.
- **BCNF Rule:** Strict! For every non-trivial FD X -> Y, **X must be a super key**.
- **Key Takeaway:** Every BCNF schema is in 3NF, but not all 3NF schemas are in BCNF. BCNF eliminates all redundancy based on functional dependencies.`,
  },
];

export const KtuAppDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'doubt' | 'quiz' | 'cloud'>('doubt');
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');
  const [activeResponse, setActiveResponse] = useState(PRESET_QUERIES[0].response);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});

  const handleSelectTopic = (index: number) => {
    soundFx.playKeyClick();
    setSelectedTopicIndex(index);
    setIsGenerating(true);
    setTimeout(() => {
      setActiveResponse(PRESET_QUERIES[index].response);
      setIsGenerating(false);
      soundFx.playSuccess();
    }, 600);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuestion.trim()) return;
    soundFx.playKeyClick();
    setIsGenerating(true);
    setTimeout(() => {
      setActiveResponse(
        `### KTU AI Tutor Response for: "${customQuestion}"\n- **Gemini 1.5 Analysis:** Synthesizing university syllabus context...\n- **Resolution:** This topic corresponds to KTU B.Tech CSE semester syllabus. Review core algorithmic definitions and previous year questions (PYQs) for high scoring.`
      );
      setIsGenerating(false);
      setCustomQuestion('');
      soundFx.playSuccess();
    }, 700);
  };

  const handleAnswerQuiz = (qIdx: number, optIdx: number) => {
    soundFx.playKeyClick();
    const updated = { ...quizAnswers, [qIdx]: optIdx };
    setQuizAnswers(updated);
  };

  const calculateScore = () => {
    soundFx.playSuccess();
    let score = 0;
    if (quizAnswers[0] === 1) score++;
    if (quizAnswers[1] === 2) score++;
    setQuizScore(score);
  };

  return (
    <div className="cyber-card rounded-2xl overflow-hidden border border-emerald-500/25 bg-[#030805]">
      {/* Mobile Frame Header */}
      <div className="p-3 bg-[#040d06] border-b border-emerald-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Smartphone className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-slate-200">AI KTU Notes Mobile Simulator</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Gemini &amp; Firebase Connected</span>
        </div>
      </div>

      {/* App Navigation Tabs */}
      <div className="flex border-b border-emerald-950 bg-black text-xs font-mono">
        <button
          onClick={() => {
            soundFx.playHover();
            setActiveTab('doubt');
          }}
          className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'doubt'
              ? 'bg-emerald-950/60 text-emerald-300 border-b-2 border-emerald-400 font-bold'
              : 'text-slate-400 hover:text-emerald-300'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Gemini Tutor</span>
        </button>

        <button
          onClick={() => {
            soundFx.playHover();
            setActiveTab('quiz');
          }}
          className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'quiz'
              ? 'bg-emerald-950/60 text-emerald-300 border-b-2 border-emerald-400 font-bold'
              : 'text-slate-400 hover:text-emerald-300'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-green-400" />
          <span>KTU Quiz Engine</span>
        </button>

        <button
          onClick={() => {
            soundFx.playHover();
            setActiveTab('cloud');
          }}
          className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-2 transition-colors ${
            activeTab === 'cloud'
              ? 'bg-emerald-950/60 text-emerald-300 border-b-2 border-emerald-400 font-bold'
              : 'text-slate-400 hover:text-emerald-300'
          }`}
        >
          <Database className="w-3.5 h-3.5 text-emerald-400" />
          <span>Firebase Sync</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5">
        {activeTab === 'doubt' && (
          <div className="space-y-4">
            {/* Quick Topic Chips */}
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-2">Select KTU Syllabus Topic to Resolve:</span>
              <div className="flex flex-wrap gap-2">
                {PRESET_QUERIES.map((item, idx) => (
                  <button
                    key={item.topic}
                    onClick={() => handleSelectTopic(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedTopicIndex === idx
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/60 shadow-sm'
                        : 'bg-black text-slate-400 border border-slate-800 hover:text-emerald-300 hover:border-emerald-500/40'
                    }`}
                  >
                    {item.topic}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Assistant Output Card */}
            <div className="p-4 rounded-xl bg-black border border-emerald-500/25 text-xs font-mono relative overflow-hidden">
              {isGenerating ? (
                <div className="flex items-center gap-3 py-6 justify-center text-emerald-400">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Gemini API deconstructing syllabus notes...</span>
                </div>
              ) : (
                <div className="whitespace-pre-wrap leading-relaxed text-slate-200 space-y-2">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-950">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Gemini Doubt Resolution
                    </span>
                    <span className="text-[10px] text-emerald-600 font-mono">Latency: 142ms</span>
                  </div>
                  <div className="text-emerald-100/90">{activeResponse}</div>
                </div>
              )}
            </div>

            {/* Custom Query Input */}
            <form onSubmit={handleCustomSubmit} className="flex gap-2">
              <input
                type="text"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                placeholder="Ask KTU AI Tutor anything (e.g., Dijkstra algorithm time complexity)..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-black border border-slate-800 text-slate-200 text-xs font-mono focus:outline-none focus:border-emerald-500/60"
              />
              <button
                type="submit"
                disabled={!customQuestion.trim() || isGenerating}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-900 text-black font-bold text-xs font-mono flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Ask</span>
              </button>
            </form>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div className="space-y-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
              <p className="font-bold text-slate-200 mb-2">Q1: In LR parsing, what lookahead does SLR(1) use?</p>
              <div className="space-y-1.5 pl-2">
                {['First set of Left-Hand Side', 'Follow set of Left-Hand Side', 'All terminal tokens'].map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswerQuiz(0, i)}
                    className={`w-full text-left p-2 rounded-lg border transition-all ${
                      quizAnswers[0] === i
                        ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                        : 'bg-black/50 border-slate-800/80 text-slate-400 hover:text-emerald-300'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}. {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
              <p className="font-bold text-slate-200 mb-2">Q2: What is the strict requirement for Boyce-Codd Normal Form (BCNF)?</p>
              <div className="space-y-1.5 pl-2">
                {['Must have no multi-valued dependencies', 'Must not have transitively dependent attributes', 'For every X -> Y, X must be a super key'].map((opt, i) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswerQuiz(1, i)}
                    className={`w-full text-left p-2 rounded-lg border transition-all ${
                      quizAnswers[1] === i
                        ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-300'
                        : 'bg-black/50 border-slate-800/80 text-slate-400 hover:text-emerald-300'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}. {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={calculateScore}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold flex items-center gap-1.5"
              >
                <span>Submit &amp; Grade Quiz</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              {quizScore !== null && (
                <div className="flex items-center gap-2 text-emerald-300 font-bold bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-500/50">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Score: {quizScore} / 2 ({(quizScore / 2) * 100}%)</span>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'cloud' && (
          <div className="space-y-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-black border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span>Firestore Real-Time Stream Status:</span>
                <span className="text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 text-emerald-300">
                  SYNC_ACTIVE
                </span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <div className="p-2 rounded bg-black/60 border border-slate-800 flex justify-between">
                  <span>collection: <code>ktu_notes/CS401</code></span>
                  <span className="text-emerald-400">Snapshot Updated (12 docs)</span>
                </div>
                <div className="p-2 rounded bg-black/60 border border-slate-800 flex justify-between">
                  <span>security_rules: <code>RBAC (student/admin)</code></span>
                  <span className="text-emerald-400">Enforced</span>
                </div>
                <div className="p-2 rounded bg-black/60 border border-slate-800 flex justify-between">
                  <span>auth_provider: <code>Firebase Auth UID</code></span>
                  <span className="text-green-400">Verified</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
