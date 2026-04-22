import type { SectionId } from "@/data/navigation";
import type { Locale } from "@/lib/i18n";

export type SocialIconName = "github" | "instagram" | "linkedin";

type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

type NavigationItem = {
  label: string;
  sectionId: SectionId;
};

export type ProfileContent = {
  name: string;
  role: string;
  intro: string;
  portraitAlt: string;
  socials: SocialLink[];
};

export type HomeContent = {
  eyebrow: string;
  title: string;
  intro: string[];
  focusTitle: string;
  focusItems: string[];
};

export type PathContent = {
  mobileEyebrow: string;
  title: string;
  intro: string[];
};

export type PersonalContent = {
  title: string;
  mobileEyebrow: string;
  description: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  details: string[];
  technologies: readonly string[];
  logoSrc: string;
  tintClassName: string;
  timelineNodeClassName: string;
};

export type SiteContent = {
  metadata: {
    title: string;
    description: string;
  };
  profile: ProfileContent;
  navigation: {
    ariaLabel: string;
    items: NavigationItem[];
  };
  languageSwitcher: {
    label: string;
    locales: Record<Locale, string>;
  };
  ui: {
    skipToContent: string;
    goToTop: string;
    sidebarAriaLabel: string;
    companyLogoLabel: string;
  };
  home: HomeContent;
  path: PathContent;
  experience: ExperienceItem[];
  personal: PersonalContent;
};

const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andr%C3%A9-santos-101/",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/andrediosantos/",
    icon: "instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/AndreSantos101",
    icon: "github",
  },
];

const baseExperienceStyles = [
  {
    company: "Kuehne+Nagel",
    logoSrc: "/company-logos/kn.svg",
    technologies: ["Angular", "NgRx", "Java", "Java Swing"],
    tintClassName: "from-sky-400/12 via-blue-300/6 to-transparent",
    timelineNodeClassName:
      "bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]",
  },
  {
    company: "Uphold",
    logoSrc: "/company-logos/uphold.svg",
    technologies: ["React Native", "TypeScript", "XState", "Styled Components"],
    tintClassName: "from-emerald-400/12 via-emerald-300/6 to-transparent",
    timelineNodeClassName:
      "bg-emerald-400 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]",
  },
  {
    company: "Issuu",
    logoSrc: "/company-logos/issuu.svg",
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "E2E Testing",
      "Integrations",
      "ArgoCD",
    ],
    tintClassName: "from-rose-400/12 via-rose-300/6 to-transparent",
    timelineNodeClassName:
      "bg-rose-400 shadow-[0_0_0_6px_rgba(251,113,133,0.12)]",
  },
  {
    company: "Farfetch",
    logoSrc: "/company-logos/farfetch.svg",
    technologies: [
      "React",
      "TypeScript",
      "Docker",
      "Jenkins",
      "Design Systems",
    ],
    tintClassName: "from-slate-200/10 via-slate-300/4 to-transparent",
    timelineNodeClassName:
      "bg-slate-300 shadow-[0_0_0_6px_rgba(203,213,225,0.10)]",
  },
  {
    company: "Glintt - Healthcare Solutions",
    logoSrc: "/company-logos/glintt.svg",
    technologies: ["JavaScript", "HTML", "CSS", "Agile"],
    tintClassName: "from-cyan-400/12 via-teal-300/6 to-transparent",
    timelineNodeClassName:
      "bg-cyan-400 shadow-[0_0_0_6px_rgba(34,211,238,0.12)]",
  },
] as const;

