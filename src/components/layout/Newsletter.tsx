"use client";

import { ArrowRight } from "lucide-react";
import styles from "./Newsletter.module.css";

export function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2>Subscribe to our newsletter</h2>
        <p>
          Get deals on phones, laptops and gadgets — plus delivery updates for Accra
          and across Ghana.
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
