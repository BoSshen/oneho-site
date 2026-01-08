export interface WooCommerceProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  description: string;
  short_description: string;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  stock_status: string;
  stock_quantity: number | null;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
}

export interface WooCommerceApiError {
  code: string;
  message: string;
  data?: {
    status: number;
  };
}

const BASE_URL = "https://anthropographic-patchily-carletta.ngrok-free.dev";
const CONSUMER_KEY = "ck_bd7dd79b6bb178d73bfc65bd7092f97d7707a51b";
const CONSUMER_SECRET = "cs_de30b9e6f670c32262539219da9868f7957f0758";

class WooCommerceClient {
  private baseUrl: string;
  private consumerKey: string;
  private consumerSecret: string;

  constructor() {
    this.baseUrl = BASE_URL;
    this.consumerKey = CONSUMER_KEY;
    this.consumerSecret = CONSUMER_SECRET;
  }

  private getAuthHeader(): string {
    const credentials = btoa(`${this.consumerKey}:${this.consumerSecret}`);
    return `Basic ${credentials}`;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        code: 'network_error',
        message: `Failed to fetch from ${response.url}. Status: ${response.status}`,
      }));

      console.error('API Error:', {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        errorData,
      });

      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`
      );
    }

    return response.json();
  }

  async getProducts(params?: {
    per_page?: number;
    page?: number;
    category?: string;
    search?: string;
  }): Promise<WooCommerceProduct[]> {
    try {
      const url = new URL('/wp-json/wc/v3/products', this.baseUrl);
      url.searchParams.set('per_page', String(params?.per_page || 10));
      url.searchParams.set('page', String(params?.page || 1));

      if (params?.category) {
        url.searchParams.set('category', params.category);
      }
      if (params?.search) {
        url.searchParams.set('search', params.search);
      }

      console.log('Fetching products from:', url.toString());
      console.log('Using credentials:', {
        hasKey: !!this.consumerKey,
        hasSecret: !!this.consumerSecret,
      });

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Authorization': this.getAuthHeader(),
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        cache: 'no-store',
      });

      console.log('Response status:', response.status);

      return this.handleResponse<WooCommerceProduct[]>(response);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProduct(id: number): Promise<WooCommerceProduct> {
    try {
      const url = new URL(`/wp-json/wc/v3/products/${id}`, this.baseUrl);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Authorization': this.getAuthHeader(),
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        cache: 'no-store',
      });

      return this.handleResponse<WooCommerceProduct>(response);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  }

  async getProductBySlug(slug: string): Promise<WooCommerceProduct | null> {
    try {
      const url = new URL('/wp-json/wc/v3/products', this.baseUrl);
      url.searchParams.set('slug', slug);

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Authorization': this.getAuthHeader(),
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        cache: 'no-store',
      });

      const products = await this.handleResponse<WooCommerceProduct[]>(response);
      return products.length > 0 ? products[0] : null;
    } catch (error) {
      console.error(`Error fetching product by slug ${slug}:`, error);
      throw error;
    }
  }

  isConfigured(): boolean {
    return !!(this.baseUrl && this.consumerKey && this.consumerSecret);
  }
}

export const woocommerce = new WooCommerceClient();
