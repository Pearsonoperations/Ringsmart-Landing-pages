import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RingSmart — Precision Training for Real Fighters",
  description:
    "AI-powered boxing training app. Personalised weakness diagnosis, opponent gameplans, nutrition timing, and 13-week conditioning — all in one app.",
  keywords: [
    "boxing",
    "boxing training",
    "boxing app",
    "fight training",
    "boxing drills",
    "boxing conditioning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
