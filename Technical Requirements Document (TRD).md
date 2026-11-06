# Technical Requirements Document (TRD)

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Rekomendasi teknis awal |
| Tanggal | 5 November 2026 |
| Jenis sistem | Public-facing marketing website / lead generation |

## 1. Tujuan

Menetapkan arsitektur, stack, infrastruktur, integrasi, keamanan, deployment, dan operasional untuk website KOTABI. Rekomendasi dibuat sesederhana mungkin karena MVP tidak memerlukan autentikasi pelanggan, checkout, database transaksi, atau dashboard produksi.

## 2. Arsitektur Solusi

### 2.1 Rekomendasi MVP

- **Frontend:** Next.js App Router + TypeScript.
- **Styling:** Tailwind CSS atau CSS Modules dengan design tokens.
- **Rendering:** Static Site Generation/Server Components untuk halaman konten yang jarang berubah; ISR jika ada kebutuhan revalidasi.
- **Content:** MDX/JSON/TypeScript content collections pada repositori.
- **Images:** Next/Image atau image CDN yang mendukung responsive sizes dan modern formats.
- **Hosting:** platform yang mendukung Next.js dan CDN (misalnya Vercel); alternatif setara boleh digunakan.
- **Domain:** domain KOTABI yang disetujui owner; target URL referensi bukan otomatis domain produksi.
- **Database:** tidak diperlukan untuk MVP statis.
- **CMS opsional:** headless CMS atau Supabase hanya jika owner meminta pengelolaan konten mandiri.

### 2.2 Logical Architecture

```text
Visitor Browser
      |
      | HTTPS
      v
CDN / Hosting Platform
      |
      v
Next.js Web Application
  |       |         |
  |       |         +--> Static Content (MDX/JSON)
  |       +------------> Optimized Image Assets / CDN
  +--------------------> Analytics (privacy-configured)
      |
      +----------------> WhatsApp wa.me deep link (external)

Optional in later phase:
Admin/CMS --> Authenticated Content API --> Content Store --> Revalidation
```

## 3. Lingkungan

| Environment | Fungsi | Ketentuan |
|---|---|---|
| Local | Pengembangan | `.env.local`, data contoh, tidak menggunakan secret produksi |
| Preview/Staging | Review UI, UAT, dan smoke test | URL preview terlindungi bila memuat konten internal |
| Production | Website publik | HTTPS, domain resmi, monitoring, backup repository |

Build harus dapat direproduksi dan dipromosikan dari commit yang sama setelah lulus QA.

## 4. Struktur Modul Aplikasi

```text
src/
  app/
    page.tsx
    produk/[slug]/page.tsx
    artikel/[slug]/page.tsx
    not-found.tsx
    sitemap.ts
    robots.ts
  components/
    layout/Header.tsx
    layout/Footer.tsx
    sections/Hero.tsx
    sections/ServiceTicker.tsx
    sections/ProductGrid.tsx
    sections/Gallery.tsx
    sections/Benefits.tsx
    sections/Audience.tsx
    sections/FAQ.tsx
    sections/ClosingCTA.tsx
    ui/Button.tsx
    ui/Accordion.tsx
    ui/Lightbox.tsx
  content/
    site-settings.ts
    products.ts
    gallery.ts
    faq.ts
    articles/
  lib/
    whatsapp.ts
    seo.ts
    analytics.ts
  styles/
    globals.css
    tokens.css
public/
  images/
  logo/
  icons/
```

Struktur final boleh berubah sesuai konvensi framework, tetapi konten dan konfigurasi kontak harus terpisah dari komponen UI.

## 5. Rekomendasi Konfigurasi

Environment variables bila diperlukan:

```env
NEXT_PUBLIC_SITE_URL=https://<domain-produksi-yang-disetujui>
NEXT_PUBLIC_WHATSAPP_NUMBER=6285771062589
NEXT_PUBLIC_ANALYTICS_ID=
```

Catatan:
- Nomor WhatsApp adalah nilai sementara berdasarkan CTA beranda dan wajib dikonfirmasi.
- Tidak ada API key rahasia yang boleh menggunakan prefix `NEXT_PUBLIC_`.
- Jika analytics tidak dipakai, hapus variabel terkait.
- URL produksi tidak boleh disamakan dengan URL referensi tanpa persetujuan domain.

## 6. Content Model dan Penyimpanan

MVP menggunakan data terstruktur:

- `SiteSettings`: nama brand, logo, nomor WhatsApp, template pesan, footer.
- `ProductCategory`: id, slug, title, eyebrow, description, cover image, detail URL, sort order.
- `GalleryImage`: id, category id, src, alt, caption, focal point, sort order.
- `ValueItem`: id, title, description, order.
- `AudienceSegment`: id, title, order.
- `FAQItem`: id, question, answer, order.
- `Article`: id, slug, title, excerpt, content, hero image, category, publish date, SEO metadata, related articles.

Tidak menyimpan data pengunjung pada database di MVP. Bila CMS diaktifkan, data disimpan pada platform CMS dan bukan pada browser publik.

## 7. Integrasi Eksternal

### 7.1 WhatsApp

