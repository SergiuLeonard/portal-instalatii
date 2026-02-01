"use client";

import { useState } from "react";

export default function Canalizare() {
  const [inputs, setInputs] = useState({
    lavoar: 0,
    cada: 0,
    wc: 0,
    spalator: 0,
    masinaSpalat: 0,
    dus: 0,
    diametru: 110,
    panta: 2,
  });

  const [rezultate, setRezultate] = useState<any>(null);

  const echivalenti = {
    lavoar: 0.33,
    cada: 0.5,
    wc: 2.5,
    spalator: 0.33,
    masinaSpalat: 0.5,
    dus: 0.5,
  };

  const calculeaza = () => {
    const sumEs =
      inputs.lavoar * echivalenti.lavoar +
      inputs.cada * echivalenti.cada +
      inputs.wc * echivalenti.wc +
      inputs.spalator * echivalenti.spalator +
      inputs.masinaSpalat * echivalenti.masinaSpalat +
      inputs.dus * echivalenti.dus;

    const qs = 0.4 * Math.sqrt(sumEs) + 0.001;

    setRezultate({
      sumEs: sumEs.toFixed(2),
      qs: qs.toFixed(3),
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-orange-400 font-mono uppercase">
        Canalizare menajera
      </h2>

      <button
        onClick={calculeaza}
        className="w-full bg-orange-600 py-3 rounded"
      >
        Calculeaza
      </button>

      {rezultate && (
        <div className="bg-black/40 p-4 rounded">
          <p>ΣEs: {rezultate.sumEs}</p>
          <p>Debit qs: {rezultate.qs} l/s</p>
        </div>
      )}
    </div>
  );
}
