# Quality Requirements Document (QRD)

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Draft standar kualitas dan QA |
| Tanggal | 5 November 2026 |

## 1. Tujuan

Menetapkan ukuran kualitas yang dapat diuji untuk memastikan website KOTABI cepat, stabil, aman, mudah diakses, responsif, konsisten, dan sesuai struktur referensi.

## 2. Quality Attributes dan Target

| Atribut | Target |
|---|---|
| Performance | LCP p75 ≤ 2,5 detik; INP p75 ≤ 200 ms; CLS p75 ≤ 0,1 pada data lapangan yang memadai |
| Lighthouse | Target awal ≥ 90 untuk Performance, Accessibility, Best Practices, SEO pada halaman utama di kondisi lab; bukan pengganti data lapangan |
| Availability | Target hosting ≥ 99,5% bulanan untuk MVP, bergantung SLA provider |
| Compatibility | Browser modern pada desktop dan mobile |
| Accessibility | WCAG 2.2 AA untuk fungsi dan konten inti |
| Security | Tidak ada secret di frontend/repository; HTTPS; tidak ada vulnerability kritis/tinggi terbuka saat rilis |
| SEO | Sitemap valid, canonical benar, metadata lengkap, tidak ada soft 404 |
| Maintainability | Konten dan konfigurasi kontak terpusat; lint/type-check/build lulus |
| Visual consistency | Section, konten, link, dan tampilan responsif sesuai matriks parity |

Target Lighthouse merupakan target pengujian laboratorium. Pengukuran nyata dapat berbeda sesuai device, jaringan, browser, dan lokasi.

## 3. Performance Requirements

- QR-PERF-01: Konten hero dan heading utama ditampilkan cepat; hindari render tertahan oleh script pihak ketiga.
- QR-PERF-02: Gambar hero diberi prioritas; galeri di bawah fold menggunakan lazy loading.
- QR-PERF-03: Semua gambar memiliki ukuran/aspect ratio untuk mencegah layout shift.
- QR-PERF-04: Aset gambar dikompresi dan menggunakan format modern bila didukung.
- QR-PERF-05: Total JavaScript awal dijaga serendah mungkin; jangan menambahkan library carousel/lightbox berat tanpa kebutuhan.
- QR-PERF-06: Pita marquee/animasi tidak boleh memengaruhi input responsiveness.

## 4. Reliability Requirements

- QR-REL-01: Tidak boleh ada tautan internal rusak pada halaman yang dirilis.
- QR-REL-02: Semua CTA WhatsApp harus diuji terhadap nomor resmi.
- QR-REL-03: Website tetap dapat dibaca jika analytics tidak tersedia.
- QR-REL-04: Gambar gagal harus memiliki fallback, bukan ruang kosong yang merusak layout.
- QR-REL-05: Halaman slug tidak valid harus memberikan HTTP 404 yang benar.
- QR-REL-06: Rollback deployment harus dapat dilakukan dari release sebelumnya.

## 5. Responsive Quality

Uji minimum pada viewport:
- 320×640 px.
- 360×800 px.
- 390×844 px.
- 768×1024 px.
- 1024×768 px.
- 1280×800 px.
- 1440×900 px.

Kriteria:
- Tidak ada horizontal scroll halaman.
- Teks tidak terpotong dan tidak menimpa gambar.
- Navigasi mobile dapat dibuka/tutup.
- CTA mudah disentuh.
- Galeri menyesuaikan kolom tanpa kehilangan urutan.
- Sticky header tidak menutupi anchor destination.

## 6. Accessibility Quality

- QR-A11Y-01: Semua fungsi dapat diakses keyboard.
- QR-A11Y-02: Focus indicator terlihat pada navigasi, accordion, CTA, dan lightbox.
- QR-A11Y-03: Kontras teks normal ≥ 4.5:1 dan teks besar ≥ 3:1.
- QR-A11Y-04: Heading dan landmark semantik.
- QR-A11Y-05: Foto produk memiliki alt text yang akurat.
- QR-A11Y-06: Accordion mengekspos state expanded/collapsed.
- QR-A11Y-07: Lightbox mengunci/mengelola fokus dengan benar dan menutup dengan Escape.
- QR-A11Y-08: Animasi mengikuti `prefers-reduced-motion`.
- QR-A11Y-09: Target sentuh utama idealnya sekurang-kurangnya 44×44 CSS px.

## 7. Security and Privacy Quality

