import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProduct, getProducts } from "@/lib/products";

export const revalidate = 60;

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  const all = await getProducts();
  const related = all.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="bg-base min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="bg-sand rounded-2xl aspect-square relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="font-serif text-navy text-3xl mb-2">
            {product.name}
          </h1>
          <p className="font-sans text-xl text-charcoal mb-4">
            ₹{product.price}
          </p>
          <p className="text-charcoal/80 mb-6">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-serif text-navy text-lg mb-2">How to Use</h3>
            <p className="text-charcoal/70 text-sm">
              Apply to scalp, massage gently, leave for 30 minutes to
              overnight, then wash off with a mild shampoo.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-charcoal/70">Quantity</span>
            <div className="flex items-center border border-charcoal/20 rounded-full">
              <button className="px-3 py-1">-</button>
              <span className="px-3">1</span>
              <button className="px-3 py-1">+</button>
            </div>
          </div>

          <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-teal transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-20">
        <h2 className="font-serif text-navy text-2xl mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}