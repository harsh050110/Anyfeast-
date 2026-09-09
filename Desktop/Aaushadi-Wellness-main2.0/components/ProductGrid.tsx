"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const rawMaterials = [
  {
    name: "Ashwagandha",
    image: "/Images/ashwagandha.jpg",
  },
  {
    name: "Amla",
    image: "/Images/Amla.jpg",
  },
  {
    name: "Tulsi",
    image: "/Images/Tulsi.jpg",
  },
  {
    name: "Arjuna",
    image: "/Images/Arjuna.jpg",
  },
  {
    name: "Beetroot",
    image: "/Images/beetroot.jpg",
  },
];

const BATCH_SIZE = 8;

export default function ProductGrid() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const [searchQuery, setSearchQuery] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [showFilters, setShowFilters] =
    useState(true);

  const [showSortMenu, setShowSortMenu] =
    useState(false);

  const [sortBy, setSortBy] =
    useState("default");

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(products.map((p) => p.category)),
    ];
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "All") {
      list = list.filter(
        (item) => item.category === activeCategory
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();

      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description
            .toLowerCase()
            .includes(q) ||
          item.category
            .toLowerCase()
            .includes(q) ||
          item.rawMaterial
            .toLowerCase()
            .includes(q)
      );
    }

    switch (sortBy) {
      case "price-low":
        list.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        list.sort((a, b) => b.price - a.price);
        break;

      case "name":
        list.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return list;
  }, [
    searchQuery,
    activeCategory,
    sortBy,
  ]);

  const featuredProducts = products.filter(
    (item) => item.featured
  );

  const bestSellerProducts = products.filter(
    (item) => item.bestseller
  );

  const visibleProducts =
    filteredProducts.slice(
      0,
      visibleCount
    );

  const hasMore =
    visibleCount <
    filteredProducts.length;

  const loadMore = () =>
    setVisibleCount((prev) =>
      Math.min(
        prev + BATCH_SIZE,
        filteredProducts.length
      )
    );

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(e.target.value);
    setVisibleCount(BATCH_SIZE);
  };

  const handleCategoryChange = (
    category: string
  ) => {
    setActiveCategory(category);
    setVisibleCount(BATCH_SIZE);
  };

  return (
  <section
  className="relative overflow-hidden py-20"
  style={{
    backgroundImage: "url('/products/bg.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  }}
>
  {/* Background */}

  <div className="absolute inset-0 bg-[#F6EBD6]/40" />

  <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-white/40 blur-[120px]" />

  <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#ECD7B9]/60 blur-[120px]" />

  <div className="pointer-events-none absolute left-2 top-6 hidden select-none text-[140px] opacity-20 lg:block">
    🍃
  </div>

  <div className="pointer-events-none absolute right-2 top-6 hidden select-none text-[140px] opacity-20 lg:block">
    🍃
  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}

    <div className="mb-16 text-center">

      <span
        className="
        inline-flex
        rounded-full
        border
        border-[#CDB48C]
        bg-white
        px-6
        py-2
        text-xs
        font-semibold
        tracking-[4px]
        text-[#556B2F]"
      >
        TOP CATEGORIES
      </span>

      <h2
        className="mt-6 text-3xl font-bold text-[#2F2A22] md:text-5xl"
        style={{
          fontFamily: "var(--font-playfair)",
        }}
      >
        Explore Our Collection
      </h2>

      <p
        className="
        mx-auto
        mt-6
        max-w-3xl
        text-base
        leading-8
        text-[#5F5A53]
        md:text-lg"
      >
        Choose from authentic Ayurvedic herbal products,
        carefully crafted for everyday wellness and natural
        healing.
      </p>

    </div>

    {/* Search */}

    <div className="mx-auto mb-14 max-w-2xl">

      <div className="relative">

        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search herbal products..."
          className="
          h-16
          w-full
          rounded-full
          border
          border-[#D7C6A5]
          bg-white/90
          pl-16
          pr-6
          text-lg
          text-[#2F2A22]
          shadow-lg
          outline-none
          transition-all
          focus:border-[#556B2F]
          focus:ring-2
          focus:ring-[#556B2F]/20"
        />

        <svg
          className="absolute left-6 top-1/2 -translate-y-1/2 text-[#556B2F]"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle
            cx="11"
            cy="11"
            r="8"
          />

          <path d="m21 21-4.35-4.35" />

        </svg>

      </div>

    </div>

    {/* Categories */}

    <div className="mb-16">

      <h3
        className="mb-8 text-center text-3xl font-bold md:text-4xl"
        style={{
          fontFamily: "var(--font-playfair)",
        }}
      >
        Top Categories
      </h3>

      {showFilters && (

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() =>
                handleCategoryChange(category)
              }
              className={`rounded-full px-8 py-3 text-sm font-semibold transition-all

              ${
                activeCategory === category
                  ? "bg-[#556B2F] text-white shadow-lg"
                  : "border border-[#CDB48C] bg-[#F6EAD5] text-[#556B2F] hover:bg-[#556B2F] hover:text-white"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

      )}

    </div>

    {/* Filter */}

    <div className="relative mb-12 flex flex-col gap-6 border-b border-[#D9C9AF] pb-6 md:flex-row md:items-center md:justify-between">

      <button
        onClick={() =>
          setShowFilters(!showFilters)
        }
        className="flex items-center gap-3 text-lg font-semibold text-[#2F2A22]"
      >
        ☰ Filters
      </button>

      <div className="relative">

        <button
          onClick={() =>
            setShowSortMenu(!showSortMenu)
          }
          className="flex items-center gap-2 text-lg font-semibold text-[#2F2A22]"
        >
          Sort By ▼
        </button>

        {showSortMenu && (

          <div className="absolute right-0 z-50 mt-3 w-56 rounded-xl border bg-white shadow-xl">

            <button
              onClick={() => {
                setSortBy("default");
                setShowSortMenu(false);
              }}
              className="block w-full px-5 py-3 text-left hover:bg-gray-100"
            >
              Default
            </button>

            <button
              onClick={() => {
                setSortBy("price-low");
                setShowSortMenu(false);
              }}
              className="block w-full px-5 py-3 text-left hover:bg-gray-100"
            >
              Price: Low to High
            </button>

            <button
              onClick={() => {
                setSortBy("price-high");
                setShowSortMenu(false);
              }}
              className="block w-full px-5 py-3 text-left hover:bg-gray-100"
            >
              Price: High to Low
            </button>

            <button
              onClick={() => {
                setSortBy("name");
                setShowSortMenu(false);
              }}
              className="block w-full px-5 py-3 text-left hover:bg-gray-100"
            >
              Name A-Z
            </button>

          </div>

        )}

      </div>

    </div>
    {/* ================= FEATURED PRODUCTS ================= */}

<div className="mb-24">

  <div className="mb-10 flex items-center justify-between">

    <div>

      <span className="text-sm font-semibold uppercase tracking-[4px] text-[#556B2F]">
        Hand Picked
      </span>

      <h2
        className="mt-2 text-3xl font-bold md:text-4xl"
        style={{
          fontFamily: "var(--font-playfair)",
        }}
      >
        Featured Products
      </h2>

    </div>

  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

    {featuredProducts.map((product, index) => (

      <ProductCard
        key={product.id}
        product={product}
        featured={index === 0}
        priority={index < 3}
      />

    ))}

  </div>

</div>

{/* ================= RAW MATERIAL ================= */}

<div className="mb-24">

  <h2
    className="mb-10 text-center text-3xl font-bold md:text-4xl"
    style={{
      fontFamily: "var(--font-playfair)",
    }}
  >
    Shop By Raw Material
  </h2>

  <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">

    {rawMaterials.map((item) => (

      <button
        key={item.name}
        onClick={() => {
          setSearchQuery(item.name);
          setVisibleCount(BATCH_SIZE);
        }}
        className="group flex flex-col items-center"
      >

        <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white bg-[#F6EBD6] shadow-lg transition-all duration-300 group-hover:scale-105">

          <Image
            src={item.image}
            alt={item.name}
            width={150}
            height={150}
            className="h-full w-full object-cover"
          />

        </div>

        <h3 className="mt-5 text-lg font-semibold text-[#556B2F]">
          {item.name}
        </h3>

      </button>

    ))}

  </div>

</div>

{/* ================= BEST SELLERS ================= */}

<div className="mb-24">

  <div className="mb-10 flex items-center justify-between">

    <div>

      <span className="text-sm font-semibold uppercase tracking-[4px] text-[#556B2F]">
        Most Loved
      </span>

      <h2
        className="mt-2 text-3xl font-bold md:text-4xl"
        style={{
          fontFamily: "var(--font-playfair)",
        }}
      >
        Best Sellers
      </h2>

    </div>

  </div>

  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

    {bestSellerProducts.map((product, index) => (

      <ProductCard
        key={product.id}
        product={product}
        priority={index < 3}
      />

    ))}

  </div>

</div>
      {/* ================= ALL PRODUCTS ================= */}

      <div className="mb-24">

        <div className="mb-10 text-center">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#556B2F]">
            Complete Collection
          </span>

          <h2
            className="mt-2 text-3xl font-bold md:text-4xl"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            All Products
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[#5F5A53]">
            Browse our complete range of Ayurvedic and herbal
            wellness products crafted with natural ingredients.
          </p>

        </div>

        {visibleProducts.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-[#D8C5A3] bg-white/70 py-24 text-center">

            <h3 className="text-2xl font-semibold text-[#2F2A22]">
              No Products Found
            </h3>

            <p className="mt-4 text-[#6B6258]">
              Try searching with another keyword or choose a
              different category.
            </p>

            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
                setVisibleCount(BATCH_SIZE);
              }}
              className="mt-8 rounded-full bg-[#556B2F] px-8 py-3 font-semibold text-white transition hover:scale-105"
            >
              Reset Filters
            </button>

          </div>

        ) : (

          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {visibleProducts.map((product, index) => (

                <ProductCard
                  key={product.id}
                  product={product}
                  priority={index < 4}
                />

              ))}

            </div>

            {hasMore && (

              <div className="mt-16 flex justify-center">

                <button
                  onClick={loadMore}
                  className="
                    rounded-full
                    bg-[#556B2F]
                    px-10
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#445723]
                  "
                >
                  Load More Products
                </button>

              </div>

            )}

          </>

        )}

      </div>

    </div>
  </section>
);
}