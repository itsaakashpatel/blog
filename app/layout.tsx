import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Aakash Patel - Software Engineer & Technical Writer',
    template: '%s | Aakash Patel',
  },
  description:
    "Aakash's digital space for sharing knowledge, projects, and insights on AI, SEO, Tech, and marketing.",
  keywords: [
    'Aakash Patel',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Frontend Development',
    'Web Development',
    'Technical Writing',
    'AI',
    'SEO',
    'Technical Writer',
    'AI Engineer',
    'AI and ML Developer',
  ],
  authors: [{ name: 'Aakash Patel', url: baseUrl }],
  creator: 'Aakash Patel',
  publisher: 'Aakash Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Aakash Patel - Software Engineer & Technical Writer',
    title: 'Aakash Patel - Software Engineer & Technical Writer',
    description:
      "Aakash's digital space for sharing knowledge, projects, and insights on AI, SEO, Tech, and marketing.",
    images: [
      {
        url: `${baseUrl}/og`,
        width: 1200,
        height: 630,
        alt: 'Aakash Patel - Software Engineer & Technical Writer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@itsaakashpatel',
    creator: '@itsaakashpatel',
    title: 'Aakash Patel - Software Engineer & Technical Writer',
    description:
      "Aakash's digital space for sharing knowledge, projects, and insights on AI, SEO, Tech, and marketing.",
    images: [`${baseUrl}/og`],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      {
        url: '/favicon/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      { url: '/favicon/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon/favicon.svg',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning={true}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto text-black">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
