import { CustomMDX } from 'app/components/mdx';

export const metadata = {
  title: 'Projects',
  description: 'A showcase of my projects.',
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
