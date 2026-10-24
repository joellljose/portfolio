import React from 'react';
import { motion } from 'framer-motion';
import { Zap, FileText } from 'lucide-react';
import { useViewMode } from '../context/ViewModeContext';
import { soundFx } from '../utils/sound';

interface ModeToggleProps {
  variant?: 'navbar' | 'floating';
}

export const ModeToggle: React.FC<ModeToggleProps> = ({ variant = 'navbar' }) => {
  const { mode, setMode } = useViewMode();

  const handleSelect = (newMode: 'advanced' | 'minimal') => {
    if (newMode === mode) return;
    soundFx.playSuccess();
    setMode(newMode);
  };

  if (variant === 'floating') {
    return (
      <aside aria-label="View mode switcher" className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <div className="p-1.5 rounded-2xl bg-[#020603]/90 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-black flex items-center gap-1 font-mono text-xs">
          <button
            onClick={() => handleSelect('advanced')}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              mode === 'advanced'
                ? 'text-black font-bold'
                : 'text-slate-400 hover:text-emerald-300'
            }`}
          >
            {mode === 'advanced' && (
              <motion.div
                layoutId="floating-mode-indicator"
                className="absolute inset-0 bg-emerald-400 rounded-xl"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Advanced</span>
            </span>
          </button>

          <button
            onClick={() => handleSelect('minimal')}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
              mode === 'minimal'
                ? 'text-black font-bold'
                : 'text-slate-400 hover:text-emerald-300'
            }`}
          >
            {mode === 'minimal' && (
              <motion.div
                layoutId="floating-mode-indicator"
                className="absolute inset-0 bg-emerald-400 rounded-xl"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Minimal</span>
            </span>
          </button>
        </div>
      </aside>
    );
  }

  return (
    <div className="p-1 rounded-xl bg-black border border-emerald-500/30 flex items-center gap-0.5 font-mono text-xs">
      <button
        onClick={() => handleSelect('advanced')}
        className={`relative flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] transition-all ${
          mode === 'advanced'
            ? 'text-black font-bold'
            : 'text-slate-400 hover:text-emerald-300'
        }`}
        title="Advanced View (Cyber Station, Terminal, Live Simulators)"
      >
        {mode === 'advanced' && (
          <motion.div
            layoutId="navbar-mode-indicator"
            className="absolute inset-0 bg-emerald-400 rounded-lg"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <Zap className="w-3 h-3" />
          <span className="hidden sm:inline">Advanced</span>
        </span>
      </button>

      <button
        onClick={() => handleSelect('minimal')}
        className={`relative flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] transition-all ${
          mode === 'minimal'
            ? 'text-black font-bold'
            : 'text-slate-400 hover:text-emerald-300'
        }`}
        title="Minimal View (Executive, Clean & Distraction-Free)"
      >
        {mode === 'minimal' && (
          <motion.div
            layoutId="navbar-mode-indicator"
            className="absolute inset-0 bg-emerald-400 rounded-lg"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          <FileText className="w-3 h-3" />
          <span className="hidden sm:inline">Minimal</span>
        </span>
      </button>
    </div>
  );
};
