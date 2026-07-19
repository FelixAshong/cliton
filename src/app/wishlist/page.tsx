import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { WishlistPage } from "@/components/wishlist/WishlistPage";

export const metadata = {
  title: "Wishlist — techassure",
  description: "Save products you love and add them to your cart when ready.",
};

export default function WishlistRoute() {
  return (
    <>
      <Header />
      <main>
        <WishlistPage />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
