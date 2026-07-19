import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { TrackOrderDetails } from "@/components/track-order/TrackOrderDetails";

export const metadata = {
  title: "Track Order — techassure",
  description: "Track your techassure order status and delivery progress.",
};

export default function TrackOrderPage() {
  return (
    <>
      <Header />
      <main>
        <TrackOrderDetails />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
