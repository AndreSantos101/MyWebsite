import type { HomeContent } from "@/data/site-content";
import SectionHeader from "./SectionHeader";
import TextHighlights from "../UI/TextHighlights";
import FeatureGrid from "../UI/FeatureGrid";

type HomeSectionProps = {
  content: HomeContent;
};

export default function HomeSection({ content }: HomeSectionProps) {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="scroll-mt-24 space-y-12"
    >
      <div>
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          titleId="home-heading"
          withTitleOffset={false}
        />

        <TextHighlights
          items={content.intro}
          emphasizedFirst
          className="mt-10 max-w-3xl"
        />
      </div>

      <section aria-labelledby="focus-heading">
        <h3
          id="focus-heading"
          className="text-lg font-semibold tracking-tight text-[#CCFBF1]"
        >
          {content.focusTitle}
        </h3>

        <FeatureGrid items={content.focusItems} className="mt-6" />
      </section>
    </section>
  );
}
