// /app/calculatoare/components/ui/ResultCard.tsx
interface ResultCardProps {
  label: string;
  value: string | number;
  unit?: string;
  status?: "ok" | "warning" | "error" | "info";
  description?: string;
  className?: string;
}

export function ResultCard({
  label,
  value,
  unit,
  status = "info",
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
    <div className={`rounded-xl p-6 border ${statusColors[status]} space-y-3`}>
      <h3 className="text-sm font-medium opacity-80">{label}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold font-mono">{value}</span>
        {unit && <span className="text-lg opacity-60">{unit}</span>}
      </div>
      {className && (
        <div className="text-xs font-mono bg-black/20 p-2 rounded border border-white/10">
          {className}
        </div>
      )}
      {description && (
        <p className="text-sm opacity-80 leading-relaxed">{description}</p>
      )}
    </div>
  );
}