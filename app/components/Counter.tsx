"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-6xl font-bold text-pink-600 drop-shadow-lg">
        {count}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-full bg-pink-200 px-6 py-3 text-2xl font-bold text-pink-700 shadow-lg transition hover:scale-110 hover:bg-pink-300"
        >
          −
        </button>

        <button
          onClick={() => setCount(count + 1)}
          className="rounded-full bg-pink-500 px-6 py-3 text-2xl font-bold text-white shadow-lg transition hover:scale-110 hover:bg-pink-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
