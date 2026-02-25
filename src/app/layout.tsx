import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tickchain - Own Your Tickets On Chain",
  description: "Secure, fraud-proof, blockchain-powered event ticketing system. Buy, verify, and resell tickets with complete transparency.",
  keywords: "blockchain ticketing, NFT tickets, event management, Web3, cryptocurrency",
  authors: [{ name: "Tickchain" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tickchain.io",
    title: "Tickchain - Own Your Tickets On Chain",
    description: "Secure, fraud-proof, blockchain-powered event ticketing system.",
    images: [
      {
        url: "https://tickchain.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tickchain",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
