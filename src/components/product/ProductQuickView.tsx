"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  X,
} from "lucide-react";
import type { Product } from "@/data/products";
import {
  FacebookIcon,
  InstagramIcon,
  SnapchatIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";
import styles from "./ProductQuickView.module.css";

const GALLERY_POOL = [
  "/images/products/macbook-pro.png",
  "/images/products/macbook-m4.png",
  "/images/products/phone.png",
  "/images/products/earbuds.png",
  "/images/products/camera.png",
  "/images/products/monitor.png",
  "/images/products/tv.png",
  "/images/hero/pixel.png",
];

type Props = {
  product: Product | null;
  onClose: () => void;
};

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatCount(n: number) {
  return String(n).padStart(2, "0");
}

function buildGallery(mainImage: string) {
  const rest = GALLERY_POOL.filter((src) => src !== mainImage).slice(0, 5);
  return [mainImage, ...rest];
}

export function ProductQuickView({ product, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(0);
  const titleId = useId();

  const gallery = useMemo(
    () => (product ? buildGallery(product.image) : []),
    [product],
  );

  const discount =
    product?.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!product) return;
    setActiveImage(0);
    setQty(1);
    setColor(0);
  }, [product]);

  useEffect(() => {
    if (!product) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [product, onClose]);

  if (!mounted || !product) return null;

  const rating = product.rating ?? 5;
  const reviews = product.reviews ?? 0;

  return createPortal(
    <div className={styles.overlay} role="presentation">
      <button type="button" className={styles.backdrop} aria-label="Close quick view" onClick={onClose} />

      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button type="button" className={styles.close} aria-label="Close" onClick={onClose}>
          <X size={18} />
        </button>

        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image
              src={gallery[activeImage] ?? product.image}
              alt=""
              fill
              sizes="(max-width: 900px) 90vw, 420px"
              priority
            />
          </div>

          <div className={styles.thumbsRow}>
            <button
              type="button"
              className={styles.thumbNav}
              aria-label="Previous image"
              onClick={() =>
                setActiveImage((i) => (i - 1 + gallery.length) % gallery.length)
              }
            >
              <ChevronLeft size={18} />
            </button>

            <div className={styles.thumbs}>
              {gallery.map((src, index) => (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  className={`${styles.thumb} ${index === activeImage ? styles.thumbActive : ""}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <Image src={src} alt="" fill sizes="72px" />
                </button>
              ))}
            </div>

            <button
              type="button"
              className={styles.thumbNav}
              aria-label="Next image"
              onClick={() => setActiveImage((i) => (i + 1) % gallery.length)}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.heading}>
            <div className={styles.rating}>
              <div className={styles.stars} aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.round(rating) ? "#EBC80C" : "none"}
                    color="#EBC80C"
                  />
                ))}
              </div>
              <span className={styles.ratingLabel}>{rating.toFixed(1)} Star Rating</span>
              <span className={styles.ratingCount}>
                ({reviews.toLocaleString("en-GH")} User feedback)
              </span>
            </div>

            <h2 className={styles.title} id={titleId}>
              {product.title}
            </h2>

            <div className={styles.meta}>
              <p>
                <span>Sku:</span> <strong>{product.id.toUpperCase().slice(0, 8)}</strong>
              </p>
              <p>
                <span>Availability:</span>{" "}
                <strong className={styles.inStock}>
                  {product.badge === "soldout" ? "Out of Stock" : "In Stock"}
                </strong>
              </p>
              <p>
                <span>Brand:</span> <strong>techassure</strong>
              </p>
              <p>
                <span>Category:</span> <strong>Electronics Devices</strong>
              </p>
            </div>
          </div>

          <div className={styles.prices}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className={styles.priceOld}>{formatPrice(product.originalPrice)}</span>
            )}
            {discount !== null && <span className={styles.offBadge}>{discount}% OFF</span>}
          </div>

          <div className={styles.divider} />

          <div className={styles.options}>
            <div className={styles.optionRow}>
              <div className={styles.option}>
                <span className={styles.optionLabel}>Color</span>
                <div className={styles.swatches}>
                  {["#c9cdd1", "#e8eaed"].map((hex, index) => (
                    <button
                      key={hex}
                      type="button"
                      className={`${styles.swatch} ${color === index ? styles.swatchActive : ""}`}
                      style={{ background: hex }}
                      aria-label={`Color ${index + 1}`}
                      onClick={() => setColor(index)}
                    />
                  ))}
                </div>
              </div>

              <label className={styles.option}>
                <span className={styles.optionLabel}>Size</span>
                <select className={styles.select} defaultValue="14">
                  <option value="14">14-inch Liquid Retina XDR display</option>
                  <option value="13">13-inch Liquid Retina XDR display</option>
                  <option value="16">16-inch Liquid Retina XDR display</option>
                </select>
              </label>
            </div>

            <div className={styles.optionRow}>
              <label className={styles.option}>
                <span className={styles.optionLabel}>Memory</span>
                <select className={styles.select} defaultValue="16">
                  <option value="8">8GB unified memory</option>
                  <option value="16">16GB unified memory</option>
                  <option value="32">32GB unified memory</option>
                </select>
              </label>

              <label className={styles.option}>
                <span className={styles.optionLabel}>Storage</span>
                <select className={styles.select} defaultValue="1">
                  <option value="256">256GB SSD Storage</option>
                  <option value="512">512GB SSD Storage</option>
                  <option value="1">1TB SSD Storage</option>
                </select>
              </label>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <div className={styles.qty}>
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((n) => Math.max(1, n - 1))}
              >
                <Minus size={16} />
              </button>
              <span>{formatCount(qty)}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((n) => Math.min(99, n + 1))}
              >
                <Plus size={16} />
              </button>
            </div>

            <button type="button" className={styles.addCart}>
              Add to cart
              <ShoppingCart size={22} />
            </button>

            <button type="button" className={styles.buyNow}>
              Buy now
            </button>
          </div>

          <div className={styles.utilityRow}>
            <div className={styles.utilityLinks}>
              <button type="button">
                <Heart size={18} /> Add to Wishlist
              </button>
              <button type="button">
                <ArrowLeftRight size={18} /> Add to Compare
              </button>
            </div>
            <div className={styles.share}>
              <span>Share product:</span>
              <div className={styles.shareIcons}>
                <a href="#" aria-label="Facebook">
                  <FacebookIcon size={16} />
                </a>
                <a href="#" aria-label="Instagram">
                  <InstagramIcon size={16} />
                </a>
                <a href="#" aria-label="TikTok">
                  <TikTokIcon size={16} />
                </a>
                <a href="#" aria-label="Snapchat">
                  <SnapchatIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.safeCheckout}>
            <span>100% Guarantee Safe Checkout</span>
            <div className={styles.payMarks} aria-hidden>
              {["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay"].map((name) => (
                <span key={name} className={styles.payMark}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
