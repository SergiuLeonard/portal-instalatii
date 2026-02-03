"use client";

import { useState, useMemo, useCallback } from "react";

// =========================
// CONSTANTE ȘI TIPURI
// =========================

// Tipuri de pardoseală cu rezistențe termice
const TIPURI_PARDOSEALA = {
  parchet: { nume: "Parchet (8-12mm)", R: 0.1, qMax: 100 },
  gresie: { nume: "Gresie/Gresogranit", R: 0.02, qMax: 120 },
  marmura: { nume: "Marmură/Piatră", R: 0.01, qMax: 120 },
  mocheta: { nume: "Mochetă (max 4mm)", R: 0.15, qMax: 80 },
  laminat: { nume: "Parchet laminat", R: 0.08, qMax: 100 },
} as const;

// Diametre tevi disponibile
const DIAMETRE_TEVI = {
  "16x2": { nume: "PE-RT 16x2.0mm", dInt: 12, pasMin: 10, pasMax: 30 },
  "17x2": { nume: "PE-RT 17x2.0mm", dInt: 13, pasMax: 30 },
  "20x2": { nume: "PE-RT 20x2.0mm", dInt: 16, pasMax: 35 },
} as const;

// Coeficienți de corecție pentru temperaturi
const CORECTII_TEMPERATURA = {
  tur45: { nume: "45/35°C (scăzută)", coef: 1.0 },
  tur50: { nume: "50/40°C (mediu)", coef: 1.15 },
  tur55: { nume: "55/45°C (ridicat)", coef: 1.3 },
} as const;

// Lungime maximă circuit (m)
const LUNGIME_MAX_CIRCUIT = 120;

interface Incapere {
  id: string;
  nume: string;
  suprafata: number;
  tipPardoseala: keyof typeof TIPURI_PARDOSEALA;
  tempInterioara: number;
  temperaturaSol: number;
  coeficientPierderi: number; // pentru spații adiacente neîncălzite
}

