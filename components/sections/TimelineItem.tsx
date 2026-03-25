import ExperienceCard from "@/components/sections/ExperienceCard";
import type { ExperienceItem } from "@/data/site-content";
import { cn } from "@/lib/cn";

type TimelineItemProps = {
  item: ExperienceItem;
  companyLogoLabel: string;
  isLast?: boolean;
};

export default function TimelineItem({
  item,
  companyLogoLabel,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative grid grid-cols-[1.5rem_1fr] gap-2 sm:grid-cols-[1.75rem_1fr] sm:gap-3">
      <div className="relative flex justify-start">
        {!isLast && (
          <div className="absolute left-[0.45rem] top-6 bottom-0 w-px bg-gradient-to-b from-slate-500/70 via-slate-700/60 to-transparent sm:left-[0.55rem]" />
        )}

        <div
          className={cn(
            "relative z-10 mt-5 h-4 w-4 rounded-full border border-white/20",
            item.timelineNodeClassName,
          )}
          aria-hidden="true"
        />

        <div
          className="absolute left-[0.95rem] top-[1.55rem] h-px w-3 bg-gradient-to-r from-slate-500/70 to-transparent sm:left-[1.05rem] sm:w-4"
          aria-hidden="true"
        />
      </div>

      <div className="pb-10 sm:pb-12">
        <ExperienceCard item={item} companyLogoLabel={companyLogoLabel} />
      </div>
    </div>
  );
}
