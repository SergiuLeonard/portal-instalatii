"use client";

import { useState } from "react";
import CalculatorApaReceCalda from "./components/Apa";
import CalculatorCanalizare from "./components/Canalizare";
import CalculatorApeMeteorice from "./components/Meteorice";
import CalculatorNecesarCaldura from "./components/CalculatorNecesarCaldura";
import Conversii from "./components/Conversii";
import DebitDiametru from "./components/DebitDiametru";
import VasExpansiune from "./components/VasExpansiune";
import NecIncalzirePardoseala from "./components/NecIncalzirePardoseala";
import CalculHidraulic from "./components/CalculHidraulic";
import CalculatorDebitSanitar from "./debit-sanitar/page";
import CalculatorPierderiSarcina from "./pierderi-sarcina/page";
import CalculatorCanal from "./canalizare-menajera/page";
import CalculatorDebitGaze from "./debit-gaze/page";
import CalculatorPierderiGaze from "./pierderi-gaze/page";

export default function CalculatoarePage() {
  const [tabActiv, setTabActiv] = useState<
    "apa" | "canalizare" | "meteorice" | "caldura"| "conversii" | "vasexpansiune" | "debit" | "hidraulic" | "pardoseala" | "debit-sanitar" | "pierderi-sarcina" | "canalizare-menajera"
  | "debit-gaze" | "pierderi-gaze" | "dimensionare-gaze"
  | "pid-tuning" | "vana-control" | "semnal-conversie"
  >("apa");

  const tabs = [
    { id: "apa", label: "Apă Rece + Caldă", icon: "💧" },
    { id: "canalizare", label: "Canalizare", icon: "🔄" },
    { id: "meteorice", label: "Ape Meteorice", icon: "🌧️" },
    { id: "caldura", label: "Necesar Căldură", icon: "🔥" },
    { id: "conversii", label: "Conversii Unități", icon: "🔄" },
    { id: "hidraulic", label: "Calcul Hidraulic", icon: "💧" },
    { id: "vasexpansiune", label: "Vas Expansiune", icon: "🫗" },
    { id: "pardoseala", label: "Încălzire Pardoseală", icon: "🔥" },
     { id: "debit-sanitar", label: "Debit Sanitar", icon: "💧" },
    { id: "pierderi-sarcina", label: "Pierderi Sarcină", icon: "📉" },
    { id: "canalizare-menajera", label: "Canal", icon: "🔄" },
    { id: "debit-gaze", label: "Debit Gaze", icon: "🔥" },
    { id: "pierderi-gaze", label: "Pierderi Gaze", icon: "📉" },
    { id: "debit", label: "Debit/Diametru", icon: "⚡" }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      <div className="border-b border-gray-800 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">
            Calculatoare pentru Instalații
          </h1>
          <p className="text-gray-400">
            Instrumente orientative pentru dimensionarea instalațiilor.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTabActiv(tab.id as any)}
              className={`px-6 py-3 rounded-t-lg font-mono text-sm ${
                tabActiv === tab.id
                  ? "bg-gray-800 text-white border-t border-x border-gray-700"
                  : "bg-gray-900/50 text-gray-400 hover:text-white"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-gray-800/30 border border-gray-700 border-t-0 rounded-b-lg rounded-tr-lg p-6">
          {tabActiv === "apa" && <CalculatorApaReceCalda />}
          {tabActiv === "canalizare" && <CalculatorCanalizare />}
          {tabActiv === "meteorice" && <CalculatorApeMeteorice />}
          {tabActiv === "caldura" && <CalculatorNecesarCaldura />}
          {tabActiv === "conversii" && <Conversii />}
          {tabActiv === "hidraulic" && <DebitDiametru />}
          {tabActiv === "vasexpansiune" && <VasExpansiune />}
          {tabActiv === "debit" && <CalculHidraulic />}
          {tabActiv === "pardoseala" && <NecIncalzirePardoseala/>}
          {tabActiv === "debit-sanitar" && <CalculatorDebitSanitar />}
          {tabActiv === "pierderi-sarcina" && <CalculatorPierderiSarcina/>}
          {tabActiv === "canalizare-menajera" && <CalculatorCanal/>}
          {tabActiv === "debit-gaze" && <CalculatorDebitGaze/>}
          {tabActiv === "pierderi-gaze" && <CalculatorPierderiGaze/>}
        </div>
      </div>
    </main>
  );
}
