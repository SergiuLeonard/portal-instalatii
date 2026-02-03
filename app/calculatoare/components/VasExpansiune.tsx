"use client";
import { useCallback } from "react";
import { useState, useMemo } from "react";

export default function VasExpansiune() {
  const [volumInstalatie, setVolumInstalatie] = useState(1000);
  const [tempTur, setTempTur] = useState(80);
  const [tempRetur, setTempRetur] = useState(60);
  const [presiuneStatica, setPresiuneStatica] = useState(20);
  const [presiuneMaxima, setPresiuneMaxima] = useState(60);

  const calcule = useMemo(() => {
    const deltaT = tempTur - 10;
    const coefDilatare = 0.00045 * deltaT + 0.000002 * Math.pow(deltaT, 2);
    const volumDilatare = volumInstalatie * coefDilatare;
    const Pm = presiuneMaxima / 10;
    const Pi = presiuneStatica / 10;
    const factorSiguranta = 1.2;
    const volumVas = (volumDilatare * (Pm + 1) / (Pm - Pi + 0.1)) * factorSiguranta;
    const presiunePreincarcare = Math.max(0.5, Pi - 0.5);

    return {
      coefDilatare,
      volumDilatare,
      volumVas,
      presiunePreincarcare,
      recomandare: Math.ceil(volumVas / 50) * 50,
    };
  }, [volumInstalatie, tempTur, tempRetur, presiuneStatica, presiuneMaxima]);

  // =========================
  // EXPORT TXT
  // =========================
  const handleExport = useCallback(() => {
    const data = new Date().toLocaleDateString("ro-RO");

    const txt = `
DIMENSIONARE VAS EXPANSIUNE
============================
Data: ${data}

DATE DE INTRARE
---------------
Volum instalație: ${volumInstalatie} L
Temperatură tur: ${tempTur}°C
Temperatură retur: ${tempRetur}°C
Presiune statică minimă: ${presiuneStatica} mH₂O (${(presiuneStatica / 10).toFixed(1)} bar)
Presiune maximă admisă: ${presiuneMaxima} mH₂O (${(presiuneMaxima / 10).toFixed(1)} bar)

CALCULE INTERMEDIARE
--------------------
Coeficient dilatare: β = ${calcule.coefDilatare.toFixed(5)} (${(calcule.coefDilatare * 100).toFixed(2)}%)
Volum dilatare: Vd = ${calcule.volumDilatare.toFixed(1)} L
Presiune preîncărcare: ${calcule.presiunePreincarcare.toFixed(1)} bar

FORMULA
-------
Vvas = Vd × (Pm + 1) / (Pm - Pi) × 1.2
Unde: Pm = presiune max (bar), Pi = presiune statică (bar)

REZULTAT
--------
VOLUM VAS EXPANSIUNE NECESAR: ${Math.ceil(calcule.volumVas / 10) * 10} L
                              (calculat: ${calcule.volumVas.toFixed(1)} L)

Recomandare: vas cu membrană, presiune preîncărcare ${calcule.presiunePreincarcare.toFixed(1)} bar
Conform Normativ C 107 / STAS
============================
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `vas_expansiune_${data.replace(/\./g, "-")}.txt`;
    a.click();
  }, [volumInstalatie, tempTur, tempRetur, presiuneStatica, presiuneMaxima, calcule]);

  const estimareDinPutere = (kW: number) => {
    const litri = kW * 12;
    setVolumInstalatie(litri);
  };

  return (
    // ... restul JSX-ului rămâne la fel
    // Asigurați-vă că butonul cu onClick={handleExport} este prezent
  );
}

  return (
    <div className="space-y-6">
      <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
        <p className="text-green-200 text-sm">
          <span className="font-bold">🫗 Dimensionare Vas Expansiune</span> — 
          Calcul simplificat pentru vase de expansiune cu membrană.
          Conform metodei practice din Normativul C 107.
        </p>
      </div>

      {/* Estimare rapidă */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-2">Estimare rapidă din putere instalată:</h4>
        <div className="flex gap-2 flex-wrap">
          {[100, 500, 1000, 2000, 3000].map((kw) => (
            <button
              key={kw}
              onClick={() => estimareDinPutere(kw)}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-cyan-300"
            >
              {kw} kW → ~{kw * 12} L
            </button>
          ))}
        </div>
      </div>

      {/* Date de intrare */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">Date de intrare</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Volum instalație [L]</label>
            <input
              type="number"
              value={volumInstalatie}
              onChange={(e) => setVolumInstalatie(Number(e.target.value))}
              min="100"
              step="50"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
            <p className="text-xs text-gray-500 mt-1">Tipic: 10-15 L/kW pentru încălzire</p>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Temperatură tur [°C]</label>
            <input
              type="number"
              value={tempTur}
              onChange={(e) => setTempTur(Number(e.target.value))}
              min="40"
              max="95"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Temperatură retur [°C]</label>
            <input
              type="number"
              value={tempRetur}
              onChange={(e) => setTempRetur(Number(e.target.value))}
              min="30"
              max="80"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Presiune statică minimă [mH₂O]</label>
            <input
              type="number"
              value={presiuneStatica}
              onChange={(e) => setPresiuneStatica(Number(e.target.value))}
              min="5"
              step="1"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
            <p className="text-xs text-gray-500 mt-1">Coloană apă până la cel mai înalt punct</p>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Presiune maximă admisă [mH₂O]</label>
            <input
              type="number"
              value={presiuneMaxima}
              onChange={(e) => setPresiuneMaxima(Number(e.target.value))}
              min="30"
              step="5"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
            <p className="text-xs text-gray-500 mt-1">Limita echipamentelor (60 mH₂O ≈ 6 bar)</p>
          </div>
        </div>
      </div>

      {/* Rezultate */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-green-700/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-green-400">Rezultate</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800/50 rounded p-3 border border-gray-700">
            <p className="text-gray-400 text-xs">Coef. dilatare</p>
            <p className="text-xl font-bold text-blue-400">
              {calcule.coefDilatare.toFixed(4)}
            </p>
            <p className="text-xs text-gray-500">{(calcule.coefDilatare * 100).toFixed(2)}%</p>
          </div>

          <div className="bg-gray-800/50 rounded p-3 border border-gray-700">
            <p className="text-gray-400 text-xs">Volum dilatare Vd</p>
            <p className="text-xl font-bold text-orange-400">
              {calcule.volumDilatare.toFixed(1)} L
            </p>
          </div>

          <div className="bg-gray-800/50 rounded p-3 border border-gray-700">
            <p className="text-gray-400 text-xs">Presiune preîncărcare</p>
            <p className="text-xl font-bold text-yellow-400">
              {calcule.presiunePreincarcare.toFixed(1)} bar
            </p>
            <p className="text-xs text-gray-500">≈ {(calcule.presiunePreincarcare * 10).toFixed(0)} mH₂O</p>
          </div>

          <div className="bg-green-900/30 rounded p-3 border border-green-600">
            <p className="text-gray-400 text-xs">Volum VAS NECESAR</p>
            <p className="text-2xl font-bold text-green-400">
              {Math.ceil(calcule.volumVas / 10) * 10} L
            </p>
            <p className="text-xs text-gray-500">Recomandat: {calcule.recomandare} L</p>
          </div>
        </div>

        {/* Avertismente */}
        {presiuneMaxima <= presiuneStatica && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded text-sm text-red-200">
            ⚠️ Eroare: Presiunea maximă trebuie să fie mai mare decât presiunea statică!
          </div>
        )}
        {calcule.volumVas > 5000 && (
          <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700 rounded text-sm text-yellow-200">
            ℹ️ Pentru volume mari, se pot monta mai multe vase în paralel.
          </div>
        )}
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
          <strong>Formulă simplificată:</strong><br/>
          Vd = Vinst × β (coeficient dilatare)<br/>
          Vvas = Vd × (Pm + 1) / (Pm - Pi) × 1.2<br/>
          • β ≈ 0.034 pentru Δt = 80°C (încălzire)<br/>
          • β ≈ 0.043 pentru Δt = 100°C<br/>
          • Presiune preîncărcare = Pi - 0.5 bar (min 0.5 bar)
        </p>
      </div>
    </div>
  );
}