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
    title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
    image: "/images/products/ps5.png",
    price: 442.12,
    originalPrice: 865.99,
    badge: "sale",
    badgeLabel: "32% OFF",
    rating: 5,
    reviews: 52677,
    description:
      "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
    featured: true,
  },
  {
    id: "bose-earbuds",
    title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    image: "/images/products/earbuds.png",
    price: 2300,
    badge: "soldout",
    badgeLabel: "SOLD OUT",
  },
  {
    id: "simple-mobile",
    title: "Simple Mobile 4G LTE Prepaid Smartphone",
    image: "/images/products/phone.png",
    price: 220,
  },
  {
    id: "smart-tv",
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    image: "/images/products/tv.png",
    price: 150,
    originalPrice: 865,
    badge: "sale",
    badgeLabel: "19% OFF",
  },
  {
    id: "sony-camera",
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    image: "/images/products/camera.png",
    price: 1200,
  },
  {
    id: "dell-monitor",
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    image: "/images/products/monitor.png",
    price: 299,
  },
  {
    id: "portable-washer",
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    image: "/images/products/washer.png",
    price: 70,
    originalPrice: 865.99,
  },
  {
    id: "carburetor",
    title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    image: "/images/products/carb.png",
    price: 160,
    badge: "hot",
    badgeLabel: "HOT",
  },
  {
    id: "jbl-flip",
    title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
    image: "/images/products/speaker.png",
    price: 250,
    originalPrice: 360,
    badge: "sale",
    badgeLabel: "32% OFF",
  },
];

export const featuredProducts: Product[] = [
  {
    id: "fp-1",
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    image: "/images/products/earbuds.png",
    price: 70,
    badge: "hot",
    badgeLabel: "HOT",
    rating: 5,
    reviews: 738,
  },
  {
    id: "fp-2",
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    image: "/images/products/phone.png",
    price: 2300,
    rating: 5,
    reviews: 536,
  },
  {
    id: "fp-3",
    title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    image: "/images/products/monitor.png",
    price: 360,
    badge: "best",
    badgeLabel: "BEST DEALS",
    rating: 5,
    reviews: 423,
  },
  {
    id: "fp-4",
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
    image: "/images/products/washer.png",
    price: 80,
    badge: "sale",
    badgeLabel: "25% OFF",
    rating: 5,
    reviews: 816,
  },
  {
    id: "fp-5",
    title: "Wired Over-Ear Gaming Headphones with USB",
    image: "/images/categories/headphones.png",
    price: 1500,
    rating: 5,
    reviews: 647,
  },
  {
    id: "fp-6",
    title: "Polaroid 57-Inch Photo/Video Tripod with Compact...",
    image: "/images/categories/camera.png",
    price: 1200,
    originalPrice: 1600,
    badge: "sale",
    badgeLabel: "25% OFF",
    rating: 4,
    reviews: 877,
  },
  {
    id: "fp-7",
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    image: "/images/products/monitor.png",
    price: 250,
    rating: 5,
    reviews: 426,
  },
  {
    id: "fp-8",
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    image: "/images/products/tv.png",
    price: 220,
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
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      image: "/images/products/earbuds.png",
      price: 1500,
      originalPrice: 2300,
    },
    {
      id: "fs-2",
      title: "Simple Mobile 4G LTE Prepaid Smartphone",
      image: "/images/products/phone.png",
      price: 1699,
    },
    {
      id: "fs-3",
      title: "4K UHD LED Smart TV with Chromecast Built-in",
      image: "/images/products/tv.png",
      price: 299,
    },
  ],
  bestSellers: [
    {
      id: "bs-1",
      title: "Samsung Electronics Samsung Galaxy S21 5G",
      image: "/images/products/phone.png",
      price: 2300,
    },
    {
      id: "bs-2",
      title: "Simple Mobile 5G LTE Google Pixel 6a Smartphone 128GB",
      image: "/images/hero/pixel.png",
      price: 399,
    },
    {
      id: "bs-3",
      title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      image: "/images/products/camera.png",
      price: 1200,
    },
  ],
  topRated: [
    {
      id: "tr-1",
      title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
      image: "/images/products/washer.png",
      price: 70,
      originalPrice: 865.99,
    },
    {
      id: "tr-2",
      title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
      image: "/images/products/camera.png",
      price: 2300,
    },
    {
      id: "tr-3",
      title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      image: "/images/products/monitor.png",
      price: 299,
    },
  ],
  newArrival: [
    {
      id: "na-1",
      title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
      image: "/images/products/earbuds.png",
      price: 220,
    },
    {
      id: "na-2",
      title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker",
      image: "/images/products/speaker.png",
      price: 250,
      originalPrice: 360,
    },
    {
      id: "na-3",
      title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Cam",
      image: "/images/categories/camera.png",
      price: 1500,
    },
  ],
};
