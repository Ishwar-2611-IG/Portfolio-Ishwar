export const sections = [
  { id: "home",         number: "01", label: "Home"       },
  { id: "about",        number: "02", label: "About"      },
  { id: "work",         number: "03", label: "Works"      },
  { id: "capabilities", number: "04", label: "Skills"     },
  { id: "learning",     number: "05", label: "Learning"   },
  { id: "experience",   number: "06", label: "Experience" },
  { id: "contact",      number: "07", label: "Contact"    },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const contact = {
  name:       "Ishwar Gosavi",
  email:      "gosaviishwar697@gmail.com",
  phone:      "+919156878033",
  phoneLabel: "+91 91568 78033",
  location:   "Pune, India",
  coords:     "18.52° N / 73.85° E",
} as const;

export const socials = [
  { label: "GitHub",   href: "https://github.com/Ishwar-2611-IG" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ishwar-gosavi-14383028b/" },
] as const;

export const principles = [
  "Clean interfaces",
  "Pixel-perfect implementation",
  "Performance focused",
  "Accessible by default",
  "Component-driven architecture",
] as const;

export interface Project {
  title:        string;
  category:     string;
  description?: string;
  image?:       string;
  link?:        string;
  featured?:    boolean;
}

export const projects: Project[] = [
  {
    title:       "TaskFlow",
    category:    "Product / Web App",
    description: "A productivity platform designed around fast collaboration, clear hierarchy and frictionless team workflows.",
    image:       "/assets/taskflow.jpg",
    link:        "#contact",
    featured:    true,
  },
  { title: "ShopEase",   category: "Commerce / Experience", image: "/assets/shopease.jpg" },
  { title: "Mindly",     category: "Editorial / Platform",  image: "/assets/mindly.jpg"  },
  { title: "Arc Studio", category: "Identity / Digital" },
];

export interface LearningCategory {
  label: string;
  title: string;
  description: string;
  topics: string[];
}

export const learningCategories: LearningCategory[] = [
  {
    label: "INTELLIGENT SYSTEMS",
    title: "AI & Machine Learning",
    description: "Foundational ML algorithms, neural networks, LLM application development, and model integration.",
    topics: ["Supervised & Unsupervised Learning", "Neural Networks & PyTorch", "LLM APIs & Prompt Engineering", "Vector Databases & Embeddings"],
  },
  {
    label: "DISTRIBUTED SYSTEMS",
    title: "System Design & Architecture",
    description: "Designing scalable, fault-tolerant, high-throughput backend systems and caching layers.",
    topics: ["Microservices vs. Monoliths", "Load Balancing & Reverse Proxies", "Caching & Redis", "Database Sharding & Replication"],
  },
  {
    label: "CORE COMPUTING",
    title: "Operating Systems & Internals",
    description: "Deepening understanding of low-level system execution, memory hierarchy, and process scheduling.",
    topics: ["Process & Thread Synchronization", "Virtual Memory & Paging", "File Systems & I/O", "Linux Kernel & System Calls"],
  },
  {
    label: "NETWORKING",
    title: "Computer Networks & Protocols",
    description: "Transport layer mechanisms, the TCP/IP stack, socket programming, and low-latency network communication.",
    topics: ["TCP / UDP & Flow Control", "HTTP/2, HTTP/3 & WebSockets", "DNS, TLS & Routing Protocols", "Socket Programming"],
  },
];

export interface Skill {
  title: string;
  items: string[];
}

export const skills: Skill[] = [
  { title: "Frontend Development", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { title: "UI Component Libraries & Design Systems", items: ["shadcn/ui", "Magic UI", "21st.dev", "Fancy Components", "Aceternity UI", "HeroUI", "Radix UI", "DaisyUI", "Material UI (MUI)", "Ant Design"] },
  { title: "Animations & Interactive Experiences", items: ["Framer Motion (Motion)", "GSAP", "Lenis", "Lottie", "AutoAnimate"] },
  { title: "Backend Development", items: ["Node.js", "Express.js", "Java", "Spring Boot", "JSP", "Servlets", "REST APIs"] },
  { title: "Databases & Data Storage", items: ["MongoDB", "MySQL", "PostgreSQL", "SQL", "Firebase", "Supabase"] },
  { title: "AI & Machine Learning", items: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "NLP", "Generative AI", "Large Language Models (LLMs)"] },
  { title: "Data Science & Analytics", items: ["Data Analysis", "Exploratory Data Analysis (EDA)", "Data Visualization", "Matplotlib", "Seaborn", "Power BI", "Microsoft Excel"] },
  { title: "Blockchain & Web3", items: ["Solidity", "Ethereum", "Ethers.js", "Web3.js", "Hardhat", "Smart Contracts", "IPFS", "MetaMask"] },
  { title: "Hosting, Deployment & Cloud Platforms", items: ["Vercel", "Netlify", "Render", "Hostinger", "Railway", "Cloudflare", "AWS"] },
  { title: "Developer Tools & Workflow", items: ["Git", "GitHub", "VS Code", "Vite", "Postman", "Docker", "Figma", "Jupyter Notebook", "npm", "pnpm"] },
  { title: "Core Computer Science", items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "DBMS", "Operating Systems", "Computer Networks"] },
];

export interface Experience {
  date:    string;
  role:    string;
  company: string;
  detail:  string;
  location?: string;
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    date: "Apr 2026 — Present",
    role: "Full Stack Developer Intern",
    company: "Rego Digital Solution Hub",
    location: "Pune, India",
    detail:
      "Building backend functionality and REST APIs while developing modern web applications with React, TypeScript, Next.js, and Tailwind CSS.",
    highlights: [
      "Backend Development: Implementing API endpoints, server-side functionality, and application logic.",
      "API Integration: Connecting frontend interfaces with backend services and handling data flows.",
      "Frontend Development: Building responsive, type-safe interfaces using React, TypeScript, Next.js, and Tailwind CSS.",
      "Engineering Practices: Applying modular code, debugging, performance optimization, and Git-based workflows.",
    ],
  },
  {
    date: "Sep 2024 — Oct 2024",
    role: "Full Stack Web Development Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    detail:
      "Developed and shipped 3+ full-stack features for a MERN application, contributing to frontend development, API implementation, and database integration.",
    highlights: [
      "Frontend: Developed interactive application features using React.js.",
      "Backend APIs: Built RESTful endpoints using Node.js and Express.js.",
      "Database Integration: Used MongoDB for data persistence and application operations.",
      "Agile Development: Delivered features through end-to-end implementation and integration within Agile sprints.",
    ],
  },
  {
    date: "Jul 2024 — Aug 2024",
    role: "Front-End Web Development Intern",
    company: "Capnit",
    location: "Remote",
    detail:
      "Built responsive user interfaces and improved cross-browser compatibility and frontend rendering consistency.",
    highlights: [
      "UI Development: Created responsive web components using HTML, CSS, and JavaScript.",
      "Cross-Browser Compatibility: Improved functionality across 3+ major browsers.",
      "Frontend Optimization: Refined assets and layouts for consistent page loading and rendering.",
      "Responsive Design: Adapted interfaces for different screen sizes and improved usability.",
    ],
  },
];