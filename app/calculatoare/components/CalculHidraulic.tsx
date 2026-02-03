"use client";

import { useState, useMemo } from "react";

// Coeficienți de frecare pentru calcul hidraulic (formula Hazen-Williams simplificată)
// sau formula generală pentru apă la 20°C
const CALCUL_HIDRaulic = (Q: number, d: number, L: number, zetaTotal: number) => {
  // Q în m³/h, d în mm, L în m
  // Convertim în unități SI
  const Qm3s = Q / 3600; // m³/s
  const dm = d / 1000; // m
  const A = Math.PI * Math.pow(dm / 2, 2); // m²
  const v = Qm3s / A; // m/s
  
  // Pierdere liniară simplificată (aproximare pentru țevi de oțel, apă 60°C)
  // R în Pa/m
  const Re = (v * dm) / (0.0000005); // Număr Reynolds aproximativ
  const lambda = 0.316 / Math.pow(Re, 0.25); // Blasius pentru turbulent
  const R = lambda * (1000 * Math.pow(v, 2)) / (2 * dm); // Pa/m
  
  const pierdereLiniara = R * L; // Pa
  const pierdereLocala = zetaTotal * (1000 * Math.pow(v, 2)) / 2; // Pa
  
  return {
    v,
    R,
    pierdereLiniara,
    pierdereLocala,
    total: pierdereLiniara + pierdereLocala,
    vMax: v > 2.5 ? "Depășit" : v > 1.5 ? "Ridicat" : "Normal",
  };
};

// Rezistențe locale tipice
const REZISTENTE_LOCALE = {
  cot90: { nume: "Cot 90°", zeta: 1.0 },
  cot45: { nume: "Cot 45°", zeta: 0.4 },
  teu: { nume: "Teu direct", zeta: 0.5 },
  teuDerivatie: { nume: "Teu derivatie", zeta: 1.5 },
  reducere: { nume: "Reducere bruscă", zeta: 0.5 },
  micsorare: { nume: "Micsorare graduală", zeta: 0.1 },
  supapa: { nume: "Supapă de închidere", zeta: 3.0 },
  robinet: { nume: "Robinet cu sertar", zeta: 0.2 },
  filtru: { nume: "Filtru", zeta: 2.0 },
  intrare: { nume: "Intrare rețea", zeta: 0.5 },
  iesire: { nume: "Ieșire rețea", zeta: 1.0 },
};

