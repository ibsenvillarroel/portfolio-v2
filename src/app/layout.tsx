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
  title: {
    default: "Ibsen Villarroel | Insurance Technology Consultant",
    template: "%s | Ibsen Villarroel",
  },
  description:
    "Senior Insurance Technology Consultant specializing in Oracle PL/SQL, core insurance systems, product configuration, business analysis, data and AI.",
  keywords: [
    "Insurance Technology",
    "Oracle PL/SQL",
    "Core Insurance Systems",
    "Insurance Product Configuration",
    "Business Analysis",
    "Data and AI",
    "Ibsen Villarroel",
  ],
  authors: [{ name: "Ibsen Villarroel" }],
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