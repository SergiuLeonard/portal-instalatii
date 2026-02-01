"use client";

import { useState } from "react";

export default function Canalizare() {
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

    diametruColoana: 110,   // mm
    diametruColector: 110,  // mm
    panta: 2,               // %
  });

  // =========================
  // REZULTATE
  // =========================
  const [rez, setRez] = useState<any>(null);

  // =========================
  // CONSTANTE STAS 1795
  // =========================
  const e = {
    lavoar: 0.33,
    cada: 0.5,
    wc: 2.5,
    dus: 0.5,
    spalator: 0.33,
    masinaSpalat: 0.5,
  };

  const qsMaxObj = {
    lavoar: 0.5,
    cada: 0.8,
    wc: 1.8,
    dus: 0.4,
    spalator: 0.5,
    masinaSpalat: 0.8,
  };

  const calculeaza = () => {
    // ΣEs
    const sumEs =
      inputs.lavoar * e.lavoar +
      inputs.cada * e.cada +
      inputs.wc * e.wc +
      inputs.dus * e.dus +
      inputs.spalator * e.spalator +
      inputs.masinaSpalat * e.masinaSpalat;

    // qs conform STAS 1795
    const qs = 0.4 * Math.sqrt(sumEs) + 0.001;

    // qs max (obiect dominant)
    const qsMax = Math.max(
      inputs.lavoar > 0 ? qsMaxObj.lavoar : 0,
      inputs.cada > 0 ? qsMaxObj.cada : 0,
      inputs.wc > 0 ? qsMaxObj.wc : 0,
      inputs.dus > 0 ? qsMaxObj.dus : 0,
      inputs.spalator > 0 ? qsMaxObj.spalator : 0,
      inputs.masinaSpalat > 0 ? qsMaxObj.masinaSpalat : 0
    );

    // qc
    const qc = qs + qsMax;

    // colector orizontal – Manning
    const D = inputs.diametruColector / 1000;
    const S = inputs.panta / 100;
    const n = 0.012;

    const Rh = D / 4;
    const vsp = (1 / n) * Math.pow(Rh, 2 / 3) * Math.pow(S, 0.5);
    const A = Math.PI * Math.pow(D / 2, 2);
    const qsp = vsp * A * 1000;

    const U = 0.7;
    const vr = qc / (U * A * 1000);

    const admis = qc <= qsp * U;

    setRez({
      sumEs: sumEs.toFixed(2),
      qs: qs.toFixed(4),
      qsMax: qsMax.toFixed(2),
      qc: qc.toFixed(4),
      vsp: vsp.toFixed(2),
      qsp: qsp.toFixed(2),
      vr: vr.toFixed(2),
      verificare: admis ? "ADMIS" : "INADMIS",
    });
  };

  // =========================
  // EXPORT TXT
  // =========================
  const exportTxt = () => {
    if (!rez) return;

    const txt = `
CALCUL INSTALATIE CANALIZARE MENAJERA
-----------------------------------

Obiecte sanitare:
Lavoare: ${inputs.lavoar}
Cazi: ${inputs.cada}
WC-uri: ${inputs.wc}
Dusuri: ${inputs.dus}
Spalatoare: ${inputs.spalator}
Masini spalat: ${inputs.masinaSpalat}

Parametri conducte:
Diametru coloana: ${inputs.diametruColoana} mm
Diametru colector: ${inputs.diametruColector} mm
Panta colector: ${inputs.panta} %

Rezultate:
ΣEs = ${rez.sumEs}
qs = ${rez.qs} l/s
qs max = ${rez.qsMax} l/s
qc = ${rez.qc} l/s

vsp = ${rez.vsp} m/s
qsp = ${rez.qsp} l/s
vr = ${rez.vr} m/s

Verificare: ${rez.verificare}

STAS 1795
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "calcul_canalizare.txt";
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
          ["lavoar", "Lavoare"],
          ["cada", "Cazi baie"],
          ["wc", "WC-uri"],
          ["dus", "Dusuri"],
          ["spalator", "Spalatoare"],
          ["masinaSpalat", "Masini spalat"],
        ].map(([k, label]) => {
          const id = `can-${k}`;
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

      {/* PARAMETRI CONDUCTE */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label
            htmlFor="diametruColoana"
            className="block text-gray-400 text-sm mb-1"
          >
            Diametru coloana [mm]
          </label>
          <select
            id="diametruColoana"
            aria-label="Diametru coloana canalizare"
            value={inputs.diametruColoana}
            onChange={(e) =>
              setInputs({ ...inputs, diametruColoana: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            {[75, 110, 125, 160, 200].map((d) => (
              <option key={d} value={d}>Dn {d}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="diametruColector"
            className="block text-gray-400 text-sm mb-1"
          >
            Diametru colector [mm]
          </label>
          <select
            id="diametruColector"
            aria-label="Diametru colector canalizare"
            value={inputs.diametruColector}
            onChange={(e) =>
              setInputs({ ...inputs, diametruColector: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            {[75, 110, 125, 160, 200, 250].map((d) => (
              <option key={d} value={d}>Dn {d}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="panta"
            className="block text-gray-400 text-sm mb-1"
          >
            Panta colector [%]
          </label>
          <select
            id="panta"
            aria-label="Panta colector canalizare"
            value={inputs.panta}
            onChange={(e) =>
              setInputs({ ...inputs, panta: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            {[0.5, 1, 1.5, 2, 2.5, 3].map((p) => (
              <option key={p} value={p}>{p} %</option>
            ))}
          </select>
        </div>
      </div>

      {/* FORMULE */}
      <div className="text-sm text-gray-400 font-mono">
        ΣEs = Σ(n × e) <br />
        qs = 0.4 × √ΣEs + 0.001 <br />
        qc = qs + qs,max <br />
        v = (1/n) × Rh<sup>2/3</sup> × S<sup>1/2</sup>
      </div>

      <button
        onClick={calculeaza}
        className="w-full bg-orange-600 py-3 rounded"
      >
        Calculeaza
      </button>

      {/* REZULTATE */}
      {rez && (
        <div className="bg-black/40 p-4 rounded space-y-1">
          <div>ΣEs: {rez.sumEs}</div>
          <div>Debit qc: {rez.qc} l/s</div>
          <div>Viteza vr: {rez.vr} m/s</div>

          <div
            className={`mt-2 font-mono ${
              rez.verificare === "ADMIS"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {rez.verificare}
          </div>

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
