async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  await wait();

  if (slug === "not-found") {
    throw new Error("Blogpost konnte nicht geladen werden");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-100 p-8">
      <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
        <div className="text-5xl">📝</div>

        <h1 className="mt-4 text-4xl font-extrabold text-pink-700">
          Blog Post
        </h1>

        <p className="mt-4 text-pink-500">Aktueller Slug:</p>

        <p className="mt-2 text-2xl font-bold text-fuchsia-600">{slug}</p>
      </div>
    </main>
  );
}
