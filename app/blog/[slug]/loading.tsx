export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-100">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="animate-pulse text-5xl">✨</div>

        <h1 className="mt-4 text-3xl font-bold text-pink-700">
          Blogpost wird geladen...
        </h1>

        <p className="mt-3 text-pink-500">Bitte warten 💕</p>
      </div>
    </main>
  );
}
