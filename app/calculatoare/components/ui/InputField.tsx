// /app/calculatoare/components/ui/InputField.tsx
"use client";

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
  required?: boolean;
}

export function InputField({
  label,
  value,
  onChange,
  unit,
  min,
  max,
  step = 1,
  description,
  required = false,
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
        {unit && <span className="text-gray-500 ml-1">({unit})</span>}
      </label>
      {description && (
        <p className="text-xs text-gray-500">{description}</p>
      )}
      <div className="flex gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          min={min}
          max={max}
          step={step}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        {unit && (
          <span className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-gray-400 text-sm min-w-[60px] text-center">
            {unit}
          </span>
        )}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
      />
    </div>
  );
}