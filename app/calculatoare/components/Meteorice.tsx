"use client";

import { useState } from "react";

export default function Meteorice() {
  const [inputs, setInputs] = useState({
    suprafata: 100,
    coeficient: 1,
    intensitate: 300,
    receptoare: 2,
  });

  const [rezultate, setRezultate] = useState<any>(null);

  const calculeaza = () => {
    const qc =
      0.0001 *
      inputs.coeficient *
      inputs.suprafata *
      inputs.intensitate;

    const qR = qc / inputs.receptoare;

    setRezultate({
      qc: qc.toFixed(3),
      qR: qR.toFixed(3),
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-blue-400 font-mono uppercase">
        Ape meteorice
      </h2>

      <button
        onClick={calculeaza}
        className="w-full bg-blue-600 py-3 rounded"
      >
        Calculeaza
      </button>

      {rezultate && (
        <div className="bg-black/40 p-4 rounded">
          <p>Debit total qc: {rezultate.qc} l/s</p>
          <p>Debit pe receptor: {rezultate.qR} l/s</p>
        </div>
      )}
    </div>
  );
}
