"use client";

import { useState, useMemo, useCallback } from "react";

// Tipuri de elemente constructive cu rezistențe termice R (mp·K/W)
const ELEMENTE_CONSTRUCTIVE = {
  pereti_exteriori: [
    { id: "PE1", nume: "Perete exterior neizolat (cărămidă 30cm)", R: 0.48, k: 1.0 },
    { id: "PE2", nume: "Perete exterior izolat (beton + polistiren 15cm)", R: 4.54, k: 1.0 },
    { id: "PE3", nume: "Perete exterior BCA 25cm + izolație", R: 3.75, k: 1.0 },
  ],
  ferestre: [
    { id: "FE1", nume: "Fereastră simplă", R: 0.17, k: 0.8 },
    { id: "FE2", nume: "Fereastră termopan dublu", R: 0.35, k: 0.8 },
    { id: "FE3", nume: "Fereastră termopan triplu", R: 0.55, k: 0.8 },
  ],
  usi_exterioare: [
    { id: "UE1", nume: "Ușă exterioară lemn", R: 0.25, k: 0.8 },
    { id: "UE2", nume: "Ușă exterioară metalică izolată", R: 0.45, k: 0.8 },
  ],
  plansee: [
    { id: "PL1", nume: "Planșeu pod neizolat", R: 0.48, k: 1.0 },
    { id: "PL2", nume: "Planșeu pod izolat (15cm vată)", R: 3.62, k: 1.0 },
    { id: "PL3", nume: "Terasă izolată", R: 3.66, k: 1.0 },
  ],
  pardoseli: [
    { id: "PPR1", nume: "Pardoseală peste subsol", R: 1.59, k: 1.0 },
    { id: "PPR2", nume: "Pardoseală pe sol", R: 3.02, k: 1.0 },
  ]
} as const;

// Flatten pentru căutare rapidă
const TOATE_ELEMENTELE_FLAT = [
  ...ELEMENTE_CONSTRUCTIVE.pereti_exteriori,
  ...ELEMENTE_CONSTRUCTIVE.ferestre,
  ...ELEMENTE_CONSTRUCTIVE.usi_exterioare,
  ...ELEMENTE_CONSTRUCTIVE.plansee,
  ...ELEMENTE_CONSTRUCTIVE.pardoseli,
];

// Temperaturi exterioare de calcul pe zone climatice (România)
const ZONE_CLIMATICE = [
  { id: "I", nume: "Zona I (ex: Constanța)", te: -12 },
  { id: "II", nume: "Zona II (ex: București)", te: -15 },
  { id: "III", nume: "Zona III (ex: Cluj)", te: -18 },
  { id: "IV", nume: "Zona IV (ex: Brașov)", te: -21 },
] as const;

// Adaosuri pentru orientare
const ADAOSURI_ORIENTARE = {
  "N": 0.05,
  "NE": 0.05,
  "NV": 0.05,
  "E": 0.00,
  "V": 0.00,
  "S": -0.05,
  "SE": -0.05,
  "SV": -0.05,
} as const;

// Tipuri de încăperi cu temperaturi interioare
const TIPURI_INCAPERI = [
  { id: "camera", nume: "Cameră de zi / Dormitor", ti: 20 },
  { id: "baie", nume: "Baie", ti: 24 },
  { id: "bucatarie", nume: "Bucătărie", ti: 18 },
  { id: "hol", nume: "Hol / Coridor", ti: 18 },
  { id: "birou", nume: "Birou", ti: 20 },
] as const;

type ElementConstructiv = typeof TOATE_ELEMENTELE_FLAT[number];
type Orientare = keyof typeof ADAOSURI_ORIENTARE;

interface ElementType {
  id: string;
  tip: string;
  orientare: Orientare;
  suprafata: number;
  R: number;
  k: number;
}

interface SelectOption {
  id: string;
  nume: string;
  categorie: string;
  disabled?: boolean;
}

// Helper pentru a găsi elementul constructiv după ID
const findElementById = (id: string): ElementConstructiv | undefined => {
  return TOATE_ELEMENTELE_FLAT.find(e => e.id === id);
};

// Helper pentru a găsi numele elementului
const getElementName = (id: string): string => {
  const el = findElementById(id);
  return el?.nume || id;
};

// Helper pentru a găsi numele zonei climatice
const getZonaName = (id: string): string => {
  const zona = ZONE_CLIMATICE.find(z => z.id === id);
  return zona?.nume || id;
};

