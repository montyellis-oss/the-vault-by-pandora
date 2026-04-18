export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-20">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-boutique-border bg-boutique-card/50 px-4 py-1.5">
          <span className="text-xs font-medium tracking-[0.15em] uppercase text-boutique-gold">Hand-Curated Digital Collection</span>
        </div>
        <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-boutique-white sm:text-7xl">
          The Finest <span className="gold-gradient">Digital Products</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-boutique-text sm:text-lg">
          We scour the internet so you don't have to. Every item in our collection is vetted, tested, and approved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#collection" className="rounded-full bg-boutique-gold px-8 py-3.5 text-sm font-semibold text-boutique-black transition-all hover:scale-105">Explore Collection</a>
        </div>
      </div>
    </section>
  );
}