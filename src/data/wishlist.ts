export type WishlistItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
};

export const wishlistItems: WishlistItem[] = [
  {
    id: "bose-earbuds",
    title:
      "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
    image: "/images/products/earbuds.png",
    price: 999,
    originalPrice: 1299,
    inStock: true,
  },
  {
    id: "simple-mobile",
    title: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
    image: "/images/products/phone.png",
    price: 2300,
    inStock: true,
  },
  {
    id: "portable-washer",
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    image: "/images/products/washer.png",
    price: 70,
    inStock: true,
  },
  {
    id: "fp-1",
    title:
      "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control with Wireless Charging Case IPX8 Waterproof Stereo Earphones in-Ear",
    image: "/images/products/earbuds.png",
    price: 220,
    originalPrice: 250,
    inStock: false,
  },
  {
    id: "wyze-cam",
    title:
      "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera with Color Night Vision, 2-Way Audio",
    image: "/images/categories/camera.png",
    price: 1499.99,
    inStock: true,
  },
];
