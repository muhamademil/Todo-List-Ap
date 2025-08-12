import TodoItem from "./todoItem";
import { TodoListProps ,Todo } from "../types/todo";


export default function TodoList({
  todos,
  onToggle,
  onEdit,
  onDelete,
  clearCompleted,
  isCompletedTab,
}: TodoListProps) {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
          isCompletedTab={isCompletedTab}
        />
      ))}
      {isCompletedTab && todos.length > 0 && (
        <button
          onClick={clearCompleted}
          className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition"
        >
          Delete All Completed
        </button>
      )}
    </div>
  );
}
