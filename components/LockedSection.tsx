import { Lock, Unlock } from 'lucide-react';
import { cn } from '../lib/utils';

interface LockedSectionProps {
  title: string;
  unlocked: boolean;
  requiredBugs: number;
  currentBugs: number;
  children: React.ReactNode;
  className?: string;
}

export function LockedSection({ 
  title, 
  unlocked, 
  requiredBugs, 
  currentBugs, 
  children, 
  className 
}: LockedSectionProps) {
  return (
    <section className={cn('py-16 px-6', className)}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          {unlocked ? (
            <Unlock className="h-6 w-6 text-primary" />
          ) : (
            <Lock className="h-6 w-6 text-muted-foreground" />
          )}
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
          {!unlocked && (
            <span className="text-sm text-muted-foreground ml-auto">
              Find {requiredBugs - currentBugs} more bug{requiredBugs - currentBugs !== 1 ? 's' : ''} to unlock
            </span>
          )}
        </div>

        {unlocked ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        ) : (
          <div className="relative">
            <div className="blur-sm opacity-50 pointer-events-none select-none">
              {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[2px] rounded-lg">
              <div className="text-center p-6">
                <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">
                  Unlock by finding {requiredBugs} bugs
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
