import { CustomMDX } from 'app/components/mdx';
import { baseUrl } from 'app/sitemap';

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

const projectsContent = `
Coming soon!
`;

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <CustomMDX source={projectsContent} />
    </section>
  );
}
