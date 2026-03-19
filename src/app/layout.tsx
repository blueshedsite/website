import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Blue Shed Group | Personal & Leadership Transformation",
  description:
    "Empowering professionals to build flexible, purpose-driven careers through personal growth, leadership development, and mindset education.",
  openGraph: {
    title: "The Blue Shed Group | Personal & Leadership Transformation",
    description:
      "Empowering professionals to build flexible, purpose-driven careers through personal growth, leadership development, and mindset education.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
