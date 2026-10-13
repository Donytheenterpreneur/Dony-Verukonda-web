export type SkillStatus = 'Learning' | 'Practicing' | 'Building with' | 'Proficient' | 'Planned';

export type SkillCategory =
  | 'Programming'
  | 'Web Development'
  | 'Computer Science Foundations'
  | 'Developer Tools and Technologies'
  | 'AI and Machine Learning';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  status: SkillStatus;
  notes?: string;
}

export type ProjectCategory =
  | 'Web development'
  | 'Python'
  | 'C'
  | 'AI and automation'
  | 'Data and productivity';

export type ProjectStatus = 'Idea' | 'Planned' | 'In Progress' | 'Prototype' | 'Completed';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  problem: string;
  description: string;
  solution: string;
  techStack: string[];
  lessonsLearned: string;
  githubUrl: string;
  liveDemoUrl: string;
  imageUrl?: string;
  isPlaceholderRepo?: boolean;
}

export interface IdeaItem {
  id: string;
  name: string;
  problem: string;
  targetUsers: string;
  proposedSolution: string;
  currentStage: 'Concept / Research' | 'Problem Validation' | 'Prototyping' | 'User Testing';
  nextAction: string;
}

export type TrackStatus = 'Not Started' | 'In Progress' | 'Completed';

export interface LearningTrack {
  id: number;
  number: string;
  title: string;
  topics: string;
  status: TrackStatus;
  description: string;
}

export interface WeeklyLog {
  id: string;
  date: string;
  weekNumber: number;
  whatILearned: string;
  whatIBuilt: string;
  challenges: string;
  nextSteps: string;
}

export type CourseStatus = 'Planned' | 'In Progress' | 'Completed';

export interface Course {
  id: string;
  title: string;
  institution: string;
  code: string;
  status: CourseStatus;
  description: string;
  topicsCovered: string[];
  link?: string;
}

export type BookCategory =
  | 'Computer science and AI'
  | 'Startups and entrepreneurship'
  | 'Business and strategy'
  | 'Productivity and habits'
  | 'Finance and investing';

export type BookStatus = 'Want to Read' | 'Currently Reading' | 'Completed';

export interface Book {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  status: BookStatus;
  keyTakeaways: string;
}

export type ArticleCategory =
  | 'Programming'
  | 'Computer Science'
  | 'AI and Machine Learning'
  | 'Projects'
  | 'Startup Ideas'
  | 'Book Notes';

export interface Article {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: ArticleCategory;
  readingTime: string;
  isDraft: boolean;
  content: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  headline: string;
  subtitle: string;
  description: string;
  currentStatus: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  ideas: IdeaItem[];
  learningTracks: LearningTrack[];
  weeklyLogs: WeeklyLog[];
  courses: Course[];
  books: Book[];
  articles: Article[];
}
