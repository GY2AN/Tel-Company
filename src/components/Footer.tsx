import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80 px-6 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
        <p>© 2026 Hair Oil Shop. All rights reserved.</p>
        <nav className="flex gap-6">
          <Link href="/shipping-policy" className="hover:text-teal">Shipping Policy</Link>
          <Link href="/returns" className="hover:text-teal">Returns</Link>
          <Link href="/privacy" className="hover:text-teal">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}