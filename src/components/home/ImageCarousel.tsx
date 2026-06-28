"use client";

import { FC, useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Shimmer } from "@/components/common/Shimmer";

interface ImageCarouselProps {
    options?: {
        images?: {
            image: string;
            link: string;
            title?: string;
        }[];
    };
}

const DEFAULT_SLIDES = [
  {
    image: "/image/kaftan_hero.png",
    title: "THE KAFTAN COLLECTION",
    subtitle: "Modest luxury, refined craftsmanship, and timeless silhouettes.",
    link: "/search",
    actionText: "DISCOVER NOW",
    badge: "NEW ARRIVALS"
  },
  {
    image: "/image/hijab_hero.png",
    title: "PREMIUM HIJABS",
    subtitle: "Designed for elegance, finished with exquisite crystal embellishments.",
    link: "/search",
    actionText: "SHOP THE COLLECTION",
    badge: "LIMITED EDITION"
  },
  {
    image: "/image/jewelry_hero.png",
    title: "LUXURY JEWELRY",
    subtitle: "Sophisticated finishing pieces to elevate every occasion.",
    link: "/search",
    actionText: "EXPLORE ACCESSORIES",
    badge: "SIGNATURE PIECES"
  }
];

const ImageCarousel: FC<ImageCarouselProps> = ({ options }) => {
    const images = DEFAULT_SLIDES;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoplay = useCallback(() => {
        if (!images || images.length <= 1) return;

        autoplayRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
    }, [images]);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const handleDotClick = useCallback((index: number) => {
        setCurrentIndex(index);
        setIsPaused(true);
        stopAutoplay();

        setTimeout(() => {
            setIsPaused(false);
        }, 10000);
    }, [stopAutoplay]);

    useEffect(() => {
        if (!isPaused && images && images.length > 1) {
            startAutoplay();
        }
        return () => stopAutoplay();
    }, [isPaused, images, startAutoplay, stopAutoplay]);

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    if (!Array.isArray(images) || images.length === 0) return null;

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const distance = touchStartX.current - touchEndX.current;
            if (distance > 50) {
                setCurrentIndex((prev) => (prev + 1) % images.length);
            } else if (distance < -50) {
                setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section className="mt-6 w-full">
            <div
                className="group relative w-full overflow-hidden rounded-xl aspect-[16/9] md:aspect-[21/9]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((img, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <div
                            key={img.image}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"}`}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <div className="relative h-full w-full">
                                <Shimmer className="h-full w-full bg-neutral-100 dark:bg-neutral-900" />
                                <Image
                                    src={img.image}
                                    alt={img.title}
                                    fill
                                    className="object-cover !z-0 transition-transform duration-[6000ms] ease-out group-hover:scale-102"
                                    priority={index === 0}
                                    sizes="100vw"
                                />
                                {/* Luxury dark gradient overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/35 z-10" />

                                {/* Text content and Gold CTA */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-8 z-20">
                                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase mb-2 md:mb-3 pl-[0.3em]">
                                        {img.badge}
                                    </span>
                                    <h1 className="font-cormorant text-xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-white uppercase mb-3 md:mb-5 max-w-2xl leading-tight">
                                        {img.title}
                                    </h1>
                                    <p className="text-[10px] md:text-sm font-light tracking-wide text-neutral-200 max-w-md md:max-w-lg mb-6 md:mb-8 leading-relaxed">
                                        {img.subtitle}
                                    </p>
                                    <Link
                                        href={img.link}
                                        className="inline-block border border-[#C5A880] bg-transparent text-white hover:bg-[#C5A880] hover:text-black font-semibold tracking-[0.2em] text-[10px] md:text-xs px-6 py-3 md:px-8 md:py-4 transition-all duration-500 uppercase select-none rounded-none"
                                    >
                                        {img.actionText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5 md:gap-2 rounded-full bg-black/15 px-2 py-1.5 md:px-3 md:py-2 backdrop-blur-sm md:bottom-6">
                        {images.map((img, index) => (
                            <button
                                key={img.image}
                                onClick={() => handleDotClick(index)}
                                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${index === currentIndex
                                    ? "w-6 bg-[#C5A880]"
                                    : "w-1.5 bg-white/40 hover:bg-white/80"
                                    }`}
                                type="button"
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentIndex}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ImageCarousel;