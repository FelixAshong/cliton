"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import styles from "./PromoBanner.module.css";

export function PromoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.offer}>
          <span className={styles.black}>Black</span>
          <span className={styles.friday}>Friday</span>
        </div>
        <div className={styles.discount}>
          <span>Up to</span>
          <strong>59%</strong>
          <span>OFF</span>
        </div>
        <a href="#deals" className={`btn btn-warning ${styles.cta}`}>
          Shop now
          <ArrowRight size={20} />
        </a>
      </div>
      <button
        type="button"
        className={styles.close}
        aria-label="Close promo banner"
        onClick={() => setOpen(false)}
      >
        <X size={16} />
      </button>
    </div>
  );
}
