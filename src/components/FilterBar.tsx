"use client";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  productCount: number;
}

export default function FilterBar({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  productCount,
}: FilterBarProps) {
  return (
    <div className="mb-10 space-y-6">
      <div className="relative mx-auto max-w-md">
        <svg className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-boutique-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search the collection..."
          className="w-full rounded-full border border-boutique-border bg-boutique-card/60 py-3 pl-11 pr-4 text-sm text-boutique-white placeholder:text-boutique-muted focus:border-boutique-gold/40 focus:outline-none focus:ring-1 focus:ring-boutique-gold/20 transition-all"
        />
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeCategory === category
                  ? "border border-boutique-gold/50 bg-boutique-gold/15 text-boutique-gold shadow-[0_0_15px_rgba(201,169,110,0.1)]"
                  : "border border-boutique-border bg-boutique-card/40 text-boutique-text hover:border-boutique-border hover:text-boutique-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <span className="text-xs text-boutique-muted">
          {productCount} {productCount === 1 ? "item" : "items"} curated
        </span>
      </div>
    </div>
  );
}