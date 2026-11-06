import { SITE, waLink } from "./data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-paper px-6 text-center text-ink">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent-ink">
        404
      </p>
      <h1 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold tracking-tight">
        Halaman tidak ditemukan.
      </h1>
      <p className="max-w-md text-muted">
        Halaman yang Anda cari tidak tersedia. Kembali ke beranda atau hubungi
        tim {SITE.name} untuk konsultasi.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="/"
          className="inline-flex min-h-12 items-center justify-center rounded-btn bg-night px-6 py-3 text-sm font-semibold text-snow transition-colors hover:bg-ink-soft"
        >
          Kembali ke beranda
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-btn border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Chat WhatsApp
        </a>
      </div>
    </main>
  );
}
