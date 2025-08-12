"use client";
export default function TodoFilter({
  filter,
  setFilter,
}: {
  filter: "all" | "active" | "completed";
  setFilter: (f: "all" | "active" | "completed") => void;
}) {
  const filters = ["all", "active", "completed"] as const;

  return (
    <div className="flex gap-3">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`rounded-lg px-4 py-2 capitalize ${
            filter === f
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
