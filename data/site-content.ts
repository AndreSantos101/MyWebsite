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
        pt: "Portuguese",
        de: "German",
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
      title: "Andre Santos | Senior Frontend Developer",
      description:
        "Site pessoal de André Santos, engenheiro frontend focado em criar experiências web acessíveis e cuidadas.",
    },
    profile: {
      name: "André Santos",
      role: "Senior Frontend Developer",
      intro:
        "Sou um Senior Frontend Developer que gosta de criar experiências digitais acessíveis, polidas e rápidas, daquelas que parecem fáceis de usar.\nDúvidas? Dá uma olhadela ao site!",
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
        de: "Deutsch",
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
      title: "O engenheiro que, por acaso, trabalha em frontend",
      intro: [
        "Sou apaixonado por tecnologia e gosto de aprender, melhorar e contribuir sempre que posso. O que me distingue não são apenas as minhas competências técnicas, mas também a forma como trabalho com outras pessoas. Sou comunicativo, adaptável e alguém que ajuda a criar um ambiente de equipa colaborativo e positivo.",
        "Ao longo dos anos, trabalhei em equipas de produto nas áreas de fintech, publicação, logística, e-commerce e saúde, com forte foco em React, TypeScript, desenvolvimento de interfaces e usabilidade. Passei por contextos muito diferentes, desde startups a grandes empresas, incluindo organizações cotadas na NYSE, o que me deu experiência tanto com sistemas legacy como com arquiteturas modernas.",
        "Desde ferramentas internas usadas por milhares de pessoas em todo o mundo até módulos de back-office e plataformas viradas para clientes, tive oportunidade de contribuir para projetos e desafios muito diferentes. Nesse caminho, desenvolvi um forte product mindset e um apreço genuíno por construir e fazer crescer um produto.",
      ],
      focusTitle: "Alguns exemplos do que fui fazendo ao longo da minha carreira",
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
        period: "Março 2025 - Atual",
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
        period: "Outubro 2024 - Fevereiro 2025",
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
        period: "Junho 2022 - Agosto 2024",
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
        period: "Setembro 2019 - Março 2022",
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
        period: "Setembro 2017 - Abril 2019",
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
      title: "Quem é o André fora da engenharia",
      mobileEyebrow: "Quem eu sou, na verdade",
      description:
        "Fora do trabalho, fui tendo interesses diferentes em fases diferentes da minha vida.\nAlguns desses interesses, juntamente com algumas coincidências felizes, ajudaram-me a criar amizades genuínas ao longo de grande parte do meu percurso profissional.",
      items: [
        "Viajar. Cliché, eu sei, mas raramente ouço alguém a queixar-se disso.",
        "LEGO (Star Wars, Harry Potter, Architecture, o que quiseres)",
        "Animais. Tenho a sorte de viver com dois gatos lindos: Loki e Kitty.",
        "Cinema. Sou uma daquelas pessoas que já levou a sério seguir a lista Top 250 do IMDb.",
        "Séries e anime. Aqui sou um bocadinho snob, por isso tudo o que tenha 8.5 ou mais no IMDb vai direto para a minha watchlist.",
        "Passar tempo com as pessoas de quem mais gosto, seja em encontros de família ou jantares com amigos.",
        "Futebol. O jogado com os pés. Grande adepto do FC Porto.",
      ],
    },
  },
  de: {
    metadata: {
      title: "Andre Santos | Senior Frontend Engineer",
      description:
        "Persönliche Website von Andre Santos, einem Frontend Engineer mit Fokus auf barrierefreie und durchdachte Web-Erlebnisse.",
    },
    profile: {
      name: "André Santos",
      role: "Senior Frontend Engineer",
      intro:
        "Ich bin Senior Frontend Engineer und entwickle gern zugängliche, schnelle und sauber gestaltete digitale Erlebnisse, die sich leicht anfühlen.\nZweifel? Schau dich einfach um!",
      portraitAlt: "Porträt von André Santos",
      socials,
    },
    navigation: {
      ariaLabel: "Hauptnavigation",
      items: [
        { label: "Start", sectionId: "home" },
        { label: "Werdegang", sectionId: "path" },
        { label: "Wer bin ich?", sectionId: "who-am-i" },
      ],
    },
    languageSwitcher: {
      label: "Sprache",
      locales: {
        en: "Englisch",
        pt: "Portugiesisch",
        de: "Deutsch",
      },
    },
    ui: {
      skipToContent: "Zum Inhalt springen",
      goToTop: "Nach oben",
      sidebarAriaLabel: "Seitenleiste",
      companyLogoLabel: "Logo",
    },
    home: {
      eyebrow: "Willkommen bei André 101!",
      title: "Der Engineer, der eher zufällig im Frontend gelandet ist",
      intro: [
        "Ich begeistere mich für Technologie und lerne, verbessere und unterstütze gern dort, wo ich etwas beitragen kann. Was mich auszeichnet, sind nicht nur meine technischen Fähigkeiten, sondern auch die Art, wie ich mit Menschen zusammenarbeite. Ich bin kommunikativ, anpassungsfähig und jemand, der zu einer positiven und kollaborativen Teamkultur beiträgt.",
        "Im Laufe der Jahre habe ich in Produktteams aus Fintech, Publishing, Logistik, E-Commerce und Health Care gearbeitet, mit starkem Fokus auf React, TypeScript, UI-Entwicklung und Usability. Ich war in sehr unterschiedlichen Umfeldern unterwegs, von Start-ups bis zu großen Unternehmen, darunter auch NYSE-notierte Konzerne. Dadurch kenne ich sowohl lang gewachsene Legacy-Systeme als auch moderne Architekturen.",
        "Von internen Tools, die weltweit von Tausenden Menschen genutzt werden, bis hin zu Backoffice-Modulen und kundenorientierten Plattformen durfte ich an sehr unterschiedlichen Projekten und Herausforderungen mitarbeiten. Dabei habe ich ein starkes Produktverständnis entwickelt und echte Freude daran gefunden, Produkte aufzubauen und weiterzuentwickeln.",
      ],
      focusTitle:
        "Ein paar Beispiele für das, was ich in meiner Laufbahn gemacht habe",
      focusItems: [
        "Entwicklung von Design Systems",
        "Frontend-Architektur, die mit der Produktkomplexität mitwächst",
        "Barrierefreiheit und durchdachte User Experience",
        "Lesbarer, wartbarer und gut getesteter Code",
      ],
    },
    path: {
      mobileEyebrow: "Mein Weg",
      title: "Mein beruflicher Weg bisher",
      intro: [
        "Eine Zeitleiste der Rollen, Branchen und Produktkontexte, die geprägt haben, wie ich über Frontend Engineering, Interface-Qualität und wartbare digitale Erlebnisse denke.",
        "Du kannst jede Station erkunden, indem du die Karten aufklappst.",
      ],
    },
    experience: [
      {
        ...baseExperienceStyles[0],
        role: "Fullstack Developer",
        period: "März 2025 - Heute",
        description:
          "Ich arbeite an der Modernisierung einer großen Logistikplattform, die täglich von Zehntausenden Menschen genutzt wird.",
        details: [
          "Ich habe ein Legacy-Frontend in Java Swing nach Angular + NgRx migriert.",
          "Ich habe eine globale Logistik-UI modernisiert, die täglich von über 80.000 Nutzern an Flughäfen und Seehäfen verwendet wird.",
          "Ich habe neue Funktionen und Verbesserungen entwickelt, um Usability und Effizienz innerhalb einer grossen monolithischen Anwendung zu steigern.",
          "Ich habe Produktionsprobleme analysiert und gelöst, die kritische Logistikprozesse unterstützen.",
          "Ich habe mit verteilten Teams zusammengearbeitet, um skalierbare Lösungen zu liefern und die laufende Modernisierung der Plattform voranzutreiben.",
        ],
      },
      {
        ...baseExperienceStyles[1],
        role: "Wallet Frontend Developer",
        period: "Oktober 2024 - Februar 2025",
        description:
          "Ich habe an Upholds digitaler Wallet für Android, iOS und Web gearbeitet, mit Fokus auf skalierbare Frontend-Architektur und hochwertige Produkterlebnisse.",
        details: [
          "Ich habe Wallet-Funktionen für Android, iOS und Web mit React Native entwickelt und gepflegt.",
          "Ich habe täglich mit Produkt, Design, Backend, QA und Delivery zusammengearbeitet, um Features auszuliefern und die Performance zu verbessern.",
          "Ich habe State- und Logik-Flows mit XState umgesetzt, um eine besser skalierbare Frontend-Architektur zu unterstützen.",
          "Ich habe responsive und konsistente Interfaces mit styled-components und dem Design System des Unternehmens gebaut.",
        ],
      },
      {
        ...baseExperienceStyles[2],
        role: "Enterprise Frontend Developer",
        period: "Juni 2022 - August 2024",
        description:
          "Ich habe an einer enterprise-orientierten Frontend-Plattform und an produktnaher Arbeit mit vielen Integrationen gearbeitet.",
        details: [
          "Ich habe eine Partner-Integration mit individueller Authentifizierung, angepasster UI und API-Anbindung umgesetzt.",
          "Ich habe direkt mit externen Teams zusammengearbeitet, um eine reibungslose Integration und Einführung sicherzustellen.",
          "In dieser Zeit habe ich sowohl als Enterprise Frontend Developer als auch als Integrations Frontend Developer beigetragen.",
          "Ich habe geholfen, die Plattform von einem Single-User-Modell zu einem organisationsbasierten System mit Teams, Rollen, Berechtigungen und Dokumentenverwaltung weiterzuentwickeln.",
        ],
      },
      {
        ...baseExperienceStyles[3],
        role: "Admin Tools Frontend Developer",
        period: "September 2019 - März 2022",
        description:
          "Ich habe Backoffice-Module für logistische und operative Abläufe aufgebaut und weiterentwickelt, mit starkem Fokus auf Migration und Wartbarkeit.",
        details: [
          "Ich habe mehr als 8 Backoffice-Module in logistischen und operativen Kontexten entwickelt und gepflegt.",
          "Ich habe Benutzeroberflächen umgesetzt und mich dabei eng mit funktionsübergreifenden Teams abgestimmt, um ein konsistentes Erlebnis über mehrere Module hinweg sicherzustellen.",
          "Ich habe Legacy-Module durch Migration zu React mit TypeScript modernisiert.",
          "Ich habe Wartbarkeit und Performance interner Tools verbessert, die in sich schnell verändernden operativen Umfeldern genutzt werden.",
        ],
      },
      {
        ...baseExperienceStyles[4],
        role: "Junior Developer",
        period: "September 2017 - April 2019",
        description:
          "Ich habe an einer großen Healthcare-Webanwendung gearbeitet, die in ganz Portugal genutzt wurde, und dabei Stabilität gesichert sowie Produktverbesserungen geliefert.",
        details: [
          "Ich habe Bugs in einer großen Healthcare-Webanwendung für Apotheken und Krankenhäuser in Portugal behoben und das System weiter gepflegt.",
          "Ich habe neue Funktionen mit JavaScript, HTML und CSS umgesetzt, um Arbeitsabläufe zu verbessern.",
          "Ich habe in Agile/Scrum-Prozessen gearbeitet und Anforderungen sowie Prioritäten mit einem Product Manager abgestimmt.",
        ],
      },
    ],
    personal: {
      title: "Wer André außerhalb der Technik ist",
      mobileEyebrow: "Wer ich wirklich bin",
      description:
        "Abseits der Arbeit haben mich in unterschiedlichen Lebensphasen ganz verschiedene Dinge begeistert.\nEinige dieser Interessen und ein paar glückliche Zufälle haben mir geholfen, über weite Teile meines Berufswegs echte Freundschaften aufzubauen.",
      items: [
        "Reisen. Klischee, ich weiß, aber ich höre selten jemanden darüber klagen.",
        "LEGO (Star Wars, Harry Potter, Architecture, was auch immer)",
        "Tiere. Ich habe das Glück, mit zwei wunderbaren Katzen zu leben: Loki und Kitty.",
        "Filme. Ich bin einer dieser Menschen, die die IMDb Top 250 einmal ziemlich ernst verfolgt haben.",
        "Serien und Anime. Hier bin ich ein bisschen snobistisch, also landet alles mit 8,5 oder mehr auf IMDb direkt auf meiner Watchlist.",
        "Zeit mit den Menschen zu verbringen, die mir am wichtigsten sind, egal ob bei Familientreffen oder Abendessen mit Freunden.",
        "Fußball. Der mit den Füßen. Großer FC-Porto-Fan.",
      ],
    },
  },
};

export function getSiteContent(locale: Locale) {
  return siteContentByLocale[locale];
}
