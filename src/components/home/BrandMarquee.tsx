import { brands } from "@/data/brands";
import styles from "./BrandMarquee.module.css";

export function BrandMarquee() {
  const loop = [...brands, ...brands];

  return (
    <section className={styles.section} aria-label="Brands we carry">
      <div className={styles.fadeLeft} aria-hidden />
      <div className={styles.fadeRight} aria-hidden />
      <div className={styles.trackWrap}>
        <div className={styles.track}>
          {loop.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className={styles.item}
              aria-hidden={i >= brands.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.src} alt={i < brands.length ? brand.name : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
