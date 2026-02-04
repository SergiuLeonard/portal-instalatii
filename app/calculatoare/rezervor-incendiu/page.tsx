"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";

type ClasaPericol = "usor" | "mediu" | "ridicat";

export default function CalculatorRezervorIncendiu() {
  const [suprafata, setSuprafata] = useState<number>(1000); // m²
  const [clasaPericol, setClasaPericol] = useState<ClasaPericol>("mediu");
  const [durata, setDurata] = useState<number>(60); // minute

  const rezultate = useMemo(() => {
    // Debit specific conform SR EN 12845 / NP 086
    const debiteSpecifice: Record<ClasaPericol, number> = {
      usor: 2.25, // mm/min = l/min/m²
      mediu: 5.0,
      ridicat: 10.0,
    };
    
    const q = debiteSpecifice[clasaPericol]; // l/min/m²
    const Q = q * suprafata; // l/min debit total
    
    // Volum necesar
    const V = (Q * durata) / 1000; // m³
    
    // Dimensiuni rezervor cilindric vertical
    // H = 2D (raport optim)
    // V = πD²H/4 = πD³/2 => D = (2V/π)^(1/3)
    const D = Math.pow((2 * V) / Math.PI, 1/3);
    const H = 2 * D;
    
    return {
      debitStingere: Math.round(Q),
      volumNecesar: Math.round(V * 10) / 10,
      diametruRezervor: Math.round(D * 10) / 10,
      inaltimeRezervor: Math.round(H * 10) / 10,
      suprafataOcupata: Math.round((Math.PI * D * D / 4) * 10) / 10,
    };
  }, [suprafata, clasaPericol, durata]);

  return (
    <CalculatorLayout
      title="Rezervor Incendiu"
      breviarCode="SR EN 12845"
      description="Dimensionarea rezervorului de apă pentru stingerea incendiilor conform SR EN 12845."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Suprafață pericol"
              value={suprafata}
              onChange={setSuprafata}
              unit="m²"
              min={50}
              max={100000}
              step={50}
            />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Clasa de pericol
              </label>
              <select
                value={clasaPericol}
                onChange={(e) => setClasaPericol(e.target.value as ClasaPericol)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="usor">Ușor (hale, birouri) - 2.25 mm/min</option>
                <option value="mediu">Mediu (industrie ușoară) - 5 mm/min</option>
                <option value="ridicat">Ridicat (industrie grea) - 10 mm/min</option>
              </select>
            </div>

            <InputField
              label="Durată stingere"
              value={durata}
              onChange={setDurata}
              unit="min"
              min={30}
              max={180}
              step={15}
              description="60 min standard, 90-120 pericol ridicat"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Debit stingere necesar"
              value={rezultate.debitStingere}
              unit="l/min"
              status="ok"
              formula="Q = q × S"
              description="Debit total pentru sprinklere/hidranti"
            />
            
            <ResultCard
              label="Volum rezervor"
              value={rezultate.volumNecesar}
              unit="m³"
              status="ok"
              formula="V = Q × t / 1000"
              description="Volum apă necesar"
            />
            
            <ResultCard
              label="Diametru rezervor"
              value={rezultate.diametruRezervor}
              unit="m"
              status="info"
              description="Presupus cilindric vertical"
            />
            
            <ResultCard
              label="Înălțime rezervor"
              value={rezultate.inaltimeRezervor}
              unit="m"
              status="info"
              description="Raport H/D = 2"
            />
            
            <ResultCard
              label="Amprenta la sol"
              value={rezultate.suprafataOcupata}
              unit="m²"
              status="info"
              className="md:col-span-2"
            />
          </div>

          <FormulaBlock
            title="Formule SR EN 12845"
            formula="V = (q × S × t) / 1000"
            variables={[
              { symbol: "q", description: "Debit specific (2.25-10 mm/min)", unit: "l/min/m²" },
              { symbol: "S", description: "Suprafață pericol", unit: "m²" },
              { symbol: "t", description: "Durată stingere", unit: "min" },
              { symbol: "V", description: "Volum rezervor", unit: "m³" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}