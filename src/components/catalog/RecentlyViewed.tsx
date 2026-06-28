"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NOT_IMAGE } from "@/utils/constants";

interface RecentProduct {
  id: string;
  name: string;
  urlKey: string;
  imageUrl: string;
  price: string;
}

const STORAGE_KEY = "lf-recently-viewed";
const MAX_ITEMS = 8;

export function trackRecentlyViewed(product: RecentProduct) {
  if (typeof window === "undefined") return;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    let items: RecentProduct[] = stored ? JSON.parse(stored) : [];

    // Remove if already exists
    items = items.filter((p) => p.id !== product.id);

    // Add to front
    items.unshift(product);

    // Limit
    items = items.slice(0, MAX_ITEMS);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Silent fail on localStorage issues
  }
}

export default function RecentlyViewed({ currentProductId }: { currentProductId?: string }) {
  const [products, setProducts] = useState<RecentProduct[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        let items: RecentProduct[] = JSON.parse(stored);
        // Filter out current product
        if (currentProductId) {
          items = items.filter((p) => p.id !== currentProductId);
        }
        setProducts(items.slice(0, 6));
      }
    } catch {
      // Silent fail
    }
  }, [currentProductId]);

  if (products.length === 0) return null;

  return (
    <section className="py-10 sm:py-14 w-full max-w-screen-2xl mx-auto px-4 xss:px-7.5">
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-light tracking-[0.15em] text-foreground uppercase">
          Recently Viewed
        </h2>
      </div>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.urlKey}`}
            className="group flex-shrink-0 w-[140px] sm:w-[180px]"
            aria-label={`View ${product.name}`}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-2.5">
              <Image
                src={product.imageUrl || NOT_IMAGE}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="180px"
              />
            </div>
            <p className="text-[11px] sm:text-xs font-medium text-foreground/80 tracking-[0.05em] line-clamp-1 group-hover:text-foreground transition-colors">
              {product.name}
            </p>
            <p className="text-[10px] sm:text-[11px] text-muted tracking-[0.05em] mt-0.5">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
