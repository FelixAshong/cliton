export type Brand = {
  id: string;
  name: string;
  src: string;
};

/** Brand marks shown in the sliding strip. Files live in /public/images/brands. */
export const brands: Brand[] = [
  { id: "apple", name: "Apple", src: "/images/brands/apple.svg" },
  { id: "samsung", name: "Samsung", src: "/images/brands/samsung.svg" },
  { id: "sony", name: "Sony", src: "/images/brands/sony.svg" },
  { id: "lg", name: "LG", src: "/images/brands/lg.svg" },
  { id: "dell", name: "Dell", src: "/images/brands/dell.svg" },
  { id: "hp", name: "HP", src: "/images/brands/hp.svg" },
  { id: "lenovo", name: "Lenovo", src: "/images/brands/lenovo.svg" },
  { id: "asus", name: "ASUS", src: "/images/brands/asus.svg" },
  { id: "microsoft", name: "Microsoft", src: "/images/brands/microsoft.svg" },
  { id: "xiaomi", name: "Xiaomi", src: "/images/brands/xiaomi.svg" },
  { id: "google", name: "Google", src: "/images/brands/google.svg" },
  { id: "jbl", name: "JBL", src: "/images/brands/jbl.svg" },
  { id: "acer", name: "Acer", src: "/images/brands/acer.svg" },
  { id: "nintendo", name: "Nintendo", src: "/images/brands/nintendo.svg" },
];
