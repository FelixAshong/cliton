"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRightLeft,
  Headphones,
  MapPin,
} from "lucide-react";
import styles from "./Header.module.css";

const links = [
  { href: "/track-order", label: "Track Order", Icon: MapPin },
  { href: "/compare", label: "Compare", Icon: ArrowRightLeft },
  { href: "/support", label: "Customer Support", Icon: Headphones },
] as const;

export function HeaderNavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map(({ href, label, Icon }) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={[styles.navItem, active ? styles.navItemActive : ""]
              .filter(Boolean)
              .join(" ")}
          >
            <Icon size={22} strokeWidth={1.5} /> {label}
          </Link>
        );
      })}
      <Link
        href="/help"
        className={[
          styles.navItem,
          pathname === "/help" ? styles.navItemActive : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className={styles.helpIcon}>?</span> Need Help
      </Link>
    </>
  );
}
