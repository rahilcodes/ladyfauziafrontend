import Link from "next/link";
import Image from "next/image";

export default function EditorialTeaser() {
  return (
    <section className="py-4">
      <div className="relative w-full aspect-[16/7] sm:aspect-[21/8] overflow-hidden rounded-xl">
        <Image
          src="/image/lookbook_teaser.png"
          alt="Lady Fauzia Co. Lookbook — Season One"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-[#C5A880] uppercase mb-2 md:mb-3 pl-[0.3em]">
            Season One
          </span>

          <h2 className="font-cormorant text-xl sm:text-3xl lg:text-4xl font-light tracking-[0.18em] text-white uppercase mb-2 sm:mb-3">
            The Lookbook
          </h2>

          <p className="text-[10px] sm:text-sm font-light tracking-wide text-neutral-200 max-w-md mb-5 sm:mb-8 leading-relaxed">
            Joyful Beginnings — A visual journey through our debut collection.
          </p>

          <Link
            href="/lookbook"
            className="inline-block border border-white/40 bg-transparent text-white hover:bg-white hover:text-black font-semibold tracking-[0.2em] text-[10px] sm:text-xs px-6 py-2.5 sm:px-8 sm:py-3 transition-all duration-500 uppercase"
          >
            View Lookbook
          </Link>
        </div>
      </div>
    </section>
  );
}
