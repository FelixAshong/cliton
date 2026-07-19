import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SiteGate } from "@/components/layout/SiteGate";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "techassure — Phones, Laptops & Accessories",
  description:
    "Phones, laptops and accessories. We swap, buy & sell. Call 0572273425. Located at Sel Filling Station, UPSA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH" className={outfit.variable}>
      <body>
        <SiteGate />
        {children}
      </body>
    </html>
  );
}
