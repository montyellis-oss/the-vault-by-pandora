"use client";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-boutique-border/50 bg-boutique-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-boutique-gold flex items-center justify-center font-bold text-black">É</div>
          <span className="text-lg font-bold">ÉLITE DIGITAL</span>
        </a>
        <nav className="hidden md:flex gap-8">
          <a href="#collection" className="text-sm font-medium hover:text-boutique-gold transition-colors">Collection</a>
          <a href="#about" className="text-sm font-medium hover:text-boutique-gold transition-colors">About</a>
          <a href="/admin" className="text-sm font-medium text-boutique-muted hover:text-boutique-gold">Admin</a>
        </nav>
      </div>
    </header>
  );
}