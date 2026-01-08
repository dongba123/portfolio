import { User, Target, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

export function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <User className="h-12 w-12 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">John Doe</h3>
          <p className="text-primary font-medium mb-3">QA Engineer & Software Tester</p>
          <p className="text-muted-foreground leading-relaxed">
            Passionate QA professional with 5+ years of experience in manual and automated testing. 
            I specialize in finding edge cases others miss and creating comprehensive test strategies 
            that ensure software quality from development to deployment.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Attention to Detail</h4>
            <p className="text-sm text-muted-foreground">
              Meticulous approach to finding even the smallest inconsistencies.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Quality Focused</h4>
            <p className="text-sm text-muted-foreground">
              Committed to delivering bug-free, polished user experiences.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <User className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1">User Advocate</h4>
            <p className="text-sm text-muted-foreground">
              Testing from the user's perspective to ensure great UX.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
