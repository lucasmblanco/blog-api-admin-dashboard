//import "./globals.css";
import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { UserProvider } from '@/context/UserContext';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
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
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
