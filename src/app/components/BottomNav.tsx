"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { NAV, waLink } from "../data/site";

const ICONS: Record<string, ReactNode> = {
  // Kaos — kategori produk pakaian konveksi
  Produk: (
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
  ),
  // Foto — galeri visual produk
  Galeri: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </>
  ),
  // Diagram alur — proses produksi
  Proses: (
    <>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </>
  ),
  // Tanda tanya — FAQ
  FAQ: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </>
  ),
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
                {ICONS[item.label]}
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
