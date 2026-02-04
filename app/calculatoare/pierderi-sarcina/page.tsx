"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertCircle } from "lucide-react";

type MetodaCalcul = "darcy" | "hazen-williams";

export default function CalculatorPierderiSarcina() {
  const [metoda, setMetoda] = useState<MetodaCalcul>("darcy");
  const [debit, setDebit] = useState<number>(0.5); // l/s
  const [diametru, setDiametru] = useState<number>(20); // mm
  const [lungime, setLungime] = useState<number>(50); // m
  const [rugozitate, setRugozitate] = useState<number>(0.05); // mm (pentru Darcy)
  const [CHW, setCHW] = useState<number>(120); // coeficient Hazen-Williams (PVC)
  const [tempApa, setTempApa] = useState<number>(10); // °C

  const rezultate = useMemo(() => {
    const d = diametru / 1000; // convertim în m
    const A = (Math.PI * d * d) / 4; // aria m²
    const v = (debit / 1000) / A; // viteza m/s
    const g = 9.81;
    
    let Re: number;
    let lambda: number;
    let hf: number; // pierdere sarcină în mCA
    let presiunePa: number;
    
    // Viscozitate cinematică funcție de temperatură (aproximare)
    const nu = 1.79e-6 * Math.pow(1.03, -(tempApa - 10)); // m²/s
    
    if (metoda === "darcy") {
      // Număr Reynolds
      Re = (v * d) / nu;
      
      // Rugozitate relativă
      const epsilon = (rugozitate / 1000) / d;
      
      // Formula Colebrook-White (aproximare Swamee-Jain)
      if (Re > 2300) {
        lambda = 0.25 / Math.pow(Math.log10(epsilon/3.7 + 5.74/Math.pow(Re, 0.9)), 2);
      } else {
        lambda = 64 / Re; // Regim laminar
      }
      
      // Formula Darcy-Weisbach
      hf = lambda * (lungime / d) * (v * v) / (2 * g);
      
    } else {
      // Hazen-Williams: hf = 10.67 * L * (Q^1.852) / (C^1.852 * D^4.87)
      // Q în m³/s, D în m, L în m, hf în m
      const Q = debit / 1000;
      hf = 10.67 * lungime * Math.pow(Q, 1.852) / (Math.pow(CHW, 1.852) * Math.pow(d, 4.87));
      
      // Calculăm lambda echivalent pentru afișare
      lambda = (hf * d * 2 * g) / (lungime * v * v);
      Re = 0; // Nu se folosește în HW
    }
    
    presiunePa = hf * 1000 * g; // Pa (aproximativ, ρ = 1000 kg/m³)
    const presiuneBar = presiunePa / 100000;
    
    return {
      viteza: Math.round(v * 100) / 100,
      reynolds: Math.round(Re),
      lambda: Math.round(lambda * 10000) / 10000,
      hf: Math.round(hf * 100) / 100,
      presiuneBar: Math.round(presiuneBar * 1000) / 1000,
      presiunePa: Math.round(presiunePa),
      regim: Re > 4000 ? "Turbulent" : Re > 2300 ? "Transiție" : "Laminar",
    };
  }, [debit, diametru, lungime, rugozitate, CHW, tempApa, metoda]);

  const getStatusViteza = (v: number) => {
    if (v > 3) return "error";
    if (v > 2) return "warning";
    if (v < 0.5) return "warning";
    return "ok";
  };

  return (
    <CalculatorLayout
      title="Calculator Pierderi de Sarcină"
      breviarCode="BS-02"
      description="Calculul căderii de presiune în conducte prin formula Darcy-Weisbach sau Hazen-Williams pentru instalații de apă."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Inputuri */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-4">Metodă de Calcul</h2>
            <div className="space-y-3">
              <button
                onClick={() => setMetoda("darcy")}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  metoda === "darcy"
                    ? "bg-blue-600/20 border-blue-500 text-blue-400"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600"
                }`}
              >
                <div className="font-medium">Darcy-Weisbach</div>
                <div className="text-xs opacity-70 mt-1">
                  Precis, consideră rugozitate și regim de curgere
                </div>
              </button>
              <button
                onClick={() => setMetoda("hazen-williams")}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  metoda === "hazen-williams"
                    ? "bg-blue-600/20 border-blue-500 text-blue-400"
                    : "bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600"
                }`}
              >
                <div className="font-medium">Hazen-Williams</div>
                <div className="text-xs opacity-70 mt-1">
                  Empiric, doar pentru apă și regim turbulent
                </div>
              </button>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <h2 className="text-lg font-semibold">Date Conductă</h2>
            
            <InputField
              label="Debit (Q)"
              value={debit}
              onChange={setDebit}
              unit="l/s"
              min={0.1}
              max={50}
              step={0.1}
            />

            <InputField
              label="Diametru interior (D)"
              value={diametru}
              onChange={setDiametru}
              unit="mm"
              min={10}
              max={500}
              step={5}
            />

            <InputField
              label="Lungime conductă (L)"
              value={lungime}
              onChange={setLungime}
              unit="m"
              min={1}
              max={1000}
              step={5}
            />

            <InputField
              label="Temperatură apă"
              value={tempApa}
              onChange={setTempApa}
              unit="°C"
              min={1}
              max={100}
              step={5}
            />

            {metoda === "darcy" ? (
              <InputField
                label="Rugozitate absolută (ε)"
                value={rugozitate}
                onChange={setRugozitate}
                unit="mm"
                min={0.001}
                max={10}
                step={0.01}
                description="0.001-0.01 PVC/PE, 0.05 oțel, 0.1-1 fontă"
              />
            ) : (
              <InputField
                label="Coef. Hazen-Williams (C)"
                value={CHW}
                onChange={setCHW}
                min={80}
                max={150}
                step={5}
                description="140-150 PVC/PE, 120 oțel, 100 fontă, 90-100 beton"
              />
            )}
          </div>
        </div>

        {/* Rezultate */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Viteza de curgere"
              value={rezultate.viteza}
              unit="m/s"
              status={getStatusViteza(rezultate.viteza)}
              formula="v = 4Q/(π·D²)"
              description={rezultate.viteza > 3 ? "Viteza prea mare, risc de zgomot și eroziune" : rezultate.viteza < 0.5 ? "Viteza prea mică, risc de depuneri" : "Viteză optimă"}
            />

            <ResultCard
              label="Pierdere de sarcină"
              value={rezultate.hf}
              unit="mCA"
              status={rezultate.hf > 50 ? "error" : rezultate.hf > 20 ? "warning" : "ok"}
              formula={metoda === "darcy" ? "hf = λ·(L/D)·(v²/2g)" : "hf = 10.67·L·Q^1.852/(C^1.852·D^4.87)"}
              description="Înălțime coloană de apă echivalentă"
            />

            <ResultCard
              label="Pierdere de presiune"
              value={rezultate.presiuneBar}
              unit="bar"
              status="info"
              formula={`Δp = ${rezultate.hf} × ρ × g`}
            />

            {metoda === "darcy" && (
              <>
                <ResultCard
                  label="Număr Reynolds"
                  value={rezultate.reynolds.toLocaleString()}
                  status={rezultate.reynolds > 4000 ? "ok" : "warning"}
                  description={`Regim: ${rezultate.regim}`}
                />
                <ResultCard
                  label="Coef. frecare (λ)"
                  value={rezultate.lambda}
                  status="info"
                />
              </>
            )}
          </div>

          {rezultate.viteza > 3 && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Atenție - Viteza excesivă</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Viteza de {rezultate.viteza} m/s depășește limita recomandată de 2-3 m/s pentru instalații interioare. 
                  Măriți diametrul conductei sau reduceți debitul.
                </p>
              </div>
            </div>
          )}

          <FormulaBlock
            title={metoda === "darcy" ? "Formula Darcy-Weisbach" : "Formula Hazen-Williams"}
            formula={
              metoda === "darcy"
                ? "hf = λ × (L/D) × (v²/2g)"
                : "hf = 10.67 × L × Q^1.852 / (C^1.852 × D^4.87)"
            }
            variables={
              metoda === "darcy"
                ? [
                    { symbol: "hf", description: "Pierdere de sarcină", unit: "m" },
                    { symbol: "λ", description: "Coeficient de frecare Darcy", unit: "-" },
                    { symbol: "L", description: "Lungime conductă", unit: "m" },
                    { symbol: "D", description: "Diametru interior", unit: "m" },
                    { symbol: "v", description: "Viteza medie", unit: "m/s" },
                    { symbol: "g", description: "Accelerație gravitațională", unit: "m/s²" },
                    { symbol: "Re", description: "Număr Reynolds", unit: "-" },
                  ]
                : [
                    { symbol: "hf", description: "Pierdere de sarcină", unit: "m" },
                    { symbol: "L", description: "Lungime conductă", unit: "m" },
                    { symbol: "Q", description: "Debit", unit: "m³/s" },
                    { symbol: "C", description: "Coef. rugozitate HW", unit: "-" },
                    { symbol: "D", description: "Diametru interior", unit: "m" },
                  ]
            }
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}