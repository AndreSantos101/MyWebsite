"use client";

import { useEffect, useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";
import type {
  ProfileContent,
  SiteContent,
} from "@/data/site-content";
import type { Locale } from "@/lib/i18n";

type SiteShellProps = {
  children: React.ReactNode;
  locale: Locale;
  profile: ProfileContent;
  navigation: SiteContent["navigation"];
  languageSwitcher: SiteContent["languageSwitcher"];
  ui: SiteContent["ui"];
};

export default function SiteShell({
  children,
  locale,
  profile,
  navigation,
  languageSwitcher,
  ui,
}: SiteShellProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const spotlightRef = useRef({ x: "50%", y: "20%" });

  function applySpotlightPosition() {
    const shell = shellRef.current;
    if (!shell) return;

    shell.style.setProperty("--spotlight-x", spotlightRef.current.x);
    shell.style.setProperty("--spotlight-y", spotlightRef.current.y);
    frameRef.current = null;
  }

  function scheduleSpotlightUpdate() {
    if (frameRef.current !== null) return;

    frameRef.current = window.requestAnimationFrame(applySpotlightPosition);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    spotlightRef.current = {
      x: `${event.clientX}px`,
      y: `${event.clientY}px`,
    };
    scheduleSpotlightUpdate();
  }

  function handlePointerLeave() {
    spotlightRef.current = { x: "50%", y: "20%" };
    scheduleSpotlightUpdate();
  }

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={shellRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="site-spotlight min-h-screen bg-transparent text-slate-100 selection:bg-teal-300/20 selection:text-teal-100"
    >
      <a
        href="#main-content"
        className="skip-link sr-only absolute left-4 top-4 z-50 rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 focus:not-sr-only"
      >
        {ui.skipToContent}
      </a>

      <div className="site-shell-content mx-auto max-w-7xl lg:flex lg:justify-between lg:gap-4">
        <Sidebar
          locale={locale}
          profile={profile}
          navigation={navigation}
          languageSwitcher={languageSwitcher}
          ui={ui}
        />

        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-screen flex-1 px-6 py-10 lg:max-w-[60rem] lg:px-8 lg:py-16"
        >
          {children}
        </main>
      </div>

      <a
        href="#home"
        aria-label={ui.goToTop}
        className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-slate-900/80 text-slate-100 shadow-[0_12px_32px_rgba(2,6,23,0.35)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-900/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 sm:bottom-8 sm:right-8"
      >
        <svg
          viewBox="0 0 20 20"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 14.5V5.5M10 5.5L6.5 9M10 5.5L13.5 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
