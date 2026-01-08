import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'qa-portfolio-bugs-found';

export interface Bug {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hint: string;
}

export const BUGS: Bug[] = [
  { id: 'misaligned-button', name: 'Misaligned Button', difficulty: 'easy', hint: 'Something looks off-center...' },
  { id: 'typo', name: 'Typo in Text', difficulty: 'easy', hint: 'Check the spelling carefully.' },
  { id: 'broken-link', name: 'Broken Link', difficulty: 'medium', hint: 'Not all links work as expected.' },
  { id: 'wrong-placeholder', name: 'Wrong Placeholder', difficulty: 'medium', hint: 'Is that the right text?' },
  { id: 'inconsistent-font', name: 'Inconsistent Font', difficulty: 'hard', hint: 'Compare the headings closely.' },
  { id: 'color-mismatch', name: 'Color Mismatch', difficulty: 'hard', hint: 'One shade is slightly different.' },
];

export const TOTAL_BUGS = BUGS.length;

export function useBugHunt() {
  const [foundBugs, setFoundBugs] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFoundBugs(parsed.foundBugs || []);
        setHasStarted(parsed.hasStarted || false);
      } catch {
        // Invalid data, reset
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (hasStarted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ foundBugs, hasStarted }));
    }
  }, [foundBugs, hasStarted]);

  const startHunt = useCallback(() => {
    setHasStarted(true);
  }, []);

  const findBug = useCallback((bugId: string) => {
    setFoundBugs(prev => {
      if (prev.includes(bugId)) return prev;
      return [...prev, bugId];
    });
  }, []);

  const isBugFound = useCallback((bugId: string) => {
    return foundBugs.includes(bugId);
  }, [foundBugs]);

  const resetProgress = useCallback(() => {
    setFoundBugs([]);
    setHasStarted(false);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  const progress = foundBugs.length;
  const isComplete = progress === TOTAL_BUGS;

  // Unlock thresholds
  const aboutUnlocked = progress >= 2;
  const skillsUnlocked = progress >= 4;
  const projectsUnlocked = progress >= 5;
  const contactUnlocked = isComplete;

  return {
    foundBugs,
    progress,
    isComplete,
    hasStarted,
    startHunt,
    findBug,
    isBugFound,
    resetProgress,
    aboutUnlocked,
    skillsUnlocked,
    projectsUnlocked,
    contactUnlocked,
  };
}
