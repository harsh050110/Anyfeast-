"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductGallery({ product }: Props) {
  const images =
    product.gallery.length > 0
      ? product.gallery
      : [product.image];

  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [product.id]);

  const activeIndex = images.findIndex(
    (img) => img === activeImage
  );

  const previous = () => {
    const newIndex =
      activeIndex === 0
        ? images.length - 1
        : activeIndex - 1;

    setActiveImage(images[newIndex]);
  };

  const next = () => {
    const newIndex =
      activeIndex === images.length - 1
        ? 0
        : activeIndex + 1;

    setActiveImage(images[newIndex]);
  };

  return (
    <div className="w-full flex flex-col gap-5">

      {/* Main Image */}

      <div
        className="relative aspect-square overflow-hidden rounded-3xl bg-parchment/40 group"
        style={{
          border: "1px solid rgba(92,107,46,0.10)",
          boxShadow: "0 8px 30px rgba(0,0,0,.05)",
        }}
      >
        <Image
          src={activeImage}
          alt={product.name}
          fill
          priority
          quality={95}
          sizes="(max-width:768px)100vw,50vw"
          className="object-cover animate-in fade-in duration-300"
        />

        {/* Discount */}

        {product.discount ? (
          <span className="absolute left-5 top-5 rounded-full bg-[#556B2F] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md">
            {product.discount}% OFF
          </span>
        ) : null}

        {/* Previous */}

        {images.length > 1 && (
          <>
            <button
              onClick={previous}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-olive/10 bg-white/90 text-olive shadow-md transition hover:bg-white md:opacity-0 md:group-hover:opacity-100"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-olive/10 bg-white/90 text-olive shadow-md transition hover:bg-white md:opacity-0 md:group-hover:opacity-100"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">

          {images.map((img, index) => (

            <button
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl transition-all

              ${
                activeImage === img
                  ? "ring-2 ring-[#556B2F] scale-95"
                  : "border border-olive/10 opacity-60 hover:opacity-100 hover:scale-95"
              }`}
            >
              <Image
                src={img}
                alt={`${product.name}-${index}`}
                fill
                sizes="80px"
                className="object-cover"
              />

            </button>

          ))}

        </div>
      )}
    </div>
  );
}