export default function NecIncalzirePardoseala() {
  // =========================
  // STATE
  // =========================
  
  const [dateGenerale, setDateGenerale] = useState({
    temperaturaTur: 45,
    temperaturaRetur: 35,
    temperaturaSol: 10,
    diametruTeava: "16x2" as keyof typeof DIAMETRE_TEVI,
  });

  const [incaperi, setIncaperi] = useState<Incapere[]>([
    {
      id: "1",
      nume: "Living",
      suprafata: 25,
      tipPardoseala: "parchet",
      tempInterioara: 22,
      temperaturaSol: 10,
      coeficientPierderi: 1.0,
    },
    {
      id: "2",
      nume: "Dormitor",
      suprafata: 15,
      tipPardoseala: "parchet",
      tempInterioara: 20,
      temperaturaSol: 10,
      coeficientPierderi: 1.0,
    },
  ]);

  // =========================
  // CALCULE
  // =========================

  const calculePerIncapere = useMemo(() => {
    return incaperi.map((inc) => {
      const pardoseala = TIPURI_PARDOSEALA[inc.tipPardoseala];
      const dTeava = DIAMETRE_TEVI[dateGenerale.diametruTeava];
      
      // Calcul necesar căldură specific
      // q = (ti - tsol) / Rpardoseala * coefPierderi
      const qNecesar = ((inc.tempInterioara - inc.temperaturaSol) / pardoseala.R) * inc.coeficientPierderi;
      
      // Ajustare pentru temperatura agentului termic
      const deltaTemp = dateGenerale.temperaturaTur - dateGenerale.temperaturaRetur;
      const tempMedie = (dateGenerale.temperaturaTur + dateGenerale.temperaturaRetur) / 2;
      const tempSuprafata = tempMedie - (qNecesar * pardoseala.R);
      
      // Verificare limitări
      const qMaxAdmisibil = pardoseala.qMax;
      const esteValid = qNecesar <= qMaxAdmisibil && tempSuprafata <= 29;
      
      // Calcul debit și lungime teavă
      // Q = q * A
      const Qtotal = qNecesar * inc.suprafata;
      
      // Lungime teavă estimată: suprafață / (pas/100) + 10% pierderi
      const pasRecomandat = qNecesar > 80 ? 10 : qNecesar > 60 ? 15 : 20;
      const lungimeTeava = (inc.suprafata / (pasRecomandat / 100)) * 1.1;
      
      // Număr circuite necesar
      const nrCircuite = Math.ceil(lungimeTeava / LUNGIME_MAX_CIRCUIT);
      
      return {
        ...inc,
        qNecesar,
        Qtotal,
        tempSuprafata,
        pasRecomandat,
        lungimeTeava,
        nrCircuite,
        esteValid,
        qMaxAdmisibil,
      };
    });
  }, [incaperi, dateGenerale]);

  const totaluri = useMemo(() => {
    const suprafataTotala = incaperi.reduce((sum, inc) => sum + inc.suprafata, 0);
    const qMediu = calculePerIncapere.reduce((sum, calc) => sum + calc.Qtotal, 0) / suprafataTotala || 0;
    const Qtotal = calculePerIncapere.reduce((sum, calc) => sum + calc.Qtotal, 0);
    const lungimeTotalaTeava = calculePerIncapere.reduce((sum, calc) => sum + calc.lungimeTeava, 0);
    const nrTotalCircuite = calculePerIncapere.reduce((sum, calc) => sum + calc.nrCircuite, 0);
    
    // Materiale estimate
    const placiNuturi = Math.ceil(suprafataTotala / 1.12); // placa 1.4x0.8 = 1.12mp
    const benziPerimetrale = Math.ceil(suprafataTotala * 0.15); // 15% din suprafață ca perimetru
    
    // Distribuitori: max 12 circuite per distribuitor
    const nrDistribuitori = Math.ceil(nrTotalCircuite / 12);
    
    return {
      suprafataTotala,
      qMediu,
      Qtotal,
      lungimeTotalaTeava,
      nrTotalCircuite,
      placiNuturi,
      benziPerimetrale,
      nrDistribuitori,
    };
  }, [incaperi, calculePerIncapere]);

  // =========================
  // FUNCȚII HANDLERS
  // =========================

  const adaugaIncapere = () => {
    const newId = String(Date.now());
    setIncaperi([
      ...incaperi,
      {
        id: newId,
        nume: `Încăpere ${incaperi.length + 1}`,
        suprafata: 15,
        tipPardoseala: "parchet",
        tempInterioara: 20,
        temperaturaSol: 10,
        coeficientPierderi: 1.0,
      },
    ]);
  };

  const stergeIncapere = (id: string) => {
    setIncaperi(incaperi.filter((inc) => inc.id !== id));
  };

  const actualizeazaIncapere = (id: string, field: keyof Incapere, value: string | number) => {
    setIncaperi(
      incaperi.map((inc) => {
        if (inc.id !== id) return inc;
        return { ...inc, [field]: value };
      })
    );
  };

  // =========================
  // EXPORT TXT
  // =========================

  const handleExport = useCallback(() => {
    const data = new Date().toLocaleDateString("ro-RO");
    
    let incaperiTxt = "";
    calculePerIncapere.forEach((calc, idx) => {
      incaperiTxt += `
${idx + 1}. ${calc.nume}
   Suprafață: ${calc.suprafata.toFixed(1)} m²
   Tip pardoseală: ${TIPURI_PARDOSEALA[calc.tipPardoseala].nume}
   Temp. interior: ${calc.tempInterioara}°C
   q necesar: ${calc.qNecesar.toFixed(1)} W/m² ${!calc.esteValid ? "⚠️ DEPĂȘEȘTE LIMITA!" : ""}
   Q total: ${calc.Qtotal.toFixed(1)} W
   Temp. suprafață: ${calc.tempSuprafata.toFixed(1)}°C
   Pas recomandat: ${calc.pasRecomandat} cm
   Lungime țeavă: ${calc.lungimeTeava.toFixed(1)} m
   Circuite necesare: ${calc.nrCircuite}
`;
    });

    const txt = `
CALCUL ÎNCĂLZIRE PRIN PARDOSEALĂ
=================================
Data: ${data}

DATE GENERALE
-------------
Temperatură tur/retur: ${dateGenerale.temperaturaTur}/${dateGenerale.temperaturaRetur}°C
Temperatură sol: ${dateGenerale.temperaturaSol}°C
Diametru țeavă: ${DIAMETRE_TEVI[dateGenerale.diametruTeava].nume}

LISTA ÎNCĂPERI
--------------
${incaperiTxt}

TOTALURI
--------
Suprafață totală: ${totaluri.suprafataTotala.toFixed(1)} m²
Necesar căldură total: ${totaluri.Qtotal.toFixed(1)} W
Debit specific mediu: ${totaluri.qMediu.toFixed(1)} W/m²
Lungime totală țeavă: ${totaluri.lungimeTotalaTeava.toFixed(1)} m
Număr total circuite: ${totaluri.nrTotalCircuite}

ESTIMARE MATERIALE
------------------
Țeavă ${DIAMETRE_TEVI[dateGenerale.diametruTeava].nume}: ${Math.ceil(totaluri.lungimeTotalaTeava)} m
Plăci cu nuturi: ${totaluri.placiNuturi} buc (~${totaluri.placiNuturi * 1.12} m²)
Benzi perimetrale: ${totaluri.benziPerimetrale} m
Distribuitori-colectoare: ${totaluri.nrDistribuitori} buc (${totaluri.nrTotalCircuite} circuite)

RECOMANDĂRI
-----------
• Pas de montaj: 10 cm pentru q > 80 W/m²
• Pas de montaj: 15 cm pentru q = 60-80 W/m²  
• Pas de montaj: 20 cm pentru q < 60 W/m²
• Lungime max. circuit: ${LUNGIME_MAX_CIRCUIT} m
• Temp. suprafață max: 29°C (confort)
• Temp. suprafață max: 35°C (zone perimetrale)

Conform Normativ C 107-4 / EN 1264
==================================
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `incalzire_pardoseala_${data.replace(/\./g, "-")}.txt`;
    a.click();
  }, [calculePerIncapere, totaluri, dateGenerale, incaperi]);

  // =========================
  // RENDER
  // =========================

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
        <p className="text-amber-200 text-sm">
          <span className="font-bold">🔥 Calculator Încălzire prin Pardoseală</span> — 
          Calcul necesar de căldură și dimensionare sisteme încălzire în pardoseală.
          Conform Normativ C 107-4 și EN 1264.
        </p>
      </div>

      {/* Date generale */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">⚙️ Parametri Sistem</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Temp. tur [°C]</label>
            <input
              type="number"
              value={dateGenerale.temperaturaTur}
              onChange={(e) => setDateGenerale({ ...dateGenerale, temperaturaTur: Number(e.target.value) })}
              min="35"
              max="60"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Temp. retur [°C]</label>
            <input
              type="number"
              value={dateGenerale.temperaturaRetur}
              onChange={(e) => setDateGenerale({ ...dateGenerale, temperaturaRetur: Number(e.target.value) })}
              min="25"
              max="50"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Temp. sol [°C]</label>
            <input
              type="number"
              value={dateGenerale.temperaturaSol}
              onChange={(e) => setDateGenerale({ ...dateGenerale, temperaturaSol: Number(e.target.value) })}
              min="0"
              max="20"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Țeavă</label>
            <select
              value={dateGenerale.diametruTeava}
              onChange={(e) => setDateGenerale({ ...dateGenerale, diametruTeava: e.target.value as keyof typeof DIAMETRE_TEVI })}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            >
              {Object.entries(DIAMETRE_TEVI).map(([key, val]) => (
                <option key={key} value={key}>{val.nume}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gray-800/50 rounded text-sm">
          <span className="text-gray-400">Diferență temperaturi: </span>
          <span className="text-cyan-400 font-bold">
            Δt = {dateGenerale.temperaturaTur - dateGenerale.temperaturaRetur} K
          </span>
          <span className="text-gray-400 ml-4">Temperatură medie: </span>
          <span className="text-cyan-400 font-bold">
            {(dateGenerale.temperaturaTur + dateGenerale.temperaturaRetur) / 2}°C
          </span>
        </div>
      </div>

      {/* Lista încăperi */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">🏠 Încăperi</h3>
          <button
            onClick={adaugaIncapere}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white text-sm transition-colors"
          >
            + Adaugă Încăpere
          </button>
        </div>

        <div className="space-y-3">
          {incaperi.map((inc, index) => {
            const calc = calculePerIncapere.find((c) => c.id === inc.id);
            return (
              <div
                key={inc.id}
                className={`p-4 rounded-lg border ${
                  calc?.esteValid ? "bg-gray-800/50 border-gray-700" : "bg-red-900/20 border-red-700/50"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-end">
                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-400 mb-1">Denumire</label>
                    <input
                      type="text"
                      value={inc.nume}
                      onChange={(e) => actualizeazaIncapere(inc.id, "nume", e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Suprafață [m²]</label>
                    <input
                      type="number"
                      value={inc.suprafata}
                      onChange={(e) => actualizeazaIncapere(inc.id, "suprafata", Number(e.target.value))}
                      min="1"
                      step="0.5"
                      className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Pardoseală</label>
                    <select
                      value={inc.tipPardoseala}
                      onChange={(e) => actualizeazaIncapere(inc.id, "tipPardoseala", e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                    >
                      {Object.entries(TIPURI_PARDOSEALA).map(([key, val]) => (
                        <option key={key} value={key}>{val.nume}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1">Temp. int. [°C]</label>
                    <input
                      type="number"
                      value={inc.tempInterioara}
                      onChange={(e) => actualizeazaIncapere(inc.id, "tempInterioara", Number(e.target.value))}
                      min="15"
                      max="28"
                      className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <label className="block text-xs text-gray-400 mb-1">Coef. pierderi</label>
                      <input
                        type="number"
                        value={inc.coeficientPierderi}
                        onChange={(e) => actualizeazaIncapere(inc.id, "coeficientPierderi", Number(e.target.value))}
                        min="0.5"
                        max="2"
                        step="0.1"
                        className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                      />
                    </div>
                    <button
                      onClick={() => stergeIncapere(inc.id)}
                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded"
                      title="Șterge"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* Rezultate per încăpere */}
                {calc && (
                  <div className="mt-3 pt-3 border-t border-gray-700 grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">q = </span>
                      <span className={calc.qNecesar > calc.qMaxAdmisibil ? "text-red-400 font-bold" : "text-cyan-400"}>
                        {calc.qNecesar.toFixed(1)} W/m²
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500">Q = </span>
                      <span className="text-cyan-400">{calc.Qtotal.toFixed(1)} W</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Pas = </span>
                      <span className="text-green-400">{calc.pasRecomandat} cm</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Țeavă = </span>
                      <span className="text-orange-400">{calc.lungimeTeava.toFixed(1)} m</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Circuite = </span>
                      <span className="text-purple-400">{calc.nrCircuite}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {incaperi.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            Adăugați încăperi pentru a calcula necesarul de căldură.
          </p>
        )}
      </div>

      {/* Totaluri și materiale */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-700/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-cyan-400">📊 Totaluri și Materiale Estimate</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Suprafață totală</p>
            <p className="text-2xl font-bold text-cyan-400">{totaluri.suprafataTotala.toFixed(1)} m²</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Q total necesar</p>
            <p className="text-2xl font-bold text-orange-400">{totaluri.Qtotal.toFixed(1)} W</p>
            <p className="text-xs text-gray-500">≈ {(totaluri.Qtotal / 1000).toFixed(2)} kW</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm">Debit specific mediu</p>
            <p className="text-2xl font-bold text-blue-400">{totaluri.qMediu.toFixed(1)} W/m²</p>
          </div>
          
          <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-600">
            <p className="text-gray-400 text-sm">Circuite totale</p>
            <p className="text-3xl font-bold text-cyan-400">{totaluri.nrTotalCircuite}</p>
          </div>
        </div>

        {/* Materiale */}
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">Estimare materiale:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-gray-800/50 rounded">
              <p className="text-xs text-gray-500">Țeavă {DIAMETRE_TEVI[dateGenerale.diametruTeava].nume}</p>
              <p className="text-lg font-bold text-green-400">{Math.ceil(totaluri.lungimeTotalaTeava)} m</p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded">
              <p className="text-xs text-gray-500">Plăci cu nuturi</p>
              <p className="text-lg font-bold text-green-400">{totaluri.placiNuturi} buc</p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded">
              <p className="text-xs text-gray-500">Benzi perimetrale</p>
              <p className="text-lg font-bold text-green-400">{totaluri.benziPerimetrale} m</p>
            </div>
            <div className="p-3 bg-gray-800/50 rounded">
              <p className="text-xs text-gray-500">Distribuitori</p>
              <p className="text-lg font-bold text-green-400">{totaluri.nrDistribuitori} buc</p>
            </div>
          </div>
        </div>

        {/* Avertismente */}
        {calculePerIncapere.some(c => !c.esteValid) && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded text-sm text-red-200">
            ⚠️ Unele încăperi depășesc limitele admisibile (q max sau temp. suprafață). 
            Reduceți temperatura tur sau adăugați încăperea pe 2 circuite.
          </div>
        )}

        {/* BUTON EXPORT */}
        <div className="mt-6">
          <button
            onClick={handleExport}
            className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg transition-colors font-medium"
          >
            📥 Descarcă calcul (.txt)
          </button>
        </div>
      </div>

      <div className="p-3 bg-gray-800/50 rounded border border-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Formule utilizate:</strong><br/>
          • q = (ti - tsol) / Rp × coefPierderi [W/m²]<br/>
          • Q = q × A [W]<br/>
          • Lungime țeavă = A / (pas/100) × 1.1 [m]<br/>
          • Circuite = Lungime / {LUNGIME_MAX_CIRCUIT} m (rotunjit sus)<br/>
          • Temp. suprafață = tm - (q × Rp) [°C]<br/>
          • Conform EN 1264 / Normativ C 107-4
        </p>
      </div>
    </div>
  );
}