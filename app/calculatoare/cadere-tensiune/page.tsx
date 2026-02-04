"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertCircle } from "lucide-react";

export default function CalculatorCadereTensiune() {
  const [putere, setPutere] = useState<number>(5000);
  const [tensiune, setTensiune] = useState<number>(230);
  const [lungime, setLungime] = useState<number>(50);
  const [sectiune, setSectiune] = useState<number>(2.5);
  const [cosFi, setCosFi] = useState<number>(0.9);
  const [material, setMaterial] = useState<string>("cupru");

  const rezultate = useMemo(() => {
    const gamma = material === "cupru" ? 56 : 35;
    const I = putere / (tensiune * cosFi);
    
    const coeficient = tensiune === 230 ? 2 : Math.sqrt(3);
    const deltaU = (coeficient * I * lungime * cosFi) / (gamma * sectiune * tensiune) * 100;
    
    const rezistenta = lungime / (gamma * sectiune);
    const pierderiPutere = 2 * Math.pow(I, 2) * rezistenta;
    
    const Smin = (coeficient * I * lungime * cosFi) / (gamma * 3 * tensiune) * 100;
    
    // FIX: Type assertion pentru status
    const statusValue: "ok" | "warning" | "error" = deltaU < 3 ? "ok" : deltaU < 5 ? "warning" : "error";
    
    return {
      curent: Math.round(I * 10) / 10,
      cadereTensiune: Math.round(deltaU * 100) / 100,
      pierderiPutere: Math.round(pierderiPutere),
      sectiuneMinima: Math.round(Smin * 10) / 10,
      tensiuneFinala: Math.round(tensiune * (1 - deltaU/100) * 10) / 10,
      status: statusValue, // Acum este tipizat corect
    };
  }, [putere, tensiune, lungime, sectiune, cosFi, material]);

  return (
    <CalculatorLayout
      title="Cădere de Tensiune"
      breviarCode="NP 022"
      description="Verificarea secțiunii conductoarelor conform formulei ΔU% = (2×I×L×cosφ)/(γ×S×Un)×100."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Material conductor
              </label>
              <select
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white"
              >
                <option value="cupru">Cupru (γ=56)</option>
                <option value="aluminiu">Aluminiu (γ=35)</option>
              </select>
            </div>

            <InputField
              label="Putere instalată"
              value={putere}
              onChange={setPutere}
              unit="W"
              min={100}
              max={50000}
              step={100}
            />

            <InputField
              label="Tensiune nominală"
              value={tensiune}
              onChange={setTensiune}
              unit="V"
              min={110}
              max={400}
              step={10}
              description="230V monofazat sau 400V trifazat"
            />

            <InputField
              label="Lungime linie"
              value={lungime}
              onChange={setLungime}
              unit="m"
              min={1}
              max={500}
              step={5}
              description="Dus-întors pentru monofazat"
            />

            <InputField
              label="Secțiune conductă"
              value={sectiune}
              onChange={setSectiune}
              unit="mm²"
              min={0.75}
              max={300}
              step={0.5}
            />

            <InputField
              label="Cos φ"
              value={cosFi}
              onChange={setCosFi}
              min={0.5}
              max={1.0}
              step={0.05}
            />
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Curent absorbit"
              value={rezultate.curent}
              unit="A"
              status="info"
              className="I = P/(U×cosφ)"
            />
            
            <ResultCard
              label="Cădere de tensiune"
              value={rezultate.cadereTensiune}
              unit="%"
              status={rezultate.status}
              description={rezultate.status === "error" ? "Depășește 5% - măriți secțiunea!" : 
                          rezultate.status === "warning" ? "Între 3-5%" : "Conform NP 022 (<3%)"}
            />
            
            <ResultCard
              label="Tensiune finală"
              value={rezultate.tensiuneFinala}
              unit="V"
              status={rezultate.status === "error" ? "error" : rezultate.status === "warning" ? "warning" : "ok"}
            />
            
            <ResultCard
              label="Secțiune minimă recomandată"
              value={rezultate.sectiuneMinima}
              unit="mm²"
              status="ok"
              description="Pentru ΔU < 3%"
            />
            
            <ResultCard
              label="Pierderi putere"
              value={rezultate.pierderiPutere}
              unit="W"
              status="info"
              className="md:col-span-2"
              description="Pierderi prin efect Joule în conducte"
            />
          </div>

          {rezultate.status === "error" && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Cădere de tensiune excesivă</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Căderea de tensiune de {rezultate.cadereTensiune}% depășește limita maximă admisă de 5%.
                  Soluție: măriți secțiunea la {Math.ceil(sectiune * 1.5)} mm² sau reduceți lungimea liniei.
                </p>
              </div>
            </div>
          )}

          <FormulaBlock
            title="Formula cădere tensiune"
            formula="ΔU% = (2 × I × L × cosφ) / (γ × S × Un) × 100"
            variables={[
              { symbol: "I", description: "Curent de sarcină", unit: "A" },
              { symbol: "L", description: "Lungime linie (dus-întors)", unit: "m" },
              { symbol: "γ", description: "Conductivitate (Cu=56, Al=35)", unit: "m/Ω·mm²" },
              { symbol: "S", description: "Secțiune conductor", unit: "mm²" },
              { symbol: "Un", description: "Tensiune nominală", unit: "V" },
              { symbol: "cosφ", description: "Factor de putere", unit: "-" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}