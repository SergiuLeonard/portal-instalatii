"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertCircle } from "lucide-react";

type MaterialConducta = "otel" | "pvc" | "pehd" | "ppr" | "fonta";

export default function CalculatorDimensionareConducteSanitare() {
  const [debit, setDebit] = useState<number>(0.5); // l/s
  const [vitezaMin, setVitezaMin] = useState<number>(0.9); // m/s
  const [vitezaMax, setVitezaMax] = useState<number>(2.5); // m/s
  const [material, setMaterial] = useState<MaterialConducta>("pehd");

  const materialeInfo = {
    otel: { nume: "Oțel", rugozitate: 0.05, vitezaRec: "1.0-2.0" },
    pvc: { nume: "PVC", rugozitate: 0.01, vitezaRec: "0.9-2.0" },
    pehd: { nume: "PEHD", rugozitate: 0.007, vitezaRec: "0.9-2.5" },
    ppr: { nume: "PPR", rugozitate: 0.01, vitezaRec: "0.9-2.0" },
    fonta: { nume: "Fontă", rugozitate: 0.25, vitezaRec: "1.0-2.0" },
  };

  const rezultate = useMemo(() => {
    const Q = debit / 1000; // m³/s
    const vEcon = (vitezaMin + vitezaMax) / 2; // viteza economică medie
    
    // Diametru teoretic: D = √(4Q/πv)
    const Dteoretic = Math.sqrt((4 * Q) / (Math.PI * vEcon)) * 1000; // mm
    
    // Diametre standard
    const diametreStandard = [10, 15, 20, 25, 32, 40, 50, 63, 75, 90, 110];
    const DN = diametreStandard.find(d => d >= Dteoretic * 1.1) || diametreStandard[diametreStandard.length - 1];
    
    // Viteza reală în DN selectat (presupunem Di ≈ DN pentru simplificare)
    const Di = DN * 0.9; // diametru interior aproximativ (mm)
    const vReal = (4 * Q) / (Math.PI * Math.pow(Di/1000, 2));
    
    // Pierdere de sarcină pe metru (Darcy-Weisbach simplificat)
    const lambda = 0.02; // coeficient aproximativ
    const i = lambda * Math.pow(vReal, 2) / (2 * 9.81 * (Di/1000)); // m/m
    const iMm = i * 1000; // mm/m
    
    return {
      diametruTeoretic: Math.round(Dteoretic),
      diametruNominal: DN,
      vitezaReala: Math.round(vReal * 100) / 100,
      pierdereSarcina: Math.round(iMm * 100) / 100,
      recomandare: vReal >= 0.5 && vReal <= 3 ? "optim" : vReal < 0.5 ? "subdimensionat" : "supradimensionat"
    };
  }, [debit, vitezaMin, vitezaMax, material]);

  return (
    <CalculatorLayout
      title="Dimensionare Conducte Sanitare"
      breviarCode="B-S-003"
      description="Calculul diametrului conductelor de apă rece și caldă conform formulei D = √(4Q/πv) și verificarea vitezelor economice."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <h2 className="text-lg font-semibold">Date de Intrare</h2>
            
            <InputField
              label="Debit de calcul (Q)"
              value={debit}
              onChange={setDebit}
              unit="l/s"
              min={0.1}
              max={50}
              step={0.1}
              description="Debitul de proiectare qc"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Viteză minimă"
                value={vitezaMin}
                onChange={setVitezaMin}
                unit="m/s"
                min={0.1}
                max={1.5}
                step={0.1}
              />
              <InputField
                label="Viteză maximă"
                value={vitezaMax}
                onChange={setVitezaMax}
                unit="m/s"
                min={1.0}
                max={3.0}
                step={0.1}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Material conductă
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value as MaterialConducta)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              >
                {Object.entries(materialeInfo).map(([key, info]) => (
                  <option key={key} value={key}>
                    {info.nume} (v: {info.vitezaRec} m/s)
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Rugozitate: {materialeInfo[material].rugozitate} mm
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Diametru teoretic"
              value={rezultate.diametruTeoretic}
              unit="mm"
              status="info"
              className="D = √(4Q/πv)"
            />
            
            <ResultCard
              label="Diametru nominal (DN)"
              value={rezultate.diametruNominal}
              unit="mm"
              status={rezultate.recomandare === "optim" ? "ok" : "warning"}
              description="Diametru standardizat ales"
            />
            
            <ResultCard
              label="Viteză reală"
              value={rezultate.vitezaReala}
              unit="m/s"
              status={rezultate.vitezaReala > 2.5 ? "error" : rezultate.vitezaReala < 0.9 ? "warning" : "ok"}
              className="v = 4Q/(π·D²)"
              description={rezultate.vitezaReala > 2.5 ? "Viteză prea mare - risc de zgomot" : rezultate.vitezaReala < 0.5 ? "Viteză prea mică - risc de depuneri" : "Viteză optimă"}
            />
            
            <ResultCard
              label="Pierdere de sarcină"
              value={rezultate.pierdereSarcina}
              unit="mm/m"
              status="info"
              description="Panta hidraulică aproximativă"
            />
          </div>

          {rezultate.vitezaReala > 2.5 && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Atenție - Viteză excesivă</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Viteza de {rezultate.vitezaReala} m/s depășește 2.5 m/s. 
                  Recomandat: măriți la DN{rezultate.diametruNominal + 10} sau reducți debitul.
                </p>
              </div>
            </div>
          )}

          <FormulaBlock
            title="Formula de dimensionare"
            formula="D = √(4 × Q / (π × v))"
            variables={[
              { symbol: "D", description: "Diametru interior", unit: "m" },
              { symbol: "Q", description: "Debit volumic", unit: "m³/s" },
              { symbol: "v", description: "Viteză economică", unit: "m/s" },
              { symbol: "π", description: "3.14159", unit: "-" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}