export type BadgeType = "hot" | "sale" | "soldout" | "best" | null;

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: BadgeType;
  badgeLabel?: string;
  rating?: number;
  reviews?: number;
  description?: string;
  featured?: boolean;
};

export const bestDeals: Product[] = [
  {
    id: "xbox-series-s",
    title: "Xbox Series S - 512GB SSD Console with Wireless Controller",
    image: "/images/products/ps5.png",
    price: 6630,
    originalPrice: 12990,
    badge: "sale",
    badgeLabel: "32% OFF",
    rating: 5,
    reviews: 526,
    description:
      "Official Ghana stock. Fast delivery in Accra — play with quicker load times and sharper visuals.",
    featured: true,
  },
  {
    id: "bose-earbuds",
    title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear",
    image: "/images/products/earbuds.png",
    price: 3450,
    badge: "soldout",
    badgeLabel: "SOLD OUT",
  },
  {
    id: "simple-mobile",
    title: "Tecno Spark 20 — Dual SIM 4G Smartphone",
    image: "/images/products/phone.png",
    price: 1299,
  },
  {
    id: "smart-tv",
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    image: "/images/products/tv.png",
    price: 4590,
    originalPrice: 5690,
    badge: "sale",
    badgeLabel: "19% OFF",
  },
  {
    id: "sony-camera",
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    image: "/images/products/camera.png",
    price: 8990,
  },
  {
    id: "dell-monitor",
    title: "Dell Optiplex All-in-One Computer Monitor",
    image: "/images/products/monitor.png",
    price: 4490,
  },
  {
    id: "portable-washer",
    title: "Portable Washing Machine, 11lbs capacity",
    image: "/images/products/washer.png",
    price: 1890,
    originalPrice: 2490,
  },
  {
    id: "power-bank",
    title: "20000mAh Fast Charge Power Bank — Dual USB",
    image: "/images/products/carb.png",
    price: 320,
    badge: "hot",
    badgeLabel: "HOT",
  },
  {
    id: "jbl-flip",
    title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker",
    image: "/images/products/speaker.png",
    price: 1890,
    originalPrice: 2490,
    badge: "sale",
    badgeLabel: "32% OFF",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "fp-1",
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/products/earbuds.png",
    price: 450,
    badge: "hot",
    badgeLabel: "HOT",
    rating: 5,
    reviews: 738,
  },
  {
    id: "fp-2",
    title: "Samsung Galaxy S21 5G — Dual SIM",
    image: "/images/products/phone.png",
    price: 5490,
    rating: 5,
    reviews: 536,
  },
  {
    id: "fp-3",
    title: "High-Speed HDMI Cable (18 Gbps, 4K)",
    image: "/images/products/monitor.png",
    price: 85,
    badge: "best",
    badgeLabel: "BEST DEALS",
    rating: 5,
    reviews: 423,
  },
  {
    id: "fp-4",
    title: "Portable Washing Machine, 11lbs capacity",
    image: "/images/products/washer.png",
    price: 1890,
    badge: "sale",
    badgeLabel: "25% OFF",
    rating: 5,
    reviews: 816,
  },
  {
    id: "fp-5",
    title: "Wired Over-Ear Gaming Headphones with USB",
    image: "/images/categories/headphones.png",
    price: 890,
    rating: 5,
    reviews: 647,
  },
  {
    id: "fp-6",
    title: "Tripod with Compact Carry Case",
    image: "/images/categories/camera.png",
    price: 320,
    originalPrice: 450,
    badge: "sale",
    badgeLabel: "25% OFF",
    rating: 4,
    reviews: 877,
  },
  {
    id: "fp-7",
    title: "Dell Optiplex All-in-One Computer Monitor",
    image: "/images/products/monitor.png",
    price: 4490,
    rating: 5,
    reviews: 426,
  },
  {
    id: "fp-8",
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    image: "/images/products/tv.png",
    price: 4590,
    badge: "sale",
    badgeLabel: "SALE",
    rating: 5,
    reviews: 583,
  },
];