const siteContentByLocale: Record<Locale, SiteContent> = {
  en: {
    metadata: {
      title: "Andre Santos | Senior Frontend Engineer",
      description:
        "Personal website of Andre Santos, Frontend Engineer focused on building accessible and polished web experiences.",
    },
    profile: {
      name: "André Santos",
      role: "Senior Frontend Engineer",
      intro:
        "I’m a senior frontend engineer who enjoys building accessible, polished, and fast digital experiences that feel easy to use.\nDoubt it? Take a look around!",
      portraitAlt: "Portrait of André Santos",
      socials,
    },
    navigation: {
      ariaLabel: "Main navigation",
      items: [
        { label: "Home", sectionId: "home" },
        { label: "My Path", sectionId: "path" },
        { label: "Who am I?", sectionId: "who-am-i" },
      ],
    },
    languageSwitcher: {
      label: "Language",
      locales: {
        en: "English",
        pt: "Português",
      },
    },
    ui: {
      skipToContent: "Skip to content",
      goToTop: "Go to top",
      sidebarAriaLabel: "Sidebar",
      companyLogoLabel: "logo",
    },
    home: {
      eyebrow: "Welcome to André 101!",
      title: "The engineer who happens to work with frontend",
      intro: [
        "I’m passionate about technology and enjoy learning, improving, and contributing wherever I can. What sets me apart is not only my technical skills, but also the way I work with people! I’m communicative, adaptable, and someone who helps create a collaborative and positive team environment.",
        "Over the years, I’ve worked across product teams in fintech, publishing, logistics, e-commerce, and healthcare, with a strong focus on React, TypeScript, UI development, and usability. I’ve worked in very different environments, from startups to large companies, including NYSE-listed enterprises, which gave me experience with everything from long-standing legacy systems to modern architectures.",
        "From internal tools used by thousands of people around the world to back-office modules and client-facing platforms, I’ve had the opportunity to contribute to a wide range of projects and challenges. Along the way, I developed a strong product mindset and a real appreciation for building and growing a product.",
      ],
      focusTitle: "A few examples of what I’ve done throughout my career",
      focusItems: [
        "Design system development",
        "Frontend architecture that scales with product complexity",
        "Accessibility and thoughtful user experience",
        "Readable, maintainable, and well-tested code",
      ],
    },
    path: {
      mobileEyebrow: "My Path",
      title: "My professional journey so far",
      intro: [
        "A timeline of the roles, domains, and product contexts that shaped how I think about frontend engineering, interface quality, and maintainable digital experiences.",
        "Feel free to explore each role by expanding the cards.",
      ],
    },
    experience: [
      {
        ...baseExperienceStyles[0],
        role: "Fullstack Developer",
        period: "March 2025 - Current",
        description:
          "Contributing to the modernization of a large logistics platform used daily by tens of thousands of users.",
        details: [
          "Migrated a legacy Java Swing frontend to Angular + NgRx.",
          "Modernized a global logistics UI used daily by 80,000+ users across airports and seaports.",
          "Developed new features and enhancements to improve usability and efficiency inside a large monolithic application.",
          "Debugged and resolved production issues supporting mission-critical logistics operations.",
          "Collaborated across distributed teams to deliver scalable solutions and support ongoing platform modernization.",
        ],
      },
      {
        ...baseExperienceStyles[1],
        role: "Wallet Frontend Developer",
        period: "October 2024 - February 2025",
        description:
          "Worked on Uphold’s digital wallet across Android, iOS, and web platforms, focusing on scalable frontend architecture and polished product experiences.",
        details: [
          "Developed and maintained wallet features across Android, iOS, and web using React Native.",
          "Collaborated daily with product, design, backend, QA, and delivery teams to ship features and improve performance.",
          "Managed state and logic flows with XState to support a more scalable frontend architecture.",
          "Built responsive and consistent interfaces using styled-components and the company’s design system.",
        ],
      },
      {
        ...baseExperienceStyles[2],
        role: "Enterprise Frontend Developer",
        period: "June 2022 - August 2024",
        description:
          "Worked on an enterprise-facing frontend platform and integration-heavy product work.",
        details: [
          "Delivered a partner integration with custom authentication, tailored UI, and API connectivity.",
          "Worked directly with external teams to ensure smooth product integration and rollout.",
          "Contributed both as Enterprise Frontend Developer and Integrations Frontend Developer during this period.",
          "Helped evolve the platform from a single-user model to an organization-based system with teams, roles, permissions, and document management.",
        ],
      },
      {
        ...baseExperienceStyles[3],
        role: "Admin Tools Frontend Developer",
        period: "September 2019 - March 2022",
        description:
          "Built and evolved back-office modules supporting logistics and operational workflows, with strong focus on migration and maintainability.",
        details: [
          "Built and maintained more than 8 back-office modules across logistics and operational contexts.",
          "Implemented user interfaces while coordinating with cross-functional teams to ensure a seamless experience across modules.",
          "Modernized legacy modules by migrating them to React with TypeScript.",
          "Improved maintainability and performance of internal tools used in fast-changing operational environments.",
        ],
      },
      {
        ...baseExperienceStyles[4],
        role: "Junior Developer",
        period: "September 2017 - April 2019",
        description:
          "Worked on a large healthcare web application used across Portugal, helping maintain stability and deliver product improvements.",
        details: [
          "Maintained and fixed bugs in a large-scale healthcare web application used across Portugal’s pharmacies and hospitals.",
          "Implemented new features to improve user workflows using JavaScript, HTML, and CSS.",
          "Worked within Agile/Scrum processes and coordinated with a product manager on requirements and prioritization.",
        ],
      },
    ],
    personal: {
      title: "Who’s André, the non-engineer",
      mobileEyebrow: "Who I really am",
      description:
        "Beyond work, I’ve cared about different things at different stages of my life.\nSome of these interests, along with a few lucky coincidences, helped me build genuine friendships throughout most of my professional journey.",
      items: [
        "Travelling. Cliche, I know, but I rarely hear anyone complain about it.",
        "LEGO (Star Wars, Harry Potter, Architecture, you name it)",
        "Animals. Blessed with two beautiful cats: Loki and Kitty.",
        "Movies. I’m one of those people who once followed the IMDb Top 250 list quite seriously.",
        "TV series and anime. I’m a bit of a snob here, so anything rated 8.5 or higher on IMDb goes straight to my watchlist.",
        "Spending time with the people I love most, whether that means family gatherings or dinners with friends.",
        "Football. The one played with your feet. Big FC Porto fan.",
      ],
    },
  },
  pt: {
    metadata: {
      title: "Andre Santos | Senior Frontend Engineer",
      description:
        "Site pessoal de André Santos, senior frontend engineer focado em criar experiências web acessíveis e bem construídas.",
    },
    profile: {
      name: "André Santos",
      role: "Senior Frontend Engineer",
      intro:
        "Sou um senior frontend engineer que gosta de criar experiências digitais acessíveis, fluidas, rápidas, intuitivas e fáceis de usar.\nDuvidas? Dá uma volta pelo site!",
      portraitAlt: "Retrato de André Santos",
      socials,
    },
    navigation: {
      ariaLabel: "Navegação principal",
      items: [
        { label: "Início", sectionId: "home" },
        { label: "Percurso", sectionId: "path" },
        { label: "Quem sou eu?", sectionId: "who-am-i" },
      ],
    },
    languageSwitcher: {
      label: "Idioma",
      locales: {
        en: "English",
        pt: "Português",
      },
    },
    ui: {
      skipToContent: "Saltar para o conteúdo",
      goToTop: "Ir para o topo",
      sidebarAriaLabel: "Barra lateral",
      companyLogoLabel: "logotipo",
    },
    home: {
      eyebrow: "Bem-vindo ao André 101!",
      title: "Um engenheiro que, também, trabalha com frontend",
      intro: [
        "Sou apaixonado por tecnologia e gosto de aprender, melhorar e contribuir sempre que posso. O que me distingue não são apenas as minhas competências técnicas, mas também a forma como trabalho com outras pessoas. Sou comunicativo, adaptável e alguém que ajuda a criar um ambiente de equipa colaborativo e positivo.",
        "Ao longo dos anos, trabalhei em equipas de produto nas áreas de fintech, publishing, logística, e-commerce e saúde, com forte foco em React, TypeScript, desenvolvimento de interfaces e usabilidade. Passei por contextos muito diferentes, desde startups a grandes empresas, incluindo organizações cotadas na NYSE, o que me deu experiência tanto com sistemas legacy como com arquiteturas modernas.",
        "Desde ferramentas internas usadas por milhares de pessoas em todo o mundo até módulos de back-office e plataformas voltadas para o cliente, tive oportunidade de contribuir para projetos e desafios muito diferentes. Ao longo desse percurso, desenvolvi uma forte mentalidade de produto e um apreço genuíno por construir e fazer crescer um produto.",
      ],
      focusTitle:
        "Alguns exemplos do que fui fazendo ao longo da minha carreira",
      focusItems: [
        "Desenvolvimento de design systems",
        "Arquitetura frontend que acompanha a complexidade do produto",
        "Acessibilidade e experiência de utilização pensada ao detalhe",
        "Código legível, sustentável e bem testado",
      ],
    },
    path: {
      mobileEyebrow: "Percurso",
      title: "O meu percurso profissional até agora",
      intro: [
        "Uma linha temporal das funções, domínios e contextos de produto que moldaram a forma como penso engenharia frontend, qualidade de interfaces e experiências digitais sustentáveis.",
        "Podes explorar cada função abrindo os respetivos cartões.",
      ],
    },
    experience: [
      {
        ...baseExperienceStyles[0],
        role: "Fullstack Developer",
        period: "Março de 2025 - Presente",
        description:
          "A contribuir para a modernização de uma grande plataforma de logística usada diariamente por dezenas de milhares de utilizadores.",
        details: [
          "Migrei um frontend legacy em Java Swing para Angular + NgRx.",
          "Modernizei uma interface global de logística usada diariamente por mais de 80.000 utilizadores em aeroportos e portos.",
          "Desenvolvi novas funcionalidades e melhorias para aumentar a usabilidade e a eficiência dentro de uma grande aplicação monolítica.",
          "Analisei e resolvi problemas em produção que suportavam operações logísticas críticas.",
          "Colaborei com equipas distribuídas para entregar soluções escaláveis e apoiar a modernização contínua da plataforma.",
        ],
      },
      {
        ...baseExperienceStyles[1],
        role: "Wallet Frontend Developer",
        period: "Outubro de 2024 - Fevereiro de 2025",
        description:
          "Trabalhei na wallet digital da Uphold para Android, iOS e web, com foco em arquitetura frontend escalável e experiências de produto polidas.",
        details: [
          "Desenvolvi e mantive funcionalidades da wallet em Android, iOS e web com React Native.",
          "Colaborei diariamente com produto, design, backend, QA e delivery para lançar funcionalidades e melhorar a performance.",
          "Geri estado e fluxos de lógica com XState para suportar uma arquitetura frontend mais escalável.",
          "Construí interfaces responsivas e consistentes com styled-components e o design system da empresa.",
        ],
      },
      {
        ...baseExperienceStyles[2],
        role: "Enterprise Frontend Developer",
        period: "Junho de 2022 - Agosto de 2024",
        description:
          "Trabalhei numa plataforma frontend orientada a clientes enterprise e em produto com forte componente de integrações.",
        details: [
          "Entreguei uma integração com parceiro, com autenticação personalizada, UI adaptada e ligação a APIs.",
          "Trabalhei diretamente com equipas externas para garantir uma integração e um rollout tranquilos.",
          "Contribuí tanto como Enterprise Frontend Developer como Integrations Frontend Developer durante este período.",
          "Ajudei a evoluir a plataforma de um modelo de utilizador único para um sistema baseado em organizações com equipas, papéis, permissões e gestão documental.",
        ],
      },
      {
        ...baseExperienceStyles[3],
        role: "Admin Tools Frontend Developer",
        period: "Setembro de 2019 - Março de 2022",
        description:
          "Criei e evoluí módulos de back-office para fluxos operacionais e logísticos, com forte foco em migração e manutenção.",
        details: [
          "Desenvolvi e mantive mais de 8 módulos de back-office em contextos logísticos e operacionais.",
          "Implementei interfaces em colaboração com equipas multidisciplinares para garantir uma experiência consistente entre módulos.",
          "Modernizei módulos legacy através da migração para React com TypeScript.",
          "Melhorei a manutenção e a performance de ferramentas internas usadas em ambientes operacionais em constante mudança.",
        ],
      },
      {
        ...baseExperienceStyles[4],
        role: "Junior Developer",
        period: "Setembro de 2017 - Abril de 2019",
        description:
          "Trabalhei numa grande aplicação web de saúde usada em Portugal, ajudando a manter estabilidade e a entregar melhorias de produto.",
        details: [
          "Mantive e corrigi bugs numa aplicação web de saúde de grande escala usada em farmácias e hospitais de Portugal.",
          "Implementei novas funcionalidades para melhorar fluxos de trabalho com JavaScript, HTML e CSS.",
          "Trabalhei em processos Agile/Scrum e coordenei requisitos e prioridades com um product manager.",
        ],
      },
    ],
    personal: {
      title: "Quem é o André, o não engenheiro",
      mobileEyebrow: "Quem eu sou, na verdade",
      description:
        "Fora do trabalho, fui tendo interesses diferentes em fases diferentes da minha vida.\nAlguns desses interesses, juntamente com algumas coincidências felizes, ajudaram-me a criar amizades genuínas ao longo de grande parte do meu percurso profissional.",
      items: [
        "Viajar. Cliché, eu sei, mas raramente ouço alguém a queixar-se disso.",
        "LEGO (Star Wars, Harry Potter, Architecture, tudo um pouco)",
        "Animais. Tenho a sorte de viver com dois gatos lindos: Loki e Kitty.",
        "Cinema. Sou uma daquelas pessoas que decidiu seguir a lista Top 250 do IMDb dos melhores filmes de sempre.",
        "Séries e anime. Aqui sou um pouco snob, por isso tudo o que tenha 8.5 ou mais no IMDb vai diretamente para a minha watchlist.",
        "Passar tempo com as pessoas de quem mais gosto, seja em encontros de família ou jantares com amigos.",
        "Futebol. Grande adepto do FC Porto.",
      ],
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContentByLocale[locale];
}
