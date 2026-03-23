"use client";

import { useEffect, useRef } from "react";
import Sidebar from "@/components/layout/Sidebar";

type SiteShellProps = {
  children: React.ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
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
        className="sr-only absolute left-4 top-4 z-50 rounded-md bg-slate-100 px-4 py-2 text-sm font-medium text-slate-950 focus:not-sr-only"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:gap-4">
        <Sidebar />

        <main
          id="main-content"
          tabIndex={-1}
          className="min-h-screen flex-1 px-6 py-10 lg:max-w-[60rem] lg:px-8 lg:py-16"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
