export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  status: string;
  stars?: number;
  contributors?: number;
  image?: string;
  github?: string;
  demo?: string;
}
