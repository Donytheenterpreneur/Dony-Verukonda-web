import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Clock, Calendar, Bookmark, Lock, FileText } from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle } = usePortfolio();

  if (!selectedArticle) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedArticle(null)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#0c0e14] dark:text-slate-100 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              {selectedArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            {selectedArticle.isDraft ? (
              <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                <Lock className="h-3 w-3" />
                <span>Working Draft</span>
              </span>
            ) : (
              <span className="text-slate-500">Published Article</span>
            )}
          </div>

          <button
            onClick={() => setSelectedArticle(null)}
            aria-label="Close article modal"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            {selectedArticle.title}
          </h2>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{selectedArticle.date}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{selectedArticle.readingTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span>By Dony Verukonda</span>
          </div>

          <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium italic text-slate-700 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300">
            &ldquo;{selectedArticle.summary}&rdquo;
          </p>
        </div>

        {/* Article Content */}
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 border-t border-slate-100 pt-6 dark:border-slate-800">
          {selectedArticle.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h3
                  key={idx}
                  className="mt-6 mb-2 text-lg font-bold text-slate-900 dark:text-white"
                >
                  {paragraph.replace('## ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h4
                  key={idx}
                  className="mt-4 mb-2 text-base font-semibold text-slate-900 dark:text-slate-200"
                >
                  {paragraph.replace('### ', '')}
                </h4>
              );
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('- ')) {
              return (
                <div key={idx} className="my-2 space-y-1.5 pl-4 border-l-2 border-emerald-500/30">
                  {paragraph.split('\n').map((line, lIdx) => (
                    <p key={lIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {line}
                    </p>
                  ))}
                </div>
              );
            }
            return (
              <p key={idx} className="text-xs sm:text-sm leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800 text-xs text-slate-500 font-mono">
          <span>Dony Verukonda · Learning Note</span>
          <button
            onClick={() => setSelectedArticle(null)}
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Back to notes
          </button>
        </div>
      </div>
    </div>
  );
};
