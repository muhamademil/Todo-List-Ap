"use client";
import { useState } from "react";
import { TodoInputProps } from "../types/todo";

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Add new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
}