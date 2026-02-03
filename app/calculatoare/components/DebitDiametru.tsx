"use client";

import { useCallback } from "react"; // Adăugați useCallback
import { useState, useMemo } from "react";

export default function DebitDiametru() {
  const [modCalcul, setModCalcul] = useState<"debit" | "diametru" | "viteza">("debit");
  const [viteza, setViteza] = useState(1.0); // m/s
  const [diametru, setDiametru] = useState(50); // mm
  const [debit, setDebit] = useState(7); // m³/h

  // Calcule reciproce
  const calcule = useMemo(() => {
    const d = diametru / 1000; // m
    const A = Math.PI * Math.pow(d / 2, 2); // m²
    
    if (modCalcul === "debit") {
      // Calcul debit din viteză și diametru
      const Q = viteza * A * 3600; // m³/h
      return { Q, v: viteza, d: diametru };
    } else if (modCalcul === "diametru") {
      // Calcul diametru din debit și viteză
      const Qm3s = debit / 3600;
      const dCalc = Math.sqrt((4 * Qm3s) / (Math.PI * viteza)) * 1000; // mm
      return { Q: debit, v: viteza, d: dCalc };
    } else {
      // Calcul viteză din debit și diametru
      const vCalc = (debit / 3600) / A;
      return { Q: debit, v: vCalc, d: diametru };
    }
  }, [modCalcul, viteza, diametru, debit]);
    // =========================
// EXPORT TXT
// =========================
const exportTxt = (
  modCalcul: string,
  viteza: number,
  diametru: number,
  debit: number,
  calcule: { Q: number; v: number; d: number }
) => {
  const data = new Date().toLocaleDateString("ro-RO");
  
  const modText = {
    debit: "Debit Q (din v și d)",
    diametru: "Diametru d (din Q și v)",
    viteza: "Viteză v (din Q și d)",
  }[modCalcul] || modCalcul;

  const txt = `
CALCUL DEBIT / DIAMETRU / VITEZA
=================================
Data: ${data}

MOD DE CALCUL: ${modText}

DATE DE INTRARE
---------------
${modCalcul !== "debit" ? `Debit Q = ${debit} m³/h\n` : ""}${modCalcul !== "diametru" ? `Diametru d = DN ${diametru} mm\n` : ""}${modCalcul !== "viteza" ? `Viteză v = ${viteza} m/s\n` : ""}

CALCULE
-------
Aria secțiunii: A = π × d²/4 = ${(Math.PI * Math.pow((modCalcul === "diametru" ? calcule.d : diametru) / 1000, 2) / 4).toFixed(6)} m²

REZULTATE
---------
Debit Q = ${calcule.Q.toFixed(3)} m³/h
        = ${(calcule.Q * 1000 / 3600).toFixed(3)} l/s

Diametru d = ${calcule.d.toFixed(1)} mm
${calcule.d !== Math.round(calcule.d) ? `   (diametru standard recomandat: DN ${Math.ceil(calcule.d / 10) * 10} mm)` : ""}

Viteză v = ${calcule.v.toFixed(2)} m/s
${calcule.v < 0.5 ? "   ⚠️ Viteză prea mică!" : calcule.v > 2.0 ? "   ⚠️ Viteză prea mare!" : "   ✓ Viteză în limite normale"}

Formula: Q = v × A = v × (π × d²/4)
=================================
`;

  const blob = new Blob([txt], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `calcul_debit_${data.replace(/\./g, "-")}.txt`;
  a.click();
};
  // Diametre standard
  const diametreStandard = [15, 20, 25, 32, 40, 50, 65, 80, 100, 125, 150, 200, 250, 300];

  // Alege diametrul standard imediat superior
  const diametruRecomandat = useMemo(() => {
    if (modCalcul !== "diametru") return null;
    return diametreStandard.find(d => d >= calcule.d) || diametreStandard[diametreStandard.length - 1];
  }, [calcule.d, modCalcul]);
    // Wrapper pentru export
  const handleExport = useCallback(() => {
    exportTxt(modCalcul, viteza, diametru, debit, calcule);
  }, [modCalcul, viteza, diametru, debit, calcule]);

  // Viteze recomandate
  const vitezeRec = {
    incalzire: { min: 0.5, max: 1.5, optimal: 1.0 },
    acm: { min: 0.5, max: 1.0, optimal: 0.8 },
    racire: { min: 0.8, max: 2.0, optimal: 1.2 },
  };

  const evaluareViteza = (v: number) => {
    if (v < 0.3) return { text: "Prea mică - risc aerisire", color: "text-red-400" };
    if (v < 0.5) return { text: "Mică", color: "text-yellow-400" };
    if (v <= 1.5) return { text: "Normală", color: "text-green-400" };
    if (v <= 2.0) return { text: "Ridicată", color: "text-yellow-400" };
    return { text: "Prea mare - zgomot, uzură", color: "text-red-400" };
  };

  const vEval = evaluareViteza(calcule.v);

  return (
    <div className="space-y-6">
      <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
        <p className="text-purple-200 text-sm">
          <span className="font-bold">⚡ Calcul Debit / Diametru / Viteză</span> — 
          Relația fundamentală Q = v × A pentru dimensionarea conductelor.
        </p>
      </div>

      {/* Selectare mod calcul */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { id: "debit", label: "Calculează DEBIT" },
          { id: "diametru", label: "Calculează DIAMETRU" },
          { id: "viteza", label: "Calculează VITEZĂ" },
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => setModCalcul(m.id as typeof modCalcul)}
            className={`p-3 rounded-lg text-sm font-medium transition-colors ${
              modCalcul === m.id
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* Date de intrare */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Date de intrare</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Viteză - input sau rezultat */}
          <div className={modCalcul === "viteza" ? "opacity-50" : ""}>
            <label className="block text-sm text-gray-400 mb-1">
              Viteză v [m/s] {modCalcul === "viteza" && "(rezultat)"}
            </label>
            {modCalcul !== "viteza" ? (
              <input
                type="number"
                value={viteza}
                onChange={(e) => setViteza(Number(e.target.value))}
                min="0.1"
                max="5"
                step="0.1"
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              />
            ) : (
              <div className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-purple-400 font-bold">
                {calcule.v.toFixed(2)}
              </div>
            )}
            
            {/* Preset viteze */}
            <div className="flex gap-1 mt-2">
              {[0.5, 0.8, 1.0, 1.2, 1.5].map((v) => (
                <button
                  key={v}
                  onClick={() => setViteza(v)}
                  disabled={modCalcul === "viteza"}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-30 rounded text-xs"
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Diametru - input sau rezultat */}
          <div className={modCalcul === "diametru" ? "opacity-50" : ""}>
            <label className="block text-sm text-gray-400 mb-1">
              Diametru d [mm] {modCalcul === "diametru" && "(rezultat)"}
            </label>
            {modCalcul !== "diametru" ? (
              <select
                value={diametru}
                onChange={(e) => setDiametru(Number(e.target.value))}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              >
                {diametreStandard.map((d) => (
                  <option key={d} value={d}>DN {d}</option>
                ))}
              </select>
            ) : (
              <div className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-purple-400 font-bold">
                {calcule.d.toFixed(1)} mm
              </div>
            )}
          </div>

          {/* Debit - input sau rezultat */}
          <div className={modCalcul === "debit" ? "opacity-50" : ""}>
            <label className="block text-sm text-gray-400 mb-1">
              Debit Q [m³/h] {modCalcul === "debit" && "(rezultat)"}
            </label>
            {modCalcul !== "debit" ? (
              <input
                type="number"
                value={debit}
                onChange={(e) => setDebit(Number(e.target.value))}
                min="0.1"
                step="0.1"
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              />
            ) : (
              <div className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-purple-400 font-bold">
                {calcule.Q.toFixed(2)}
              </div>
            )}
            <p className="text-xs text-gray-500 mt-1">
              {(calcule.Q * 1000 / 3600).toFixed(2)} l/s = {calcule.Q.toFixed(2)} m³/h
            </p>
          </div>
        </div>
      </div>

      {/* Rezultate principale */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-700/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-purple-400">Rezultate</h3>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-800/50 rounded p-4 border border-gray-700 text-center">
            <p className="text-gray-400 text-sm mb-1">Debit Q</p>
            <p className={`text-2xl font-bold ${modCalcul === "debit" ? "text-purple-400" : "text-white"}`}>
              {calcule.Q.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">m³/h</p>
          </div>

          <div className="bg-gray-800/50 rounded p-4 border border-gray-700 text-center">
            <p className="text-gray-400 text-sm mb-1">Diametru d</p>
            <p className={`text-2xl font-bold ${modCalcul === "diametru" ? "text-purple-400" : "text-white"}`}>
              {calcule.d.toFixed(1)}
            </p>
            <p className="text-xs text-gray-500">mm</p>
          </div>

          <div className="bg-gray-800/50 rounded p-4 border border-gray-700 text-center">
            <p className="text-gray-400 text-sm mb-1">Viteză v</p>
            <p className={`text-2xl font-bold ${modCalcul === "viteza" ? "text-purple-400" : vEval.color}`}>
              {calcule.v.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500">m/s</p>
          </div>
        </div>

        {/* Evaluare viteză */}
        <div className="mt-4 p-3 bg-gray-800/50 rounded border border-gray-700">
          <p className="text-sm">
            <span className="text-gray-400">Evaluare viteză: </span>
            <span className={`font-bold ${vEval.color}`}>{vEval.text}</span>
          </p>
        </div>

        {/* Recomandare diametru */}
        {diametruRecomandat && (
          <div className="mt-4 p-3 bg-green-900/30 rounded border border-green-700">
            <p className="text-sm text-green-200">
              <span className="font-bold">💡 Recomandare: </span>
              Folosiți diametrul standard DN {diametruRecomandat} mm (DN {Math.floor(calcule.d)} nu este standard)
            </p>
          </div>
        )}
      </div>

      {/* Tabel viteze recomandate */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Viteze recomandate:</h4>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {Object.entries(vitezeRec).map(([tip, val]) => (
            <div key={tip} className="p-2 bg-gray-800 rounded">
              <p className="text-gray-400 capitalize">{tip}:</p>
              <p className="text-cyan-400">
                {val.min} - {val.max} m/s
              </p>
              <p className="text-xs text-gray-500">Optim: {val.optimal} m/s</p>
            </div>
          ))}
        </div>
      </div>
                {/* BUTON EXPORT */}
      <div className="mt-6">
        <button
          onClick={handleExport}
          className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg transition-colors font-medium"
        >
          📥 Descarcă calcul (.txt)
        </button>
      </div>
      <div className="p-3 bg-gray-800/50 rounded border border-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Formulă:</strong> Q = v × A = v × (π × d² / 4)<br/>
          • Q [m³/s] = v [m/s] × A [m²]<br/>
          • Pentru Q în m³/h și d în mm: Q = 0.0036 × v × π × d²<br/>
          • Aria secțiunii: A = π × d² / 4 = 0.785 × d²
        </p>
      </div>
    </div>
  );
}