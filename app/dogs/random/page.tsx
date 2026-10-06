export default async function DogPage() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  return (
    <main className="p-8 text-center text-2xl">
      <h1>Random Dog</h1>

      <img
        src={data.message}
        alt="Random Dog"
        className="mx-auto my-4 block max-w-100 rounded-xl"
      />
    </main>
  );
}
