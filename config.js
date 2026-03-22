/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Avik Chatterjee",
  title: "Analytics Professional & AI Engineer",
  tagline: "Leveraging 5+ years of analytics expertise to build intelligent automation and data-driven systems.",
  roles: ["Analytics Professional", "AI/ML Engineer", "Project Coordinator", "Automation Expert"],

  about: {
    description: [
      "I am an analytics-focused professional currently at Amazon, with over 5 years of experience in supporting global operations and driving data-driven initiatives. My expertise lies at the intersection of process optimization and emerging technologies.",
      "Beyond my core role in analytics and project coordination, I am deeply passionate about AI Engineering. I specialize in building intelligent workflow automation (n8n), AI-powered reverse-engineering tools, and robust data validation systems.",
      "I thrive on solving complex operational challenges by bridging the gap between business requirements and technical implementation. My goal is to leverage data and AI to create measurable organizational impact."
    ],
    resumeUrl: "docs/resume.pdf",
    avatarUrl: ""
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/Avichatt",
    linkedin: "https://www.linkedin.com/in/avik-chatterjee-00a364145/",
    twitter: "https://twitter.com/avichatt",
    email: "avik.chatterjee@example.com" // Placeholder email based on profile
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    { name: "Data Analytics (SQL/Python)", level: 95, icon: "📊" },
    { name: "AI Engineering & LLMs",       level: 88, icon: "🤖" },
    { name: "Workflow Automation (n8n)",   level: 92, icon: "⚙️" },
    { name: "Project Management",          level: 90, icon: "📅" },
    { name: "Power BI / Tableau",         level: 85, icon: "📈" },
    { name: "JavaScript / Web Dev",       level: 85, icon: "🌐" },
    { name: "Stakeholder Relations",      level: 93, icon: "🤝" },
    { name: "Process Optimization",       level: 90, icon: "🚀" }
  ],

  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "AdmitGuard",
      description: "An admission data validation and compliance system designed to ensure data integrity and regulatory adherence across educational workflows.",
      tech: ["JavaScript", "Data Validation", "Compliance"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/admitguard--Avik_Chatterjee-",
      image: "",
      featured: true,
      category: "web"
    },
    {
      title: "Product Teardown Engine",
      description: "An AI-powered reverse-engineering tool that analyzes products to extract technical specifications and architectural insights automatically.",
      tech: ["AI", "Reverse Engineering", "NLP", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/week-01-day-05-teardown-engine",
      image: "",
      featured: true,
      category: "ai"
    },
    {
      title: "AI-Powered n8n Workflows",
      description: "Custom fair-code automation workflows integrating native AI capabilities for seamless multi-agent orchestration and tool communication.",
      tech: ["n8n", "AI Agents", "Automation", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/n8n",
      image: "",
      featured: true,
      category: "automation"
    },
    {
      title: "Analytics Dashboard",
      description: "Comprehensive data visualization suite for monitoring global operations and identifying operational bottlenecks using real-time data.",
      tech: ["Power BI", "SQL", "Excel", "Data Modeling"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "data"
    }
  ],

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
      role: "Analytics & Project Focused Professional",
      company: "Amazon",
      period: "2019 — Present",
      description: "Supporting global operations through data-driven initiatives and project coordination. Specialized in analytics, stakeholder management, and process efficiency.",
      tech: ["SQL", "Excel", "Project Management", "Stakeholder Relations"]
    },
    {
      role: "B.Tech in Information Technology",
      company: "Neotia Institute of Technology, Management and Science",
      period: "2014 — 2018",
      description: "Graduated with a focus on Information Technology and systems management. Involved in various technical projects and research initiatives.",
      tech: ["Information Technology", "Computer Science", "Systems"]
    }
  ],

  // ─── Theme Configuration ────────────────────────────────────
  theme: {
    primaryColor: "#6366F1",
    secondaryColor: "#8B5CF6",
    accentColor: "#EC4899",
    bgPrimary: "#0B0D17",
    bgSecondary: "#111427",
    bgCard: "rgba(17, 20, 39, 0.7)",
    textPrimary: "#E2E8F0",
    textSecondary: "#94A3B8",
    textMuted: "#475569",
    glassBg: "rgba(255, 255, 255, 0.03)",
    glassBorder: "rgba(255, 255, 255, 0.08)",
    borderRadius: "16px",
    fontFamily: "'Inter', sans-serif"
  },

  // ─── EmailJS (for contact form) ─────────────────────────────
  emailjs: {
    publicKey: "YOUR_PUBLIC_KEY",
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID"
  },

  // ─── Advanced Settings ──────────────────────────────────────
  settings: {
    enableParticles: true,
    enableCursorGlow: true,
    enableSmoothScroll: true,
    enablePreloader: true,
    enableSoundEffects: false,
    particleCount: 60,
    animationSpeed: 1
  }
};
