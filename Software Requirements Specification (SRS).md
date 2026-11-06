# Software Requirements Specification (SRS)

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Draft spesifikasi sistem |
| Tanggal | 5 November 2026 |
| Standar dokumen | Spesifikasi kebutuhan perangkat lunak berorientasi ISO/IEC/IEEE 29148 (adaptasi) |

## 1. Introduction

### 1.1 Purpose

SRS ini mendefinisikan kebutuhan perangkat lunak website KOTABI sebagai acuan desain, pengembangan, QA, UAT, deployment, dan pemeliharaan.

### 1.2 Scope

Website publik yang menyajikan company profile, empat kategori produk, galeri, penjelasan keunggulan, segmen pelanggan, FAQ, halaman detail produk/artikel, dan CTA menuju WhatsApp. Sistem tidak melakukan transaksi, pembayaran, atau pengelolaan produksi pada MVP.

### 1.3 Definitions

| Istilah | Definisi |
|---|---|
| KOTABI | Merek/identitas Konveksi Toko Abi |
| CTA | Call to Action, tombol/tautan yang mengarahkan pengguna ke tindakan |
| Lead | Calon pelanggan yang memulai konsultasi |
| QC | Quality Control atau kontrol kualitas |
| SSG | Static Site Generation |
| CMS | Content Management System |
| MVP | Minimum Viable Product |

### 1.4 References

- https://konveksi.toko-abi.com/
- https://konveksi.toko-abi.com/2026/06/19/konveksi-toga-wisuda-terpercaya-tangerang/
- https://konveksi.toko-abi.com/2026/06/04/konveksi-jas-almamater-custom-logo/

## 2. Overall Description

### 2.1 Product Perspective

Sistem merupakan website mandiri yang diakses melalui browser. Untuk MVP, website dapat berupa aplikasi statis dengan konten yang disimpan pada repositori. WhatsApp menjadi sistem eksternal untuk komunikasi penjualan.

### 2.2 Product Functions

- Menyajikan beranda.
- Menyediakan navigasi anchor.
- Menampilkan empat produk utama.
- Menampilkan galeri produk berdasarkan kategori.
- Menampilkan keunggulan/proses.
- Menampilkan delapan segmen pelanggan.
- Menampilkan FAQ.
- Mengarahkan pengguna ke WhatsApp.
- Menyajikan halaman detail/artikel produk.
- Menyediakan metadata dan sitemap untuk SEO.

### 2.3 User Classes

- Pengunjung anonim desktop/mobile.
- Pengelola konten internal (opsional, jika CMS masuk scope).

### 2.4 Operating Environment

- Browser modern pada desktop, tablet, dan smartphone.
- Hosting berbasis HTTPS dan CDN.
- Integrasi WhatsApp melalui URL deep link.
- Analytics opsional dengan konfigurasi privasi.

### 2.5 Constraints

- Konten harus mengikuti identitas KOTABI dan struktur referensi.
- Nomor kontak dan klaim bisnis harus disahkan owner.
- MVP tidak memerlukan database transaksi atau autentikasi pengunjung.
- Hak penggunaan gambar/logo/testimoni wajib dipastikan.

### 2.6 Assumptions and Dependencies

- Owner menyediakan logo, gambar, copy, serta nomor WhatsApp resmi.
- Link WhatsApp dapat dibuka pada browser/perangkat pengguna.
- Hosting mendukung HTTPS, custom domain, dan deployment dari Git.
- Jika CMS diaktifkan, autentikasi dan penyimpanan dikelola provider terkait.

## 3. External Interface Requirements

### 3.1 User Interface

UI terdiri dari header, hero, service ticker, produk, galeri, keunggulan/proses, audience, FAQ, closing CTA, footer, dan halaman detail. Spesifikasi visual rinci ada di UIRD.

### 3.2 Software Interfaces

| Sistem eksternal | Interface | Fungsi |
|---|---|---|
| WhatsApp | HTTPS `wa.me` | Memulai percakapan dengan pesan terisi |
| Analytics | Script/API provider | Event penggunaan yang telah disetujui |
| CMS (opsional) | API/SDK provider | Membaca dan mengubah konten |
| CDN/image service | HTTPS image delivery | Menyajikan foto teroptimasi |

### 3.3 Communication Interfaces

- HTTPS untuk seluruh komunikasi publik.
- WhatsApp deep link menggunakan URL-encoded text.
- Tidak ada API transaksi internal pada MVP.

## 4. Functional Requirements

### 4.1 Homepage

**SRS-FR-001:** Sistem SHALL menampilkan beranda publik pada route `/`.

**SRS-FR-002:** Sistem SHALL menampilkan navigasi Produk, Galeri, Proses, FAQ, dan Konsultasi.

**SRS-FR-003:** Sistem SHALL menavigasikan anchor ke section target tanpa tertutup sticky header.

