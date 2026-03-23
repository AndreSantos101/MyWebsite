import Image from "next/image";
import type { ExperienceItem } from "@/data/experience";
import { cn } from "@/lib/cn";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <details
      className={cn(
        "group/card relative overflow-hidden rounded-[1.5rem] border border-white/10 px-5 py-5 transition duration-300",
        "cursor-pointer backdrop-blur-sm",
        "bg-slate-900/45",
        "hover:-translate-y-1 hover:border-white/15 hover:bg-slate-900/55 hover:shadow-[0_16px_40px_rgba(2,6,23,0.28)]",
        "group-hover/timeline:opacity-60 hover:!opacity-100",
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-100",
          item.tintClassName,
        )}
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.07),transparent_28%)]"
        aria-hidden="true"
      />

      <summary
        className="relative z-10 block w-full cursor-pointer list-none text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 [&::-webkit-details-marker]:hidden"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            {item.period}
          </p>

          <div className="flex items-center gap-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white p-3 shadow-sm">
              <Image
                src={item.logoSrc}
                alt={`${item.company} logo`}
                width={40}
                height={40}
                className="max-h-10 w-auto object-contain"
              />
            </div>

            <span
              className="experience-card-chevron inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-950/35 text-slate-400 transition-transform duration-300"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="mt-2 mb-4">
          <h3 className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
            {item.role}
          </h3>

          <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-slate-300">
            {item.company}
          </p>
        </div>

        <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
          {item.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1 text-[11px] font-medium tracking-[0.12em] text-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>
      </summary>

      <div className="experience-card-details relative z-10 mt-5">
        <div className="rounded-2xl border border-white/8 bg-slate-950/35 p-4">
          <ul className="space-y-3">
            {item.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-sm leading-7 text-slate-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-200/80" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}
