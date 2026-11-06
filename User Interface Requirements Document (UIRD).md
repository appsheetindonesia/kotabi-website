# User Interface Requirements Document (UIRD)

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Design specification / draft |
| Tanggal | 5 November 2026 |
| Referensi visual dan struktur | https://konveksi.toko-abi.com/ |

## 1. Tujuan dan Prinsip Desain

UI harus mempertahankan parity struktur, informasi, navigasi, dan alur dengan website referensi, tetapi disajikan dengan standar visual lebih matang. “100% identik” pada dokumen ini berarti **parity konten, urutan section, kategori, label navigasi, tujuan tautan, dan perilaku utama**. Tampilan tidak harus menyalin kekurangan teknis atau ketidakteraturan visual; spacing, tipografi, grid, responsivitas, kontras, dan detail interaksi justru ditingkatkan.

Prinsip:
- Elegant, professional, clean, editorial, dan berorientasi pada foto produk.
- Hierarki visual kuat dan konsisten.
- Foto asli produk menjadi fokus utama.
- CTA WhatsApp mudah ditemukan tetapi tidak mendominasi semua section.
- Komponen konsisten di seluruh beranda dan halaman detail.
- Mobile-first, accessible, dan tidak mengandalkan hover.

## 2. Peta Halaman dan Susunan Section

### 2.1 Header

Elemen:
- Logo/wordmark KOTABI di sisi kiri.
- Navigasi: **Produk**, **Galeri**, **Proses**, **FAQ**.
- Tombol CTA **Konsultasi** menuju WhatsApp.
- Header sticky saat scroll diperbolehkan jika tinggi dan transisinya tidak mengganggu.
- Pada mobile, gunakan menu ringkas dan CTA WhatsApp yang tetap mudah diakses.

### 2.2 Hero

Konten dan urutan:
- Label brand “Konveksi KOTABI”.
- Headline bertingkat dengan pesan “BUAT IDENTITAS. PAKAI KOTABI.”
- Deskripsi empat layanan untuk kelompok, institusi, dan brand.
- CTA utama “Mulai Konsultasi” ke WhatsApp.
- CTA sekunder “Lihat Produk” ke anchor produk.
- Visual utama produk jas almamater dan toga wisuda.
- Trust marker “Custom Production” dan klaim pengalaman `10+ Tahun` hanya setelah divalidasi.

Layout desktop: hero dua kolom atau komposisi asimetris editorial, copy di sisi kiri dan foto produk di kanan. Mobile: headline, copy, CTA, baru visual; CTA tidak boleh tertutup gambar.

### 2.3 Pita Kategori/Marquee

Tampilkan kategori Jas Almamater, Toga Wisuda, Seragam Kerja, Seragam Sekolah, Custom Production, dan Quality Control. Gerakan otomatis hanya dekoratif, berhenti atau mengurangi gerak jika `prefers-reduced-motion` aktif. Informasi tetap terbaca saat animasi mati.

### 2.4 Section Produk — “Yang Kami Buat”

Empat kartu produk dalam urutan:
1. Jas Almamater — eyebrow `01 — CAMPUS IDENTITY`.
2. Toga Wisuda — eyebrow `02 — GRADUATION`.
3. Seragam Kerja — eyebrow `03 — WORKWEAR`.
4. Seragam Sekolah — eyebrow `04 — SCHOOLWEAR`.

Setiap kartu berisi gambar, nomor/eyebrow, nama, deskripsi, dan tautan detail jika tujuan detail tersedia. Gunakan grid dua kolom pada desktop/tablet lebar dan satu kolom atau carousel yang dapat diakses pada mobile. Hindari pemotongan logo/bordir produk.

### 2.5 Section Galeri — “Galery Kami”

Kelompok visual:
- Toga Wisuda.
- Jas Almamater.
- Seragam Kerja.
- Seragam Sekolah.

Setiap grup menampilkan judul, kumpulan gambar, dan tautan “Lihat detail” jika URL detail ada. Referensi menampilkan 11 visual pada bagian Seragam Sekolah; jumlah foto grup lain perlu dicocokkan dengan inventaris aset final. Foto disusun dengan grid/masonry terkontrol, rasio gambar konsisten per kelompok, dan tidak mengulang gambar hanya untuk menciptakan kesan jumlah.

Perilaku galeri:
- Klik/tap gambar dapat membuka lightbox.
- Lightbox menyediakan close, previous, next, label/alt, dan fokus keyboard.
- Escape menutup lightbox.
- Tap di luar gambar boleh menutup hanya jika tidak mengganggu pengguna.
- Gambar memiliki loading placeholder dan fallback.

