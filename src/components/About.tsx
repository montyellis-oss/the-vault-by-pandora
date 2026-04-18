export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-boutique-border to-transparent" />
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] uppercase text-boutique-gold">
          Our Philosophy
        </span>
        <h2 className="mb-6 text-3xl font-bold text-boutique-white sm:text-4xl">
          Why Élite Digital?
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-base leading-relaxed text-boutique-text">
          In a world flooded with mediocre digital products, we serve as your personal curator. Our editorial team reviews hundreds of products monthly — only the exceptional few earn a place in our collection.
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Reasons here... */}
        </div>
      </div>
    </section>
  );
}