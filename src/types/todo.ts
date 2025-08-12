export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoInputProps {
  onAdd: (text: string) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  clearCompleted?: () => void;
  isCompletedTab?: boolean;
}

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  isCompletedTab?: boolean;
}

export interface TodoFilterProps {
  filter: "all" | "active" | "completed";
  setFilter: (f: "all" | "active" | "completed") => void;
}