import { CustomMDX } from 'app/components/mdx';
import { baseUrl } from 'app/sitemap';
import { getPageContent } from 'app/lib/pages';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'About Aakash Patel - Software Engineer & Technical Writer',
  description:
    'Aakash is a tech nerd, passionate about building scalable applications and solving real-world problems through technology. Learn more about his journey, skills, and interests.',
  keywords: [
    'Aakash Patel',
    'Software Engineer',
    'About',
    'Technical Writer',
    'AI Engineer',
    'AI and ML Developer',
  ],
  openGraph: {
    title: 'About Aakash Patel - Software Engineer & Technical Writer',
    description:
      'Aakash is a tech nerd, passionate about building scalable applications and solving real-world problems through technology. Learn more about his journey, skills, and interests.',
    url: `${baseUrl}/about`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=About`,
        width: 1200,
        height: 630,
        alt: 'About Aakash Patel - Software Engineer & Technical Writer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Aakash Patel - Software Engineer & Technical Writer',
    description:
      'Learn about Aakash Patel, a passionate Software Engineer specializing in React, Next.js, and modern web technologies.',
    images: [`${baseUrl}/og?title=About`],
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutPage() {
  const pageData = getPageContent('about');

  if (!pageData) {
    notFound();
  }

  return (
    <section className="py-2">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <div className="space-y-6">
        <CustomMDX source={pageData.content} />
      </div>
    </section>
  );
}
