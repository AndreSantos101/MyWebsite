import { notFound } from "next/navigation";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { getSiteContent } from "@/data/site-content";
import { isRoutedLocale, routedLocales } from "@/lib/i18n";

type LocalizedPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return routedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalizedPageProps) {
  const { locale } = await params;

  if (!isRoutedLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function LocalizedHomePage({
  params,
}: LocalizedPageProps) {
  const { locale } = await params;

  if (!isRoutedLocale(locale)) {
    notFound();
  }

  return <PortfolioPage locale={locale} />;
}
