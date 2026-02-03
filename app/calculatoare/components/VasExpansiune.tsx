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