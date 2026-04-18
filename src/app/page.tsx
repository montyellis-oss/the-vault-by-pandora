import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import About from "@/components/About";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGallery products={products} />
        <About />
      </main>
      <Footer />
    </>
  );
}