import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";
import { ProductDetailPage } from "@/components/product/ProductDetailPage";
import { allProducts, getProductById } from "@/data/products";

type PageProps = {
  params: Promise<{ id: string }>;
};

function inferBrand(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("apple") || lower.includes("macbook") || lower.includes("iphone"))
    return "Apple";
  if (lower.includes("google") || lower.includes("pixel")) return "Google";
  if (lower.includes("samsung")) return "Samsung";
  if (lower.includes("dell")) return "Dell";
  if (lower.includes("sony")) return "Sony";
  if (lower.includes("tecno")) return "Tecno";
  if (lower.includes("jbl")) return "JBL";
  if (lower.includes("xiaomi")) return "Xiaomi";
  if (lower.includes("bose")) return "Bose";
  if (lower.includes("tozo")) return "TOZO";
  return "techassure";
}

function inferCategory(title: string, image: string): string {
  const t = `${title} ${image}`.toLowerCase();
  if (t.includes("laptop") || t.includes("macbook")) return "Computer & Laptop";
  if (t.includes("phone") || t.includes("pixel") || t.includes("galaxy")) return "SmartPhone";
  if (t.includes("headphone") || t.includes("earbud") || t.includes("earphone"))
    return "Headphone";
  if (t.includes("camera")) return "Camera & Photo";
  if (t.includes("tv") || t.includes("washer")) return "TV & Homes Appliances";
  if (t.includes("xbox") || t.includes("ps5") || t.includes("console") || t.includes("game"))
    return "Gaming Console";
  if (t.includes("monitor") || t.includes("keyboard") || t.includes("mouse") || t.includes("hub"))
    return "Computer Accessories";
  return "Electronics Devices";
}

export function generateStaticParams() {
  return allProducts.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product — techassure" };
  return {
    title: `${product.title} — techassure`,
    description: product.description ?? product.title,
  };
}

export default async function ProductRoute({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <ProductDetailPage
          product={product}
          brand={inferBrand(product.title)}
          category={inferCategory(product.title, product.image)}
        />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
