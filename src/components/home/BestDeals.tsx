import { ArrowRight } from "lucide-react";
import { bestDeals } from "@/data/products";
import { ProductCard } from "./ProductCard";
import styles from "./BestDeals.module.css";

export function BestDeals() {
  const featured = bestDeals.find((p) => p.featured)!;
  const others = bestDeals.filter((p) => !p.featured);

  return (
    <section className="section" id="deals">
      <div className="container">
        <div className="section-head">
          <div className={styles.heading}>
            <h2 className="section-title">Best Deals</h2>
            <div className={styles.timer}>
              <span>Deals ends in</span>
              <div className={styles.time}>
                <span>16d</span>
                <span>:</span>
                <span>21h</span>
                <span>:</span>
                <span>57m</span>
                <span>:</span>
                <span>23s</span>
              </div>
            </div>
          </div>
          <a href="/shop" className="btn btn-link">
            Browse All Product <ArrowRight size={18} />
          </a>
        </div>

        <div className={styles.grid}>
          <div className={styles.featured}>
            <ProductCard product={featured} variant="featured" />
          </div>
          <div className={styles.list}>
            {others.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
