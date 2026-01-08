import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface BugElementProps {
  bugId: string;
  isFound: boolean;
  onFind: (bugId: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function BugElement({ bugId, isFound, onFind, children, className }: BugElementProps) {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleClick = () => {
    if (!isFound) {
      onFind(bugId);
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 2000);
    }
  };

  return (
    <div className={cn('relative cursor-pointer', className)} onClick={handleClick}>
      {children}
      {(showFeedback || isFound) && (
        <div className={cn(
          'absolute -top-2 -right-2 flex items-center gap-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full shadow-lg z-10 transition-all duration-300',
          showFeedback ? 'animate-bounce' : 'opacity-80'
        )}>
          <CheckCircle2 className="h-3 w-3" />
          <span>Bug Found!</span>
        </div>
      )}
    </div>
  );
}
