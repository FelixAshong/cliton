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
  featuredTitle: string;
  brands: string[];
  featured: NavFeaturedProduct[];
  promo: {
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
    featuredTitle: "Featured laptops",
    brands: ["All", "Apple", "Dell", "HP", "Lenovo", "Asus", "Acer", "Microsoft"],
    featured: [
      {
        id: "nav-laptop-1",
        title: "MacBook Pro M4 — 14-inch Liquid Retina XDR",
        image: "/images/products/macbook-pro.png",
        price: 18990,
      },
      {
        id: "nav-laptop-2",
        title: "MacBook Air M4 — Lightweight Everyday Laptop",
        image: "/images/products/macbook-m4.png",
        price: 14990,
      },
      {
        id: "nav-laptop-3",
        title: "Dell Optiplex All-in-One Computer Monitor",
        image: "/images/products/monitor.png",
        price: 4490,
        originalPrice: 5290,
      },
    ],
    promo: {
      title: "15% Discount",
      description: "Power through work and school with our latest MacBook deals.",
      priceLabel: "GH₵14,990",
      image: "/images/products/macbook-m4.png",
      href: "#products",
    },
  },
  {
    id: "accessories",
    name: "Computer Accessories",
    href: "#products",
    featuredTitle: "Featured accessories",
    brands: ["All", "Logitech", "Belkin", "Anker", "Samsung", "JBL", "Apple"],
    featured: [
      {
        id: "nav-acc-1",
        title: "Mechanical Keyboard & Gaming Mouse Combo",
        image: "/images/categories/accessories.png",
        price: 890,
        originalPrice: 1190,
      },
      {
        id: "nav-acc-2",
        title: "USB-C Hub Multiport Adapter for MacBook",
        image: "/images/categories/laptop.png",
        price: 490,
      },
      {
        id: "nav-acc-3",
        title: "High-Speed HDMI Cable 18 Gbps (4K / 60Hz)",
        image: "/images/products/monitor.png",
        price: 85,
      },
    ],
    promo: {
      title: "25% Discount",
      description: "Upgrade your desk setup with keyboards, hubs, and more.",
      priceLabel: "GH₵180",
      image: "/images/categories/accessories.png",
      href: "#products",
    },
  },
  {
    id: "phone",
    name: "SmartPhone",
    href: "#products",
    featuredTitle: "Featured phones",
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
        title: "Tecno Spark 20 — Dual SIM 4G Smartphone",
        image: "/images/products/phone.png",
        price: 1299,
        originalPrice: 1590,
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
  {
    id: "headphones",
    name: "Headphone",
    href: "#products",
    featuredTitle: "Featured headphones",
    brands: ["All", "Sony", "JBL", "Bose", "Apple", "Samsung", "TOZO"],
    featured: [
      {
        id: "nav-hp-1",
        title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
        image: "/images/products/earbuds.png",
        price: 450,
      },
      {
        id: "nav-hp-2",
        title: "Bose Sport Earbuds - Wireless Earphones",
        image: "/images/hero/earbuds.png",
        price: 3450,
      },
      {
        id: "nav-hp-3",
        title: "Wired Over-Ear Gaming Headphones with USB",
        image: "/images/categories/headphones.png",
        price: 890,
        originalPrice: 1190,
      },
    ],
    promo: {
      title: "30% Discount",
      description: "Immersive sound for music, calls, and gaming on the go.",
      priceLabel: "GH₵450",
      image: "/images/products/earbuds.png",
      href: "#products",
    },
  },
  {
    id: "mobile-accessories",
    name: "Mobile Accessories",
    href: "#products",
    featuredTitle: "Featured accessories",
    brands: ["All", "Cases", "Chargers", "Power Banks", "Cables", "Screen Protectors"],
    featured: [
      {
        id: "nav-ma-1",
        title: "20000mAh Fast Charge Power Bank — Dual USB",
        image: "/images/products/carb.png",
        price: 320,
      },
      {
        id: "nav-ma-2",
        title: "Samsung Galaxy Buds — Wireless Charging Case",
        image: "/images/hero/earbuds.png",
        price: 1290,
      },
      {
        id: "nav-ma-3",
        title: "USB-C Hub Multiport Adapter for MacBook",
        image: "/images/categories/laptop.png",
        price: 490,
        originalPrice: 620,
      },
    ],
    promo: {
      title: "18% Discount",
      description: "Stay powered all day with our best-selling power banks.",
      priceLabel: "GH₵320",
      image: "/images/products/carb.png",
      href: "#products",
    },
  },
  {
    id: "gaming",
    name: "Gaming Console",
    href: "#products",
    featuredTitle: "Featured consoles",
    brands: ["All", "PlayStation", "Xbox", "Nintendo", "Steam Deck"],
    featured: [
      {
        id: "nav-game-1",
        title: "Xbox Series S - 512GB SSD Console with Wireless Controller",
        image: "/images/products/ps5.png",
        price: 6630,
        originalPrice: 12990,
      },
      {
        id: "nav-game-2",
        title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker",
        image: "/images/products/speaker.png",
        price: 1890,
      },
      {
        id: "nav-game-3",
        title: "Wired Over-Ear Gaming Headphones with USB",
        image: "/images/categories/headphones.png",
        price: 890,
      },
    ],
    promo: {
      title: "32% Discount",
      description: "Next-gen gaming with faster load times and sharper visuals.",
      priceLabel: "GH₵6,630",
      image: "/images/products/ps5.png",
      href: "#products",
    },
  },
  {
    id: "camera",
    name: "Camera & Photo",
    href: "#products",
    featuredTitle: "Featured cameras",
    brands: ["All", "Sony", "Canon", "Nikon", "GoPro", "DJI"],
    featured: [
      {
        id: "nav-cam-1",
        title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
        image: "/images/products/camera.png",
        price: 8990,
      },
      {
        id: "nav-cam-2",
        title: "Indoor Wi-Fi Smart Security Camera",
        image: "/images/categories/camera.png",
        price: 690,
      },
      {
        id: "nav-cam-3",
        title: "Tripod with Compact Carry Case",
        image: "/images/categories/camera.png",
        price: 320,
        originalPrice: 450,
      },
    ],
    promo: {
      title: "20% Discount",
      description: "Capture every moment with pro-ready cameras and gear.",
      priceLabel: "GH₵8,990",
      image: "/images/products/camera.png",
      href: "#products",
    },
  },
  {
    id: "tv",
    name: "TV & Homes Appliances",
    href: "#products",
    featuredTitle: "Featured home tech",
    brands: ["All", "Samsung", "LG", "Sony", "Hisense", "TCL"],
    featured: [
      {
        id: "nav-tv-1",
        title: "4K UHD LED Smart TV with Chromecast Built-in",
        image: "/images/products/tv.png",
        price: 4590,
        originalPrice: 5690,
      },
      {
        id: "nav-tv-2",
        title: "Portable Washing Machine, 11lbs capacity",
        image: "/images/products/washer.png",
        price: 1890,
        originalPrice: 2490,
      },
      {
        id: "nav-tv-3",
        title: "Dell Optiplex All-in-One Computer Monitor",
        image: "/images/products/monitor.png",
        price: 4490,
      },
    ],
    promo: {
      title: "19% Discount",
      description: "Bring cinema home with our 4K smart TVs and appliances.",
      priceLabel: "GH₵4,590",
      image: "/images/products/tv.png",
      href: "#products",
    },
  },
  {
    id: "watches",
    name: "Watches & Accessories",
    href: "#products",
    featuredTitle: "Featured watches",
    brands: ["All", "Apple", "Samsung", "Huawei", "Garmin", "Fitbit"],
    featured: [
      {
        id: "nav-watch-1",
        title: "Samsung Galaxy S21 5G — Dual SIM",
        image: "/images/products/phone.png",
        price: 5490,
      },
      {
        id: "nav-watch-2",
        title: "20000mAh Fast Charge Power Bank — Dual USB",
        image: "/images/products/carb.png",
        price: 320,
      },
      {
        id: "nav-watch-3",
        title: "TOZO T6 True Wireless Earbuds",
        image: "/images/products/earbuds.png",
        price: 450,
        originalPrice: 590,
      },
    ],
    promo: {
      title: "22% Discount",
      description: "Track fitness and stay connected with smart wearables.",
      priceLabel: "GH₵1,290",
      image: "/images/hero/earbuds.png",
      href: "#products",
    },
  },
  {
    id: "gps",
    name: "GPS & Navigation",
    href: "#products",
    featuredTitle: "Featured navigation",
    brands: ["All", "Garmin", "TomTom", "Google", "Apple"],
    featured: [
      {
        id: "nav-gps-1",
        title: "Google Pixel 6a Smartphone 128GB",
        image: "/images/hero/pixel.png",
        price: 4990,
      },
      {
        id: "nav-gps-2",
        title: "Samsung Galaxy S21 5G — Dual SIM",
        image: "/images/products/phone.png",
        price: 5490,
      },
      {
        id: "nav-gps-3",
        title: "USB-C Hub Multiport Adapter for MacBook",
        image: "/images/categories/laptop.png",
        price: 490,
      },
    ],
    promo: {
      title: "12% Discount",
      description: "Find your way with reliable GPS and navigation devices.",
      priceLabel: "GH₵4,990",
      image: "/images/hero/pixel.png",
      href: "#products",
    },
  },
  {
    id: "wearable",
    name: "Wearable Technology",
    href: "#products",
    featuredTitle: "Featured wearables",
    brands: ["All", "Apple", "Samsung", "Fitbit", "Garmin", "Xiaomi"],
    featured: [
      {
        id: "nav-wear-1",
        title: "Bose Sport Earbuds - Wireless Earphones",
        image: "/images/products/earbuds.png",
        price: 3450,
      },
      {
        id: "nav-wear-2",
        title: "Samsung Galaxy Buds — Wireless Charging Case",
        image: "/images/hero/earbuds.png",
        price: 1290,
      },
      {
        id: "nav-wear-3",
        title: "TOZO T6 True Wireless Earbuds",
        image: "/images/products/earbuds.png",
        price: 450,
        originalPrice: 590,
      },
    ],
    promo: {
      title: "28% Discount",
      description: "Wearable tech that keeps you moving, listening, and connected.",
      priceLabel: "GH₵450",
      image: "/images/products/earbuds.png",
      href: "#products",
    },
  },
];
