"use client";

import { useState, useMemo } from "react";

// Categorii de conversie
const CATEGORII = {
  presiune: {
    nume: "Presiune",
    unitati: {
      Pa: { nume: "Pascal (Pa)", factor: 1 },
      bar: { nume: "Bar", factor: 100000 },
      atm: { nume: "Atmosferă (atm)", factor: 101325 },
      mH2O: { nume: "mH₂O", factor: 9806.65 },
      mmHg: { nume: "mmHg (Torr)", factor: 133.322 },
      psi: { nume: "PSI", factor: 6894.757 },
      at: { nume: "at (kgf/cm²)", factor: 98066.5 },
    },
  },
  temperatura: {
    nume: "Temperatură",
    unitati: {
      C: { nume: "°Celsius" },
      F: { nume: "°Fahrenheit" },
      K: { nume: "Kelvin" },
    },
  },
  debit: {
    nume: "Debit / Volum",
    unitati: {
      "m3/h": { nume: "m³/h", factor: 1 },
      "l/s": { nume: "l/s", factor: 3.6 },
      "l/h": { nume: "l/h", factor: 0.001 },
      GPH: { nume: "GPH (US)", factor: 0.00378544 },
      "kg/h": { nume: "kg/h (apă)", factor: 0.001 },
    },
  },
  putere: {
    nume: "Putere / Energie",
    unitati: {
      W: { nume: "Watt", factor: 1 },
      kW: { nume: "kW", factor: 1000 },
      "kcal/h": { nume: "kcal/h", factor: 1.1626 },
      "BTU/h": { nume: "BTU/h", factor: 0.292971 },
      "kcal/s": { nume: "kcal/s", factor: 4186.8 },
    },
  },
  lungime: {
    nume: "Lungime / Diametru",
    unitati: {
      mm: { nume: "mm", factor: 1 },
      cm: { nume: "cm", factor: 10 },
      m: { nume: "m", factor: 1000 },
      tol: { nume: "tol (inch)", factor: 25.4 },
    },
  },
};

export default function Conversii() {
  const [categorie, setCategorie] = useState<keyof typeof CATEGORII>("presiune");
  const [valoare, setValoare] = useState(1);
  const [dinUnitate, setDinUnitate] = useState("bar");
  const [inUnitate, setInUnitate] = useState("mH2O");

  const unitatiCurente = CATEGORII[categorie].unitati;

  // Recalculează unitățile implicite când se schimbă categoria
  useMemo(() => {
    const unitati = Object.keys(unitatiCurente);
    setDinUnitate(unitati[0]);
    setInUnitate(unitati[1] || unitati[0]);
  }, [categorie, unitatiCurente]);

  const rezultat = useMemo(() => {
    const cat = CATEGORII[categorie];
    
    // Temperatură - conversie specială
    if (categorie === "temperatura") {
      let celsius = valoare;
      if (dinUnitate === "F") celsius = (valoare - 32) * 5/9;
      if (dinUnitate === "K") celsius = valoare - 273.15;
      
      if (inUnitate === "C") return celsius;
      if (inUnitate === "F") return celsius * 9/5 + 32;
      if (inUnitate === "K") return celsius + 273.15;
      return celsius;
    }
    
    // Restul - conversie prin factor
    const factorDin = cat.unitati[dinUnitate].factor || 1;
    const factorIn = cat.unitati[inUnitate].factor || 1;
    return (valoare * factorDin) / factorIn;
  }, [categorie, valoare, dinUnitate, inUnitate]);

  // Conversii rapide comune în instalații
  const conversiiRapide = [
    { valoare: 1, din: "bar", in: "mH2O", cat: "presiune" },
    { valoare: 1, din: "atm", in: "bar", cat: "presiune" },
    { valoare: 10, din: "mH2O", in: "Pa", cat: "presiune" },
    { valoare: 1, din: "kW", in: "kcal/h", cat: "putere" },
    { valoare: 1163, din: "W", in: "kcal/h", cat: "putere" },
  ] as const;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
        <p className="text-blue-200 text-sm">
          <span className="font-bold">🔄 Calculator Conversii</span> — 
          Conversions for pressure, temperature, flow, power, and length units used in installations.
          Based on STAS and international standards.
        </p>
      </div>

      {/* Selectare categorie */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {(Object.keys(CATEGORII) as Array<keyof typeof CATEGORII>).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategorie(cat)}
            className={`p-3 rounded-lg text-sm font-medium transition-colors ${
              categorie === cat
                ? "bg-cyan-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {CATEGORII[cat].nume}
          </button>
        ))}
      </div>

      {/* Conversie principală */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">
          {CATEGORII[categorie].nume}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
          {/* Valoare de intrare */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400 mb-1">Valoare</label>
            <input
              type="number"
              value={valoare}
              onChange={(e) => setValoare(Number(e.target.value))}
              step="0.001"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white text-lg"
            />
          </div>

          {/* Unitate de intrare */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400 mb-1">Din</label>
            <select
              value={dinUnitate}
              onChange={(e) => setDinUnitate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            >
              {Object.entries(unitatiCurente).map(([key, unit]) => (
                <option key={key} value={key}>{unit.nume}</option>
              ))}
            </select>
          </div>

          {/* Săgeată */}
          <div className="flex justify-center">
            <span className="text-2xl text-gray-500">→</span>
          </div>

          {/* Unitate de ieșire */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400 mb-1">În</label>
            <select
              value={inUnitate}
              onChange={(e) => setInUnitate(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            >
              {Object.entries(unitatiCurente).map(([key, unit]) => (
                <option key={key} value={key}>{unit.nume}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Rezultat */}
        <div className="mt-6 p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-700/50">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-1">Rezultat</p>
            <p className="text-3xl font-bold text-cyan-400">
              {rezultat.toLocaleString("ro-RO", { maximumFractionDigits: 6 })}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {unitatiCurente[inUnitate as keyof typeof unitatiCurente]?.nume}
            </p>
          </div>
        </div>
      </div>

      {/* Conversii rapide comune */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-3">Conversii rapide frecvente:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {conversiiRapide.map((conv, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCategorie(conv.cat as keyof typeof CATEGORII);
                setValoare(conv.valoare);
                setDinUnitate(conv.din);
                setInUnitate(conv.in);
              }}
              className="text-left p-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition-colors"
            >
              <span className="text-cyan-400">{conv.valoare} {conv.din}</span>
              <span className="text-gray-500"> = </span>
              <span className="text-green-400">
                {((() => {
                  const cat = CATEGORII[conv.cat as keyof typeof CATEGORII];
                  if (conv.cat === "temperatura") return 0;
                  return (conv.valoare * (cat.unitati[conv.din].factor || 1)) / (cat.unitati[conv.in].factor || 1);
                })()).toFixed(3)} {conv.in}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Formule utilizate */}
      <div className="p-3 bg-gray-800/50 rounded border border-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Formule și referințe:</strong><br/>
          • Presiune: 1 bar = 10.197 mH₂O = 0.9869 atm = 14.5 PSI<br/>
          • Temperatură: °F = °C × 9/5 + 32 | K = °C + 273.15<br/>
          • Putere: 1 kW = 860 kcal/h = 3413 BTU/h<br/>
          • Debit: 1 m³/h = 0.278 l/s<br/>
          • Conform STAS și standardelor EN
        </p>
      </div>
    </div>
  );
}