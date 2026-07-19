import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./WideBanner.module.css";

export function WideBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.content}>
            <span className="badge badge-sale">SAVE UP TO $200</span>
            <h2>Macbook Pro</h2>
            <p>
              Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage. Space Gray.
            </p>
            <a href="#products" className="btn btn-primary btn-primary-lg">
              Shop Now <ArrowRight size={22} />
            </a>
          </div>
          <div className={styles.image}>
            <Image
              src="/images/categories/laptop.png"
              alt="Macbook Pro"
              width={480}
              height={320}
              priority={false}
            />
          </div>
          <span className={styles.price}>$1999</span>
        </div>
      </div>
    </section>
  );
}
