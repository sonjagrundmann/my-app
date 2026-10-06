export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-pink-200 px-6 py-3 text-center font-bold text-pink-700">
        💗 Notizbereich ✨
      </div>

      {children}
    </div>
  );
}
