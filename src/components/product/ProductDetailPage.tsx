"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Handshake,
  Headphones,
  Heart,
  Home,
  Medal,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";
import type { Product } from "@/data/products";
import { listProducts } from "@/data/products";
import {
  FacebookIcon,
  InstagramIcon,
  SnapchatIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";
import { ProductCard } from "@/components/home/ProductCard";
import styles from "./ProductDetailPage.module.css";

const GALLERY_POOL = [
  "/images/products/macbook-pro.png",
  "/images/products/macbook-m4.png",
  "/images/products/phone.png",
  "/images/products/earbuds.png",
  "/images/products/camera.png",
  "/images/products/monitor.png",
];

type ColorOption = {
  id: string;
  name: string;
  hex: string;
  filter: string;
};

const COLOR_OPTIONS: ColorOption[] = [
  {
    id: "space-gray",
    name: "Space Gray",
    hex: "#5c5f64",
    filter: "none",
  },
  {
    id: "silver",
    name: "Silver",
    hex: "#c8ccd1",
    filter: "saturate(0.15) contrast(0.88)",
  },
];

const FEATURES = [
  { icon: Medal, label: "Free 1 Year Warranty" },
  { icon: Truck, label: "Free Shipping & Fast Delivery" },
  { icon: Handshake, label: "100% Money-back guarantee" },
  { icon: Headphones, label: "24/7 Customer support" },
  { icon: CreditCard, label: "Secure payment method" },
] as const;

const SHIPPING = [
  { label: "Courier:", value: "2 - 4 days, free shipping" },
  { label: "Local Shipping:", value: "up to one week, GH₵190" },
  { label: "UPS Ground Shipping:", value: "4 - 6 days, GH₵290" },
  { label: "Unishop Global Export:", value: "3 - 4 days, GH₵390" },
] as const;

const TABS = [
  { id: "description", label: "Description" },
  { id: "additional", label: "Additional information" },
  { id: "specification", label: "Specification" },
  { id: "review", label: "Review" },
] as const;

type TabId = (typeof TABS)[number]["id"];

type Props = {
  product: Product;
  brand: string;
  category: string;
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

export function ProductDetailPage({ product, brand, category }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [colorId, setColorId] = useState(COLOR_OPTIONS[0].id);
  const [tab, setTab] = useState<TabId>("description");

  const gallery = useMemo(() => buildGallery(product.image), [product.image]);
  const selectedColor =
    COLOR_OPTIONS.find((option) => option.id === colorId) ?? COLOR_OPTIONS[0];

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const rating = product.rating ?? 5;
  const reviews = product.reviews ?? 0;
  const sku = product.id.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 7) || "A264671";

  const relatedColumns = [
    { title: "Related Product", items: listProducts.flashSale },
    { title: "Product Accessories", items: listProducts.bestSellers },
    { title: "Apple Product", items: listProducts.newArrival },
    { title: "Featured Products", items: listProducts.topRated },
  ];

  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={`container ${styles.breadcrumbInner}`}>
          <Link href="/" className={styles.crumb}>
            <Home size={18} />
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/shop" className={styles.crumb}>
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumb}>Shop Grid</span>
          <ChevronRight size={12} />
          <Link href="/shop" className={styles.crumb}>
            {category}
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>
            {product.title.split(" ").slice(0, 3).join(" ")}
          </span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        <section className={styles.hero}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <div
                className={styles.imageStage}
                style={{ filter: selectedColor.filter }}
                key={selectedColor.id}
              >
                <Image
                  src={gallery[activeImage] ?? product.image}
                  alt={`${product.title} — ${selectedColor.name}`}
                  fill
                  sizes="(max-width: 900px) 90vw, 520px"
                  priority
                />
              </div>
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
                    <div
                      className={styles.thumbStage}
                      style={{ filter: selectedColor.filter }}
                    >
                      <Image src={src} alt="" fill sizes="72px" />
                    </div>
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
                      size={20}
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

              <h1 className={styles.title}>{product.title}</h1>

              <div className={styles.meta}>
                <p>
                  <span>Sku:</span> <strong>{sku}</strong>
                </p>
                <p>
                  <span>Availability:</span>{" "}
                  <strong className={styles.inStock}>
                    {product.badge === "soldout" ? "Out of Stock" : "In Stock"}
                  </strong>
                </p>
                <p>
                  <span>Brand:</span> <strong>{brand}</strong>
                </p>
                <p>
                  <span>Category:</span> <strong>{category}</strong>
                </p>
              </div>
            </div>

            <div className={styles.prices}>
              <span className={styles.price}>{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className={styles.priceOld}>{formatPrice(product.originalPrice)}</span>
              )}
              {discount !== null && (
                <span className={styles.offBadge}>{discount}% OFF</span>
              )}
            </div>

            <div className={styles.divider} />

            <div className={styles.options}>
              <div className={styles.optionRow}>
                <div className={styles.option}>
                  <span className={styles.optionLabel}>Color</span>
                  <div className={styles.swatches} role="radiogroup" aria-label="Product color">
                    {COLOR_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        role="radio"
                        aria-checked={colorId === option.id}
                        className={`${styles.swatch} ${colorId === option.id ? styles.swatchActive : ""}`}
                        style={{ background: option.hex }}
                        aria-label={option.name}
                        title={option.name}
                        onClick={() => {
                          setColorId(option.id);
                          setActiveImage(0);
                        }}
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
        </section>

        <section className={styles.info}>
          <div className={styles.tabs} role="tablist" aria-label="Product information">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={tab === item.id ? styles.tabActive : styles.tab}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={styles.infoBody} role="tabpanel">
            {tab === "description" && (
              <div className={styles.infoGrid}>
                <div className={styles.infoCol}>
                  <h2>Description</h2>
                  <p>
                    {product.description ??
                      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need."}
                  </p>
                  <p>
                    Even the most ambitious projects are easily handled with up to 10 CPU
                    cores, up to 16 GPU cores, a 16‑core Neural Engine, and dedicated
                    encode and decode media engines that support H.264, HEVC, and ProRes
                    codecs.
                  </p>
                </div>

                <div className={styles.infoCol}>
                  <h2>Feature</h2>
                  <ul className={styles.featureList}>
                    {FEATURES.map(({ icon: Icon, label }) => (
                      <li key={label}>
                        <Icon size={22} aria-hidden />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.infoCol}>
                  <h2>Shipping Information</h2>
                  <ul className={styles.shippingList}>
                    {SHIPPING.map((row) => (
                      <li key={row.label}>
                        <strong>{row.label}</strong> {row.value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {tab === "additional" && (
              <div className={styles.infoCol}>
                <h2>Additional information</h2>
                <p>
                  Official Ghana stock with local warranty support. Compatible chargers and
                  accessories available in-store at Sel Filling Station, UPSA.
                </p>
              </div>
            )}

            {tab === "specification" && (
              <div className={styles.infoCol}>
                <h2>Specification</h2>
                <ul className={styles.shippingList}>
                  <li>
                    <strong>Brand:</strong> {brand}
                  </li>
                  <li>
                    <strong>Category:</strong> {category}
                  </li>
                  <li>
                    <strong>SKU:</strong> {sku}
                  </li>
                  <li>
                    <strong>Color:</strong> {selectedColor.name}
                  </li>
                </ul>
              </div>
            )}

            {tab === "review" && (
              <div className={styles.infoCol}>
                <h2>Review</h2>
                <p>
                  Rated {rating.toFixed(1)} stars from {reviews.toLocaleString("en-GH")}{" "}
                  customer reviews.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className={styles.related}>
          {relatedColumns.map((col) => (
            <div key={col.title} className={styles.relatedCol}>
              <h3>{col.title}</h3>
              <div className={styles.relatedItems}>
                {col.items.map((item) => (
                  <ProductCard key={item.id} product={item} variant="compact" />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
