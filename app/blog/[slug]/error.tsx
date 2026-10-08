"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-100">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="text-5xl">😢</div>

        <h1 className="mt-4 text-3xl font-bold text-pink-700">
          Fehler beim Laden
        </h1>

        <p className="mt-3 text-pink-500">
          Dieser Blogpost konnte nicht geladen werden.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-pink-500 px-6 py-3 text-white"
        >
          Erneut versuchen
        </button>
      </div>
    </main>
  );
}
