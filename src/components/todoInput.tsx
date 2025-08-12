"use client";
import { useState } from "react";

export default function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="flex-1 rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-2 text-white shadow hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}
