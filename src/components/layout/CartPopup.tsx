"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart, X } from "lucide-react";
import { cartItems as initialItems, type CartItem } from "@/data/cart";
import styles from "./CartPopup.module.css";

type PanelPos = {
  top: number;
  right: number;
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

export function CartPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [pos, setPos] = useState<PanelPos>({ top: 0, right: 16 });
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!open) return;

    function updatePosition() {
      const rect = triggerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const panelHeight = panelRef.current?.offsetHeight ?? 420;
      const gap = 12;
      const preferredTop = rect.bottom + gap;
      const maxTop = window.innerHeight - panelHeight - 16;
      const top = Math.max(16, Math.min(preferredTop, maxTop));

      setPos({
        top,
        right: Math.max(16, window.innerWidth - rect.right),
      });
    }

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open, items]);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  const popup =
    open && mounted
      ? createPortal(
          <>
            <div className={styles.backdrop} aria-hidden onClick={close} />
            <div
              ref={panelRef}
              className={styles.panel}
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${panelId}-title`}
              style={{ top: pos.top, right: pos.right }}
            >
              <div className={styles.heading}>
                <h2 className={styles.headingTitle} id={`${panelId}-title`}>
                  Shopping Cart{" "}
                  <span className={styles.headingCount}>({formatCount(itemCount)})</span>
                </h2>
              </div>

              <div className={styles.body}>
                {items.length > 0 ? (
                  <div className={styles.items}>
                    {items.map((item) => (
                      <div key={item.id} className={styles.item}>
                        <div className={styles.thumb}>
                          <Image src={item.image} alt="" fill sizes="80px" />
                        </div>
                        <div className={styles.info}>
                          <p className={styles.title}>{item.title}</p>
                          <div className={styles.meta}>
                            <span className={styles.qty}>{item.quantity} x</span>
                            <span className={styles.price}>{formatPrice(item.price)}</span>
                          </div>
                        </div>
                        <button
                          type="button"
                          className={styles.remove}
                          aria-label={`Remove ${item.title}`}
                          onClick={() => removeItem(item.id)}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className={styles.empty}>Your cart is empty.</p>
                )}

                <div className={styles.divider} />

                <div className={styles.subtotal}>
                  <span className={styles.subtotalLabel}>Sub-Total:</span>
                  <span className={styles.subtotalValue}>{formatPrice(subtotal)}</span>
                </div>

                <div className={styles.actions}>
                  <Link href="/checkout" className={styles.checkout} onClick={close}>
                    Checkout now
                    <ArrowRight size={20} aria-hidden />
                  </Link>
                  <Link href="/cart" className={styles.viewCart} onClick={close}>
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <div className={styles.wrap}>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""}`}
        aria-label="Shopping cart"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <ShoppingCart size={28} strokeWidth={1.5} />
        {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
      </button>
      {popup}
    </div>
  );
}
