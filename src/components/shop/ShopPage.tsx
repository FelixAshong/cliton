"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home,
  LayoutGrid,
  Rows3,
  Search,
  ShoppingCart,
  X,
} from "lucide-react";
import { ProductCard } from "@/components/home/ProductCard";
import {
  PAGE_SIZE,
  pricePresets,
  shopBrands,
  shopCategories,
  shopProducts,
  shopTags,
} from "@/data/shop";
import styles from "./ShopPage.module.css";

type SortKey = "popular" | "price-asc" | "price-desc" | "name";
type LayoutMode = "grid" | "list";

export function ShopPage() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>("Electronics Devices");
  const [pricePreset, setPricePreset] = useState("all");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [activeTag, setActiveTag] = useState("");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("popular");
  const [page, setPage] = useState(1);
  const [layout, setLayout] = useState<LayoutMode>("grid");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setQuery(q);
  }, [searchParams]);

  const preset = pricePresets.find((p) => p.id === pricePreset) ?? pricePresets[0];

  const filtered = useMemo(() => {
    const min = minPrice ? Number(minPrice) : preset.min;
    const max = maxPrice ? Number(maxPrice) : preset.max;
    const q = query.trim().toLowerCase();

    let items = shopProducts.filter((product) => {
      const inCategory =
        category === "Electronics Devices" || product.category === category;
      const inPrice = product.price >= min && product.price <= max;
      const inBrand = brands.length === 0 || brands.includes(product.brand);
      const inQuery =
        !q ||
        product.title.toLowerCase().includes(q) ||
        product.brand.toLowerCase().includes(q);

      return inCategory && inPrice && inBrand && inQuery;
    });

    if (activeTag) {
      const tagged = items.filter((p) => p.tags.includes(activeTag));
      if (tagged.length > 0) items = tagged;
    }

    if (sort === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    if (sort === "name") items = [...items].sort((a, b) => a.title.localeCompare(b.title));

    return items;
  }, [activeTag, brands, category, maxPrice, minPrice, preset.max, preset.min, query, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const activeFilters = [
    category !== "Electronics Devices" ? category : null,
    pricePreset !== "all" ? preset.label : null,
    ...brands,
    activeTag || null,
  ].filter(Boolean) as string[];

  function toggleBrand(brand: string) {
    setBrands((current) =>
      current.includes(brand) ? current.filter((b) => b !== brand) : [...current, brand],
    );
    setPage(1);
  }

  function clearFilter(value: string) {
    if (value === category) setCategory("Electronics Devices");
    else if (value === preset.label) setPricePreset("all");
    else if (value === activeTag) setActiveTag("");
    else setBrands((current) => current.filter((b) => b !== value));
    setPage(1);
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
          <Link href="/shop" className={styles.crumb}>
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumb}>Shop Grid</span>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>{category}</span>
        </div>
      </nav>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.sidebar}>
          <section className={styles.filterBlock}>
            <h2>Category</h2>
            <div className={styles.radioList}>
              {shopCategories.map((name) => (
                <label key={name} className={styles.radioItem}>
                  <input
                    type="radio"
                    name="category"
                    checked={category === name}
                    onChange={() => {
                      setCategory(name);
                      setPage(1);
                    }}
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </section>

          <section className={styles.filterBlock}>
            <h2>Price Range</h2>
            <div className={styles.rangeTrack} aria-hidden>
              <span className={styles.rangeFill} />
              <span className={styles.rangeThumb} style={{ left: "14%" }} />
              <span className={styles.rangeThumb} style={{ left: "62%" }} />
            </div>
            <div className={styles.priceInputs}>
              <input
                type="number"
                placeholder="Min price"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  setPage(1);
                }}
              />
              <input
                type="number"
                placeholder="Max price"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  setPage(1);
                }}
              />
            </div>
            <label className={styles.priceSelect}>
              <select
                value={pricePreset}
                aria-label="Price range"
                onChange={(e) => {
                  setPricePreset(e.target.value);
                  setMinPrice("");
                  setMaxPrice("");
                  setPage(1);
                }}
              >
                {pricePresets.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </section>

          <section className={styles.filterBlock}>
            <h2>Popular Brands</h2>
            <label className={styles.brandSelect}>
              <select
                value={brands.length === 1 ? brands[0] : ""}
                aria-label="Popular brands"
                onChange={(e) => {
                  const value = e.target.value;
                  setBrands(value ? [value] : []);
                  setPage(1);
                }}
              >
                <option value="">All Brands</option>
                {shopBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>
            <div className={styles.brandGrid}>
              {shopBrands.map((brand) => (
                <label key={brand} className={styles.checkItem}>
                  <input
                    type="checkbox"
                    checked={brands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>
          </section>

          <section className={styles.filterBlock}>
            <h2>Popular Tag</h2>
            <div className={styles.tags}>
              {shopTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className={`${styles.tag} ${activeTag === tag ? styles.tagActive : ""}`}
                  onClick={() => {
                    setActiveTag((current) => (current === tag ? "" : tag));
                    setPage(1);
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          <aside className={styles.promo}>
            <div className={styles.promoImage}>
              <Image
                src="/images/shop/watch-promo.png"
                alt=""
                fill
                sizes="180px"
              />
            </div>
            <div className={styles.promoLogo}>
              <Image
                src="/images/shop/apple-watch-logo.png"
                alt="Apple Watch Series"
                width={132}
                height={51}
              />
            </div>
            <h3>Heavy on Features. Light on Price.</h3>
            <div className={styles.promoPrice}>
              <span>Only for:</span>
              <strong>GH₵2,990</strong>
            </div>
            <button type="button" className={styles.promoCart}>
              <ShoppingCart size={18} />
              Add to Cart
            </button>
            <Link href="/shop" className={styles.promoDetails}>
              View Details
              <ArrowRight size={18} />
            </Link>
          </aside>
        </aside>

        <section className={styles.main}>
          <div className={styles.toolbar}>
            <form
              className={styles.search}
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            >
              <input
                type="search"
                placeholder="Search for anything..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                aria-label="Search products"
              />
              <Search size={20} aria-hidden />
            </form>
            <div className={styles.toolbarRow}>
              <label className={styles.sort}>
                <span>Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value as SortKey);
                    setPage(1);
                  }}
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </label>
              <div className={styles.layoutToggle} role="group" aria-label="Product layout">
                <button
                  type="button"
                  className={layout === "grid" ? styles.layoutActive : undefined}
                  aria-pressed={layout === "grid"}
                  aria-label="Grid view"
                  onClick={() => setLayout("grid")}
                >
                  <LayoutGrid size={18} />
                </button>
                <button
                  type="button"
                  className={layout === "list" ? styles.layoutActive : undefined}
                  aria-pressed={layout === "list"}
                  aria-label="List view"
                  onClick={() => setLayout("list")}
                >
                  <Rows3 size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.activeBar}>
            <div className={styles.activeFilters}>
              <span>Active Filters:</span>
              {activeFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={styles.activeChip}
                  onClick={() => clearFilter(filter)}
                >
                  {filter}
                  <X size={14} />
                </button>
              ))}
            </div>
            <p>{filtered.length.toLocaleString("en-GH")} Results found.</p>
          </div>

          <div
            className={`${styles.grid} ${layout === "list" ? styles.gridList : styles.gridCols}`}
          >
            {pageItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {pageItems.length === 0 && (
            <p className={styles.empty}>No products match these filters.</p>
          )}

          <div className={styles.pagination}>
            <button
              type="button"
              aria-label="Previous page"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              <ChevronLeft size={18} />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => {
              const n = index + 1;
              return (
                <button
                  key={n}
                  type="button"
                  className={n === currentPage ? styles.pageActive : undefined}
                  onClick={() => setPage(n)}
                >
                  {String(n).padStart(2, "0")}
                </button>
              );
            })}
            <button
              type="button"
              aria-label="Next page"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
