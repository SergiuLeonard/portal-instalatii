// /app/calculatoare/components/ui/ResultCard.tsx
interface ResultCardProps {
  label: string;
  value: string | number;
  unit?: string;
  status?: string;
  formula?: string;
  description?: string;
  className?: string;
}

export function ResultCard({
  label,
  value,
  unit,
  status = "info",
  formula,
  description,
  className,
}: ResultCardProps) {
  const statusColors = {
    ok: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    warning: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    error: "bg-red-500/10 border-red-500/30 text-red-400",
    info: "bg-blue-500/10 border-blue-500/30 text-blue-400",
  };

  return (
    <div className={`p-4 rounded-xl border ${statusColors[status as keyof typeof statusColors] || statusColors.info} ${className || ''}`}>
      <div className="text-sm text-gray-400 mb-1">{label}</div>
      <div className="text-2xl font-bold text-white">
        {value} <span className="text-sm font-normal text-gray-400">{unit}</span>
      </div>
      {formula && <div className="text-xs mt-2 opacity-80 font-mono text-green-400">{formula}</div>}
      {description && <div className="text-xs mt-1 text-gray-400">{description}</div>}
    </div>
  );
}