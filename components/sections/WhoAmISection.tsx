import type { PersonalContent } from "@/data/site-content";
import SectionHeader from "./SectionHeader";

type WhoAmISectionProps = {
  content: PersonalContent;
};

export default function WhoAmISection({ content }: WhoAmISectionProps) {
  return (
    <section
      id="who-am-i"
      aria-labelledby="personal-heading"
      className="scroll-mt-24 space-y-8"
    >
      <SectionHeader
        titleId="personal-heading"
        title={content.title}
        eyebrow={content.mobileEyebrow}
        titleClassName="max-w-3xl"
        introClassName="max-w-2xl"
        intro={
          <p className="whitespace-pre-line text-[1.05rem] leading-8 text-slate-200">
            {content.description}
          </p>
        }
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {content.items.map((item) => (
          <li
            key={item}
            className="group rounded-2xl border border-white/10 bg-slate-900/35 p-5 backdrop-blur-sm transition duration-300 hover:border-white/15 hover:bg-slate-900/45"
          >
            <div className="flex items-start gap-4">
              <span
                className="mt-[0.45rem] h-2.5 w-2.5 shrink-0 rounded-full bg-teal-300/80 shadow-[0_0_0_6px_rgba(45,212,191,0.08)]"
                aria-hidden="true"
              />
              <p className="text-sm leading-7 text-slate-300">{item}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
