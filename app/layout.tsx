import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'OptimizedLanding - Modern Landing Page',
  description:
    'A high-performance, accessible landing page built with Next.js, Tailwind CSS, and Framer Motion',
  keywords: [
    'landing page',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'performance',
    'accessibility',
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  metadataBase: new URL('https://your-domain.com'),
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'OptimizedLanding - Modern Landing Page',
    description:
      'A high-performance, accessible landing page built with Next.js, Tailwind CSS, and Framer Motion',
    siteName: 'OptimizedLanding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OptimizedLanding - Modern Landing Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OptimizedLanding - Modern Landing Page',
    description:
      'A high-performance, accessible landing page built with Next.js, Tailwind CSS, and Framer Motion',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} scroll-smooth`}>
      <body
        className={`${inter.className} antialiased bg-white text-secondary-900`}
      >
        <div
          id='skip-nav'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50'
        >
          <a href='#main-content'>Skip to main content</a>
        </div>
        {children}
      </body>
    </html>
  );
}
