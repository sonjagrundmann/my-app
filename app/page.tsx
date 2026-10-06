import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-fuchsia-300">
      {/* Sparkles */}
      <div className="absolute left-10 top-20 text-4xl">✨</div>
      <div className="absolute right-20 top-24 text-3xl">💖</div>
      <div className="absolute bottom-20 left-20 text-3xl">💎</div>
      <div className="absolute bottom-32 right-16 text-4xl">✨</div>
      <div className="absolute left-1/3 top-12 text-2xl">⭐</div>

      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-extrabold text-pink-700">
          💕 Pink Palace
        </div>

        <div className="flex gap-3">
          <Link
            href="/dogs/random"
            className="rounded-full bg-white/70 px-5 py-2 font-semibold text-pink-600 shadow-md backdrop-blur transition hover:scale-105 hover:bg-white"
          >
            🐶 Dogs
          </Link>

          <Link
            href="/counter"
            className="rounded-full bg-white/70 px-5 py-2 font-semibold text-pink-600 shadow-md backdrop-blur transition hover:scale-105 hover:bg-white"
          >
            🔢 Counter
          </Link>

          <Link
            href="/users/new"
            className="rounded-full bg-pink-500 px-5 py-2 font-semibold text-white shadow-md transition hover:scale-105 hover:bg-pink-600"
          >
            👤 New User
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 text-7xl">🎀</div>

        <h1 className="text-6xl font-extrabold tracking-tight text-pink-700 md:text-7xl">
          Welcome to
          <br />
          <span className="text-fuchsia-600">Pink Palace</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg font-medium text-pink-600">
          A little corner of the internet filled with
          <br />
          💖 fun, ✨ sparkle and 🐶 cute dogs.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/dogs/random"
            className="rounded-full bg-pink-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:-translate-y-1 hover:scale-105 hover:bg-pink-600"
          >
            🐶 Random Dog
          </Link>

          <Link
            href="/counter"
            className="rounded-full bg-white px-8 py-4 text-lg font-bold text-pink-600 shadow-xl transition hover:-translate-y-1 hover:scale-105"
          >
            ✨ Try Counter
          </Link>
        </div>
      </section>
    </main>
  );
}
