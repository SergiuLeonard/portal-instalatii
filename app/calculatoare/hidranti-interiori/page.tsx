"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";

export default function CalculatorHidrantiInteriori() {
  const [numarHidranti, setNumarHidranti] = useState<number>(2);
  const [lungimeFurtun, setLungimeFurtun] = useState<number>(20); // m
  const [inaltime, setInaltime] = useState<number>(0); // m diferență nivel
  const [diametruRacord, setDiametruRacord] = useState<number>(52); // mm (2")

  const rezultate = useMemo(() => {
    // Debit minim: primul 2.5 l/s, fiecare în plus 2.0 l/s
    const debitPrimul = 2.5;
    const debitSuplimentar = 2.0;
    const Q = debitPrimul + (numarHidranti - 1) * debitSuplimentar;
    
    // Presiune necesară: 2-3 bar la robinet + pierderi
    // Pierderi furtun: aprox 0.1 bar per 10m la 2.5 l/s
    const pierderiFurtun = (lungimeFurtun / 10) * 0.1 * (Q / 2.5);
    const presiuneGeodezica = inaltime / 10; // 10m = 1 bar
    const presiuneNecesara = 3 + pierderiFurtun + presiuneGeodezica; // 3 bar la robinet
    
    // Pierderi în racord (simplificat)
    const v = Q / (1000 * Math.PI * Math.pow(diametruRacord/2000, 2)); // m/s
    const pierderiRacord = 0.5 * Math.pow(v, 2) / (2 * 9.81); // m
    
    return {
      debitNecesar: Math.round(Q * 10) / 10,
      presiuneNecesara: Math.round(presiuneNecesara * 10) / 10,
      pierderiFurtun: Math.round(pierderiFurtun * 10) / 10,
      viteza: Math.round(v * 10) / 10,
      diametruRacord: diametruRacord,
    };
  }, [numarHidranti, lungimeFurtun, inaltime, diametruRacord]);

  return (
    <CalculatorLayout
      title="Hidranți Interiori"
      breviarCode="SR EN 671"
      description="Calculul debitului și presiunii necesare pentru hidranții interiori conform SR EN 671."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Număr hidranți simultani"
              value={numarHidranti}
              onChange={setNumarHidranti}
              unit="buc"
              min={1}
              max={6}
              step={1}
              description="Maxim 2-3 pentru clădiri obișnuite"
            />

            <InputField
              label="Lungime furtun"
              value={lungimeFurtun}
              onChange={setLungimeFurtun}
              unit="m"
              min={10}
              max={40}
              step={5}
              description="20m standard (2 furtune de 20m)"
            />

            <InputField
              label="Diferență nivel (H)"
              value={inaltime}
              onChange={setInaltime}
              unit="m"
              min={0}
              max={50}
              step={1}
              description="Înălțimea hidrant față de sursă"
            />

            <InputField
              label="Diametru racord"
              value={diametruRacord}
              onChange={setDiametruRacord}
              unit="mm"
              min={40}
              max={75}
              step={13}
              description="52mm (2) sau 65mm standard"
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Debit necesar"
              value={rezultate.debitNecesar}
              unit="l/s"
              status="ok"
              description="Primul: 2.5 l/s, următorii: 2.0 l/s"
            />
            
            <ResultCard
              label="Presiune necesară"
              value={rezultate.presiuneNecesara}
              unit="bar"
              status={rezultate.presiuneNecesara > 8 ? "warning" : "ok"}
              description="La sursă (inclusiv pierderi)"
            />
            
            <ResultCard
              label="Pierderi furtun"
              value={rezultate.pierderiFurtun}
              unit="bar"
              status="info"
            />
            
            <ResultCard
              label="Viteză în racord"
              value={rezultate.viteza}
              unit="m/s"
              status={rezultate.viteza > 5 ? "warning" : "ok"}
            />
          </div>

          <FormulaBlock
            title="Formule hidranți interiori"
            formula="Q = 2.5 + (n-1) × 2.0  [l/s]"
            variables={[
              { symbol: "Q", description: "Debit total necesar", unit: "l/s" },
              { symbol: "n", description: "Număr hidranți simultani", unit: "-" },
              { symbol: "P", description: "Presiune necesară la sursă", unit: "bar" },
              { symbol: "H", description: "Diferență nivel", unit: "m" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}