import type { SectionId } from "@/data/navigation";

export const defaultLocale = "en" as const;

export const locales = ["en", "pt", "de"] as const;
export const routedLocales = ["pt", "de"] as const;

export type Locale = (typeof locales)[number];
export type RoutedLocale = (typeof routedLocales)[number];

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function isRoutedLocale(
  value: string | undefined,
): value is RoutedLocale {
  return routedLocales.includes(value as RoutedLocale);
}

export function getLocaleBasePath(locale: Locale) {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function getSectionHref(locale: Locale, sectionId: SectionId) {
  const basePath = getLocaleBasePath(locale);

  return basePath === "/" ? `/#${sectionId}` : `${basePath}#${sectionId}`;
}
