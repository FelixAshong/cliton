"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";
import { ProductQuickView } from "./ProductQuickView";

type QuickViewContextValue = {
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
};

const QuickViewContext = createContext<QuickViewContextValue | null>(null);

export function useQuickView() {
  const ctx = useContext(QuickViewContext);
  if (!ctx) {
    throw new Error("useQuickView must be used within QuickViewProvider");
  }
  return ctx;
}

export function QuickViewProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);

  const openQuickView = useCallback((next: Product) => {
    setProduct(next);
  }, []);

  const closeQuickView = useCallback(() => {
    setProduct(null);
  }, []);

  const value = useMemo(
    () => ({ openQuickView, closeQuickView }),
    [openQuickView, closeQuickView],
  );

  return (
    <QuickViewContext.Provider value={value}>
      {children}
      <ProductQuickView product={product} onClose={closeQuickView} />
    </QuickViewContext.Provider>
  );
}
