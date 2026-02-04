"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { FormulaBlock } from "../components/ui/FormulaBlock";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function CalculatorCanalizareMenajera() {
  const [aparate, setAparate] = useState({
    wc: 2,
    lavoar: 3,
    dus: 2,
    cada: 1,
    bucatarie: 2,
    masinaSpalat: 1,
    pisoar: 0,
  });

  const [diametruSelectat, setDiametruSelectat] = useState<number>(110);
  const [panta, setPanta] = useState(0.02); // m/m (2%)

  // Unități de scurgere (US) conform STAS 1846
  const US_VALUES = {
    wc: 6,
    lavoar: 0.75,
    dus: 1.5,
    cada: 3,
    bucatarie: 1.5,
    masinaSpalat: 3,
    pisoar: 0.5,
  };

  const rezultate = useMemo(() => {
    const totalUS = Object.entries(aparate).reduce((sum, [key, count]) => {
      return sum + count * US_VALUES[key as keyof typeof US_VALUES];
    }, 0);

    // Debit de calcul conform STAS (aproximare)
    // q = 0.5 × √US pentru US < 50, sau q = 0.75 × √US pentru US >= 50 (sau tabele)
    let debitCalcul: number;
    if (totalUS <= 10) debitCalcul = 0.5 * Math.sqrt(totalUS);
    else if (totalUS <= 50) debitCalcul = 0.6 * Math.sqrt(totalUS);
    else debitCalcul = 0.75 * Math.sqrt(totalUS);

    debitCalcul = Math.round(debitCalcul * 100) / 100; // l/s

    // Viteză de curgere Manning: V = (1/n) × R^(2/3) × S^(1/2)
    // Simplificare: n = 0.01 (PVC), R ≈ D/4 pentru conductă plină
    const n = 0.01; // coef. rugozitate Manning
    const D = diametruSelectat / 1000; // m
    const R = D / 4; // m (raza hidraulică aproximativă)
    const v = (1 / n) * Math.pow(R, 2/3) * Math.pow(panta, 1/2);
    
    // Debit de evacuare pentru conductă plină Q = A × v
    const A = Math.PI * Math.pow(D, 2) / 4;
    const Qmax = A * v * 1000; // l/s

    // Adâncime normală pentru debit calculat (simplificat)
    // Q/Qfull ≈ (h/D)^2.5 pentru h/D < 0.8
    const raport = debitCalcul / Qmax;
    const hD = Math.pow(raport, 1/2.5); // raport h/D
    const adancime = hD * D * 1000; // mm

    // Verificare auto-curățire (v > 0.6 m/s pentru h/D > 0.2)
    const autoCuratare = v > 0.6 && hD > 0.2;

    return {
      totalUS: Math.round(totalUS * 100) / 100,
      debitCalcul,
      viteza: Math.round(v * 100) / 100,
      Qmax: Math.round(Qmax * 100) / 100,
      adancime: Math.round(adancime * 10) / 10,
      hD: Math.round(hD * 100),
      autoCuratare,
      status: debitCalcul <= Qmax ? (autoCuratare ? "ok" : "warning") : "error",
    };
  }, [aparate, diametruSelectat, panta]);

  const updateAparat = (key: keyof typeof aparate, value: number) => {
    setAparate(prev => ({ ...prev, [key]: Math.max(0, value) }));
  };

  return (
    <CalculatorLayout
      title="Calculator Canalizare Menajeră"
      breviarCode="BS-04"
      description="Dimensionarea conductelor de canalizare menajeră: calcul US (unități de scurgere), debit de calcul, verificare viteză auto-curățire și pantă."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Lista Aparate */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-4">Aparate Sanitare</h2>
            <div className="space-y-4">
              {[
                { key: "wc", label: "Vase WC", us: 6, icon: "🚽" },
                { key: "lavoar", label: "Lavoare", us: 0.75, icon: "🚰" },
                { key: "dus", label: "Cabine duș", us: 1.5, icon: "🚿" },
                { key: "cada", label: "Căzi baie", us: 3, icon: "🛁" },
                { key: "bucatarie", label: "Chiuvete bucătărie", us: 1.5, icon: "🍽️" },
                { key: "masinaSpalat", label: "Mașini spălat", us: 3, icon: "🧺" },
                { key: "pisoar", label: "Pisoare", us: 0.5, icon: "🚹" },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.us} US/buc</div>
                    </div>
                  </div>
                  <input
                    type="number"
                    min={0}
                    max={50}
                    value={aparate[item.key as keyof typeof aparate]}
                    onChange={(e) => updateAparat(item.key as keyof typeof aparate, parseInt(e.target.value) || 0)}
                    className="w-16 bg-gray-900 border border-gray-700 rounded px-2 py-1 text-center text-sm"
                    placeholder={`Enter ${item.label}`}
                    title={`Input for ${item.label}`}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-4 bg-blue-600/10 rounded-lg border border-blue-600/30">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Total US:</span>
                <span className="text-2xl font-bold text-blue-400">{rezultate.totalUS}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 space-y-4">
            <h2 className="text-lg font-semibold">Parametri Conductă</h2>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Diametru nominal (mm)</label>
              <div className="grid grid-cols-3 gap-2">
                {[50, 75, 110, 125, 160, 200].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDiametruSelectat(d)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      diametruSelectat === d
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    DN {d}
                  </button>
                ))}
              </div>
            </div>

            <InputField
              label="Pantă conductă"
              value={panta}
              onChange={setPanta}
              min={0.005}
              max={0.1}
              step={0.001}
              description="m/m (0.01 = 1%, minim 0.5% pentru DN50, 0.2% pentru DN100+)"
            />
          </div>
        </div>

        {/* Rezultate */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <ResultCard
              label="Debit de Calcul"
              value={rezultate.debitCalcul}
              unit="l/s"
              status={rezultate.debitCalcul > rezultate.Qmax ? "error" : "ok"}
              className={`q = 0.6 × √${rezultate.totalUS}`}
              description="Debit probabil maxim conform STAS 1846"
            />

            <ResultCard
              label="Debit Maxim Conductă"
              value={rezultate.Qmax}
              unit="l/s"
              status={rezultate.Qmax > rezultate.debitCalcul ? "ok" : "error"}
              className={`Qmax = A × v (${rezultate.viteza} m/s)`}
              description="Capacitate maximă la grad de umplere 100%"
            />

            <ResultCard
              label="Viteză de Curgere"
              value={rezultate.viteza}
              unit="m/s"
              status={rezultate.viteza >= 0.6 && rezultate.viteza <= 3 ? "ok" : "warning"}
              description="Viteză la debit maxim de calcul"
            />

            <ResultCard
              label="Adâncime de Curgere"
              value={rezultate.adancime}
              unit="mm"
              status={rezultate.hD > 20 && rezultate.hD < 80 ? "ok" : "warning"}
              className={`h/D = ${rezultate.hD}%`}
              description="Raport adâncime/diametru la debit de calcul"
            />
          </div>

          {/* Status Verificare */}
          <div className={`p-6 rounded-xl border ${
            rezultate.autoCuratare 
              ? "bg-emerald-500/10 border-emerald-500/30" 
              : "bg-amber-500/10 border-amber-500/30"
          }`}>
            <div className="flex items-start gap-4">
              {rezultate.autoCuratare ? (
                <CheckCircle className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
              )}
              <div>
                <h3 className={`text-lg font-semibold ${
                  rezultate.autoCuratare ? "text-emerald-400" : "text-amber-400"
                }`}>
                  {rezultate.autoCuratare ? "Verificare Reușită" : "Necesită Atenție"}
                </h3>
                <p className="text-gray-300 mt-2">
                  {rezultate.autoCuratare
                    ? `Conducta DN${diametruSelectat} asigură condiții de auto-curățire (v=${rezultate.viteza} m/s > 0.6 m/s) și evacuare sigură.`
                    : rezultate.viteza < 0.6
                    ? "Viteza este sub 0.6 m/s. Risc de depuneri! Măriți pantă sau reduceți diametrul."
                    : "Verificați gradul de umplere (recomandat h/D < 0.5-0.7 pentru conducte principale)."}
                </p>
              </div>
            </div>
          </div>

          <FormulaBlock
            title="Principii de Calcul Canalizare"
            formula="q = K × √Σ(US)  [l/s]"
            variables={[
              { symbol: "US", description: "Unitate de scurgere (DU în unele normative)", unit: "-" },
              { symbol: "q", description: "Debit de calcul", unit: "l/s" },
              { symbol: "K", description: "Coeficient (0.5-0.75 funcție de total US)", unit: "-" },
              { symbol: "v", description: "Viteză (Manning)", unit: "m/s" },
              { symbol: "h/D", description: "Raport adâncime/diametru", unit: "%" },
            ]}
          />

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="font-semibold mb-4">Criterii Verificare (STAS 1846 / I7)</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${rezultate.viteza >= 0.6 ? "bg-emerald-400" : "bg-red-400"}`} />
                Viteză minimă auto-curățire: v ≥ 0.6 m/s
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                Viteză maximă (protecție): v ≤ 3-4 m/s (instalații interioare)
              </li>
              <li className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${rezultate.hD <= 70 ? "bg-emerald-400" : "bg-amber-400"}`} />
                Grad umplere conducte principale: h/D ≤ 0.7
              </li>
              <li className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${panta >= (diametruSelectat <= 75 ? 0.01 : 0.005) ? "bg-emerald-400" : "bg-amber-400"}`} />
                Pante minime: DN50≥1%, DN75≥0.7%, DN100≥0.5%, DN125≥0.4%
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}