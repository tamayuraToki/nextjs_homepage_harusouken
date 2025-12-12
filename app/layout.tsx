import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_JP } from 'next/font/google'

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
})

export const metadata: Metadata = {
  title: "晴総建",
  description: "晴総建"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
      <Header />
      < main  className="pt-[32px]">
        {children}
      </main>
      <Footer />
    </body>
    </html>
  );
}
