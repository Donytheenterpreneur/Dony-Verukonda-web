import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { TrackStatus } from '../types/portfolio';
import { Plus, CheckCircle2, Clock, CircleDashed, ChevronRight, Calendar } from 'lucide-react';

const STATUS_ORDER: TrackStatus[] = ['Not Started', 'In Progress', 'Completed'];

export const LearningJourney: React.FC = () => {
  const { data, updateTrackStatus, addWeeklyLog } = usePortfolio();
  const [isAddingLog, setIsAddingLog] = useState(false);

  // New log form state
  const [logDate, setLogDate] = useState('October 2026');
  const [logWeekNumber, setLogWeekNumber] = useState(data.weeklyLogs.length + 1);
  const [logLearned, setLogLearned] = useState('');
  const [logBuilt, setLogBuilt] = useState('');
  const [logChallenges, setLogChallenges] = useState('');
  const [logNextSteps, setLogNextSteps] = useState('');

  const handleAddLogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!logLearned.trim()) return;
    addWeeklyLog({
      date: logDate.trim(),
      weekNumber: Number(logWeekNumber) || 1,
      whatILearned: logLearned.trim(),
      whatIBuilt: logBuilt.trim() || 'Experimental scripts and exercises.',
      challenges: logChallenges.trim() || 'Synthesizing theoretical concepts into code.',
      nextSteps: logNextSteps.trim() || 'Continuing to next milestone.',
    });
    setLogLearned('');
    setLogBuilt('');
    setLogChallenges('');
    setLogNextSteps('');
    setIsAddingLog(false);
  };

  const getStatusIcon = (status: TrackStatus) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-emerald-400" />;
      default:
        return <CircleDashed className="h-4 w-4 text-slate-400" />;
    }
  };

  return (
    <section id="roadmap" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
            <span>05</span>
            <span aria-hidden="true">·</span>
            <span>Structured Curriculum & Progress</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            The Computer Science & AI Roadmap
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            A 9-track roadmap moving from programming syntax and systems memory up through machine learning algorithms and software entrepreneurship. Click any track status to update your progress.
          </p>
        </div>

        {/* 9 Tracks Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.learningTracks.map((track) => (
            <div
              key={track.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-900/40"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-emerald-600 dark:text-emerald-400">
                    Track {track.number}
                  </span>

                  {/* Interactive Status Selector */}
                  <select
                    value={track.status}
                    onChange={(e) => updateTrackStatus(track.id, e.target.value as TrackStatus)}
                    aria-label={`Update progress for Track ${track.number}`}
                    className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 cursor-pointer"
                  >
                    {STATUS_ORDER.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <h3 className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {track.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {track.description}
                </p>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] text-slate-500 dark:border-slate-800/60 dark:text-slate-400">
                <span className="font-mono font-medium text-slate-700 dark:text-slate-300">
                  Topics:{' '}
                </span>
                <span>{track.topics}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Learning Log */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900/30">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <Calendar className="h-4 w-4" />
                <span>ACTIVE LOGS</span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                Weekly Learning Journal
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                A public record of what I learned, what I built, the challenges I ran into, and immediate next steps.
              </p>
            </div>

            <button
              onClick={() => setIsAddingLog(!isAddingLog)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 self-start sm:self-auto"
            >
              <Plus className="h-3.5 w-3.5 text-emerald-500" />
              <span>Log New Week</span>
            </button>
          </div>

          {/* Add Log Form */}
          {isAddingLog && (
            <form
              onSubmit={handleAddLogSubmit}
              className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50/20 p-5 dark:border-emerald-500/20 dark:bg-emerald-950/10"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                New Weekly Journal Entry
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Date / Month
                  </label>
                  <input
                    type="text"
                    required
                    value={logDate}
                    onChange={(e) => setLogDate(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Week Number
                  </label>
                  <input
                    type="number"
                    required
                    value={logWeekNumber}
                    onChange={(e) => setLogWeekNumber(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    What I Learned
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Key concepts, lectures, algorithms, or readings covered..."
                    value={logLearned}
                    onChange={(e) => setLogLearned(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    What I Built
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Problem set code, CLI scripts, prototypes, or experiments..."
                    value={logBuilt}
                    onChange={(e) => setLogBuilt(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Challenges Encountered
                  </label>
                  <input
                    type="text"
                    placeholder="Bugs, compiler quirks, mathematical friction..."
                    value={logChallenges}
                    onChange={(e) => setLogChallenges(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Next Steps
                  </label>
                  <input
                    type="text"
                    placeholder="Immediate topics to explore next week..."
                    value={logNextSteps}
                    onChange={(e) => setLogNextSteps(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddingLog(false)}
                  className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white dark:text-slate-950 hover:bg-emerald-500"
                >
                  Save Log
                </button>
              </div>
            </form>
          )}

          {/* Logs Timeline List */}
          <div className="mt-8 space-y-6">
            {data.weeklyLogs.map((log) => (
              <div
                key={log.id}
                className="relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 text-xs dark:border-slate-800">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Week {log.weekNumber}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-500">{log.date}</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Verified Journal Entry
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 text-xs leading-relaxed">
                  <div>
                    <div className="font-mono font-medium text-slate-800 dark:text-slate-200">
                      What I Learned:
                    </div>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{log.whatILearned}</p>
                  </div>

                  <div>
                    <div className="font-mono font-medium text-slate-800 dark:text-slate-200">
                      What I Built:
                    </div>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{log.whatIBuilt}</p>
                  </div>

                  <div>
                    <div className="font-mono font-medium text-amber-700 dark:text-amber-400">
                      Challenges:
                    </div>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{log.challenges}</p>
                  </div>

                  <div>
                    <div className="font-mono font-medium text-emerald-700 dark:text-emerald-400">
                      Next Steps:
                    </div>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{log.nextSteps}</p>
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
