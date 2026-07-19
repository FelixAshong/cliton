import { listProducts } from "@/data/products";
import { ProductCard } from "./ProductCard";
import styles from "./ProductLists.module.css";

const columns = [
  { title: "FLASH SALE TODAY", items: listProducts.flashSale },
  { title: "BEST SELLERS", items: listProducts.bestSellers },
  { title: "TOP RATED", items: listProducts.topRated },
  { title: "NEW ARRIVAL", items: listProducts.newArrival },
];

export function ProductLists() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className={`container ${styles.grid}`}>
        {columns.map((col) => (
          <div key={col.title} className={styles.col}>
            <h3>{col.title}</h3>
            <div className={styles.items}>
              {col.items.map((product) => (
                <ProductCard key={product.id} product={product} variant="compact" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
