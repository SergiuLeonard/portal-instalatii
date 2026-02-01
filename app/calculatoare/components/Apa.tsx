"use client";

import { useState } from "react";

export default function Apa() {
  // =========================
  // INPUTURI
  // =========================
  const [inputs, setInputs] = useState({
    lavoar: 0,
    cada: 0,
    wc: 0,
    dus: 0,
    spalator: 0,
    masinaSpalat: 0,

    diametru: 20, // mm
    lungime: 5,   // m
    tipApa: "rece", // rece | calda
  });

  // =========================
  // REZULTATE
  // =========================
  const [rez, setRez] = useState<any>(null);

  // =========================
  // CONSTANTE STAS 1478
  // =========================
  const e = {
    lavoar: 0.33,
    cada: 0.5,
    wc: 0.5,
    dus: 0.33,
    spalator: 0.33,
    masinaSpalat: 0.33,
  };

  const calculeaza = () => {
    // E1 – baterii amestecatoare
    const E1 =
      inputs.lavoar * e.lavoar +
      inputs.cada * e.cada +
      inputs.dus * e.dus +
      inputs.spalator * e.spalator;

    // E2 – robinete apa rece
    const E2 =
      inputs.wc * e.wc +
      inputs.masinaSpalat * e.masinaSpalat;

    // E total
    const E = 0.7 * E1 + E2;

    // coeficienti STAS
    const a = 24;
    const b = inputs.tipApa === "calda" ? 0.6 : 1;
    const c = 0.015;

    // debit calcul
    const qc = b * (a * c * E + 0.004 * E); // l/s

    // hidraulica conducta
    const D = inputs.diametru / 1000; // m
    const A = Math.PI * Math.pow(D / 2, 2);
    const v = (qc / 1000) / A;

    const f = 0.02;
    const i = (f * v * v * 1000) / (2 * 9.81 * D);
    const hd = i * inputs.lungime;

    // pierderi locale (2 coturi + teu + robinet)
    const xi = 2 * 0.5 + 0.8 + 2.9;
    const hl = (xi * v * v) / (2 * 9.81) * 1000;

    const Hu = 5000;
    const Hnec = hd + hl + Hu;

    setRez({
      E1: E1.toFixed(3),
      E2: E2.toFixed(3),
      E: E.toFixed(3),
      qc: qc.toFixed(4),
      v: v.toFixed(3),
      hd: hd.toFixed(1),
      hl: hl.toFixed(1),
      Hnec: (Hnec / 1000).toFixed(2),
    });
  };

  // =========================
  // EXPORT TXT
  // =========================
  const exportTxt = () => {
    if (!rez) return;

    const txt = `
CALCUL INSTALATIE APA RECE + APA CALDA
-------------------------------------

Obiecte sanitare:
Lavoare: ${inputs.lavoar}
Cazi: ${inputs.cada}
Dusuri: ${inputs.dus}
WC: ${inputs.wc}
Masini spalat: ${inputs.masinaSpalat}

Parametri conducta:
Diametru: ${inputs.diametru} mm
Lungime: ${inputs.lungime} m
Tip apa: ${inputs.tipApa}

Rezultate:
E1 = ${rez.E1}
E2 = ${rez.E2}
E = ${rez.E}

qc = ${rez.qc} l/s
v = ${rez.v} m/s
hd = ${rez.hd} mm
hl = ${rez.hl} mm
Hnec = ${rez.Hnec} m

STAS 1478
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "calcul_apa.txt";
    a.click();
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="space-y-6">

      {/* OBIECTE SANITARE */}
      <div className="grid grid-cols-2 gap-4">
        {[
  ["lavoar", "Lavoare (LFA)"],
  ["cada", "Cazi baie (CB)"],
  ["dus", "Dusuri"],
  ["wc", "WC-uri"],
  ["spalator", "Spalatoare"],
  ["masinaSpalat", "Masini spalat"],
].map(([k, label]) => {
  const id = `apa-${k}`;
  return (
    <div key={k}>
      <label
        htmlFor={id}
        className="block text-gray-400 text-sm mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={0}
        aria-label={label}
        value={(inputs as any)[k]}
        onChange={(e) =>
          setInputs({ ...inputs, [k]: Number(e.target.value) })
        }
        className="w-full bg-black border border-gray-700 rounded px-3 py-2"
      />
    </div>
  );
})}

      </div>

      {/* PARAMETRI */}
      <div className="grid grid-cols-3 gap-4">
        <div>
  <label
    htmlFor="diametru"
    className="block text-gray-400 text-sm mb-1"
  >
    Diametru conducta [mm]
  </label>
  <select
    id="diametru"
    aria-label="Diametru conducta in milimetri"
    value={inputs.diametru}
    onChange={(e) =>
      setInputs({ ...inputs, diametru: Number(e.target.value) })
    }
    className="w-full bg-black border border-gray-700 rounded px-3 py-2"
  >
    {[15, 20, 25, 32, 40, 50].map((d) => (
      <option key={d} value={d}>
        Dn {d}
      </option>
    ))}
  </select>
</div>


        <div>
  <label
    htmlFor="lungime"
    className="block text-gray-400 text-sm mb-1"
  >
    Lungime tronson [m]
  </label>
  <input
    id="lungime"
    type="number"
    min={0.1}
    step={0.1}
    aria-label="Lungime tronson in metri"
    value={inputs.lungime}
    onChange={(e) =>
      setInputs({ ...inputs, lungime: Number(e.target.value) })
    }
    className="w-full bg-black border border-gray-700 rounded px-3 py-2"
  />
</div>


        <div>
  <label
    htmlFor="tipApa"
    className="block text-gray-400 text-sm mb-1"
  >
    Tip apa
  </label>
  <select
    id="tipApa"
    aria-label="Tip apa instalatie"
    value={inputs.tipApa}
    onChange={(e) =>
      setInputs({ ...inputs, tipApa: e.target.value })
    }
    className="w-full bg-black border border-gray-700 rounded px-3 py-2"
  >
    <option value="rece">Apa rece</option>
    <option value="calda">Apa calda</option>
  </select>
</div>

      </div>

      {/* FORMULE */}
      <div className="text-sm text-gray-400 font-mono">
        E = 0.7 × E1 + E2 <br />
        qc = b × (a × c × E + 0.004 × E) <br />
        Hnec = hd + hl + Hu
      </div>

      <button
        onClick={calculeaza}
        className="w-full bg-cyan-600 py-3 rounded"
      >
        Calculeaza
      </button>

      {/* REZULTATE */}
      {rez && (
        <div className="bg-black/40 p-4 rounded space-y-1">
          <div>Debit qc: {rez.qc} l/s</div>
          <div>Viteza v: {rez.v} m/s</div>
          <div>H necesar: {rez.Hnec} m</div>

          <button
            onClick={exportTxt}
            className="mt-3 w-full bg-green-700 py-2 rounded"
          >
            Descarca calcul (.txt)
          </button>
        </div>
      )}
    </div>
  );
}
