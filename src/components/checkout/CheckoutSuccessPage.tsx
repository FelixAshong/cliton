import Link from "next/link";
import { ArrowRight, Check, ChevronRight, Home } from "lucide-react";
import styles from "./CheckoutSuccessPage.module.css";

export function CheckoutSuccessPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={`container ${styles.breadcrumbInner}`}>
          <Link href="/" className={styles.crumb}>
            <Home size={18} />
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/cart" className={styles.crumb}>
            Shopping Cart
          </Link>
          <ChevronRight size={12} />
          <span className={styles.crumbActive}>Checkout</span>
        </div>
      </nav>

      <div className={`container ${styles.content}`}>
        <div className={styles.panel}>
          <div className={styles.iconWrap} aria-hidden>
            <span className={styles.iconRing} />
            <span className={styles.icon}>
              <Check size={40} strokeWidth={2.75} />
            </span>
          </div>

          <h1>Your order is successfully placed</h1>
          <p>
            Thanks for shopping with techassure. We’ll confirm by phone and
            arrange delivery or pickup at Sel Filling Station, UPSA.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primary}>
              Go to Dashboard
              <ArrowRight size={20} strokeWidth={2} aria-hidden />
            </Link>
            <Link href="/track-order" className={styles.secondary}>
              View Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
