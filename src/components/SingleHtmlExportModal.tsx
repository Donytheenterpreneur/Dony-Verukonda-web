import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { X, Copy, Check, Download, ExternalLink, Code2, Sparkles, FileCode } from 'lucide-react';

export const SingleHtmlExportModal: React.FC = () => {
  const { isExportHtmlOpen, setIsExportHtmlOpen } = usePortfolio();
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isExportHtmlOpen) {
      setLoading(true);
      fetch('/dony-verukonda-portfolio.html')
        .then((res) => res.text())
        .then((text) => {
          setHtmlContent(text);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error loading single HTML file', err);
          setLoading(false);
        });
    }
  }, [isExportHtmlOpen]);

  if (!isExportHtmlOpen) return null;

  const handleCopy = () => {
    if (!htmlContent) return;
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    if (!htmlContent) return;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dony-verukonda-portfolio.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsExportHtmlOpen(false)}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#0c0e14] dark:text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <FileCode className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Single-File HTML Code</span>
                <span className="font-mono text-[11px] font-normal text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                  Ready to Copy & Host
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Self-contained portfolio: HTML + Tailwind + Lucide + Reactive JS in 1 file.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download .html</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500 shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-white dark:text-slate-950" />
                  <span>Copied Entire Code!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Entire Code</span>
                </>
              )}
            </button>

            <button
              onClick={() => setIsExportHtmlOpen(false)}
              aria-label="Close modal"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-900 ml-1"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-slate-50 px-6 py-2.5 text-xs text-slate-600 dark:bg-slate-900/60 dark:text-slate-400 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-emerald-500">dony-verukonda-portfolio.html</span>
            <span>·</span>
            <span>Standalone format</span>
            <span>·</span>
            <span>Zero build steps needed</span>
          </div>
          <a
            href="/dony-verukonda-portfolio.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Preview in new tab</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Code View Area */}
        <div className="flex-1 overflow-auto bg-slate-950 p-4 text-xs font-mono text-slate-200 select-all max-h-[55vh]">
          {loading ? (
            <div className="flex h-40 items-center justify-center text-slate-500">
              Generating standalone HTML...
            </div>
          ) : (
            <pre className="whitespace-pre overflow-x-auto leading-relaxed">
              <code>{htmlContent}</code>
            </pre>
          )}
        </div>

        {/* Instructions Footer */}
        <div className="border-t border-slate-200 px-6 py-4 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            <strong className="text-slate-700 dark:text-slate-300">How to use: </strong>
            Save as <code className="text-emerald-500">index.html</code> on GitHub Pages, Netlify, or double-click to run locally.
          </p>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download File</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-1.5 font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Entire Code'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
