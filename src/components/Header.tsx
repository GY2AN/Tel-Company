"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header className="bg-base border-b border-charcoal/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-navy text-xl">
          Hair Oil Shop
        </Link>
        <nav className="flex items-center gap-6 text-sm text-charcoal/80">
          <Link href="/" className="hover:text-teal">Home</Link>
          <Link href="/about" className="hover:text-teal">About</Link>
          <Link href="/contact" className="hover:text-teal">Contact</Link>
          <Link href="/cart" className="hover:text-teal">
            Cart ({itemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}