"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full
        bg-layout-background/80 backdrop-blur-sm
        shadow-md z-50
        flex flex-col sm:flex-row items-center
        px-4 sm:px-6 py-2
      "
    >
      {/* スマホは左右に分ける、PCは従来どおり */}
      <div className="w-full flex items-center justify-between sm:justify-start">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">株式会社晴総建</span>
        </Link>

        {/* ハンバーガーボタン（スマホのみ） */}
        <button
          className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* ナビゲーション */}
      <nav
        className={`
          flex flex-col sm:flex-row sm:ml-auto
          space-y-2 sm:space-y-0 sm:space-x-4
          ${isOpen ? "block" : "hidden"} sm:flex
        `}
      >
        <div className="flex gap-6 whitespace-nowrap">
          <Link href="/business" className="hover:underline" onClick={() => setIsOpen(false)}>事業案内</Link>
          <Link href="/philosophy" className="hover:underline" onClick={() => setIsOpen(false)}>企業理念</Link>
          <Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>お問い合わせ</Link>
        </div>

      </nav>
    </header>
  );
}
