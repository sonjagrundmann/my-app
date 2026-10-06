import Counter from "../components/Counter";

export default function CounterPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-fuchsia-300 px-6">
      {/* Glitter */}
      <div className="absolute left-10 top-20 text-4xl">✨</div>
      <div className="absolute right-20 top-32 text-3xl">💖</div>
      <div className="absolute bottom-20 left-20 text-3xl">✨</div>
      <div className="absolute bottom-32 right-10 text-4xl">💎</div>
      <div className="absolute left-1/3 top-10 text-2xl">⭐</div>
      <div className="absolute bottom-10 right-1/3 text-2xl">✨</div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white/60 p-10 text-center shadow-2xl backdrop-blur-md">
        <div className="mb-3 text-5xl">💕</div>

        <h1 className="mb-2 text-4xl font-extrabold text-pink-700">
          Pretty Counter
        </h1>

        <p className="mb-8 text-pink-500">✨ Click and watch the magic ✨</p>

        <Counter />

        <p className="mt-8 text-sm font-medium text-pink-400">
          Made with 💖 & ✨
        </p>
      </div>
    </main>
  );
}
