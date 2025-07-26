import { getAllCategories } from 'app/blog/utils';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Categories',
  description: 'All blog categories.',
};

export default async function CategoriesLayout({
  children,
}: {
  children: ReactNode;
}) {
  const categories = getAllCategories();

  return <>{children}</>;
}
