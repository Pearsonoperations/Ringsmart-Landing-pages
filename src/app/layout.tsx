import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://ringsmart.tech";
const siteName = "RingSmart";
const siteTitle = "RingSmart — AI Boxing Training App | Precision Training for Real Fighters";
const siteDescription =
  "RingSmart is the AI-powered boxing training app. Get personalised weakness diagnosis, opponent gameplans, nutrition timing, fight-lab analysis, and 13-week conditioning programmes — all in one app. Download RingSmart today.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "ringsmart",
    "ring smart",
    "ringsmart app",
    "ringsmart boxing",
    "ringsmart training",
    "boxing",
    "boxing training",
    "boxing training app",
    "boxing app",
    "AI boxing",
    "AI boxing coach",
    "fight training",
    "boxing drills",
    "boxing conditioning",
    "boxing workout app",
    "boxing fight analysis",
    "opponent gameplan",
    "boxing nutrition",
    "fight lab",
    "boxing weakness analysis",
    "combat sports app",
    "boxing coach app",
    "personalised boxing training",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1536,
        height: 1024,
        alt: "RingSmart — AI Boxing Training App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero-banner.png"],
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
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
  other: {
    "theme-color": "#3b82f6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
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
