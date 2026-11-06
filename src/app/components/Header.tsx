"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV, SITE, waLink } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <a href="#top" className="group flex items-center">
          <Image
            src="/img/logo-kotabi-horizontal.png"
            alt="KOTABI"
            width={2048}
            height={795}
            priority
            sizes="150px"
            className="h-10 w-auto md:h-14 dark:hidden"
          />
          <Image
            src="/img/logo-kotabi-horizontal-dark.png"
            alt="KOTABI"
            width={2048}
            height={795}
            priority
            sizes="150px"
            className="hidden h-10 w-auto md:h-14 dark:block"
          />
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[28px] items-center text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-btn bg-night px-5 py-2.5 text-sm font-semibold text-snow transition-colors hover:bg-ink-soft sm:inline-flex"
          >
            Konsultasi
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid size-11 place-items-center rounded-btn border border-line text-ink md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-line bg-paper md:hidden"
        >
          <nav
            aria-label="Navigasi mobile"
            className="mx-auto flex max-w-7xl flex-col px-5 py-4"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-4 text-base font-medium text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 flex min-h-12 items-center justify-center rounded-btn bg-night px-5 text-base font-semibold text-snow"
            >
              Konsultasi WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
