import { Trophy, Mail, Linkedin, Github, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function ContactSection() {
  return (
    <section className="py-16 px-6 bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
          <Trophy className="h-8 w-8 text-primary-foreground" />
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-4">
          🎉 You've Completed the QA Challenge!
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          You found all the bugs! This demonstrates the exact mindset I bring to every testing project.
          Now let's connect and discuss how I can help your team.
        </p>

        <Card className="max-w-md mx-auto mb-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3 text-left">
              <a 
                href="mailto:john.doe@example.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                john.doe@example.com
              </a>
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                linkedin.com/in/johndoe
              </a>
              <a 
                href="https://github.com/johndoe" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                github.com/johndoe
              </a>
            </div>
          </CardContent>
        </Card>

        <Button size="lg" className="gap-2">
          <Download className="h-5 w-5" />
          Download Resume
        </Button>
      </div>
    </section>
  );
}
