'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  specs: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'ONEHO Microinverter Pro',
    description: 'High-efficiency module-level power conversion',
    image: '/11.png',
    specs: ['800W Peak Power', 'IP67 Rated', '25-Year Warranty']
  },
  {
    id: 2,
    name: 'ONEHO Smart Inverter',
    description: 'Intelligent multi-panel management system',
    image: '/12.png',
    specs: ['4-Panel Support', 'Real-time Monitoring', 'Plug & Play']
  },
  {
    id: 3,
    name: 'ONEHO Power Hub',
    description: 'Advanced grid-tied conversion platform',
    image: '/13.png',
    specs: ['2000W Capacity', 'Smart Grid Ready', 'Modular Design']
  }
];

export default function ProductShowcase() {
  const [visibleProducts, setVisibleProducts] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    productRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleProducts((prev) => new Set(prev).add(index));
              }, index * 200);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <div className="text-xs tracking-[0.3em] text-neutral-500 mb-6 uppercase font-light">
            PRODUCT LINEUP
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight">
            Built for reliability
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
            Professional-grade microinverters engineered for long-term performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => {
                productRefs.current[index] = el;
              }}
              className={`group relative transition-all duration-1000 ${
                visibleProducts.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative bg-gradient-to-b from-neutral-900 to-black rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8 pb-6">
                  <div className="aspect-square bg-white rounded-2xl mb-6 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-8 transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2 group-hover:text-white/90 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <div className="space-y-2">
                        {product.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center text-xs text-neutral-500">
                            <div className="w-1 h-1 rounded-full bg-orange-500/60 mr-3"></div>
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative px-8 pb-8">
                  <Link
                    href="/shop"
                    className="block w-full text-center py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-white/90 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  >
                    Learn More
                  </Link>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-base font-light rounded-full group"
          >
            View All Products
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
