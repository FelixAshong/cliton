"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { navCategories } from "@/data/navCategories";
import styles from "./CategoryMegaMenu.module.css";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

export function CategoryMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(navCategories[0]?.id ?? "");
  const [activeBrand, setActiveBrand] = useState(
    () => navCategories[0]?.brands[1] ?? navCategories[0]?.brands[0] ?? "",
  );
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = navCategories.find((c) => c.id === activeId) ?? navCategories[0];

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openMenu() {
    clearCloseTimer();
    setOpen(true);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  }

  function selectCategory(categoryId: string) {
    const category = navCategories.find((c) => c.id === categoryId);
    setActiveId(categoryId);
    setActiveBrand(category?.brands[1] ?? category?.brands[0] ?? "");
  }

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        clearCloseTimer();
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        clearCloseTimer();
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => () => clearCloseTimer(), []);

  if (!active) return null;

  return (
    <div
      className={styles.wrap}
      ref={wrapRef}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        All Category
        <ChevronDown
          size={16}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className={styles.panel} id={menuId} role="menu">
          <div className={styles.categoryList}>
            {navCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  role="menuitem"
                  className={`${styles.categoryItem} ${isActive ? styles.categoryItemActive : ""}`}
                  onMouseEnter={() => selectCategory(category.id)}
                  onFocus={() => selectCategory(category.id)}
                >
                  {category.name}
                  <ChevronRight size={12} aria-hidden />
                </Link>
              );
            })}
          </div>

          <div className={styles.flyout} aria-label={`${active.name} submenu`}>
            <div className={styles.brands}>
              {active.brands.map((brand) => (
                <Link
                  key={brand}
                  href={active.href}
                  className={`${styles.brandItem} ${brand === activeBrand ? styles.brandItemActive : ""}`}
                  onMouseEnter={() => setActiveBrand(brand)}
                  onFocus={() => setActiveBrand(brand)}
                >
                  {brand}
                </Link>
              ))}
            </div>

            <div className={styles.featured}>
              <p className={styles.featuredTitle}>{active.featuredTitle}</p>
              {active.featured.map((product) => (
                <Link key={product.id} href={active.href} className={styles.product}>
                  <div className={styles.productImage}>
                    <Image src={product.image} alt="" fill sizes="80px" />
                  </div>
                  <div className={styles.productBody}>
                    <p className={styles.productTitle}>{product.title}</p>
                    <div className={styles.productPrice}>
                      {typeof product.originalPrice === "number" && (
                        <span className={styles.productOriginal}>
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                      <span>{formatPrice(product.price)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className={styles.promo}>
              <div className={styles.promoCopy}>
                <div className={styles.promoImage}>
                  <Image src={active.promo.image} alt="" fill sizes="248px" />
                </div>
                <div>
                  <p className={styles.promoTitle}>{active.promo.title}</p>
                  <p className={styles.promoDesc}>{active.promo.description}</p>
                </div>
                <div className={styles.promoPriceRow}>
                  <span>Starting price:</span>
                  <span className={styles.promoPriceTag}>{active.promo.priceLabel}</span>
                </div>
              </div>
              <Link href={active.promo.href} className={styles.promoCta}>
                Shop now
                <ArrowRight size={20} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
