import type { MetadataRoute } from "next";

const THEME = "#0b0f1a";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KOTABI — Konveksi Pakaian Custom",
    short_name: "KOTABI",
    description:
      "Konveksi KOTABI — produksi jas almamater, toga wisuda, seragam kerja, dan seragam sekolah.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: THEME,
    theme_color: THEME,
    lang: "id",
    categories: ["business", "shopping"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
