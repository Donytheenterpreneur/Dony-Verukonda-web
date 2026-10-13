import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Github, Linkedin, Copy, Check, Send, AlertCircle, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  const [copied, setCopied] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    // Trigger demo success and prepopulate mailto client
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formSubject || `Message from ${formName}`
    )}&body=${encodeURIComponent(
      `From: ${formName} (${formEmail})\n\n${formMessage}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-slate-200/80 py-16 lg:py-24 dark:border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Links & Brand Presence */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-mono">
              <span>08</span>
              <span aria-hidden="true">·</span>
              <span>Connect & Collaborate</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Get in Touch with Dony
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              I am open to discussions about computer science problem solving, collaborative open-source projects, AI research papers, and software entrepreneurship.
            </p>

            {/* Email Box with Copy */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40">
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>PRIMARY EMAIL</span>
                <span className="text-[10px] text-amber-500">(Placeholder)</span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-3">
                <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links List */}
            <div className="mt-6 space-y-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      GitHub
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Code repositories and problem sets
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <span>Placeholder</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-300 dark:border-slate-800/80 dark:bg-slate-900/40 dark:hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Professional profile and student network
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <span>Placeholder</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </div>

            {/* Privacy & Honesty Banner */}
            <div className="mt-8 rounded-lg border border-slate-200/60 bg-slate-50/50 p-4 text-xs text-slate-500 dark:border-slate-800/60 dark:bg-slate-900/20 dark:text-slate-400">
              <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <AlertCircle className="h-3.5 w-3.5 text-emerald-500" />
                <span>Verified Contact Policy</span>
              </div>
              <p className="mt-1 leading-relaxed">
                No private phone numbers, home addresses, or unverified affiliations are published. Update your personal links via the Customize modal at any time.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Send a Message
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Submissions open your native mail client and log safely into your local session.
              </p>

              {submitted && (
                <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-50/30 p-4 text-xs text-emerald-800 dark:border-emerald-500/20 dark:bg-emerald-950/20 dark:text-emerald-300">
                  Message initiated! Your default mail client was triggered with your message formatted for {personalInfo.email}.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project collaboration / CS query / General inquiry"
                    value={formSubject}
                    onChange={(e) => setFormSubject(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Dony, I saw your learning roadmap and wanted to connect about..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-emerald-600 dark:bg-emerald-600 dark:text-slate-950 dark:hover:bg-emerald-500 shadow-sm"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message (Direct Mailto)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
