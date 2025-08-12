import { useState } from "react";
import { TodoItemProps } from "../types/todo";


export default function TodoItem({
  todo,
  onToggle,
  onEdit,
  onDelete,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    if (text.trim()) {
      onEdit(todo.id, text.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center justify-between rounded-md border p-2 bg-gray-50">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 rounded border px-2 py-1 text-gray-400"
        />
      ) : (
        <label className="flex items-center gap-2 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="cursor-pointer"
          />
          <span className={todo.completed ? "line-through text-gray-400" : ""}>
            {todo.text}
          </span>
        </label>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-2 py-1 rounded bg-green-500 text-white hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => {
                setText(todo.text);
                setIsEditing(false);
              }}
              className="px-2 py-1 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-2 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}