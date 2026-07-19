import Link from "next/link";
import { Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.panel}>
          <p className={styles.code} aria-hidden="true">
            404
          </p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.copy}>
            That link doesn&apos;t lead anywhere in our shop. Head home to browse
            phones, laptops, and accessories — or call us and we&apos;ll help you
            find what you need.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <a href="tel:0572273425" className={styles.phone}>
              <Phone size={16} aria-hidden="true" />
              057 227 3425
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
