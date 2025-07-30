import { CustomMDX } from 'app/components/mdx';
import { baseUrl } from 'app/sitemap';
import { getPageContent } from 'app/lib/pages';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Projects - Portfolio by Aakash Patel',
  description:
    'Learn about my software projects, experiments and learnings in software industry.',
  keywords: ['Aakash Patel Projects', 'Software Portfolio'],
  openGraph: {
    title: 'Projects - Portfolio by Aakash Patel',
    description:
      'Learn about my software projects, experiments and learnings in software industry.',
    url: `${baseUrl}/projects`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=Projects`,
        width: 1200,
        height: 630,
        alt: 'Projects - by Aakash Patel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects - Portfolio by Aakash Patel',
    description:
      'Learn about my software projects, experiments and learnings in software industry.',
    images: [`${baseUrl}/og?title=Projects`],
  },
  alternates: {
    canonical: `${baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  const pageData = getPageContent('projects');

  if (!pageData) {
    notFound();
  }

  return (
    <section className="py-2">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="space-y-6">
        <CustomMDX source={pageData.content} />
      </div>
    </section>
  );
}
