// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file to update the site.
//  Anything marked TODO still needs your real link / image.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Bella Melissa Ineza",
  firstName: "Bella",
  role: "Software Engineer",
  tagline: "Application Development, APIs & Data Systems",
  location: "Kigali, Rwanda",
  email: "melissaineza8@gmail.com",
  phone: "+250 786 963 530",
  available: true,
  bio: "For 4+ years I've been building, maintaining and supporting production web platforms, APIs and data-driven systems. I design RESTful APIs and relational databases, ship through CI/CD, and keep applications reliable and fast in production.",
  // TODO: replace with your real profile links
  github: "https://github.com/belladev250",
  linkedin: "https://www.linkedin.com/in/bella-melissa-094208214/",
  // TODO: put your CV PDF in /public as cv.pdf
  cvUrl: "/cv.pdf",
  // TODO: add a headshot at /public/me.jpg, then set photo: "/me.jpg"
  photo: "/me.jpeg" as string,
};

export const stats = [
  { value: "4+", label: "Years building production systems" },
  { value: "5+", label: "Platforms shipped & maintained" },
  { value: "4", label: "Teams & organisations" },
];


export const skills: { group: string; items: string[] }[] = [
  {
    group: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    group: "Frontend Development",
    items: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "RESTful APIs", "API Integration", "Strapi", "JWT Authentication"],
  },
  {
    group: "Databases & Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Database Design"],
  },
  {
    group: "Systems & Architecture",
    items: ["RBAC", "Object-Oriented Programming", "Real-Time Systems", "System Integration"],
  },
  {
    group: "DevOps & Deployment",
    items: ["Git", "GitHub", "Vercel", "CI/CD", "Cloud Deployment", "Monitoring"],
  },
  {
    group: "Platforms & Tools",
    items: ["WordPress", "Figma", "VS Code", "Technical Documentation"],
  },
];



export const tools = [
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "Vercel",
  "Firebase",
  "WordPress",
  "Postman",
  "Docker",
  "Xcode",
];


export type Project = {
  title: string;
  client: string;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  image?: string; // e.g. "/projects/hangapitch.jpg"
  liveUrl?: string;
  codeUrl?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "HangaPitchfest Platform",
    client: "Pixeleye Ltd",
    year: "2024 – Present",
    summary:
      "A platform built from the ground up so Rwandan startups can showcase their innovations to investors.",
    highlights: [
      "Built end-to-end, from data model to frontend",
      "Diagnose and resolve production issues on a high-traffic, investor-facing system",
    ],
    stack: ["Next.js", "Strapi", "Node.js", "PostgreSQL"],
    image: "/hanga.png", // TODO
    liveUrl: "https://www.hangapitchfest.rw/#/", // TODO
  },
  {
    title: "Genocide Research Hub",
    client: "AEGIS Trust · via Pixeleye",
    year: "",
    summary:
      "Migrated the research hub from a legacy content system to a modern Strapi architecture.",
    highlights: [
      "Coordinated the upgrade with minimal disruption to users",
      "Improved scalability and long-term maintainability",
    ],
    stack: ["Strapi", "Next.js", "PostgreSQL"],
    image: "/aegis.png",
    liveUrl: "https://genocideresearchhub.org.rw",
  },
  {
    title: "RwandaFoam Website",
    client: "RwandaFoam · via Pixeleye",
    year: "2026",
    summary:
      "A revamped corporate website for RwandaFoam, with frontend development and API integration owned end-to-end.",
    highlights: ["Frontend build in Next.js", "API integration end-to-end"],
    stack: ["Next.js", "Nest.js","PostgresSQL","REST APIs"],
    image: "/rwandafoam.png",
    liveUrl: "https://rwandafoam.com/", // TODO
  },
  {
    title: "Bookello Core",
    client: "Independent system",
    year: "",
    summary:
      "A financial management platform designed to simplify business accounting through automated profit & loss tracking, multi-currency transaction reconciliation, ledger management, and audit-ready Excel report generation.",
    highlights: [
      "RBAC, authentication & authorization",
      "Occupancy and revenue monitoring dashboards",
    ],
    stack: ["Vue.js", "Firebase", "JWT", "RBAC"],
    image: "/core.png",
    liveUrl: "https://bookellocore.com/", //
  },

  {
    title: "Dock Tracking & Notification Platform",
    client: "In development",
    year: "2026",
    summary:
      "Backend APIs and automated event detection that power real-time logistics monitoring and alerts.",
    highlights: ["Event detection and notifications", "Real-time logistics monitoring"],
    stack: ["Flutter"],
    image: "/ondock.png",
    liveUrl: "https://on-dock-website.vercel.app/",
    status: "In development",
  },
];

export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Pixeleye Ltd",
    place: "Kigali, Rwanda",
    period: "Sept 2024 – Present",
    points: [
      "Build and maintain API-driven platforms (Next.js, Strapi, Node.js, PostgreSQL) for structured data and automated content workflows",
      "Migrated the Genocide Research Hub (AEGIS Trust) to a modern Strapi architecture; built HangaPitchfest from scratch",
      "Delivered the RwandaFoam website and maintain technical documentation for the 250 Podcast Lab platform",
    ],
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Scalefix",
    place: "Remote",
    period: "Jul 2024 – Oct 2024",
    points: [
      "Designed REST APIs and relational database schemas for operational data tracking",
      "Implemented real-time monitoring and collaboration features with Firebase",
      "Deployed and maintained CI/CD pipelines on Vercel",
    ],
  },
  {
    role: "Frontend Developer (Internship)",
    company: "Andela Rwanda",
    place: "Kigali, Rwanda",
    period: "Aug 2023 – Apr 2024",
    points: [
      "Integrated backend APIs and authentication systems into production applications",
      "Took part in agile cycles, code reviews and root-cause troubleshooting",
      "Built reusable component systems for consistency and maintainability",
    ],
  },
  {
    role: "Frontend & IoT Developer (Freelance)",
    company: "Hub Init",
    place: "Kigali, Rwanda",
    period: "Jan 2023 – Feb 2024",
    points: [
      "Designed IoT data pipelines connecting sensors to cloud platforms",
      "Built dashboards for real-time operational data",
      "Developed backend integrations for device communication and data flow",
    ],
  },
];

export const education = [
  {
    school: "African Leadership University",
    award: "Bachelor's in Software Engineering (in progress)",
    period: "2023 – Present",
  },
  {
    school: "Rwanda Coding Academy",
    award: "Diploma in Software Development & Embedded Systems",
    period: "2019 – 2022",
  },
];

export const extra = {
  title: "Technical Curriculum Contributor",
  org: "Rwanda TVET Board & International Labour Organization",
  text: "Designed structured technical training modules and aligned technical education with industry needs, working directly with government and institutional stakeholders.",
};

// TODO: replace with real quotes from colleagues/clients (with their permission).
// Leave the array empty to hide the section.
export const testimonials: { quote: string; name: string; title: string }[] = [
  { quote: "[Add a quote from a colleague or client]", name: "[Name]", title: "[Role, Company]" },
  { quote: "[Add a quote from a colleague or client]", name: "[Name]", title: "[Role, Company]" },
  { quote: "[Add a quote from a colleague or client]", name: "[Name]", title: "[Role, Company]" },
];
