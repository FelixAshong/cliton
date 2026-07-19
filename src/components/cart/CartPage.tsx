"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Home,
  Minus,
  Plus,
  X,
} from "lucide-react";
import { cartItems as initialItems, type CartItem } from "@/data/cart";
import styles from "./CartPage.module.css";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatQty(n: number) {
  return String(n).padStart(2, "0");
}

export function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [coupon, setCoupon] = useState("");

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );
  const discount = items.length > 0 ? 24 : 0;
  const tax = items.length > 0 ? 61.99 : 0;
  const total = Math.max(0, subtotal - discount + tax);

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function setQuantity(id: string, next: number) {
    const quantity = Math.max(1, Math.min(99, next));
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
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
          <span className={styles.crumbActive}>Shopping Cart</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.heading}>
              <h1>Shopping Cart</h1>
            </div>

            <div className={styles.tableHead} aria-hidden={items.length === 0}>
              <span className={styles.colProducts}>Products</span>
              <span className={styles.colPrice}>Price</span>
              <span className={styles.colQty}>Quantity</span>
              <span className={styles.colSubtotal}>Sub-Total</span>
            </div>

            {items.length === 0 ? (
              <div className={styles.empty}>
                <p>Your cart is empty.</p>
                <Link href="/shop" className={styles.returnBtn}>
                  <ArrowLeft size={20} aria-hidden />
                  Return to Shop
                </Link>
              </div>
            ) : (
              <ul className={styles.list}>
                {items.map((item) => (
                  <li key={item.id} className={styles.row}>
                    <div className={styles.product}>
                      <button
                        type="button"
                        className={styles.remove}
                        aria-label={`Remove ${item.title}`}
                        onClick={() => removeItem(item.id)}
                      >
                        <X size={14} strokeWidth={2.5} aria-hidden />
                      </button>
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

                    <div className={styles.qty}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        aria-label="Decrease quantity"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} strokeWidth={2} aria-hidden />
                      </button>
                      <span className={styles.qtyValue}>
                        {formatQty(item.quantity)}
                      </span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        aria-label="Increase quantity"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} strokeWidth={2} aria-hidden />
                      </button>
                    </div>

                    <p className={styles.lineTotal}>
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {items.length > 0 && (
              <div className={styles.footerActions}>
                <Link href="/shop" className={styles.returnBtn}>
                  <ArrowLeft size={20} aria-hidden />
                  Return to Shop
                </Link>
                <button type="button" className={styles.updateBtn}>
                  Update cart
                </button>
              </div>
            )}
          </div>
        </div>

        <aside className={styles.aside}>
          <div className={styles.totalsCard}>
            <div className={styles.asideHeading}>
              <h2>Cart Totals</h2>
            </div>
            <div className={styles.totalsBody}>
              <div className={styles.totalsRows}>
                <div className={styles.totalsRow}>
                  <span>Sub-total</span>
                  <span className={styles.totalsValue}>
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className={styles.totalsRow}>
                  <span>Shipping</span>
                  <span className={styles.totalsValue}>Free</span>
                </div>
                <div className={styles.totalsRow}>
                  <span>Discount</span>
                  <span className={styles.totalsValue}>
                    {formatPrice(discount)}
                  </span>
                </div>
                <div className={styles.totalsRow}>
                  <span>Tax</span>
                  <span className={styles.totalsValue}>{formatPrice(tax)}</span>
                </div>
              </div>
              <div className={styles.totalsDivider} />
              <div className={styles.grandTotal}>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className={styles.checkoutBtn}
              aria-disabled={items.length === 0}
              onClick={(e) => {
                if (items.length === 0) e.preventDefault();
              }}
            >
              Proceed to Checkout
              <ArrowRight size={24} aria-hidden />
            </Link>
          </div>

          <div className={styles.couponCard}>
            <div className={styles.asideHeading}>
              <h2>Coupon Code</h2>
            </div>
            <div className={styles.couponBody}>
              <label className={styles.srOnly} htmlFor="coupon-code">
                Coupon code
              </label>
              <input
                id="coupon-code"
                type="text"
                className={styles.couponInput}
                placeholder="Enter Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button type="button" className={styles.applyBtn}>
                Apply Coupon
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
