// /app/knowledgebase/components/Breviare/BreviarList.tsx

import { 
  breviareSanitare, 
  breviareTermice,
  breviareRacireVentilatie,
  breviareFrigorifice,
  breviareElectrice,
  breviareGaze,
  breviareISI,
  breviareCladiriSpeciale,
  breviareAutomatizari,
  breviareEficientaEnergetica,
  breviareHidroedilitare,
  breviareManagement,
  breviareFundamente,
  DomeniuInfo 
} from "./../lib/breviare";

interface BreviarListProps {
  domeniu: DomeniuInfo;
  onSelect: (cod: string) => void;
  selectedCod: string | null;
}

export default function BreviarList({ domeniu, onSelect, selectedCod }: BreviarListProps) {
  
  const getBreviare = () => {
    switch (domeniu.id) {
      case 'sanitare':
        return breviareSanitare;
      case 'termice':
        return breviareTermice;
      case 'racire-ventilatie':
        return breviareRacireVentilatie;
      case 'frigorifice':
        return breviareFrigorifice;
      case 'electrice':
        return breviareElectrice;
      case 'gaze':
        return breviareGaze;
      case 'isi':
        return breviareISI;
      case 'cladiri-speciale':
        return breviareCladiriSpeciale;
      case 'automatizari':
        return breviareAutomatizari;
      case 'eficienta-energetica':
        return breviareEficientaEnergetica;
      case 'hidroedilitare':
        return breviareHidroedilitare;
      case 'management':
        return breviareManagement;
      case 'fundamente':
        return breviareFundamente;
      default:
        return [];
    }
  };

  const breviare = getBreviare();

  const getNivelColor = (nivel: string) => {
    switch (nivel) {
      case 'initiator': return 'text-green-400 bg-green-900/30';
      case 'mediu': return 'text-yellow-400 bg-yellow-900/30';
      case 'avansat': return 'text-red-400 bg-red-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  if (breviare.length === 0) {
    return (
      <div className="text-center py-8 text-yellow-400">
        <p className="text-2xl mb-2">🚧</p>
        <p>Breviare în curs de adăugare pentru: {domeniu.nume}</p>
        <p className="text-sm text-gray-500 mt-2">
          Reveniți mai târziu pentru conținut actualizat.
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
            <span className={`text-xs px-2 py-0.5 rounded ${getNivelColor(breviar.nivel)}`}>
              {breviar.nivel}
            </span>
            {breviar.areCalculator && (
              <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded">
                🧮
              </span>
            )}
          </div>
          <h4 className="text-white font-medium text-sm mt-1 leading-tight">
            {breviar.titlu}
          </h4>
        </button>
      ))}
    </div>
  );
}