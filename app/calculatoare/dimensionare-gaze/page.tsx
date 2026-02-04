"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertCircle } from "lucide-react";

export default function CalculatorDimensionareGaze() {
  const [debit, setDebit] = useState<number>(10); // m³/h
  const [lungime, setLungime] = useState<number>(20); // m
  const [pierdereAdmisibila, setPierdereAdmisibila] = useState<number>(1); // mbar
  const [presiuneInitiala, setPresiuneInitiala] = useState<number>(20); // mbar

  const rezultate = useMemo(() => {
    // Formula Renouard: D = [23.9×10⁻³ × L × Q¹·⁸² / ΔPmax]^(1/4.82)
    const Q = debit; // m³/h
    const L = lungime; // m
    const dP = pierdereAdmisibila; // mbar
    
    const numarator = 23.9e-3 * L * Math.pow(Q, 1.82);
    const Dmm = Math.pow(numarator / dP, 1/4.82); // mm
    
    // Diametre standard gaze
    const diametreStd = [15, 20, 25, 32, 40, 50, 63, 75, 90, 110];
    const DN = diametreStd.find(d => d >= Dmm * 1.2) || diametreStd[diametreStd.length - 1];
    
    // Recalcul presiune finală cu DN ales
    const Di = DN * 0.9; // mm interior
    const dPReal = 23.9e-3 * L * Math.pow(Q, 1.82) / Math.pow(Di, 4.82);
    const presiuneFinala = presiuneInitiala - dPReal;
    
    // Viteză gaz
    const T = 288; // K (15°C)
    const p = (presiuneInitiala + 1013) / 1013; // bara absolută aproximativă
    const v = (4 * Q) / (3600 * Math.PI * Math.pow(Di/1000, 2)) * (288/T) * p;

    return {
      diametruTeoretic: Math.round(Dmm * 10) / 10,
      diametruNominal: DN,
      presiuneFinala: Math.round(presiuneFinala * 100) / 100,
      pierdereReala: Math.round(dPReal * 100) / 100,
      viteza: Math.round(v * 10) / 10,
      status: presiuneFinala > 18 ? "ok" : presiuneFinala > 15 ? "warning" : "error"
    };
  }, [debit, lungime, pierdereAdmisibila, presiuneInitiala]);

  return (
    <CalculatorLayout
      title="Dimensionare Conducte Gaze"
      breviarCode="B-G-003"
      description="Dimensionarea rețelelor de gaze naturale conform formulei Renouard pentru calculul pierderilor de presiune."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Debit gaze (Q)"
              value={debit}
              onChange={setDebit}
              unit="m³/h"
              min={0.1}
              max={1000}
              step={0.5}
              description="Debit orar de gaze naturale"
            />

            <InputField
              label="Lungime conductă (L)"
              value={lungime}
              onChange={setLungime}
              unit="m"
              min={1}
              max={500}
              step={1}
              description="Lungime echivalentă inclusiv fitinguri"
            />

            <InputField
              label="Pierdere admisibilă (ΔP)"
              value={pierdereAdmisibila}
              onChange={setPierdereAdmisibila}
              unit="mbar"
              min={0.1}
              max={5}
              step={0.1}
              description="Maxim 1-2 mbar pentru instalații interioare"
            />

            <InputField
              label="Presiune inițială"
              value={presiuneInitiala}
              onChange={setPresiuneInitiala}
              unit="mbar"
              min={19}
              max={500}
              step={1}
              description="Presiune la branșament"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Diametru teoretic"
              value={rezultate.diametruTeoretic}
              unit="mm"
              status="info"
              className="D = [23.9·10⁻³·L·Q¹·⁸²/ΔP]^(1/4.82)"
            />
            
            <ResultCard
              label="Diametru nominal (DN)"
              value={rezultate.diametruNominal}
              unit="mm"
              status="ok"
              description="Diametru standard ales cu rezervă 20%"
            />
            
            <ResultCard
              label="Presiune finală"
              value={rezultate.presiuneFinala}
              unit="mbar"
              status={rezultate.status}
              description={rezultate.presiuneFinala < 18 ? "Sub presiunea minimă de funcționare (18 mbar)" : "Presiune acceptabilă"}
            />
            
            <ResultCard
              label="Pierdere reală"
              value={rezultate.pierdereReala}
              unit="mbar"
              status="info"
              description={`Viteză: ${rezultate.viteza} m/s`}
            />
          </div>

          {rezultate.status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Presiune insuficientă</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Presiunea finală ({rezultate.presiuneFinala} mbar) este sub limita de funcționare a aparatelor (18 mbar).
                  Soluții: măriți DN la {rezultate.diametruNominal + 10}mm sau reduceți lungimea.
                </p>
              </div>
            </div>
          )}

          <FormulaBlock
            title="Formula Renouard (m)"
            formula="D = [23.9×10⁻³ × L × Q^1.82 / ΔP]^(1/4.82)"
            variables={[
              { symbol: "D", description: "Diametru interior", unit: "mm" },
              { symbol: "L", description: "Lungime conductă", unit: "m" },
              { symbol: "Q", description: "Debit gaze", unit: "m³/h" },
              { symbol: "ΔP", description: "Pierdere presiune admisibilă", unit: "mbar" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}