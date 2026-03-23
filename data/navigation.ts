export const sectionIds = ["home", "path", "who-am-i"] as const;

export type SectionId = (typeof sectionIds)[number];

export type NavItem = {
  label: string;
  href: `/#${SectionId}`;
  sectionId: SectionId;
};

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "My Path",
    href: "/#path",
    sectionId: "path",
  },
  {
    label: "Who am I?",
    href: "/#who-am-i",
    sectionId: "who-am-i",
  },
];
