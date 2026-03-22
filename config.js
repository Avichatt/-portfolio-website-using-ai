/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Avi Sharma",
  title: "Full Stack Developer & AI Engineer",
  tagline: "Building intelligent, scalable web applications that merge cutting-edge AI with elegant user experiences.",
  roles: ["Full Stack Developer", "AI/ML Engineer", "Data Scientist", "Open Source Contributor"],

  about: {
    description: [
      "I'm a passionate Full Stack Developer and AI Engineer with expertise in building modern web applications and intelligent systems. I thrive at the intersection of software engineering and artificial intelligence.",
      "With hands-on experience across the entire development stack — from React and Node.js frontends to Python-based ML pipelines — I deliver solutions that are not just functional, but delightful to use.",
      "When I'm not coding, I contribute to open source, explore emerging AI research, and mentor aspiring developers. I believe in writing code that speaks for itself."
    ],
    resumeUrl: "docs/resume.pdf",
    avatarUrl: ""
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/Avichatt",
    linkedin: "https://linkedin.com/in/avichatt",
    twitter: "https://twitter.com/avichatt",
    email: "hello@avichatt.dev"
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    { name: "React / Next.js",             level: 95, icon: "⚛️" },
    { name: "Python / FastAPI",             level: 93, icon: "🐍" },
    { name: "Machine Learning / LLMs",      level: 90, icon: "🤖" },
    { name: "Node.js / TypeScript",         level: 92, icon: "🟢" },
    { name: "Cloud (AWS / GCP / Azure)",    level: 85, icon: "☁️" },
    { name: "PostgreSQL / MongoDB",         level: 88, icon: "🗄️" },
    { name: "Docker / Kubernetes",          level: 82, icon: "🐳" },
    { name: "LangChain / LangGraph",        level: 87, icon: "🦜" }
  ],

  // ─── Projects ───────────────────────────────────────────────
  projects: [
    {
      title: "AI Chat Assistant",
      description: "A production-ready conversational AI powered by GPT-4 with RAG pipelines, memory management, and real-time streaming. Deployed on AWS with auto-scaling.",
      tech: ["React", "FastAPI", "OpenAI", "LangChain", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "ai"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, AI-powered product recommendations, and seamless payment integrations via Stripe.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "web"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive real-time analytics dashboard with ML-powered anomaly detection, customizable charts, and automated reporting pipelines.",
      tech: ["React", "Python", "TensorFlow", "Plotly", "Kafka"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: true,
      category: "data"
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated CI/CD infrastructure using GitHub Actions, Docker, and Kubernetes. Reduced deployment time by 70% and improved release reliability.",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "devops"
    },
    {
      title: "Mobile Task Manager",
      description: "Cross-platform productivity app with AI-suggested scheduling, offline-first architecture, and smart notification system.",
      tech: ["React Native", "Expo", "SQLite", "Redux", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "mobile"
    },
    {
      title: "NLP Document Processor",
      description: "Intelligent document processing system using custom NLP models for entity extraction, classification, and semantic search over large document corpora.",
      tech: ["Python", "HuggingFace", "Elasticsearch", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "ai"
    }
  ],

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
      role: "Senior Full Stack & AI Engineer",
      company: "Tech Innovations Ltd.",
      period: "2022 — Present",
      description: "Leading development of AI-powered SaaS products serving 50,000+ users. Architected microservices infrastructure reducing latency by 60% and spearheaded LLM integration across the product suite.",
      tech: ["React", "FastAPI", "OpenAI", "AWS", "Kubernetes"]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Pvt. Ltd.",
      period: "2020 — 2022",
      description: "Built scalable web applications for fintech clients. Delivered 15+ production features, integrated third-party payment gateways, and mentored a team of 3 junior developers.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "GCP"]
    },
    {
      role: "ML Engineer (Intern to Full Time)",
      company: "DataSpark AI",
      period: "2019 — 2020",
      description: "Developed predictive ML models for e-commerce churn prediction achieving 89% accuracy. Automated data pipelines processing 2M+ records daily.",
      tech: ["Python", "Scikit-Learn", "TensorFlow", "Airflow", "BigQuery"]
    },
    {
      role: "B.Tech in Computer Science & Engineering",
      company: "Indian Institute of Technology",
      period: "2015 — 2019",
      description: "Graduated with Distinction. Minor in Artificial Intelligence & Data Science. Final year project: Deep learning-based medical image analysis achieving 94% diagnostic accuracy.",
      tech: ["Python", "Deep Learning", "Computer Vision", "Research"]
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
