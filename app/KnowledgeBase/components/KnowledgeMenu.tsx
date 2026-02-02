"use client";

import { useState } from "react";

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  color: string;
}

const items: MenuItem[] = [
  { id: "apa", label: "Instalații Apă", icon: "💧", color: "cyan" },
  { id: "canalizare", label: "Canalizare", icon: "🔄", color: "orange" },
  { id: "termice", label: "Instalații Termice", icon: "🔥", color: "red" },
  { id: "ventilare", label: "Ventilare & Climatizare", icon: "🌬️", color: "blue" },
  { id: "electrice", label: "Instalații Electrice", icon: "⚡", color: "yellow" },
  { id: "gaze", label: "Gaze Naturale", icon: "🔶", color: "amber" },
  { id: "automatizare", label: "Automatizare (BMS)", icon: "🤖", color: "violet" },
  { id: "pasive", label: "Case Pasive & nZEB", icon: "🏠", color: "green" },
  { id: "certificare", label: "Certificare Energetică", icon: "📊", color: "emerald" },
];

interface KnowledgeMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function KnowledgeMenu({ activeSection, onSectionChange }: KnowledgeMenuProps) {
  const getColorClasses = (color: string, isActive: boolean) => {
    const colors: Record<string, { active: string; inactive: string }> = {
      cyan: { 
        active: "bg-cyan-600 border-cyan-500 text-white", 
        inactive: "border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/30" 
      },
      orange: { 
        active: "bg-orange-600 border-orange-500 text-white", 
        inactive: "border-orange-500/30 text-orange-400 hover:bg-orange-900/30" 
      },
      red: { 
        active: "bg-red-600 border-red-500 text-white", 
        inactive: "border-red-500/30 text-red-400 hover:bg-red-900/30" 
      },
      blue: { 
        active: "bg-blue-600 border-blue-500 text-white", 
        inactive: "border-blue-500/30 text-blue-400 hover:bg-blue-900/30" 
      },
      yellow: { 
        active: "bg-yellow-600 border-yellow-500 text-white", 
        inactive: "border-yellow-500/30 text-yellow-400 hover:bg-yellow-900/30" 
      },
      amber: { 
        active: "bg-amber-600 border-amber-500 text-white", 
        inactive: "border-amber-500/30 text-amber-400 hover:bg-amber-900/30" 
      },
      violet: { 
        active: "bg-violet-600 border-violet-500 text-white", 
        inactive: "border-violet-500/30 text-violet-400 hover:bg-violet-900/30" 
      },
      green: { 
        active: "bg-green-600 border-green-500 text-white", 
        inactive: "border-green-500/30 text-green-400 hover:bg-green-900/30" 
      },
      emerald: { 
        active: "bg-emerald-600 border-emerald-500 text-white", 
        inactive: "border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/30" 
      },
    };
    return isActive ? colors[color]?.active : colors[color]?.inactive;
  };

  return (
    <nav aria-label="Navigare ghiduri de proiectare">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSectionChange(item.id)}
              className={`px-4 py-2 rounded-lg border transition-all text-sm font-medium flex items-center gap-2 ${getColorClasses(item.color, isActive)}`}
              aria-pressed={isActive}
              aria-label={`${item.label} - ${isActive ? "selectat" : "click pentru a selecta"}`}
            >
              <span aria-hidden="true">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}