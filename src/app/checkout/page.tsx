import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { CheckoutPage } from "@/components/checkout/CheckoutPage";

export const metadata = {
  title: "Checkout — techassure",
  description:
    "Complete your order for phones, laptops, and accessories at techassure.",
};

export default function CheckoutRoute() {
  return (
    <>
      <Header />
      <main>
        <CheckoutPage />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
