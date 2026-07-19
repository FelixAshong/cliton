import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { ComparePage } from "@/components/compare/ComparePage";

export const metadata = {
  title: "Compare — techassure",
  description: "Compare phones, laptops, and accessories side by side at techassure.",
};

export default function CompareRoute() {
  return (
    <>
      <Header />
      <main>
        <ComparePage />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
