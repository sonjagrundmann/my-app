"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-100 p-8">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="text-5xl">😢</div>

        <h1 className="mt-4 text-3xl font-extrabold text-pink-700">
          Etwas ist schiefgelaufen!
        </h1>

        <p className="mt-4 text-pink-500">
          Der Blog-Inhalt konnte leider nicht geladen werden.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-pink-500 px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-pink-600"
        >
          🔄 Erneut versuchen
        </button>
      </div>
    </main>
  );
}
