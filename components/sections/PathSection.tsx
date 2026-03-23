import TimelineItem from "@/components/sections/TimelineItem";
import { experienceItems } from "@/data/experience";
import { pathContent } from "@/data/path";
import SectionHeader from "./SectionHeader";

export default function PathSection() {
  return (
    <section
      id="path"
      aria-labelledby="path-heading"
      className="scroll-mt-24 space-y-10"
    >
      <SectionHeader
        titleId="path-heading"
        title={pathContent.title}
        eyebrow={pathContent.mobileEyebrow}
        titleClassName="max-w-4xl"
        introClassName="max-w-3xl"
        intro={
          <>
            {pathContent.intro.map((paragraph) => (
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
            isLast={index === experienceItems.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
