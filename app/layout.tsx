import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/components/layout/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Website Co — Custom Trade Websites",
  description:
    "Professional, custom-designed websites for UK tradespeople. Get more enquiries with a tailored online presence in 48 hours.",
  icons: {
    icon: "/assets/prowebsitecologo.svg",
    shortcut: "/assets/prowebsitecologo.svg",
    apple: "/assets/prowebsitecologo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

