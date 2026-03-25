import type { ComponentType, SVGProps } from "react";
import type { ProfileContent, SocialIconName } from "@/data/site-content";
import { cn } from "@/lib/cn";

type SocialLinksProps = {
  socials: ProfileContent["socials"];
  className?: string;
};

type SocialIconProps = SVGProps<SVGSVGElement>;

function LinkedInIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.25 6.92 1.96 1.96 0 0 0 5.25 3Zm15.19 9.86c0-3.46-1.85-5.07-4.31-5.07a3.73 3.73 0 0 0-3.36 1.85V8.5H9.39V20h3.38v-6.14c0-1.62.31-3.19 2.31-3.19 1.97 0 2 1.84 2 3.3V20h3.37Z" />
    </svg>
  );
}

function InstagramIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.86A5.14 5.14 0 1 1 6.86 12 5.14 5.14 0 0 1 12 6.86Zm0 1.8A3.34 3.34 0 1 0 15.34 12 3.34 3.34 0 0 0 12 8.66Z" />
    </svg>
  );
}

function GitHubIcon(props: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.92c.85 0 1.71.12 2.51.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.58 5.07.36.32.69.93.69 1.88 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

const socialIcons: Record<SocialIconName, ComponentType<SocialIconProps>> = {
  github: GitHubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export default function SocialLinks({
  socials,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-center gap-4">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon];

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-900/35 text-slate-400 transition",
                "hover:border-white/20 hover:text-slate-100",
              )}
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
