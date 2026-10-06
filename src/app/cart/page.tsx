"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <main className="bg-base min-h-screen px-6 py-16 text-center">
        <h1 className="font-serif text-navy text-3xl mb-4">Your Cart</h1>
        <p className="text-charcoal/70 mb-6">Your cart is empty.</p>
        <Link href="/" className="text-teal underline">
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-base min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-navy text-3xl mb-8">Your Cart</h1>

        <div className="space-y-6">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="flex items-center gap-4 bg-white rounded-xl border border-charcoal/10 p-4"
            >
              <div className="bg-sand rounded-lg w-20 h-20 relative overflow-hidden flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-serif text-navy">{product.name}</h3>
                <p className="text-charcoal/70 text-sm">₹{product.price}</p>
              </div>

              <div className="flex items-center border border-charcoal/20 rounded-full">
                <button
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                  className="px-3 py-1"
                >
                  -
                </button>
                <span className="px-3">{quantity}</span>
                <button
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                  className="px-3 py-1"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeItem(product.id)}
                className="text-charcoal/50 text-sm hover:text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Coupon field — UI only for now */}
        <div className="mt-8 flex gap-3">
          <input
            type="text"
            placeholder="Coupon code"
            className="flex-1 border border-charcoal/20 rounded-full px-5 py-2 text-sm"
          />
          <button className="bg-charcoal/10 text-charcoal text-sm px-5 py-2 rounded-full">
            Apply
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-charcoal/10 pt-6">
          <span className="font-serif text-navy text-xl">Subtotal</span>
          <span className="font-sans font-semibold text-xl">₹{subtotal}</span>
        </div>

        <button className="w-full mt-6 bg-navy text-white py-3 rounded-full hover:bg-teal transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </main>
  );
}