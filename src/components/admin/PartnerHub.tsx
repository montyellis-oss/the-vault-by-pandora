"use client";

const PARTNER_PORTALS = [
  { name: "Gumroad", url: "https://app.gumroad.com/dashboard", icon: "🛒" },
  { name: "Notion", url: "https://www.notion.so/affiliates", icon: "📋" },
  { name: "Etsy", url: "https://www.etsy.com/your/shops/me/finances", icon: "🏪" },
  { name: "LemonSqueezy", url: "https://app.lemonsqueezy.com/dashboard", icon: "🍋" }
];

export default function PartnerHub() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-boutique-white">Partner Hub</h1>
      <div className="grid gap-4 sm:grid-cols-2 mt-8">
        {PARTNER_PORTALS.map((portal) => (
          <a key={portal.name} href={portal.url} target="_blank" className="p-6 rounded-2xl border border-boutique-border bg-boutique-card hover:border-boutique-gold/30 transition-all">
            <span className="text-3xl">{portal.icon}</span>
            <h3 className="text-lg font-bold text-boutique-white mt-3">{portal.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}