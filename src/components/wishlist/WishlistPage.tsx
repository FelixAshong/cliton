"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, ShoppingCart, X } from "lucide-react";
import { wishlistItems, type WishlistItem } from "@/data/wishlist";
import styles from "./WishlistPage.module.css";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

export function WishlistPage() {
  const [items, setItems] = useState<WishlistItem[]>(wishlistItems);

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={`container ${styles.breadcrumbInner}`}>
          <Link href="/" className={styles.crumb}>
            <Home size={18} />
            Home
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>Wishlist</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h1>Wishlist</h1>
          </div>

          <div className={styles.tableHead} aria-hidden={items.length === 0}>
            <span className={styles.colProducts}>Products</span>
            <span className={styles.colPrice}>Price</span>
            <span className={styles.colStock}>Stock Status</span>
            <span className={styles.colActions}>Actions</span>
          </div>

          {items.length === 0 ? (
            <div className={styles.empty}>
              <p>Your wishlist is empty.</p>
              <Link href="/shop" className={styles.addBtn}>
                Browse products
                <ShoppingCart size={20} strokeWidth={2} aria-hidden />
              </Link>
            </div>
          ) : (
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item.id} className={styles.row}>
                  <div className={styles.product}>
                    <Link href={`/product/${item.id}`} className={styles.thumb}>
                      <Image
                        src={item.image}
                        alt=""
                        width={72}
                        height={72}
                        className={styles.thumbImg}
                      />
                    </Link>
                    <Link href={`/product/${item.id}`} className={styles.title}>
                      {item.title}
                    </Link>
                  </div>

                  <div className={styles.price}>
                    {item.originalPrice != null ? (
                      <>
                        <span className={styles.original}>
                          {formatPrice(item.originalPrice)}
                        </span>
                        <span className={styles.current}>
                          {formatPrice(item.price)}
                        </span>
                      </>
                    ) : (
                      <span className={styles.current}>
                        {formatPrice(item.price)}
                      </span>
                    )}
                  </div>

                  <p
                    className={
                      item.inStock ? styles.inStock : styles.outOfStock
                    }
                  >
                    {item.inStock ? "IN STOCK" : "OUT OF STOCK"}
                  </p>

                  <div className={styles.actions}>
                    <button
                      type="button"
                      className={
                        item.inStock ? styles.addBtn : styles.addBtnDisabled
                      }
                      disabled={!item.inStock}
                    >
                      Add to cart
                      <ShoppingCart size={20} strokeWidth={2} aria-hidden />
                    </button>
                    <button
                      type="button"
                      className={styles.remove}
                      aria-label={`Remove ${item.title} from wishlist`}
                      onClick={() => removeItem(item.id)}
                    >
                      <X size={16} strokeWidth={2.5} aria-hidden />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
