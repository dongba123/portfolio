import { User, Target, Award, ImageIcon } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import Image from 'next/image';

export function AboutSection() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative w-36 h-36 rounded-full bg-primary/10 overflow-hidden shrink-0">
        <Image src="/1.jpg" alt="Profile picture" fill className="object-cover" priority />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Tshering Netup Lama</h3>
          <p className="text-primary font-medium mb-3">QA Engineer & Software Tester</p>
          <p className="text-muted-foreground leading-relaxed">
           I am a detail-oriented QA Engineer with hands-on experience in manual testing and a strong understanding of real-world software workflows. I enjoy breaking applications to understand how they work and identifying issues before they reach users.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <Card>
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Attention to Detail</h4>
            <p className="text-sm text-muted-foreground">
              I carefully examine every screen, flow, and interaction to catch even the smallest UI, functional, and logical issues.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Award className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1">Quality Focused</h4>
            <p className="text-sm text-muted-foreground">
              I believe quality is built, not tested in. My goal is to ensure stable, user-friendly, and reliable software before release.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <User className="h-8 w-8 text-primary mb-3" />
            <h4 className="font-semibold text-foreground mb-1">User Advocate</h4>
            <p className="text-sm text-muted-foreground">
              I test applications from a real user’s perspective to ensure smooth experiences, clear feedback, and intuitive workflows.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
