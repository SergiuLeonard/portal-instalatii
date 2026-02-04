"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { AlertCircle } from "lucide-react";

export default function CalculatorPierderiGaze() {
  const [debit, setDebit] = useState<number>(2); // m³/h
  const [lungime, setLungime] = useState<number>(20); // m
  const [diametru, setDiametru] = useState<number>(20); // mm
  const [presiuneLucru, setPresiuneLucru] = useState<number>(20); // mbar
  const [densitateGaz, setDensitateGaz] = useState<number>(0.62); // densitate relativă aer
  const [temperatura, setTemperatura] = useState<number>(15); // °C

  const rezultate = useMemo(() => {
    // Formula Renouard pentru gaze
    // Pentru presiuni mici (<100 mbar): 
    // ΔP = 23.9 × 10⁻³ × L × Q¹·⁸² / D⁴·⁸² × (d/0.6) × (273/(273+t))
    
    const Q = debit;
    const L = lungime;
    const D = diametru; // mm
    const dr = densitateGaz; // relativă față de aer=1
    const t = temperatura;
    
    // Factor de corecție pentru temperatură și densitate
    const ft = 273 / (273 + t);
    const fd = dr / 0.6; // 0.6 = densitatea standard de referință
    
    // Formula Renouard (varianta simplificată pentru presiuni mici)
    const deltaP = 23.9e-3 * L * Math.pow(Q, 1.82) / Math.pow(D, 4.82) * fd * ft;
    
    // Presiune la capătul conductei
    const presiuneFinala = presiuneLucru - deltaP;
    
    // Verificare viteză (simplificat): v = 354 × Q / (D² × Pm)
    // Pm = presiune medie [bara], aproximăm cu cea inițială
    const Pm = (presiuneLucru + 1013) / 1013; // convertim mbar în bara absolute aproximativ
    const viteza = 354 * Q / (Math.pow(D, 2) * Pm);
    
    // Debit maxim admisibil pentru diametru (recomandare)
    // Qmax ≈ 0.6 × D² (empiric pentru gaze la presiune joasă)
    const QmaxRecomandat = 0.6 * Math.pow(D/10, 2); // m³/h aproximativ

    return {
      deltaP: Math.round(deltaP * 100) / 100,
      presiuneFinala: Math.round(presiuneFinala * 100) / 100,
      viteza: Math.round(viteza * 10) / 10,
      QmaxRecomandat: Math.round(QmaxRecomandat * 10) / 10,
      procentPierdere: Math.round((deltaP / presiuneLucru) * 100),
    };
  }, [debit, lungime, diametru, presiuneLucru, densitateGaz, temperatura]);

  return (
    <CalculatorLayout
      title="Calculator Pierderi Presiune Gaze"
      breviarCode="BG-02"
      description="Calculul căderii de presiune în conductele de gaze naturale conform formulei Renouard pentru presiuni joase (p < 100 mbar)."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <h2 className="text-lg font-semibold">Date de Intrare</h2>
            
            <InputField
              label="Debit de gaze (Q)"
              value={debit}
              onChange={setDebit}
              unit="m³/h"
              min={0.1}
              max={100}
              step={0.5}
            />

            <InputField
              label="Lungime conductă (L)"
              value={lungime}
              onChange={setLungime}
              unit="m"
              min={1}
              max={200}
              step={1}
              description="Lungimea reală × 1.2 (coeficient de majorare pentru locuri)"
            />

            <InputField
              label="Diametru interior (D)"
              value={diametru}
              onChange={setDiametru}
              unit="mm"
              min={10}
              max={200}
              step={5}
            />

            <InputField
              label="Presiune de lucru"
              value={presiuneLucru}
              onChange={setPresiuneLucru}
              unit="mbar"
              min={15}
              max={100}
              step={5}
              description="Presiune la începutul tronsonului"
            />

            <div className="pt-4 border-t border-gray-700">
              <InputField
                label="Densitate relativă gaz"
                value={densitateGaz}
                onChange={setDensitateGaz}
                min={0.5}
                max={2}
                step={0.01}
                description="Gaz natural ≈ 0.6-0.7, Aer=1, Propă=1.5"
              />
              <InputField
                label="Temperatură medie"
                value={temperatura}
                onChange={setTemperatura}
                unit="°C"
                min={-10}
                max={40}
                step={5}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Pierdere de Presiune"
              value={rezultate.deltaP}
              unit="mbar"
              status={rezultate.procentPierdere > 20 ? "error" : rezultate.procentPierdere > 10 ? "warning" : "ok"}
              formula={`ΔP = 23.9×10⁻³ × ${lungime} × ${debit}^1.82 / ${diametru}^4.82`}
              description={`${rezultate.procentPierdere}% din presiunea inițială`}
            />

            <ResultCard
              label="Presiune la Consumator"
              value={rezultate.presiuneFinala}
              unit="mbar"
              status={rezultate.presiuneFinala < 18 ? "error" : rezultate.presiuneFinala < 19 ? "warning" : "ok"}
              description="Presiune minimă necesară: 18-19 mbar (gaz natural)"
            />

            <ResultCard
              label="Viteză de Curgere"
              value={rezultate.viteza}
              unit="m/s"
              status={rezultate.viteza > 20 ? "error" : rezultate.viteza > 15 ? "warning" : "ok"}
              description="Limită uzuală: 15-20 m/s pentru instalații interioare"
            />

            <ResultCard
              label="Debit Max. Recomandat"
              value={rezultate.QmaxRecomandat}
              unit="m³/h"
              status={debit > rezultate.QmaxRecomandat ? "error" : "ok"}
              description={`Pentru DN${diametru} la presiune joasă`}
            />
          </div>

          {rezultate.presiuneFinala < 18 && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Presiune insuficientă</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Presiunea finală ({rezultate.presiuneFinala} mbar) este sub limita de funcționare a arzătoarelor (18-19 mbar).
                  Soluții: măriți diametrul conductei, scurtați lungimea sau creșteți presiunea de alimentare.
                </p>
              </div>
            </div>
          )}

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="font-semibold mb-4">Formula Renouard (Presiuni Joase)</h3>
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-lg font-mono text-sm">
                <div className="text-blue-400 mb-2">ΔP [mbar] = 23.9 × 10⁻³ × L × Q¹·⁸² / D⁴·⁸² × (dᵣ/0.6) × (273/(273+t))</div>
                <div className="text-gray-500 text-xs mt-2">
                  Validă pentru presiuni p {'<'} 100 mbar și conducte din oțel/PE
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">dᵣ = {densitateGaz}</div>
                  <div className="text-gray-500 text-xs">Densitate relativă gaz față de aer</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">t = {temperatura}°C</div>
                  <div className="text-gray-500 text-xs">Temperatura de funcționare</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="font-semibold mb-4">Verificări Normativ I5</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                <span>Pierdere totală admisibilă (de la contor la aparat)</span>
                <span className="text-emerald-400">≤ 2.5 mbar</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                <span>Viteză maximă în instalații interioare</span>
                <span className="text-emerald-400">≤ 20 m/s</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                <span>Presiune minimă la arzător</span>
                <span className="text-emerald-400">≥ 18 mbar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}