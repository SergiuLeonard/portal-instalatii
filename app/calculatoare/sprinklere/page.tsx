"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";

export default function CalculatorSprinklere() {
  const [suprafata, setSuprafata] = useState<number>(500); // m²
  const [pericol, setPericol] = useState<string>("mediu");
  const [presiune, setPresiune] = useState<number>(2); // bar
  const [K, setK] = useState<number>(80); // factor sprinkler standard

  const rezultate = useMemo(() => {
    // Q = K × √P
    const Qsprinkler = K * Math.sqrt(presiune); // l/min
    const debitLs = Qsprinkler / 60; // l/s
    
    // Suprafață acoperire per sprinkler funcție de pericol
    const acoperire: Record<string, number> = {
      usor: 21, // m² per sprinkler
      mediu: 12,
      ridicat: 9,
    };
    
    const suprafataPerSprinkler = acoperire[pericol] || 12;
    const numarSprinklere = Math.ceil(suprafata / suprafataPerSprinkler);
    const debitTotal = numarSprinklere * Qsprinkler;
    
    return {
      debitPerSprinkler: Math.round(Qsprinkler),
      debitPerSprinklerLs: Math.round(debitLs * 100) / 100,
      numarSprinklere,
      debitTotal: Math.round(debitTotal),
      suprafataAcoperire: suprafataPerSprinkler,
      razaAcoperire: Math.round(Math.sqrt(suprafataPerSprinkler / Math.PI) * 10) / 10,
    };
  }, [suprafata, pericol, presiune, K]);

  return (
    <CalculatorLayout
      title="Calculator Sprinklere"
      breviarCode="SR EN 12845"
      description="Dimensionarea instalației de sprinklere conform formulei Q = K × √P."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Suprafață protejată"
              value={suprafata}
              onChange={setSuprafata}
              unit="m²"
              min={50}
              max={10000}
              step={50}
            />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Risc pericol
              </label>
              <select
                value={pericol}
                onChange={(e) => setPericol(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="usor">Ușor (21 m²/sprinkler)</option>
                <option value="mediu">Mediu (12 m²/sprinkler)</option>
                <option value="ridicat">Ridicat (9 m²/sprinkler)</option>
              </select>
            </div>

            <InputField
              label="Presiune de lucru (P)"
              value={presiune}
              onChange={setPresiune}
              unit="bar"
              min={0.5}
              max={10}
              step={0.1}
              description="1.5-2 bar tipic, max 12 bar"
            />

            <InputField
              label="Factor K"
              value={K}
              onChange={setK}
              unit="-"
              min={50}
              max={200}
              step={5}
              description="80 standard, 115 rapid, 200 industrial"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Debit per sprinkler"
              value={rezultate.debitPerSprinkler}
              unit="l/min"
              status="ok"
              formula="Q = K × √P"
              description={`${rezultate.debitPerSprinklerLs} l/s`}
            />
            
            <ResultCard
              label="Număr sprinklere necesar"
              value={rezultate.numarSprinklere}
              unit="buc"
              status="ok"
              description={`${rezultate.suprafataAcoperire} m² per sprinkler`}
            />
            
            <ResultCard
              label="Debit total instalație"
              value={rezultate.debitTotal}
              unit="l/min"
              status="ok"
              description="Debit de proiectare"
              className="md:col-span-2"
            />
            
            <ResultCard
              label="Rază acoperire"
              value={rezultate.razaAcoperire}
              unit="m"
              status="info"
              description="Raza de acțiune per sprinkler"
            />
          </div>

          <FormulaBlock
            title="Formula debit sprinkler"
            formula="Q = K × √P"
            variables={[
              { symbol: "Q", description: "Debit sprinkler", unit: "l/min" },
              { symbol: "K", description: "Factor descărcare", unit: "-" },
              { symbol: "P", description: "Presiune la sprinkler", unit: "bar" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}