export type Brand = {
  id: string;
  name: string;
  src: string;
};

/** Brand marks from uploaded assets in /public/images/brands */
export const brands: Brand[] = [
  { id: "sigma", name: "Sigma Appliances", src: "/images/brands/sigma.png" },
  { id: "lg", name: "LG", src: "/images/brands/lg.png" },
  { id: "tecno", name: "TECNO", src: "/images/brands/tecno.png" },
  { id: "jbl", name: "JBL", src: "/images/brands/jbl.png" },
  { id: "samsung", name: "Samsung", src: "/images/brands/samsung.png" },
  { id: "dell", name: "Dell", src: "/images/brands/dell.png" },
  { id: "grandstream", name: "Grandstream", src: "/images/brands/grandstream.png" },
  { id: "apple", name: "Apple", src: "/images/brands/apple.png" },
  { id: "belkin", name: "Belkin", src: "/images/brands/belkin.png" },
];
