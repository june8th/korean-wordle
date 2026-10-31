import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '한국어 Wordle - 5글자 단어 맞추기 게임',
  description: 'Next.js와 Tailwind CSS로 제작된 한국어 5음절 단어 맞추기 워들 게임입니다.',
};

export default function RootLayout({
  children,
}: ReadencodedLayoutProps<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
type ReadencodedLayoutProps<T> = T;
