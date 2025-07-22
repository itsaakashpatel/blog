import Link from 'next/link';
import { getAllCategories } from 'app/blog/utils';

export const metadata = {
  title: 'Categories',
  description: 'All blog categories.',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        All Categories
      </h1>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-4">
            <Link
              href={`/blog/categories/${category}`}
              className="text-neutral-800 dark:text-neutral-200 hover:underline"
            >
              {decodeURIComponent(category)}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
