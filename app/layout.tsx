import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E Smoke & Vapor | Reading, PA",
  description:
    "Reading's premier smoke & vape shop. Vapes, e-cigs, cigars, pipes, tobacco, CBD, edibles, glass accessories, and lotto. Located at 1915 N 5th Street Hwy, Reading, PA 19605.",
  keywords: ["smoke shop", "vape shop", "Reading PA", "e-cig", "cigars", "CBD", "tobacco"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${ibmPlexSans.variable} scroll-smooth`}
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
