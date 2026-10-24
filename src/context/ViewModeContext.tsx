import React, { createContext, useContext, useState, useEffect } from 'react';
import { soundFx } from '../utils/sound';

export type ViewMode = 'advanced' | 'minimal';

interface ViewModeContextType {
  mode: ViewMode;
  isMinimal: boolean;
  toggleMode: () => void;
  setMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export const ViewModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('joel_portfolio_mode') as ViewMode | null;
      if (saved === 'minimal' || saved === 'advanced') {
        return saved;
      }
    }
    return 'advanced';
  });

  useEffect(() => {
    try {
      localStorage.setItem('joel_portfolio_mode', mode);
    } catch {
      // ignore local storage errors
    }
  }, [mode]);

  const setMode = (newMode: ViewMode) => {
    soundFx.playSuccess();
    setModeState(newMode);
  };

  const toggleMode = () => {
    soundFx.playSuccess();
    setModeState((prev) => (prev === 'advanced' ? 'minimal' : 'advanced'));
  };

  const isMinimal = mode === 'minimal';

  return (
    <ViewModeContext.Provider value={{ mode, isMinimal, toggleMode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const useViewMode = (): ViewModeContextType => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
};
