import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArticleCategory } from '../types/portfolio';
import { Search, Plus, BookOpen, Clock, Calendar, ArrowRight, Lock, FileText } from 'lucide-react';

const CATEGORIES: (ArticleCategory | 'All')[] = [
  'All',
  'Programming',
  'Computer Science',
  'AI and Machine Learning',
  'Projects',
  'Startup Ideas',
  'Book Notes',
];

export const NotesAndBlog: React.FC = () => {
  const { data, setSelectedArticle, addArticle } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddingArticle, setIsAddingArticle] = useState(false);

  // New article state
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<ArticleCategory>('Programming');
  const [newSummary, setNewSummary] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newReadTime, setNewReadTime] = useState('4 min read');
  const [isDraft, setIsDraft] = useState(true);

  const filteredArticles = data.articles.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    addArticle({
      title: newTitle.trim(),
      category: newCategory,
      summary: newSummary.trim() || 'Summary of technical reflection.',
      content: newContent.trim() || 'Detailed notes and takeaways.',
      date: `Draft · ${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`,
      readingTime: newReadTime.trim() || '3 min read',
      isDraft,
    });
    setNewTitle('');
    setNewSummary('');
    setNewContent('');
    setIsAddingArticle(false);
  };

  return (
    <section id="notes" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>Technical Notes & Reflections</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Notes and Technical Blog
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Personal engineering logs, core concepts broken down simply, and startup ideas in incubation. All pieces are explicitly designated as working drafts until finalized.
            </p>
          </div>

          <button
            onClick={() => setIsAddingArticle(!isAddingArticle)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 self-start md:self-auto"
          >
            <Plus className="h-3.5 w-3.5 text-emerald-500" />
            <span>New Note / Article</span>
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-medium scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search notes & articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Add Article Form */}
        {isAddingArticle && (
          <form
            onSubmit={handleAddSubmit}
            className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50/20 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/10"
          >
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
              Draft New Note or Article
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Memory Layout in C Programs"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as ArticleCategory)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                >
                  {CATEGORIES.filter((c) => c !== 'All').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Summary / Key Takeaway
                </label>
                <input
                  type="text"
                  required
                  placeholder="1-2 sentences summarizing the core idea..."
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Article Body (Markdown-friendly)
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your article paragraphs here. Use ## for section headers..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Estimated Reading Time
                </label>
                <input
                  type="text"
                  value={newReadTime}
                  onChange={(e) => setNewReadTime(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="flex items-center gap-2 pt-6">
                <label className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isDraft}
                    onChange={(e) => setIsDraft(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>Mark as Private / Unfinished Draft</span>
                </label>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsAddingArticle(false)}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
              >
                Save Article
              </button>
            </div>
          </form>
        )}

        {/* Articles List Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md cursor-pointer dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700"
            >
              <div>
                {/* Zero-Pill Metadata */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">
                      {art.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{art.readingTime}</span>
                  </div>

                  {art.isDraft && (
                    <span className="flex items-center gap-1 font-mono text-[11px] text-amber-600 dark:text-amber-400">
                      <Lock className="h-3 w-3" />
                      <span>Draft</span>
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors dark:text-slate-100 dark:group-hover:text-emerald-400">
                  {art.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400 font-mono">{art.date}</span>
                <span className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="mt-12 rounded-xl border border-dashed border-slate-200 p-8 text-center text-sm text-slate-500 dark:border-slate-800">
            No notes found matching &ldquo;{searchQuery}&rdquo;. Try another keyword or category.
          </div>
        )}
      </div>
    </section>
  );
};
