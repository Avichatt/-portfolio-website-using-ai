/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Avik Chatterjee",
  title: "Analytics & Automation Lead | ",
  tagline: "Bridging large-scale analytics with intelligent AI automation. Specialize in architecting high-impact risk & business engineering solutions.",
  roles: ["Analytics Specialist @ Amazon", "AI/ML Engineer", "Automation Architect"],

  about: {
    description: [
      "I am a high-impact Analytics and Automation specialist with over 5 years of experience at Amazon, where I spearheaded critical Risk & Business intelligence initiatives. I specialize in architecting production-grade automation workflows and deep data modeling to drive measurable business outcomes.",
      "Beyond analytics, I am a 4x Alteryx Certified professional and a Google Certified Data Analyst, constantly pushing the boundaries of what is possible with technical orchestration.",
      "My mission is to build intelligent systems that solve complex operational challenges. From architecting immutable validation engines for top-tier institutions to reverse-engineering sophisticated AI architectures, I focus on scale, impact, and technical depth."
    ],
    resumeUrl: "docs/resume.pdf",
    avatarUrl: "assets/images/avik11.PNG"
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/Avichatt",
    linkedin: "https://www.linkedin.com/in/avik-chatterjee-00a364145/",
    twitter: "https://twitter.com/avichatt",
    email: "hello@avichatt.dev"
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    { name: "Scale Analytics (SQL/Python)", level: 98, icon: "📊" },
    { name: "Alteryx (4x Certified/Adv)", level: 95, icon: "📐" },
    { name: "Intelligent Automation (n8n)", level: 94, icon: "⚙️" },
    { name: "AI/ML Systems Design", level: 90, icon: "🤖" },
    { name: "LangChain / LangGraph", level: 95, icon: "🦜" },
    { name: "Python / AI-ML Stack", level: 95, icon: "🐍" },
    { name: "Multi-Agent Systems", level: 92, icon: "🤝" },
    { name: "PyTorch / TensorFlow", level: 90, icon: "🔥" },
    { name: "RAG / Elasticsearch", level: 90, icon: "📚" },
    { name: "MCP Servers / Automation", level: 88, icon: "⚙️" },
    { name: "Docker / Kubernetes / Azure", level: 85, icon: "🐳" },
    { name: "Power BI / Strategic Viz", level: 92, icon: "📈" },
    { name: "Node.js / Systems Architecture", level: 88, icon: "🟢" },
    { name: "Risk & Compliance Strategy", level: 95, icon: "🛡️" },
    { name: "Project Management (Global)", level: 93, icon: "🌎" }
  ],


  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "AdmitGuard",
      description: "A production-grade verification engine built for premier institutions (IITs/IIMs). Ensures 100% compliance with complex eligibility criteria through a triple-layered decoupled architecture and immutable audit trails.",
      tech: ["Vite", "Node.js", "Express", "SQLite", "Validator.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/admitguard--Avik_Chatterjee-",
      image: "",
      featured: true,
      category: "web"
    },
    {
      title: "AI Product Teardown Engine",
      description: "A sophisticated technical benchmarking framework used to analyze top-tier AI products (e.g., Perplexity AI) across 6 layers: Data, ML, LLM, Infrastructure, and System Design.",
      tech: ["Claude LLM", "System Design", "Technical Reasoning"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/week-01-day-05-teardown-engine",
      image: "",
      featured: true,
      category: "ai"
    },
    {
      title: "Intelligent n8n Workflows",
      description: "Custom-built automation pipelines for complex cross-platform business logic, integrating native AI capabilities for seamless multi-agent orchestration and process efficiency.",
      tech: ["n8n", "TypeScript", "API Orchestration", "AI Agents"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/n8n",
      image: "",
      featured: true,
      category: "automation"
    },
    {
      title: "Developer Onboarding Kit",
      description: "Python-powered environment orchestration tool that automates complex system configurations for new developers, reducing Time to Readiness (TTR) through automated QA.",
      tech: ["Python", "OS Scripting", "Automation"],
      liveUrl: "#",
      githubUrl: "https://github.com/Avichatt/New-Developer-Onboarding-Kit",
      image: "",
      featured: false,
      category: "infrastructure"
    }
  ],

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
      role: "Analytics & Automation Lead (Risk & Business)",
      company: "Amazon",
      period: "2019 — 2025",
      description: "Directed global risk monitoring frameworks, reducing manual validation overhead by automating complex compliance workflows. Architected high-fidelity Power BI/Alteryx pipelines for strategic international stakeholders.",
      tech: ["SQL", "Alteryx", "Power BI", "Python", "Risk Analysis"]
    },
    {
      role: "Quality Analyst (Analytics & Strategy)",
      company: "Flipkart",
      period: "2018 — 2019",
      description: "Drove data-intensive initiatives within India's leading e-commerce ecosystem. Optimized supply chain and operational analytics to accelerate delivery metrics and enhance customer satisfaction.",
      tech: ["Data Analytics", "SQL", "eCommerce", "Strategy"]
    },
    {
      role: "B.Tech in Mechanical Engineering",
      company: "Neotia Institute of Technology (ITME)",
      description: "Foundation in mechanical systems and management. Focused on technical excellence and software engineering principles.",
      tech: ["Cloud Technology", "Software Engineering", "Statistics"]
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
    borderRadius: "20px",
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
    particleCount: 70,
    animationSpeed: 1
  }
};
