import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getNgrokImageUrl(imageUrl: string): string {
  const ngrokDomain = 'https://anthropographic-patchily-carletta.ngrok-free.dev';

  let url = imageUrl;

  if (url.match(/https?:\/\/[^\/]*onehonl\.local(:443)?/)) {
    url = url.replace(/https?:\/\/[^\/]*onehonl\.local(:443)?/, ngrokDomain);
  }

  if (url.includes('anthropographic-patchily-carletta.ngrok-free.dev') ||
      url.includes('anthropographic-patchily-carletta.ngrok-free.app')) {
    try {
      const urlObj = new URL(url);
      if (!urlObj.searchParams.has('ngrok-skip-browser-warning')) {
        urlObj.searchParams.set('ngrok-skip-browser-warning', 'true');
      }
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  return url;
}
