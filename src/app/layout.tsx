import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteSplash } from "@/components/site-splash";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Playtime Namibia | Empowering Youth Through Sports in Walvis Bay",
    template: "%s | Playtime Namibia",
  },
  description: site.description,
  keywords: [
    "Playtime Namibia",
    "youth sport Namibia",
    "Walvis Bay charity",
    "youth development",
    "children's soccer",
    "cricket Namibia",
    "athletics",
    "NGO Walvis Bay",
    "Kuisebmond",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NA",
    url: site.url,
    siteName: site.name,
    title: "Playtime Namibia | Empowering Youth Through Sports",
    description: site.description,
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "Playtime Namibia - The Playtime Sport Development Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Playtime Namibia | Empowering Youth Through Sports",
    description: site.description,
    images: ["/images/og-share.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  // WCAG 1.4.4: pinch-zoom stays enabled (audit H3 fix)
  width: "device-width",
  initialScale: 1,
  themeColor: "#081c2a",
};

const ngoJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: site.legalName,
  alternateName: "Playtime Namibia",
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  description: site.description,
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Street",
    addressLocality: "Walvis Bay",
    addressCountry: "NA",
  },
  telephone: site.phone,
  email: site.email,
  sameAs: [site.facebook],
  areaServed: {
    "@type": "City",
    name: "Walvis Bay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${inter.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoJsonLd) }}
        />
        <SiteSplash />
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
