import { Bug } from 'lucide-react';
import { TOTAL_BUGS } from '../hooks/useBugHunt';
import { Progress } from './ui/progress';

interface ProgressCounterProps {
  found: number;
}

export function ProgressCounter({ found }: ProgressCounterProps) {
  const percentage = (found / TOTAL_BUGS) * 100;

  return (
    <div className="fixed top-4 right-4 bg-card border border-border rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
      <div className="flex items-center gap-2 mb-2">
        <Bug className="h-5 w-5 text-primary" />
        <span className="font-semibold text-foreground">Bug Hunt Progress</span>
      </div>
      <div className="flex items-center gap-3">
        <Progress value={percentage} className="flex-1 h-2" />
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
          {found}/{TOTAL_BUGS}
        </span>
      </div>
      {found === TOTAL_BUGS && (
        <p className="text-xs text-primary mt-2 font-medium">🎉 All bugs found!</p>
      )}
    </div>
  );
}
