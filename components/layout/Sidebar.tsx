"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navigationItems, sectionIds } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";
import SocialLinks from "../UI/SocialLinks";

export default function Sidebar() {
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    function updateHashFromUrl() {
      const nextHash = window.location.hash || "#home";

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
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length === 0) return;

        const topEntry = visibleEntries[0];
        const id = topEntry.target.getAttribute("id");

        if (!id) return;

        const nextHash = `#${id}`;
        setActiveHash((currentHash) =>
          currentHash === nextHash ? currentHash : nextHash,
        );

        if (window.location.hash !== nextHash) {
          window.history.replaceState(null, "", nextHash);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateHashFromUrl);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateHashFromUrl);
    };
  }, []);

  return (
    <aside
      aria-label="Sidebar"
      className="border-b border-slate-800/80 px-6 py-5 lg:sticky lg:top-0 lg:h-screen lg:w-[22rem] lg:border-r lg:border-b-0 lg:px-8 lg:py-16"
    >
      <div className="flex flex-col gap-6 lg:h-full lg:justify-between">
        <div className="flex items-start justify-between gap-6 lg:block lg:space-y-10">
          <div className="max-w-[16rem] space-y-4 lg:max-w-none lg:space-y-6 lg:text-center">
            <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:gap-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-slate-900/40 lg:h-32 lg:w-32">
                <Image
                  src="/profile.jpg"
                  alt="Portrait of André Santos"
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

          <div className="flex flex-col items-end gap-4 lg:block">
            <nav aria-label="Main navigation" className="shrink-0 lg:pt-6">
              <ul className="flex flex-col items-end gap-3 lg:items-start lg:space-y-4 lg:gap-0">
                {navigationItems.map((item) => {
                  const sectionHash = `#${item.sectionId}`;
                  const isActive = activeHash === sectionHash;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
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

            <SocialLinks className="lg:hidden" />
          </div>
        </div>

        <SocialLinks className="hidden lg:block" />
      </div>
    </aside>
  );
}
