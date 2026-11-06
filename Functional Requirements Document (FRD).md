# Functional Requirements Document (FRD)

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Draft kebutuhan fungsional |
| Tanggal | 5 November 2026 |

## 1. Tujuan Sistem

Mendefinisikan perilaku yang harus disediakan website agar pengunjung dapat memahami produk, melihat portofolio, membaca keunggulan dan FAQ, mengakses halaman detail, serta memulai konsultasi WhatsApp.

## 2. Aktor

| Aktor | Deskripsi |
|---|---|
| Pengunjung | Pengguna anonim yang melihat halaman publik |
| Pengelola konten (opsional) | Staf internal yang memperbarui teks, gambar, FAQ, atau artikel melalui CMS bila CMS disetujui |
| WhatsApp | Aplikasi/layanan eksternal tempat konsultasi dilanjutkan |
| Analytics (opsional) | Layanan pengukuran event dengan konfigurasi privasi yang disetujui |

## 3. Spesifikasi Fungsional

### FR-001 — Memuat beranda
- Sistem membuka halaman utama pada URL `/`.
- Sistem menampilkan header, hero, empat produk, galeri, keunggulan, segmen pelanggan, FAQ, CTA, dan footer.
- Sistem harus menampilkan konten inti tanpa membutuhkan login.
- Kriteria penerimaan: semua section terlihat dan tidak ada error render pada browser yang didukung.

### FR-002 — Navigasi anchor
- Header menyediakan Produk, Galeri, Proses, FAQ, dan Konsultasi.
- Produk/Galeri/Proses/FAQ menggulir ke section yang sesuai.
- Konsultasi membuka WhatsApp.
- Anchor harus memperhitungkan tinggi sticky header agar heading tidak tertutup.
- Kriteria penerimaan: semua item mencapai tujuan yang tepat melalui mouse, keyboard, dan mobile menu.

### FR-003 — Hero dan CTA
- Hero memuat headline, deskripsi, visual jas almamater/toga, CTA utama, dan CTA sekunder.
- CTA sekunder menuju Produk.
- CTA utama menuju nomor WhatsApp resmi dengan pesan awal yang sudah ditentukan.
- Kriteria penerimaan: pesan awal bisa diedit oleh pengguna dan tidak mengandung data pengguna yang dikirim otomatis.

### FR-004 — Menampilkan pita layanan
- Sistem menampilkan nama empat kategori dan layanan Custom Production/Quality Control.
- Jika bergerak, animasi tidak menghalangi akses pembaca layar dan menghormati reduced motion.

### FR-005 — Menampilkan kategori produk
- Sistem menampilkan empat kartu dalam urutan Jas Almamater, Toga Wisuda, Seragam Kerja, Seragam Sekolah.
- Setiap kartu memiliki judul, deskripsi, gambar, dan link detail bila tersedia.
- Kriteria penerimaan: seluruh isi sesuai data konten yang disahkan.

### FR-006 — Menampilkan galeri kategori
- Sistem mengelompokkan gambar ke dalam empat kategori yang sama.
- Setiap gambar memiliki alt text.
- Link “Lihat detail” diarahkan ke halaman detail yang tepat bila tujuan tersedia.
- Sistem tidak boleh memalsukan jumlah foto dengan menyalin gambar berulang.

### FR-007 — Membuka gambar galeri
- Jika lightbox diimplementasikan, tap/klik gambar membuka tampilan besar.
- Pengguna dapat menutup dengan tombol close dan Escape.
- Pada grup, pengguna dapat berpindah ke gambar sebelumnya/berikutnya.
- Fokus keyboard dikelola dengan benar.

### FR-008 — Menampilkan keunggulan/proses
- Sistem menampilkan heading dan deskripsi terkait proses yang rapi, jelas, dan terarah.
- Sistem menampilkan empat nilai: Custom, QC, Komunikatif, Kelompok.
- Metrik pengalaman/kategori/QC/konsultasi ditampilkan hanya jika nilainya telah disetujui.

### FR-009 — Menampilkan segmen pelanggan
- Sistem menampilkan delapan segmen: Kampus, Sekolah, Perusahaan, Organisasi, Instansi, Komunitas, Event, Group.
- Urutan dan teks harus konsisten.

### FR-010 — FAQ
- Sistem menampilkan empat pertanyaan dan jawaban utama.
- Jika accordion digunakan, setiap pertanyaan dapat dibuka dan ditutup.
- Status accordion tersedia untuk teknologi bantu.
- Kriteria penerimaan: jawaban bisa dibaca tanpa harus menggunakan mouse.

### FR-011 — CTA closing
- Sistem menampilkan ajakan “Siap bikin seragammu?” dan instruksi jenis produk, jumlah, kebutuhan custom, target waktu.
- Tombol “Chat KOTABI” membuka WhatsApp.

### FR-012 — WhatsApp deep link
- Link menggunakan format `https://wa.me/{phone}?text={encodedMessage}`.
- Nomor harus disimpan terpusat, tanpa karakter `+`, spasi, atau tanda baca.
- Nomor default sementara: `6285771062589` berdasarkan CTA beranda; konfigurasi harus disahkan owner.
- Pesan awal yang dapat digunakan: `Halo KOTABI, saya ingin konsultasi produksi. Jenis produk: ... Jumlah: ... Kebutuhan custom: ... Target waktu: ...`.
- Sistem tidak mengirim pesan secara otomatis; pengguna tetap menekan tombol kirim di WhatsApp.

