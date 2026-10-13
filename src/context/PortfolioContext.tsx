import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PortfolioData,
  PersonalInfo,
  Skill,
  SkillStatus,
  Project,
  ProjectStatus,
  TrackStatus,
  WeeklyLog,
  CourseStatus,
  BookStatus,
  IdeaItem,
  Article,
} from '../types/portfolio';
import { INITIAL_PORTFOLIO_DATA } from '../data/initialData';

interface PortfolioContextType {
  data: PortfolioData;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article | null) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  isExportHtmlOpen: boolean;
  setIsExportHtmlOpen: (open: boolean) => void;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  updateSkillStatus: (id: string, status: SkillStatus) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateProject: (project: Project) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  deleteProject: (id: string) => void;
  updateTrackStatus: (id: number, status: TrackStatus) => void;
  addWeeklyLog: (log: Omit<WeeklyLog, 'id'>) => void;
  updateCourseStatus: (id: string, status: CourseStatus) => void;
  updateBookStatus: (id: string, status: BookStatus) => void;
  addIdea: (idea: Omit<IdeaItem, 'id'>) => void;
  updateIdea: (idea: IdeaItem) => void;
  deleteIdea: (id: string) => void;
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (article: Article) => void;
  resetToDefaults: () => void;
  exportData: () => void;
  importData: (jsonString: string) => boolean;
}

const STORAGE_KEY = 'dony_portfolio_data_v1';
const THEME_KEY = 'dony_portfolio_theme';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure core structure integrity
        return {
          ...INITIAL_PORTFOLIO_DATA,
          ...parsed,
          personalInfo: { ...INITIAL_PORTFOLIO_DATA.personalInfo, ...(parsed.personalInfo || {}) },
        };
      }
    } catch (e) {
      console.warn('Failed to parse portfolio data from storage, using defaults:', e);
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore
    }
    return 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [isExportHtmlOpen, setIsExportHtmlOpen] = useState(false);

  // Sync theme to DOM
  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // ignore
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Sync data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save data to localStorage', e);
    }
  }, [data]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateSkillStatus = (id: string, status: SkillStatus) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, status } : s)),
    }));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill: Skill = { ...skill, id: `skill-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
    }));
  };

  const updateProject = (project: Project) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === project.id ? project : p)),
    }));
    if (selectedProject?.id === project.id) {
      setSelectedProject(project);
    }
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject: Project = { ...project, id: `proj-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      projects: [newProject, ...prev.projects],
    }));
  };

  const deleteProject = (id: string) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
    if (selectedProject?.id === id) {
      setSelectedProject(null);
    }
  };

  const updateTrackStatus = (id: number, status: TrackStatus) => {
    setData((prev) => ({
      ...prev,
      learningTracks: prev.learningTracks.map((t) => (t.id === id ? { ...t, status } : t)),
    }));
  };

  const addWeeklyLog = (log: Omit<WeeklyLog, 'id'>) => {
    const newLog: WeeklyLog = { ...log, id: `log-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      weeklyLogs: [newLog, ...prev.weeklyLogs],
    }));
  };

  const updateCourseStatus = (id: string, status: CourseStatus) => {
    setData((prev) => ({
      ...prev,
      courses: prev.courses.map((c) => (c.id === id ? { ...c, status } : c)),
    }));
  };

  const updateBookStatus = (id: string, status: BookStatus) => {
    setData((prev) => ({
      ...prev,
      books: prev.books.map((b) => (b.id === id ? { ...b, status } : b)),
    }));
  };

  const addIdea = (idea: Omit<IdeaItem, 'id'>) => {
    const newIdea: IdeaItem = { ...idea, id: `idea-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      ideas: [newIdea, ...prev.ideas],
    }));
  };

  const updateIdea = (idea: IdeaItem) => {
    setData((prev) => ({
      ...prev,
      ideas: prev.ideas.map((i) => (i.id === idea.id ? idea : i)),
    }));
  };

  const deleteIdea = (id: string) => {
    setData((prev) => ({
      ...prev,
      ideas: prev.ideas.filter((i) => i.id !== id),
    }));
  };

  const addArticle = (article: Omit<Article, 'id'>) => {
    const newArt: Article = { ...article, id: `art-${Date.now()}` };
    setData((prev) => ({
      ...prev,
      articles: [newArt, ...prev.articles],
    }));
  };

  const updateArticle = (article: Article) => {
    setData((prev) => ({
      ...prev,
      articles: prev.articles.map((a) => (a.id === article.id ? article : a)),
    }));
    if (selectedArticle?.id === article.id) {
      setSelectedArticle(article);
    }
  };

  const resetToDefaults = () => {
    setData(INITIAL_PORTFOLIO_DATA);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const exportData = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dony-verukonda-portfolio-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.personalInfo && parsed.skills && parsed.projects) {
        setData(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON structure for portfolio', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        theme,
        toggleTheme,
        selectedProject,
        setSelectedProject,
        selectedArticle,
        setSelectedArticle,
        isCustomizerOpen,
        setIsCustomizerOpen,
        isExportHtmlOpen,
        setIsExportHtmlOpen,
        updatePersonalInfo,
        updateSkillStatus,
        addSkill,
        updateProject,
        addProject,
        deleteProject,
        updateTrackStatus,
        addWeeklyLog,
        updateCourseStatus,
        updateBookStatus,
        addIdea,
        updateIdea,
        deleteIdea,
        addArticle,
        updateArticle,
        resetToDefaults,
        exportData,
        importData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
