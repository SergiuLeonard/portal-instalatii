const items = [
  { id: "apa", label: "Instalații apă" },
  { id: "canalizare", label: "Canalizare" },
  { id: "termice", label: "Instalații termice" },
];

export default function KnowledgeMenu() {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="px-4 py-2 rounded-lg border border-gray-300
                     hover:bg-blue-50 hover:border-blue-400
                     transition text-sm font-medium"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
