"use client";

export default function ProductCard({ product, index }: { product: any; index: number }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-boutique-border/60 bg-boutique-card transition-all duration-500 hover:border-boutique-gold/30 hover-lift">
      <div className="relative h-52 bg-boutique-dark flex items-center justify-center text-5xl opacity-40">
        📦
      </div>
      <div className="flex flex-col p-6">
        <div className="mb-3 flex justify-between items-start">
          <h3 className="text-lg font-bold">{product.title}</h3>
          <span className="rounded-lg bg-boutique-gold/10 px-3 py-1 font-bold text-boutique-gold">${product.price}</span>
        </div>
        <p className="text-sm text-boutique-text mb-6">{product.description}</p>
        <a href={product.affiliateUrl} target="_blank" className="mt-auto text-center rounded-xl border border-boutique-gold/30 bg-boutique-gold/10 py-3 text-sm font-semibold text-boutique-gold hover:bg-boutique-gold/20 transition-all">
          View Product
        </a>
      </div>
    </div>
  );
}