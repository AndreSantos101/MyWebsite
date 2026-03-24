export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  details: string[];
  technologies: string[];
  logoSrc: string;
  tintClassName: string;
  timelineNodeClassName: string;
};

export const experienceItems: ExperienceItem[] = [
  {
    company: "Kuehne+Nagel",
    role: "Fullstack Developer",
    period: "March 2025 — Current",
    description:
      "Contributing to the modernization of a large logistics platform used daily by tens of thousands of users.",
    details: [
      "Migrated a legacy Java Swing frontend to Angular + NgRx.",
      "Modernized a global logistics UI used daily by 80,000+ users across airports and seaports.",
      "Developed new features and enhancements to improve usability and efficiency inside a large monolithic application.",
      "Debugged and resolved production issues supporting mission-critical logistics operations.",
      "Collaborated across distributed teams to deliver scalable solutions and support ongoing platform modernization.",
    ],
    technologies: ["Angular", "NgRx", "Java", "Java Swing"],
    logoSrc: "/company-logos/kn.svg",
    tintClassName: "from-sky-400/12 via-blue-300/6 to-transparent",
    timelineNodeClassName:
      "bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]",
  },
  {
    company: "Uphold",
    role: "Wallet Frontend Developer",
    period: "October 2024 — February 2025",
    description:
      "Worked on Uphold’s digital wallet across Android, iOS, and web platforms, focusing on scalable frontend architecture and polished product experiences.",
    details: [
      "Developed and maintained wallet features across Android, iOS, and web using React Native.",
      "Collaborated daily with product, design, backend, QA, and delivery teams to ship features and improve performance.",
      "Managed state and logic flows with XState to support a more scalable frontend architecture.",
      "Built responsive and consistent interfaces using styled-components and the company’s design system.",
    ],
    technologies: ["React Native", "TypeScript", "XState", "Styled Components"],
    logoSrc: "/company-logos/uphold.svg",
    tintClassName: "from-emerald-400/12 via-emerald-300/6 to-transparent",
    timelineNodeClassName:
      "bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]",
  },
  {
    company: "Issuu",
    role: "Enterprise Frontend Developer",
    period: "June 2022 — August 2024",
    description:
      "Worked on an enterprise-facing frontend platform and integration-heavy product work.",
    details: [
      "Delivered a partner integration with custom authentication, tailored UI, and API connectivity.",
      "Worked directly with external teams to ensure smooth product integration and rollout.",
      "Contributed both as Enterprise Frontend Developer and Integrations Frontend Developer during this period.",
      "Helped evolve the platform from a single-user model to an organization-based system with teams, roles, permissions, and document management.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "E2E Testing",
      "Integrations",
      "ArgoCD",
    ],
    logoSrc: "/company-logos/issuu.svg",
    tintClassName: "from-rose-400/12 via-rose-300/6 to-transparent",
    timelineNodeClassName:
      "bg-rose-400 shadow-[0_0_0_6px_rgba(251,113,133,0.12)]",
  },
  {
    company: "Farfetch",
    role: "Admin Tools Frontend Developer",
    period: "September 2019 — March 2022",
    description:
      "Built and evolved back-office modules supporting logistics and operational workflows, with strong focus on migration and maintainability.",
    details: [
      "Built and maintained more than 8 back-office modules across logistics and operational contexts.",
      "Implemented user interfaces while coordinating with cross-functional teams to ensure a seamless experience across modules.",
      "Modernized legacy modules by migrating them to React with TypeScript.",
      "Improved maintainability and performance of internal tools used in fast-changing operational environments.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "Jenkins",
      "Design Systems",
    ],
    logoSrc: "/company-logos/farfetch.svg",
    tintClassName: "from-slate-200/10 via-slate-300/4 to-transparent",
    timelineNodeClassName:
      "bg-slate-300 shadow-[0_0_0_6px_rgba(203,213,225,0.10)]",
  },
  {
    company: "Glintt - Healthcare Solutions",
    role: "Junior Developer",
    period: "September 2017 — April 2019",
    description:
      "Worked on a large healthcare web application used across Portugal, helping maintain stability and deliver product improvements.",
    details: [
      "Maintained and fixed bugs in a large-scale healthcare web application used across Portugal’s pharmacies and hospitals.",
      "Implemented new features to improve user workflows using JavaScript, HTML, and CSS.",
      "Worked within Agile/Scrum processes and coordinated with a product manager on requirements and prioritization.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Agile"],
    logoSrc: "/company-logos/glintt.svg",
    tintClassName: "from-cyan-400/12 via-teal-300/6 to-transparent",
    timelineNodeClassName:
      "bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]",
  },
];
