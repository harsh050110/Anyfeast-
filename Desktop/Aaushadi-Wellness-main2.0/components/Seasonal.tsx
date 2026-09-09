"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Seasonal() {
  /**
   * Only Best Sellers
   */
  const carouselProducts = useMemo(
    () =>
      products.filter(
        (product) => product.bestseller
      ),
    []
  );

  const [active, setActive] = useState(0);

  /**
   * Navigation
   */
  const next = () => {
    setActive(
      (prev) =>
        (prev + 1) %
        carouselProducts.length
    );
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0
        ? carouselProducts.length - 1
        : prev - 1
    );
  };

  /**
   * Auto Play
   */
  useEffect(() => {
    if (carouselProducts.length <= 1) return;

    const timer = setInterval(
      next,
      5000
    );

    return () => clearInterval(timer);
  }, [carouselProducts.length]);

  /**
   * Swipe Support
   */
  const [touchStart, setTouchStart] =
    useState<number | null>(null);

  const [touchEnd, setTouchEnd] =
    useState<number | null>(null);

  const minSwipeDistance = 60;

  const onTouchStart = (
    e: React.TouchEvent
  ) => {
    setTouchEnd(null);
    setTouchStart(
      e.targetTouches[0].clientX
    );
  };

  const onTouchMove = (
    e: React.TouchEvent
  ) => {
    setTouchEnd(
      e.targetTouches[0].clientX
    );
  };

  const onTouchEnd = () => {
    if (
      touchStart === null ||
      touchEnd === null
    )
      return;

    const distance =
      touchStart - touchEnd;

    if (distance > minSwipeDistance)
      next();

    if (distance < -minSwipeDistance)
      prev();
  };

  /**
   * Prevent rendering
   */
  if (carouselProducts.length === 0) {
    return null;
  }

  /**
   * Active cards
   */
  const left =
    carouselProducts[
      (active -
        1 +
        carouselProducts.length) %
        carouselProducts.length
    ];

  const center =
    carouselProducts[active];

  const right =
    carouselProducts[
      (active + 1) %
        carouselProducts.length
    ];

  return (
    <section
  className="relative overflow-hidden bg-[#EED9BB] py-24"
  onTouchStart={onTouchStart}
  onTouchMove={onTouchMove}
  onTouchEnd={onTouchEnd}
>
  {/* Background */}

  <div className="absolute inset-0">

    <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#efe4cd] blur-3xl opacity-70" />

    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#eadfc9] blur-3xl opacity-70" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mb-16 text-center">

      <span className="inline-flex rounded-full border border-[#d5c4a4] bg-white px-5 py-2 text-sm font-semibold tracking-[4px] text-[#66753b]">

        Seasonal Favorites

      </span>

      <h2
        className="mt-6 text-5xl font-bold text-[#1d1d1d]"
        style={{
          fontFamily: "var(--font-playfair)",
        }}
      >
        Nature's Finest Collection
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#666]">
        Carefully selected Ayurvedic wellness products crafted
        from authentic herbs and traditional formulations.
      </p>

    </div>

    {/* Carousel */}

    <div className="relative">

      {/* Previous */}

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110 lg:flex"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next */}

      <button
        onClick={next}
        className="absolute right-0 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition hover:scale-110 lg:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Cards */}

      <div className="grid items-center gap-10 lg:grid-cols-3">

        {/* Left Card */}

        <div className="hidden justify-end lg:flex">

          <div className="w-[300px] scale-90 opacity-60 transition-all duration-500">

            <ProductCard
              product={left}
              priority={false}
            />

          </div>

        </div>

        {/* Center Card */}

        <div className="mx-auto w-full max-w-[290px] sm:max-w-[340px] md:max-w-[390px] lg:max-w-[420px] transition-all duration-500 lg:scale-105">

          <ProductCard
            product={center}
            priority
            featured
          />

        </div>

        {/* Right Card */}

        <div className="hidden justify-start lg:flex">

          <div className="w-[300px] scale-90 opacity-60 transition-all duration-500">

            <ProductCard
              product={right}
              priority={false}
            />

          </div>

        </div>

      </div>
            {/* Mobile Navigation */}

      <div className="mt-10 flex items-center justify-center gap-5 lg:hidden">

        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
        >
          <ChevronRight size={22} />
        </button>

      </div>

    </div>

    {/* Indicators */}

    <div className="mt-14 flex justify-center gap-3">

      {carouselProducts.map((_, index) => (

        <button
          key={index}
          onClick={() => setActive(index)}
          aria-label={`Go to product ${index + 1}`}
          className={`transition-all duration-300 rounded-full ${
            index === active
              ? "h-2 w-8 bg-[#556B2F]"
              : "h-2 w-2 bg-[#d8cfbc] hover:bg-[#556B2F]/60"
          }`}
        />

      ))}

    </div>

  </div>

</section>
  );
}