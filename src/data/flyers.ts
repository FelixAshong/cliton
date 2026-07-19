export type Flyer = {
  id: string;
  src: string;
  alt: string;
  title: string;
  href?: string;
};

/** Real promo flyers — card is 1:1; images use object-fit contain. */
export const flyers: Flyer[] = [
  {
    id: "iphone-17-pro-max",
    src: "/images/flyers/iphone-17-pro-max.png",
    alt: "iPhone 17 Pro Max eSIM unlocked — 256GB GHS 24,500, 512GB GHS 26,500",
    title: "iPhone 17 Pro Max",
    href: "#products",
  },
  {
    id: "ipad-11th-gen",
    src: "/images/flyers/ipad-11th-gen.png",
    alt: "iPad 11th Gen WiFi only mid year promotion — 128GB GHS 5,700, 256GB GHS 7,900",
    title: "iPad 11th Gen",
    href: "#products",
  },
  {
    id: "ipad-10th-gen",
    src: "/images/flyers/ipad-10th-gen.png",
    alt: "iPad 10th Gen WiFi only mid year promotion — 64GB GHS 4,900, 256GB GHS 6,500",
    title: "iPad 10th Gen",
    href: "#products",
  },
  {
    id: "campus-tour",
    src: "/images/flyers/campus-tour.png",
    alt: "techassure Campus Tour backdrop",
    title: "Campus Tour",
    href: "#products",
  },
  {
    id: "workers-day",
    src: "/images/flyers/workers-day-flash-sale.png",
    alt: "Workers' Day Flash Sale — 30% off selected devices, free Accra delivery above GHS5,000",
    title: "Workers' Day Flash Sale",
    href: "#deals",
  },
];
