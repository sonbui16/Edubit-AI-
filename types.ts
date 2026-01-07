
export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  image: string;
  category: string;
  endDate: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface School {
  id: number;
  name: string;
}
