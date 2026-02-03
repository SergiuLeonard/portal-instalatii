'use client';

import { useState } from 'react';
import Breviare from "./components/Breviare/Breviare";
import GhidApa from "./components/GhidApa";
import GhidCanalizare from "./components/GhidCanalizare";
import GhidTermice from "./components/GhidTermice";
import GhidVentilare from "./components/GhidVentilare";
import GhidElectrice from "./components/GhidElectrice";
import GhidGaze from "./components/GhidGaze";
import GhidAutomatizare from "./components/GhidAutomatizare";
import GhidPasive from "./components/GhidPasive";
import GhidCertificare from "./components/GhidCertificare";

type TabType = 'ghiduri' | 'breviare';

type GhidType = 
  | 'apa' 
  | 'canalizare' 
  | 'termice' 
  | 'ventilare' 
  | 'electrice' 
  | 'gaze' 
  | 'automatizare' 
  | 'pasive' 
  | 'certificare';

interface GhidInfo {
  id: GhidType;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

const ghiduri: GhidInfo[] = [
  {
    id: 'apa',
    title: 'Instalații de Apă',
    shortTitle: 'Apă',
    description: 'Alimentare cu apă rece și caldă, dimensionare, materiale',
    icon: '💧',
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
  },
  {
    id: 'canalizare',
    title: 'Instalații de Canalizare',
    shortTitle: 'Canalizare',
    description: 'Evacuare ape uzate și pluviale, ventilare, dimensionare',
    icon: '🚿',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-600',
  },
  {
    id: 'termice',
    title: 'Instalații Termice',
    shortTitle: 'Termice',
    description: 'Încălzire centrală, radiatoare, pardoseală caldă',
    icon: '🔥',
    color: 'text-red-400',
    bgColor: 'bg-red-600',
  },
  {
    id: 'ventilare',
    title: 'Ventilare și Climatizare',
    shortTitle: 'Ventilare',
    description: 'Ventilare naturală și mecanică, recuperare căldură, IAQ',
    icon: '💨',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-600',
  },
  {
    id: 'electrice',
    title: 'Instalații Electrice',
    shortTitle: 'Electrice',
    description: 'Circuite, protecții, iluminat, prize, împământare',
    icon: '⚡',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-600',
  },
  {
    id: 'gaze',
    title: 'Instalații de Gaze',
    shortTitle: 'Gaze',
    description: 'Alimentare gaze naturale, aparate, coșuri, siguranță',
    icon: '🔶',
    color: 'text-orange-400',
    bgColor: 'bg-orange-600',
  },
  {
    id: 'automatizare',
    title: 'Automatizări (BMS)',
    shortTitle: 'Automatizări',
    description: 'Building Management Systems, senzori, controlere, SCADA',
    icon: '🤖',
    color: 'text-purple-400',
    bgColor: 'bg-purple-600',
  },
  {
    id: 'pasive',
    title: 'Clădiri Pasive / nZEB',
    shortTitle: 'Pasive',
    description: 'Passivhaus, eficiență energetică, PHPP, certificare',
    icon: '🏠',
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-600',
  },
  {
    id: 'certificare',
    title: 'Certificare Energetică',
    shortTitle: 'Certificare',
    description: 'Certificate energetice, MC001, clase, recomandări',
    icon: '📋',
    color: 'text-teal-400',
    bgColor: 'bg-teal-600',
  },
];

export default function KnowledgeBasePage() {
  const [activeTab, setActiveTab] = useState<TabType>('ghiduri');
  const [activeGhid, setActiveGhid] = useState<GhidType | null>(null);

  const renderGhid = () => {
    switch (activeGhid) {
      case 'apa':
        return <GhidApa />;
      case 'canalizare':
        return <GhidCanalizare />;
      case 'termice':
        return <GhidTermice />;
      case 'ventilare':
        return <GhidVentilare />;
      case 'electrice':
        return <GhidElectrice />;
      case 'gaze':
        return <GhidGaze />;
      case 'automatizare':
        return <GhidAutomatizare />;
      case 'pasive':
        return <GhidPasive />;
      case 'certificare':
        return <GhidCertificare />;
      default:
        return null;
    }
  };

  const activeGhidInfo = ghiduri.find((g) => g.id === activeGhid);

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Header cu tab-uri */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                KnowledgeBase
              </h1>
              <p className="text-gray-400 mt-1 text-sm">
                Ghiduri de proiectare și breviare de calcul pentru instalații
              </p>
            </div>
          </div>
          
          {/* Tab-uri */}
          <div className="flex gap-1 border-b border-gray-700">
            <button
              onClick={() => {
                setActiveTab('ghiduri');
                setActiveGhid(null);
              }}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === 'ghiduri'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              📚 Ghiduri de Proiectare
            </button>
            <button
              onClick={() => {
                setActiveTab('breviare');
                setActiveGhid(null);
              }}
              className={`px-6 py-3 font-medium text-sm transition-colors relative ${
                activeTab === 'breviare'
                  ? 'text-green-400 border-b-2 border-green-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              📋 Breviare de Calcul
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      {activeTab === 'ghiduri' && activeGhid && activeGhidInfo && (
        <div className="bg-gray-800/50 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
              <button
                onClick={() => setActiveGhid(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Ghiduri
              </button>
              <span className="text-gray-600">/</span>
              <span className={activeGhidInfo.color}>
                {activeGhidInfo.icon} {activeGhidInfo.title}
              </span>
            </nav>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'ghiduri' ? (
          // TAB GHIDURI
          !activeGhid ? (
            <>
              {/* Introduction */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-700/50">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Ghiduri de Proiectare
                  </h2>
                  <p className="text-gray-300">
                    Documentație tehnică completă pentru proiectarea și execuția instalațiilor 
                    în clădiri. Selectați un domeniu pentru a accesa informațiile tehnice, 
                    formule de calcul, normative și exemple practice.
                  </p>
                </div>
              </div>

              {/* Grid of guides */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ghiduri.map((ghid) => (
                  <button
                    key={ghid.id}
                    onClick={() => setActiveGhid(ghid.id)}
                    className="group bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl p-5 text-left transition-all duration-200 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1"
                    aria-label={`Deschide ghidul ${ghid.title}`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`${ghid.bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}
                      >
                        {ghid.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold ${ghid.color} group-hover:underline`}>
                          {ghid.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                          {ghid.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end mt-4 text-gray-500 group-hover:text-gray-400 text-sm">
                      <span>Deschide</span>
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-blue-400">9</p>
                  <p className="text-gray-400 text-sm">Domenii</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-green-400">70+</p>
                  <p className="text-gray-400 text-sm">Secțiuni</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-yellow-400">100+</p>
                  <p className="text-gray-400 text-sm">Formule</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-purple-400">50+</p>
                  <p className="text-gray-400 text-sm">Tabele</p>
                </div>
              </div>
            </>
          ) : (
            /* Active guide content */
            <div className="animate-fadeIn">
              <button
                onClick={() => setActiveGhid(null)}
                className="mb-4 flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Înapoi la ghiduri
              </button>
              {renderGhid()}
            </div>
          )
        ) : (
          // TAB BREVIARE
          <Breviare />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              KnowledgeBase Instalații • 2024
            </p>
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">
                Bazat pe normative: I9, I7, I5, NTPEE, C107, MC001, STAS 1478
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}