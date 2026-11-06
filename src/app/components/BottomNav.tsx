"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV, waLink } from "../data/site";

const ICONS: Record<string, string> = {
  Produk: "M19 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",
  Galeri: "M3 11h18M3 16h18M3 6h18",
  Proses: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
  FAQ: "M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8-4.03 8-9 8z",
};

export default function BottomNav() {
  const [active, setActive] = useState<string>(NAV[0].href);

  // Scroll-spy: tandai item nav sesuai section yang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    for (const { href } of NAV) {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navigasi bawah"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="mx-auto flex max-w-sm items-center justify-between gap-1 rounded-full border border-snow/10 bg-night/90 py-2 pl-3 pr-2 shadow-2xl backdrop-blur-xl">
        {NAV.map((item) => {
          const isActive = active === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              className={`flex min-h-11 min-w-11 flex-col items-center justify-center gap-0.5 rounded-full px-3 text-[10px] font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-logo-yellow text-night"
                  : "text-snow/60 hover:text-snow"
              }`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={ICONS[item.label]} />
              </svg>
              {item.label}
            </a>
          );
        })}
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi WhatsApp"
          className="ml-1 grid size-11 shrink-0 place-items-center rounded-full bg-whatsapp transition-colors hover:bg-whatsapp-dark"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt=""
            width={22}
            height={22}
            aria-hidden
          />
        </a>
      </div>
    </nav>
  );
}
