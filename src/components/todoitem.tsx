"use client";
import { useState } from "react";
import { Todo } from "@/lib/useTodos";
import { Pencil, Trash2 } from "lucide-react";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
}: {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  function handleEdit() {
    if (isEditing && editText.trim()) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  }

  return (
    <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow hover:shadow-md">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="h-5 w-5"
      />

      {isEditing ? (
        <input
          className="flex-1 rounded border px-2 py-1"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
          onDoubleClick={handleEdit}
        >
          {todo.text}
        </span>
      )}

      <button onClick={handleEdit} className="text-blue-500 hover:text-blue-700">
        <Pencil size={18} />
      </button>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
