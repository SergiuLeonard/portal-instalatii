// /app/knowledgebase/components/Breviare/BreviarList.tsx

import { breviareSanitare } from "./../lib/breviare";
import { DomeniuInfo } from "./../lib/breviare";

interface BreviarListProps {
  domeniu: DomeniuInfo;
  onSelect: (cod: string) => void;
  selectedCod: string | null;
}

export default function BreviarList({ domeniu, onSelect, selectedCod }: BreviarListProps) {
  
  // DEBUG
  console.log('BreviarList - domeniu primit:', domeniu.id);
  console.log('breviareSanitare disponibile:', breviareSanitare?.length || 0);

  const breviare = domeniu.id === 'sanitare' ? breviareSanitare : [];

  console.log('Breviare filtrate:', breviare.length);

  if (breviare.length === 0) {
    return (
      <div className="text-center py-8 text-yellow-400">
        <p className="text-2xl mb-2">⚠️</p>
        <p>Nu există breviare pentru: {domeniu.id}</p>
        <p className="text-sm text-gray-500 mt-2">
          Verifică ID-ul domeniului și datele din sanitare.ts
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {breviare.map((breviar) => (
        <button
          key={breviar.cod}
          onClick={() => onSelect(breviar.cod)}
          className={`w-full text-left p-4 rounded-lg border transition-all ${
            selectedCod === breviar.cod
              ? 'bg-blue-900/30 border-blue-500'
              : 'bg-gray-800 border-gray-700 hover:border-gray-600'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gray-400">{breviar.cod}</span>
            <span className={`text-xs px-2 py-0.5 rounded ${
              breviar.nivel === 'initiator' ? 'text-green-400 bg-green-900/30' :
              breviar.nivel === 'mediu' ? 'text-yellow-400 bg-yellow-900/30' :
              'text-red-400 bg-red-900/30'
            }`}>
              {breviar.nivel}
            </span>
          </div>
          <h4 className="text-white font-medium text-sm mt-1">{breviar.titlu}</h4>
        </button>
      ))}
    </div>
  );
}