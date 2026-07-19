import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Top Category",
    links: [
      "Computer & Laptop",
      "SmartPhone",
      "Headphone",
      "Accessories",
      "Camera & Photo",
      "TV & Homes",
    ],
  },
  {
    title: "Quick links",
    links: [
      "Shop Product",
      "Shopping Cart",
      "Wishlist",
      "Compare",
      "Track Order",
      "Customer Help",
      "About Us",
    ],
  },
  {
    title: "Popular Tag",
    tags: true,
    links: [
      "Game",
      "iPhone",
      "TV",
      "Asus Laptops",
      "Macbook",
      "SSD",
      "Graphics Card",
      "Power Bank",
      "Smart TV",
      "Speaker",
      "Tablet",
      "Microwave",
      "Samsung",
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="techassure home">
            <Image
              src="/images/logo-wordmark-light.png"
              alt="techassure"
              width={180}
              height={42}
              className={styles.logoImg}
            />
          </Link>
          <div className={styles.contact}>
            <p className={styles.label}>Customer Support:</p>
            <a href="tel:+233572273425">057 227 3425</a>
            <p>
              Sel Filling Station, UPSA
              <br />
              Accra, Ghana
            </p>
            <p className={styles.blurb}>
              Phones, laptops and accessories. We swap, buy &amp; sell. For
              purchases or enquiries, call{" "}
              <a href="tel:+233572273425">057 227 3425</a>.
            </p>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className={styles.colTitle}>{col.title}</h3>
            {col.tags ? (
              <div className={styles.tags}>
                {col.links.map((tag) => (
                  <a key={tag} href="#">
                    {tag}
                  </a>
                ))}
              </div>
            ) : (
              <ul className={styles.links}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link === "Accessories" ? <strong>Accessories</strong> : link}</a>
                  </li>
                ))}
                {col.title === "Top Category" && (
                  <li>
                    <a href="#" className={styles.browse}>
                      Browse All Product <ArrowRight size={16} />
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>
        ))}

        <div>
          <h3 className={styles.colTitle}>Download APP</h3>
          <div className={styles.apps}>
            <a href="#" className={styles.app}>
              <span>Get it now</span>
              <strong>Google Play</strong>
            </a>
            <a href="#" className={styles.app}>
              <span>Get it now</span>
              <strong>App Store</strong>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            techassure © {new Date().getFullYear()}. Phones, laptops &amp;
            accessories — swap, buy &amp; sell at UPSA.
          </p>
          <div className={styles.socials} aria-label="Social links">
            {["Tw", "Fb", "In", "Ig", "Yt"].map((label) => (
              <a key={label} href="#" className={styles.social} aria-label={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
