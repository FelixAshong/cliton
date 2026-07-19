import Image from "next/image";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/data/products";
import styles from "./ProductCard.module.css";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

type Props = {
  product: Product;
  variant?: "grid" | "featured" | "compact";
};

function Stars({ rating, reviews, size = 14 }: { rating: number; reviews?: number; size?: number }) {
  return (
    <div className={styles.rating} aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          fill={i < rating ? "#EBC80C" : "none"}
          color="#EBC80C"
          aria-hidden
        />
      ))}
      {typeof reviews === "number" && <span>({reviews.toLocaleString("en-GH")})</span>}
    </div>
  );
}

export function ProductCard({ product, variant = "grid" }: Props) {
  const badgeClass =
    product.badge === "hot"
      ? "badge-hot"
      : product.badge === "soldout"
        ? "badge-soldout"
        : product.badge === "best"
          ? "badge-best"
          : "badge-sale";

  if (variant === "featured") {
    return (
      <article className={`${styles.card} ${styles.featured}`}>
        <div className={styles.imageWrap}>
          <Image src={product.image} alt="" fill sizes="328px" />
          {(product.badge || product.badgeLabel) && (
            <div className={styles.badges}>
              {product.badgeLabel && (
                <span className={`badge ${badgeClass}`}>{product.badgeLabel}</span>
              )}
              {product.badge === "sale" && (
                <span className="badge badge-hot">HOT</span>
              )}
            </div>
          )}
        </div>
        <div className={styles.body}>
          {product.rating && (
            <Stars rating={product.rating} reviews={product.reviews} size={18} />
          )}
          <h3>{product.title}</h3>
          <div className={styles.prices}>
            {product.originalPrice && (
              <span className="price-old">{formatPrice(product.originalPrice)}</span>
            )}
            <span className={`price ${styles.priceLg}`}>{formatPrice(product.price)}</span>
          </div>
          {product.description && <p className={styles.desc}>{product.description}</p>}
        </div>
        <div className={styles.actions}>
          <button type="button" className="btn btn-soft" aria-label="Wishlist">
            <Heart size={22} />
          </button>
          <button type="button" className={`btn btn-primary ${styles.add}`}>
            <ShoppingCart size={18} /> Add to cart
          </button>
          <button type="button" className="btn btn-soft" aria-label="Quick view">
            <Eye size={22} />
          </button>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={`${styles.card} ${styles.compact}`}>
        <div className={styles.compactImage}>
          <Image src={product.image} alt="" width={80} height={80} />
        </div>
        <div>
          <h3>{product.title}</h3>
          <div className={styles.prices}>
            {product.originalPrice && (
              <span className="price-old">{formatPrice(product.originalPrice)}</span>
            )}
            <span className="price">{formatPrice(product.price)}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.grid}`}>
      <div className={styles.imageWrap}>
        <Image src={product.image} alt="" fill sizes="248px" />
        {product.badgeLabel && (
          <span className={`badge ${badgeClass} ${styles.corner}`}>{product.badgeLabel}</span>
        )}
        <div className={styles.hoverActions}>
          <button type="button" aria-label="Add to wishlist">
            <Heart size={20} />
          </button>
          <button type="button" aria-label="Add to cart">
            <ShoppingCart size={20} />
          </button>
          <button type="button" aria-label="Quick view">
            <Eye size={20} />
          </button>
        </div>
      </div>
      <div className={styles.body}>
        {product.rating ? (
          <Stars rating={product.rating} reviews={product.reviews} />
        ) : null}
        <h3>{product.title}</h3>
        <div className={styles.prices}>
          {product.originalPrice && (
            <span className="price-old">{formatPrice(product.originalPrice)}</span>
          )}
          <span className="price">{formatPrice(product.price)}</span>
        </div>
      </div>
    </article>
  );
}
