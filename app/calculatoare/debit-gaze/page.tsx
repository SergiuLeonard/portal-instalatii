"use client";

import { useState, useMemo } from "react";
import CalculatorLayout from "../components/ui/CalculatorLayout";
import { InputField } from "../components/ui/InputField";
import { ResultCard } from "../components/ui/ResultCard";
import { AlertCircle, Flame } from "lucide-react";

type AparatGaze = {
  nume: string;
  putere: number; // kW
  randament: number; // %
  tip: "instant" | "centrala" | "plita" | "uscator";
};

const APARATE_PREDEFINITE: AparatGaze[] = [
  { nume: "Centrală termică 24kW", putere: 24, randament: 92, tip: "centrala" },
  { nume: "Plită gaz 4 arzătoare", putere: 7.5, randament: 60, tip: "plita" },
  { nume: "Boiler instant 11L/min", putere: 22, randament: 85, tip: "instant" },
  { nume: "Uscător rufe", putere: 3, randament: 80, tip: "uscator" },
];

export default function CalculatorDebitGaze() {
  const [aparate, setAparate] = useState<AparatGaze[]>([
    { nume: "Centrală", putere: 24, randament: 92, tip: "centrala" },
  ]);
  const [simultanitate, setSimultanitate] = useState<number>(0.8);

  const rezultate = useMemo(() => {
    // Putere totală instalată (suma tuturor aparatelor)
    const putereTotalaInstalata = aparate.reduce((sum, a) => sum + a.putere, 0);
    
    // Putere utilă totală (considerând randament)
    const putereUtilaTotala = aparate.reduce(
      (sum, a) => sum + (a.putere * a.randament) / 100,
      0
    );

    // Coeficient de simultaneitate (din tabele I5 sau calculat)
    // Pentru locuințe: 0.8-1.0 pentru 1-2 aparate, scade la 0.4 pentru 5+
    let coefSimultanitate: number;
    if (aparate.length === 1) coefSimultanitate = 1.0;
    else if (aparate.length === 2) coefSimultanitate = 0.9;
    else if (aparate.length <= 4) coefSimultanitate = 0.8;
    else coefSimultanitate = 0.6;

    // Putere de calcul = Putere instalată × coef simultanitate
    const putereCalcul = putereTotalaInstalata * simultanitate;

    // Debit de gaz: Q = P / (Hi × η) [m³/h]
    // Hi (puteri calorifice inferioare): gaz natural ≈ 10 kWh/m³
    const Hi = 10; // kWh/m³ (gaz natural tipic)
    
    const debitGaz = putereCalcul / Hi; // m³/h
    const debitGazLs = (debitGaz * 1000) / 3600; // l/s

    // Debit aer combustie (teoretic) ≈ 10 × debit gaz pentru gaz natural
    const debitAer = debitGaz * 10; // m³/h

    return {
      putereTotalaInstalata,
      putereUtilaTotala,
      putereCalcul: Math.round(putereCalcul * 10) / 10,
      debitGaz: Math.round(debitGaz * 100) / 100,
      debitGazL: Math.round(debitGazLs * 1000) / 1000,
      debitAer: Math.round(debitAer * 10) / 10,
      coefSimultanitate,
    };
  }, [aparate, simultanitate]);

  const adaugaAparat = (predefinit?: AparatGaze) => {
    if (predefinit) {
      setAparate([...aparate, { ...predefinit }]);
    } else {
      setAparate([...aparate, { nume: "Nou aparat", putere: 10, randament: 80, tip: "instant" }]);
    }
  };

  const updateAparat = (index: number, field: keyof AparatGaze, value: any) => {
    const newAparate = [...aparate];
    newAparate[index] = { ...newAparate[index], [field]: value };
    setAparate(newAparate);
  };

  const stergeAparat = (index: number) => {
    setAparate(aparate.filter((_, i) => i !== index));
  };

  return (
    <CalculatorLayout
      title="Calculator Debit Gaze Naturale"
      breviarCode="BG-01"
      description="Dimensionarea instalațiilor de gaze: calcul debit funcție de puterea instalată, coeficient de simultaneitate și putere calorifică a gazului."
      backLink="/KnowledgeBase?tab=breviare"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Lista Aparate */}
        <div className="space-y-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" />
                Aparate Consumatoare
              </h2>
              <span className="text-sm text-gray-500">{aparate.length} aparate</span>
            </div>

            <div className="space-y-3 mb-6">
              {aparate.map((aparat, idx) => (
                <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={aparat.nume}
                      onChange={(e) => updateAparat(idx, "nume", e.target.value)}
                      className="bg-transparent font-medium text-sm w-full focus:outline-none"
                    />
                    <button
                      onClick={() => stergeAparat(idx)}
                      className="text-red-400 hover:text-red-300 text-sm ml-2"
                    >
                      ×
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-500">Putere [kW]</label>
                      <input
                        type="number"
                        value={aparat.putere}
                        onChange={(e) => updateAparat(idx, "putere", parseFloat(e.target.value))}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">Randament [%]</label>
                      <input
                        type="number"
                        value={aparat.randament}
                        onChange={(e) => updateAparat(idx, "randament", parseFloat(e.target.value))}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-2 py-1 text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              {APARATE_PREDEFINITE.map((aparat, idx) => (
                <button
                  key={idx}
                  onClick={() => adaugaAparat(aparat)}
                  className="text-left p-3 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors text-sm"
                >
                  <div className="font-medium text-gray-300">+ {aparat.nume}</div>
                  <div className="text-xs text-gray-500">{aparat.putere} kW</div>
                </button>
              ))}
              <button
                onClick={() => adaugaAparat()}
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg border border-blue-600/30 transition-colors text-sm text-center"
              >
                + Custom
              </button>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="font-semibold mb-4">Parametri Calcul</h3>
            <InputField
              label="Coeficient Simultanitate"
              value={simultanitate}
              onChange={setSimultanitate}
              min={0.3}
              max={1.0}
              step={0.05}
              description="0.6-0.8 pentru locuințe cu multe aparate, 1.0 pentru un singur aparat"
            />
            <div className="mt-4 p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
              <div className="text-sm text-orange-400 font-medium mb-2">Putere Calorifică Gaz</div>
              <div className="text-sm text-gray-400">
                Gaz natural: Hi = 10 kWh/m³ (standard)<br/>
                GPL (propă): Hi = 12.8 kWh/kg
              </div>
            </div>
          </div>
        </div>

        {/* Rezultate */}
        <div className="space-y-6">
          <div className="grid gap-4">
            <ResultCard
              label="Putere Totală Instalată"
              value={rezultate.putereTotalaInstalata}
              unit="kW"
              status="info"
              description="Suma puterilor nominale ale tuturor aparatelor"
            />

            <ResultCard
              label="Putere de Calcul"
              value={rezultate.putereCalcul}
              unit="kW"
              status="ok"
              className={`Pcalc = ${rezultate.putereTotalaInstalata} × ${simultanitate}`}
              description="Putere considerată pentru dimensionare (simultanitate)"
            />

            <div className="grid grid-cols-2 gap-4">
              <ResultCard
                label="Debit Gaz"
                value={rezultate.debitGaz}
                unit="m³/h"
                status={rezultate.debitGaz > 10 ? "warning" : "ok"}
                className={`Q = ${rezultate.putereCalcul} / 10`}
                description="Debit volumic gaz natural"
              />
              <ResultCard
                label="Debit Gaz"
                value={rezultate.debitGazL}
                unit="l/s"
                status="info"
              />
            </div>

            <ResultCard
              label="Debit Aer Combustie"
              value={rezultate.debitAer}
              unit="m³/h"
              status="info"
              className="Vaer ≈ 10 × Vgaz"
              description="Aer teoretic necesar pentru ardere (λ=1)"
            />
          </div>

          {rezultate.debitGaz > 6 && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-400">Debit ridicat detectat</h4>
                <p className="text-sm text-gray-300 mt-1">
                  Debitul de {rezultate.debitGaz} m³/h depășește tipicul pentru o locuință individuală. 
                  Verificați dacă este necesară o branșament separat sau presiunea de lucru.
                </p>
              </div>
            </div>
          )}

          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="font-semibold mb-4">Formule utilizate (Normativul I5)</h3>
            <div className="space-y-3 text-sm text-gray-400 font-mono">
              <div className="p-3 bg-black/30 rounded">
                <div className="text-blue-400 mb-1">Debit gaz [m³/h]:</div>
                Q<sub>n</sub> = ΣP<sub>inst</sub> × k × (1/Hi) × (1/η)
              </div>
              <div className="p-3 bg-black/30 rounded">
                <div className="text-blue-400 mb-1">unde:</div>
                P<sub>inst</sub> = Putere instalată [kW]<br/>
                k = Coeficient simultaneitate [-]<br/>
                Hi = Putere calorifică inferioară [kWh/m³]<br/>
                η = Randament arzător [-]
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}