import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { CartPage } from "@/components/cart/CartPage";

export const metadata = {
  title: "Shopping Cart — techassure",
  description: "Review items in your cart and proceed to checkout.",
};

export default function CartRoute() {
  return (
    <>
      <Header />
      <main>
        <CartPage />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
