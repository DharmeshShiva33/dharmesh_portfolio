export type ExperienceSide = "left" | "right";

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  intro: string;
  responsibilities: string[];
  tech: string[];
  side: ExperienceSide;
  logo: string;
}
