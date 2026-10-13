import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Vision } from './components/Vision';
import { LearningJourney } from './components/LearningJourney';
import { CoursesAndReading } from './components/CoursesAndReading';
import { NotesAndBlog } from './components/NotesAndBlog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { CustomizerModal } from './components/CustomizerModal';
import { SingleHtmlExportModal } from './components/SingleHtmlExportModal';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-[#090a0f] dark:text-slate-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Vision />
          <LearningJourney />
          <CoursesAndReading />
          <NotesAndBlog />
          <Contact />
        </main>
        <Footer />

        {/* Interactive Overlays */}
        <ProjectModal />
        <ArticleModal />
        <CustomizerModal />
        <SingleHtmlExportModal />
      </div>
    </PortfolioProvider>
  );
}
