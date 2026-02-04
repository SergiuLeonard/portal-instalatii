"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";

export default function CalculatorSarcinaRacire() {
  const [suprafata, setSuprafata] = useState<number>(100); // m²
  const [coefTransfer, setCoefTransfer] = useState<number>(35); // W/m²K
  const [deltaT, setDeltaT] = useState<number>(8); // °C (diferenta intre interior si exterior)
  const [orientare, setOrientare] = useState<string>("sud");
  const [gradIzolare, setGradIzolare] = useState<string>("mediu");

  const rezultate = useMemo(() => {
    // Qtransmisie = S × U × Δt
    // unde U este coeficientul global de transfer termic (inversul lui R)
    const U = coefTransfer / 100; // W/m²K (convertit din valoare tipica perete)
    
    // Corecție orientare
    const coefOrientare: Record<string, number> = {
      nord: 1.1, est: 1.15, sud: 0.9, vest: 1.05
    };
    
    // Corecție încărcare solară funcție de orientare și sezon
    const Qsolar = orientare === "sud" ? 15 * suprafata : 
                   orientare === "vest" ? 20 * suprafata : 
                   orientare === "est" ? 18 * suprafata : 10 * suprafata; // W
    
    const Qtransmisie = suprafata * U * deltaT * (coefOrientare[orientare] || 1);
    const Qintern = suprafata * 10; // W/m² (ocupanți + echipamente)
    const Qventilatie = suprafata * 1.2 * deltaT * 0.34; // 0.34 = ρ×c, 1.2 = schimb aer
    
    const Qtotal = Qtransmisie + Qsolar + Qintern + Qventilatie;
    
    // 1 TR (Tonă de Refrigerație) = 3516 W
    const TR = Qtotal / 3516;
    
    return {
      transmisie: Math.round(Qtransmisie),
      solar: Math.round(Qsolar),
      intern: Math.round(Qintern),
      ventilatie: Math.round(Qventilatie),
      total: Math.round(Qtotal),
      tr: Math.round(TR * 10) / 10,
      specific: Math.round(Qtotal / suprafata),
    };
  }, [suprafata, coefTransfer, deltaT, orientare, gradIzolare]);

  return (
    <CalculatorLayout
      title="Sarcină de Răcire"
      breviarCode="B-R-001"
      description="Calculul sarcinii termice pentru instalații de climatizare și răcire: Qtotal = Qtransmisie + Qsolar + Qintern + Qventilatie."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Suprafață încălzită"
              value={suprafata}
              onChange={setSuprafata}
              unit="m²"
              min={10}
              max={10000}
              step={5}
            />

            <InputField
              label="Coef. transfer termic (U)"
              value={coefTransfer}
              onChange={setCoefTransfer}
              unit="W/m²K"
              min={10}
              max={100}
              step={5}
              description="0.3-0.5 bine izolat, 0.8-1.5 mediu, 2+ neizolat"
            />

            <InputField
              label="Diferență temperatură (ΔT)"
              value={deltaT}
              onChange={setDeltaT}
              unit="°C"
              min={3}
              max={15}
              step={1}
              description="Ti - Te (interior 24°C, exterior vară)"
            />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Orientare predominantă
              </label>
              <select
                value={orientare}
                onChange={(e) => setOrientare(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="nord">Nord</option>
                <option value="est">Est</option>
                <option value="sud">Sud (maxim solar)</option>
                <option value="vest">Vest</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <ResultCard
              label="Q Transmisie"
              value={rezultate.transmisie}
              unit="W"
              status="info"
              description="Pierderi prin pereți, acoperiș"
            />
            
            <ResultCard
              label="Q Solar"
              value={rezultate.solar}
              unit="W"
              status="warning"
              description="Încărcare radiativă solară"
            />
            
            <ResultCard
              label="Q Intern"
              value={rezultate.intern}
              unit="W"
              status="info"
              description="Ocupanți, echipamente, lumini"
            />
            
            <ResultCard
              label="Q Ventilație"
              value={rezultate.ventilatie}
              unit="W"
              status="info"
              description="Schimb de aer exterior"
            />
            
            <ResultCard
              label="Sarcina TOTALĂ"
              value={rezultate.total}
              unit="W"
              status="ok"
              className="ΣQtransm + Qsolar + Qint + Qvent"
              className="md:col-span-2 bg-blue-900/20 border-blue-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Putere frigorifică"
              value={rezultate.tr}
              unit="TR"
              status="ok"
              description="1 TR = 3516 W"
            />
            
            <ResultCard
              label="Specific"
              value={rezultate.specific}
              unit="W/m²"
              status={rezultate.specific > 150 ? "error" : rezultate.specific > 100 ? "warning" : "ok"}
              description="100-120 W/m² standard, 150+ clădiri vechi"
            />
          </div>

          <FormulaBlock
            title="Formula sarcină răcire"
            formula="Qtotal = Qtransmisie + Qsolar + Qintern + Qventilatie"
            variables={[
              { symbol: "Qtransmisie", description: "S × U × Δt", unit: "W" },
              { symbol: "Qsolar", description: "Încărcare solară orientare", unit: "W" },
              { symbol: "Qintern", description: "Ocupanți + echipamente", unit: "W" },
              { symbol: "Qvent", description: "0.34 × n × V × Δt", unit: "W" },
              { symbol: "TR", description: "Qtotal / 3516", unit: "tone refrig." },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}