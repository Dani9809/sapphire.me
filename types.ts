
export interface Skill {
  name: string;
  category: 'Technical' | 'Leadership' | 'Soft Skills';
  icon: React.ComponentType<{ className?: string }>;
}

export interface Project {
  title: string;
  description: string;
  results: string[];
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: 'work' | 'education';
}