### FR-013 — Halaman detail produk/artikel
- Sistem menyediakan template halaman detail untuk konten yang dirujuk dari galeri/produk.
- Halaman memiliki judul, ringkasan, gambar, isi, CTA, tanggal/kategori bila relevan, dan tautan terkait.
- Tautan “Lihat detail” harus menuju kategori yang benar.
- Halaman yang tidak ditemukan menampilkan 404 yang ramah dan link kembali ke beranda.

### FR-014 — Footer
- Sistem menampilkan ringkasan brand, navigasi anchor, WhatsApp, dan copyright.
- Kontak lain/tautan sosial hanya ditampilkan jika dikonfirmasi.

### FR-015 — SEO dan metadata
- Setiap halaman memiliki title, meta description, canonical, Open Graph, dan struktur heading.
- Sistem menyediakan sitemap XML dan robots.txt.
- Gambar menggunakan nama file dan alt text yang relevan.

### FR-016 — Analytics event
- Sistem merekam event yang disetujui: `whatsapp_click`, `product_click`, `gallery_image_open`, `faq_open`, `detail_page_view`.
- Parameter event tidak menyertakan pesan WhatsApp, nama, email, atau nomor pengguna.

### FR-017 — Pengelolaan konten (opsional)
- Jika CMS masuk scope, admin yang berwenang dapat menambah/mengubah produk, gambar, artikel, FAQ, CTA, dan metadata.
- CMS wajib memiliki autentikasi, role, validasi, dan audit perubahan.
- Tanpa CMS, konten dikelola melalui repositori dan proses deployment.

## 4. Use Cases

### UC-01: Melihat produk
- Aktor: Pengunjung.
- Prakondisi: Website dapat diakses.
- Alur utama: Buka beranda → pilih Produk → lihat empat kartu → pilih kartu/detail.
- Hasil: Pengunjung memahami kategori dan dapat melanjutkan ke detail/konsultasi.

### UC-02: Melihat portofolio
- Aktor: Pengunjung.
- Alur utama: Buka Galeri → pilih kategori → lihat gambar → buka gambar atau halaman detail.
- Hasil: Bukti visual produk dapat dilihat.

### UC-03: Membaca FAQ
- Aktor: Pengunjung.
- Alur utama: Buka FAQ → pilih pertanyaan → baca jawaban → lanjut konsultasi jika perlu.
- Hasil: Pertanyaan awal terjawab.

### UC-04: Memulai konsultasi WhatsApp
- Aktor: Pengunjung.
- Alur utama: Klik salah satu CTA → browser membuka WhatsApp/deep link → pesan awal terisi → pengunjung memeriksa dan mengirim.
- Hasil: Kanal konsultasi dimulai di luar website.

### UC-05: Membaca detail dari mesin pencari
- Aktor: Pengunjung.
- Alur utama: Buka URL detail → baca konten → klik CTA → WhatsApp terbuka.
- Hasil: Pengunjung dapat berkonversi tanpa harus kembali ke beranda.

## 5. Validasi Input dan Penanganan Error

- Tidak ada form wajib pada MVP.
- Jika nomor WhatsApp kosong/tidak valid pada konfigurasi, tombol tidak boleh menghasilkan link rusak; build/deployment harus gagal atau CTA disembunyikan dan dilaporkan.
- Jika gambar gagal, tampilkan fallback yang konsisten dan log error non-personal.
- Jika slug tidak ditemukan, tampilkan 404.
- Jika analytics gagal, website tetap berfungsi normal.
- Jika browser tidak memiliki aplikasi WhatsApp, deep link tetap diarahkan ke halaman web WhatsApp bila didukung.

## 6. Aturan Bisnis

- Website hanya mengarahkan konsultasi, bukan menerima order final.
- Harga dan jadwal produksi ditentukan melalui konsultasi, kecuali owner mengesahkan price list.
- MOQ hanya dapat ditampilkan dengan aturan yang disetujui.
- Semua CTA memakai nomor resmi yang disepakati.
- Konten klaim harus memiliki approval owner.

## 7. Kebutuhan Nonfungsional Terkait Fungsi

- Tidak ada ketergantungan JavaScript untuk menampilkan teks inti dan link penting.
- Navigasi dan kontrol operasional harus dapat digunakan keyboard.
- Link eksternal diberi indikator dan accessible name yang jelas.
- Interaksi tidak menyebabkan layout shift besar.
- Seluruh halaman memakai HTTPS.

## 8. Traceability Ringkas

| Kebutuhan | Sumber |
|---|---|
| FR-001–004 | Header, hero, CTA dan pita layanan di beranda |
| FR-005–007 | Empat kartu produk dan galeri per kategori |
| FR-008 | Bagian “Kenapa KOTABI” / “Rapi. Jelas. Terarah.” |
| FR-009 | Bagian “Untuk Tim Anda” |
| FR-010 | Bagian FAQ |
| FR-011–012 | Closing CTA dan link WhatsApp |
| FR-013 | Link “Lihat detail” yang menuju artikel produk |
| FR-014–016 | Footer, metadata, dan kebutuhan operasional digital |
| FR-017 | Rekomendasi pengelolaan konten; bukan fungsi yang terlihat di referensi |

## 9. Kriteria UAT

1. Setiap fungsi P0 berhasil pada desktop dan mobile.
2. Semua link internal, anchor, dan CTA menuju target yang tepat.
3. Nomor serta isi pesan WhatsApp sudah disetujui dan teruji.
4. Tidak ada gambar salah kategori atau halaman detail kosong.
5. FAQ, lightbox, dan menu mobile dapat digunakan keyboard.
6. Analytics tidak mengirim data pribadi.
7. Semua state error memiliki fallback yang wajar.
