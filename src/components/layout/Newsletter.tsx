"use client";

import { ArrowRight } from "lucide-react";
import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2>Subscribe to our newsletter</h2>
        <p>
          Phones, laptops and accessories — we swap, buy &amp; sell. Call{" "}
          <a href="tel:+233572273425">057 227 3425</a> · Sel Filling Station,
          UPSA.
        </p>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email address" required aria-label="Email" />
          <button type="submit" className="btn btn-primary">
            Subscribe <ArrowRight size={20} />
          </button>
        </form>
        <div className={styles.brands}>
          <span>google</span>
          <span>amazon</span>
          <span>PHILIPS</span>
          <span>TOSHIBA</span>
          <span>samsung</span>
        </div>
      </div>
    </section>
  );
}
