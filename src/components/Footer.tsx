import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Download, RotateCcw, SlidersHorizontal, ArrowUp, FileCode } from 'lucide-react';

export const Footer: React.FC = () => {
  const { data, resetToDefaults, exportData, setIsCustomizerOpen, setIsExportHtmlOpen } = usePortfolio();

  const handleReset = () => {
    if (confirm('Reset all portfolio customizations and local logs back to default starter state?')) {
      resetToDefaults();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12 transition-colors dark:border-slate-800 dark:bg-[#07080c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Brand & Identity */}
          <div>
            <div className="flex items-center gap-2.5 font-semibold text-slate-900 dark:text-slate-100">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-slate-900 text-[11px] font-bold text-white dark:bg-emerald-600 dark:text-slate-950">
                {data.personalInfo.initials}
              </span>
              <span className="text-sm tracking-tight">{data.personalInfo.name}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 max-w-md">
              Computer Science Student · Aspiring AI/ML Engineer · Future Tech Founder. Documenting what I learn and what I build.
            </p>
          </div>

          {/* Quick Data Management Actions */}
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <button
              onClick={() => setIsExportHtmlOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-50/50 px-3 py-1.5 font-medium text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-950/50"
            >
              <FileCode className="h-3.5 w-3.5 text-emerald-500" />
              <span>Copy Single HTML</span>
            </button>

            <button
              onClick={() => setIsCustomizerOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-emerald-500" />
              <span>Customize</span>
            </button>

            <button
              onClick={exportData}
              title="Download your modified portfolio data as JSON"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={handleReset}
              title="Restore initial starter defaults"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-500 hover:text-red-500 dark:border-slate-800 dark:text-slate-400 dark:hover:text-red-400"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>

            <button
              onClick={scrollToTop}
              title="Scroll back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Local Storage & Transparency Footnote */}
        <div className="mt-8 border-t border-slate-100 pt-6 text-[11px] text-slate-400 dark:border-slate-800/60 dark:text-slate-500">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              &copy; {new Date().getFullYear()} Dony Verukonda. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="font-mono">
              All edits persist in local browser storage. No unauthorized external telemetry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
