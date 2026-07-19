import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { ShopPage } from "@/components/shop/ShopPage";

export const metadata = {
  title: "Shop — techassure",
  description: "Browse phones, laptops, accessories and more at techassure.",
};

export default function ShopRoute() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div className="container" style={{ padding: 48 }}>Loading shop…</div>}>
          <ShopPage />
        </Suspense>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
