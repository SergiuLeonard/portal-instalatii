"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertCircle } from "lucide-react";

export default function CalculatorConducteFrig() {
  const [debit, setDebit] = useState<number>(0.1); // kg/s
  const [diametru, setDiametru] = useState<number>(28); // mm (ex: 28x1.5mm)
  const [grosimeIzolatie, setGrosimeIzolatie] = useState<number>(30); // mm
  const [tempMediu, setTempMediu] = useState<number>(-10); // °C (temp.conductă)
  const [tempAmbianta, setTempAmbianta] = useState<number>(25); // °C
  const [lambdaIzolatie, setLambdaIzolatie] = useState<number>(0.035); // W/mK (vată/PUR)

  const rezultate = useMemo(() => {
    const Di = diametru; // mm diametru interior
    const De = diametru + 2 * grosimeIzolatie; // mm diametru exterior izolat
    
    // Pierdere termică: Q = 2πλL(Δt)/ln(De/Di)
    const deltaT = tempAmbianta - tempMediu;
    const lnDeDi = Math.log(De / Di);
    const qL = (2 * Math.PI * lambdaIzolatie * deltaT) / lnDeDi; // W/m
    
    // Densitate refrigerant tipic (R410A lichid)
    const rho = 1200; // kg/m³ aproximativ
    const A = Math.PI * Math.pow(Di/2000, 2); // m²
    const v = (debit / rho) / A; // m/s
    
    // Risc condens: dacă temp. suprafață izolație < temp. rouă
    // Simplificat: dacă pierderea e mare și umiditatea ambientală e ridicată
    const tempSuprafata = tempAmbianta - (qL * lnDeDi / (2 * Math.PI * lambdaIzolatie));
    const riscCondens = tempSuprafata < 20; // prag simplificat
    
    return {
      pierdereCalorica: Math.round(qL * 10) / 10,
      viteza: Math.round(v * 100) / 100,
      tempSuprafata: Math.round(tempSuprafata * 10) / 10,
      riscCondens,
      eficienta: Math.round((1 - (qL / (debit * 2000))) * 100), // % simplificat
    };
  }, [debit, diametru, grosimeIzolatie, tempMediu, tempAmbianta, lambdaIzolatie]);

  return (
    <CalculatorLayout
      title="Conducte Frigorifice"
      breviarCode="B-F-002"
      description="Calculul pierderilor termice pentru conducte de refrigerare și verificarea riscului de condens."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <InputField
              label="Debit refrigerant"
              value={debit}
              onChange={setDebit}
              unit="kg/s"
              min={0.01}
              max={10}
              step={0.01}
              description="Masic sau volumic convertit"
            />

            <InputField
              label="Diametru interior (Di)"
              value={diametru}
              onChange={setDiametru}
              unit="mm"
              min={10}
              max={200}
              step={2}
            />

            <InputField
              label="Grosime izolație"
              value={grosimeIzolatie}
              onChange={setGrosimeIzolatie}
              unit="mm"
              min={10}
              max={100}
              step={5}
            />

            <InputField
              label="λ izolație"
              value={lambdaIzolatie}
              onChange={setLambdaIzolatie}
              unit="W/mK"
              min={0.02}
              max={0.05}
              step={0.005}
              description="0.022 PUR, 0.035 vată, 0.04 polistiren"
            />

            <div className="grid grid-cols-2 gap-4">
              <InputField
                label="Temp. conductă"
                value={tempMediu}
                onChange={setTempMediu}
                unit="°C"
                min={-40}
                max={10}
                step={1}
              />
              <InputField
                label="Temp. ambiantă"
                value={tempAmbianta}
                onChange={setTempAmbianta}
                unit="°C"
                min={15}
                max={40}
                step={1}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Pierdere calorică"
              value={rezultate.pierdereCalorica}
              unit="W/m"
              status={rezultate.pierdereCalorica < 10 ? "ok" : "warning"}
              formula="q = 2πλΔt/ln(De/Di)"
              description="Pierdere pe metru liniar"
            />
            
            <ResultCard
              label="Viteză fluid"
              value={rezultate.viteza}
              unit="m/s"
              status={rezultate.viteza > 3 ? "error" : rezultate.viteza < 0.5 ? "warning" : "ok"}
              description="Viteză în conductă"
            />
            
            <ResultCard
              label="Temp. suprafață izolație"
              value={rezultate.tempSuprafata}
              unit="°C"
              status={rezultate.riscCondens ? "error" : "ok"}
              description={rezultate.riscCondens ? "Pericol condens!" : "Fără condens"}
            />
            
            <ResultCard
              label="Eficiență termică"
              value={rezultate.eficienta}
              unit="%"
              status={rezultate.eficienta > 95 ? "ok" : "warning"}
            />
          </div>

          {rezultate.riscCondens && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Risc de condens</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Temperatura suprafeței ({rezultate.tempSuprafata}°C) este sub temperatura de rouă probabilă.
                  Soluție: măriți izolația la {grosimeIzolatie + 10}mm sau folosiți λ mai mic.
                </p>
              </div>
            </div>
          )}

          <FormulaBlock
            title="Formula pierderi termice"
            formula="Δt = Q × ln(De/Di) / (2πλL)"
            variables={[
              { symbol: "q", description: "Pierdere specifică", unit: "W/m" },
              { symbol: "λ", description: "Conductivitate izolație", unit: "W/mK" },
              { symbol: "De", description: "Diametru exterior izolat", unit: "mm" },
              { symbol: "Di", description: "Diametru interior", unit: "mm" },
              { symbol: "Δt", description: "Diferență temperatură", unit: "K" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}