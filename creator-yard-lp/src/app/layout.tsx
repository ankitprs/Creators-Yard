import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creator Yard",
  description: "creatoryards.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-87L2JQC8V7" />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-87L2JQC8V7');
          
          `}
      </Script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
