import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { IdeaItem } from '../types/portfolio';
import {
  Sparkles,
  ArrowRight,
  Plus,
  Trash2,
  Edit2,
  Workflow,
  Cpu,
  Layers,
  Users2,
  TrendingUp,
} from 'lucide-react';

const PHILOSOPHY_STEPS = [
  { step: '01', title: 'Learn', desc: 'Master foundational computer science, data structures, and algorithms.' },
  { step: '02', title: 'Identify Problem', desc: 'Observe real friction experienced by users or students in daily workflows.' },
  { step: '03', title: 'Build Prototype', desc: 'Develop a minimal working prototype to test feasibility rapidly.' },
  { step: '04', title: 'Test With Users', desc: 'Get unfiltered feedback from real people; measure what actually helps.' },
  { step: '05', title: 'Improve', desc: 'Iterate based on friction points, eliminate unnecessary complexity.' },
  { step: '06', title: 'Launch', desc: 'Deploy stable, maintainable software and build sustainable value.' },
];

const STAGE_OPTIONS: IdeaItem['currentStage'][] = [
  'Concept / Research',
  'Problem Validation',
  'Prototyping',
  'User Testing',
];

export const Vision: React.FC = () => {
  const { data, addIdea, updateIdea, deleteIdea } = usePortfolio();
  const [isAddingIdea, setIsAddingIdea] = useState(false);
  const [editingIdeaId, setEditingIdeaId] = useState<string | null>(null);

  // New idea state
  const [name, setName] = useState('');
  const [problem, setProblem] = useState('');
  const [targetUsers, setTargetUsers] = useState('');
  const [proposedSolution, setProposedSolution] = useState('');
  const [currentStage, setCurrentStage] = useState<IdeaItem['currentStage']>('Concept / Research');
  const [nextAction, setNextAction] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addIdea({
      name: name.trim(),
      problem: problem.trim(),
      targetUsers: targetUsers.trim(),
      proposedSolution: proposedSolution.trim(),
      currentStage,
      nextAction: nextAction.trim(),
    });
    setName('');
    setProblem('');
    setTargetUsers('');
    setProposedSolution('');
    setNextAction('');
    setIsAddingIdea(false);
  };

  return (
    <section id="vision" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Founder Ambition & Strategy</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Building Toward the Future
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            My long-term aim is not merely writing code, but building useful technology products and creating a sustainable, AI-driven software company. Here is where my technical interests intersect with entrepreneurship.
          </p>
        </div>

        {/* 5 Focus Pillars */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800/80 dark:bg-slate-900/40">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <Cpu className="h-4 w-4" />
              <span>AI AGENTS & AUTOMATION</span>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
              Autonomous Problem Solving
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Moving beyond static prompt completions toward autonomous systems that decompose complex workflows, invoke external APIs, verify outputs, and self-correct.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800/80 dark:bg-slate-900/40">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <Layers className="h-4 w-4" />
              <span>PRODUCTIVITY TOOLS</span>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
              High-Leverage Workflows
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Software that eliminates cognitive friction for students, researchers, and knowledge workers through intelligent retrieval, synthesized notes, and proactive task routing.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800/80 dark:bg-slate-900/40">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <Workflow className="h-4 w-4" />
              <span>SOFTWARE AS A SERVICE</span>
            </div>
            <h3 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
              Sustainable Business Models
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              Designing software products that deliver clear ROI and solve sharp, specific problems so users gladly pay for reliable value rather than speculative gimmicks.
            </p>
          </div>
        </div>

        {/* Development Philosophy Pipeline */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/30 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              The Product Development Loop
            </div>
            <span className="text-xs text-slate-400 font-mono">Disciplined Engineering</span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PHILOSOPHY_STEPS.map((s, idx) => (
              <div
                key={s.step}
                className="relative rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/80"
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{s.step}</span>
                  {idx < PHILOSOPHY_STEPS.length - 1 && (
                    <ArrowRight className="h-3 w-3 hidden lg:block text-slate-400" />
                  )}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {s.title}
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Idea Board */}
        <div className="mt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span>INCUBATOR</span>
                <span aria-hidden="true">·</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Project Idea Board
                </span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                Hypotheses in Validation
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Documented early concepts. None are represented as established businesses or commercial entities.
              </p>
            </div>

            <button
              onClick={() => setIsAddingIdea(!isAddingIdea)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 self-start sm:self-auto"
            >
              <Plus className="h-3.5 w-3.5 text-emerald-500" />
              <span>Add Idea</span>
            </button>
          </div>

          {/* Add Idea Collapsible Form */}
          {isAddingIdea && (
            <form
              onSubmit={handleAddSubmit}
              className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50/20 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/10"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                Log New Idea / Product Hypothesis
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Idea Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Distributed Task Orchestrator"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Current Stage
                  </label>
                  <select
                    value={currentStage}
                    onChange={(e) => setCurrentStage(e.target.value as IdeaItem['currentStage'])}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  >
                    {STAGE_OPTIONS.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Problem
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What specific friction does this address?"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Target Users
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. STEM students, freelance developers"
                    value={targetUsers}
                    onChange={(e) => setTargetUsers(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Next Action
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Conduct 5 customer discovery chats"
                    value={nextAction}
                    onChange={(e) => setNextAction(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Proposed Solution
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="How does the product address the problem?"
                    value={proposedSolution}
                    onChange={(e) => setProposedSolution(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingIdea(false)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
                >
                  Save Idea
                </button>
              </div>
            </form>
          )}

          {/* Ideas List Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.ideas.map((idea) => (
              <div
                key={idea.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">
                      {idea.currentStage}
                    </span>
                    <button
                      onClick={() => deleteIdea(idea.id)}
                      title="Delete idea"
                      className="text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <h4 className="mt-2 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {idea.name}
                  </h4>

                  <div className="mt-3 space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    <p>
                      <strong className="text-slate-800 dark:text-slate-200">Problem: </strong>
                      {idea.problem}
                    </p>
                    <p>
                      <strong className="text-slate-800 dark:text-slate-200">Users: </strong>
                      {idea.targetUsers}
                    </p>
                    <p>
                      <strong className="text-slate-800 dark:text-slate-200">Solution: </strong>
                      {idea.proposedSolution}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3 dark:border-slate-800/60">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-mono font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
                      Next Action:
                    </span>
                    <span>{idea.nextAction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