**SRS-FR-004:** Sistem SHALL menampilkan hero dengan brand KOTABI, headline “Buat Identitas. Pakai KOTABI.”, deskripsi layanan, visual produk, CTA konsultasi, dan CTA lihat produk.

**SRS-FR-005:** Sistem SHALL menampilkan pita kategori/layanan yang mencakup empat produk, Custom Production, dan Quality Control.

### 4.2 Product Categories

**SRS-FR-006:** Sistem SHALL menampilkan tepat empat kategori utama: Jas Almamater, Toga Wisuda, Seragam Kerja, Seragam Sekolah.

**SRS-FR-007:** Sistem SHALL menampilkan deskripsi dan gambar relevan untuk setiap kategori.

**SRS-FR-008:** Sistem SHALL menyediakan tautan detail jika konten detail untuk kategori tersebut tersedia.

### 4.3 Gallery

**SRS-FR-009:** Sistem SHALL mengelompokkan galeri ke empat kategori produk.

**SRS-FR-010:** Sistem SHALL menyediakan teks alternatif untuk setiap gambar informatif.

**SRS-FR-011:** Jika lightbox digunakan, sistem SHALL mendukung open, close, previous/next, keyboard, dan focus management.

### 4.4 Value Proposition and Audience

**SRS-FR-012:** Sistem SHALL menampilkan empat keunggulan: Custom, QC, Komunikatif, Kelompok.

**SRS-FR-013:** Sistem SHALL menampilkan segmen Kampus, Sekolah, Perusahaan, Organisasi, Instansi, Komunitas, Event, Group.

**SRS-FR-014:** Sistem SHALL menampilkan trust metrics yang telah diverifikasi owner.

### 4.5 FAQ and Contact

**SRS-FR-015:** Sistem SHALL menampilkan empat FAQ utama dan jawabannya.

**SRS-FR-016:** Sistem SHALL menyediakan CTA WhatsApp pada header, hero, section penutup, dan footer; CTA konteks tambahan dapat dipasang pada halaman detail.

**SRS-FR-017:** Sistem SHALL membentuk WhatsApp URL menggunakan nomor konfigurasi dan pesan yang URL-encoded.

**SRS-FR-018:** Sistem SHALL membiarkan pengguna memeriksa/mengedit pesan sebelum dikirim melalui WhatsApp.

### 4.6 Detail Pages and SEO

**SRS-FR-019:** Sistem SHALL menyediakan template halaman detail/artikel untuk konten produk yang dirujuk.

**SRS-FR-020:** Sistem SHALL menampilkan halaman 404 untuk slug yang tidak tersedia.

**SRS-FR-021:** Sistem SHALL menyediakan metadata SEO, canonical, sitemap, dan robots.

### 4.7 Analytics and Content Management

**SRS-FR-022:** Jika analytics aktif, sistem SHALL mengirim event yang telah disetujui tanpa memasukkan PII atau teks pesan.

**SRS-FR-023:** Jika CMS disetujui, sistem SHALL membatasi akses pengelolaan konten hanya kepada pengguna terautentikasi dengan role yang sesuai.

**SRS-FR-024:** Jika CMS tidak digunakan, konten SHALL dikelola dari repositori dan dipublikasikan melalui pipeline deployment.

## 5. Nonfunctional Requirements

### 5.1 Performance

- SRS-NFR-PERF-01: LCP p75 target ≤ 2,5 detik.
- SRS-NFR-PERF-02: INP p75 target ≤ 200 ms.
- SRS-NFR-PERF-03: CLS p75 target ≤ 0,1.
- SRS-NFR-PERF-04: Gambar menggunakan ukuran responsif dan format modern bila didukung.

### 5.2 Availability and Reliability

- SRS-NFR-REL-01: Target availability hosting ≥ 99,5% per bulan, bergantung provider.
- SRS-NFR-REL-02: Website tetap dapat dibaca jika analytics atau WhatsApp app tidak tersedia.
- SRS-NFR-REL-03: Link internal dan gambar wajib memiliki fallback/validasi.

### 5.3 Security and Privacy

- SRS-NFR-SEC-01: Seluruh traffic production melalui HTTPS.
- SRS-NFR-SEC-02: Secret tidak boleh berada dalam source code client.
- SRS-NFR-SEC-03: Website tidak mengumpulkan data pribadi kecuali fitur masa depan disetujui dan diberi pemberitahuan.
- SRS-NFR-SEC-04: CMS (jika ada) menerapkan role least privilege dan proteksi autentikasi.

### 5.4 Usability and Accessibility

- SRS-NFR-UX-01: UI mendukung viewport 320 px hingga desktop lebar.
- SRS-NFR-UX-02: Target kepatuhan WCAG 2.2 AA.
- SRS-NFR-UX-03: Semua kontrol inti dapat diakses keyboard.
- SRS-NFR-UX-04: Copy Bahasa Indonesia mudah dipahami.

