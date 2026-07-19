export type NavFeaturedProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
};

export type NavCategory = {
  id: string;
  name: string;
  href: string;
  brands?: string[];
  featured?: NavFeaturedProduct[];
  promo?: {
    title: string;
    description: string;
    priceLabel: string;
    image: string;
    href: string;
  };
};

export const navCategories: NavCategory[] = [
  {
    id: "laptop",
    name: "Computer & Laptop",
    href: "#products",
    brands: ["All", "Apple", "Dell", "HP", "Lenovo", "Asus", "Acer"],
  },
  {
    id: "accessories",
    name: "Computer Accessories",
    href: "#products",
    brands: ["All", "Logitech", "Belkin", "Anker", "Samsung", "JBL"],
  },
  {
    id: "phone",
    name: "SmartPhone",
    href: "#products",
    brands: [
      "All",
      "iPhone",
      "Samsung",
      "Tecno",
      "Infinix",
      "Xiaomi",
      "Google",
      "OnePlus",
      "Oppo",
      "Vivo",
      "Huawei",
    ],
    featured: [
      {
        id: "nav-fp-1",
        title: "Samsung Galaxy S21 5G — Dual SIM",
        image: "/images/products/phone.png",
        price: 5490,
      },
      {
        id: "nav-fp-2",
        title: "Google Pixel 6a Smartphone 128GB",
        image: "/images/hero/pixel.png",
        price: 4990,
      },
      {
        id: "nav-fp-3",
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        image: "/images/products/camera.png",
        price: 8990,
        originalPrice: 11200,
      },
    ],
    promo: {
      title: "21% Discount",
      description: "Escape the noise — hear the magic with wireless earbuds.",
      priceLabel: "GH₵450",
      image: "/images/products/earbuds.png",
      href: "#products",
    },
  },
  { id: "headphones", name: "Headphone", href: "#products" },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    href: "#products",
    brands: ["All", "Cases", "Chargers", "Power Banks", "Screen Protectors"],
  },
  { id: "gaming", name: "Gaming Console", href: "#products" },
  { id: "camera", name: "Camera & Photo", href: "#products" },
  { id: "tv", name: "TV & Homes Appliances", href: "#products" },
  { id: "watches", name: "Watches & Accessories", href: "#products" },
  { id: "gps", name: "GPS & Navigation", href: "#products" },
  { id: "wearable", name: "Wearable Technology", href: "#products" },
];
