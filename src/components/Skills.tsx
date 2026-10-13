import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { SkillCategory, SkillStatus } from '../types/portfolio';
import { Plus, Check, ChevronDown } from 'lucide-react';

const CATEGORIES: SkillCategory[] = [
  'Programming',
  'Web Development',
  'Computer Science Foundations',
  'Developer Tools and Technologies',
  'AI and Machine Learning',
];

const STATUS_OPTIONS: SkillStatus[] = [
  'Learning',
  'Practicing',
  'Building with',
  'Proficient',
  'Planned',
];

export const Skills: React.FC = () => {
  const { data, updateSkillStatus, addSkill } = usePortfolio();
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');
  const [isAddingSkill, setIsAddingSkill] = useState(false);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillCategory>('Programming');
  const [newSkillStatus, setNewSkillStatus] = useState<SkillStatus>('Learning');
  const [newSkillNotes, setNewSkillNotes] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;
    addSkill({
      name: newSkillName.trim(),
      category: newSkillCategory,
      status: newSkillStatus,
      notes: newSkillNotes.trim() || undefined,
    });
    setNewSkillName('');
    setNewSkillNotes('');
    setIsAddingSkill(false);
  };

  const filteredCategories =
    activeCategoryFilter === 'All'
      ? CATEGORIES
      : CATEGORIES.filter((c) => c === activeCategoryFilter);

  return (
    <section id="skills" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Technical Roadmap & Competencies</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Skills and Technologies
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Honest representation of what I am actively learning, practicing, and building with. Every skill status is verifiable and can be updated as I progress.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAddingSkill(!isAddingSkill)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            >
              <Plus className="h-3.5 w-3.5 text-emerald-500" />
              <span>Add Skill</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Single-line segmented buttons) */}
        <div className="mt-8 flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-medium scrollbar-none">
          <button
            onClick={() => setActiveCategoryFilter('All')}
            className={`rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap shrink-0 ${
              activeCategoryFilter === 'All'
                ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-slate-950 font-semibold'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
            }`}
          >
            All Categories ({data.skills.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = data.skills.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategoryFilter(cat)}
                className={`rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                  activeCategoryFilter === cat
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Add Skill Form Modal/Collapsible */}
        {isAddingSkill && (
          <form
            onSubmit={handleAddSubmit}
            className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50/20 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/10"
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono mb-3">
              Add New Technology or Competency
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., PyTorch, Docker, React"
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={newSkillCategory}
                  onChange={(e) => setNewSkillCategory(e.target.value as SkillCategory)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
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
                  Initial Status
                </label>
                <select
                  value={newSkillStatus}
                  onChange={(e) => setNewSkillStatus(e.target.value as SkillStatus)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                >
                  {STATUS_OPTIONS.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-3">
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Context / Notes (Optional)
              </label>
              <input
                type="text"
                placeholder="What are you currently studying or building with this?"
                value={newSkillNotes}
                onChange={(e) => setNewSkillNotes(e.target.value)}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              />
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingSkill(false)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
              >
                Save Skill
              </button>
            </div>
          </form>
        )}

        {/* Categorized Skill Lists */}
        <div className="mt-10 space-y-10">
          {filteredCategories.map((category) => {
            const categorySkills = data.skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {category}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {categorySkills.length} competencies
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                            {skill.name}
                          </h4>

                          {/* Editable Status Select */}
                          <div className="relative">
                            <select
                              value={skill.status}
                              onChange={(e) =>
                                updateSkillStatus(skill.id, e.target.value as SkillStatus)
                              }
                              aria-label={`Update status for ${skill.name}`}
                              className="appearance-none rounded-md border border-slate-200 bg-slate-50 py-1 pl-2 pr-6 text-[11px] font-medium text-slate-700 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-800/80 dark:text-emerald-400 cursor-pointer"
                            >
                              {STATUS_OPTIONS.map((st) => (
                                <option key={st} value={st}>
                                  {st}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-1.5 top-2 h-3 w-3 text-slate-400" />
                          </div>
                        </div>

                        {skill.notes && (
                          <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                            {skill.notes}
                          </p>
                        )}
                      </div>

                      {/* Clean metadata separator line */}
                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px] text-slate-400 dark:border-slate-800/60 dark:text-slate-500">
                        <span className="font-mono uppercase">{skill.category}</span>
                        <span className="font-medium text-slate-600 dark:text-slate-300">
                          {skill.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
