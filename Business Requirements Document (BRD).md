# Business Requirements Document (BRD)

## Website Profil & Konsultasi Konveksi KOTABI

| Metadata | Nilai |
|---|---|
| Versi | 1.0 |
| Status | Draft untuk persetujuan bisnis |
| Tanggal | 5 November 2026 |
| Pemilik proses | Manajemen/Marketing KOTABI |

## 1. Tujuan Bisnis

Membangun website yang meningkatkan kredibilitas KOTABI, menjelaskan portofolio jasa konveksi, menghasilkan prospek konsultasi, dan menjadi sumber informasi resmi yang konsisten. Website mengikuti struktur dan jalur utama referensi `konveksi.toko-abi.com`, dengan peningkatan standar profesionalisme, keterbacaan, aksesibilitas, SEO, dan performa.

## 2. Latar Belakang

KOTABI menawarkan produksi pakaian custom untuk kelompok/institusi. Keputusan pembelian umumnya memerlukan diskusi spesifikasi terlebih dahulu. Website harus menampilkan bukti visual dan nilai layanan, lalu mengarahkan calon pelanggan ke saluran komunikasi yang dikelola tim.

## 3. Tujuan dan Hasil yang Diharapkan

- Meningkatkan jumlah dan kualitas konsultasi dari calon pelanggan.
- Memperkuat persepsi profesional dan terpercaya.
- Menyatukan presentasi empat kategori produk.
- Mengurangi pertanyaan awal yang berulang melalui konten produk dan FAQ.
- Membantu calon pelanggan menyiapkan brief yang cukup untuk ditindaklanjuti.
- Menjadi landing page yang mendukung pencarian organik untuk kata kunci produk.

## 4. Ruang Lingkup Bisnis

### 4.1 Termasuk

- Website company profile/lead generation.
- Beranda dengan lima navigasi: Produk, Galeri, Proses, FAQ, Konsultasi.
- Konten empat kategori produk dan galeri visual.
- Penjelasan empat keunggulan.
- Delapan segmen pelanggan.
- Empat FAQ.
- CTA WhatsApp pada posisi strategis.
- Halaman detail/artikel produk yang relevan dengan tautan galeri.
- SEO, analytics, dan pengelolaan konten dasar.

### 4.2 Tidak termasuk

- Pemesanan otomatis yang menghasilkan kontrak atau invoice.
- Pembayaran, deposit, cicilan, dan rekonsiliasi transaksi.
- ERP/MRP, penjadwalan operator, pembelian kain, manajemen stok, dan costing.
- Akun login pelanggan atau tracking pesanan.
- Live chat di dalam website selain tautan WhatsApp.
- Klaim harga/garansi yang belum diputuskan manajemen.

## 5. Stakeholder dan Tanggung Jawab

| Stakeholder | Tanggung jawab |
|---|---|
| Owner/Manajemen KOTABI | Persetujuan konten, kontak, klaim, scope, dan aset |
| Marketing/Sales | Menyediakan copy, kategori, FAQ, pesan WhatsApp, serta tindak lanjut lead |
| Tim Produksi/QC | Memvalidasi kemampuan custom dan deskripsi kontrol kualitas |
| UI/UX Designer | Menjaga parity struktur referensi dan meningkatkan desain |
| Frontend Developer | Implementasi responsif, komponen, interaksi, dan SEO teknis |
| Content/SEO | Mengelola judul, deskripsi, gambar, metadata, dan artikel |
| QA | Menguji fungsi, konten, responsivitas, aksesibilitas, dan tautan |

## 6. Proses Bisnis Saat Ini/Target

### 6.1 Proses target konsultasi

1. Marketing mengarahkan calon pelanggan ke website.
2. Calon pelanggan melihat kategori dan portofolio.
3. Calon pelanggan memahami keunggulan dan segmen layanan.
4. Calon pelanggan menekan CTA WhatsApp.
5. Pesan awal terisi: jenis produk, jumlah, kebutuhan custom, dan target waktu (pengunjung dapat mengedit).
6. Tim sales memverifikasi kebutuhan, mengumpulkan detail, dan menentukan tindak lanjut.
7. Penawaran harga, sampel, jadwal, pembayaran, serta produksi dilakukan di luar website melalui proses bisnis KOTABI yang berlaku.

### 6.2 Batas tanggung jawab website

Website bertanggung jawab sampai membuka jalur konsultasi dan menyediakan informasi yang benar. Negosiasi, penawaran, persetujuan desain, invoice, pembayaran, produksi, QC operasional, dan pengiriman berada di luar scope sistem MVP.

## 7. Business Requirements (BR)

| ID | Persyaratan bisnis | Prioritas |
|---|---|---|
| BR-01 | Website harus merepresentasikan empat kategori utama secara konsisten | P0 |
| BR-02 | Informasi produk dan kemampuan custom harus jelas sebelum konsultasi | P0 |
| BR-03 | Portofolio harus dikelompokkan per kategori dan dapat dipindai | P0 |
| BR-04 | CTA WhatsApp harus menjadi jalur konversi utama | P0 |
| BR-05 | Informasi segmen pelanggan harus mencakup delapan kelompok referensi | P0 |
| BR-06 | FAQ harus menjawab pertanyaan awal yang muncul pada referensi | P0 |
| BR-07 | Website harus memiliki halaman detail untuk konten produk yang ditautkan | P1 |
| BR-08 | Website harus mudah ditemukan mesin pencari melalui SEO teknis dan konten | P1 |
| BR-09 | Kontak dan klaim bisnis dikelola terpusat agar konsisten | P0 |
| BR-10 | Perubahan konten tidak boleh memerlukan perubahan kode untuk setiap teks/gambar sederhana jika CMS dipilih | P2 |
| BR-11 | Pengukuran klik CTA dan interaksi utama harus tersedia | P1 |

