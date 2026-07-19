import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.side}>
          <article className={`${styles.card} ${styles.dark}`}>
            <div className={styles.cardBody}>
              <p className={styles.eyebrow}>Summer Sales</p>
              <h2>New Google Pixel 6 Pro</h2>
              <a href="#products" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </a>
            </div>
            <div className={styles.sideImage}>
              <Image
                src="/images/hero/pixel.png"
                alt="Google Pixel 6 Pro"
                width={220}
                height={220}
              />
            </div>
            <span className={styles.offBadge}>29% OFF</span>
          </article>

          <article className={`${styles.card} ${styles.light}`}>
            <div className={styles.sideImage}>
              <Image
                src="/images/hero/earbuds.png"
                alt="Xiaomi FlipBuds Pro"
                width={160}
                height={160}
              />
            </div>
            <div className={styles.cardBody}>
              <h3>Xiaomi FlipBuds Pro</h3>
              <p className={styles.priceTag}>GH₵4,490</p>
              <a href="#products" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </a>
            </div>
          </article>
        </div>

        <article className={`${styles.card} ${styles.main}`}>
          <div className={styles.mainContent}>
            <div className={styles.caption}>
              <span className={styles.line} />
              <span>THE BEST PLACE TO PLAY</span>
            </div>
            <h1>Xbox Consoles</h1>
            <p>
              Save up to 50% on select Xbox games. Fast delivery in Accra and across
              Ghana.
            </p>
            <a href="#deals" className="btn btn-primary btn-primary-lg">
              Shop Now <ArrowRight size={22} />
            </a>
          </div>
          <div className={styles.mainImage}>
            <Image
              src="/images/hero/xbox.png"
              alt="Xbox console"
              width={400}
              height={400}
              priority
            />
            <span className={styles.priceBubble}>GH₵4,490</span>
          </div>
          <div className={styles.dots} aria-hidden>
            <span className={styles.dotActive} />
            <span />
            <span />
          </div>
        </article>
      </div>
    </section>
  );
}
