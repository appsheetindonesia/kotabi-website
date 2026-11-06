export const SITE = {
  name: "KOTABI",
  legalName: "Konveksi Toko Abi",
  tagline: "Buat Identitas. Pakai KOTABI.",
  description:
    "Konveksi KOTABI — produksi jas almamater, toga wisuda, seragam kerja, dan seragam sekolah.",
  whatsappNumber: "6285771062589",
  whatsappMessage:
    "Halo KOTABI, saya ingin konsultasi produksi. Jenis produk: ",
  email: "info@kotabi.com",
  copyright: "© KOTABI • Custom Production • Quality Control",
} as const;

export const NAV = [
  { label: "Produk", href: "#produk" },
  { label: "Galeri", href: "#galeri" },
  { label: "Proses", href: "#proses" },
  { label: "FAQ", href: "#faq" },
] as const;

export function waLink(message: string = SITE.whatsappMessage) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  href: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "jas-almamater",
    name: "Jas Almamater",
    eyebrow: "01 — CAMPUS IDENTITY",
    description:
      "Custom warna, bordir, logo, model, dan kebutuhan kampus/organisasi.",
    image: "/img/produsen-jas-almamater.jpg",
    href: "https://konveksi.toko-abi.com/2026/06/04/konveksi-jas-almamater-custom-logo/",
  },
  {
    slug: "toga-wisuda",
    name: "Toga Wisuda",
    eyebrow: "02 — GRADUATION",
    description:
      "Untuk kampus, sekolah, lembaga, dan kebutuhan acara wisuda.",
    image: "/img/pusat-konveksi-toga-wisuda.jpg",
    href: "https://konveksi.toko-abi.com/2026/06/19/konveksi-toga-wisuda-terpercaya-tangerang/",
  },
  {
    slug: "seragam-kerja",
    name: "Seragam Kerja",
    eyebrow: "03 — WORKWEAR",
    description:
      "Untuk kantor, lapangan, perusahaan, komunitas, dan tim operasional.",
    image: "/img/Konveksi-Seragam-Kerja-No.1.jpeg",
    href: "https://konveksi.toko-abi.com/2026/01/05/konveksi-seragam-kerja-sibolga/",
  },
  {
    slug: "seragam-sekolah",
    name: "Seragam Sekolah",
    eyebrow: "04 — SCHOOLWEAR",
    description:
      "Produksi seragam untuk kebutuhan sekolah dan institusi pendidikan.",
    image: "/img/Konveksi-Seragam-Sekolah-Terdekat-Bekasi.jpg",
    href: "https://konveksi.toko-abi.com/2026/05/Distributor-Seragam-Sekolah-Terpercaya-e1780107838663.jpg",
  },
];

export type GalleryGroup = {
  title: string;
  detailHref: string;
  images: { src: string; alt: string }[];
};

