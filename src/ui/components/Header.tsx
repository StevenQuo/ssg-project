"use client";

import { useState } from 'react';
import Link from 'next/link';
import menu from '@/data/menu.json';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface Menu {
  slug: string;
  title: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="text-xl font-semibold text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            ECOME
          </Link>
        </div>

        {/* Menu untuk Desktop */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {menu.map((item) => {
            const isActive = pathname === `/${item.slug}`;
            return (
            <Link 
              key={item.slug} 
              href={`/${item.slug}`} 
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <span className={clsx(
					isActive ? "border-neutral-900 text-neutral-900 dark:text-white dark:border-white" : "border-transparent text-neutral-500",
					"inline-flex items-center border-b-2 pt-px text-sm font-medium hover:text-neutral-700 hover:dark:text-neutral-700",
				)}>{item.title}</span>
            </Link>
          )})}
        </nav>

        {/* Tombol Hamburger untuk Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {isMenuOpen ? (
              // Ikon 'X' (Close)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Ikon 'Hamburger' (Open)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Panel Menu Mobile yang Muncul/Hilang */}
      {isMenuOpen && (
        <nav className="border-t border-gray-200 dark:border-gray-700 md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {menu.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}