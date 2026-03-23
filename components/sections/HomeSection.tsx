import { homeContent } from "@/data/home";
import SectionHeader from "./SectionHeader";
import TextHighlights from "../UI/TextHighlights";
import FeatureGrid from "../UI/FeatureGrid";

export default function HomeSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="scroll-mt-24 space-y-12"
    >
      <div>
        <SectionHeader
          eyebrow={homeContent.eyebrow}
          title={homeContent.title}
          titleId="home-heading"
          withTitleOffset={false}
        />

        <TextHighlights
          items={homeContent.intro}
          emphasizedFirst
          className="mt-10 max-w-3xl"
        />
      </div>

      <section aria-labelledby="focus-heading">
        <h3
          id="focus-heading"
          className="text-lg font-semibold tracking-tight text-[#CCFBF1]"
        >
          {homeContent.focusTitle}
        </h3>

        <FeatureGrid items={homeContent.focusItems} className="mt-6" />
      </section>
    </section>
  );
}
