import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowRight, BookOpen, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Subtle background ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 opacity-25 blur-3xl dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.25), transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Hero: Typography Left, Architectural Computational Visual Right */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Status Kicker without decorative pulsing dots */}
            <div className="mb-5 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <span className="font-mono text-emerald-600 dark:text-emerald-400">FOCUS</span>
              <span aria-hidden="true">·</span>
              <span className="tracking-wide text-slate-800 dark:text-slate-200">
                {personalInfo.currentStatus}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl lg:leading-[1.12] dark:text-white" style={{ textWrap: 'balance' }}>
              {personalInfo.headline}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base font-medium text-emerald-600 sm:text-lg dark:text-emerald-400">
              {personalInfo.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {personalInfo.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600 dark:text-slate-950 dark:hover:bg-emerald-500 whitespace-nowrap shadow-sm"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800 whitespace-nowrap"
              >
                <BookOpen className="h-4 w-4 text-emerald-500" />
                <span>My Learning Journey</span>
              </a>
            </div>

            {/* Secondary Profile Links (Clearly designated placeholders) */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Profiles
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-emerald-400"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <span className="text-[10px] text-slate-400">(Placeholder)</span>
              </a>

              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-emerald-400"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
                <span className="text-[10px] text-slate-400">(Placeholder)</span>
              </a>

              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900 dark:hover:text-emerald-400"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Computational Visual Frame */}
          <div className="flex items-center lg:col-span-5">
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl dark:border-slate-800">
              <img
                src="/src/assets/images/hero_mesh_visual_1791886797061.jpg"
                alt="Minimalist computational geometry wireframe representing structured learning in AI and computer science"
                referrerPolicy="no-referrer"
                className="h-[360px] w-full object-cover lg:h-[420px]"
                onError={(e) => {
                  // Fallback container if local asset failed
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.fallback-frame');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />

              {/* Styled CSS/SVG Fallback */}
              <div className="fallback-frame hidden h-[360px] w-full flex-col justify-between p-6 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 text-slate-200 lg:h-[420px]">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">DV // SYSTEM_NODE</span>
                  <span>Computer Science & AI</span>
                </div>
                <div>
                  <Terminal className="h-8 w-8 text-emerald-400 mb-2" />
                  <p className="font-mono text-sm text-emerald-300">Foundation in Progress</p>
                  <p className="text-xs text-slate-400 mt-1">Python · C · Data Structures · Applied AI</p>
                </div>
              </div>

              {/* Subtle caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">Dony Verukonda</span>
                  <span className="font-mono text-emerald-400 text-[11px]">CS & AI ROADMAP</span>
                </div>
                <p className="mt-1 text-[11px] text-slate-400">
                  Building strong algorithmic fundamentals, practical tools, and AI prototypes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Proof & Focus Strip (Below the Hero Split) */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 sm:grid-cols-4 sm:p-5 dark:border-slate-800/80 dark:bg-slate-900/40">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Core Languages
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Python & C
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Active daily problem sets
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Projects & Ideas
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {data.projects.length} Tracked Blueprints
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              Realistic, documented scopes
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Roadmap Progress
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              9 Learning Tracks
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              CS, math, systems & AI
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Ambition
            </div>
            <div className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Future Tech Founder
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              AI agents & useful SaaS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
