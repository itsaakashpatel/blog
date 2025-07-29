import { baseUrl } from 'app/sitemap';

export const runtime = 'edge';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
