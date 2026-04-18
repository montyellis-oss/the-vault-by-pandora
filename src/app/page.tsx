import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Philosophy from "../components/Philosophy";
import Footer from "../components/Footer";
import inventoryData from "../data/inventory.json";
import type { Inventory } from "../lib/types";

export default function Home() {
  const inventory = inventoryData as Inventory;
  return (
    <div className="flex flex-col min-h-screen bg-vault-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGrid products={inventory.products} />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}