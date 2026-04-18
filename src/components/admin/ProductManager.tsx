"use client";

import { useState, useEffect, useCallback } from "react";

export default function ProductManager() {
  const [products, setProducts] = useState<any[]>([]);
  const fetchProducts = useCallback(async () => {
    const res = await fetch("/api/products");
    if (res.ok) setProducts(await res.json());
  }, []);
  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-boutique-white">Product Manager</h1>
      <div className="mt-8 space-y-4">
        {products.map(p => (
          <div key={p.id} className="p-4 rounded-xl border border-boutique-border bg-boutique-card flex justify-between items-center">
            <div>
              <h3 className="font-bold">{p.title}</h3>
              <p className="text-xs text-boutique-muted">{p.affiliateUrl}</p>
            </div>
            <div className="text-boutique-gold font-bold">${p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}