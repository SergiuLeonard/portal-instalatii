"use client";

import { useState } from "react";

export default function ApeMeteorice() {
  // =========================
  // INPUTURI
  // =========================
  const [inputs, setInputs] = useState({
    suprafata: 100,          // m2
    coeficient: 1,           // ρ
    intensitate: 300,        // l/s*ha
    receptoare: 2,

    diametruColoana: 100,    // mm
    diametruColector: 110,   // mm
    panta: 1,                // %
    inaltimeApa: 15,         // cm
  });

  // =========================
  // REZULTATE
  // =========================
  const [rez, setRez] = useState<any>(null);

  const calculeaza = () => {
    // debit total
    const qc =
      0.0001 *
      inputs.coeficient *
      inputs.suprafata *
      inputs.intensitate;

    // debit pe receptor
    const qR = qc / inputs.receptoare;

    // coloana verticala
    const g = 9.81;
    const Dv = inputs.diametruColoana / 1000;
    const Av = Math.PI * Math.pow(Dv / 2, 2);
    const h = inputs.inaltimeApa / 100;
    const Hc = 3;

    const qct =
      0.8 * Av * Math.sqrt(2 * g * (Hc + h)) * 1000;

    // colector orizontal – Manning
    const Dc = inputs.diametruColector / 1000;
    const S = inputs.panta / 100;
    const n = 0.012;

    const Rh = Dc / 4;
    const vsp =
      (1 / n) *
      Math.pow(Rh, 2 / 3) *
      Math.pow(S, 0.5);

    const Ac = Math.PI * Math.pow(Dc / 2, 2);
    const qsp = vsp * Ac * 1000;

    const verColoana = qR <= qct;
    const verColector = qc <= qsp * 0.7;

    setRez({
      qc: qc.toFixed(3),
      qR: qR.toFixed(3),
      qct: qct.toFixed(2),
      vsp: vsp.toFixed(2),
      qsp: qsp.toFixed(2),
      col: verColoana ? "ADMIS" : "INADMIS",
      colH: verColector ? "ADMIS" : "INADMIS",
    });
  };

  // =========================
  // EXPORT TXT
  // =========================
  const exportTxt = () => {
    if (!rez) return;

    const txt = `
CALCUL INSTALATIE APE METEORICE
------------------------------

Date de intrare:
Suprafata: ${inputs.suprafata} m2
Coeficient scurgere ρ: ${inputs.coeficient}
Intensitate ploaie I: ${inputs.intensitate} l/s*ha
Numar receptoare: ${inputs.receptoare}

Diametru coloana: ${inputs.diametruColoana} mm
Diametru colector: ${inputs.diametruColector} mm
Panta colector: ${inputs.panta} %
Inaltime apa receptor: ${inputs.inaltimeApa} cm

Rezultate:
qc = ${rez.qc} l/s
qR = ${rez.qR} l/s
qct = ${rez.qct} l/s

vsp = ${rez.vsp} m/s
qsp = ${rez.qsp} l/s

Verificare coloana: ${rez.col}
Verificare colector: ${rez.colH}

STAS 1795 – Anexa B
`;

    const blob = new Blob([txt], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "calcul_ape_meteorice.txt";
    a.click();
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="space-y-6">

      {/* PARAMETRI TEREN */}
      <div className="grid grid-cols-2 gap-4">
        {[
          ["suprafata", "Suprafata acoperis [m²]"],
          ["receptoare", "Numar receptoare"],
          ["inaltimeApa", "Inaltime apa receptor [cm]"],
        ].map(([k, label]) => {
          const id = `met-${k}`;
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

        <div>
          <label
            htmlFor="coeficient"
            className="block text-gray-400 text-sm mb-1"
          >
            Coeficient scurgere ρ
          </label>
          <select
            id="coeficient"
            aria-label="Coeficient de scurgere"
            value={inputs.coeficient}
            onChange={(e) =>
              setInputs({ ...inputs, coeficient: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            <option value={1}>1.0 – terasa impermeabila</option>
            <option value={0.9}>0.9 – acoperis metalic</option>
            <option value={0.85}>0.85 – tigla</option>
            <option value={0.7}>0.7 – terasa pietris</option>
            <option value={0.5}>0.5 – terasa verde</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="intensitate"
            className="block text-gray-400 text-sm mb-1"
          >
            Intensitate ploaie [l/s·ha]
          </label>
          <select
            id="intensitate"
            aria-label="Intensitate ploaie"
            value={inputs.intensitate}
            onChange={(e) =>
              setInputs({ ...inputs, intensitate: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            <option value={250}>250</option>
            <option value={300}>300 – Bucuresti</option>
            <option value={350}>350</option>
            <option value={400}>400</option>
          </select>
        </div>
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
            aria-label="Diametru coloana meteorice"
            value={inputs.diametruColoana}
            onChange={(e) =>
              setInputs({ ...inputs, diametruColoana: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            {[75, 100, 110, 125, 160, 200].map((d) => (
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
            aria-label="Diametru colector meteorice"
            value={inputs.diametruColector}
            onChange={(e) =>
              setInputs({ ...inputs, diametruColector: Number(e.target.value) })
            }
            className="w-full bg-black border border-gray-700 rounded px-3 py-2"
          >
            {[100, 110, 125, 160, 200, 250].map((d) => (
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
            aria-label="Panta colector meteorice"
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
        qc = 0.0001 × ρ × S × I <br />
        qR = qc / n <br />
        qct = 0.8 × A × √(2 × g × H) <br />
        v = (1/n) × Rh<sup>2/3</sup> × S<sup>1/2</sup>
      </div>

      <button
        onClick={calculeaza}
        className="w-full bg-blue-600 py-3 rounded"
      >
        Calculeaza
      </button>

      {/* REZULTATE */}
      {rez && (
        <div className="bg-black/40 p-4 rounded space-y-1">
          <div>Debit total qc: {rez.qc} l/s</div>
          <div>Debit pe receptor qR: {rez.qR} l/s</div>

          <div
            className={`mt-2 font-mono ${
              rez.col === "ADMIS"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            Coloana verticala: {rez.col}
          </div>

          <div
            className={`font-mono ${
              rez.colH === "ADMIS"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            Colector orizontal: {rez.colH}
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
