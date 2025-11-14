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
  title: "Damasukma | Showcase Page",
  description: "Software & Cloud Engineer who loves building products and systems end-to-end.",
  openGraph: {
    title: "Damasukma | Showcase Page",
    description: "Software & Cloud Engineer who loves building products and systems end-to-end.",
    url: "/picture-dama-circle.png",
    // siteName: "Damasukma.com",
    images: [
      {
        url: "/picture-dama-circle.png",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damasukma | Showcase Page",
    description: "Software & Cloud Engineer who loves building products and systems end-to-end.",
    images: ["/picture-dama-circle.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
