import Image from 'next/image';
import Link from 'next/link';
import { WooCommerceProduct } from '@/lib/woocommerce';
import { getNgrokImageUrl } from '@/lib/utils';

interface ProductCardProps {
  product: WooCommerceProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = getNgrokImageUrl(
    product.images[0]?.src || 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg'
  );

  const price = parseFloat(product.price);
  const regularPrice = parseFloat(product.regular_price);
  const isOnSale = product.on_sale && regularPrice > price;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="border border-border bg-card transition-colors duration-200 hover:border-foreground/30">
        <div className="aspect-square relative overflow-hidden bg-secondary">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-5">
          <h3 className="font-medium text-base text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
            {product.name}
          </h3>

          <div className="flex items-center gap-2.5">
            {isOnSale && (
              <span className="text-sm line-through text-muted-foreground">
                €{regularPrice.toFixed(2)}
              </span>
            )}
            <span className={`text-sm font-medium ${isOnSale ? 'text-destructive' : 'text-foreground/80'}`}>
              €{price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
