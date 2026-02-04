"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";

interface Consumator {
  id: number;
  nume: string;
  putere: number;
  tip: "iluminat" | "prize" | "motor" | "rezistenta";
}

export default function CalculatorPutereInstalata() {
  const [consumatori, setConsumatori] = useState<Consumator[]>([
    { id: 1, nume: "Iluminat general", putere: 500, tip: "iluminat" },
    { id: 2, nume: "Prize utilitare", putere: 2000, tip: "prize" },
    { id: 3, nume: "Boiler ACM", putere: 2000, tip: "rezistenta" },
  ]);
  const [coefSimultaneitate, setCoefSimultaneitate] = useState<number>(0.7);

  const rezultate = useMemo(() => {
    const sumaPuteri = consumatori.reduce((acc, c) => acc + c.putere, 0);
    const putereCalcul = sumaPuteri * coefSimultaneitate;
    const curent = putereCalcul / 230; // A (monofazat simplificat)
    
    // Siguranță recomandată (următorul standard)
    const valoriSigurante = [10, 16, 20, 25, 32, 40, 50, 63, 80, 100];
    const siguranta = valoriSigurante.find(s => s >= curent * 1.25) || 100;
    
    return {
      totalInstalat: sumaPuteri,
      putereCalcul: Math.round(putereCalcul),
      curentNominal: Math.round(curent * 10) / 10,
      sigurantaRecomandata: siguranta,
    };
  }, [consumatori, coefSimultaneitate]);

  const adaugaConsumator = () => {
    const id = consumatori.length + 1;
    setConsumatori([...consumatori, { id, nume: `Consumator ${id}`, putere: 1000, tip: "prize" }]);
  };

  const updateConsumator = (id: number, field: keyof Consumator, value: any) => {
    setConsumatori(consumatori.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const stergeConsumator = (id: number) => {
    setConsumatori(consumatori.filter(c => c.id !== id));
  };

  return (
    <CalculatorLayout
      title="Putere Instalată"
      breviarCode="Normativul I7"
      description="Calculul puterii instalate și a curentului de proiectare conform formulei Pt = Ks × ΣPi."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Lista consumatori</h2>
              <button
                onClick={adaugaConsumator}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm"
              >
                + Adaugă
              </button>
            </div>
            
            <div className="space-y-3">
              {consumatori.map((c) => (
                <div key={c.id} className="grid grid-cols-12 gap-2 items-center bg-gray-900/50 p-3 rounded-lg">
                  <div className="col-span-4">
                    <input
                      type="text"
                      value={c.nume}
                      onChange={(e) => updateConsumator(c.id, "nume", e.target.value)}
                      className="w-full bg-transparent border-b border-gray-700 text-sm px-1 py-1"
                    />
                  </div>
                  <div className="col-span-3">
                    <select
                      value={c.tip}
                      onChange={(e) => updateConsumator(c.id, "tip", e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs"
                    >
                      <option value="iluminat">Iluminat</option>
                      <option value="prize">Prize</option>
                      <option value="motor">Motor</option>
                      <option value="rezistenta">Rezistență</option>
                    </select>
                  </div>
                  <div className="col-span-3">
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        value={c.putere}
                        onChange={(e) => updateConsumator(c.id, "putere", Number(e.target.value))}
                        className="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-right"
                      />
                      <span className="text-xs text-gray-500">W</span>
                    </div>
                  </div>
                  <div className="col-span-2 text-right">
                    <button
                      onClick={() => stergeConsumator(c.id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Șterge
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between text-sm">
              <span className="text-gray-400">Total consumatori: {consumatori.length}</span>
              <span className="text-white font-semibold">
                Total: {rezultate.totalInstalat} W
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Coeficient simultaneitate (Ks)"
              value={coefSimultaneitate}
              onChange={setCoefSimultaneitate}
              min={0.1}
              max={1.0}
              step={0.05}
              description="0.7 locuințe, 0.9 birouri, 1.0 industriale"
            />

            <div className="space-y-4 pt-4 border-t border-gray-700">
              <ResultCard
                label="Putere instalată"
                value={rezultate.totalInstalat}
                unit="W"
                status="info"
              />
              
              <ResultCard
                label="Putere de calcul"
                value={rezultate.putereCalcul}
                unit="W"
                status="ok"
                formula="Pc = Ks × ΣPi"
                description="Putere pentru dimensionare"
              />
              
              <ResultCard
                label="Curent nominal"
                value={rezultate.curentNominal}
                unit="A"
                status="ok"
              />
              
              <ResultCard
                label="Siguranță recomandată"
                value={rezultate.sigurantaRecomandata}
                unit="A"
                status="ok"
                description="Inclusiv rezervă 25%"
              />
            </div>
          </div>

          <FormulaBlock
            title="Formule electrice"
            formula="Pt = Ks × ΣPi  |  I = Pt / (Un × cosφ)"
            variables={[
              { symbol: "Pt", description: "Putere totală calcul", unit: "W" },
              { symbol: "Ks", description: "Coeficient simultaneitate", unit: "-" },
              { symbol: "Pi", description: "Putere individuală", unit: "W" },
              { symbol: "I", description: "Curent nominal", unit: "A" },
              { symbol: "Un", description: "Tensiune nominală", unit: "V" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}