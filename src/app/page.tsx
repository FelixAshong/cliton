import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { BestDeals } from "@/components/home/BestDeals";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanners } from "@/components/home/PromoBanners";
import { WideBanner } from "@/components/home/WideBanner";
import { ProductLists } from "@/components/home/ProductLists";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <BestDeals />
        <Categories />
        <FeaturedProducts />
        <PromoBanners />
        <FeaturedProducts
          title="Computer Accessories"
          bannerSide="right"
          banner={{
            eyebrow: "Xiaomi Exclusive",
            title: "Xiaomi 11T 128GB",
            price: "GH₵4,490",
            image: "/images/hero/pixel.png",
            tone: "orange",
          }}
        />
        <WideBanner />
        <ProductLists />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
