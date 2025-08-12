"use client";
import TodoInput from "@/components/todoInput";
import TodoItem from "@/components/todoItem";
import TodoFilter from "@/components/todoFilter";
import { useTodos } from "@/lib/useTodos";

export default function HomePage() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    filter,
    setFilter,
  } = useTodos();

  return (
    <main className="mx-auto mt-10 max-w-lg space-y-6 px-4">
      <h1 className="text-center text-3xl font-bold text-gray-800">My Todo List</h1>

      <TodoInput onAdd={addTodo} />

      <TodoFilter filter={filter} setFilter={setFilter} />

      <div className="space-y-2">
        {todos.length === 0 && (
          <p className="text-center text-gray-500">No tasks found</p>
        )}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </div>
    </main>
  );
}
