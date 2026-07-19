import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { QuickViewProvider } from "@/components/product/QuickViewProvider";
import { RegisterSW } from "@/components/pwa/RegisterSW";
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
  applicationName: "techassure",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "techassure",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#7b2ff7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GH" className={outfit.variable}>
      <body>
        <QuickViewProvider>{children}</QuickViewProvider>
        <RegisterSW />
      </body>
    </html>
  );
}
