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
  title: "techassure — Ghana Tech Store",
  description:
    "techassure — buy phones, laptops, accessories and gadgets with delivery across Accra and Ghana.",
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
