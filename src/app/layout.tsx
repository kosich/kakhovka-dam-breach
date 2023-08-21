import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Kakhovka Dam Breach",
  description:
    "What lead to Kakhovka Dam breach in June 2023? An article with a detailed timeline, " +
    "investigating events at the Kakhovka Dam, during russian occupation in 2022-2023.",
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
