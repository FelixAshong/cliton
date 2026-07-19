import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightLeft,
  ChevronDown,
  Heart,
  Headphones,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  SnapchatIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";
import { PromoBanner } from "./PromoBanner";
import styles from "./Header.module.css";

const socials = [
  { name: "Snapchat", href: "#", Icon: SnapchatIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "TikTok", href: "#", Icon: TikTokIcon },
  { name: "Facebook", href: "#", Icon: FacebookIcon },
] as const;

export function Header() {
  return (
    <header className={styles.header}>
      <PromoBanner />

      <div className={styles.topBar}>
        <div className={`container ${styles.topInner}`}>
          <p>Welcome to techassure — your online tech store.</p>
          <div className={styles.topRight}>
            <div className={styles.follow}>
              <span>Follow us:</span>
              <div className={styles.socials}>
                {socials.map(({ name, href, Icon }) => (
                  <a key={name} href={href} aria-label={name} className={styles.socialLink}>
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={`container ${styles.mainInner}`}>
          <Link href="/" className={styles.logo} aria-label="techassure home">
            <Image
              src="/images/logo-wordmark-light.png"
              alt="techassure"
              width={200}
              height={47}
              priority
              className={styles.logoImg}
            />
          </Link>

          <form className={styles.search} role="search">
            <input type="search" placeholder="Search for anything..." aria-label="Search" />
            <button type="submit" aria-label="Submit search">
              <Search size={20} />
            </button>
          </form>

          <div className={styles.actions}>
            <Link href="/cart" className={styles.cart} aria-label="Shopping cart">
              <ShoppingCart size={28} strokeWidth={1.5} />
              <span>2</span>
            </Link>
            <Link href="/wishlist" aria-label="Wishlist">
              <Heart size={28} strokeWidth={1.5} />
            </Link>
            <Link href="/account" aria-label="Account">
              <User size={28} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.bottomNav}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.bottomLeft}>
            <button type="button" className={styles.categoryBtn}>
              All Category <ChevronDown size={16} />
            </button>
            <Link href="/track-order" className={styles.navItem}>
              <MapPin size={22} strokeWidth={1.5} /> Track Order
            </Link>
            <Link href="/compare" className={styles.navItem}>
              <ArrowRightLeft size={22} strokeWidth={1.5} /> Compare
            </Link>
            <Link href="/support" className={styles.navItem}>
              <Headphones size={22} strokeWidth={1.5} /> Customer Support
            </Link>
            <Link href="/help" className={styles.navItem}>
              <span className={styles.helpIcon}>?</span> Need Help
            </Link>
          </div>
          <a href="tel:+233302555010" className={styles.phone}>
            <Phone size={22} strokeWidth={1.5} />
            +233 30 255 5010
          </a>
        </div>
      </div>
    </header>
  );
}
