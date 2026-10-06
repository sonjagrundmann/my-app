export default async function ImagePage() {
  const res = await fetch(
    "https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg?semt=ais_user_personalization&w=740&q=80",
  );

  if (!res.ok) {
    throw new Error("Bild konnte nicht geladen werden");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-100 p-8">
      <div className="rounded-3xl bg-white p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-pink-700">
          📝 Meine Notizwand
        </h1>

        <img
          src="https://img.freepik.com/free-vector/yellow-note-paper-with-red-pin_1284-42430.jpg?semt=ais_user_personalization&w=740&q=80"
          alt="Gelber Notizzettel"
          className="w-full max-w-xl rounded-2xl shadow-lg"
        />
      </div>
    </main>
  );
}
