import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Project, ProjectCategory, ProjectStatus } from '../types/portfolio';
import { X, Github, ExternalLink, Edit3, Trash2, CheckCircle2, ArrowRight } from 'lucide-react';

const CATEGORIES: ProjectCategory[] = [
  'Web development',
  'Python',
  'C',
  'AI and automation',
  'Data and productivity',
];

const STATUSES: ProjectStatus[] = ['Idea', 'Planned', 'In Progress', 'Prototype', 'Completed'];

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject, updateProject, deleteProject } = usePortfolio();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Project | null>(selectedProject);

  if (!selectedProject) return null;

  const current = editForm || selectedProject;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editForm) {
      updateProject(editForm);
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete "${selectedProject.title}"?`)) {
      deleteProject(selectedProject.id);
      setSelectedProject(null);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#0c0e14] dark:text-slate-100 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close & Actions */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>PROJECT SPECIFICATION</span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              {current.status}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isEditing ? (
              <>
                <button
                  onClick={() => {
                    setEditForm(selectedProject);
                    setIsEditing(true);
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <Edit3 className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Edit Project</span>
                </button>
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-1.5 rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:border-red-900/40 dark:text-red-400 dark:hover:bg-red-950/40"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(false)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                Cancel Edit
              </button>
            )}

            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Edit Form Mode */}
        {isEditing && editForm ? (
          <form onSubmit={handleSave} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Project Title
              </label>
              <input
                type="text"
                required
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm({ ...editForm, category: e.target.value as ProjectCategory })
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Status
                </label>
                <select
                  value={editForm.status}
                  onChange={(e) =>
                    setEditForm({ ...editForm, status: e.target.value as ProjectStatus })
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                >
                  {STATUSES.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Problem Being Solved
              </label>
              <textarea
                rows={2}
                value={editForm.problem}
                onChange={(e) => setEditForm({ ...editForm, problem: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Overview / Description
              </label>
              <textarea
                rows={2}
                value={editForm.description}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Architectural Solution
              </label>
              <textarea
                rows={2}
                value={editForm.solution}
                onChange={(e) => setEditForm({ ...editForm, solution: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Tech Stack (comma-separated)
              </label>
              <input
                type="text"
                value={editForm.techStack.join(', ')}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    techStack: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                  })
                }
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Key Lessons Learned / Next Milestones
              </label>
              <textarea
                rows={2}
                value={editForm.lessonsLearned}
                onChange={(e) => setEditForm({ ...editForm, lessonsLearned: e.target.value })}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  GitHub URL (Placeholder or Real)
                </label>
                <input
                  type="text"
                  value={editForm.githubUrl}
                  onChange={(e) => setEditForm({ ...editForm, githubUrl: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Live Demo URL (Optional)
                </label>
                <input
                  type="text"
                  value={editForm.liveDemoUrl}
                  onChange={(e) => setEditForm({ ...editForm, liveDemoUrl: e.target.value })}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-5 py-2 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          /* View Mode */
          <div className="mt-6 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <span>{current.category}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400">
                  {current.status}
                </span>
                {current.isPlaceholderRepo && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-600 dark:text-amber-400">
                      Unverified Repo Placeholder
                    </span>
                  </>
                )}
              </div>
              <h3 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                {current.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {current.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Problem Identified
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {current.problem}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-900/50">
                <div className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Architectural Solution
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {current.solution}
                </p>
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800/80 dark:bg-slate-900/30">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Lessons Learned & Engineering Takeaway
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {current.lessonsLearned}
              </p>
            </div>

            {/* Tech Stack Unboxed */}
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Technology Stack
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                {current.techStack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="font-mono font-medium">{tech}</span>
                    {i < current.techStack.length - 1 && (
                      <span aria-hidden="true" className="text-slate-400">
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Links and Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 dark:border-slate-800">
              <div className="flex items-center gap-3">
                {current.githubUrl && (
                  <a
                    href={current.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-medium text-slate-800 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>View Repository</span>
                    {current.isPlaceholderRepo && (
                      <span className="text-[10px] text-amber-500">(Placeholder)</span>
                    )}
                  </a>
                )}

                {current.liveDemoUrl && current.liveDemoUrl !== '#' && (
                  <a
                    href={current.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              <span className="text-[11px] text-slate-400 font-mono">
                Dony Verukonda Project Blueprint
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
