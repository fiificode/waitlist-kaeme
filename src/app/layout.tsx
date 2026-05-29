import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kaeme.com"),
  title: "Kae Me - Personal Document & Milestone Reminders",

  description:
    "Never forget a renewal or milestone. Kae Me keeps track of your passport, driver's license, anniversaries, and key documents, sending you timely text and email reminders before they're due.",
  keywords: [
    "reminders",
    "document tracker",
    "passport renewal",
    "drivers license renewal",
    "anniversaries",
    "SMS reminders",
    "email alerts",
    "milestone tracker",
    "Kae Me",
    "waitlist",
  ],
  authors: [{ name: "Kae Me Inc." }],
  creator: "Kae Me",
  publisher: "Kae Me",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaeme.com",
    title: "Kae Me - Personal Document & Milestone Reminders",
    description:
      "Never forget a renewal or milestone. Kae Me keeps track of your passport, driver's license, anniversaries, and key documents, sending you timely text and email reminders before they're due.",
    siteName: "Kae Me",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Kae Me - Document & Milestone Reminders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kae Me - Personal Document & Milestone Reminders",
    description:
      "Never forget a renewal or milestone. Kae Me tracks your passport, driver's license, anniversaries, and key documents, sending you text/email alerts.",
    images: ["/hero-image.png"],
    creator: "@kaeme.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
