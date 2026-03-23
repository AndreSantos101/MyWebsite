export type SocialIconName = "github" | "instagram" | "linkedin";

type SocialLink = {
  label: string;
  href: string;
  icon: SocialIconName;
};

type Profile = {
  name: string;
  role: string;
  intro: string;
  socials: SocialLink[];
};

export const profile: Profile = {
  name: "André Santos",
  role: "Senior Frontend Engineer",
  intro:
    "I’m a senior frontend engineer who enjoys building accessible, polished, and fast digital experiences that feel easy to use.\nDoubt it? Take a look around!",
  socials: [
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
  ],
};
