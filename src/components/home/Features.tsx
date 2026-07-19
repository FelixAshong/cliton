import { CreditCard, Headphones, Package, Trophy } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: Package,
    title: "Fasted Delivery",
    text: "Delivery in 24/H",
  },
  {
    icon: Trophy,
    title: "24 Hours Return",
    text: "100% money back guarantee",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    text: "Your money is safe",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    text: "Live contact/message",
  },
];

export function Features() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.row}`}>
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className={styles.item}>
              {i > 0 && <span className={styles.sep} aria-hidden />}
              <div className={styles.content}>
                <Icon size={36} strokeWidth={1.4} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
