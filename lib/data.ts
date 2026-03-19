import { Brain, Server, Cpu, Code2, GitBranch, Shield } from "lucide-react";

// ─── TICKER ──────────────────────────────────────────────────────────────────

export const TICKER_ITEMS = [
  "Multi-Agent Systems", "Edge AI", "Production Backends", "Data Orchestration",
  "LangGraph", "FastAPI", "NVIDIA TensorRT", "Open-Source LLMs", "TypeScript", "Python",
  "RabbitMQ", "PostgreSQL", "Kubernetes", "MLOps", "C++",
];

// ─── STATS ───────────────────────────────────────────────────────────────────

export const STATS = [
  { value: 3000, suffix: "+", label: "Platform Users" },
  { value: 4,    suffix: "+", label: "Years Engineering" },
  { value: 12,   suffix: "+", label: "Systems Shipped" },
  { value: 6,    suffix: "+", label: "Countries Reached" },
];

// ─── PORTFOLIO ───────────────────────────────────────────────────────────────

export const PORTFOLIO_CARDS = [
  {
    title: "3d.storsko.com",
    role: "Founder & AI Engineer",
    href: "https://3d.storsko.com",
    description:
      "Scaled an AI platform to 3,000+ active users. Architected multi-agent orchestration via LangChain/LangGraph with a production backend (FastAPI, RabbitMQ, PostgreSQL).",
    stats: [
      { label: "Stack", value: "LangGraph" },
      { label: "Users", value: "3,000+" },
    ],
  },
  {
    title: "Hensoldt",
    role: "Intelligence Systems Engineer",
    href: null as string | null,
    description:
      "Developed advanced edge AI infrastructure for defense applications. Presented benchmarks and model evaluations to technical leads. Optimized on NVIDIA TensorRT AGX Orin.",
    stats: [
      { label: "Hardware", value: "NVIDIA AGX" },
      { label: "Tech", value: "C++ / ML SOC" },
    ],
  },
];

// ─── EXPERIENCE / TIMELINE ───────────────────────────────────────────────────

export const TIMELINE = [
  {
    year: "Jan 2025 — Present",
    org: "Storsko",
    title: "Founder & ML Engineer",
    desc: "Scaled an ML platform to 3,000+ users. Built 3D model generation pipelines cutting inference costs by 70%. Architected edge infrastructure via LangGraph, RabbitMQ, Docker, and Supabase.",
    tags: ["3D Generation", "Pipelines", "Distributed Systems"],
  },
  {
    year: "Sep 2022 — Sep 2025",
    org: "Hensoldt Optronics",
    title: "Dual Study Student AI",
    desc: "Evaluated ML pipelines for edge hardware in autonomous defense systems. Developed a microcontroller-based ground surface detection for navigation systems and automated ID generators.",
    tags: ["Edge AI", "Autonomous Tech", "TypeScript/JSON"],
  },
  {
    year: "Sep 2022 — Sep 2025",
    org: "DHBW University",
    title: "B.Sc. Computer Science (AI)",
    desc: "Built a high-performance neural network training framework from scratch in C with Python bindings. Thesis on ML model robustness under multispectral sensor misalignment.",
    tags: ["C / PyTorch", "Deep Learning Theory", "Research"],
  },
];

// ─── SKILLS ──────────────────────────────────────────────────────────────────

export const SKILLS = [
  {
    icon: Brain,
    label: "AI & Agents",
    items: ["LangGraph / LangChain", "Multi-Agent Orchestration", "RAG Pipelines", "LLM Fine-Tuning"],
  },
  {
    icon: Server,
    label: "Backend",
    items: ["FastAPI / Python", "PostgreSQL / RabbitMQ", "REST & GraphQL", "Microservices"],
  },
  {
    icon: Cpu,
    label: "Edge AI",
    items: ["NVIDIA TensorRT", "AGX Orin Platform", "C++ Inference", "Model Optimization"],
  },
  {
    icon: Code2,
    label: "Frontend",
    items: ["Next.js / TypeScript", "React Ecosystem", "TailwindCSS", "Three.js"],
  },
  {
    icon: GitBranch,
    label: "DevOps",
    items: ["Kubernetes / Docker", "CI/CD Pipelines", "Cloud Infra (AWS)", "Monitoring"],
  },
  {
    icon: Shield,
    label: "Security & Ethics",
    items: ["AI Safety Research", "Responsible Deployment", "Privacy by Design", "Compliance"],
  },
];

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = [
  { label: "GitHub",     href: "https://github.com/MilanKiele",              handle: "@MilanKiele" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/milankiele",     handle: "Milan Kiele" },
  { label: "X / Twitter", href: "https://x.com/milankiele",                 handle: "@milankiele" },
  { label: "Email",      href: "mailto:mail@milankiele.com",                 handle: "mail@milankiele.com" },
];

// ─── PHILOSOPHY PRINCIPLES ───────────────────────────────────────────────────

export const PHILOSOPHY_PRINCIPLES = [
  { n: "01", t: "Radical Transparency" },
  { n: "02", t: "Production-First" },
  { n: "03", t: "Ethical by Design" },
  { n: "04", t: "Continuously Shipping" },
];
