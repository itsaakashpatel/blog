import Link from 'next/link';
import { getAllCategories } from 'app/blog/utils';
import { baseUrl } from 'app/sitemap';

export const metadata = {
  title: 'Categories - Browse Technical Topics by Aakash Patel',
  description:
    'Browse technical articles and tutorials organized by categories.',
  keywords: ['Blog Categories', 'Technical Topics'],
  openGraph: {
    title: 'Categories - Browse Technical Topics by Aakash Patel',
    description:
      'Browse technical articles and tutorials organized by categories.',
    url: `${baseUrl}/categories`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=Categories`,
        width: 1200,
        height: 630,
        alt: 'Categories - Browse Technical Topics by Aakash Patel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Categories - Browse Technical Topics by Aakash Patel',
    description:
      'Browse technical articles and tutorials organized by categories.',
    images: [`${baseUrl}/og?title=Categories`],
  },
  alternates: {
    canonical: `${baseUrl}/categories`,
  },
};

export default function CategoriesPage() {
  const allCategories = getAllCategories();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        All Categories
      </h1>
      <ul>
        {allCategories.map((category) => (
          <li key={category} className="mb-4">
            <Link
              href={`/categories/${category}`}
              className="text-neutral-800 hover:underline"
            >
              {decodeURIComponent(category)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
