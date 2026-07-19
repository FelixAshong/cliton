import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { FlyerSlideshow } from "@/components/home/FlyerSlideshow";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { BestDeals } from "@/components/home/BestDeals";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanners } from "@/components/home/PromoBanners";
import { ComputerAccessories } from "@/components/home/ComputerAccessories";
import { WideBanner } from "@/components/home/WideBanner";
import { ProductLists } from "@/components/home/ProductLists";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <FlyerSlideshow />
        <BrandMarquee />
        <BestDeals />
        <Categories />
        <FeaturedProducts />
        <PromoBanners />
        <ComputerAccessories />
        <WideBanner />
        <ProductLists />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
