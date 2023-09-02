import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kakhovka Dam Breach",
  description: [
    "What led to Kakhovka Dam breach in June 2023? This article investigates and summarises ",
    "circumstances preceding the ecological and humanitarian catastrophe in southern Ukraine, ",
    "during russian occupation in 2022-2023. #StandWithUkraine",
  ].join(""),
  openGraph: {
    images: "/kakhovka-dam-breach-og.jpeg",
  },
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
      <body>
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
