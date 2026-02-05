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

  // Culori pentru tab-uri (alternativă: orange pentru sanitare/gaze, violet pentru electrice)
  const getTabStyle = (tabId: string, isActive: boolean) => {
    if (!isActive) {
      return "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800 border border-transparent";
    }
    
    // Pentru tab-urile electrice/energie - VIOLET
    if (["cadere-tensiune", "putere-instalata", "iluminat", "debit"].includes(tabId)) {
      return "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] border-2 border-violet-400 scale-105 z-10";
    }
    
    // Pentru restul - ORANGE
    return "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] border-2 border-orange-400 scale-105 z-10";
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header cu Gradient Puternic */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-gray-900 to-orange-900/60" />
        
        {/* Pattern grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl filter drop-shadow-lg">🔢</span>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-orange-200 mb-2">
                Calculatoare pentru Instalații
              </h1>
              <p className="text-orange-200/80 text-lg max-w-2xl">
                Instrumente orientative pentru dimensionarea instalațiilor în construcții
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 text-6xl opacity-10 rotate-12 select-none">⚡</div>
          <div className="absolute bottom-10 right-40 text-4xl opacity-10 -rotate-12 select-none">💧</div>
        </div>
      </div>

      {/* TAB-URI CU CONTRAST PUTERNIC */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex gap-3 flex-wrap">
          {tabs.map((tab) => {
            const isActive = tabActiv === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setTabActiv(tab.id)}
                className={`group relative px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform ${getTabStyle(tab.id, isActive)}`}
              >
                <span className="mr-2 text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
                
                {/* Indicator luminos pentru activ */}
                {isActive && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONȚINUT CU GRADIENT OVERLAY */}
      <div className="max-w-6xl mx-auto px-4 pb-12 pt-6">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient de fundal când conținutul e activ */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-orange-900/10 pointer-events-none rounded-2xl" />
          
          <div className="relative bg-gray-800/30 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm">
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
      </div>
    </main>
  );
}