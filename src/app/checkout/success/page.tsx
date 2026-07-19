import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { CheckoutSuccessPage } from "@/components/checkout/CheckoutSuccessPage";

export const metadata = {
  title: "Order placed — techassure",
  description: "Your techassure order was placed successfully.",
};

export default function CheckoutSuccessRoute() {
  return (
    <>
      <Header />
      <main>
        <CheckoutSuccessPage />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
