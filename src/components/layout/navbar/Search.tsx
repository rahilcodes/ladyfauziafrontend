"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createUrl } from "@/utils/helper";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { searchProductsAction } from "@/utils/actions";
import Link from "next/link";
import Image from "next/image";
import { baseUrl, getImageUrl, NOT_IMAGE } from "@/utils/constants";
import { Price } from "@/components/theme/ui/Price";

const POPULAR_SEARCHES = [
  { label: "Kaftans", query: "kaftan" },
  { label: "Silk Hijabs", query: "silk hijab" },
  { label: "Gold Necklaces", query: "gold" },
  { label: "New Arrivals", query: "new" },
];

export default function Search({
  search = false,
  setSearch,
  onClose,
}: {
  search: boolean;
  setSearch?: (value: boolean) => void;
  onClose?: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchValue, setSearchValue] = useState(
    searchParams?.get("q") || ""
  );
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync with searchParams
  useEffect(() => {
    setSearchValue(searchParams?.get("q") || "");
  }, [searchParams]);

  // Debounced instant search suggestions
  useEffect(() => {
    const term = searchValue.trim();
    if (term === "") {
      setSuggestions([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const handler = setTimeout(async () => {
      try {
        const results = await searchProductsAction(term);
        setSuggestions(results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchValue]);

  // Route to search page on submit
  const handleSubmit = (overrideQuery?: string) => {
    const q = overrideQuery !== undefined ? overrideQuery : searchValue;
    const newParams = new URLSearchParams(searchParams.toString());
    if (q.trim() === "") {
      newParams.delete("q");
    } else {
      newParams.set("q", q);
    }
    router.push(createUrl("/search", newParams));
    setIsFocused(false);
    onClose?.();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handlePopularSearchClick = (query: string) => {
    setSearchValue(query);
    handleSubmit(query);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[280px] xl:max-w-[450px] outline-none hover:outline-none"
    >
      {setSearch && (
        <button
          onClick={() => setSearch(!search)}
          type="button"
          className="absolute bottom-0 left-1 top-0 flex w-9 cursor-pointer items-center justify-center border-r border-neutral-200 dark:border-neutral-700 md:hidden"
        >
          <ArrowLeftIcon className="size-5 stroke-neutral-500" />
        </button>
      )}

      <input
        ref={inputRef}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        autoComplete="off"
        className="input w-full rounded-lg border border-neutral-200 bg-white py-2 pl-3 pr-10 text-sm text-black outline-none placeholder:text-selected-black focus:ring-2 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400 md:pl-4"
        name="search"
        placeholder="Search for products..."
        type="text"
      />

      <div
        onClick={() => handleSubmit()}
        className="absolute bottom-0 right-1 top-0 flex w-9 cursor-pointer items-center justify-center "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="size-5 stroke-neutral-500 dark:stroke-white md:stroke-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          ></path>
        </svg>
      </div>

      {/* Suggestion Dropdown Overlay */}
      {isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-xl p-4 sm:p-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Popular Searches when empty query */}
          {searchValue.trim() === "" && (
            <div>
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handlePopularSearchClick(item.query)}
                    className="px-3.5 py-1.5 bg-neutral-100 dark:bg-neutral-900 hover:bg-[#C5A880]/10 dark:hover:bg-[#C5A880]/20 text-neutral-800 dark:text-neutral-200 text-xs tracking-wider uppercase font-medium rounded-full transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && searchValue.trim() !== "" && (
            <div className="flex items-center justify-center py-6">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent" />
            </div>
          )}

          {/* Results Suggestions */}
          {!isLoading && searchValue.trim() !== "" && (
            <div>
              {suggestions.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                    Products found
                  </h3>
                  <div className="divide-y divide-neutral-100 dark:divide-neutral-900">
                    {suggestions.map((product) => {
                      const image = getImageUrl(
                        product.baseImageUrl,
                        baseUrl,
                        NOT_IMAGE
                      );
                      const price =
                        product.type === "configurable" ||
                        product.type === "grouped" ||
                        product.type === "bundle"
                          ? product.minimumPrice
                          : product.price;

                      return (
                        <Link
                          key={product.id}
                          href={`/product/${product.urlKey}`}
                          onClick={() => setIsFocused(false)}
                          className="flex items-center gap-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 px-2 rounded-lg transition-colors group"
                        >
                          <div className="relative h-12 w-9 flex-shrink-0 overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900">
                            <Image
                              src={image || NOT_IMAGE}
                              alt={product.name || "Product"}
                              fill
                              className="object-cover"
                              sizes="36px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-foreground tracking-[0.05em] truncate group-hover:text-primary transition-colors">
                              {product.name}
                            </p>
                            <p className="text-[10px] text-muted tracking-wide mt-0.5">
                              Sku: {product.sku}
                            </p>
                          </div>
                          <div className="text-right">
                            {product.specialPrice ? (
                              <div className="flex flex-col items-end">
                                <Price
                                  amount={String(product.specialPrice)}
                                  className="text-xs font-semibold text-primary"
                                  currencyCode="USD"
                                />
                                <Price
                                  amount={String(price)}
                                  className="text-[10px] text-muted line-through"
                                  currencyCode="USD"
                                />
                              </div>
                            ) : (
                              <Price
                                amount={String(price || "0")}
                                className="text-xs font-semibold text-foreground"
                                currencyCode="USD"
                              />
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <button
                    onClick={() => handleSubmit()}
                    className="w-full text-center py-2 text-xs tracking-[0.15em] text-primary hover:text-primary-strong uppercase font-semibold border-t border-neutral-100 dark:border-neutral-900 mt-2 block cursor-pointer"
                  >
                    View all results
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-xs text-muted tracking-wide">
                    No results found for &ldquo;{searchValue}&rdquo;
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
