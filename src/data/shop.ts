import {
  bestDeals,
  computerAccessories,
  featuredProducts,
  listProducts,
  type Product,
} from "@/data/products";

export type ShopProduct = Product & {
  category: string;
  brand: string;
  tags: string[];
};

export const shopCategories = [
  "Electronics Devices",
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watches & Accessories",
  "GPS & Navigation",
  "Wearable Technology",
] as const;

export const shopBrands = [
  "Apple",
  "Google",
  "Microsoft",
  "Samsung",
  "Dell",
  "HP",
  "Symphony",
  "Xiaomi",
  "Sony",
  "Panasonic",
  "LG",
  "Intel",
  "OnePlus",
  "Tecno",
  "JBL",
] as const;

export const shopTags = [
  "Game",
  "iPhone",
  "TV",
  "Asus Laptops",
  "Macbook",
  "SSD",
  "Graphics Card",
  "Power Bank",
  "Smart TV",
  "Speaker",
  "Tablet",
  "Microwave",
  "Samsung",
] as const;

export const pricePresets = [
  { id: "all", label: "All Price", min: 0, max: Infinity },
  { id: "u20", label: "Under GH₵500", min: 0, max: 500 },
  { id: "500-1500", label: "GH₵500 to GH₵1,500", min: 500, max: 1500 },
  { id: "1500-3500", label: "GH₵1,500 to GH₵3,500", min: 1500, max: 3500 },
  { id: "3500-5500", label: "GH₵3,500 to GH₵5,500", min: 3500, max: 5500 },
  { id: "5500-10000", label: "GH₵5,500 to GH₵10,000", min: 5500, max: 10000 },
  { id: "10000+", label: "GH₵10,000+", min: 10000, max: Infinity },
] as const;

function inferBrand(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("apple") || lower.includes("macbook") || lower.includes("iphone")) return "Apple";
  if (lower.includes("google") || lower.includes("pixel")) return "Google";
  if (lower.includes("samsung")) return "Samsung";
  if (lower.includes("dell")) return "Dell";
  if (lower.includes("sony")) return "Sony";
  if (lower.includes("tecno")) return "Tecno";
  if (lower.includes("jbl")) return "JBL";
  if (lower.includes("xiaomi")) return "Xiaomi";
  if (lower.includes("lg")) return "LG";
  if (lower.includes("hp")) return "HP";
  if (lower.includes("microsoft") || lower.includes("xbox")) return "Microsoft";
  return "techassure";
}

function inferCategory(title: string, image: string): string {
  const t = `${title} ${image}`.toLowerCase();
  if (t.includes("laptop") || t.includes("macbook")) return "Computer & Laptop";
  if (t.includes("phone") || t.includes("pixel") || t.includes("galaxy")) return "SmartPhone";
  if (t.includes("headphone") || t.includes("earbud") || t.includes("earphone")) return "Headphone";
  if (t.includes("camera")) return "Camera & Photo";
  if (t.includes("tv") || t.includes("washer")) return "TV & Homes Appliances";
  if (t.includes("xbox") || t.includes("ps5") || t.includes("console") || t.includes("game"))
    return "Gaming Console";
  if (t.includes("monitor") || t.includes("keyboard") || t.includes("mouse") || t.includes("hub"))
    return "Computer Accessories";
  if (t.includes("power") || t.includes("speaker") || t.includes("cable")) return "Mobile Accessories";
  return "Electronics Devices";
}

function inferTags(title: string, category: string): string[] {
  const tags: string[] = [];
  const lower = title.toLowerCase();
  if (lower.includes("macbook")) tags.push("Macbook");
  if (lower.includes("iphone")) tags.push("iPhone");
  if (lower.includes("tv")) tags.push("TV", "Smart TV");
  if (lower.includes("speaker")) tags.push("Speaker");
  if (lower.includes("ssd") || lower.includes("512")) tags.push("SSD");
  if (lower.includes("power")) tags.push("Power Bank");
  if (lower.includes("samsung")) tags.push("Samsung");
  if (lower.includes("xbox") || lower.includes("game")) tags.push("Game");
  if (category.includes("Laptop")) tags.push("Asus Laptops");
  if (tags.length === 0) tags.push("Graphics Card");
  return tags;
}

function toShopProduct(product: Product): ShopProduct {
  const category = inferCategory(product.title, product.image);
  const brand = inferBrand(product.title);
  return {
    ...product,
    category,
    brand,
    tags: inferTags(product.title, category),
  };
}

function uniqueById(items: ShopProduct[]) {
  const map = new Map<string, ShopProduct>();
  for (const item of items) {
    if (!map.has(item.id)) map.set(item.id, item);
  }
  return Array.from(map.values());
}

const catalogSeed: Product[] = [
  ...bestDeals,
  ...featuredProducts,
  ...computerAccessories,
  ...listProducts.flashSale,
  ...listProducts.bestSellers,
  ...listProducts.topRated,
  ...listProducts.newArrival,
];

export const shopProducts: ShopProduct[] = uniqueById(catalogSeed.map(toShopProduct));

export const PAGE_SIZE = 12;
