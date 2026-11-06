# Product Requirements Document (PRD) — 18 Section

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Draft untuk validasi dan estimasi pengembangan |
| Tanggal | 5 November 2026 |
| Platform | Website responsif, mobile-first |
| Referensi produk | https://konveksi.toko-abi.com/ |

## 1. Product Overview

Website KOTABI adalah company profile dan lead-generation site yang memperkenalkan layanan produksi empat kategori pakaian custom: Jas Almamater, Toga Wisuda, Seragam Kerja, dan Seragam Sekolah. Website membawa pengunjung melalui informasi, portofolio, keunggulan, segmen pelanggan, FAQ, lalu menuju konsultasi WhatsApp.

## 2. Product Vision

Menjadi representasi digital KOTABI yang meyakinkan, mudah digunakan, dan mampu mengubah minat pengunjung menjadi konsultasi dengan brief yang lebih siap.

## 3. Goals and Success Metrics

| Goal | Metric | Target awal |
|---|---|---|
| Memudahkan konsultasi | WhatsApp CTA CTR | Baseline 30 hari, lalu optimasi menuju 3–8% |
| Memperkuat bukti produk | Engagement galeri | Dipantau per kategori |
| Meningkatkan penemuan organik | Organic clicks/impressions | Sitemap dan halaman prioritas terindeks |
| Meningkatkan kualitas pengalaman | CWV dan error rate | Lulus target QRD |
| Menjaga konsistensi informasi | Validitas CTA/konten | 100% tautan kontak lolos smoke test |

## 4. Target Users and Personas

- Pengadaan kampus: mencari jas almamater dan toga.
- Panitia wisuda: mencari contoh toga dan konsultasi jumlah.
- HR/procurement perusahaan: mencari seragam kantor/lapangan.
- Pengelola sekolah: mencari seragam sekolah.
- Organisasi/komunitas/event: mencari pakaian identitas custom.

Semua persona membutuhkan informasi yang cepat dipindai, contoh visual, dan komunikasi langsung tanpa akun.

## 5. User Problems and Jobs-to-be-Done

- “Saya perlu vendor yang bisa menyesuaikan seragam dengan identitas institusi.”
- “Saya ingin melihat hasil produk sebelum menghubungi vendor.”
- “Saya perlu tahu informasi apa yang harus disiapkan untuk penawaran.”
- “Saya ingin memastikan kebutuhan kelompok dapat dikonsultasikan.”

Website harus menjawab jobs tersebut tanpa mengubahnya menjadi toko online.

## 6. Scope and Release Strategy

### MVP
- Beranda satu halaman.
- Header navigasi anchor.
- Hero dan CTA WhatsApp.
- Empat kategori produk.
- Galeri empat kategori.
- Bagian keunggulan/proses.
- Delapan segmen pelanggan.
- Empat FAQ.
- CTA penutup dan footer.
- Halaman detail produk/artikel prioritas.
- SEO teknis, analitik dasar, responsif, aksesibilitas, dan optimasi gambar.

### Fase berikutnya (opsional)
- CMS/admin sederhana untuk produk, artikel, gambar, FAQ, dan nomor kontak.
- Testimoni terverifikasi.
- Form brief singkat sebagai pelengkap WhatsApp.
- Search/filter artikel dan galeri jika jumlah aset bertambah.
- Multi-bahasa jika ada kebutuhan bisnis nyata.

## 7. Information Architecture

```text
/
├── Beranda
│   ├── Hero
│   ├── Pita kategori/layanan
│   ├── Produk
│   ├── Galeri
│   │   ├── Toga Wisuda
│   │   ├── Jas Almamater
│   │   ├── Seragam Kerja
│   │   └── Seragam Sekolah
│   ├── Proses / Kenapa KOTABI
│   ├── Siapa yang Kami Layani
│   ├── FAQ
│   ├── CTA konsultasi
│   └── Footer
└── /produk/[slug] atau /artikel/[slug]
    ├── Judul dan ringkasan
    ├── Konten detail
    ├── Gambar pendukung
    ├── CTA konsultasi
    └── Produk/tautan terkait
```

Nama URL final perlu disesuaikan dengan strategi SEO dan kebutuhan migrasi URL lama.

## 8. Core User Journey

