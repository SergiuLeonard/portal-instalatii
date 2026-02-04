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

// IMPORTURI NOI pentru calculatoarele care existau doar ca rute:
import CalculatorCadereTensiune from "./cadere-tensiune/page";
import CalculatorHidrantiInteriori from "./hidranti-interiori/page";
import CalculatorSprinklere from "./sprinklere/page";
import CalculatorRezervorIncendiu from "./rezervor-incendiu/page";
import CalculatorPutereInstalata from "./putere-instalata/page";
import CalculatorIluminat from "./iluminat/page"; // dacă există
import CalculatorDimensionareConducte from "./dimensionare-conducte/page"; // va fi creat mai jos

export default function CalculatoarePage() {
  const [tabActiv, setTabActiv] = useState<string>("apa");

  const tabs = [
    { id: "apa", label: "Apă Rece + Caldă", icon: "💧" },
    { id: "canalizare", label: "Canalizare", icon: "🔄" },
    { id: "meteorice", label: "Ape Meteorice", icon: "🌧️" },
    { id: "caldura", label: "Necesar Căldură", icon: "🔥" },
    { id: "pardoseala", label: "Încălzire Pardoseală", icon: "🔥" },
    { id: "vasexpansiune", label: "Vas Expansiune", icon: "🫗" },
    { id: "conversii", label: "Conversii Unități", icon: "🔄" },
    { id: "hidraulic", label: "Calcul Hidraulic", icon: "💧" },
    { id: "debit", label: "Debit/Diametru", icon: "⚡" },
    // Tab-uri NOI adăugate:
    { id: "cadere-tensiune", label: "Cădere Tensiune", icon: "⚡" },
    { id: "putere-instalata", label: "Putere Instalată", icon: "🔌" },
    { id: "iluminat", label: "Iluminat", icon: "💡" },
    { id: "rezervor-incendiu", label: "Rezervor Incendiu", icon: "🧯" },
    { id: "sprinklere", label: "Sprinklere", icon: "🚿" },
    { id: "hidranti", label: "Hidranți Interiori", icon: "🚒" },
    { id: "dimensionare-conducte", label: "Dimensionare Conducte", icon: "📐" },
    // Tab-uri existente din breviare:
    { id: "debit-sanitar", label: "Debit Sanitar", icon: "💧" },
    { id: "pierderi-sarcina", label: "Pierderi Sarcină", icon: "📉" },
    { id: "canalizare-menajera", label: "Canal Menajer", icon: "🔄" },
    { id: "debit-gaze", label: "Debit Gaze", icon: "🔥" },
    { id: "pierderi-gaze", label: "Pierderi Gaze", icon: "📉" },
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
              onClick={() => setTabActiv(tab.id)}
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
          {tabActiv === "hidraulic" && <CalculHidraulic />}
          {tabActiv === "vasexpansiune" && <VasExpansiune />}
          {tabActiv === "debit" && <DebitDiametru />}
          {tabActiv === "pardoseala" && <NecIncalzirePardoseala/>}
          {tabActiv === "debit-sanitar" && <CalculatorDebitSanitar />}
          {tabActiv === "pierderi-sarcina" && <CalculatorPierderiSarcina/>}
          {tabActiv === "canalizare-menajera" && <CalculatorCanal/>}
          {tabActiv === "debit-gaze" && <CalculatorDebitGaze/>}
          {tabActiv === "pierderi-gaze" && <CalculatorPierderiGaze/>}
          
          {/* NOI */}
          {tabActiv === "cadere-tensiune" && <CalculatorCadereTensiune />}
          {tabActiv === "putere-instalata" && <CalculatorPutereInstalata />}
          {tabActiv === "iluminat" && <CalculatorIluminat />}
          {tabActiv === "rezervor-incendiu" && <CalculatorRezervorIncendiu />}
          {tabActiv === "sprinklere" && <CalculatorSprinklere />}
          {tabActiv === "hidranti" && <CalculatorHidrantiInteriori />}
          {tabActiv === "dimensionare-conducte" && <CalculatorDimensionareConducte />}
        </div>
      </div>
    </main>
  );
}