export const computerAccessories: Product[] = [
  {
    id: "acc-1",
    title: "TOZO T6 True Wireless Earbuds",
    image: "/images/products/earbuds.png",
    price: 450,
    badge: "hot",
    badgeLabel: "HOT",
    rating: 5,
    reviews: 738,
  },
  {
    id: "acc-2",
    title: "Samsung Galaxy Buds — Wireless Charging Case",
    image: "/images/hero/earbuds.png",
    price: 1290,
    rating: 5,
    reviews: 536,
  },
  {
    id: "acc-3",
    title: "High-Speed HDMI Cable 18 Gbps (4K / 60Hz)",
    image: "/images/products/monitor.png",
    price: 85,
    badge: "best",
    badgeLabel: "BEST DEALS",
    rating: 5,
    reviews: 423,
  },
  {
    id: "acc-4",
    title: "Mechanical Keyboard & Gaming Mouse Combo",
    image: "/images/categories/accessories.png",
    price: 890,
    badge: "sale",
    badgeLabel: "25% OFF",
    rating: 5,
    reviews: 816,
  },
  {
    id: "acc-5",
    title: "Wired Over-Ear Gaming Headphones with USB",
    image: "/images/categories/headphones.png",
    price: 890,
    rating: 5,
    reviews: 647,
  },
  {
    id: "acc-6",
    title: "20000mAh Fast Charge Power Bank",
    image: "/images/products/speaker.png",
    price: 320,
    originalPrice: 450,
    badge: "sale",
    badgeLabel: "25% OFF",
    rating: 4,
    reviews: 877,
  },
  {
    id: "acc-7",
    title: "USB-C Hub Multiport Adapter for MacBook",
    image: "/images/categories/laptop.png",
    price: 490,
    rating: 5,
    reviews: 426,
  },
  {
    id: "acc-8",
    title: "Wireless Mouse — Silent Click, USB Receiver",
    image: "/images/products/monitor.png",
    price: 180,
    badge: "sale",
    badgeLabel: "SALE",
    rating: 5,
    reviews: 583,
  },
];

export const categories = [
  { id: "laptop", name: "Computer & Laptop", image: "/images/categories/laptop.png" },
  { id: "phone", name: "SmartPhone", image: "/images/categories/smartphone.png" },
  { id: "headphones", name: "Headphones", image: "/images/categories/headphones.png" },
  { id: "accessories", name: "Accessories", image: "/images/categories/accessories.png" },
  { id: "camera", name: "Camera & Photo", image: "/images/categories/camera.png" },
  { id: "tv", name: "TV & Homes", image: "/images/categories/tv.png" },
];

export const listProducts = {
  flashSale: [
    {
      id: "fs-1",
      title: "Bose Sport Earbuds - Wireless Earphones",
      image: "/images/products/earbuds.png",
      price: 2890,
      originalPrice: 3450,
    },
    {
      id: "fs-2",
      title: "Tecno Camon 30 — 5G Dual SIM Smartphone",
      image: "/images/products/phone.png",
      price: 3190,
    },
    {
      id: "fs-3",
      title: "4K UHD LED Smart TV with Chromecast Built-in",
      image: "/images/products/tv.png",
      price: 4590,
    },
  ],
  bestSellers: [
    {
      id: "bs-1",
      title: "Samsung Galaxy S21 5G — Dual SIM",
      image: "/images/products/phone.png",
      price: 5490,
    },
    {
      id: "bs-2",
      title: "Google Pixel 6a Smartphone 128GB",
      image: "/images/hero/pixel.png",
      price: 4990,
    },
    {
      id: "bs-3",
      title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      image: "/images/products/camera.png",
      price: 8990,
    },
  ],
  topRated: [
    {
      id: "tr-1",
      title: "Portable Washing Machine, 11lbs capacity",
      image: "/images/products/washer.png",
      price: 1890,
      originalPrice: 2490,
    },
    {
      id: "tr-2",
      title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      image: "/images/products/camera.png",
      price: 8990,
    },
    {
      id: "tr-3",
      title: "Dell Optiplex All-in-One Computer Monitor",
      image: "/images/products/monitor.png",
      price: 4490,
    },
  ],
  newArrival: [
    {
      id: "na-1",
      title: "TOZO T6 True Wireless Earbuds",
      image: "/images/products/earbuds.png",
      price: 450,
    },
    {
      id: "na-2",
      title: "JBL FLIP 4 - Waterproof Bluetooth Speaker",
      image: "/images/products/speaker.png",
      price: 1890,
      originalPrice: 2490,
    },
    {
      id: "na-3",
      title: "Indoor Wi-Fi Smart Security Camera",
      image: "/images/categories/camera.png",
      price: 690,
    },
  ],
};
