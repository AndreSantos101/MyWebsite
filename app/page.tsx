import SiteShell from "@/components/layout/SiteShell";
import HomeSection from "@/components/sections/HomeSection";
import PathSection from "@/components/sections/PathSection";
import WhoAmISection from "@/components/sections/WhoAmISection";

export default function HomePage() {
  return (
    <SiteShell>
      <div className="space-y-24">
        <HomeSection />
        <PathSection />
        <WhoAmISection />
      </div>
    </SiteShell>
  );
}