### 2.6 Section Proses/Keunggulan — “Rapi. Jelas. Terarah.”

Deskripsi menekankan spesifikasi jelas, produksi terkontrol, dan hasil sesuai kebutuhan yang disepakati. Empat item:
- 01 Custom — model, warna, bahan, ukuran, logo, detail produksi.
- 02 QC — kontrol kualitas sebagai bagian alur produksi.
- 03 Komunikatif — brief dan kebutuhan dibahas lebih dulu.
- 04 Kelompok — kampus, sekolah, perusahaan, organisasi, komunitas, instansi.

Diikuti strip metrik: `10+ Tahun pengalaman`, `04 Kategori utama`, `QC Quality control`, `1:1 Konsultasi kebutuhan`. Metrik yang berpotensi menjadi klaim bisnis harus dapat dikonfigurasi dan disetujui sebelum tayang.

### 2.7 Section Segmen — “Untuk Tim Anda”

Delapan label berurutan dan bernomor: Kampus, Sekolah, Perusahaan, Organisasi, Instansi, Komunitas, Event, Group. Gunakan daftar/grid yang kuat secara tipografi; setiap segmen tidak harus menjadi kartu dengan ilustrasi.

### 2.8 Section FAQ — “Yang Sering Ditanya”

Empat pertanyaan:
1. Bisa custom model dan warna?
2. KOTABI menerima produksi untuk kampus?
3. Bisa produksi seragam kerja?
4. Bagaimana cara mulai pesan?

Gunakan accordion aksesibel atau daftar terbuka. Jawaban harus tetap sama maknanya dengan referensi. Hanya satu item terbuka pada satu waktu bila itu meningkatkan kerapian, tetapi pilihan ini tidak boleh menghambat pembacaan.

### 2.9 Closing CTA

Label “Ready when you are”, headline “Siap bikin seragammu?”, deskripsi yang meminta jenis produk, jumlah, kebutuhan custom, dan target waktu. Tombol utama “Chat KOTABI” membuka WhatsApp.

### 2.10 Footer

- Ringkasan singkat “Konveksi KOTABI — produksi jas almamater, toga wisuda, seragam kerja, dan seragam sekolah.”
- Anchor Produk, Galeri, Proses, FAQ.
- WhatsApp.
- Copyright dan tagline “Custom Production • Quality Control”.
- Informasi alamat/jam/media sosial hanya ditampilkan setelah divalidasi.

## 3. Sistem Visual yang Diusulkan

Palet berikut merupakan rekomendasi awal, bukan klaim warna resmi logo. Warna final harus diselaraskan dengan aset brand yang diberikan owner.

| Token | Warna usulan | Fungsi |
|---|---|---|
| `ink-900` | `#17212B` | Headline, teks utama, elemen kontras |
| `navy-800` | `#20364B` | Area brand/CTA sekunder |
| `teal-600` | `#168C91` | Aksen, link aktif, detail interaktif |
| `sand-100` | `#F4F1EA` | Latar section hangat |
| `paper-50` | `#FCFBF8` | Latar utama |
| `gray-600` | `#5D6872` | Teks sekunder |
| `line-200` | `#E5E2DA` | Border dan divider |
| `white` | `#FFFFFF` | Kartu dan ruang negatif |

Aturan:
- Gunakan latar netral untuk menonjolkan tekstur dan warna pakaian.
- Teal/navy hanya aksen, jangan menutup foto produk dengan overlay berat.
- Kontras teks normal minimal 4.5:1.
- Status hover/focus/active harus terlihat jelas.

## 4. Tipografi

- Gunakan keluarga sans-serif kontemporer yang mudah dibaca, misalnya Inter/Manrope atau font brand yang disetujui.
- Headline dapat menggunakan bobot tebal dengan tracking terkontrol.
- Hindari terlalu banyak ukuran dan gaya font.
- Ukuran dasar desktop 16–18 px; mobile minimal 16 px untuk body.
- Line-height body sekitar 1.5–1.7; headline 1.0–1.15 sesuai panjang.
- Gunakan kapitalisasi untuk eyebrow/label pendek, bukan paragraf panjang.

## 5. Grid, Spacing, dan Bentuk

- Container desktop maksimum sekitar 1200–1320 px.
- Grid 12 kolom untuk komposisi desktop; gap 24–32 px.
- Skala spacing berbasis 4/8 px.
- Radius kartu moderat 12–20 px; hindari seluruh elemen menjadi pill.
- Border tipis dan shadow ringan; hindari shadow hitam yang berat.
- Gunakan ruang vertikal yang konsisten antara section.

