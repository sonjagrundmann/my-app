"use client";

import { useState } from "react";

export default function Note() {
  const [text, setText] = useState("Das ist meine erste Notiz! ✨");

  return (
    <div className="w-full max-w-md rounded-3xl bg-yellow-100 p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-yellow-800">📝 Meine Notiz</h2>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        className="mt-5 w-full rounded-xl border-2 border-yellow-300 bg-white p-3 text-yellow-800 outline-none focus:border-pink-400"
        placeholder="Schreibe eine Notiz..."
      />

      <p className="mt-5 rounded-xl bg-white/70 p-4 text-yellow-700">{text}</p>
    </div>
  );
}
