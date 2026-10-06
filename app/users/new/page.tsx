async function handleSubmit(formData: FormData) {
  "use server";

  const name = formData.get("name");

  console.log("Eingegebener Name:", name);
}

export default function Page() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-fuchsia-300 px-6">
      {/* Glitter */}
      <div className="absolute left-10 top-20 text-4xl">✨</div>
      <div className="absolute right-20 top-24 text-3xl">💖</div>
      <div className="absolute bottom-20 left-20 text-3xl">💎</div>
      <div className="absolute bottom-32 right-16 text-4xl">✨</div>
      <div className="absolute left-1/4 top-10 text-2xl">⭐</div>
      <div className="absolute bottom-10 right-1/3 text-2xl">💗</div>

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/70 bg-white/70 p-10 shadow-2xl backdrop-blur-md">
        <div className="mb-4 text-center text-6xl">🎀</div>

        <h1 className="text-center text-4xl font-extrabold text-pink-700">
          Create User
        </h1>

        <p className="mt-3 text-center text-pink-500">
          ✨ Welcome to the Pink Palace ✨
        </p>

        <form action={handleSubmit} className="mt-8">
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-pink-700"
          >
            Your name 💕
          </label>

          <input
            id="name"
            name="name"
            placeholder="Enter your name..."
            required
            className="w-full rounded-2xl border-2 border-pink-200 bg-white/80 px-5 py-4 text-pink-700 outline-none transition placeholder:text-pink-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-200"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-pink-500 px-6 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:scale-[1.02] hover:bg-pink-600"
          >
            💖 Create User ✨
          </button>
        </form>

        <p className="mt-8 text-center text-sm font-medium text-pink-400">
          Made with 💕 glitter & sparkle
        </p>
      </div>
    </main>
  );
}
