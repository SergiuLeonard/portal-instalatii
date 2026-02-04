"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";

export default function CalculatorIluminat() {
  const [suprafata, setSuprafata] = useState<number>(50); // m²
  const [luxNecesar, setLuxNecesar] = useState<number>(300); // lx
  const [fluxLampa, setFluxLampa] = useState<number>(2000); // lm (LED 20W ≈ 2000lm)
  const [utilizare, setUtilizare] = useState<number>(0.7); // coeficient utilizare
  const [factorMentinere, setFactorMentinere] = useState<number>(0.8); // MF
  const [inaltime, setInaltime] = useState<number>(2.5); // m

  const rezultate = useMemo(() => {
    // E = (Φ × N × U × MF) / A => N = (E × A) / (Φ × U × MF)
    const N = (luxNecesar * suprafata) / (fluxLampa * utilizare * factorMentinere);
    const numarCorpuri = Math.ceil(N);
    
    const putereTotala = numarCorpuri * (fluxLampa / 100); // aproximare 100lm/W pentru LED
    
    // Distribuție optimă
    const raport = Math.sqrt(suprafata / numarCorpuri);
    
    return {
      numarCorpuri,
      putereTotala: Math.round(putereTotala),
      fluxTotal: Math.round(numarCorpuri * fluxLampa),
      distantaOptima: Math.round(raport * 10) / 10,
      putereSpecifica: Math.round(putereTotala / suprafata),
    };
  }, [suprafata, luxNecesar, fluxLampa, utilizare, factorMentinere]);

  const preseturiLux = [
    { nume: "Depozit", val: 150 },
    { nume: "Birou", val: 500 },
    { nume: "Clasă", val: 300 },
    { nume: "Laborator", val: 750 },
    { nume: "Casă", val: 150 },
  ];

  return (
    <CalculatorLayout
      title="Calculator Iluminat"
      breviarCode="Normativul I7"
      description="Calculul numărului de corpuri de iluminat conform formulei E = (Φ × N × U × MF) / A."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preseturi activități
              </label>
              <div className="flex flex-wrap gap-2">
                {preseturiLux.map((p) => (
                  <button
                    key={p.nume}
                    onClick={() => setLuxNecesar(p.val)}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs"
                  >
                    {p.nume} ({p.val}lx)
                  </button>
                ))}
              </div>
            </div>

            <InputField
              label="Suprafață"
              value={suprafata}
              onChange={setSuprafata}
              unit="m²"
              min={5}
              max={1000}
              step={5}
            />

            <InputField
              label="Iluminament necesar (E)"
              value={luxNecesar}
              onChange={setLuxNecesar}
              unit="lux"
              min={50}
              max={1000}
              step={50}
              description="Conform I7 pentru tipul de activitate"
            />

            <InputField
              label="Flux luminos per corp (Φ)"
              value={fluxLampa}
              onChange={setFluxLampa}
              unit="lm"
              min={500}
              max={10000}
              step={500}
              description="LED: 100lm/W, fluorescent: 80lm/W"
            />

            <InputField
              label="Coeficient utilizare (U)"
              value={utilizare}
              onChange={setUtilizare}
              min={0.3}
              max={0.9}
              step={0.05}
              description="0.5-0.7 pentru tavan alb, pereți deschiși"
            />

            <InputField
              label="Factor menținere (MF)"
              value={factorMentinere}
              onChange={setFactorMentinere}
              min={0.6}
              max={0.9}
              step={0.05}
              description="0.8 curat, 0.6 praf/agresiv"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Număr corpuri necesar"
              value={rezultate.numarCorpuri}
              unit="buc"
              status="ok"
              className="N = (E×A)/(Φ×U×MF)"
            />
            
            <ResultCard
              label="Putere instalată"
              value={rezultate.putereTotala}
              unit="W"
              status="ok"
              description="Total consum energetic"
            />
            
            <ResultCard
              label="Flux total"
              value={rezultate.fluxTotal}
              unit="lm"
              status="info"
            />
            
            <ResultCard
              label="Distanță optimă"
              value={rezultate.distantaOptima}
              unit="m"
              status="info"
              description="Distanță între corpuri"
            />
            
            <ResultCard
              label="Putere specifică"
              value={rezultate.putereSpecifica}
              unit="W/m²"
              status={rezultate.putereSpecifica > 20 ? "warning" : "ok"}
              className="md:col-span-2"
              description="Standard: 10-15 W/m² LED"
            />
          </div>

          <FormulaBlock
            title="Formula iluminat"
            formula="E = (Φ × N × U × MF) / A"
            variables={[
              { symbol: "E", description: "Iluminament mediu", unit: "lux" },
              { symbol: "Φ", description: "Flux luminos per corp", unit: "lm" },
              { symbol: "N", description: "Număr corpuri", unit: "-" },
              { symbol: "U", description: "Coeficient utilizare", unit: "-" },
              { symbol: "MF", description: "Factor menținere", unit: "-" },
              { symbol: "A", description: "Suprafață", unit: "m²" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}