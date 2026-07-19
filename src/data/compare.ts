export type CompareProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  soldBy: string;
  brand: string;
  model: string;
  inStock: boolean;
  size: string;
  weight: string;
};

export const compareProducts: CompareProduct[] = [
  {
    id: "gamdias-ares-m2",
    title: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
    image: "/images/compare/keyboard-combo.png",
    price: 899,
    rating: 5,
    reviews: 51746385,
    soldBy: "techassure",
    brand: "StarTech",
    model: "ARES M2 and ZEUS E2",
    inStock: true,
    size: "6.71 inches, 110.5 cm",
    weight: "650 g (7.41 oz)",
  },
  {
    id: "apple-imac-24",
    title:
      'Apple iMac 24" 4K Retina Display M1 8 Core CPU, 8 Core GPU, 256GB SSD, Blue (MGPK3ZP/A) 2021',
    image: "/images/compare/imac.png",
    price: 1699,
    rating: 5,
    reviews: 673971743,
    soldBy: "Apple",
    brand: "Apple",
    model: 'Apple iMac 24" M1 Blue 2021',
    inStock: true,
    size: "6.7 inches, 109.8 cm",
    weight: "240 g (8.47 oz)",
  },
  {
    id: "samsung-galaxy-s21-fe",
    title:
      "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display.",
    image: "/images/compare/galaxy-s21.png",
    price: 699.99,
    rating: 5,
    reviews: 96459761,
    soldBy: "techassure",
    brand: "Samsung",
    model: "S21 FE",
    inStock: false,
    size: "6.4 inches, 98.9 cm",
    weight: "177 g (6.24 oz)",
  },
];
