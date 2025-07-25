import { BlogPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm Aakash Patel
      </h1>
      <p className="mb-4">
        {`
Welcome to my digital space – think of it as my public brain dump where I share everything I'm learning, building, and thinking about.

I'm passionate about Software engineering, AI, and SEO. As a Software Engineer who loves solving problems, I use this site to document my journey, share technical insights, and showcase the projects I'm working on.`}
      </p>
      <div className="my-8">
        <BlogPosts showArchiveNote={true} limitPosts={true} />
      </div>
    </section>
  );
}
