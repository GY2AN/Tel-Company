import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-xl border border-charcoal/10 p-4 hover:shadow-md transition-shadow">
        <div className="bg-sand rounded-lg aspect-square relative overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-serif text-navy text-lg mb-1">{product.name}</h3>
        <p className="text-charcoal/70 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-sans font-semibold text-charcoal">
            ₹{product.price}
          </span>
          <button className="bg-navy text-white text-sm px-4 py-2 rounded-full hover:bg-teal transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}