import Image from "next/image";
export default function Hero() {
  return (
    <section className="bg-sand px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text side */}
        <div>
          <p className="text-teal font-sans text-sm tracking-widest uppercase mb-3">
            100% Natural Hair Care
          </p>
          <h1 className="font-serif text-navy text-4xl md:text-5xl leading-tight mb-4">
            Nourish Your Hair, Naturally
          </h1>
          <p className="text-charcoal/80 font-sans mb-8 max-w-md">
            Handcrafted hair oils for hairfall, dandruff, and everyday
            strength — made with ingredients your grandmother would approve of.
          </p>
          <button className="bg-navy text-white font-sans px-8 py-3 rounded-full hover:bg-teal transition-colors">
            Shop Now
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-10 text-sm text-charcoal/70 font-sans">
            <span>🌿 100% Natural</span>
            <span>💵 COD Available</span>
            <span>🚚 Free Shipping above ₹499</span>
          </div>
        </div>

        {/* Image side (placeholder) */}
        <div className="bg-teal/10 rounded-2xl aspect-square relative overflow-hidden">
          <Image
            src="/hero-product.png"
            alt="Hair oil product"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}