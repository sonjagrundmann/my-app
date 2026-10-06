import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mini-Notizwand",
  description: "Meine kleine Notizwand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-pink-50">
        <header className="bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-5 text-center shadow-lg">
          <h1 className="text-3xl font-extrabold text-white">
            📝 Mini-Notizwand ✨
          </h1>
        </header>

        {children}
      </body>
    </html>
  );
}
