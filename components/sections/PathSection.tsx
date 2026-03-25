import TimelineItem from "@/components/sections/TimelineItem";
import type { ExperienceItem, PathContent } from "@/data/site-content";
import SectionHeader from "./SectionHeader";

type PathSectionProps = {
  content: PathContent;
  experienceItems: ExperienceItem[];
  companyLogoLabel: string;
};

export default function PathSection({
  content,
  experienceItems,
  companyLogoLabel,
}: PathSectionProps) {
  return (
    <section
      id="path"
      aria-labelledby="path-heading"
      className="scroll-mt-24 space-y-10"
    >
      <SectionHeader
        titleId="path-heading"
        title={content.title}
        eyebrow={content.mobileEyebrow}
        titleClassName="max-w-4xl"
        introClassName="max-w-3xl"
        intro={
          <>
            {content.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[1.05rem] leading-8 text-slate-200"
              >
                {paragraph}
              </p>
            ))}
          </>
        }
      />

      <div className="group/timeline space-y-0">
        {experienceItems.map((item, index) => (
          <TimelineItem
            key={`${item.company}-${item.period}`}
            item={item}
            companyLogoLabel={companyLogoLabel}
            isLast={index === experienceItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
