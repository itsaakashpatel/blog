import { BlogPosts } from 'app/components/posts';
import { getBlogPosts } from 'app/blog/utils';
import { notFound } from 'next/navigation';
import { baseUrl } from 'app/sitemap';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === category
  );

  if (posts.length === 0) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  const categoryTitle = decodedCategory
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${categoryTitle} Articles - Technical Insights by Aakash Patel`,
    description: `Explore ${posts.length} technical articles about ${categoryTitle}`,
    keywords: [
      `${categoryTitle} Articles`,
      `${categoryTitle} Tutorials`,
      `${categoryTitle} Tips`,
    ],
    openGraph: {
      title: `${categoryTitle} Articles - Technical Insights by Aakash Patel`,
      description: `Explore ${posts.length} technical articles about ${categoryTitle}.`,
      url: `${baseUrl}/categories/${category}`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og?title=${encodeURIComponent(categoryTitle)}`,
          width: 1200,
          height: 630,
          alt: `${categoryTitle} Articles - Technical Insights by Aakash Patel`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryTitle} Articles - Technical Insights by Aakash Patel`,
      description: `Explore ${posts.length} technical articles about ${categoryTitle}.`,
      images: [`${baseUrl}/og?title=${encodeURIComponent(categoryTitle)}`],
    },
    alternates: {
      canonical: `${baseUrl}/categories/${category}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const categories = new Set<string>();
  posts.forEach((post) => {
    if (post.metadata.category) {
      categories.add(post.metadata.category);
    }
  });

  return Array.from(categories).map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = params;
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === category
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Category: {decodeURIComponent(category)}
      </h1>
      <BlogPosts posts={posts} />
    </section>
  );
}
