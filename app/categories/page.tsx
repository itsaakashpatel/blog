import Link from 'next/link';
import { useState } from 'react';
import { getAllCategories } from 'app/blog/utils';

export const metadata = {
  title: 'Categories',
  description: 'All blog categories.',
};

export default function CategoriesPage() {
  const allCategories = getAllCategories();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = allCategories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        All Categories
      </h1>
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-8 border border-neutral-300 dark:border-neutral-700 rounded-md bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <ul>
        {filteredCategories.map((category) => (
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
