import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Providers from "@/components/layout/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Website Co — Custom Trade Websites",
  description:
    "Professional, custom-designed websites for UK tradespeople. Get more enquiries with a tailored online presence in one week.",
  metadataBase: new URL('https://prowebsiteco.com'),
  openGraph: {
    title: "Pro Website Co — Custom Trade Websites",
    description: "Professional, custom-designed websites for UK tradespeople. Get more enquiries with a tailored online presence in one week.",
    url: 'https://prowebsiteco.com',
    siteName: 'Pro Website Co',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pro Website Co - Professional Trade Websites',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pro Website Co — Custom Trade Websites",
    description: "Professional, custom-designed websites for UK tradespeople. Get more enquiries with a tailored online presence in one week.",
    images: ['/assets/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XMC4RYWEJ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XMC4RYWEJ8');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

