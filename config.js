/**
 * ============================================================
 *  AARAV SHIVHARE — PORTFOLIO CONFIGURATION
 *  Edit all personal details here. No need to touch other files.
 * ============================================================
 */

const PORTFOLIO_CONFIG = {

  // ── Personal ──────────────────────────────────────────────
  name: "Aarav Shivhare",
  nameShort: "Aarav",
  initials: "AS",
  age: 18,
  tagline: "Aspiring Software Developer",
  subTagline: "CS Student · Curious Builder · Lifelong Learner",
  bio: `I'm an 18-year-old Computer Science student at JECRC University with a deep passion for
        programming, logical thinking, and creative exploration. I'm at the beginning of my
        developer journey — learning fast, building curiosity-driven projects, and always
        pushing myself to grow.`,

  // ── Education ─────────────────────────────────────────────
  education: {
    degree: "B.Tech — Computer Science & Engineering (Core)",
    university: "JECRC University",
    duration: "2025 – 2029 (Expected)",
    status: "Currently Enrolled · 1st Year"
  },

  // ── Skills ────────────────────────────────────────────────
  // Honest, beginner-level framing. No fake percentages.
  skills: [
    {
      name: "HTML",
      icon: "html5",
      level: "Learning",
      description: "Building structured web pages and understanding the DOM."
    },
    {
      name: "Python",
      icon: "python",
      level: "Learning",
      description: "Writing scripts, exploring logic, and solving algorithmic problems."
    },
    {
      name: "C",
      icon: "c",
      level: "Learning",
      description: "Understanding memory, pointers, and systems-level thinking."
    },
    {
      name: "MySQL",
      icon: "mysql",
      level: "Learning",
      description: "Querying databases, relational design, and structured data."
    }
  ],

  // ── Currently Exploring ───────────────────────────────────
  currentlyLearning: [
    "Data Structures & Algorithms",
    "CSS & Responsive Design",
    "Version Control with Git",
    "Problem Solving on Competitive Platforms"
  ],

  // ── Projects ──────────────────────────────────────────────
  // Mark real projects as placeholder: false when you add them.
  projects: [
    {
      title: "Personal Portfolio Website",
      description: "This very website — my first real front-end project, built from scratch to showcase my identity, skills, and vision as a developer.",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "Live",
      placeholder: false,
      link: null,
      github: null
    },
    {
      title: "Python Logic Experiments",
      description: "A personal collection of Python programs exploring sorting algorithms, number theory, and beginner CS concepts as I learn the language.",
      tech: ["Python"],
      status: "In Progress",
      placeholder: true,
      link: null,
      github: null
    },
    {
      title: "Student Database (MySQL)",
      description: "A beginner database project — designing tables, writing queries, and understanding relational data for a fictional student management system.",
      tech: ["MySQL", "Python"],
      status: "Planned",
      placeholder: true,
      link: null,
      github: null
    }
  ],

  // ── Hobbies ───────────────────────────────────────────────
  hobbies: [
    {
      name: "Chess",
      emoji: "♟",
      description: "Strategic thinking and pattern recognition — skills that directly shape how I approach programming problems."
    },
    {
      name: "Basketball",
      emoji: "🏀",
      description: "Team sport that builds discipline, communication, and the grit to keep pushing past difficulty."
    },
    {
      name: "Sketching",
      emoji: "✏️",
      description: "Creative expression through line and form — training the eye for design and visual thinking."
    }
  ],

  // ── Contact ───────────────────────────────────────────────
  contact: {
    email: "aarav.shivhare@example.com",   // ← replace with your real email
    github: null,                            // ← e.g. "github.com/aarav-shivhare"
    linkedin: null,                          // ← add when ready
    twitter: null
  },

  // ── Theme ─────────────────────────────────────────────────
  theme: {
    accentPrimary: "#7C3AED",   // violet
    accentSecondary: "#06B6D4", // cyan
    accentTertiary: "#F59E0B"   // amber
  }
};
