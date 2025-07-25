import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    category?: string;
  };
}

export function BlogPosts({
  posts,
  showArchiveNote = false,
  limitPosts = false,
}: {
  posts?: BlogPost[];
  showArchiveNote?: boolean;
  limitPosts?: boolean;
}) {
  let postsToDisplay = posts || getBlogPosts();

  const sortedPosts = postsToDisplay.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });

  // Limit to 5 posts if limitPosts is true (for homepage)
  const displayedPosts = limitPosts ? sortedPosts.slice(0, 5) : sortedPosts;

  return (
    <div>
      {displayedPosts.map((post, index) => (
        <Link
          key={post.slug}
          className="block mb-8"
          href={`/blog/${post.slug}`}
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-start">
              <span className="text-base font-normal text-neutral-600 mr-2 flex-shrink-0 mt-0.5">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <h2 className="text-xl font-semibold text-neutral-900 leading-tight tracking-tight">
                {post.metadata.title}
              </h2>
            </div>
            <p className="text-neutral-600 text-sm ml-7">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </div>
        </Link>
      ))}
      {showArchiveNote && sortedPosts.length > 5 && (
        <p className="mt-8 text-neutral-600">
          {sortedPosts.length - 5} more posts can be found in the{' '}
          <Link
            href="/blog"
            className="text-neutral-900 underline hover:no-underline"
          >
            blog
          </Link>
          .
        </p>
      )}
    </div>
  );
}