1. Discovery dari direct, social, atau search.
2. Orientasi melalui hero dan headline.
3. Eksplorasi produk dan galeri.
4. Evaluasi nilai custom, QC, komunikasi, dan kemampuan melayani kelompok.
5. Validasi melalui FAQ atau artikel detail.
6. Konversi dengan CTA WhatsApp.
7. Diskusi lanjutan di kanal WhatsApp.

## 9. Functional Requirements

| ID | Fitur | Deskripsi | Prioritas |
|---|---|---|---|
| PRD-F01 | Header | Logo/brand, anchor Produk, Galeri, Proses, FAQ, Konsultasi | P0 |
| PRD-F02 | Hero | Headline identitas KOTABI, ringkasan empat layanan, dua CTA | P0 |
| PRD-F03 | Trust strip | Menampilkan Custom Production dan klaim pengalaman yang tervalidasi | P0 |
| PRD-F04 | Product cards | Empat produk, deskripsi, gambar, link internal | P0 |
| PRD-F05 | Gallery | Galeri berkelompok menurut empat kategori | P0 |
| PRD-F06 | Gallery detail | Gambar dapat dibuka lebih besar/lightbox | P1 |
| PRD-F07 | Value/proses | Custom, QC, Komunikatif, Kelompok | P0 |
| PRD-F08 | Audience | Delapan segmen pelanggan | P0 |
| PRD-F09 | FAQ | Empat pertanyaan utama dalam accordion/daftar | P0 |
| PRD-F10 | WhatsApp CTA | Link ke kontak resmi dengan pesan awal | P0 |
| PRD-F11 | Detail pages | Konten rinci, gambar, artikel terkait, CTA | P1 |
| PRD-F12 | Footer | Ringkasan brand, anchor, WhatsApp, copyright | P0 |
| PRD-F13 | Analytics | Event CTA, produk, galeri, FAQ | P1 |
| PRD-F14 | CMS | Pengelolaan konten melalui admin bila disetujui | P2 |

## 10. Content Requirements

### Headline/hero
Pertahankan ide pesan: “Buat Identitas. Pakai KOTABI.” Subheadline tetap menjelaskan jas almamater, toga wisuda, seragam kerja, dan seragam sekolah untuk kelompok, institusi, dan brand.

### Produk
- Jas Almamater: custom warna, bordir, logo, model, kebutuhan kampus/organisasi.
- Toga Wisuda: untuk kampus, sekolah, lembaga, dan acara wisuda.
- Seragam Kerja: untuk kantor, lapangan, perusahaan, komunitas, dan tim operasional.
- Seragam Sekolah: produksi untuk sekolah dan institusi pendidikan.

### Keunggulan
Custom; QC; Komunikatif; Kelompok.

### Segmen
Kampus; Sekolah; Perusahaan; Organisasi; Instansi; Komunitas; Event; Group.

### FAQ
1. Bisa custom model dan warna?
2. KOTABI menerima produksi untuk kampus?
3. Bisa produksi seragam kerja?
4. Bagaimana cara mulai pesan?

Copy final boleh dirapikan untuk profesionalitas, tetapi makna dan jawaban bisnis harus disetujui pemilik.

## 11. UX/UI Requirements

- Pertahankan susunan bagian, label navigasi, empat kategori, dan urutan alur referensi.
- Tingkatkan visual melalui grid konsisten, whitespace, tipografi editorial, gambar berkualitas, dan CTA yang jelas.
- Gunakan desain mobile-first.
- Jangan menyembunyikan informasi penting di hover-only state.
- Gunakan motion halus, menghormati `prefers-reduced-motion`.
- Pertahankan karakter visual merek setelah logo dan palet resmi diperoleh.

## 12. Technical and Architecture Requirements

Rekomendasi implementasi MVP: Next.js (App Router) + TypeScript + CSS utility/design tokens (misalnya Tailwind CSS), static rendering/SSG untuk halaman publik, dan hosting CDN. Konten dapat disimpan sebagai file/MDX atau JSON terstruktur. CMS headless dan database tidak wajib untuk website statis; bila admin content disetujui, tambahkan CMS yang memiliki role dan audit perubahan.

Integrasi eksternal utama adalah WhatsApp `wa.me`. Analytics harus menggunakan consent/configuration yang sesuai kebijakan privasi. Gambar disajikan dalam format modern dengan ukuran responsif.

