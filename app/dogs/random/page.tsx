export default async function DogPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");

  const data = await res.json();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-pink-100 via-pink-200 to-fuchsia-300 px-6">
      <div className="absolute left-10 top-20 text-4xl">✨</div>
      <div className="absolute right-20 top-32 text-3xl">💖</div>
      <div className="absolute bottom-20 left-20 text-3xl">💎</div>
      <div className="absolute bottom-32 right-10 text-4xl">✨</div>

      <div className="w-full max-w-lg rounded-3xl border border-white/60 bg-white/70 p-8 text-center shadow-2xl backdrop-blur-md">
        <div className="mb-3 text-5xl">🐶</div>

        <h1 className="text-4xl font-extrabold text-pink-700">Random Dog</h1>

        <p className="mt-2 text-pink-500">Your daily dose of cuteness ✨</p>

        <img
          src={data.message}
          alt="Random Dog"
          className="border-r-2 mx-auto my-8 h-80 w-full rounded-2xl object-cover shadow-xl"
        />

        <a
          href="/dogs/random"
          className="inline-block rounded-full bg-pink-500 px-8 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-pink-600"
        >
          🐾 Another Dog
        </a>
      </div>
    </main>
  );
}
