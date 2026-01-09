import ParticleGlobe from "@/components/ParticleGlobe";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductShowcase from '@/components/ProductShowcase';
import { woocommerce, WooCommerceProduct } from '@/lib/woocommerce';

export default async function Home() {
  let products: WooCommerceProduct[] = [];
  let hasError = false;

  try {
    products = await woocommerce.getProducts({ per_page: 3 });
  } catch (error) {
    console.error('Error fetching featured products:', error);
    hasError = true;
  }

  return (
    <>
      <Header />

      <main className="flex-1">
        <section className="relative min-h-screen overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/video-poster.jpg"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-black/10" />

          <div className="absolute inset-x-0 bottom-10 md:bottom-14 lg:bottom-16 z-10">
            <div className="max-w-3xl mx-auto px-6 text-center">
              {/* Alternative titles (备选):
                  B) Power made personal
                  C) Build, use, and own your energy
                  D) Smarter energy, built for life
              */}
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4 leading-tight tracking-normal">
                A new day for clean energy
              </h1>
              <p className="text-base md:text-xl text-white/90 mb-8 leading-snug">
                Generate, use, store, and sell energy with confidence—engineered for everyday reliability.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link
                  href="/learn"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-black hover:opacity-90 transition-opacity duration-200 text-sm font-medium rounded-full"
                >
                  Learn more
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white/70 text-white hover:bg-white/10 transition-colors duration-200 text-sm font-medium rounded-full"
                >
                  Watch video
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductShowcase />

        <section className="relative min-h-screen overflow-hidden flex items-center justify-start">
          <Image
            src="/homepage.png"
            alt="Energy systems"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.2] mb-6 md:mb-8">
                Energy that adapts — not one that depends.
              </h2>

              <div className="space-y-3 text-base md:text-lg text-white/95 leading-relaxed">
                <p>Solar power changes constantly.</p>
                <p>Shade, weather, and time affect every panel differently.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen overflow-hidden flex items-end justify-center pb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/微逆拆解图.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center">
              <div className="text-xs tracking-[0.2em] text-white/70 mb-4">
                OUR APPROACH
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                This is how energy should be built.
              </h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12">
                A system designed for reliability at scale.
              </p>
              <Link
                href="/product/microinverter"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black hover:opacity-90 transition-opacity duration-200 text-sm font-medium rounded-full shadow-lg"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>

        <section className="relative min-h-screen overflow-hidden flex items-end justify-center pb-20">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/106.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="flex flex-col items-center justify-center">
              <Link
                href="/business"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-black hover:opacity-90 transition-opacity duration-200 text-base font-medium rounded-full shadow-lg"
              >
                Commercial & Industrial
              </Link>
            </div>
          </div>
        </section>

        <section className="relative h-screen overflow-hidden flex flex-col md:flex-row">
          <Image
            src="/solution.png"
            alt="Solutions"
            fill
            className="object-cover object-center"
            style={{
              filter: 'saturate(0.85) brightness(0.88)',
            }}
            priority
          />

          <Link
            href="/solutions/balcony"
            className="group relative flex-1 overflow-hidden cursor-pointer"
            aria-label="Explore Balcony Solutions"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55 transition-opacity duration-500 group-hover:opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-20" />

            <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
              <div className="max-w-md">
                <div className="text-xs tracking-[0.25em] text-white/70 mb-3 uppercase font-light">
                  Solution
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight transition-all duration-300 group-hover:translate-x-1">
                  Balcony
                </h3>
                <p className="text-base md:text-lg text-white/85 mb-6 font-light leading-relaxed">
                  Clean energy for urban living spaces
                </p>

                <div className="overflow-hidden">
                  <div className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="inline-flex items-center text-sm text-white tracking-wide">
                      <span className="border-b border-white/40 pb-0.5">Explore Balcony</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-10 pointer-events-none" />

          <Link
            href="/solutions/rooftop"
            className="group relative flex-1 overflow-hidden cursor-pointer"
            aria-label="Explore Rooftop Solutions"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55 transition-opacity duration-500 group-hover:opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-20" />

            <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16">
              <div className="max-w-md">
                <div className="text-xs tracking-[0.25em] text-white/70 mb-3 uppercase font-light">
                  Solution
                </div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight transition-all duration-300 group-hover:translate-x-1">
                  Rooftop
                </h3>
                <p className="text-base md:text-lg text-white/85 mb-6 font-light leading-relaxed">
                  Maximize power generation at scale
                </p>

                <div className="overflow-hidden">
                  <div className="opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="inline-flex items-center text-sm text-white tracking-wide">
                      <span className="border-b border-white/40 pb-0.5">Explore Rooftop</span>
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-2">
              <div>
                <div className="text-xs tracking-[0.2em] text-neutral-500 mb-4">
                  MICROINVERTER PLATFORM
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 mb-6">
                  Microinverter. Explained.
                </h2>
                <p className="text-base md:text-lg text-neutral-600 max-w-xl mb-8">
                  Engineered for long-term stability, grid compliance, and real-world installation conditions.
                </p>

                <ul className="mt-8 space-y-3">
                  <li className="text-neutral-800 flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 flex-shrink-0"></span>
                    <span>Independent MPPT per module</span>
                  </li>
                  <li className="text-neutral-800 flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 flex-shrink-0"></span>
                    <span>Grid-compliant by design (EU/IEC ready)</span>
                  </li>
                  <li className="text-neutral-800 flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-400 flex-shrink-0"></span>
                    <span>No single point of failure</span>
                  </li>
                </ul>

                <div className="mt-10 flex gap-4">
                  <Link
                    href="/learn"
                    className="inline-flex items-center justify-center px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors duration-200 text-sm font-medium rounded-full"
                  >
                    Learn more
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center px-8 py-3 border border-neutral-300 text-neutral-900 hover:bg-neutral-50 transition-colors duration-200 text-sm font-medium rounded-full"
                  >
                    View products
                  </Link>
                </div>
              </div>

              <div className="relative w-full flex justify-center lg:justify-end">
                <ParticleGlobe speed={1.8} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium text-foreground mb-4">ONEHO</h3>
              <p className="text-sm text-muted-foreground">
                Premium hardware solutions for modern living
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Customer Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Technical Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Oneho. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