// Helper pentru a găsi numele tipului de încăpere
const getTipIncapereName = (id: string): string => {
  const tip = TIPURI_INCAPERI.find(t => t.id === id);
  return tip?.nume || id;
};

export default function CalculatorNecesarCaldura() {
  const [zonaClimatica, setZonaClimatica] = useState("III");
  const [tipIncapere, setTipIncapere] = useState("camera");
  const [volum, setVolum] = useState(50);
  const [numarSchimburiAer, setNumarSchimburiAer] = useState(0.5);
  
  const [elemente, setElemente] = useState<ElementType[]>([
    { id: "1", tip: "PE2", orientare: "N", suprafata: 15, R: 4.54, k: 1.0 },
    { id: "2", tip: "FE2", orientare: "N", suprafata: 4, R: 0.35, k: 0.8 },
  ]);

  const te = useMemo(() => {
    const zona = ZONE_CLIMATICE.find(z => z.id === zonaClimatica);
    return zona?.te ?? -18;
  }, [zonaClimatica]);

  const ti = useMemo(() => {
    const tip = TIPURI_INCAPERI.find(t => t.id === tipIncapere);
    return tip?.ti ?? 20;
  }, [tipIncapere]);

  // Calcule memoizate corect
  const calcule = useMemo(() => {
    const dt = ti - te;
    let Qt = 0;
    const detaliiTransmisie: Array<{
      element: string;
      suprafata: number;
      R: number;
      adaos: number;
      Q: number;
    }> = [];

    elemente.forEach((el) => {
      const adaosOrientare = ADAOSURI_ORIENTARE[el.orientare] ?? 0;
      const coefMajorare = el.k ?? 1.0;
      const Q = (el.suprafata * dt * coefMajorare) / el.R * (1 + adaosOrientare);
      Qt += Q;

      detaliiTransmisie.push({
        element: `${getElementName(el.tip)} (${el.orientare})`,
        suprafata: el.suprafata,
        R: el.R,
        adaos: adaosOrientare * 100,
        Q: Q,
      });
    });

    const Qv = volum * numarSchimburiAer * 1.2 * 1005 * dt / 3600;
    const Qtotal = Qt + Qv;

    return {
      ti,
      te,
      dt,
      Qt: Math.round(Qt),
      Qv: Math.round(Qv),
      Qtotal: Math.round(Qtotal),
      detaliiTransmisie,
    };
  }, [elemente, ti, te, volum, numarSchimburiAer]);

  // =========================
  // EXPORT TXT
  // =========================
  const exportTxt = useCallback(() => {
    const data = new Date().toLocaleDateString("ro-RO");
    
    let elementeTxt = "";
    calcule.detaliiTransmisie.forEach((det, idx) => {
      elementeTxt += `
${idx + 1}. ${det.element}
   Suprafata: ${det.suprafata.toFixed(1)} m²
   Rezistenta termica R: ${det.R.toFixed(2)} m²K/W
   Adaos orientare: ${det.adaos > 0 ? "+" : ""}${det.adaos.toFixed(0)}%
   Pierdere caldura Q: ${det.Q.toFixed(0)} W
`;
    });

    const txt = `
CALCUL NECESAR DE CALDURA
=========================
Data: ${data}

DATE GENERALE
-------------
Zona climatica: ${getZonaName(zonaClimatica)} (te = ${calcule.te}°C)
Tip incapere: ${getTipIncapereName(tipIncapere)} (ti = ${calcule.ti}°C)
Volum incapere: ${volum} m³
Schimburi de aer pe ora: ${numarSchimburiAer}

Diferenta de temperatura Δt = ${calcule.dt} K

ELEMENTE CONSTRUCTIVE
---------------------${elementeTxt}

CALCUL PIERDERI DE CALDURA
--------------------------
Qt (pierderi prin transmisie) = ${calcule.Qt} W
Qv (pierderi prin ventilare) = ${calcule.Qv} W

Qv = V × n × ρ × c × Δt / 3600
   = ${volum} × ${numarSchimburiAer} × 1.2 × 1005 × ${calcule.dt} / 3600

NECESAR TOTAL DE CALDURA
------------------------
Qtotal = Qt + Qv
Qtotal = ${calcule.Qt} + ${calcule.Qv}
Qtotal = ${calcule.Qtotal} W  ≈  ${(calcule.Qtotal / 1000).toFixed(2)} kW

=========================
Conform STAS 6472 / Normativ C107
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `calcul_necesar_caldura_${data.replace(/\./g, "-")}.txt`;
    a.click();
  }, [calcule, zonaClimatica, tipIncapere, volum, numarSchimburiAer]);

  const adaugaElement = useCallback(() => {
    const newId = String(Date.now());
    setElemente(prev => [
      ...prev,
      { id: newId, tip: "PE2", orientare: "N", suprafata: 10, R: 4.54, k: 1.0 },
    ]);
  }, []);

  const stergeElement = useCallback((id: string) => {
    setElemente(prev => prev.filter((el) => el.id !== id));
  }, []);

  const actualizeazaElement = useCallback((id: string, field: keyof ElementType, value: string | number) => {
    setElemente(prev =>
      prev.map((el) => {
        if (el.id !== id) return el;
        
        const updated = { ...el, [field]: value };
        
        if (field === "tip") {
          const found = findElementById(String(value));
          if (found) {
            updated.R = found.R;
            updated.k = found.k;
          }
        }
        
        return updated;
      })
    );
  }, []);

  // Select options memoizate
  const toateElementele = useMemo((): SelectOption[] => {
    const toate: SelectOption[] = [];
    
    toate.push({ id: "header_pereti", nume: "── Pereți Exteriori ──", categorie: "header", disabled: true });
    ELEMENTE_CONSTRUCTIVE.pereti_exteriori.forEach(el => 
      toate.push({ id: el.id, nume: el.nume, categorie: "pereti" })
    );
    
    toate.push({ id: "header_ferestre", nume: "── Ferestre ──", categorie: "header", disabled: true });
    ELEMENTE_CONSTRUCTIVE.ferestre.forEach(el => 
      toate.push({ id: el.id, nume: el.nume, categorie: "ferestre" })
    );
    
    toate.push({ id: "header_usi", nume: "── Uși Exterioare ──", categorie: "header", disabled: true });
    ELEMENTE_CONSTRUCTIVE.usi_exterioare.forEach(el => 
      toate.push({ id: el.id, nume: el.nume, categorie: "usi" })
    );
    
    toate.push({ id: "header_plansee", nume: "── Planșee ──", categorie: "header", disabled: true });
    ELEMENTE_CONSTRUCTIVE.plansee.forEach(el => 
      toate.push({ id: el.id, nume: el.nume, categorie: "plansee" })
    );
    
    toate.push({ id: "header_pardoseli", nume: "── Pardoseli ──", categorie: "header", disabled: true });
    ELEMENTE_CONSTRUCTIVE.pardoseli.forEach(el => 
      toate.push({ id: el.id, nume: el.nume, categorie: "pardoseli" })
    );
    
    return toate;
  }, []);

  return (
    <div className="space-y-6">
      {/* Informații */}
      <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
        <p className="text-amber-200 text-sm">
          <span className="font-bold">🔥 Calculator Necesar Căldură</span> — 
          Calculează pierderi termice prin transmisie și ventilare conform STAS 6472.
          Rezultatele sunt orientative.
        </p>
      </div>

      {/* Date Generale */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4 text-cyan-400">📍 Date Generale</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Zona climatică</label>
            <select
              value={zonaClimatica}
              onChange={(e) => setZonaClimatica(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            >
              {ZONE_CLIMATICE.map((zona) => (
                <option key={zona.id} value={zona.id}>
                  {zona.nume} (te = {zona.te}°C)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Tip încăpere</label>
            <select
              value={tipIncapere}
              onChange={(e) => setTipIncapere(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            >
              {TIPURI_INCAPERI.map((tip) => (
                <option key={tip.id} value={tip.id}>
                  {tip.nume} (ti = {tip.ti}°C)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Volum încăpere (m³)</label>
            <input
              type="number"
              value={volum}
              onChange={(e) => setVolum(Number(e.target.value))}
              min="1"
              step="1"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Schimburi aer/oră (n)</label>
            <input
              type="number"
              value={numarSchimburiAer}
              onChange={(e) => setNumarSchimburiAer(Number(e.target.value))}
              min="0"
              max="5"
              step="0.1"
              className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
            />
            <p className="text-xs text-gray-500 mt-1">Dormitor: 0.5, Baie: 1.5, Bucătărie: 2</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <span className="px-3 py-1 bg-blue-900/50 rounded text-blue-300">
            ti = {calcule.ti}°C (interior)
          </span>
          <span className="px-3 py-1 bg-cyan-900/50 rounded text-cyan-300">
            te = {calcule.te}°C (exterior)
          </span>
          <span className="px-3 py-1 bg-purple-900/50 rounded text-purple-300">
            Δt = {calcule.dt}K
          </span>
        </div>
      </div>

      {/* Elemente Constructive */}
      <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-cyan-400">🧱 Elemente Constructive</h3>
          <button
            onClick={adaugaElement}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white text-sm transition-colors"
          >
            + Adaugă Element
          </button>
        </div>

        <div className="space-y-3">
          {elemente.map((el, index) => (
            <div
              key={el.id}
              className="flex flex-wrap items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
            >
              <span className="text-gray-500 text-sm w-6">{index + 1}.</span>
              
              <div className="flex-1 min-w-[200px]">
                <select
                  value={el.tip}
                  onChange={(e) => actualizeazaElement(el.id, "tip", e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                >
                  {toateElementele.map((opt) => (
                    <option 
                      key={opt.id} 
                      value={opt.id}
                      disabled={opt.disabled}
                    >
                      {opt.nume}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-20">
                <select
                  value={el.orientare}
                  onChange={(e) => actualizeazaElement(el.id, "orientare", e.target.value as Orientare)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm"
                >
                  {(Object.keys(ADAOSURI_ORIENTARE) as Orientare[]).map((or) => (
                    <option key={or} value={or}>{or}</option>
                  ))}
                </select>
              </div>

              <div className="w-24">
                <div className="relative">
                  <input
                    type="number"
                    value={el.suprafata}
                    onChange={(e) => actualizeazaElement(el.id, "suprafata", Number(e.target.value))}
                    min="0"
                    step="0.1"
                    className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1.5 text-white text-sm pr-8"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">m²</span>
                </div>
              </div>

              <div className="w-32 text-sm text-gray-400">
                R = {el.R.toFixed(2)} m²K/W
              </div>

              <button
                onClick={() => stergeElement(el.id)}
                className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-900/30 rounded transition-colors"
                title="Șterge element"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {elemente.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            Adaugă elemente constructive pentru a calcula necesarul de căldură.
          </p>
        )}
      </div>

      {/* Rezultate */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-700/50 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-6 text-cyan-400">📊 Rezultate Calcul</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Pierderi prin transmisie (Qt)</p>
            <p className="text-2xl font-bold text-orange-400">{calcule.Qt} W</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <p className="text-gray-400 text-sm mb-1">Pierderi prin ventilare (Qv)</p>
            <p className="text-2xl font-bold text-blue-400">{calcule.Qv} W</p>
          </div>
          
          <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-600">
            <p className="text-gray-400 text-sm mb-1">NECESAR TOTAL CĂLDURĂ</p>
            <p className="text-3xl font-bold text-cyan-400">{calcule.Qtotal} W</p>
            <p className="text-sm text-gray-500 mt-1">≈ {(calcule.Qtotal / 1000).toFixed(2)} kW</p>
          </div>
        </div>

        {calcule.detaliiTransmisie.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Detalii pierderi prin transmisie:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="text-left py-2 px-2">Element</th>
                    <th className="text-right py-2 px-2">A (m²)</th>
                    <th className="text-right py-2 px-2">R (m²K/W)</th>
                    <th className="text-right py-2 px-2">Adaos (%)</th>
                    <th className="text-right py-2 px-2">Q (W)</th>
                  </tr>
                </thead>
                <tbody>
                  {calcule.detaliiTransmisie.map((det, idx) => (
                    <tr key={idx} className="border-b border-gray-800">
                      <td className="py-2 px-2 text-gray-300">{det.element}</td>
                      <td className="text-right py-2 px-2">{det.suprafata.toFixed(1)}</td>
                      <td className="text-right py-2 px-2">{det.R.toFixed(2)}</td>
                      <td className="text-right py-2 px-2">{det.adaos > 0 ? "+" : ""}{det.adaos.toFixed(0)}%</td>
                      <td className="text-right py-2 px-2 font-mono text-orange-400">{det.Q.toFixed(0)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* BUTON EXPORT TXT */}
        <div className="mt-6">
          <button
            onClick={exportTxt}
            className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg transition-colors font-medium"
          >
            📥 Descarcă calcul (.txt)
          </button>
        </div>

        <div className="mt-6 p-3 bg-gray-800/50 rounded border border-gray-700">
          <p className="text-xs text-gray-500">
            <strong>Formule utilizate:</strong><br/>
            • Qt = Σ (A × Δt × k / R) × (1 + adaos orientare)<br/>
            • Qv = V × n × ρ × c × Δt / 3600 (ρ=1.2 kg/m³, c=1005 J/kg·K)<br/>
            • Qtotal = Qt + Qv
          </p>
        </div>
      </div>
    </div>
  );
}