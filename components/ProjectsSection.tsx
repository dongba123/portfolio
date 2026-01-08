import { ExternalLink, FileText, Bug } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'E-Commerce Platform QA',
    description: 'Comprehensive testing of a full-stack e-commerce application including payment flows, user authentication, and inventory management.',
    role: 'Lead QA Tester',
    achievements: ['Found 150+ bugs before launch', 'Reduced post-launch issues by 80%', 'Created 500+ test cases'],
    tools: ['Jira', 'Selenium', 'Postman'],
  },
  {
    title: 'Mobile Banking App',
    description: 'End-to-end testing of iOS and Android banking application with focus on security, performance, and accessibility testing.',
    role: 'QA Engineer',
    achievements: ['Zero security vulnerabilities at launch', 'Achieved 99.9% uptime', 'Compliance with banking regulations'],
    tools: ['Appium', 'Charles Proxy', 'TestFlight'],
  },
  {
    title: 'SaaS Dashboard Testing',
    description: 'Quality assurance for a B2B analytics dashboard with complex data visualizations and real-time updates.',
    role: 'QA Specialist',
    achievements: ['Cross-browser compatibility verified', 'Performance optimized by 40%', 'Automated 200+ regression tests'],
    tools: ['Cypress', 'BrowserStack', 'Lighthouse'],
  },
];

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <Card key={project.title}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  {project.title}
                </CardTitle>
                <CardDescription className="mt-1">{project.role}</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                <ExternalLink className="h-4 w-4" />
                Details
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            
            <div className="mb-4">
              <p className="text-sm font-medium text-foreground mb-2">Key Achievements:</p>
              <ul className="space-y-1">
                {project.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bug className="h-3 w-3 text-primary" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
