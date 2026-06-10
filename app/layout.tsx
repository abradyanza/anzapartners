import type { Metadata } from "next";
import { GeistSans, GeistMono } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anzapartners.com"),
  title: {
    default: "Anza Partners — Private Investment Firm",
    template: "%s | Anza Partners",
  },
  description:
    "Anza Partners is a private investment firm focused on investments in lower middle market companies across vertical software, tech-enabled services, and business services.",
  openGraph: {
    title: "Anza Partners — Private Investment Firm",
    description:
      "Anza Partners is a private investment firm focused on investments in lower middle market companies across vertical software, tech-enabled services, and business services.",
    url: "https://anzapartners.com",
    siteName: "Anza Partners",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230A1628'/%3E%3Ctext x='50%25' y='54%25' font-family='Georgia,serif' font-size='42' font-weight='600' text-anchor='middle' fill='%23ffffff' dominant-baseline='middle'%3EA%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh flex flex-col bg-canvas text-ink antialiased">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
