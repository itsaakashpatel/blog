import Link from "next/link";
import { getAllCategories } from "app/blog/utils";

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