export const GALLERY: GalleryGroup[] = [
  {
    title: "Toga Wisuda",
    detailHref:
      "https://konveksi.toko-abi.com/2026/06/19/konveksi-toga-wisuda-terpercaya-tangerang/",
    images: [
      {
        src: "/img/konveksi-toga-wisuda-terpercaya.jpg",
        alt: "Toga wisuda produksi KOTABI",
      },
      {
        src: "/img/pusat-konveksi-toga-wisuda.jpg",
        alt: "Toga wisuda untuk acara wisuda kampus",
      },
      {
        src: "/img/produsen-toga-wisuda-murah.jpg",
        alt: "Produsen toga wisuda untuk acara wisuda",
      },
      {
        src: "/img/tempat-bikin-toga-wisuda-murah.jpg",
        alt: "Pembuatan toga wisuda untuk peserta wisuda",
      },
      {
        src: "/img/vendor-toga-wisuda-murah.jpg",
        alt: "Vendor toga wisuda untuk kelompok",
      },
      {
        src: "/img/konveksi-toga-wisuda-bogor-garansi-kualitas.jpg",
        alt: "Toga wisuda dengan garansi kualitas",
      },
    ],
  },
  {
    title: "Jas Almamater",
    detailHref:
      "https://konveksi.toko-abi.com/2026/06/04/konveksi-jas-almamater-custom-logo/",
    images: [
      {
        src: "/img/konveksi-jas-almamater-berkualitas.jpg",
        alt: "Jas almamater custom logo kampus",
      },
      {
        src: "/img/produsen-jas-almamater.jpg",
        alt: "Produsen jas almamater KOTABI",
      },
      {
        src: "/img/Produsen-Jas-Almamater-Modern.jpg",
        alt: "Jas almamater modern untuk lulusan kampus",
      },
      {
        src: "/img/Konveksi-Jas-Almamater-Warna-Merah-Maroon.jpg",
        alt: "Jas almamater warna maroon",
      },
      {
        src: "/img/Jas-Almamater-Warna-Biru-Muda-Terdekat-Jakarta.jpg",
        alt: "Jas almamater warna biru muda",
      },
      {
        src: "/img/Konveksi-Jas-Almamater-Warna-Biru-Muda-di-Depok.jpg",
        alt: "Jas almamater biru muda untuk alumni Depok",
      },
    ],
  },
  {
    title: "Seragam Kerja",
    detailHref:
      "https://konveksi.toko-abi.com/2026/01/05/konveksi-seragam-kerja-sibolga/",
    images: [
      {
        src: "/img/Konveksi-Seragam-Kerja-No.1.jpeg",
        alt: "Seragam kerja kantor produksi KOTABI",
      },
      {
        src: "/img/Seragam-Kerja-Lapangan-Tangerang-Selatan.jpeg",
        alt: "Seragam kerja lapangan Tangerang Selatan",
      },
      {
        src: "/img/konveksi-seragam-kerja-banjar.jpg",
        alt: "Seragam kerja Banjar",
      },
      {
        src: "/img/konveksi-seragam-kerja-bontang.jpg",
        alt: "Seragam kerja Pontianak",
      },
      {
        src: "/img/konveksi-seragam-kerja-cimahi.jpg",
        alt: "Seragam kerja Cimahi",
      },
      {
        src: "/img/konveksi-seragam-kerja-jakarta-timur.jpg",
        alt: "Seragam kerja Jakarta Timur",
      },
      {
        src: "/img/konveksi-seragam-kerja-manado.jpg",
        alt: "Seragam kerja Manado",
      },
      {
        src: "/img/konveksi-seragam-kerja-tidore-kepulauan.jpg",
        alt: "Seragam kerja Tidore Kepulauan",
      },
    ],
  },
  {
    title: "Seragam Sekolah",
    detailHref:
      "https://konveksi.toko-abi.com/2026/05/Distributor-Seragam-Sekolah-Terpercaya-e1780107838663.jpg",
    images: [
      {
        src: "/img/Konveksi-Seragam-Sekolah-2026.jpg",
        alt: "Seragam sekolah untuk tahun ajaran 2026",
      },
      {
        src: "/img/Konveksi-Seragam-Sekolah-Terdekat-Bekasi.jpg",
        alt: "Seragam sekolah di wilayah Bekasi",
      },
      {
        src: "/img/Konveksi-seragam-sekolah-kendari.jpg",
        alt: "Seragam sekolah Kendari",
      },
      {
        src: "/img/Konveksi-seragam-sekolah-manado.jpg",
        alt: "Seragam sekolah Manado",
      },
      {
        src: "/img/Konveksi-seragam-sekolah-mataram.jpg",
        alt: "Seragam sekolah Mataram",
      },
      {
        src: "/img/Konveksi-seragam-sekolah-parepare.jpg",
        alt: "Seragam sekolah Parepare",
      },
      {
        src: "/img/Konveksi-seragam-sekolah-samarinda.jpg",
        alt: "Seragam sekolah Samarinda",
      },
      {
        src: "/img/Konveksi-seragam-sekolah-tidore-kepulauan.jpg",
        alt: "Seragam sekolah Tidore Kepulauan",
      },
      {
        src: "/img/Distributor-Seragam-Sekolah-Terpercaya-e1780107838663.jpg",
        alt: "Distributor seragam sekolah untuk institusi",
      },
      {
        src: "/img/Harga-Seragam-Sekolah-Sd-Smp-Sma-Terbaru-e1780132226993.jpg",
        alt: "Seragam sekolah SD, SMP, dan SMA terbaru",
      },
    ],
  },
];

export const VALUES = [
  {
    number: "01",
    title: "Custom",
    description:
      "Model, warna, bahan, ukuran, logo, dan detail produksi bisa disesuaikan.",
  },
  {
    number: "02",
    title: "QC",
    description:
      "Kontrol kualitas menjadi bagian dari alur produksi, bukan sekadar tahap akhir.",
  },
  {
    number: "03",
    title: "Komunikatif",
    description:
      "Brief dan kebutuhan produksi dibahas lebih dulu agar arah pengerjaan jelas.",
  },
  {
    number: "04",
    title: "Kelompok",
    description:
      "Cocok untuk kampus, sekolah, perusahaan, organisasi, komunitas, dan instansi.",
  },
];

export const STATS = [
  { value: "10+", label: "Tahun pengalaman" },
  { value: "04", label: "Kategori utama" },
  { value: "QC", label: "Quality control" },
  { value: "1:1", label: "Konsultasi kebutuhan" },
];

export const AUDIENCES = [
  "Kampus",
  "Sekolah",
  "Perusahaan",
  "Organisasi",
  "Instansi",
  "Komunitas",
  "Event",
  "Group",
];

export const FAQS = [
  {
    question: "Bisa custom model dan warna?",
    answer:
      "Bisa. Detail seperti model, warna, logo, ukuran, dan kebutuhan produksi dibahas saat konsultasi.",
  },
  {
    question: "KOTABI menerima produksi untuk kampus?",
    answer:
      "Ya. Jas almamater dan toga wisuda dapat disiapkan untuk kebutuhan kampus, organisasi, maupun acara wisuda.",
  },
  {
    question: "Bisa produksi seragam kerja?",
    answer:
      "Bisa. Kebutuhan seragam kantor, lapangan, perusahaan, komunitas, dan tim dapat dikonsultasikan.",
  },
  {
    question: "Bagaimana cara mulai pesan?",
    answer:
      "Kirim kebutuhan dasar melalui WhatsApp. Tim KOTABI dapat membantu mengarahkan spesifikasi berikutnya.",
  },
];

export const MARQUEE_ITEMS = [
  "Jas Almamater",
  "Toga Wisuda",
  "Seragam Kerja",
  "Seragam Sekolah",
  "Produksi Custom",
  "Quality Control",
];
