"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { computerAccessories } from "@/data/products";
import { ProductCard } from "./ProductCard";
import styles from "./ComputerAccessories.module.css";

const tabs = [
  { id: "all", label: "All Product" },
  { id: "phone", label: "SmartPhone" },
  { id: "laptop", label: "Laptop" },
  { id: "headphone", label: "Headphone" },
  { id: "tv", label: "TV" },
] as const;

export function ComputerAccessories() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("all");

  return (
    <section className={styles.section} id="accessories">
      <div className={`container ${styles.layout}`}>
        <div className={styles.main}>
          <div className={styles.head}>
            <h2 className={styles.title}>Computer Accessories</h2>
            <nav className={styles.tabs} aria-label="Accessory filters">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={active === tab.id ? styles.activeTab : styles.tab}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
            <a href="#products" className={styles.browse}>
              Browse All Product <ArrowRight size={18} />
            </a>
          </div>

          <div className={styles.grid}>
            {computerAccessories.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <aside className={styles.promos}>
          <article className={styles.promoPrimary}>
            <p className={styles.promoEyebrow}>Xiaomi Exclusive Offer</p>
            <h3>Xiaomi 11T 128GB</h3>
            <p className={styles.promoPrice}>
              <span>GH₵4,490</span>
              <small>for this month only</small>
            </p>
            <a href="#products" className="btn btn-primary">
              Shop Now <ArrowRight size={18} />
            </a>
            <div className={styles.promoImage}>
              <Image
                src="/images/hero/pixel.png"
                alt="Xiaomi 11T"
                width={220}
                height={280}
              />
            </div>
          </article>

          <article className={styles.promoSecondary}>
            <div className={styles.promoSecondaryText}>
              <p className={styles.promoEyebrowDark}>Summer Sale</p>
              <h4>37% OFF</h4>
              <p>Free shipping on accessories over GH₵500</p>
              <a href="#deals" className={styles.shopLink}>
                Shop Now <ArrowRight size={16} />
              </a>
            </div>
            <div className={styles.promoSecondaryImage}>
              <Image
                src="/images/categories/headphones.png"
                alt=""
                width={120}
                height={120}
              />
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
