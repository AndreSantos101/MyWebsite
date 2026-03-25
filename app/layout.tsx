import type { Metadata } from "next";
import { defaultLocale, isLocale } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andre Santos | Portfolio",
  description: "Localized personal portfolio of Andre Santos.",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale?: string;
  }>;
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const htmlLang = isLocale(locale) ? locale : defaultLocale;

  return (
    <html lang={htmlLang}>
      <body>{children}</body>
    </html>
  );
}
