import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CLICON Ghana — Tech Shop & Electronics Store",
  description:
    "CLICON Ghana — buy phones, laptops, accessories and gadgets with delivery across Accra and Ghana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH" className={publicSans.variable}>
      <body>{children}</body>
    </html>
  );
}
