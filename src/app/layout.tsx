import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "./data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Terapkan tema sebelum paint pertama agar tidak berkedip (FOUC)
const themeInit = `try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://konveksi.toko-abi.com"),
  title: {
    default: `${SITE.tagline} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "konveksi",
    "konveksi KOTABI",
    "jas almamater custom",
    "toga wisuda",
    "seragam kerja",
    "seragam sekolah",
    "seragam custom",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    locale: "id_ID",
    type: "website",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
