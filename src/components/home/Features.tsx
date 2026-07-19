import { CreditCard, Headphones, Package, Trophy } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: Package,
    title: "Nationwide Delivery",
    text: "Accra same-day · Ghana-wide shipping",
  },
  {
    icon: Trophy,
    title: "7-Day Returns",
    text: "Easy returns on eligible items",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    text: "MoMo, card & bank transfer",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    text: "Call or WhatsApp anytime",
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
