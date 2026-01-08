import Link from 'next/link';
import { Metadata } from 'next';
import { woocommerce, WooCommerceProduct } from '@/lib/woocommerce';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Shop All Products | Oneho',
  description: 'Explore our complete range of premium hardware solutions. Quality products with 2-year warranty, free shipping on orders over €100.',
  openGraph: {
    title: 'Shop All Products | Oneho',
    description: 'Explore our complete range of premium hardware solutions. Quality products with 2-year warranty, free shipping on orders over €100.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop All Products | Oneho',
    description: 'Explore our complete range of premium hardware solutions. Quality products with 2-year warranty, free shipping on orders over €100.',
  },
};

export default async function ShopPage() {
  let products: WooCommerceProduct[] = [];
  let error: string | null = null;

  try {
    products = await woocommerce.getProducts({ per_page: 20 });
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch products';
    console.error('Shop page error:', err);
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4">
                All Products
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore our complete range of premium hardware solutions
              </p>
            </div>

            {error && (
              <div className="mb-12 p-6 border border-destructive/30 bg-destructive/5 max-w-2xl">
                <p className="font-medium text-destructive mb-2">Error connecting to store:</p>
                <p className="text-sm text-destructive/80">{error}</p>
              </div>
            )}

            {!error && products.length === 0 && (
              <div className="text-center py-16 max-w-xl mx-auto">
                <p className="text-muted-foreground">No products found</p>
              </div>
            )}

            {!error && products.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
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
