import { BlogPosts } from 'app/components/posts';
import { baseUrl } from 'app/sitemap';

export const metadata = {
  title: 'Blog - Technical Insights & Tutorials by Aakash Patel',
  description:
    'Explore technical articles, learnings, tips and tutorials on software development, AI, Tech, SEO, and more.',
  keywords: [
    'Aakash Patel Blog',
    'Technical Blog',
    'React Tutorials',
    'Next.js Articles',
    'JavaScript Tips',
    'TypeScript Guide',
    'Web Development Blog',
    'Programming Tutorials',
    'Software Engineering',
    'AI Insights',
    'SEO Tips',
    'Tech Articles',
  ],
  openGraph: {
    title: 'Blog - Technical Insights & Tutorials by Aakash Patel',
    description:
      'Explore technical articles, tutorials, and insights on software development, AI, Tech, SEO, and more.',
    url: `${baseUrl}/blog`,
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og?title=Blog`,
        width: 1200,
        height: 630,
        alt: 'Blog - Technical Insights & Tutorials by Aakash Patel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Technical Insights & Tutorials by Aakash Patel',
    description:
      'Explore technical articles, tutorials, and insights on software development, AI, Tech, SEO, and more.',
    images: [`${baseUrl}/og?title=Blog`],
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts showArchiveNote={false} />
    </section>
  );
}
