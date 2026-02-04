"use client";

import { useState, useEffect, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertCircle, Info } from "lucide-react";

interface RezultateDebit {
  qc: number; // Debit de calcul l/s
  Qzi: number; // Debit zilnic total m³/zi
  E: number; // Debit specific l/(pers·zi)
  simultaneitate: number; // Coeficient simultaneitate
}

export default function CalculatorDebitSanitar() {
  // Stări input
  const [numarPersoane, setNumarPersoane] = useState<number>(50);
  const [numarSanitare, setNumarSanitare] = useState<number>(10);
  const [debitSpecific, setDebitSpecific] = useState<number>(30); // l/s per aparat
  const [tipCladire, setTipCladire] = useState<"rezidential" | "public" | "industrial">("rezidential");

  // Calcul automat
  const rezultate: RezultateDebit = useMemo(() => {
    // Debit zilnic specific conform STAS 1478 / Normativ I9
    const E_values = {
      rezidential: 120, // l/pers/zi
      public: 50,
      industrial: 60,
    };
    
    const E = E_values[tipCladire];
    const Qzi = (numarPersoane * E) / 1000; // m³/zi
    
    // Coeficient simultaneitate conform STAS (aproximare)
    // α = 0.2 + 0.8/√n pentru n < 50, sau tabele STAS
    let alpha: number;
    if (numarSanitare <= 5) alpha = 1.0;
    else if (numarSanitare <= 10) alpha = 0.8;
    else if (numarSanitare <= 20) alpha = 0.6;
    else if (numarSanitare <= 50) alpha = 0.45;
    else alpha = 0.3;

    // Debit de calcul simultan
    const debitTotalNominal = numarSanitare * debitSpecific; // l/s
    const qc = debitTotalNominal * alpha;

    return {
      qc: Math.round(qc * 100) / 100,
      Qzi: Math.round(Qzi * 100) / 100,
      E,
      simultaneitate: Math.round(alpha * 100) / 100,
    };
  }, [numarPersoane, numarSanitare, debitSpecific, tipCladire]);

  const getStatus = (val: number) => {
    if (val < 0.5) return "warning";
    if (val > 10) return "error";
    return "ok";
  };

  return (
    <CalculatorLayout
      title="Calculator Debit Apă Sanitară"
      breviarCode="BS-01"
      description="Calculează debitul de apă rece și caldă necesar conform STAS 1478 și Normativului I9. Include coeficientul de simultaneitate și debitul zilnic specific."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Secțiunea Input */}
        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center text-sm">
                1
              </span>
              Date de Intrare
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <label className="block text-sm font-medium text-gray-300">
                  Tip Clădire
                </label>
                <select
                  value={tipCladire}
                  onChange={(e) => setTipCladire(e.target.value as any)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="rezidential">Rezidențial (locuințe)</option>
                  <option value="public">Clădiri publice (birouri, școli)</option>
                  <option value="industrial">Industrial/agro-zootehnic</option>
                </select>
              </div>

              <InputField
                label="Număr persoane utilizatoare"
                value={numarPersoane}
                onChange={setNumarPersoane}
                min={1}
                max={10000}
                step={1}
                description="Numărul total de persoane care utilizează instalația"
                required
              />

              <InputField
                label="Număr aparate sanitare"
                value={numarSanitare}
                onChange={setNumarSanitare}
                min={1}
                max={500}
                step={1}
                description="Total aparate sanitare (lavuar, WC, duș, cadă, etc.)"
                required
              />

              <InputField
                label="Debit specific nominal per aparat"
                value={debitSpecific}
                onChange={setDebitSpecific}
                unit="l/s"
                min={0.1}
                max={2}
                step={0.1}
                description="Debit nominal al unui aparat (0.1-0.3 l/s pentru robinete, 0.5+ pentru dușuri)"
              />
            </div>
          </div>

          {/* Detalii Tehnice */}
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-400" />
              Detalii de Calcul
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Debitul zilnic total Q<sub>zi</sub> = N × E [m³/zi]</li>
              <li>• E = debit specific zilnic funcție de tipul clădirii</li>
              <li>• Coeficient simultaneitate α din tabele STAS sau formula probabilistică</li>
              <li>• Debit calcul q<sub>c</sub> = Σq<sub>s</sub> × α [l/s]</li>
            </ul>
          </div>
        </div>

        {/* Secțiunea Rezultate */}
        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center text-sm">
                2
              </span>
              Rezultate
            </h2>

            <div className="grid gap-4">
              <ResultCard
                label="Debit de Calcul (Simultan)"
                value={rezultate.qc}
                unit="l/s"
                status={getStatus(rezultate.qc)}
                formula={`qc = ${numarSanitare} × ${debitSpecific} × ${rezultate.simultaneitate}`}
                description="Debitul maxim probabil simultan pentru dimensionarea rețelei"
              />

              <ResultCard
                label="Debit Zilnic Total"
                value={rezultate.Qzi}
                unit="m³/zi"
                status="info"
                formula={`Qzi = ${numarPersoane} × ${rezultate.E} / 1000`}
                description="Consumul zilnic total de apă pentru rezervor/deducție"
              />

              <div className="grid grid-cols-2 gap-4">
                <ResultCard
                  label="Debit Specific Zilnic (E)"
                  value={rezultate.E}
                  unit="l/pers·zi"
                  status="ok"
                  description="Conform STAS 1478"
                />
                <ResultCard
                  label="Coef. Simultaneitate"
                  value={rezultate.simultaneitate}
                  status={rezultate.simultaneitate < 0.5 ? "warning" : "ok"}
                  description={`Pentru ${numarSanitare} aparate`}
                />
              </div>
            </div>

            {rezultate.qc > 10 && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-400">Debit mare detectat</h4>
                  <p className="text-sm text-red-300/80 mt-1">
                    Debitul depășește 10 l/s. Verificați numărul de aparate sau considerați 
                    o instalație cu rezervor de compensare.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Formule complete */}
          <FormulaBlock
            title="Formule Utilizate"
            formula="qc = Σqs × α = N × qs × (0.2 + 0.8/√N) [l/s]"
            variables={[
              { symbol: "qc", description: "Debit de calcul simultan", unit: "l/s" },
              { symbol: "Σqs", description: "Suma debitelor nominale", unit: "l/s" },
              { symbol: "α", description: "Coeficient de simultaneitate", unit: "-" },
              { symbol: "N", description: "Număr aparate sanitare", unit: "-" },
              { symbol: "E", description: "Debit specific zilnic", unit: "l/pers·zi" },
              { symbol: "Qzi", description: "Debit zilnic total", unit: "m³/zi" },
            ]}
          />
        </div>
      </div>
    </CalculatorLayout>
  );
}