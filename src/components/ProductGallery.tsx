"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

export default function ProductGallery({ products }: { products: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(products.map((p) => p.category)));
    return ["All", ...cats];
  }, [products]);

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "All") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return result;
  }, [products, activeCategory, searchQuery]);

  return (
    <section id="collection" className="relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-boutique-gold">The Collection</span>
          <h2 className="mb-4 text-3xl font-bold text-boutique-white sm:text-4xl">Hand-Picked Digital Excellence</h2>
        </div>
        <FilterBar categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} searchQuery={searchQuery} onSearchChange={setSearchQuery} productCount={filtered.length} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}