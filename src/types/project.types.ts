export interface ProjectDetails {
  overview: string;
  role: string;
  features: string[];
  challenges: string;
  outcome: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  details: ProjectDetails;
}