## 6. Responsive Breakpoints

| Breakpoint | Perilaku |
|---|---|
| `< 480 px` | Header mobile, satu kolom, CTA full-width bila perlu, teks tidak terpotong |
| `480–767 px` | Mobile besar; kartu satu kolom atau dua kolom hanya jika lebar cukup |
| `768–1023 px` | Tablet; grid 2 kolom, navigasi ringkas |
| `1024–1279 px` | Desktop standar; grid penuh dan hero asimetris |
| `≥ 1280 px` | Container dibatasi; whitespace tetap proporsional |

Tidak boleh ada overflow horizontal pada lebar 320 px, kecuali area marquee yang aman dan tidak menimbulkan scroll halaman.

## 7. Komponen dan State

| Komponen | State wajib |
|---|---|
| Header/navigation | Default, sticky, menu mobile open/closed, focus, active anchor |
| CTA button | Default, hover, focus, active, disabled bila ada |
| Product card | Default, hover/focus, image loading/error |
| Gallery | Loading, loaded, empty, lightbox open, error |
| FAQ accordion | Collapsed, expanded, focus |
| WhatsApp link | External navigation, accessible label |
| Article page | Loading, not found, image unavailable |

## 8. Motion and Microinteraction

- Durasi standar 150–250 ms untuk hover/focus/accordion.
- Reveal on scroll hanya jika tidak menunda konten utama.
- Marquee harus dapat dihentikan/dikurangi.
- Tidak ada parallax berat atau animasi yang membuat teks sulit dibaca.
- Hormati `prefers-reduced-motion: reduce`.

## 9. Iconography and Photography

- Gunakan ikon line sederhana dengan ukuran dan stroke konsisten.
- Hindari emoji sebagai ikon utama UI.
- Foto produk harus autentik dan beresolusi memadai.
- Gunakan crop `object-fit: cover` dengan focal point yang bisa disetel per foto.
- Foto logo/bordir harus cukup besar untuk melihat detail.
- Jangan menggunakan gambar stok yang tidak menggambarkan hasil kerja KOTABI sebagai portofolio nyata.
- Sediakan fallback yang elegan bila gambar gagal dimuat.

## 10. Aksesibilitas

- Semua fungsi dapat dioperasikan dengan keyboard.
- Focus ring terlihat dan tidak dihilangkan.
- Landmark `header`, `nav`, `main`, `section`, `footer` digunakan benar.
- Heading tidak melompat tingkat tanpa alasan.
- Alt text deskriptif; dekorasi memiliki alt kosong.
- Accordion menggunakan tombol semantik dan `aria-expanded`.
- Lightbox mengelola fokus dan Escape.
- Target sentuh ideal minimal 44×44 px.
- Kontras sesuai WCAG 2.2 AA.

## 11. Konten dan Konsistensi

Judul, urutan, kategori, FAQ, segmen, CTA, dan pesan utama wajib diperiksa terhadap matriks parity referensi. Perbaikan copy hanya untuk ejaan, konsistensi, dan keterbacaan; perubahan substansi memerlukan persetujuan owner.

## 12. Kriteria Visual Acceptance

- Screenshot comparison tersedia untuk desktop (1440 px), tablet (768 px), dan mobile (390 px).
- Semua section muncul dalam urutan yang benar.
- Tidak ada perbedaan isi kategori, CTA, label nav, atau urutan FAQ tanpa persetujuan.
- Foto tidak pecah, tidak salah kategori, dan crop tidak memotong objek penting.
- Navigasi mobile, accordion, lightbox, serta CTA berjalan.
- Tidak ada overflow, overlap, layout shift yang mengganggu, atau teks terpotong.
- Visual terasa lebih teratur dan premium daripada implementasi yang tidak konsisten, namun tetap mempertahankan karakter KOTABI.

## 13. Batas Interpretasi “100% Identik”

Dokumen ini menargetkan identitas alur dan konten, bukan menyalin pixel secara buta. Jika owner menghendaki pixel-perfect terhadap versi tertentu, diperlukan screenshot acuan pada ukuran viewport yang ditentukan, inventaris font/warna, seluruh gambar sumber, serta persetujuan apakah desain elegan boleh mengubah proporsi dan treatment. Tanpa artefak tersebut, parity diverifikasi berdasarkan konten, section, link, dan perilaku.
