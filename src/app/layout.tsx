import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

const title = "Kakhovka Dam Breach";
const description = [
    "What led to the Kakhovka Dam breach in June 2023? This article investigates and ",
    "summarises circumstances preceding the ecological and humanitarian catastrophe ",
    "in southern Ukraine, during russian occupation in 2022-2023. #StandWithUkraine",
  ].join("");

const images = "https://kakhovka-dam-breach.kospalchyk.me/kakhovka-dam-breach-og.jpeg";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "article",
    images,
  },
  twitter: {
    card: "summary_large_image",
    images,
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
