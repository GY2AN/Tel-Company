"use client";

import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductListing({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  const filtered = products.filter((product) => {
    const searchText = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchText) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchText))
    );
  });

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="font-serif text-navy text-3xl mb-8 text-center">
        Our Oils
      </h2>

      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by name or concern (e.g. hairfall, dandruff)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-charcoal/20 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-teal"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-charcoal/60">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}