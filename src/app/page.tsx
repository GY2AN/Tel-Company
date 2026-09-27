import Hero from "@/components/Hero";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
    <main className="bg-base min-h-screen">
      <Hero />
      <ProductListing />
    </main>
  );
}