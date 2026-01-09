import { Bug, ArrowDown, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  hasStarted: boolean;
  onStart: () => void;
  onReset: () => void;
}

export function HeroSection({ hasStarted, onStart, onReset }: HeroSectionProps) {
  const scrollToBugHunt = () => {
    onStart();
    setTimeout(() => {
      document.getElementById('bug-hunt')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
          <Bug className="h-4 w-4" />
          <span className="text-sm font-medium">Interactive QA Challenge</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Hey there! <br/>
          <span className="text-primary" > Welcome to my Portfolio.</span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          This site contains <strong>intentional bugs</strong>. Find them to unlock hidden content 
          and experience my QA mindset in action.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={scrollToBugHunt}
            className="gap-2"
          >
            {hasStarted ? 'Continue Bug Hunt' : 'Start Bug Hunt'}
            <ArrowDown className="h-4 w-4" />
          </Button>

          {hasStarted && (
            <Button 
              variant="outline" 
              size="lg"
              onClick={onReset}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Reset Progress
            </Button>
          )}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center max-w-md mx-auto">
          <div>
            <p className="text-2xl font-bold text-primary">6</p>
            <p className="text-sm text-muted-foreground">Bugs Hidden</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">4</p>
            <p className="text-sm text-muted-foreground">Sections to Unlock</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">∞</p>
            <p className="text-sm text-muted-foreground">QA Skills Shown</p>
          </div>
        </div>
      </div>
    </section>
  );
}
