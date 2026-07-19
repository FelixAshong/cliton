export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
};

export const cartItems: CartItem[] = [
  {
    id: "smart-tv-4k",
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    image: "/images/products/tv.png",
    price: 70,
    originalPrice: 99,
    quantity: 1,
  },
  {
    id: "gaming-headphones",
    title: "Wired Over-Ear Gaming Headphones with USB",
    image: "/images/products/earbuds.png",
    price: 250,
    quantity: 3,
  },
];
