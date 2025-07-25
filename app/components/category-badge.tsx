import Link from 'next/link';

interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Link
      href={`/categories/${encodeURIComponent(category)}`}
      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
    >
      {category}
    </Link>
  );
}
