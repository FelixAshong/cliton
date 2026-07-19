import Image from "next/image";
import Link from "next/link";
import { Heart, Phone, Search } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  SnapchatIcon,
  TikTokIcon,
} from "@/components/icons/SocialIcons";
import { CartPopup } from "./CartPopup";
import { CategoryMegaMenu } from "./CategoryMegaMenu";
import { HeaderNavLinks } from "./HeaderNavLinks";
import { PromoBanner } from "./PromoBanner";
import { SignInPopup } from "./SignInPopup";
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
          <p>Phones, laptops &amp; accessories — we swap, buy &amp; sell.</p>
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
              className={styles.logoWordmark}
            />
            <Image
              src="/icons/icon-192.png"
              alt="techassure"
              width={40}
              height={40}
              priority
              className={styles.logoIcon}
            />
          </Link>

          <form
            className={styles.search}
            role="search"
            action="/shop"
            method="get"
          >
            <input
              type="search"
              name="q"
              placeholder="Search for anything..."
              aria-label="Search"
            />
            <button type="submit" aria-label="Submit search">
              <Search size={20} />
            </button>
          </form>

          <div className={styles.actions}>
            <CartPopup />
            <Link href="/wishlist" aria-label="Wishlist">
              <Heart size={28} strokeWidth={1.5} />
            </Link>
            <SignInPopup />
          </div>
        </div>
      </div>

      <div className={styles.bottomNav}>
        <div className={`container ${styles.bottomInner}`}>
          <div className={styles.bottomLeft}>
            <CategoryMegaMenu />
            <HeaderNavLinks />
          </div>
          <a href="tel:+233572273425" className={styles.phone}>
            <Phone size={22} strokeWidth={1.5} />
            057 227 3425
          </a>
        </div>
      </div>
    </header>
  );
}
