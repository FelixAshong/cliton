"use client";

import { FormEvent, useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Check,
  ChevronRight,
  CreditCard,
  Home,
} from "lucide-react";
import { cartItems, type CartItem } from "@/data/cart";
import styles from "./CheckoutPage.module.css";

const DISCOUNT = 24;
const TAX = 61.99;

const ghanaRegions = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Eastern",
  "Central",
  "Northern",
  "Volta",
  "Upper East",
  "Upper West",
  "Bono",
];

const citiesByRegion: Record<string, string[]> = {
  "Greater Accra": ["Accra", "Tema", "Madina", "Kasoa"],
  Ashanti: ["Kumasi", "Obuasi", "Ejisu"],
  Western: ["Takoradi", "Sekondi", "Tarkwa"],
  Eastern: ["Koforidua", "Nkawkaw"],
  Central: ["Cape Coast", "Winneba"],
  Northern: ["Tamale", "Yendi"],
  Volta: ["Ho", "Hohoe"],
  "Upper East": ["Bolgatanga"],
  "Upper West": ["Wa"],
  Bono: ["Sunyani"],
};

type PaymentMethod = "cod" | "momo" | "card";

function formatPrice(n: number) {
  return `GH₵${n.toLocaleString("en-GH", {
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

function truncate(title: string, max = 42) {
  return title.length > max ? `${title.slice(0, max - 1)}…` : title;
}

export function CheckoutPage() {
  const formId = useId();
  const [items] = useState<CartItem[]>(cartItems);
  const [payment, setPayment] = useState<PaymentMethod>("card");
  const [shipDifferent, setShipDifferent] = useState(false);
  const [region, setRegion] = useState("Greater Accra");
  const [city, setCity] = useState("Accra");
  const [placed, setPlaced] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = items.length === 0 ? 0 : DISCOUNT;
  const tax = items.length === 0 ? 0 : TAX;
  const total = Math.max(0, subtotal - discount + tax);
  const cities = citiesByRegion[region] ?? [];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPlaced(true);
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
          <Link href="/cart" className={styles.crumb}>
            Shopping Cart
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>Checkout</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        {placed ? (
          <div className={styles.success} role="status">
            <div className={styles.successIcon} aria-hidden>
              <Check size={32} strokeWidth={2.5} />
            </div>
            <h1>Your order is confirmed</h1>
            <p>
              Thanks for shopping with techassure. We’ll call you on the phone
              number you provided to arrange delivery.
            </p>
            <div className={styles.successActions}>
              <Link href="/track-order" className={styles.placeOrder}>
                Track order
                <ArrowRight size={20} strokeWidth={2} aria-hidden />
              </Link>
              <Link href="/shop" className={styles.outlineBtn}>
                Continue shopping
              </Link>
            </div>
          </div>
        ) : (
          <form
            className={styles.layout}
            onSubmit={handleSubmit}
            id={formId}
          >
            <div className={styles.main}>
              <section className={styles.card}>
                <div className={styles.heading}>
                  <h1>Billing Information</h1>
                </div>

                <div className={styles.formBody}>
                  <div className={styles.row2}>
                    <label className={styles.field}>
                      <span>User name</span>
                      <div className={styles.namePair}>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          required
                          autoComplete="given-name"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          required
                          autoComplete="family-name"
                        />
                      </div>
                    </label>
                    <label className={styles.field}>
                      <span>
                        Company Name <em>(Optional)</em>
                      </span>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company name"
                        autoComplete="organization"
                      />
                    </label>
                  </div>

                  <label className={styles.field}>
                    <span>Address</span>
                    <input
                      type="text"
                      name="address"
                      placeholder="House number and street name"
                      required
                      autoComplete="street-address"
                    />
                  </label>

                  <div className={styles.row3}>
                    <label className={styles.field}>
                      <span>Region / State</span>
                      <select
                        name="region"
                        value={region}
                        onChange={(e) => {
                          const next = e.target.value;
                          setRegion(next);
                          setCity(citiesByRegion[next]?.[0] ?? "");
                        }}
                        required
                      >
                        {ghanaRegions.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={styles.field}>
                      <span>City</span>
                      <select
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      >
                        {cities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className={styles.field}>
                      <span>Zip Code</span>
                      <input
                        type="text"
                        name="zip"
                        placeholder="Zip Code"
                        autoComplete="postal-code"
                      />
                    </label>
                  </div>

                  <div className={styles.row2}>
                    <label className={styles.field}>
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        autoComplete="email"
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Phone Number</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        autoComplete="tel"
                      />
                    </label>
                  </div>

                  <label className={styles.check}>
                    <input
                      type="checkbox"
                      checked={shipDifferent}
                      onChange={(e) => setShipDifferent(e.target.checked)}
                    />
                    <span>Ship into different address</span>
                  </label>

                  {shipDifferent && (
                    <label className={styles.field}>
                      <span>Shipping Address</span>
                      <input
                        type="text"
                        name="shippingAddress"
                        placeholder="House number and street name"
                        required={shipDifferent}
                      />
                    </label>
                  )}
                </div>
              </section>

              <section className={styles.card}>
                <div className={styles.heading}>
                  <h2>Payment Option</h2>
                </div>

                <div className={styles.paymentGrid} role="radiogroup" aria-label="Payment method">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={payment === "cod"}
                    className={[
                      styles.payOption,
                      payment === "cod" ? styles.payOptionActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setPayment("cod")}
                  >
                    <Banknote size={28} strokeWidth={1.5} aria-hidden />
                    <span>Cash on Delivery</span>
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={payment === "momo"}
                    className={[
                      styles.payOption,
                      payment === "momo" ? styles.payOptionActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setPayment("momo")}
                  >
                    <span className={styles.momoMark} aria-hidden>
                      MoMo
                    </span>
                    <span>Mobile Money</span>
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={payment === "card"}
                    className={[
                      styles.payOption,
                      payment === "card" ? styles.payOptionActive : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setPayment("card")}
                  >
                    <CreditCard size={28} strokeWidth={1.5} aria-hidden />
                    <span>Debit / Credit Card</span>
                  </button>
                </div>

                {payment === "card" && (
                  <div className={styles.cardFields}>
                    <label className={styles.field}>
                      <span>Name on Card</span>
                      <input
                        type="text"
                        name="cardName"
                        placeholder="Name on Card"
                        required={payment === "card"}
                        autoComplete="cc-name"
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Card Number</span>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        inputMode="numeric"
                        required={payment === "card"}
                        autoComplete="cc-number"
                      />
                    </label>
                    <div className={styles.row2}>
                      <label className={styles.field}>
                        <span>Expire Date</span>
                        <input
                          type="text"
                          name="cardExpiry"
                          placeholder="DD/YY"
                          required={payment === "card"}
                          autoComplete="cc-exp"
                        />
                      </label>
                      <label className={styles.field}>
                        <span>CVC</span>
                        <input
                          type="text"
                          name="cardCvc"
                          placeholder="CVC"
                          inputMode="numeric"
                          required={payment === "card"}
                          autoComplete="cc-csc"
                        />
                      </label>
                    </div>
                  </div>
                )}

                {payment === "momo" && (
                  <div className={styles.cardFields}>
                    <label className={styles.field}>
                      <span>Mobile Money Number</span>
                      <input
                        type="tel"
                        name="momoNumber"
                        placeholder="e.g. 057 227 3425"
                        required={payment === "momo"}
                      />
                    </label>
                    <label className={styles.field}>
                      <span>Network</span>
                      <select name="momoNetwork" required={payment === "momo"}>
                        <option value="mtn">MTN MoMo</option>
                        <option value="vodafone">Telecel Cash</option>
                        <option value="airteltigo">AirtelTigo Money</option>
                      </select>
                    </label>
                  </div>
                )}

                {payment === "cod" && (
                  <p className={styles.codNote}>
                    Pay with cash when your order arrives at Sel Filling
                    Station, UPSA — or on delivery.
                  </p>
                )}
              </section>

              <section className={styles.card}>
                <div className={styles.heading}>
                  <h2>Additional Information</h2>
                </div>
                <div className={styles.formBody}>
                  <label className={styles.field}>
                    <span>
                      Order Notes <em>(Optional)</em>
                    </span>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    />
                  </label>
                </div>
              </section>
            </div>

            <aside className={styles.sidebar}>
              <div className={styles.summary}>
                <div className={styles.heading}>
                  <h2>Order Summary</h2>
                </div>

                <div className={styles.summaryBody}>
                  {items.length === 0 ? (
                    <p className={styles.emptySummary}>
                      Your cart is empty.{" "}
                      <Link href="/shop">Browse shop</Link>
                    </p>
                  ) : (
                    <ul className={styles.summaryItems}>
                      {items.map((item) => (
                        <li key={item.id} className={styles.summaryItem}>
                          <div className={styles.summaryThumb}>
                            <Image
                              src={item.image}
                              alt=""
                              width={64}
                              height={64}
                              className={styles.summaryImg}
                            />
                          </div>
                          <div className={styles.summaryMeta}>
                            <p>{truncate(item.title)}</p>
                            <span>
                              {item.quantity} × {formatPrice(item.price)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

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
                      <span className={styles.totalsValue}>
                        {formatPrice(tax)}
                      </span>
                    </div>
                  </div>

                  <div className={styles.totalsDivider} />

                  <div className={styles.totalsTotal}>
                    <span>Total</span>
                    <span>{formatPrice(total)} GHS</span>
                  </div>

                  <button
                    type="submit"
                    className={styles.placeOrder}
                    disabled={items.length === 0}
                  >
                    Place order
                    <ArrowRight size={24} strokeWidth={2} aria-hidden />
                  </button>
                </div>
              </div>
            </aside>
          </form>
        )}
      </div>
    </div>
  );
}
