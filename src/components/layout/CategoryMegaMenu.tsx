"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { navCategories, type NavCategory } from "@/data/navCategories";
import styles from "./CategoryMegaMenu.module.css";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

function hasPanel(category: NavCategory) {
  return Boolean(category.brands?.length || category.featured?.length || category.promo);
}

export function CategoryMegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(
    () => navCategories.find((c) => hasPanel(c))?.id ?? navCategories[0]?.id ?? "",
  );
  const menuId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = navCategories.find((c) => c.id === activeId) ?? navCategories[0];
  const showFlyout = active ? hasPanel(active) : false;

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
                  onMouseEnter={() => setActiveId(category.id)}
                  onFocus={() => setActiveId(category.id)}
                >
                  {category.name}
                  {hasPanel(category) && <ChevronRight size={12} aria-hidden />}
                </Link>
              );
            })}
          </div>

          {showFlyout && active && (
            <div className={styles.flyout} aria-label={`${active.name} submenu`}>
              {active.brands && active.brands.length > 0 && (
                <div className={styles.brands}>
                  {active.brands.map((brand, index) => (
                    <Link
                      key={brand}
                      href={active.href}
                      className={`${styles.brandItem} ${index === 1 ? styles.brandItemActive : ""}`}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              )}

              {active.featured && active.featured.length > 0 && (
                <div className={styles.featured}>
                  <p className={styles.featuredTitle}>Featured phones</p>
                  {active.featured.map((product) => (
                    <Link key={product.id} href={active.href} className={styles.product}>
                      <div className={styles.productImage}>
                        <Image
                          src={product.image}
                          alt=""
                          fill
                          sizes="80px"
                        />
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
              )}

              {active.promo && (
                <div className={styles.promo}>
                  <div className={styles.promoCopy}>
                    <div className={styles.promoImage}>
                      <Image
                        src={active.promo.image}
                        alt=""
                        fill
                        sizes="248px"
                      />
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
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
