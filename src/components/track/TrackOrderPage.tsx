"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Home, Info } from "lucide-react";
import styles from "./TrackOrderPage.module.css";

export function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!orderId.trim() || !email.trim()) return;
    setSubmitted(true);
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
          <span className={styles.crumb}>Pages</span>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>Track Order</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        <div className={styles.intro}>
          <h1>Track Order</h1>
          <p>
            To track your order please enter your order ID in the input field
            below and press the “Track Order” button. This was given to you on
            your receipt and in the confirmation email you should have received.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="order-id">Order ID</label>
              <input
                id="order-id"
                type="text"
                name="orderId"
                placeholder="ID..."
                value={orderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                  setSubmitted(false);
                }}
                autoComplete="off"
                required
              />
              <p className={styles.hint}>
                <Info size={20} strokeWidth={1.5} aria-hidden />
                Order ID that we sent to you in your email address.
              </p>
            </div>

            <div className={styles.field}>
              <label htmlFor="billing-email">Billing Email</label>
              <input
                id="billing-email"
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubmitted(false);
                }}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submit}>
            Track Order
            <ArrowRight size={22} strokeWidth={2} aria-hidden />
          </button>
        </form>

        {submitted && (
          <div className={styles.result} role="status">
            Looking up order <strong>{orderId.trim()}</strong> for{" "}
            <strong>{email.trim()}</strong>. Status updates will appear here
            once order tracking is connected.
          </div>
        )}
      </div>
    </div>
  );
}
