import { Code2, Monitor, Palette, PenTool, GitBranch } from "lucide-react";
import { SkillCategory } from "@/types/skills.types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "jQuery",
    ],
  },
  {
    title: "UI Libraries",
    icon: Monitor,
    skills: [
      "Material UI",
      "Angular Material",
      "Bootstrap",
      "Tailwind CSS",
      "Flexbox",
      "PrimeNG",
    ],
  },
  {
    title: "Styling",
    icon: Palette,
    skills: ["HTML", "CSS", "SASS", "SCSS"],
  },
  {
    title: "Design Tools",
    icon: PenTool,
    skills: ["Figma", "PhotoPea", "Canva"],
  },
  {
    title: "Version Control",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Bitbucket", "Azure DevOps"],
  },
];
