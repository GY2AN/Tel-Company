import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-base border-b border-charcoal/10 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-navy text-xl">
          Hair Oil Shop
        </Link>
        <nav className="flex gap-6 text-sm text-charcoal/80">
          <Link href="/" className="hover:text-teal">Home</Link>
          <Link href="/about" className="hover:text-teal">About</Link>
          <Link href="/contact" className="hover:text-teal">Contact</Link>
        </nav>
      </div>
    </header>
  );
}