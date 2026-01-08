import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { BugElement } from './BugElement';

interface BugHuntSectionProps {
  isBugFound: (id: string) => boolean;
  onFindBug: (id: string) => void;
}

export function BugHuntSection({ isBugFound, onFindBug }: BugHuntSectionProps) {
  return (
    <section id="bug-hunt" className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
          🔍 Bug Hunt Zone
        </h2>
        <p className="text-muted-foreground text-center mb-8">
          This section contains intentional bugs. Click on them when you find them!
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 - Has misaligned button (Easy) */}
          <Card>
            <CardHeader>
              <CardTitle>Quality Assurance</CardTitle>
              <CardDescription>Ensuring software excellence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Quality assurance is essential for delivering reliable software products that meet user expectations.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Learn More</Button>
                <BugElement 
                  bugId="misaligned-button" 
                  isFound={isBugFound('misaligned-button')} 
                  onFind={onFindBug}
                >
                  <Button size="sm" className="translate-y-2">
                    Get Started
                  </Button>
                </BugElement>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 - Has typo (Easy) */}
          <Card>
            <CardHeader>
              <BugElement 
                bugId="typo" 
                isFound={isBugFound('typo')} 
                onFind={onFindBug}
              >
                <CardTitle>Tetsing Methodologies</CardTitle>
              </BugElement>
              <CardDescription>Different approaches to testing</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                From unit testing to integration testing, each methodology serves a unique purpose in the QA process.
              </p>
              <Button variant="outline" size="sm">Explore Methods</Button>
            </CardContent>
          </Card>

          {/* Card 3 - Has broken link (Medium) */}
          <Card>
            <CardHeader>
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Essential testing resources</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Good documentation is crucial for maintaining testing standards and knowledge sharing.
              </p>
              <BugElement 
                bugId="broken-link" 
                isFound={isBugFound('broken-link')} 
                onFind={onFindBug}
              >
                <Button variant="link" size="sm" className="p-0 h-auto text-muted-foreground cursor-not-allowed opacity-60">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View Resources
                </Button>
              </BugElement>
            </CardContent>
          </Card>

          {/* Card 4 - Has wrong placeholder (Medium) */}
          <Card>
            <CardHeader>
              <CardTitle>Bug Tracking</CardTitle>
              <CardDescription>Efficient issue management</CardDescription>
            </CardHeader>
            <CardContent>
              <BugElement 
                bugId="wrong-placeholder" 
                isFound={isBugFound('wrong-placeholder')} 
                onFind={onFindBug}
              >
                <p className="text-sm text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </BugElement>
              <Button variant="outline" size="sm">Track Issues</Button>
            </CardContent>
          </Card>

          {/* Card 5 - Has inconsistent font (Hard) */}
          <Card>
            <CardHeader>
              <BugElement 
                bugId="inconsistent-font" 
                isFound={isBugFound('inconsistent-font')} 
                onFind={onFindBug}
              >
                <CardTitle className="font-normal italic">Automation Testing</CardTitle>
              </BugElement>
              <CardDescription>Streamlining repetitive tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Automated testing helps reduce human error and speeds up the testing process significantly.
              </p>
              <Button variant="outline" size="sm">Automate Now</Button>
            </CardContent>
          </Card>

          {/* Card 6 - Has color mismatch (Hard) */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Testing</CardTitle>
              <CardDescription>Ensuring speed and stability</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Performance testing identifies bottlenecks and ensures applications run smoothly under load.
              </p>
              <BugElement 
                bugId="color-mismatch" 
                isFound={isBugFound('color-mismatch')} 
                onFind={onFindBug}
              >
                <Button 
                  size="sm" 
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Run Tests
                </Button>
              </BugElement>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
