'use client'; // required for using hooks in App Router

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/login', label: 'Login' },
    { href: '/contact', label: 'Contact' },
    // { href: '/logout', label: 'Logout' },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/Naveen.jpg"
            alt="My Photo"
            width={35}
            height={35}
            className="rounded-lg"
          />
          <span className="text-2xl font-semibold dark:text-white">
            {"</>"}Naveen-Gupta
          </span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        {/* Menu Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 rounded-sm ${
                    pathname === link.href
                      ? 'text-blue-700 dark:text-blue-400 font-semibold'
                      : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