- QR-SEC-01: Semua halaman produksi menggunakan HTTPS.
- QR-SEC-02: Tidak ada key/token privat pada source code client.
- QR-SEC-03: Tidak ada data pesan WhatsApp atau PII yang dikirim ke analytics.
- QR-SEC-04: Security headers dikonfigurasi.
- QR-SEC-05: Dependency scan tidak menemukan vulnerability critical/high yang belum dimitigasi.
- QR-SEC-06: Jika CMS ada, admin memakai autentikasi dan hak akses least privilege.
- QR-SEC-07: Konten dari CMS divalidasi/sanitasi sebelum ditampilkan.
- QR-SEC-08: Privacy notice tersedia bila ada tracking/pengumpulan data yang relevan.

## 8. SEO Quality

- Setiap halaman mempunyai title dan meta description unik.
- Satu H1 utama dan heading hierarchy logis.
- Canonical menunjuk URL produksi yang benar.
- Sitemap hanya memuat URL publik canonical dan berstatus 200.
- Robots tidak memblokir aset penting atau halaman publik secara tidak sengaja.
- Structured data tidak memuat rating, alamat, harga, atau klaim yang tidak tervalidasi.
- Gambar memiliki nama dan alt text relevan.
- Link internal menghubungkan beranda ke halaman detail secara kontekstual.

## 9. Visual Quality and Content Parity

Gunakan checklist pada setiap viewport:
- Header memuat lima navigasi yang sama.
- Hero mengandung pesan, deskripsi, visual, dan dua CTA.
- Empat kategori produk muncul dalam urutan yang sama.
- Galeri memiliki empat kelompok yang sama.
- Keunggulan terdiri dari empat item yang sama.
- Segmen pelanggan terdiri dari delapan item yang sama.
- FAQ berjumlah empat dengan makna jawaban yang sama.
- CTA closing dan footer ada.
- Warna, gambar, dan copy tidak menyampaikan klaim yang belum disetujui.

Kualitas visual lebih baik tidak boleh menghapus bagian atau mengubah tujuan interaksi.

## 10. Test Strategy

### 10.1 Unit/component tests
- Helper pembentuk WhatsApp URL.
- Render empat kategori dan FAQ.
- Validasi slug artikel.
- Komponen menu mobile dan accordion.

### 10.2 Integration tests
- Anchor navigation.
- Link produk ke detail.
- CTA pada header, hero, artikel, closing, footer.
- Galeri ke lightbox.
- Metadata per halaman.

### 10.3 End-to-end tests
- Alur home → product → gallery → FAQ → WhatsApp.
- Alur search landing → detail → WhatsApp.
- Menu mobile → section target.
- Penggunaan keyboard pada menu, accordion, dan lightbox.

### 10.4 Manual QA
- Visual review screenshot semua breakpoint.
- Periksa foto produk dan caption/alt.
- Proofread konten Bahasa Indonesia.
- Uji real device Android/iOS bila tersedia.
- Uji browser tanpa WhatsApp app.

## 11. Severity Defect

| Severity | Definisi | Contoh |
|---|---|---|
| Critical | Tujuan utama tidak bisa dicapai atau risiko keamanan tinggi | Semua CTA gagal; website tidak bisa dimuat; secret terekspos |
| High | Fungsi inti salah atau informasi bisnis berbahaya/salah | Nomor WA salah; kategori hilang; layout mobile rusak besar |
| Medium | Masalah fungsi/visual dengan workaround | Lightbox tidak berpindah gambar; anchor sedikit meleset |
| Low | Polishing visual atau inkonsistensi minor | Spacing, icon alignment, hover detail |

Tidak boleh ada defect Critical/High terbuka saat production release tanpa persetujuan risiko formal.

## 12. Release Quality Gate

Rilis dapat dilakukan jika:
1. Semua P0 requirement lulus.
2. Semua CTA dan anchor tervalidasi.
3. Tidak ada gambar rusak atau konten placeholder.
4. Nomor WhatsApp, klaim pengalaman, serta detail bisnis disetujui.
5. Responsive, accessibility, SEO, dan performance smoke tests lulus.
6. Tidak ada error console kritis.
7. UAT owner selesai dan persetujuan tercatat.
8. Rollback dan monitoring tersedia.

## 13. Monitoring Pasca-Rilis

- Pantau uptime, status deployment, dan error log.
- Pantau Core Web Vitals setelah jumlah data lapangan cukup.
- Periksa klik WhatsApp dan kualitas lead bersama tim sales.
- Uji ulang nomor kontak minimal setiap ada perubahan konten.
- Audit foto, link artikel, dan SEO secara berkala.
