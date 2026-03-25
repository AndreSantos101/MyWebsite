import HomeSection from "@/components/sections/HomeSection";
import PathSection from "@/components/sections/PathSection";
import WhoAmISection from "@/components/sections/WhoAmISection";
import SiteShell from "@/components/layout/SiteShell";
import { getSiteContent } from "@/data/site-content";
import type { Locale } from "@/lib/i18n";

type PortfolioPageProps = {
  locale: Locale;
};

export default function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getSiteContent(locale);

  return (
    <SiteShell
      locale={locale}
      profile={content.profile}
      navigation={content.navigation}
      languageSwitcher={content.languageSwitcher}
      ui={content.ui}
    >
      <div className="space-y-24">
        <HomeSection content={content.home} />
        <PathSection
          content={content.path}
          experienceItems={content.experience}
          companyLogoLabel={content.ui.companyLogoLabel}
        />
        <WhoAmISection content={content.personal} />
      </div>
    </SiteShell>
  );
}
