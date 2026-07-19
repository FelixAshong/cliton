import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./PromoBanners.module.css";

export function PromoBanners() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <article className={`${styles.card} ${styles.light}`}>
          <div className={styles.content}>
            <span className={`badge badge-hot`}>INTRODUCING</span>
            <h3>New Apple Homepod Mini</h3>
            <p>Now in stock in Accra — compact smart speaker with big sound.</p>
            <a href="#products" className="btn btn-primary">
              Shop Now <ArrowRight size={18} />
            </a>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/products/speaker.png"
              alt="HomePod Mini"
              width={220}
              height={220}
            />
          </div>
        </article>

        <article className={`${styles.card} ${styles.blue}`}>
          <div className={styles.content}>
            <span className={`badge badge-sale`}>INTRODUCING NEW</span>
            <h3>Xiaomi Mi 11 Ultra 12GB+256GB</h3>
            <p>Dual SIM ready for MTN, Telecel & AirtelTigo networks.</p>
            <a href="#products" className="btn btn-primary">
              Shop Now <ArrowRight size={18} />
            </a>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/hero/pixel.png"
              alt="Xiaomi Mi 11 Ultra"
              width={220}
              height={220}
            />
          </div>
          <span className={styles.price}>GH₵8,850</span>
        </article>
      </div>
    </section>
  );
}
