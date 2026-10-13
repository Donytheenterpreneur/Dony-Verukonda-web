import { PortfolioData } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    name: 'Dony Verukonda',
    initials: 'DV',
    headline: 'Learning to Build. Building to Create Impact.',
    subtitle: 'Computer Science Student | Aspiring AI/ML Engineer | Future Tech Founder',
    description:
      "I'm building my foundation in computer science, developing practical software projects, and exploring how artificial intelligence can solve meaningful problems. This website documents what I'm learning, what I'm building, and where I'm going.",
    currentStatus: 'Learning, experimenting, and building.',
    bio:
      "I'm a computer science student interested in artificial intelligence, machine learning, software development, and entrepreneurship. I'm building strong fundamentals in programming, mathematics, and computer science while turning what I learn into practical projects. My long-term ambition is to create useful technology products and build an AI-focused company.",
    email: 'dony.verukonda@placeholder.example',
    github: 'https://github.com/donyverukonda-placeholder',
    linkedin: 'https://linkedin.com/in/donyverukonda-placeholder',
    twitter: 'https://x.com/donyverukonda-placeholder',
    location: 'Open to Learning & Collaborating',
  },

  skills: [
    // Programming
    {
      id: 'p-1',
      name: 'Python',
      category: 'Programming',
      status: 'Building with',
      notes: 'Writing scripts, algorithmic problems, automation routines, and data exercises.',
    },
    {
      id: 'p-2',
      name: 'C',
      category: 'Programming',
      status: 'Learning',
      notes: 'Understanding low-level memory management, pointers, and systems programming.',
    },

    // Web Development
    {
      id: 'w-1',
      name: 'HTML',
      category: 'Web Development',
      status: 'Practicing',
      notes: 'Semantic layouts, accessible markup, forms, and document structure.',
    },
    {
      id: 'w-2',
      name: 'CSS',
      category: 'Web Development',
      status: 'Practicing',
      notes: 'Modern responsive layouts, Flexbox, CSS Grid, animations, and Tailwind CSS.',
    },
    {
      id: 'w-3',
      name: 'JavaScript',
      category: 'Web Development',
      status: 'Practicing',
      notes: 'ES6+ fundamentals, DOM manipulation, asynchronous programming, and web APIs.',
    },

    // CS Foundations
    {
      id: 'cs-1',
      name: 'Data Structures & Algorithms',
      category: 'Computer Science Foundations',
      status: 'Learning',
      notes: 'Arrays, linked lists, stacks, queues, trees, search, and sorting algorithms.',
    },
    {
      id: 'cs-2',
      name: 'Problem Solving',
      category: 'Computer Science Foundations',
      status: 'Practicing',
      notes: 'Algorithmic decomposition, breaking problems into edge cases and computational steps.',
    },
    {
      id: 'cs-3',
      name: 'Object-Oriented Programming',
      category: 'Computer Science Foundations',
      status: 'Learning',
      notes: 'Encapsulation, inheritance, polymorphism, and modular software design.',
    },

    // Developer Tools & Technologies
    {
      id: 'dt-1',
      name: 'Git',
      category: 'Developer Tools and Technologies',
      status: 'Practicing',
      notes: 'Version control, commit hygiene, branching strategies, and merge resolution.',
    },
    {
      id: 'dt-2',
      name: 'GitHub',
      category: 'Developer Tools and Technologies',
      status: 'Practicing',
      notes: 'Repository hosting, pull requests, issue tracking, and project documentation.',
    },
    {
      id: 'dt-3',
      name: 'Linux',
      category: 'Developer Tools and Technologies',
      status: 'Learning',
      notes: 'Command line navigation, bash basics, file permissions, and environment setup.',
    },
    {
      id: 'dt-4',
      name: 'SQL',
      category: 'Developer Tools and Technologies',
      status: 'Learning',
      notes: 'Relational data modeling, table schemas, queries, joins, and aggregates.',
    },
    {
      id: 'dt-5',
      name: 'APIs',
      category: 'Developer Tools and Technologies',
      status: 'Learning',
      notes: 'RESTful architecture, HTTP methods, JSON payloads, and third-party integrations.',
    },

    // AI and Machine Learning
    {
      id: 'ai-1',
      name: 'Artificial Intelligence Fundamentals',
      category: 'AI and Machine Learning',
      status: 'Learning',
      notes: 'Search spaces, heuristic evaluation, state machines, and problem formulation.',
    },
    {
      id: 'ai-2',
      name: 'Machine Learning Fundamentals',
      category: 'AI and Machine Learning',
      status: 'Learning',
      notes: 'Supervised vs. unsupervised learning, loss functions, gradient descent, and evaluation.',
    },
    {
      id: 'ai-3',
      name: 'Neural Networks & Deep Learning',
      category: 'AI and Machine Learning',
      status: 'Learning',
      notes: 'Perceptrons, multi-layer networks, activation functions, backpropagation concepts.',
    },
    {
      id: 'ai-4',
      name: 'AI Agents & Automation',
      category: 'AI and Machine Learning',
      status: 'Learning',
      notes: 'Tool use, orchestration flows, autonomous problem decomposition, and API loops.',
    },
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Personal Developer Portfolio',
      category: 'Web development',
      status: 'In Progress',
      problem:
        'Needed a personal digital home that represents my identity honestly as a CS student and future tech founder, without generic student templates or inflated claims.',
      description:
        'A minimalist, production-grade personal website and learning journal built with React, TypeScript, and modern styling.',
      solution:
        'Architected a modular showcase featuring an interactive learning roadmap, project idea incubator, reading list, and draft technical notes. Persists edits in localStorage.',
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
      lessonsLearned:
        'Mastered component decomposition, state persistence, responsive design tokens, and strict typographic hierarchy.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/developer-portfolio',
      liveDemoUrl: '#',
      imageUrl: '/src/assets/images/workspace_system_card_1791886798857.jpg',
      isPlaceholderRepo: true,
    },
    {
      id: 'proj-2',
      title: 'Student Expense Tracker',
      category: 'Python',
      status: 'Idea',
      problem:
        'Students struggle to track monthly budgets, recurring semester fees, and everyday discretionary spending with complicated spreadsheets.',
      description:
        'A lightweight CLI and web expense tracking utility specifically tailored for college budgeting and categorizing textbook and living expenses.',
      solution:
        'Planned architecture uses Python data structures or SQLite to record transactions, generate monthly summary charts, and flag spend limits.',
      techStack: ['Python', 'SQLite', 'Data Analysis'],
      lessonsLearned:
        'Planning clean database normalization and CLI argument parsing patterns.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/student-expense-tracker',
      liveDemoUrl: '',
      imageUrl: '/src/assets/images/neural_concept_card_1791886797643.jpg',
      isPlaceholderRepo: true,
    },
    {
      id: 'proj-3',
      title: 'Productivity & Study Planner',
      category: 'Web development',
      status: 'Planned',
      problem:
        'Standard calendar tools lack integration between course syllabi deadlines, daily revision blocks, and active recall schedules.',
      description:
        'A web application designed around spaced repetition cycles, syllabus task tracking, and focused Pomodoro study blocks.',
      solution:
        'Will implement a clean calendar matrix with priority queues and study milestone progress bars.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'Web Storage API'],
      lessonsLearned:
        'Understanding DOM scheduling algorithms and state synchronization.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/study-planner',
      liveDemoUrl: '',
      isPlaceholderRepo: true,
    },
    {
      id: 'proj-4',
      title: 'Weather Information App',
      category: 'Web development',
      status: 'Planned',
      problem:
        'Beginner developers need practical projects to master asynchronous HTTP fetching, error handling, and JSON parsing.',
      description:
        'A clean weather dashboard querying open meteorological APIs to render 5-day forecasts, precipitation probability, and wind metrics.',
      solution:
        'Lightweight responsive interface utilizing the Fetch API, debounced search inputs, and dynamic condition icons.',
      techStack: ['JavaScript', 'REST APIs', 'CSS Grid', 'OpenWeatherMap API'],
      lessonsLearned:
        'Handling asynchronous network promises, network failover, and rate limits.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/weather-info-app',
      liveDemoUrl: '',
      isPlaceholderRepo: true,
    },
    {
      id: 'proj-5',
      title: 'Python Automation Toolkit',
      category: 'Python',
      status: 'Idea',
      problem:
        'Repetitive operating system tasks like file sorting, PDF text extraction, and batch renaming consume unnecessary hours.',
      description:
        'A modular suite of Python command-line automation scripts designed to clean downloads folders, parse PDFs, and extract data into CSVs.',
      solution:
        'Will use Python standard libraries (os, shutil, re, argparse) and targeted libraries to automate common daily computing friction.',
      techStack: ['Python 3', 'Argparse', 'File I/O', 'Regex'],
      lessonsLearned:
        'Structuring reusable CLI tools with clear documentation and error boundaries.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/python-automation-toolkit',
      liveDemoUrl: '',
      isPlaceholderRepo: true,
    },
    {
      id: 'proj-6',
      title: 'AI-Powered Study Assistant',
      category: 'AI and automation',
      status: 'Planned',
      problem:
        'Dense academic textbooks and lecture notes are difficult to query quickly for concise concept clarifications and flashcards.',
      description:
        'An experimental study tool designed to summarize academic lecture notes, generate self-test quizzes, and explain complex topics simply.',
      solution:
        'Exploring prompt engineering, token management, and structured JSON output using Gemini models to transform raw notes into review decks.',
      techStack: ['Python', 'Gemini API', 'Vector Search Concepts', 'Markdown Parser'],
      lessonsLearned:
        'Understanding prompt chaining, context window limits, and evaluation of generated responses.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/ai-study-assistant',
      liveDemoUrl: '',
      imageUrl: '/src/assets/images/hero_mesh_visual_1791886797061.jpg',
      isPlaceholderRepo: true,
    },
    {
      id: 'proj-7',
      title: 'AI Agent Experiments',
      category: 'AI and automation',
      status: 'Idea',
      problem:
        'Single-turn LLM prompts cannot execute multi-step research or self-correct when code outputs produce errors.',
      description:
        'A sandbox for prototyping autonomous multi-step reasoning loops, tool calling protocols, and task decomposition.',
      solution:
        'Will build minimal ReAct (Reason + Act) loop implementations from scratch in Python to demystify how agent frameworks function under the hood.',
      techStack: ['Python', 'Tool Calling', 'ReAct Pattern', 'API Loops'],
      lessonsLearned:
        'Gaining deep insight into agentic loops, loop termination conditions, and state serialization.',
      githubUrl: 'https://github.com/donyverukonda-placeholder/ai-agent-experiments',
      liveDemoUrl: '',
      isPlaceholderRepo: true,
    },
  ],

  ideas: [
    {
      id: 'idea-1',
      name: 'Agentic Student Workspace',
      problem: 'College students juggle scattered LMS announcements, syllabi PDFs, and assignment rubrics with no unified intelligence layer.',
      targetUsers: 'Undergraduate and graduate STEM students.',
      proposedSolution: 'A local-first desktop workspace with an embedded lightweight agent that reads assignment PDFs and populates revision schedules.',
      currentStage: 'Problem Validation',
      nextAction: 'Interview 10 classmates about their largest friction point in managing course deadlines.',
    },
    {
      id: 'idea-2',
      name: 'Autonomous Code Review Assistant for Learners',
      problem: 'Beginner programmers get stuck on cryptic compiler errors and bad style habits without access to continuous mentor feedback.',
      targetUsers: 'Students in introductory CS courses (CS50, introductory C/Python).',
      proposedSolution: 'A CLI tool that explains compiler errors in conversational English with Socratic guiding questions rather than writing the solution.',
      currentStage: 'Concept / Research',
      nextAction: 'Prototype error explanation prompt chains on CS50 problem set submissions.',
    },
    {
      id: 'idea-3',
      name: 'Micro-SaaS for Local Course Note Synthesis',
      problem: 'Study groups lack collaborative tools that automatically resolve conflicting notes taken during fast-paced lectures.',
      targetUsers: 'University student cohorts & study teams.',
      proposedSolution: 'A collaborative markdown canvas that aligns and merges multiple student lecture transcripts into one definitive guide.',
      currentStage: 'Concept / Research',
      nextAction: 'Map out architecture and verify real-time CRDT feasibility.',
    },
    {
      id: 'idea-4',
      name: 'Developer Knowledge Graph Generator',
      problem: 'Engineers read documentation and technical blog posts without retaining how core primitives connect to each other.',
      targetUsers: 'Self-taught developers, bootcamp learners, CS students.',
      proposedSolution: 'A browser extension that extracts key definitions from technical documentation and constructs an interactive local knowledge graph.',
      currentStage: 'Concept / Research',
      nextAction: 'Research browser extension APIs and lightweight graph rendering libraries.',
    },
  ],

  learningTracks: [
    {
      id: 1,
      number: '01',
      title: 'Programming Fundamentals',
      topics: 'Python syntax, control flow, functions, testing, and introduction to C low-level memory.',
      status: 'In Progress',
      description: 'Building deep fluency with procedural logic, memory allocation, and debugging.',
    },
    {
      id: 2,
      number: '02',
      title: 'Computer Science & Algorithms',
      topics: 'Data structures, algorithm analysis, asymptotic complexity (Big O), sorting, and graph basics.',
      status: 'In Progress',
      description: 'Understanding computational efficiency, space/time trade-offs, and rigorous algorithmic problem solving.',
    },
    {
      id: 3,
      number: '03',
      title: 'Developer Workflow & Tooling',
      topics: 'Git version control, GitHub workflows, Linux terminal commands, and SQL database basics.',
      status: 'In Progress',
      description: 'Developing the daily toolkit of a professional software engineer.',
    },
    {
      id: 4,
      number: '04',
      title: 'Web Development & APIs',
      topics: 'HTML5 semantic markup, modern CSS/Tailwind, JavaScript DOM and asynchronous fetch, REST APIs.',
      status: 'In Progress',
      description: 'Creating responsive, accessible user interfaces and connecting them to external web services.',
    },
    {
      id: 5,
      number: '05',
      title: 'Mathematics for AI',
      topics: 'Linear algebra (vectors, matrices), multivariate calculus (gradients), probability & statistics.',
      status: 'In Progress',
      description: 'Constructing the theoretical foundation required to understand how machine learning models learn.',
    },
    {
      id: 6,
      number: '06',
      title: 'Artificial Intelligence Foundations',
      topics: 'Search algorithms (A*, minimax), knowledge representation, heuristics, logic, and constraint satisfaction.',
      status: 'Not Started',
      description: 'Exploring classical AI paradigms and decision-making systems before deep learning.',
    },
    {
      id: 7,
      number: '07',
      title: 'Machine Learning',
      topics: 'Supervised learning, regression, classification, neural network mechanics, and model evaluation.',
      status: 'Not Started',
      description: 'Training and evaluating practical models using established ML libraries and datasets.',
    },
    {
      id: 8,
      number: '08',
      title: 'AI Applications & Agents',
      topics: 'LLM APIs, prompt architecture, tool invocation, ReAct patterns, and autonomous automation loops.',
      status: 'Not Started',
      description: 'Building intelligent software systems that interact with external environments.',
    },
    {
      id: 9,
      number: '09',
      title: 'Entrepreneurship & Product Building',
      topics: 'Customer discovery, lean prototyping, user validation, pricing, and launching sustainable software.',
      status: 'In Progress',
      description: 'Bridging engineering skills with product intuition and business viability.',
    },
  ],

  weeklyLogs: [
    {
      id: 'log-3',
      date: 'October 2026',
      weekNumber: 3,
      whatILearned:
        'Explored algorithmic time complexity (Big-O notation) and recursion in Python and C. Studied pointer manipulation and stack vs. heap allocation.',
      whatIBuilt:
        'Created recursive binary search implementations and benchmarked runtime differences across array sizes.',
      challenges:
        'Understanding pointer arithmetic syntax in C and preventing segmentation faults when referencing unallocated memory.',
      nextSteps:
        'Begin implementing custom linked lists and dynamic arrays in C from scratch to internalize memory management.',
    },
    {
      id: 'log-2',
      date: 'September 2026',
      weekNumber: 2,
      whatILearned:
        'Learned modern asynchronous JavaScript concepts (Promises, async/await) and practiced querying public APIs using Fetch.',
      whatIBuilt:
        'Built a test script to parse weather API data and return structured console outputs.',
      challenges:
        'Managing promise rejections gracefully when network rate limits were encountered.',
      nextSteps:
        'Connect asynchronous data queries to a clean responsive HTML/CSS dashboard layout.',
    },
    {
      id: 'log-1',
      date: 'September 2026',
      weekNumber: 1,
      whatILearned:
        'Deepened Git workflow discipline: practicing atomic commits, descriptive messages, branch creation, and merge conflict resolution.',
      whatIBuilt:
        'Structured the base repository for my developer portfolio and established reusable data models.',
      challenges:
        'Deciding on an honest, disciplined content model that reflects my exact learning stage without inflating claims.',
      nextSteps:
        'Complete the full interactive roadmap interface and project gallery filters.',
    },
  ],

  courses: [
    {
      id: 'course-1',
      title: "CS50's Introduction to Programming with Python (CS50P)",
      institution: 'Harvard University / edX',
      code: 'CS50P',
      status: 'In Progress',
      description:
        'An introduction to programming using Python. Covers functions, variables, conditionals, loops, exceptions, libraries, unit tests, file I/O, regular expressions, and object-oriented programming.',
      topicsCovered: ['Functions & Variables', 'Conditionals & Loops', 'Exceptions & Unit Tests', 'File I/O', 'Regex', 'OOP'],
      link: 'https://cs50.harvard.edu/python/',
    },
    {
      id: 'course-2',
      title: "CS50's Introduction to Computer Science (CS50x)",
      institution: 'Harvard University / edX',
      code: 'CS50x',
      status: 'In Progress',
      description:
        'An intellectual enterprise introducing the fundamental concepts of computer science and the art of programming: computational thinking, algorithms, data structures, resource management, security, and software engineering.',
      topicsCovered: ['C Fundamentals', 'Arrays & Memory', 'Algorithms', 'Data Structures', 'Python', 'SQL', 'HTML/CSS/JS'],
      link: 'https://cs50.harvard.edu/x/',
    },
    {
      id: 'course-3',
      title: 'Introduction to Computer Science and Programming in Python',
      institution: 'MIT OpenCourseWare',
      code: 'MIT 6.0001',
      status: 'Planned',
      description:
        'Intended for students with little or no programming experience. Aims to provide an understanding of the role computation can play in solving problems and help students write small programs that allow them to accomplish useful goals.',
      topicsCovered: ['Branching & Iteration', 'String Manipulation & Bisection Search', 'Decomposition & Abstraction', 'Object-Oriented Programming', 'Computational Complexity'],
      link: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
    },
  ],

  books: [
    {
      id: 'book-1',
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'Productivity and habits',
      status: 'Currently Reading',
      keyTakeaways:
        'Small, incremental improvements (the 1% rule) compound dramatically over time. Building strong study systems matters infinitely more than setting vague goals.',
    },
    {
      id: 'book-2',
      title: 'The Lean Startup',
      author: 'Eric Ries',
      category: 'Startups and entrepreneurship',
      status: 'Currently Reading',
      keyTakeaways:
        'The Build-Measure-Learn feedback loop. Validated learning via Minimum Viable Products (MVPs) prevents wasting months building software nobody actually needs.',
    },
    {
      id: 'book-3',
      title: 'Zero to One',
      author: 'Peter Thiel with Blake Masters',
      category: 'Startups and entrepreneurship',
      status: 'Want to Read',
      keyTakeaways:
        'Notes on startups and how to build the future: the difference between vertical innovation (0 to 1) and horizontal copying (1 to n).',
    },
    {
      id: 'book-4',
      title: 'Rich Dad Poor Dad',
      author: 'Robert T. Kiyosaki',
      category: 'Finance and investing',
      status: 'Want to Read',
      keyTakeaways:
        'Foundational perspective on assets versus liabilities, cash flow, and cultivating financial literacy early in life.',
    },
    {
      id: 'book-5',
      title: 'The Intelligent Investor',
      author: 'Benjamin Graham',
      category: 'Finance and investing',
      status: 'Want to Read',
      keyTakeaways:
        'Principles of value investing, emotional discipline, long-term thinking, and margin of safety.',
    },
  ],

  articles: [
    {
      id: 'art-1',
      title: "What I'm Learning in Python",
      summary:
        'Reflections on transitioning from basic syntax to writing idiomatic Python, understanding generator expressions, and structuring modular scripts.',
      date: 'Draft · October 2026',
      category: 'Programming',
      readingTime: '4 min read',
      isDraft: true,
      content: `## The Transition from Syntax to Problem Solving

When I first opened a Python interpreter, it felt almost deceptively simple. Writing \`print("Hello, world!")\` or building a basic loop happens in minutes. However, the real depth of the language emerges when you move beyond basic syntax into writing clean, maintainable code.

### Core Takeaways So Far

1. **Readability is a Feature, Not an Afterthought**: Python's philosophy (PEP 20) emphasizes that readable code is easier to debug and extend. Using expressive variable names and clear function contracts saves hours of debugging later.
2. **Data Structures Dictate Solution Quality**: Choosing between a dictionary, list, set, or tuple is not just about memory; it shapes the asymptotic complexity of your algorithms.
3. **Defensive Programming**: Learning how to wrap risky operations in \`try...except\` blocks and write unit tests before claiming a script is finished.

My goal this month is to finish all problem sets in CS50P and begin building practical automation tools that solve small, real-world annoyances in my daily workflow.`,
    },
    {
      id: 'art-2',
      title: 'My First Steps Into Artificial Intelligence',
      summary:
        'De-hyping AI by breaking it down into search spaces, state representation, optimization mathematics, and practical problem constraints.',
      date: 'Draft · October 2026',
      category: 'AI and Machine Learning',
      readingTime: '5 min read',
      isDraft: true,
      content: `## Looking Past the Hype

Artificial intelligence is surrounded by extraordinary marketing buzz. As a student learning computer science, my instinct is to strip away the marketing layer and inspect the core mechanisms: what is actually happening when a system appears to "reason"?

### The Spectrum of AI

Before modern transformer models and deep neural networks, AI was largely about:
- **State Spaces & Search**: Formulating a problem as a tree or graph of possible states and evaluating choices with heuristics (e.g., A* search, Minimax).
- **Constraint Satisfaction**: Finding configurations that satisfy strict rules (such as scheduling or map coloring).
- **Optimization**: Finding the parameter weights that minimize a mathematical loss function.

Understanding that modern AI is grounded in linear algebra, calculus, and probability helps remove the mystique. It makes the discipline accessible and actionable: if I build solid math foundations, I can understand how modern models work from the inside out.`,
    },
    {
      id: 'art-3',
      title: 'Understanding Git and GitHub',
      summary:
        'Why version control is the single most important skill for a junior developer and how mental models of the commit graph prevent terminal panic.',
      date: 'Draft · October 2026',
      category: 'Computer Science',
      readingTime: '4 min read',
      isDraft: true,
      content: `## Developing a Mental Model for Version Control

When beginners start using Git, it often feels like a series of incantations: \`git add .\`, \`git commit -m "update"\`, \`git push\`. But without a conceptual mental model of snapshots and the Directed Acyclic Graph (DAG), any unexpected merge conflict triggers panic.

### What Clicked for Me

1. **Git Records Snapshots, Not Diffs**: Thinking of each commit as a snapshot of your entire project repository makes branching and checkout intuitive.
2. **Branches are Just Pointers**: A branch in Git is essentially an inexpensive, 40-character SHA pointer moving forward as you commit.
3. **Atomic Commits**: Making small, single-purpose commits makes tracking bugs and rolling back changes painless.

Documenting my commits cleanly is not just good practice for future team collaboration; it is also a public log of my learning process.`,
    },
    {
      id: 'art-4',
      title: 'Mathematics I Need for Machine Learning',
      summary:
        'Mapping out my curriculum for linear algebra, multivariable calculus, and probability as a prerequisite for deep learning.',
      date: 'Draft · October 2026',
      category: 'AI and Machine Learning',
      readingTime: '6 min read',
      isDraft: true,
      content: `## Why Code Alone Isn't Enough

You can call \`model.fit()\` or import an API client with just a few lines of Python. But without understanding the mathematics behind loss functions and gradients, you cannot diagnose why a model fails, underfits, or hallucinates.

### The Mathematical Pillars

1. **Linear Algebra**: Vectors, matrices, matrix multiplication, dot products, eigenvalues, and high-dimensional projections. This is the language in which all neural network weights and activations are stored.
2. **Calculus**: Partial derivatives, the chain rule, and gradients. These form the engine of backpropagation and gradient descent.
3. **Probability & Statistics**: Bayes theorem, expected values, standard distributions, and hypothesis testing. Machine learning is fundamentally about making predictions under uncertainty.

I have scheduled daily review blocks for linear algebra exercises alongside my programming labs.`,
    },
    {
      id: 'art-5',
      title: 'Building My First Useful Automation',
      summary:
        'A practical breakdown of automating file management and PDF text extraction with Python, focusing on error handling and edge cases.',
      date: 'Draft · October 2026',
      category: 'Projects',
      readingTime: '5 min read',
      isDraft: true,
      content: `## Solving Real Annoyances

One of the most rewarding moments in learning to code is when a script you wrote saves you real time. I noticed my downloads folder was constantly cluttered with lecture slides, syllabus PDFs, and problem sets with inconsistent naming conventions.

### Designing the Automation Script

Instead of manually organizing files every weekend, I built a modular Python script:
- Monitored target directories for newly added files.
- Categorized files based on extension, MIME type, and keyword heuristics.
- Logged operations so any moved file could be audited or reverted.
- Handled file collisions by appending date timestamps rather than overwriting.

This project taught me how to handle OS edge cases (like file permissions and locked files) and reinforced why software design is about thinking through error paths.`,
    },
  ],
};
