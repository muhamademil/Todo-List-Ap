"use client";
import TodoInput from "@/components/todoInput";
import TodoFilter from "@/components/todoFilter";
import TodoList from "@/components/todoList";
import { useTodos } from "@/lib/useTodos";

export default function Home() {
  const {
    todos,
    allTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-blue-200">
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-700">
          Todo List
        </h1>

        <TodoInput onAdd={addTodo} />
        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {(["all", "active", "completed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filter === f ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500">{allTodos.length} tasks</div>
        </div>

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onEdit={editTodo}
          onDelete={deleteTodo}
          clearCompleted={clearCompleted}
          isCompletedTab={filter === "completed"}
        />
      </div>
    </main>
  );
}
