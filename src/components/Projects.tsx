import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, ProjectCategory } from '../types/portfolio';
import { Plus, Github, ExternalLink, ArrowRight, Code2 } from 'lucide-react';

const FILTER_TABS: (ProjectCategory | 'All')[] = [
  'All',
  'Web development',
  'Python',
  'C',
  'AI and automation',
  'Data and productivity',
];

export const Projects: React.FC = () => {
  const { data, setSelectedProject, addProject } = usePortfolio();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');
  const [isAddingProject, setIsAddingProject] = useState(false);

  // New project state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ProjectCategory>('Python');
  const [newProblem, setNewProblem] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newSolution, setNewSolution] = useState('');
  const [newTech, setNewTech] = useState('');
  const [newLessons, setNewLessons] = useState('');

  const filteredProjects =
    activeFilter === 'All'
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addProject({
      title: newTitle.trim(),
      category: newCategory,
      status: 'Idea',
      problem: newProblem.trim() || 'Problem definition in progress.',
      description: newDesc.trim() || 'Project overview and scope.',
      solution: newSolution.trim() || 'Proposed technical architecture.',
      techStack: newTech
        ? newTech.split(',').map((s) => s.trim()).filter(Boolean)
        : ['Python'],
      lessonsLearned: newLessons.trim() || 'Documenting core learning milestones.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/new-project',
      liveDemoUrl: '',
      isPlaceholderRepo: true,
    });
    setNewTitle('');
    setNewProblem('');
    setNewDesc('');
    setNewSolution('');
    setNewTech('');
    setNewLessons('');
    setIsAddingProject(false);
  };

  return (
    <section id="projects" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Engineering Portfolio & Blueprints</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Projects & Technical Explorations
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              A transparent gallery of active builds, prototypes, and structured project ideas. All repositories and demos are labeled honestly as in progress, planned, or placeholder.
            </p>
          </div>

          <button
            onClick={() => setIsAddingProject(!isAddingProject)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 self-start md:self-auto"
          >
            <Plus className="h-3.5 w-3.5 text-emerald-500" />
            <span>Add Project Idea</span>
          </button>
        </div>

        {/* Filter Segmented Controls */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-medium scrollbar-none">
          {FILTER_TABS.map((tab) => {
            const count =
              tab === 'All'
                ? data.projects.length
                : data.projects.filter((p) => p.category === tab).length;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                  activeFilter === tab
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
                }`}
              >
                {tab} ({count})
              </button>
            );
          })}
        </div>

        {/* Add Project Form Collapsible */}
        {isAddingProject && (
          <form
            onSubmit={handleAddSubmit}
            className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50/20 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/10"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono mb-3">
              Add New Project Specification
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Memory Allocator Visualizer"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as ProjectCategory)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                >
                  {FILTER_TABS.filter((t) => t !== 'All').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Problem Being Solved
                </label>
                <input
                  type="text"
                  placeholder="What friction or challenge does this address?"
                  value={newProblem}
                  onChange={(e) => setNewProblem(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Brief Description & Solution
                </label>
                <textarea
                  rows={2}
                  placeholder="Summary of what the project does and the proposed technical approach."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Technologies (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="Python, SQLite, React"
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingProject(false)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
              >
                Save Project
              </button>
            </div>
          </form>
        )}

        {/* Projects Grid: Bento + Clean Framing */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md cursor-pointer dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700"
            >
              <div>
                {/* Visual Thumbnail (if available) or Minimalist Code Frame */}
                {project.imageUrl ? (
                  <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-emerald-300">
                      {project.category}
                    </span>
                  </div>
                ) : (
                  <div className="mb-4 flex h-24 w-full items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800/60 dark:bg-slate-900/80">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-emerald-500" />
                      <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
                        {project.category}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                )}

                {/* Metadata kicker: Zero-Pill Discipline */}
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400">
                    {project.status}
                  </span>
                  {project.isPlaceholderRepo && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[11px] text-amber-600 dark:text-amber-400">
                        Placeholder
                      </span>
                    </>
                  )}
                </div>

                <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors dark:text-slate-100 dark:group-hover:text-emerald-400">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                  {project.description}
                </p>

                {/* Problem snippet */}
                <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Problem: </span>
                  <span className="line-clamp-1">{project.problem}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                  {project.techStack.slice(0, 3).map((t, i) => (
                    <React.Fragment key={t}>
                      <span className="font-mono">{t}</span>
                      {i < Math.min(project.techStack.length, 3) - 1 && <span>·</span>}
                    </React.Fragment>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-slate-400">+{project.techStack.length - 3}</span>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span>View Details & Lessons</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
