"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mt-5 flex justify-center gap-3">
      <Link
        href="/"
        className={`rounded-full px-5 py-2 font-semibold transition hover:scale-105 ${
          pathname === "/"
            ? "bg-pink-600 text-white"
            : "bg-white/80 text-pink-600 hover:bg-white"
        }`}
      >
        🏠 Home
      </Link>

      <Link
        href="/about"
        className={`rounded-full px-5 py-2 font-semibold transition hover:scale-105 ${
          pathname === "/about"
            ? "bg-pink-600 text-white"
            : "bg-white/80 text-pink-600 hover:bg-white"
        }`}
      >
        💕 About
      </Link>

      <Link
        href="/blog"
        className={`rounded-full px-5 py-2 font-semibold transition hover:scale-105 ${
          pathname.startsWith("/blog")
            ? "bg-pink-600 text-white"
            : "bg-white/80 text-pink-600 hover:bg-white"
        }`}
      >
        📝 Blog
      </Link>

      <a
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white/80 px-5 py-2 font-semibold text-pink-600 transition hover:scale-105 hover:bg-white"
      >
        ⚡ Next.js
      </a>
    </nav>
  );
}
