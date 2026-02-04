// /app/calculatoare/components/ui/FormulaBlock.tsx
interface FormulaBlockProps {
  title: string;
  formula: string;
  variables: { symbol: string; description: string; unit?: string }[];
}

export function FormulaBlock({ title, formula, variables }: FormulaBlockProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 my-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-200">{title}</h3>
      <div className="bg-black/30 rounded-lg p-4 mb-4 overflow-x-auto">
        <code className="text-lg text-blue-300 font-mono">{formula}</code>
      </div>
      <div className="grid gap-2">
        {variables.map((v) => (
          <div key={v.symbol} className="flex items-center gap-3 text-sm">
            <span className="font-mono text-blue-400 font-bold min-w-[40px]">
              {v.symbol}
            </span>
            <span className="text-gray-400">- {v.description}</span>
            {v.unit && (
              <span className="text-gray-500 text-xs">[{v.unit}]</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}