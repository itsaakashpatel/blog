# Aakash Patel's Blog

A modern, fast, and SEO-optimized personal blog built with Next.js 15, TypeScript, and Tailwind CSS. Features MDX support for rich content creation and a clean, minimalist design.

## 🚀 Features

- **⚡ Performance**: Built with Next.js 15 and optimized for speed
- **📝 MDX Support**: Write blog posts with MDX (Markdown + JSX)
- **🎨 Modern Design**: Clean, responsive design with Tailwind CSS
- **🔍 SEO Optimized**: Built-in SEO optimization with proper meta tags
- **📱 Responsive**: Mobile-first design that works on all devices
- **🏷️ Categories**: Organize posts by categories
- **📊 Analytics**: Integrated with Vercel Analytics and Speed Insights
- **🎯 TypeScript**: Fully typed for better developer experience
- **📖 Draft Posts**: Support for draft posts that won't be published
- **🗂️ Organized Structure**: Posts organized by year for easy maintenance

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) for rich blog posts
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
├── app/
│   ├── [slug]/
│   │   └── page.tsx         # Individual blog post pages (root level)
│   ├── blog/
│   │   ├── posts/
│   │   │   ├── 2023/        # Posts organized by year
│   │   │   ├── 2024/
│   │   │   └── 2025/
│   │   ├── page.tsx         # Blog listing page
│   │   └── utils.ts         # Blog utilities
│   ├── components/
│   │   ├── posts.tsx        # Blog posts component
│   │   ├── nav.tsx          # Navigation component
│   │   ├── footer.tsx       # Footer component
│   │   └── mdx.tsx          # MDX components
│   ├── about/
│   ├── projects/
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── public/
│   └── images/              # Static images
└── .vscode/                 # VS Code settings
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 (see `.nvmrc`)
- pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/itsaakashpatel/blog.git
   cd blog
   ```

2. **Use the correct Node.js version**

   ```bash
   nvm use
   ```

3. **Install dependencies**

   ```bash
   pnpm install
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Writing Blog Posts

### Creating a New Post

1. **Create a new MDX file** in the appropriate year folder:

   ```
   app/blog/posts/2025/my-new-post.mdx
   ```

2. **Add frontmatter** at the top of your file:

   ```yaml
   ---
   title: 'Your Post Title'
   publishedAt: 2025-07-28
   summary: 'A brief description of your post'
   category: 'technology' # optional
   status: 'published' # or "draft" to hide the post
   ---
   ```

3. **Write your content** using Markdown and JSX:

   ````mdx
   # Your Post Title

   This is a paragraph with **bold text** and _italic text_.

   ```javascript
   console.log('Code blocks are supported!');
   ```
   ````

   You can also use React components here!

   ```

   ```

### Post Status

- **Published**: Posts without `status` field or with `status: "published"` will be visible
- **Draft**: Posts with `status: "draft"` will be hidden from the public site

### Categories

Add a `category` field to organize your posts. Categories will automatically appear in the navigation.

## 🎨 Customization

### Styling

The blog uses Tailwind CSS for styling. You can customize the design by modifying:

- `tailwind.config.js` - Tailwind configuration
- `app/global.css` - Global styles
- Component files - Individual component styles

### Components

- `app/components/posts.tsx` - Blog post listing
- `app/components/nav.tsx` - Navigation bar
- `app/components/footer.tsx` - Footer
- `app/components/mdx.tsx` - MDX component overrides

## 🚀 Deployment

This blog is configured to deploy on Cloudflare Pages:

### Build Commands

- **Build**: `pnpm build`
- **Output Directory**: `.vercel/output/static`

### Environment Variables

No environment variables are required for basic functionality.

## 👤 Author

**Aakash Patel**

- Website: [aakashpatel.in](https://aakashpatel.in)
- Email: aakashpatel25274@gmail.com
- GitHub: [@itsaakashpatel](https://github.com/itsaakashpatel)

Made with ❤️ by [Aakash Patel](https://aakashpatel.in)
