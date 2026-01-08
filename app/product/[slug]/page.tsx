import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ShoppingCart, Truck, Shield, ArrowLeft } from 'lucide-react';
import { woocommerce } from '@/lib/woocommerce';
import { getNgrokImageUrl } from '@/lib/utils';
import Header from '@/components/Header';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const product = await woocommerce.getProductBySlug(params.slug);

    if (!product) {
      return {
        title: 'Product Not Found | Oneho',
        description: 'The product you are looking for could not be found.',
      };
    }

    const cleanDescription = product.short_description
      .replace(/<[^>]*>/g, '')
      .trim()
      .substring(0, 160);

    return {
      title: `${product.name} | Oneho`,
      description: cleanDescription || product.name,
      openGraph: {
        title: `${product.name} | Oneho`,
        description: cleanDescription || product.name,
        images: product.images[0]?.src ? [getNgrokImageUrl(product.images[0].src)] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `${product.name} | Oneho`,
        description: cleanDescription || product.name,
        images: product.images[0]?.src ? [getNgrokImageUrl(product.images[0].src)] : [],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Product | Oneho',
      description: 'Premium hardware solutions for modern living',
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  let product;

  try {
    product = await woocommerce.getProductBySlug(params.slug);
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }

  if (!product) {
    notFound();
  }

  const imageUrl = getNgrokImageUrl(
    product.images[0]?.src || 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg'
  );

  const price = parseFloat(product.price);
  const regularPrice = parseFloat(product.regular_price);
  const isOnSale = product.on_sale && regularPrice > price;

  const cleanDescription = product.description.replace(/<[^>]*>/g, '').trim();
  const cleanShortDescription = product.short_description.replace(/<[^>]*>/g, '').trim();

  const availability = product.stock_status === 'instock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock';

  const productStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: imageUrl,
    description: cleanDescription || cleanShortDescription || product.name,
    sku: product.id.toString(),
    brand: {
      '@type': 'Brand',
      name: 'Oneho',
    },
    offers: {
      '@type': 'Offer',
      price: price.toFixed(2),
      priceCurrency: 'EUR',
      availability: availability,
      url: `https://oneho.com/product/${product.slug}`,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://oneho.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://oneho.com/shop',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://oneho.com/product/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <main className="flex-1">
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div className="relative aspect-square bg-secondary border border-border">
                <Image
                  src={imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <div className="mb-6">
                  {product.categories && product.categories.length > 0 && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.categories[0].name}
                    </p>
                  )}
                  <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-3 mb-6">
                    {isOnSale && (
                      <span className="text-2xl line-through text-muted-foreground">
                        €{regularPrice.toFixed(2)}
                      </span>
                    )}
                    <span className={`text-3xl font-medium ${isOnSale ? 'text-destructive' : 'text-foreground'}`}>
                      €{price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {cleanShortDescription && (
                  <div className="mb-8">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {cleanShortDescription}
                    </p>
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <button className="w-full px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-base font-medium flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>

                <div className="border-t border-border pt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                      <Truck className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Free Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        On orders over €100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">2-Year Warranty</h3>
                      <p className="text-sm text-muted-foreground">
                        Full coverage included
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Availability:</strong>{' '}
                    {product.stock_status === 'instock' ? 'In Stock' : 'Out of Stock'}
                  </p>
                  {product.stock_quantity && (
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong className="text-foreground">Stock:</strong> {product.stock_quantity} units available
                    </p>
                  )}
                </div>
              </div>
            </div>

            {cleanDescription && (
              <div className="mt-16 pt-16 border-t border-border">
                <h2 className="text-3xl font-medium text-foreground mb-8">Product Details</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {cleanDescription}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Need Installation Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check our comprehensive installation guides or contact our support team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/install"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
              >
                View Installation Guides
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border hover:border-foreground/30 bg-white transition-colors duration-200 text-sm font-medium text-foreground"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-white">
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
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/install" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Install
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:support@oneho.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Email Support
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Phone Support
                  </a>
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
