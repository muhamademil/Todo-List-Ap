import { TodoFilterProps } from "@/types/todo";

export default function TodoFilter({ filter, setFilter }: TodoFilterProps) {
  const filters = ["all", "active", "completed"] as const;

  return (
    <div className="flex gap-2 mt-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`rounded-lg px-3 py-1 capitalize ${
            filter === f
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          } transition`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
