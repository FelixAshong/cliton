export type Flyer = {
  id: string;
  src: string;
  alt: string;
  title: string;
  href?: string;
};

/** Drop flyer images in /public/images/flyers and list them here.
 *  Flyers are shown in a 4:5 portrait card — use that size when possible. */
export const flyers: Flyer[] = [
  {
    id: "workers-day",
    src: "/images/flyers/workers-day-flash-sale.png",
    alt: "Workers' Day Flash Sale — 30% off selected devices, free Accra delivery above GHS5,000",
    title: "Workers' Day Flash Sale",
    href: "#deals",
  },
  {
    id: "1",
    src: "/images/flyers/flyer-1.svg",
    alt: "Weekend gadget deals across Accra",
    title: "Weekend Deals",
    href: "#deals",
  },
  {
    id: "2",
    src: "/images/flyers/flyer-2.svg",
    alt: "Back to campus laptop promo",
    title: "Campus Tech",
    href: "#products",
  },
  {
    id: "3",
    src: "/images/flyers/flyer-3.svg",
    alt: "MoMo payment offer flyer",
    title: "Pay with MoMo",
    href: "#products",
  },
  {
    id: "4",
    src: "/images/flyers/flyer-4.svg",
    alt: "Accessories bundle flyer",
    title: "Accessories Bundle",
    href: "#accessories",
  },
];
