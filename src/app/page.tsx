import Image from "next/image";
import { Metadata } from "next";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import BottomNav from "./components/BottomNav";
import {
  AUDIENCES,
  FAQS,
  GALLERY,
  MARQUEE_ITEMS,
  NAV,
  PRODUCTS,
  SITE,
  STATS,
  VALUES,
  waLink,
} from "./data/site";

export const metadata: Metadata = {
  title: `${SITE.tagline} | ${SITE.name}`,
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="bg-paper text-ink antialiased">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-snow"
      >
        Lompat ke konten
      </a>

      <Header />

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-7xl overflow-hidden px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-16">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                {SITE.legalName}
              </p>
              <h1 className="text-[clamp(2.25rem,7vw,4.25rem)] font-bold leading-[1.02] tracking-tight">
                <span className="block">
                  BUAT <span className="text-logo-yellow">IDENTITAS.</span>
                </span>
                <span className="block">PAKAI KOTABI.</span>
              </h1>
              <p className="max-w-[42rem] text-lg leading-relaxed text-muted">
                Jas almamater, toga wisuda, seragam kerja & seragam sekolah —
                dirancang untuk kebutuhan kelompok, institusi, dan brand Anda.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-night px-6 py-3.5 text-sm font-semibold text-snow transition-colors hover:bg-ink-soft"
                >
                  Mulai Konsultasi <span aria-hidden>→</span>
                </a>
                <a
                  href="#produk"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-btn border-2 border-ink px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  Lihat Produk ↓
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-pill border border-line px-4 py-1.5 text-xs font-medium text-muted">
                  Custom Production
                </span>
                <span className="rounded-pill border border-line px-4 py-1.5 text-xs font-medium text-muted">
                  {STATS[0].value} {STATS[0].label}
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-card border border-line bg-sand shadow-card animate-hero-float">
                <Image
                  src="/img/konveksi-jas-almamater-berkualitas.jpg"
                  alt="Jas almamater custom produksi KOTABI"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-3 aspect-square w-24 overflow-hidden rounded-card border-4 border-paper shadow-card animate-mini-float sm:w-32 lg:w-44">
                <Image
                  src="/img/konveksi-toga-wisuda-terpercaya.jpg"
                  alt="Toga wisuda produksi KOTABI"
                  fill
                  sizes="12rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="overflow-hidden rounded-card border border-line bg-sand">
            <div className="flex w-max animate-marquee items-center whitespace-nowrap px-6 py-3">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span key={`${item}-${i}`} className="flex items-center gap-8">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {item}
                  </span>
                  <span className="h-4 w-px bg-line" aria-hidden />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Produk */}
        <section
          id="produk"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mb-16 max-w-[40rem] md:mb-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
              01 / Produk
            </p>
            <h2 className="mt-3 text-[clamp(1.875rem,4.5vw,2.875rem)] font-bold leading-[1.12] tracking-tight">
              Yang Kami Buat.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Empat kategori produksi custom yang kami kelola dengan kontrol
              kualitas, dari brief hingga pengiriman.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <article
                key={product.slug}
                className="group flex flex-col overflow-hidden rounded-card border border-line bg-paper shadow-sm transition-shadow duration-300 hover:shadow-card"
              >
                <div className="relative aspect-square overflow-hidden bg-sand">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {product.eyebrow}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {product.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[28px] items-center text-sm font-medium text-link underline-offset-4 hover:underline"
                  >
                    Lihat detail ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Galeri */}
        <section
          id="galeri"
          className="scroll-mt-24 bg-sand py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 max-w-[40rem] md:mb-24">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                02 / Visual Gallery
              </p>
              <h2 className="mt-3 text-[clamp(1.875rem,4.5vw,2.875rem)] font-bold leading-[1.12] tracking-tight">
                Galery Kami.
              </h2>
            </div>
            <Gallery groups={GALLERY} />
          </div>
        </section>

        {/* Kenapa KOTABI */}
        <section
          id="proses"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mb-16 max-w-[42rem] md:mb-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
              03 / Kenapa KOTABI
            </p>
            <h2 className="mt-3 text-[clamp(1.875rem,4.5vw,2.875rem)] font-bold leading-[1.12] tracking-tight">
              Rapi. Jelas. Terarah.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Fokus kami sederhana: spesifikasi tidak ngambang, produksi
              terkontrol, dan hasil sesuai kebutuhan yang sudah disepakati.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.number}
                className="flex flex-col items-center gap-3 rounded-card border border-line bg-paper p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-card"
              >
                <span className="text-3xl font-bold tracking-tight text-accent-ink">
                  {value.number}
                </span>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 py-10 md:px-10 md:py-14">
          <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center gap-1">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold tracking-tight">{stat.value}</dd>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Audiens */}
        <section className="bg-sand py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-16 max-w-[40rem] md:mb-24">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
                04 / Siapa yang Kami Layani
              </p>
              <h2 className="mt-3 text-[clamp(1.875rem,4.5vw,2.875rem)] font-bold leading-[1.12] tracking-tight">
                Untuk Tim Anda.
              </h2>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {AUDIENCES.map((audience, i) => (
                <li
                  key={audience}
                  className="flex items-center gap-3 rounded-card border border-line bg-paper p-6 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent/15 text-[10px] font-bold text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {audience}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mb-16 max-w-[40rem] md:mb-24">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
              05 / FAQ
            </p>
            <h2 className="mt-3 text-[clamp(1.875rem,4.5vw,2.875rem)] font-bold leading-[1.12] tracking-tight">
              Yang Sering Ditanya.
            </h2>
          </div>

          <div className="max-w-3xl space-y-3">
            {FAQS.map(({ question, answer }) => (
              <details
                key={question}
                className="faq-item rounded-card border border-line bg-paper shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-medium transition-colors hover:text-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  {question}
                  <span className="faq-icon grid size-6 shrink-0 place-items-center rounded-full border border-line">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p className="px-6 pb-5 leading-relaxed text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <div className="rounded-card bg-night px-8 py-14 text-center md:px-16 md:py-20 md:text-left">
            <h2 className="text-[clamp(1.875rem,4.5vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-snow">
              Siap bikin seragammu?
            </h2>
            <p className="mt-4 max-w-[44rem] text-lg leading-relaxed text-snow/70">
              Kirim jenis produk, jumlah, kebutuhan custom, dan target waktu.
              Kita mulai dari brief yang jelas.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-btn bg-brand px-6 py-3.5 text-sm font-semibold text-snow transition-colors hover:bg-brand-dark"
            >
              Chat KOTABI ↗
            </a>
          </div>
        </section>
      </main>

      <BottomNav />

      {/* Footer */}
      <footer className="bg-night px-6 py-14 text-snow md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-tight">{SITE.name}</p>
            <p className="mt-4 max-w-[26rem] leading-relaxed text-snow/70">
              Konveksi custom untuk institusi, perusahaan, dan komunitas.
              Produksi jas almamater, toga wisuda, seragam kerja, dan seragam
              sekolah.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-snow/50">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex min-h-[28px] items-center text-sm text-snow/70 transition-colors hover:text-snow"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-snow/50">
              Kontak
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-snow/70 transition-colors hover:text-snow min-h-[28px] py-1"
                >
                  WhatsApp
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-snow/70 transition-colors hover:text-snow min-h-[28px] py-1"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 max-w-7xl border-t border-snow/10 pt-8 text-center">
          <p className="text-xs text-snow/50">{SITE.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
