export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

export const cartItems: CartItem[] = [
  {
    id: "cart-camera",
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    image: "/images/products/camera.png",
    price: 8990,
    quantity: 1,
  },
  {
    id: "cart-phone",
    title: "Tecno Spark 20 — Dual SIM 4G Smartphone",
    image: "/images/products/phone.png",
    price: 1299,
    quantity: 2,
  },
];
