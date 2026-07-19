"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Home,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import { compareProducts, type CompareProduct } from "@/data/compare";
import styles from "./ComparePage.module.css";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className={styles.stars} aria-label={`Rated ${rating} out of 5`}>
      <span className={styles.starRow} aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            fill={i < Math.round(rating) ? "#EBC80C" : "none"}
            color="#EBC80C"
          />
        ))}
      </span>
      <span className={styles.reviewCount}>
        ({reviews.toLocaleString("en-US")})
      </span>
    </div>
  );
}

export function ComparePage() {
  const [products, setProducts] = useState<CompareProduct[]>(compareProducts);

  function removeProduct(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  const cols = products.length;

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={`container ${styles.breadcrumbInner}`}>
          <Link href="/" className={styles.crumb}>
            <Home size={18} />
            Home
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>Compare</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        {cols === 0 ? (
          <div className={styles.empty}>
            <p>No products to compare.</p>
            <Link href="/shop" className={styles.emptyLink}>
              Browse shop
            </Link>
          </div>
        ) : (
          <div
            className={styles.table}
            style={{ "--cols": cols } as CSSProperties}
            role="table"
            aria-label="Product comparison"
          >
            <div className={styles.products} role="row">
              <div className={styles.labelCell} role="rowheader" />
              {products.map((product) => (
                <div key={product.id} className={styles.product} role="cell">
                  <button
                    type="button"
                    className={styles.remove}
                    onClick={() => removeProduct(product.id)}
                    aria-label={`Remove ${product.title} from comparison`}
                  >
                    <X size={14} strokeWidth={2.5} />
                  </button>
                  <div className={styles.imageWrap}>
                    <Image
                      src={product.image}
                      alt=""
                      width={272}
                      height={272}
                      className={styles.image}
                    />
                  </div>
                  <p className={styles.title}>{product.title}</p>
                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={
                        product.inStock
                          ? styles.addToCart
                          : styles.addToCartDisabled
                      }
                      disabled={!product.inStock}
                    >
                      Add to cart
                      <ShoppingCart size={20} strokeWidth={1.75} aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={
                        product.inStock
                          ? styles.wishlist
                          : styles.wishlistMuted
                      }
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        size={24}
                        strokeWidth={1.5}
                        color={product.inStock ? "#FA8232" : "#929FA5"}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.row} ${styles.rowAlt}`} role="row">
              <div className={styles.label} role="rowheader">
                Customer feedback:
              </div>
              {products.map((p) => (
                <div key={p.id} className={styles.cell} role="cell">
                  <Stars rating={p.rating} reviews={p.reviews} />
                </div>
              ))}
            </div>

            <div className={styles.row} role="row">
              <div className={styles.label} role="rowheader">
                Price:
              </div>
              {products.map((p) => (
                <div key={p.id} className={`${styles.cell} ${styles.price}`} role="cell">
                  {formatPrice(p.price)}
                </div>
              ))}
            </div>

            <div className={`${styles.row} ${styles.rowAlt}`} role="row">
              <div className={styles.label} role="rowheader">
                Sold by:
              </div>
              {products.map((p) => (
                <div key={p.id} className={styles.cell} role="cell">
                  {p.soldBy}
                </div>
              ))}
            </div>

            <div className={styles.row} role="row">
              <div className={styles.label} role="rowheader">
                Brand:
              </div>
              {products.map((p) => (
                <div key={p.id} className={styles.cell} role="cell">
                  {p.brand}
                </div>
              ))}
            </div>

            <div className={`${styles.row} ${styles.rowAlt}`} role="row">
              <div className={styles.label} role="rowheader">
                Model:
              </div>
              {products.map((p) => (
                <div key={p.id} className={styles.cell} role="cell">
                  {p.model}
                </div>
              ))}
            </div>

            <div className={styles.row} role="row">
              <div className={styles.label} role="rowheader">
                Stock status:
              </div>
              {products.map((p) => (
                <div
                  key={p.id}
                  className={[
                    styles.cell,
                    styles.stock,
                    p.inStock ? styles.inStock : styles.outOfStock,
                  ].join(" ")}
                  role="cell"
                >
                  {p.inStock ? "IN STOCK" : "OUT OF STOCK"}
                </div>
              ))}
            </div>

            <div className={`${styles.row} ${styles.rowAlt}`} role="row">
              <div className={styles.label} role="rowheader">
                Size:
              </div>
              {products.map((p) => (
                <div key={p.id} className={styles.cell} role="cell">
                  {p.size}
                </div>
              ))}
            </div>

            <div className={styles.row} role="row">
              <div className={styles.label} role="rowheader">
                Weight:
              </div>
              {products.map((p) => (
                <div key={p.id} className={styles.cell} role="cell">
                  {p.weight}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
