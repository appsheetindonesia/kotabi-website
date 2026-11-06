"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryGroup } from "../data/site";

export default function Gallery({ groups }: { groups: GalleryGroup[] }) {
  const [active, setActive] = useState<{
    group: number;
    index: number;
  } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setActive(null), []);

  const step = useCallback(
    (delta: number) =>
      setActive((current) => {
        if (!current) return current;
        const total = groups[current.group].images.length;
        return {
          ...current,
          index: (current.index + delta + total) % total,
        };
      }),
    [groups],
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  const current = active
    ? groups[active.group].images[active.index]
    : null;

  return (
    <>
      <div className="space-y-14 md:space-y-20">
        {groups.map((group, groupIndex) => (
          <section key={group.title} aria-label={`Galeri ${group.title}`}>
            <div className="mb-5 flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
                {group.title}
              </h3>
              <a
                href={group.detailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[28px] items-center text-sm font-medium text-link underline-offset-4 hover:underline"
              >
                Lihat detail ↗
              </a>
            </div>

            <div className="gallery-rail group/rail relative overflow-hidden">
              <div
                className={`flex w-max gap-3.5 group-hover/rail:[animation-play-state:paused] group-focus-within/rail:[animation-play-state:paused] ${
                  groupIndex % 2 === 0 ? "animate-rail" : "animate-rail-reverse"
                }`}
              >
                {[...group.images, ...group.images].map((image, i) => {
                  const isClone = i >= group.images.length;
                  return (
                    <button
                      key={`${image.src}-${i}`}
                      type="button"
                      onClick={() =>
                        !isClone &&
                        setActive({ group: groupIndex, index: i })
                      }
                      aria-hidden={isClone || undefined}
                      tabIndex={isClone ? -1 : undefined}
                      className="group relative block h-[260px] w-[200px] shrink-0 cursor-zoom-in overflow-hidden rounded-card border border-line bg-sand transition-all duration-500 hover:-translate-y-2 hover:border-accent sm:h-[290px] sm:w-[220px]"
                    >
                      <span className="relative block h-full w-full">
                        <Image
                          src={image.src}
                          alt={isClone ? "" : image.alt}
                          fill
                          sizes="220px"
                          className="object-cover saturate-[.95] transition-transform duration-500 group-hover:scale-105"
                        />
                      </span>
                      {!isClone && (
                        <span className="sr-only">Perbesar {image.alt}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      {active && current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${groups[active.group].title} — ${active.index + 1} dari ${groups[active.group].images.length}`}
          className="fixed inset-0 z-100 flex flex-col bg-night/95 p-4 md:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="flex items-center justify-between gap-4 pb-4 text-snow">
            <p className="text-sm font-medium tracking-wide">
              {groups[active.group].title}
              <span className="ml-3 text-snow/60">
                {active.index + 1} / {groups[active.group].images.length}
              </span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup galeri"
              className="grid size-11 place-items-center rounded-btn border border-snow/25 text-snow transition-colors hover:bg-snow/10"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Gambar sebelumnya"
              className="absolute left-0 z-10 grid size-11 place-items-center rounded-full border border-snow/25 text-snow transition-colors hover:bg-snow/10 md:left-4"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>

            <div className="relative h-full w-full">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Gambar berikutnya"
              className="absolute right-0 z-10 grid size-11 place-items-center rounded-full border border-snow/25 text-snow transition-colors hover:bg-snow/10 md:right-4"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <p className="pt-4 text-center text-sm text-snow/70">
            {current.alt}
          </p>
        </div>
      )}
    </>
  );
}
