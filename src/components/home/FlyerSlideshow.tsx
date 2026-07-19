"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { flyers } from "@/data/flyers";
import styles from "./FlyerSlideshow.module.css";

const INTERVAL_MS = 5000;

export function FlyerSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = flyers.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (!total) return null;

  const current = flyers[index];

  return (
    <section className={`section ${styles.section}`} id="flyers" aria-roledescription="carousel">
      <div className="container">
        <div className={styles.head}>
          <div>
            <h2 className="section-title">Promo Flyers</h2>
            <p className={styles.subtitle}>Latest offers &amp; featured picks</p>
          </div>
        </div>

        <div className={styles.split}>
          <div
            className={styles.flyerCard}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setPaused(false);
              }
            }}
          >
            <a
              href={current.href ?? "#products"}
              className={styles.viewport}
              aria-label={current.alt}
            >
              {flyers.map((flyer, i) => (
                <div
                  key={flyer.id}
                  className={`${styles.slide} ${i === index ? styles.active : ""}`}
                  aria-hidden={i !== index}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={flyer.src} alt="" className={styles.image} />
                </div>
              ))}
            </a>

            <button
              type="button"
              className={`${styles.nav} ${styles.prev}`}
              onClick={prev}
              aria-label="Previous flyer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.next}`}
              onClick={next}
              aria-label="Next flyer"
            >
              <ChevronRight size={18} />
            </button>

            <div className={styles.footer}>
              <span className={styles.flyerTitle}>{current.title}</span>
              <div className={styles.dots} role="tablist" aria-label="Flyer slides">
                {flyers.map((flyer, i) => (
                  <button
                    key={flyer.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Show ${flyer.title}`}
                    className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          <article className={styles.productCard}>
            <div className={styles.productContent}>
              <span className="badge badge-sale">SAVE UP TO GH₵3,000</span>
              <h3>Macbook Pro</h3>
              <p>
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage. Available for
                pickup in Accra.
              </p>
              <a href="#products" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </a>
            </div>
            <div className={styles.productImage}>
              <Image
                src="/images/categories/laptop.png"
                alt="Macbook Pro"
                width={280}
                height={200}
              />
            </div>
            <span className={styles.price}>GH₵29,999</span>
          </article>
        </div>
      </div>
    </section>
  );
}