- Pola URL: `https://wa.me/{phone}?text={encodedMessage}`.
- `phone` menggunakan format internasional tanpa tanda plus.
- Gunakan helper terpusat untuk encode pesan.
- Semua CTA mengacu ke satu konfigurasi nomor.
- Jangan auto-send pesan.
- Tambahkan `rel="noopener noreferrer"` bila membuka tab baru.
- Uji link di Android, iOS, desktop browser, dan kondisi tanpa aplikasi WhatsApp.

### 7.2 Analytics

- Pilih analytics yang mendukung konfigurasi privasi dan consent bila diperlukan.
- Track event yang telah didefinisikan PRD/FRD.
- Hindari pengiriman teks pesan, identitas pribadi, atau parameter sensitif.
- Website tetap berfungsi saat script analytics diblokir.

### 7.3 CMS (opsional)

Jika diperlukan:
- Auth berbasis akun internal.
- Role minimal: Admin dan Editor.
- Validasi file gambar, ukuran file, tipe MIME, serta alt text wajib.
- Audit perubahan untuk nomor kontak dan klaim bisnis.
- Revalidation halaman setelah perubahan dipublikasikan.
- Backup konten dan prosedur rollback.

## 8. Persyaratan Frontend

- TypeScript strict mode.
- Komponen reusable untuk header, CTA, kartu produk, galeri, FAQ, dan footer.
- Semantic HTML.
- Progressive enhancement; konten pokok tetap tersedia tanpa animasi.
- Error boundary/fallback untuk komponen yang berpotensi gagal.
- Responsive images dengan `srcset`/sizes.
- Lazy load gambar di bawah fold; hero image dapat diprioritaskan.
- Gunakan font optimization dan batasi font weights.
- Hindari dependensi UI besar jika fitur sederhana bisa dibangun native.

## 9. SEO Teknis

- Metadata title dan description per halaman.
- Canonical URL.
- Open Graph/Twitter metadata.
- Sitemap XML otomatis dari rute publik.
- Robots.txt.
- Structured data hanya untuk fakta tervalidasi.
- Redirect 301 dari URL lama yang dipindahkan jika owner ingin mempertahankan SEO.
- Gunakan 404 yang benar dan bukan soft 404.
- Heading hierarchy dan internal linking konsisten.

## 10. Keamanan

- HTTPS wajib.
- Terapkan security headers: Content-Security-Policy yang sesuai, Referrer-Policy, X-Content-Type-Options, dan frame policy.
- Tidak menyimpan secret di repository atau client bundle.
- Dependency scanning dan pembaruan berkala.
- CMS (bila ada) menggunakan MFA bila tersedia, password policy, role least privilege, dan audit log.
- Batasi upload gambar dan validasi tipe file.
- Sanitasi konten HTML/MDX jika ada input dari CMS.
- Tidak menampilkan data internal melalui source map produksi.

## 11. Performa dan Optimasi

- Gunakan CDN dan static rendering.
- Format gambar WebP/AVIF bila didukung.
- Atur ukuran gambar sesuai breakpoint.
- Kompres aset; hindari video auto-play berat.
- Minimalkan script pihak ketiga.
- Prioritaskan gambar hero.
- Lazy-load galeri setelah area mendekati viewport.
- Hindari layout shift melalui width/height atau aspect ratio.

Target metrik detail mengacu QRD.

## 12. Accessibility dan Browser Support

- Target WCAG 2.2 AA.
- Uji keyboard dan screen reader dasar.
- Uji browser modern: Chrome, Edge, Firefox, Safari versi aktif/terbaru dan satu versi mayor sebelumnya bila memungkinkan.
- Uji Android Chrome dan iOS Safari.
- Fitur inti tidak boleh bergantung pada hover.

## 13. Deployment Pipeline

1. Developer membuat branch fitur.
2. Pull request menjalankan lint, type-check, unit/component tests, dan build.
3. Preview deployment dibuat untuk review.
4. QA memeriksa visual, tautan, konten, SEO, aksesibilitas, dan performa.
5. Owner menyetujui UAT.
6. Merge/release ke production.
7. Jalankan smoke test: homepage, anchors, gallery, article, WhatsApp CTA, sitemap.
8. Pantau error dan analytics setelah rilis.

## 14. Backup, Recovery, dan Monitoring

- Repository Git menjadi sumber kode dan konten MVP.
- Backup aset asli di penyimpanan terpisah milik perusahaan.
- Simpan catatan release dan prosedur rollback.
- Monitoring uptime dan error halaman.
- Periksa link WhatsApp secara berkala.
- Jika CMS aktif, backup database/konten dan verifikasi restore secara berkala.

## 15. Keputusan Teknis Terbuka

| Keputusan | Rekomendasi | Perlu persetujuan |
|---|---|---|
| Framework | Next.js + TypeScript | Ya |
| Hosting | Vercel atau platform setara | Ya |
| CMS | Tidak wajib pada MVP | Ya, jika ada editor non-teknis |
| Database | Tidak dibutuhkan tanpa CMS/form | Ya bila scope bertambah |
| Analytics | Provider privacy-aware | Ya |
| Domain | Domain KOTABI yang ditetapkan owner | Ya |
| Nomor WA | 6285771062589 sementara | Wajib |

## 16. Batasan Teknis

Website MVP tidak menyediakan order management, CRM, pembayaran, kalkulator harga, ataupun proses produksi internal. Fitur tersebut membutuhkan analisis, model data, keamanan, serta persetujuan scope tersendiri.
