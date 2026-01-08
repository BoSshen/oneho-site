import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Oneho - Premium Hardware Solutions',
  description: 'Discover premium hardware solutions for modern living. Quality products with 2-year warranty and expert installation support.',
  keywords: ['hardware', 'premium hardware', 'home hardware', 'installation', 'quality products'],
  authors: [{ name: 'Oneho' }],
  creator: 'Oneho',
  publisher: 'Oneho',
  metadataBase: new URL('https://oneho.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://oneho.com',
    siteName: 'Oneho',
    title: 'Oneho - Premium Hardware Solutions',
    description: 'Discover premium hardware solutions for modern living. Quality products with 2-year warranty and expert installation support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oneho - Premium Hardware Solutions',
    description: 'Discover premium hardware solutions for modern living. Quality products with 2-year warranty and expert installation support.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Oneho',
    url: 'https://oneho.com',
    logo: 'https://oneho.com/logo.png',
    description: 'Premium hardware solutions for modern living',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-890',
      contactType: 'customer service',
      email: 'support@oneho.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://twitter.com/oneho',
      'https://facebook.com/oneho',
      'https://linkedin.com/company/oneho',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
