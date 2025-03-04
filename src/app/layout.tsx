import { WithQuery } from '@/app-providers/with-query';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Todo Lists',
  description: 'A modern and simple Todo app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ✅ WithQuery는 Client Component이므로 Server Component에서 감싸기 */}
        <WithQuery>{children}</WithQuery>
      </body>
    </html>
  );
}
