"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { categories } from "@/data/products";
import styles from "./Categories.module.css";

export function Categories() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="section-title section-title-lg" style={{ marginBottom: 40 }}>
          Shop with Categorys
        </h2>
        <div className={styles.wrap}>
          <button type="button" className={styles.arrow} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          <div className={styles.track}>
            {categories.map((cat) => (
              <a key={cat.id} href="#products" className={styles.card}>
                <div className={styles.image}>
                  <Image src={cat.image} alt={cat.name} width={148} height={148} />
                </div>
                <span>{cat.name}</span>
              </a>
            ))}
          </div>
          <button type="button" className={styles.arrow} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
