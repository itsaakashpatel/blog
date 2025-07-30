import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getPagesPath() {
  return path.join(process.cwd(), 'content/pages');
}

export function getPageContent(slug: string) {
  const pagesDirectory = getPagesPath();
  const filePath = path.join(pagesDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    metadata: data,
    content,
  };
}

export function getAllPages() {
  const pagesDirectory = getPagesPath();

  if (!fs.existsSync(pagesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(pagesDirectory);
  const pages = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '');
      const pageContent = getPageContent(slug);
      return {
        slug,
        ...pageContent,
      };
    })
    .filter(Boolean);

  return pages;
}
