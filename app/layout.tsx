import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Nunito } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaplun.tech"),
  title: {
    default: "Kaplun — AI Creator-Led Growth Partner",
    template: "%s | Kaplun",
  },
  description:
    "Build systems to grow with creators. We pair state-of-the-art AI discovery with a senior in-house team to source, activate, and amplify high-ROI influencer campaigns.",
  keywords: [
    "Creator Marketing",
    "Influencer Sourcing Engine",
    "AI Growth Partner",
    "DTC Influencer Agency",
    "Affiliate Programme Management",
    "Creator Ad Creative",
    "TikTok & Meta Creator Ads",
    "Kaplun",
  ],
  authors: [{ name: "Kaplun", url: "https://kaplun.tech" }],
  creator: "Kaplun",
  publisher: "Kaplun",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://kaplun.tech",
  },
  openGraph: {
    title: "Kaplun — Build systems to grow with creators",
    description:
      "Infrastructure to source micro-influencers, launch seeding programs, and scale creator-led growth. Shortlists in 24 hours.",
    url: "https://kaplun.tech",
    siteName: "Kaplun",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaplun — Build systems to grow with creators",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaplun — Build systems to grow with creators",
    description:
      "Infrastructure to source micro-influencers, launch seeding programs, and scale creator-led growth.",
    images: ["/twitter-image.png"],
    creator: "@kapluntech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-64.png",
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://kaplun.tech/#organization",
      name: "Kaplun",
      url: "https://kaplun.tech",
      logo: "https://kaplun.tech/og-image.png",
      description:
        "The AI creator-led growth partner pairing AI discovery with senior in-house team execution for DTC brands.",
    },
    {
      "@type": "WebSite",
      "@id": "https://kaplun.tech/#website",
      url: "https://kaplun.tech",
      name: "Kaplun",
      publisher: {
        "@id": "https://kaplun.tech/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
