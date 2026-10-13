import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { CourseStatus, BookCategory, BookStatus } from '../types/portfolio';
import { BookOpen, GraduationCap, ExternalLink, Bookmark, CheckCircle2, Clock } from 'lucide-react';

const COURSE_STATUSES: CourseStatus[] = ['Planned', 'In Progress', 'Completed'];
const BOOK_STATUSES: BookStatus[] = ['Want to Read', 'Currently Reading', 'Completed'];
const BOOK_CATEGORIES: (BookCategory | 'All')[] = [
  'All',
  'Computer science and AI',
  'Startups and entrepreneurship',
  'Business and strategy',
  'Productivity and habits',
  'Finance and investing',
];

export const CoursesAndReading: React.FC = () => {
  const { data, updateCourseStatus, updateBookStatus } = usePortfolio();
  const [selectedBookCategory, setSelectedBookCategory] = useState<BookCategory | 'All'>('All');

  const filteredBooks =
    selectedBookCategory === 'All'
      ? data.books
      : data.books.filter((b) => b.category === selectedBookCategory);

  return (
    <section id="reading-notes" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
            <span>06</span>
            <span aria-hidden="true">·</span>
            <span>Academic Curriculum & Reading Shelf</span>
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Courses and Reading List
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            A transparent record of formal computer science coursework explored or in progress, along with foundational books across engineering, startups, productivity, and finance.
          </p>
        </div>

        {/* Courses Section */}
        <div className="mt-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
            <GraduationCap className="h-4 w-4" />
            <span>UNIVERSITY COURSEWORK (VERIFIED ENROLLMENT)</span>
          </div>
          <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
            Academic Courses
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {data.courses.map((course) => (
              <div
                key={course.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-slate-400">{course.code}</span>

                    {/* Interactive Course Status */}
                    <select
                      value={course.status}
                      onChange={(e) =>
                        updateCourseStatus(course.id, e.target.value as CourseStatus)
                      }
                      aria-label={`Update status for ${course.title}`}
                      className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 cursor-pointer"
                    >
                      {COURSE_STATUSES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {course.title}
                  </h4>
                  <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {course.institution}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {course.description}
                  </p>

                  <div className="mt-4">
                    <div className="font-mono text-[11px] text-slate-400 mb-1.5">
                      Topics Covered:
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      {course.topicsCovered.map((t, idx) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {idx < course.topicsCovered.length - 1 && <span>·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Status: {course.status}
                  </span>
                  {course.link && (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400"
                    >
                      <span>Syllabus</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Books Section */}
        <div className="mt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <Bookmark className="h-4 w-4" />
                <span>INTELLECTUAL INFLUENCES</span>
              </div>
              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                Reading Shelf & Key Takeaways
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Only books marked as &ldquo;Completed&rdquo; are claimed as read. Currently tracking books across entrepreneurship, systems, and habits.
              </p>
            </div>
          </div>

          {/* Book Category Filter Tabs */}
          <div className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2 text-xs font-medium scrollbar-none">
            {BOOK_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedBookCategory(cat)}
                className={`rounded-lg px-3 py-1.5 transition-colors whitespace-nowrap shrink-0 ${
                  selectedBookCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-emerald-600 dark:text-slate-950 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-slate-400 text-[11px] truncate max-w-[150px]">
                      {book.category}
                    </span>

                    {/* Book Status Selector */}
                    <select
                      value={book.status}
                      onChange={(e) => updateBookStatus(book.id, e.target.value as BookStatus)}
                      aria-label={`Update reading status for ${book.title}`}
                      className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 cursor-pointer"
                    >
                      {BOOK_STATUSES.map((st) => (
                        <option key={st} value={st}>
                          {st}
                        </option>
                      ))}
                    </select>
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-slate-900 dark:text-slate-100">
                    {book.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">by {book.author}</p>

                  <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Core Lesson:
                    </span>{' '}
                    {book.keyTakeaways}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Reading Shelf</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {book.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