export default function CalculHidraulic() {
  const [Q, setQ] = useState(1); // m³/h
  const [d, setD] = useState(50); // mm
  const [L, setL] = useState(50); // m
  const [elementeLocale, setElementeLocale] = useState<Array<{tip: keyof typeof REZISTENTE_LOCALE, cantitate: number}>>([
    { tip: "cot90", cantitate: 4 },
    { tip: "robinet", cantitate: 2 },
  ]);

  const zetaTotal = useMemo(() => {
    return elementeLocale.reduce((sum, el) => sum + (REZISTENTE_LOCALE[el.tip].zeta * el.cantitate), 0);
  }, [elementeLocale]);

  const calcule = useMemo(() => {
    return CALCUL_HIDRaulic(Q, d, L, zetaTotal);
  }, [Q, d, L, zetaTotal]);

  const adaugaElement = () => {
    setElementeLocale([...elementeLocale, { tip: "cot90", cantitate: 1 }]);
  };

  const actualizeazaElement = (index: number, field: "tip" | "cantitate", value: string | number) => {
    const nou = [...elementeLocale];
    if (field === "tip") {
      nou[index].tip = value as keyof typeof REZISTENTE_LOCALE;
    } else {
      nou[index].cantitate = Number(value);
    }
    setElementeLocale(nou);
  };

  const stergeElement = (index: number) => {
    setElementeLocale(elementeLocale.filter((_, i) => i !== index));
  };

  // Recomandări diametre
  const diametreStandard = [15, 20, 25, 32, 40, 50, 65, 80, 100, 125, 150, 200];

  return (
    <div className="space-y-6">
      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
        <p className="text-blue-200 text-sm">
          <span className="font-bold">💧 Calcul Hidraulic Simplificat</span> — 
          Calculul pierderilor de sarcină în rețele de incălzire. 
          Bazat pe formula Darcy-Weisbach simplificată pentru apă.
        </p>
      </div>

      {/* Date de intrare */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Date de intrare</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Debit Q [m³/h]</label>
            <input
              type="number"
              value={Q}
              onChange={(e) => setQ(Number(e.target.value))}
              min="0.1"
              step="0.1"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
            <p className="text-xs text-gray-500 mt-1">{Q > 0 ? `${(Q * 1000 / 3600).toFixed(2)} l/s` : ""}</p>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Diametru d [mm]</label>
            <select
              value={d}
              onChange={(e) => setD(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            >
              {diametreStandard.map((di) => (
                <option key={di} value={di}>DN {di}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Lungime L [m]</label>
            <input
              type="number"
              value={L}
              onChange={(e) => setL(Number(e.target.value))}
              min="1"
              step="1"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>
        </div>
      </div>

      {/* Rezistențe locale */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">Rezistențe locale (ζ)</h3>
          <button
            onClick={adaugaElement}
            className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 rounded text-sm text-white"
          >
            + Adaugă
          </button>
        </div>

        <div className="space-y-2">
          {elementeLocale.map((el, idx) => (
            <div key={idx} className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
              <select
                value={el.tip}
                onChange={(e) => actualizeazaElement(idx, "tip", e.target.value)}
                className="flex-1 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm text-white"
              >
                {Object.entries(REZISTENTE_LOCALE).map(([key, val]) => (
                  <option key={key} value={key}>{val.nume} (ζ={val.zeta})</option>
                ))}
              </select>
              <input
                type="number"
                value={el.cantitate}
                onChange={(e) => actualizeazaElement(idx, "cantitate", e.target.value)}
                min="1"
                className="w-20 bg-gray-700 border border-gray-600 rounded px-2 py-1 text-sm text-white text-center"
              />
              <button
                onClick={() => stergeElement(idx)}
                className="p-1 text-red-400 hover:text-red-300"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="mt-3 p-2 bg-gray-800 rounded text-sm">
          <span className="text-gray-400">Σζ = </span>
          <span className="text-cyan-400 font-bold">{zetaTotal.toFixed(1)}</span>
        </div>
      </div>

      {/* Rezultate */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-700/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400">Rezultate</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded p-3 border border-gray-700">
            <p className="text-gray-400 text-xs">Viteză v</p>
            <p className={`text-xl font-bold ${calcule.v > 1.5 ? "text-yellow-400" : "text-green-400"}`}>
              {calcule.v.toFixed(2)} m/s
            </p>
            <p className="text-xs text-gray-500">{calcule.vMax}</p>
          </div>

          <div className="bg-gray-800/50 rounded p-3 border border-gray-700">
            <p className="text-gray-400 text-xs">Pierdere liniară R</p>
            <p className="text-xl font-bold text-blue-400">
              {(calcule.R / 100).toFixed(1)} mmH₂O/m
            </p>
          </div>

          <div className="bg-gray-800/50 rounded p-3 border border-gray-700">
            <p className="text-gray-400 text-xs">Pierdere locală</p>
            <p className="text-xl font-bold text-orange-400">
              {(calcule.pierdereLocala / 100).toFixed(1)} mmH₂O
            </p>
          </div>

          <div className="bg-cyan-900/30 rounded p-3 border border-cyan-600">
            <p className="text-gray-400 text-xs">Pierdere TOTALĂ</p>
            <p className="text-2xl font-bold text-cyan-400">
              {(calcule.total / 100).toFixed(1)} mmH₂O
            </p>
            <p className="text-xs text-gray-500">≈ {(calcule.total / 9806.65).toFixed(2)} mH₂O</p>
          </div>
        </div>

        {/* Avertizări */}
        {calcule.v > 2.5 && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded text-sm text-red-200">
            ⚠️ Viteza este prea mare! Recomandat: max 2 m/s pentru incălzire, max 1.5 m/s pentru ACM.
          </div>
        )}
        {calcule.v < 0.5 && (
          <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded text-sm text-yellow-200">
          ⚠️ Viteza este prea mică! Risc de aerisire și zgomot în rețea. Recomandat: min 0.5 m/s.
          </div>
        )}
      </div>

      <div className="p-3 bg-gray-800/50 rounded border border-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Formulă:</strong> Δp = λ × (L/d) × (ρv²/2) + Σζ × (ρv²/2)<br/>
          • v = 4Q/(πd²) - viteza de curgere<br/>
          • λ - coeficient de frecare (Blasius pentru regim turbulent)<br/>
          • ρ = 1000 kg/m³ pentru apă
        </p>
      </div>
    </div>
  );
}