### 5.5 Maintainability and Portability

- SRS-NFR-MNT-01: Kontak dan konten berulang dikonfigurasi secara terpusat.
- SRS-NFR-MNT-02: Build, lint, dan type-check harus dapat dijalankan pada CI.
- SRS-NFR-MNT-03: Aplikasi tidak boleh bergantung pada satu browser tertentu.

## 6. Data Requirements

### 6.1 Data Objects

| Object | Field minimum |
|---|---|
| SiteSettings | brandName, logo, whatsappNumber, whatsappMessage, footerText |
| ProductCategory | id, slug, title, eyebrow, description, coverImage, detailHref, order |
| GalleryImage | id, category, imageUrl, altText, caption, order |
| ValueItem | id, title, description, order |
| AudienceSegment | id, title, order |
| FAQItem | id, question, answer, order |
| Article | id, slug, title, excerpt, body, heroImage, category, publishDate, seoTitle, seoDescription |

### 6.2 Data Integrity Rules

- Slug unik.
- Semua gambar yang tampil wajib memiliki kategori dan alt text, kecuali dekoratif.
- Nomor WhatsApp hanya satu sumber konfigurasi pada MVP.
- Konten angka/claim harus memiliki approval owner.
- URL gambar harus HTTPS dan dapat diakses publik.

## 7. Business Rules

1. Konsultasi WhatsApp adalah jalur konversi utama.
2. Website tidak mengkonfirmasi order atau menerima pembayaran pada MVP.
3. Harga, MOQ, lead time, dan garansi tidak boleh disimpulkan dari halaman lain tanpa approval owner.
4. Empat kategori produk menjadi kategori primer.
5. Semua klaim bisnis harus benar dan dapat diverifikasi.

## 8. Acceptance Tests

| Test ID | Skenario | Hasil yang diharapkan |
|---|---|---|
| AT-01 | Buka homepage | Semua section inti tampil |
| AT-02 | Klik Produk | Scroll ke section Produk |
| AT-03 | Klik Galeri | Scroll ke Galeri |
| AT-04 | Klik Proses | Scroll ke keunggulan/proses |
| AT-05 | Klik FAQ | Scroll ke FAQ |
| AT-06 | Klik CTA WhatsApp | WhatsApp terbuka dengan nomor dan pesan benar |
| AT-07 | Periksa produk | Empat kategori benar urutan dan isi |
| AT-08 | Periksa galeri | Empat grup gambar tampil, tanpa gambar rusak |
| AT-09 | Buka FAQ | Jawaban bisa dibaca dan dioperasikan keyboard |
| AT-10 | Buka halaman detail | Artikel terbuka dan CTA tersedia |
| AT-11 | Buka slug invalid | HTTP 404 dan link kembali tersedia |
| AT-12 | Uji mobile 390 px | Tidak ada overflow atau CTA terpotong |
| AT-13 | Uji keyboard | Fokus terlihat, semua kontrol operasional |
| AT-14 | Uji SEO | Title, meta, canonical, sitemap tersedia |
| AT-15 | Uji analytics | Event non-PII terkirim; website tetap berjalan saat analytics gagal |

## 9. Traceability Matrix

| SRS | MRD | CRD | BRD | PRD | FRD | UIRD |
|---|---|---|---|---|---|---|
| FR-001–005 | Market website | CR-01 | BR-01 | Section 7, 9 | FR-001–004 | Sections 2.1–2.3 |
| FR-006–008 | Empat kategori | CR-02 | BR-01 | Section 9 | FR-005 | Section 2.4 |
| FR-009–011 | Portofolio | CR-03 | BR-03 | Section 9 | FR-006–007 | Section 2.5 |
| FR-012–014 | Value proposition | CR-04/05/06 | BR-02/05 | Section 9 | FR-008–009 | Sections 2.6–2.7 |
| FR-015–018 | Konversi | CR-07/08 | BR-04/06 | Section 9 | FR-010–012 | Sections 2.8–2.9 |
| FR-019–021 | SEO detail | CR-09 | BR-07/08 | Sections 7, 14 | FR-013/015 | Page detail/SEO |
| FR-022–024 | Pengukuran/kelola | CR-10 | BR-09–11 | Sections 12, 15 | FR-016/017 | Responsive/states |

## 10. Open Issues / Pending Confirmation

- Nomor WhatsApp resmi: sementara `6285771062589` dari CTA beranda; validasi owner wajib.
- Klaim “10+ tahun pengalaman”: perlu persetujuan.
- Alamat, jam operasional, MOQ, estimasi, garansi, metode pembayaran, dan pengiriman: belum menjadi requirement publik sampai owner menyetujui.
- Daftar URL artikel/detail yang harus dimigrasikan: perlu inventarisasi.
- Domain dan hosting production: perlu keputusan.
- Hak penggunaan aset logo/foto/testimoni: perlu konfirmasi.
