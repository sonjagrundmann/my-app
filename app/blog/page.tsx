async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function BlogPage() {
  await wait();

  throw new Error("Blog konnte nicht geladen werden");

  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-100 p-8">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="text-5xl">📝</div>

        <h1 className="mt-4 text-4xl font-extrabold text-pink-700">My Blog</h1>

        <p className="mt-4 text-pink-500">Willkommen auf meinem Blog! ✨</p>

        <p className="mt-4 text-pink-400">
          Dieser Inhalt wird künstlich verzögert geladen.
        </p>
      </div>
    </main>
  );
}
