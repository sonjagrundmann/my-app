import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Mini-Notizwand",
  description: "Meine kleine Next.js Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-pink-50">
        <header className="bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-5 shadow-lg">
          <h1 className="text-center text-3xl font-extrabold text-white">
            📝 Mini-Notizwand ✨
          </h1>

          <Navigation />
        </header>

        {children}
      </body>
    </html>
  );
}
