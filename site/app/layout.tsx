import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://noriaki-kishida.vercel.app'),
  alternates: { canonical: '/' },
  title: 'Noriaki Kishida | Software Engineer | AI Agents & Product Engineering',
  description: 'Software engineer and Minerva University CS & AI student building AI agents, secure infrastructure, automation tools, and end-to-end products. Selected work, experience, and recognition.',
  applicationName: 'Noriaki Kishida Portfolio',
  authors: [{ name: 'Noriaki Kishida', url: 'https://github.com/Marstronix218' }],
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Noriaki Kishida',
    title: 'Noriaki Kishida | Software Engineer | AI Agents & Product Engineering',
    description: 'Software engineer building AI agents, secure infrastructure, and end-to-end products that solve real problems.',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Noriaki Kishida: I build the real thing. Software Engineer & AI Builder.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noriaki Kishida | Software Engineer | AI Agents & Product Engineering',
    description: 'Software engineer building AI agents, secure infrastructure, and end-to-end products that solve real problems.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
