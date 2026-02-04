// /app/calculatoare/components/ui/CalculatorLayout.tsx
"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator } from "lucide-react";

interface CalculatorLayoutProps {
  title: string;
  breviarCode: string;
  description: string;
  children: ReactNode;
  backLink?: string;
}

export default function CalculatorLayout({
  title,
  breviarCode,
  description,
  children,
  backLink = "/KnowledgeBase",
}: CalculatorLayoutProps) {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white pb-12">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href={backLink}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Înapoi</span>
            </Link>
          </div>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-mono border border-blue-600/30">
                  {breviarCode}
                </span>
              </div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <Calculator className="w-8 h-8 text-blue-500" />
                {title}
              </h1>
              <p className="text-gray-400 mt-2 max-w-2xl">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">{children}</div>
    </main>
  );
}

// /app/calculatoare/components/ui/InputField.tsx
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
          title={label}
          placeholder={`Enter ${label.toLowerCase()}`}
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
        placeholder={`Enter ${label.toLowerCase()}`} // Added placeholder attribute
      />
    </div>
  );
}

// /app/calculatoare/components/ui/ResultCard.tsx
interface ResultCardProps {
  label: string;
  value: string | number;
  unit?: string;
  status?: "ok" | "warning" | "error" | "info";
  description?: string;
  formula?: string;
}

export function ResultCard({
  label,
  value,
  unit,
  status = "info",
  description,
  formula,
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
      {formula && (
        <div className="text-xs font-mono bg-black/20 p-2 rounded border border-white/10">
          {formula}
        </div>
      )}
      {description && (
        <p className="text-sm opacity-80 leading-relaxed">{description}</p>
      )}
    </div>
  );
}

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