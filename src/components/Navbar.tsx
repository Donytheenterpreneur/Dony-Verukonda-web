import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon, SlidersHorizontal, Menu, X, ArrowUpRight, FileCode } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { data, theme, toggleTheme, setIsCustomizerOpen, setIsExportHtmlOpen } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Vision', href: '#vision' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Reading & Notes', href: '#reading-notes' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md transition-colors dark:border-slate-800/80 dark:bg-[#090a0f]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2.5 font-semibold text-slate-900 transition-colors whitespace-nowrap shrink-0 dark:text-slate-100"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 text-xs font-bold text-white transition-colors group-hover:bg-emerald-600 dark:bg-slate-800 dark:text-emerald-400 dark:group-hover:bg-emerald-500 dark:group-hover:text-slate-950">
            {data.personalInfo.initials || 'DV'}
          </span>
          <span className="text-base tracking-tight">{data.personalInfo.name}</span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900 whitespace-nowrap shrink-0 dark:hover:text-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Theme Toggle, Personalize, Primary CTA) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-700 dark:hover:text-slate-100"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-emerald-400" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setIsExportHtmlOpen(true)}
            title="Copy or download the complete website as a single HTML file"
            className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-50/50 px-3 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-100 dark:border-emerald-500/20 dark:bg-emerald-950/30 dark:text-emerald-300 dark:hover:bg-emerald-950/50 whitespace-nowrap shrink-0 transition-colors"
          >
            <FileCode className="h-3.5 w-3.5 text-emerald-500" />
            <span>Single HTML</span>
          </button>

          <button
            onClick={() => setIsCustomizerOpen(true)}
            title="Personalize and edit portfolio details"
            className="hidden lg:flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900 whitespace-nowrap shrink-0"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-emerald-500" />
            <span>Customize</span>
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600 dark:text-slate-950 dark:hover:bg-emerald-500 whitespace-nowrap shrink-0 shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 md:hidden dark:border-slate-800 dark:text-slate-400"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-800 dark:bg-[#0c0e14]">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-slate-700 hover:text-emerald-500 dark:text-slate-300 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCustomizerOpen(true);
                }}
                className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Customize Portfolio Data</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white dark:text-slate-950"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
