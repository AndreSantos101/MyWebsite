"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { sectionIds } from "@/data/navigation";
import type { ProfileContent, SiteContent } from "@/data/site-content";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";
import { getLocaleBasePath, getSectionHref } from "@/lib/i18n";
import SocialLinks from "../UI/SocialLinks";

type SidebarProps = {
  locale: Locale;
  profile: ProfileContent;
  navigation: SiteContent["navigation"];
  languageSwitcher: SiteContent["languageSwitcher"];
  ui: SiteContent["ui"];
};

const localeCodes: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  pt: "🇵🇹",
};

export default function Sidebar({
  locale,
  profile,
  navigation,
  languageSwitcher,
  ui,
}: SidebarProps) {
  const [activeHash, setActiveHash] = useState("#home");
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    function setSectionHash(nextHash: string, updateUrl = true) {
      setActiveHash((currentHash) =>
        currentHash === nextHash ? currentHash : nextHash,
      );

      if (updateUrl && window.location.hash !== nextHash) {
        window.history.replaceState(null, "", nextHash);
      }

      if (pendingHashRef.current === nextHash) {
        pendingHashRef.current = null;
      }
    }

    function syncHashAtViewportBoundaries() {
      const isNavigatingAwayFromTop =
        pendingHashRef.current !== null &&
        pendingHashRef.current !== "#home" &&
        window.scrollY <= 24;

      if (isNavigatingAwayFromTop) {
        return false;
      }

      const nearTop = window.scrollY <= 24;

      if (nearTop) {
        setSectionHash("#home");
        return true;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 48;

      if (nearBottom) {
        const lastSectionId = sectionIds[sectionIds.length - 1];
        setSectionHash(`#${lastSectionId}`);
        return true;
      }

      return false;
    }

    function updateHashFromUrl() {
      const nextHash = window.location.hash || "#home";
      pendingHashRef.current = nextHash;

      setActiveHash((currentHash) =>
        currentHash === nextHash ? currentHash : nextHash,
      );
    }

    updateHashFromUrl();

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (syncHashAtViewportBoundaries()) {
          return;
        }

        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) return;

        const topEntry = visibleEntries[0];
        const id = topEntry.target.getAttribute("id");

        if (!id) return;

        const nextHash = `#${id}`;
        setSectionHash(nextHash);
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateHashFromUrl);
    window.addEventListener("scroll", syncHashAtViewportBoundaries, {
      passive: true,
    });
    window.addEventListener("resize", syncHashAtViewportBoundaries);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateHashFromUrl);
      window.removeEventListener("scroll", syncHashAtViewportBoundaries);
      window.removeEventListener("resize", syncHashAtViewportBoundaries);
    };
  }, []);

  return (
    <aside
      aria-label={ui.sidebarAriaLabel}
      className="border-b border-slate-800/80 px-6 py-5 lg:sticky lg:top-0 lg:h-screen lg:w-[22rem] lg:border-r lg:border-b-0 lg:px-8 lg:py-16"
    >
      <div className="mb-5 flex justify-end lg:fixed lg:top-6 lg:right-6 lg:z-50">
        <details className="group relative">
          <summary
            aria-label={languageSwitcher.label}
            className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/10 bg-slate-950/75 px-3 py-2 text-sm text-slate-100 shadow-[0_12px_32px_rgba(2,6,23,0.35)] backdrop-blur-md transition duration-200 hover:border-white/20 hover:bg-slate-950/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 [&::-webkit-details-marker]:hidden"
          >
            <span className="text-base leading-none" aria-hidden="true">
              {localeFlags[locale]}
            </span>
            <span className="font-semibold tracking-[0.14em]">
              {localeCodes[locale]}
            </span>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 text-slate-400 transition duration-200 group-open:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </summary>

          <div className="absolute right-0 mt-2 min-w-44 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-1.5 shadow-[0_18px_48px_rgba(2,6,23,0.45)] backdrop-blur-md">
            {(["en", "pt"] as const).map((targetLocale) => {
              const href = `${getLocaleBasePath(targetLocale)}${activeHash}`;
              const isCurrentLocale = locale === targetLocale;

              if (isCurrentLocale) {
                return (
                  <span
                    key={targetLocale}
                    className="flex items-center gap-3 rounded-xl bg-white/8 px-3 py-2 text-sm text-slate-100"
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {localeFlags[targetLocale]}
                    </span>
                    <span className="flex-1">
                      {languageSwitcher.locales[targetLocale]}
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-teal-300">
                      {localeCodes[targetLocale]}
                    </span>
                  </span>
                );
              }

              return (
                <Link
                  key={targetLocale}
                  href={href}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition duration-200 hover:bg-white/6 hover:text-slate-100"
                >
                  <span className="text-base leading-none" aria-hidden="true">
                    {localeFlags[targetLocale]}
                  </span>
                  <span className="flex-1">
                    {languageSwitcher.locales[targetLocale]}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-500">
                    {localeCodes[targetLocale]}
                  </span>
                </Link>
              );
            })}
          </div>
        </details>
      </div>

      <div className="flex flex-col gap-6 lg:h-full lg:justify-between">
        <div className="flex items-start justify-between gap-6 lg:block lg:space-y-10">
          <div className="max-w-[16rem] space-y-4 lg:max-w-none lg:space-y-6 lg:text-center">
            <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:gap-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-slate-900/40 lg:h-32 lg:w-32">
                <Image
                  src="/profile.jpg"
                  alt={profile.portraitAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80px, 128px"
                  priority
                />
              </div>

              <div className="flex flex-col gap-4 lg:items-center lg:text-center">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-teal-300/80">
                  {profile.role}
                </p>

                <h1 className="text-2xl font-bold tracking-tight text-slate-100 lg:text-4xl">
                  {profile.name}
                </h1>
              </div>
            </div>

            <p className="hidden max-w-xs pt-4 text-sm leading-7 text-slate-400 lg:mx-auto lg:block">
              {profile.intro}
            </p>
          </div>

          <div className="flex flex-col items-end gap-4 pr-1 lg:block lg:pr-0">
            <nav aria-label={navigation.ariaLabel} className="shrink-0 lg:pt-6">
              <ul className="flex flex-col items-end gap-3 lg:items-start lg:space-y-4 lg:gap-0">
                {navigation.items.map((item) => {
                  const sectionHash = `#${item.sectionId}`;
                  const isActive = activeHash === sectionHash;

                  return (
                    <li key={item.sectionId}>
                      <Link
                        href={getSectionHref(locale, item.sectionId)}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          pendingHashRef.current = sectionHash;
                          setActiveHash(sectionHash);
                        }}
                        className={cn(
                          "group inline-flex items-center gap-3 rounded-md px-1 py-1 text-xs uppercase tracking-[0.18em] transition duration-200 lg:gap-4 lg:px-0 lg:py-0 lg:text-sm",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300",
                          isActive
                            ? "font-bold text-slate-100"
                            : "font-medium text-slate-400 hover:text-slate-200 active:scale-[0.98]",
                        )}
                      >
                        <span
                          className={cn(
                            "h-px transition-all duration-200",
                            isActive
                              ? "w-10 bg-slate-100 lg:w-16"
                              : "w-5 bg-slate-600 group-hover:w-8 group-hover:bg-slate-300 lg:w-8 lg:group-hover:w-16",
                          )}
                        />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <SocialLinks socials={profile.socials} className="lg:hidden" />
          </div>
        </div>

        <SocialLinks socials={profile.socials} className="hidden lg:block" />
      </div>
    </aside>
  );
}
