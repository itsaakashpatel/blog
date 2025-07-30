import { CustomMDX } from 'app/components/mdx';
import { baseUrl } from 'app/sitemap';

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

const aboutContent = `
Hi, I'm Aakash.
	
I've been fascinated by technology & tinkering with gadgets since I was a kid – I remember in 7th grade when my friend's laptop completely died the night before his final exam presentation and I opened it up, reseated the RAM stick that had come loose, and had it running perfectly in 10 minutes. 

From there, I kept fixing more computers and laptops for friends and relatives, which deepened my interest in technology and problem-solving. That curiosity led me to become a Software Engineer.

You know how businesses often struggle with technology that doesn't quite solve their real problems? Well, I'm the person who digs deep into those customer pain points and builds tech solutions that actually work.

What sets me apart is that I don't just write code – I focus on delivering outcomes that matter to business. Whether it's scaling applications for millions of users or optimizing performance to save time and money, I try to look at every business aspect that can impact and improve the business.

When I'm not coding, you'll find me hiking, traveling, sharing technical insights through my blog posts, or discussing ideas over coffee – I believe the best solutions come from collaboration and continuous learning.

### SKILLS & INTERESTS:
- **Programming Languages**: Javascript, Typescript, Java
- **Web**: ReactJS, Redux, VueJs, NextJs, NodeJS, ExpressJS, Accessibility, HTML, CSS, D3Js
- **Backend & Frameworks**: REST APIs, GraphQL, Express Js
- **Databases**: MySQL, PostgreSQL, MongoDB, Redis
- **Cloud Technologies**: Amazon Web Services (AWS), Google Cloud Platform
- **Deployment and Automation**: Vercel, Docker, Jenkins CI/CD
- **Version Control**: Gitlab and GitHub
- **Methodologies**: Agile, Software Development Life Cycle, Test Driven Development, Design Patterns

I enjoy meeting new people and hearing new perspectives. Reach out if you want to talk to me about emerging tech, traveling, food, and cricket.
`;

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <CustomMDX source={aboutContent} />
    </section>
  );
}
