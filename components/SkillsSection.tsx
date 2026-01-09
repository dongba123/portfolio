import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming & Dev Platforms',
    skills: ["React",
        "MERN Stack (MongoDB, Express, React, Node.js)",
        "Java",
        "C++",
        "Next.js",
        "TypeScript",
        "Git & GitHub",],
  },
  {
    title: 'Testing & Methodologies',
    skills: ["Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "UAT",
        "Agile/Scrum",
        "Test Case Design",
        "Bug Reporting",
        "API Testing",
        "Cross-browser Testing"],
  },
  {
    title: 'QA Tools & Platforms',
    skills: ["Jira", "Postman", "Selenium", "BrowserStack"],
  },
];

export function SkillsSection() {
  return (
    <div className="space-y-6">
      {/* <div className="flex flex-wrap gap-2 mb-8">
        {['Manual Testing', 'Test Cases', 'Bug Reporting', 'Agile', 'Jira', 'Postman', 'API Testing', 'Regression'].map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
            {skill}
          </Badge>
        ))}
      </div> */}

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
