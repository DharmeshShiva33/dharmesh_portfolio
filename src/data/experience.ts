import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Boston Institute of Analytics",
    role: "Frontend Developer",
    location: "Mumbai, India",
    period: "Mar 2025 – Present",
    intro:
      "Leading frontend development for large-scale education and HR platforms, focusing on scalable architecture and clean UI/UX implementation.",
    responsibilities: [
      "Built Student Management Portal (React) and HR Agent Platform (Next.js) from scratch",
      "Designed complete UI independently with responsive and user-centric approach",
      "Implemented Redux Toolkit, protected routes, and multi-role access (Student/Admin/Academic)",
      "Integrated Monaco Editor, Tiptap Editor, pagination, skeleton loaders, and file attachments",
      "Structured modular architecture with reusable components and clean folder structure",
    ],
    tech: ["React", "Next.js", "Redux Toolkit", "Formik", "Yup", "REST APIs"],
    side: "left",
    logo: "BIA",
  },
  {
    company: "Idealake Information Technologies Pvt. Ltd.",
    role: "Software Developer",
    location: "Remote",
    period: "Sep 2024 – Mar 2025",
    intro:
      "Developed scalable React applications with clean architecture and efficient state management.",
    responsibilities: [
      "Built dynamic frontend applications with API integrations",
      "Used Redux and Context API for predictable state management",
      "Collaborated with cross-functional teams for production delivery",
      "Optimized UI performance using Material UI and Tailwind CSS",
    ],
    tech: ["React", "Redux", "Material UI", "Tailwind CSS", "REST API"],
    side: "right",
    logo: "IL",
  },
  {
    company: "Ebrandz LLP",
    role: "Frontend Developer",
    location: "Mumbai, India",
    period: "Apr 2022 – Aug 2024",
    intro:
      "Built and maintained scalable Angular applications from scratch with a strong focus on clean architecture, performance optimization, and UI consistency.",
    responsibilities: [
      "Developed complete Angular applications from scratch using TypeScript and SCSS",
      "Designed and implemented a custom Angular Material theme aligned with brand guidelines",
      "Built reusable and modular component architecture for scalable development",
      "Implemented lazy loading and route-level code splitting for optimized performance",
      "Optimized Angular change detection strategy to reduce unnecessary re-renders",
      "Integrated REST APIs and handled dynamic data rendering",
      "Implemented form validations and reactive forms for complex workflows",
      "Collaborated with backend and design teams to deliver production-ready features",
    ],
    tech: [
      "Angular",
      "TypeScript",
      "SCSS",
      "Angular Material",
      "Reactive Forms",
      "Lazy Loading",
    ],
    side: "left",
    logo: "EB",
  },
];