## 8. KPI dan Pengukuran

| KPI | Definisi | Cara ukur |
|---|---|---|
| CTA click-through rate | Sesi dengan klik WhatsApp dibagi total sesi | Analytics event `whatsapp_click` |
| Product engagement | Interaksi pada kartu/tautan produk | Event `product_click` |
| Gallery engagement | Klik/perbesaran gambar atau interaksi galeri | Event `gallery_open` / `gallery_image_open` |
| FAQ engagement | FAQ yang dibuka | Event `faq_open` |
| Organic traffic | Sesi dari pencarian organik | Search Console/analytics |
| Qualified inquiry | Konsultasi yang memenuhi kriteria lead internal | Rekap tim sales di luar website |

Target KPI ditetapkan kembali setelah baseline 30 hari. Data analytics tidak boleh digunakan untuk menyimpulkan kualitas lead tanpa pengukuran tindak lanjut oleh tim sales.

## 9. Kebijakan Konten dan Klaim

- Klaim pengalaman `10+ Tahun` berasal dari beranda target dan harus diverifikasi saat produksi.
- Nomor WhatsApp awal menggunakan nomor yang terhubung dari CTA beranda: `6285771062589`, tetapi wajib mendapat persetujuan owner.
- Salah satu artikel detail menampilkan nomor berbeda; seluruh nomor lama harus dinormalisasi setelah owner menentukan kontak resmi.
- Informasi alamat dan jam operasi hanya dipasang bila disahkan.
- Minimum pemesanan yang muncul pada sebagian artikel (contoh 24 pcs) tidak menjadi aturan global sampai disahkan per kategori.
- Jangan mengklaim harga termurah, garansi 100%, sertifikasi, atau kapasitas yang tidak memiliki bukti dan persetujuan.

## 10. Aturan dan Ketentuan Bisnis

1. Semua CTA harus mengarah ke nomor WhatsApp resmi yang sama, kecuali ada nomor kategori yang secara eksplisit disahkan.
2. Konten custom harus memberi ruang pembahasan, bukan menjanjikan semua permintaan pasti dapat dipenuhi.
3. Gambar portofolio harus benar-benar sesuai produk dan kategori.
4. Foto pelanggan, logo institusi, dan testimoni memerlukan izin publikasi.
5. Tidak ada harga tetap yang ditampilkan jika harga bergantung pada bahan, desain, ukuran, jumlah, serta tenggat.
6. Tidak ada pemesanan dianggap sah hanya karena pengunjung mengeklik WhatsApp.
7. Data pengunjung yang dikumpulkan dibatasi pada kebutuhan analytics yang disetujui.

## 11. Kebutuhan Operasional

- Manajemen menentukan PIC yang berwenang mengubah konten dan nomor WhatsApp.
- Tim marketing menyediakan foto asli dalam resolusi memadai dan daftar kategori.
- Tim sales menyetujui format pesan awal WhatsApp dan SLA tanggapan internal.
- Tim QC menyetujui narasi tentang pemeriksaan produk.
- Tim web melakukan backup, update dependensi, pemantauan uptime, dan perbaikan tautan.

## 12. Risiko Bisnis

| Risiko | Dampak | Tindakan |
|---|---|---|
| Lead tidak tertangani cepat | Konversi menurun | Tentukan PIC, jam respons, dan prosedur eskalasi |
| Kontak salah | Lead hilang | Satu konfigurasi kontak, uji semua CTA saat rilis |
| Informasi kapasitas/MOQ salah | Salah ekspektasi dan konflik | Validasi per kategori sebelum tayang |
| Foto tanpa izin | Risiko reputasi/hukum | Checklist hak aset dan persetujuan |
| Perubahan desain menghapus karakter referensi | Ketidakpuasan stakeholder | Gunakan matriks parity pada UAT |
| SEO tidak disiapkan | Visibilitas organik rendah | Metadata, URL, sitemap, canonical, dan redirect |

## 13. Kriteria Persetujuan Bisnis

Manajemen menyetujui hasil jika seluruh BR-01 sampai BR-09 terpenuhi, CTA menggunakan kontak yang sah, seluruh konten bisnis disahkan, visual mempertahankan struktur referensi, dan tidak ada fitur transaksi yang menimbulkan janji bisnis di luar kesepakatan.

## 14. Asumsi dan Keputusan Terbuka

- Hosting, stack, domain produksi, CMS, dan analytics vendor dipilih pada TRD.
- Konten artikel lama akan dipetakan dan diseleksi; tidak semua arsip historis otomatis perlu dimigrasikan.
- Kebijakan layanan, alamat, jam operasional, MOQ, dan kontak resmi masih harus disahkan owner.
