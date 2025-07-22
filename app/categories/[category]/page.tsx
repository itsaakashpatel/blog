import { BlogPosts } from 'app/components/posts';
import { getBlogPosts } from 'app/blog/utils';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  const categories = new Set<string>();
  posts.forEach(post => {
    if (post.metadata.category) {
      categories.add(post.metadata.category);
    }
  });

  return Array.from(categories).map(category => ({
    category,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const posts = getBlogPosts().filter(post => post.metadata.category === category);

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
