import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kakhovka Dam Breach",
  description: "Timeline of the Kakhovka Dam breach.",
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KZE0WCMGQV"
          strategy="afterInteractive"
        />
        <Script src="/init-gtag.js" />
      </body>
    </html>
  );
}
