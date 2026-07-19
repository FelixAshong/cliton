"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="section" id="flyers" aria-roledescription="carousel">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Promo Flyers</h2>
          <p className={styles.subtitle}>Latest offers &amp; in-store posters</p>
        </div>

        <div
          className={styles.stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setPaused(false);
            }
          }}
        >
          <div className={styles.viewport}>
            {flyers.map((flyer, i) => (
              <a
                key={flyer.id}
                href={flyer.href ?? "#products"}
                className={`${styles.slide} ${i === index ? styles.active : ""}`}
                aria-hidden={i !== index}
                tabIndex={i === index ? 0 : -1}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={flyer.src} alt={flyer.alt} className={styles.image} />
              </a>
            ))}
          </div>

          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={prev}
            aria-label="Previous flyer"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={next}
            aria-label="Next flyer"
          >
            <ChevronRight size={22} />
          </button>

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

          <p className={styles.caption}>
            <span>{current.title}</span>
            <span className={styles.count}>
              {index + 1} / {total}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
