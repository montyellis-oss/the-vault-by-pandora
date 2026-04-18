export default function Footer() {
  return (
    <footer className="relative border-t border-boutique-border/30 px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-boutique-gold to-boutique-gold-light flex items-center justify-center text-black font-bold">É</div>
          <span className="text-sm font-bold tracking-tight text-boutique-white">ÉLITE DIGITAL</span>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-boutique-muted">Curating the internet's finest digital products. Personally vetted by our editorial team.</p>
        <div className="flex items-center gap-1 text-[11px] text-boutique-muted">
          <span>© {new Date().getFullYear()} Élite Digital.</span>
          <span className="text-boutique-gold/60 ml-2">Affiliate links may earn commission</span>
        </div>
      </div>
    </footer>
  );
}