## 13. Data and Content Model

Entitas konten minimum:
- `SiteSettings`: brand name, logo, WhatsApp number, CTA message, social links, footer copy.
- `ProductCategory`: slug, title, eyebrow, description, cover image, sort order, detail URL.
- `GalleryImage`: category, image source, alt text, caption, order.
- `ValueItem`: title, description, number/order.
- `AudienceSegment`: title, order.
- `FAQItem`: question, answer, order.
- `Article`: slug, title, excerpt, body, hero image, category, published date, related items, SEO fields.

Data kontak dan klaim angka harus bersumber dari konfigurasi yang disetujui, bukan disalin tersebar di banyak komponen.

## 14. SEO and Content Discoverability

- Title dan meta description unik untuk beranda dan setiap halaman detail.
- Satu H1 utama per halaman; struktur H2/H3 logis.
- URL slug deskriptif dan stabil.
- Canonical URL, sitemap XML, robots.txt, Open Graph, favicon.
- Alt text informatif untuk setiap foto produk.
- Structured data `Organization`/`LocalBusiness` hanya untuk informasi yang terverifikasi; `Article` untuk artikel yang sesuai.
- Redirect 301 untuk URL lama yang dipindahkan.
- Hindari halaman tipis, konten duplikat, dan keyword stuffing.

## 15. Analytics and Measurement

Event minimum:
- `whatsapp_click` dengan parameter `placement` (header/hero/product/gallery/article/closing/footer) dan `product_category` bila relevan.
- `product_click`.
- `gallery_image_open`.
- `faq_open`.
- `detail_page_view`.
- `scroll_depth` (opsional dan hanya jika benar-benar dibutuhkan).

Jangan kirim isi pesan WhatsApp, nomor telepon pengguna, atau data pribadi ke analytics.

## 16. Security, Privacy, and Compliance

- Website MVP tidak menyimpan data pesanan atau kredensial pengguna.
- Semua koneksi HTTPS.
- Validasi dan sanitasi konten jika CMS digunakan.
- Role CMS berbasis prinsip least privilege.
- Lindungi secret melalui environment variables.
- Analytics/cookie mengikuti kebijakan yang disetujui dan regulasi privasi yang berlaku.
- Cantumkan privacy notice jika ada tracking atau pengumpulan data.
- Pastikan izin penggunaan foto, logo klien, dan testimoni.

## 17. Release, Rollout, and Operations

1. Audit konten dan aset.
2. Konfirmasi nomor WhatsApp, klaim, alamat, jam operasi, dan kebijakan pemesanan.
3. Desain high-fidelity dan review stakeholder.
4. Implementasi komponen dan konten.
5. QA fungsional, visual, responsive, accessibility, SEO, dan performance.
6. UAT oleh owner/marketing/sales.
7. Deploy ke staging, lalu produksi.
8. Smoke test semua CTA dan analytics.
9. Pantau 30 hari pertama dan lakukan optimasi berdasarkan data.

## 18. Acceptance Criteria and Definition of Done

- Seluruh section dan alur referensi hadir dalam urutan yang disetujui.
- Empat kategori dan kelompok galeri lengkap.
- Value items, delapan segmen, empat FAQ, dan footer tersedia.
- CTA membuka nomor WhatsApp resmi dan pesan awal benar.
- Halaman detail yang ada di navigasi/galleri dapat dibuka dan memiliki CTA.
- Tidak ada konten placeholder atau klaim yang belum disahkan.
- Lulus uji breakpoint ponsel, tablet, desktop.
- Tidak ada broken links/images, error console kritis, atau masalah keamanan tinggi.
- SEO dasar dan analytics tervalidasi.
- Owner menandatangani UAT.

## Lampiran A — Keputusan Terbuka

| Item | Default sementara | Status |
|---|---|---|
| Nomor WhatsApp | 6285771062589 dari CTA beranda | Perlu persetujuan |
| Pengalaman | 10+ tahun dari beranda target | Perlu verifikasi |
| MOQ | Tidak ditampilkan secara global | Perlu keputusan per produk |
| Alamat/jam operasional | Tidak ditampilkan di MVP sebelum disahkan | Perlu validasi |
| CMS | Tidak wajib untuk MVP | Pilihan teknis |
| Domain/hosting | Ditentukan saat TRD final | Terbuka |
