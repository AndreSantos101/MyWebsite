import PortfolioPage from "@/components/pages/PortfolioPage";
import { getSiteContent } from "@/data/site-content";

export function generateMetadata() {
  const content = getSiteContent("en");

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default function HomePage() {
  return <PortfolioPage locale="en" />;
}
