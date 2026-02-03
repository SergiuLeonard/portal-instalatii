// /app/knowledgebase/components/Breviare/DomeniiGrid.tsx

import { DomeniuInfo } from "./../lib/breviare";

interface DomeniiGridProps {
  domenii: DomeniuInfo[];
  onSelect: (id: DomeniuInfo['id']) => void;
}

export default function DomeniiGrid({ domenii, onSelect }: DomeniiGridProps) {
  
  // DEBUG
  console.log('DomeniiGrid primește:', domenii.length, 'domenii');
  console.log('Primele 3:', domenii.slice(0, 3).map(d => d.id));

  if (!domenii || domenii.length === 0) {
    return (
      <div className="text-center py-8 text-red-400">
        <p>Eroare: Nu s-au încărcat domeniile!</p>
      </div>
    );
  }

  return (
    <>
      {/* Introducere */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-xl p-6 border border-green-700/50">
          <h2 className="text-xl font-semibold text-white mb-2">
            Breviare de Calcul
          </h2>
          <p className="text-gray-300">
            Formule didactice, exemple numerice și ghiduri rapide de calcul 
            pentru toate domeniile instalațiilor.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {domenii.map((domeniu) => (
          <button
            key={domeniu.id}
            onClick={() => {
              console.log('Click pe domeniu:', domeniu.id);
              onSelect(domeniu.id);
            }}
            className="group bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 rounded-xl p-5 text-left transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`${domeniu.bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                {domeniu.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold ${domeniu.color}`}>
                  {domeniu.nume}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {domeniu.descriere}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
}