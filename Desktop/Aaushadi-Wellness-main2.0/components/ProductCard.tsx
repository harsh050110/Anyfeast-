"use client";

import Image from "next/image";
import { Product } from "@/data/products";

type Props = {
  product: Product;
  featured?: boolean;
  priority?: boolean;
};

const WHATSAPP_NUMBER = "8269431640"; // <-- Replace with your WhatsApp number

export default function ProductCard({
  product,
  featured = false,
  priority = false,
}: Props) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Growing Fields Organics,

I'm interested in ordering *${product.name}*.

Please share the price and availability.

Thank you.`
  )}`;

  return (
    <article
      className={`group relative flex w-full flex-shrink-0 flex-col overflow-hidden rounded-[28px] transition-all duration-500 ease-out
      ${
        featured
          ? "scale-100 opacity-100"
          : "scale-[0.92] opacity-75"
      }`}
      style={{
        background: "rgba(255,255,255,0.60)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        border: "1px solid rgba(255,255,255,0.55)",
        boxShadow:
          "0 10px 30px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.25)",
      }}
    >
      {/* Product Image */}

      <div className="relative m-4 aspect-square overflow-hidden rounded-[22px] bg-parchment/40">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          quality={90}
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {product.discount ? (
          <div className="absolute left-4 top-4 rounded-full bg-[#556B2F] px-3 py-1 text-xs font-semibold text-white shadow-md">
            {product.discount}% OFF
          </div>
        ) : null}
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2">

        {/* Category */}

        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-olive/75">
          {product.category}
        </p>

        {/* Product Name */}

        <h3
          className={`font-bold leading-tight text-text-dark ${
            featured ? "text-[22px]" : "text-[18px]"
          }`}
          style={{
            fontFamily: "var(--font-playfair)",
          }}
        >
          {product.name}
        </h3>

        {/* Description */}

        <p className="mt-3 text-sm leading-relaxed text-text-muted line-clamp-3">
          {product.description}
        </p>

        {/* Price */}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-[#556B2F]">
            ₹{product.price}
          </span>

          {product.bestseller && (
            <span className="rounded-full bg-[#F4E6C8] px-3 py-1 text-xs font-semibold text-[#556B2F]">
              Best Seller
            </span>
          )}
        </div>

        {/* Benefits */}

        <div className="mt-4 flex flex-wrap gap-2">
          {(product.benefits ?? []).slice(0, 2).map((benefit) => (
            <span
              key={benefit}
              className="rounded-full bg-[#F7F3EA] px-3 py-1 text-xs text-[#556B2F]"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* WhatsApp Button */}

        <div className="mt-auto pt-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#1ebe5d]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.54.74 5.02 2.13 7.14L3 29l6.02-2.1A12.95 12.95 0 0 0 16 29c7.18 0 13-5.82 13-13S23.19 3 16.01 3Zm7.59 18.39c-.32.91-1.87 1.74-2.58 1.85-.66.1-1.5.14-2.42-.16-.56-.18-1.28-.42-2.21-.82-3.88-1.68-6.4-5.62-6.6-5.89-.2-.27-1.58-2.1-1.58-4.01 0-1.91 1-2.85 1.36-3.24.36-.39.79-.49 1.05-.49h.75c.24 0 .57-.09.89.69.33.79 1.11 2.71 1.21 2.9.1.19.17.42.03.68-.13.27-.2.43-.4.66-.2.23-.42.51-.59.68-.2.2-.4.42-.17.82.23.39 1.04 1.72 2.24 2.79 1.54 1.37 2.84 1.8 3.23 2 .39.2.62.17.85-.1.23-.27.98-1.14 1.24-1.53.26-.39.53-.33.89-.2.36.13 2.3 1.09 2.69 1.29.39.2.66.3.75.46.1.17.1.98-.23 1.89Z" />
            </svg>

            Order on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}