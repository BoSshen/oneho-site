'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  tagline: string;
  power: string;
  image: string;
  link: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Microinverter Pro',
    tagline: 'Module-level intelligence',
    power: '800W',
    image: '/11.png',
    link: '/shop'
  },
  {
    id: 2,
    name: 'Smart Inverter',
    tagline: 'Multi-panel orchestration',
    power: '1600W',
    image: '/12.png',
    link: '/shop'
  },
  {
    id: 3,
    name: 'Power Hub',
    tagline: 'Grid-scale conversion',
    power: '2000W',
    image: '/13.png',
    link: '/shop'
  }
];

export default function ProductShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));

        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const continuousIndex = scrollProgress * (products.length - 1);
  const currentIndex = Math.round(continuousIndex);
  const currentProduct = products[currentIndex] || products[0];

  const getProductOpacity = (index: number) => {
    const distance = Math.abs(continuousIndex - index);
    return Math.max(0, 1 - distance);
  };

  const getProductTransform = (index: number) => {
    const distance = continuousIndex - index;
    const scale = 1 - Math.abs(distance) * 0.05;
    const rotate = distance * 6;
    return { scale, rotate };
  };

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: '300vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="text-[10px] tracking-[0.4em] text-neutral-400 mb-6 uppercase font-medium">
                  Product Line
                </div>

                <div className="relative overflow-hidden">
                  {products.map((product, index) => {
                    const opacity = getProductOpacity(index);
                    const isCurrentish = opacity > 0.3;

                    return (
                      <div
                        key={product.id}
                        className="transition-opacity duration-300"
                        style={{
                          opacity,
                          position: isCurrentish ? 'relative' : 'absolute',
                          top: isCurrentish ? 'auto' : 0,
                          pointerEvents: opacity > 0.5 ? 'auto' : 'none'
                        }}
                      >
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-neutral-900 mb-8 leading-[0.95]">
                          {product.name}
                        </h2>

                        <p className="text-xl md:text-2xl text-neutral-500 font-light mb-12 leading-relaxed">
                          {product.tagline}
                        </p>

                        <div className="flex items-baseline gap-3 mb-12">
                          <span className="text-6xl md:text-7xl font-extralight text-neutral-900">
                            {product.power}
                          </span>
                          <span className="text-2xl text-neutral-400 font-light">peak output</span>
                        </div>

                        <Link
                          href={product.link}
                          className="inline-flex items-center text-sm tracking-[0.1em] text-neutral-900 font-medium group"
                        >
                          <span className="border-b border-neutral-900 pb-1">LEARN MORE</span>
                          <svg
                            className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 pt-8">
                {products.map((_, index) => {
                  const isActive = Math.abs(continuousIndex - index) < 0.5;
                  const fillProgress = isActive
                    ? Math.max(0, 1 - Math.abs(continuousIndex - index) * 2)
                    : 0;

                  return (
                    <div
                      key={index}
                      className="h-0.5 flex-1 bg-neutral-200 relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-neutral-900 transition-transform duration-150 origin-left"
                        style={{
                          transform: `scaleX(${fillProgress})`
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-square">
                {products.map((product, index) => {
                  const opacity = getProductOpacity(index);
                  const { scale, rotate } = getProductTransform(index);

                  return (
                    <div
                      key={product.id}
                      className="absolute inset-0 transition-opacity duration-300"
                      style={{
                        opacity,
                        transform: `scale(${scale}) rotate(${rotate}deg)`,
                        pointerEvents: opacity > 0.5 ? 'auto' : 'none'
                      }}
                    >
                      <div className="relative w-full h-full bg-gradient-to-br from-neutral-50 to-white rounded-3xl shadow-2xl shadow-neutral-200/50 p-12 md:p-16 lg:p-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.02),transparent_70%)] rounded-3xl"></div>

                        <img
                          src={product.image}
                          alt={product.name}
                          className="relative w-full h-full object-contain drop-shadow-2xl"
                        />

                        <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.6)]"></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="text-[10px] tracking-[0.3em] text-neutral-400 uppercase">Scroll to explore</div>
          <div className="w-0.5 h-12 bg-gradient-to-b from-neutral-300 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
