import { getBlogPosts } from 'app/blog/utils';

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://aakashpatel.in';

export default async function sitemap() {
  // Get current date in ISO format for static routes
  const currentDate = new Date().toISOString();

  // Blog post entries with properly formatted dates
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Static route entries
  const routes = ['', '/blog', '/about', '/projects', '/categories'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: currentDate,
      changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
      priority: route === '' ? 1.0 : 0.6,
    })
  );

  return [...routes, ...blogs];
}
