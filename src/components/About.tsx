import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Compass, Cpu, Target, Rocket, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  const subsections = [
    {
      title: 'My Story',
      icon: Compass,
      content:
        "My curiosity began with wanting to understand what happens beneath the screen when software runs. As I dove deeper, I realized that modern computing is the closest thing we have to compounding leverage. I am currently focused on building solid fundamentals—writing clean code every day, tackling algorithmic problem sets, and documenting every milestone of the learning curve.",
    },
    {
      title: 'Why Computer Science',
      icon: Cpu,
      content:
        'Computer science provides the conceptual bedrock: understanding how memory is allocated in C, why algorithmic time and space complexity matters, and how systems manage scale. I believe great builders are not just consumers of high-level frameworks, but students of foundational computation who understand the machine from the ground up.',
    },
    {
      title: 'Why AI & Machine Learning',
      icon: Lightbulb,
      content:
        'Artificial intelligence is transforming software from static procedural instructions into probabilistic, adaptive problem solvers. Rather than treating AI as magic or chasing hype cycles, I am investing in the mathematical foundation—linear algebra, multivariable calculus, and probability—so I can understand model architectures, agent loops, and evaluation rigor deeply.',
    },
    {
      title: 'My Approach to Learning',
      icon: Target,
      content:
        'Active recall, spaced repetition, and project-based validation. I do not just watch lectures passively; I write code, break implementations, wrestle with compiler warnings, and build micro-projects. Everything I learn is tested by attempting to solve a concrete problem or explain the concept simply in my technical journal.',
    },
    {
      title: 'Long-Term Vision',
      icon: Rocket,
      content:
        'My ultimate ambition is to become a technology entrepreneur and found an AI-focused product company that solves real human pain points. I want to build durable, elegant software tools—especially in AI agents, automated workflows, and developer productivity—that create measurable economic and human impact.',
    },
  ];

  return (
    <section id="about" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
            <span>01</span>
            <span aria-hidden="true">·</span>
            <span>Identity & Direction</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            About Dony Verukonda
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {personalInfo.bio}
          </p>
        </div>

        {/* 5 Editorial Subsections */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subsections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.title}
                className={`flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700 ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 font-mono">
                    <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-sans font-medium">
                      <Icon className="h-4 w-4" />
                      <span>{sec.title}</span>
                    </span>
                    <span>0{idx + 1}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {sec.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 dark:border-slate-800/60 dark:text-slate-500 font-mono">
                  Dony Verukonda · Perspective
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
