//import "./globals.css";
import type { Metadata } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import { UserProvider } from '@/context/UserContext';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
const newreader = Newsreader({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-newsreader'
});

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Create, view, edit and delete posts.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newreader.variable}`}>
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
