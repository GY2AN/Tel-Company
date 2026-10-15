import Hero from "@/components/Hero";
import ProductListing from "@/components/ProductListing";
import { getProducts } from "@/lib/products";

export const revalidate = 60;

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-base min-h-screen">
      <Hero />
      <ProductListing products={products} />
    </main>
  );
}