// /app/knowledgebase/components/Breviare/DomeniuDetail.tsx

import { useState } from "react";
import { DomeniuInfo } from "./../lib/breviare";
import BreviarList from "./BreviarList";
import BreviarContent from "./BreviarContent";

interface DomeniuDetailProps {
  domeniu: DomeniuInfo;
  onBack: () => void;
}

export default function DomeniuDetail({ domeniu, onBack }: DomeniuDetailProps) {
  const [selectedBreviar, setSelectedBreviar] = useState<string | null>(null);

  // DEBUG
  console.log('DomeniuDetail render:', domeniu?.id, domeniu?.nume);

  if (!domeniu) {
    return (
      <div className="text-center py-8 text-red-400">
        <p>Eroare: Domeniul nu a fost găsit!</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-700 rounded">
          Înapoi
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn">
      <button onClick={onBack} className="mb-6 px-4 py-2 bg-gray-700 text-gray-300 rounded-lg">
        ← Înapoi la domenii
      </button>

      <div className={`${domeniu.bgColor} rounded-xl p-6 mb-6`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl">{domeniu.icon}</span>
          <div>
            <h2 className="text-2xl font-bold text-white">{domeniu.nume}</h2>
            <p className="text-white/80">{domeniu.descriere}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Breviare disponibile</h3>
          <BreviarList 
            domeniu={domeniu} 
            onSelect={(cod) => {
              console.log('Selectat breviar:', cod);
              setSelectedBreviar(cod);
            }}
            selectedCod={selectedBreviar}
          />
        </div>

        <div className="lg:col-span-3">
          {selectedBreviar ? (
            <BreviarContent cod={selectedBreviar} />
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 text-center">
              <p className="text-6xl mb-4">📋</p>
              <h3 className="text-xl font-semibold text-white mb-2">
                Selectează un breviar
              </h3>
              <p className="text-gray-400">
                Alege din lista din stânga
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}