import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import styles from "./FeaturedProducts.module.css";

const tabs = ["All Product", "SmartPhone", "Laptop", "Headphone", "TV"];

type Props = {
  title?: string;
  bannerSide?: "left" | "right";
  banner?: {
    eyebrow: string;
    title: string;
    price?: string;
    image: string;
    tone?: "yellow" | "orange";
  };
};

export function FeaturedProducts({
  title = "Featured Products",
  bannerSide = "left",
  banner = {
    eyebrow: "COMPUTER & ACCESSORIES",
    title: "Accessories",
    price: "32% Discount",
    image: "/images/products/macbook-m4.png",
    tone: "yellow",
  },
}: Props) {
  const bannerEl = (
    <aside className={`${styles.banner} ${styles[banner.tone ?? "yellow"]}`}>
      <p className={styles.eyebrow}>{banner.eyebrow}</p>
      <h3>{banner.title}</h3>
      {banner.price && (
        <p className={styles.bannerPrice}>
          {banner.price}
          <span> for this month only</span>
        </p>
      )}
      <a href="#products" className="btn btn-primary">
        Shop Now <ArrowRight size={18} />
      </a>
      <div className={styles.bannerImage}>
        <Image src={banner.image} alt="" width={240} height={240} />
      </div>
    </aside>
  );

  return (
    <section className="section" id="products" style={{ paddingTop: 24 }}>
      <div className={`container ${styles.layout}`}>
        {bannerSide === "left" && bannerEl}
        <div className={styles.main}>
          <div className={styles.head}>
            <h2 className="section-title">{title}</h2>
            <div className={styles.tabs}>
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  type="button"
                  className={i === 0 ? styles.activeTab : undefined}
                >
                  {tab}
                </button>
              ))}
              <a href="#" className="btn btn-link">
                Browse All Product <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        {bannerSide === "right" && bannerEl}
      </div>
    </section>
  );
}
