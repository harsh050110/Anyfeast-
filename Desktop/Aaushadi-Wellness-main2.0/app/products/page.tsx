import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Our Products — Aaushadhi Wellness",
  description:
    "Browse our complete collection of certified organic Ayurvedic herbal products. 100% natural, traditionally crafted remedies for holistic wellness.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative bg-[#F2E2C8] py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-8 top-8 text-6xl opacity-30">
              🌿
            </div>

            <div className="absolute right-10 top-12 text-5xl opacity-25">
              🍃
            </div>

            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-7xl opacity-20">
              🌱
            </div>

            <div className="absolute bottom-10 left-12 text-4xl opacity-25">
              ☘️
            </div>

            <div className="absolute bottom-12 right-12 text-4xl opacity-25">
              🌾
            </div>
          </div>

          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <h1
              className="text-5xl font-bold text-[#556B2F] md:text-6xl"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Our Products
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#3A3A3A] md:text-xl">
              Discover our premium collection of Ayurvedic herbal
              powders, capsules and wellness products made with
              authentic ingredients and traditional Ayurvedic
              wisdom.
            </p>
          </div>
        </section>

        {/* Product Listing */}
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}