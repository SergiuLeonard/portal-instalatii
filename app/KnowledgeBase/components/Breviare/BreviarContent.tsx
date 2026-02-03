// /app/knowledgebase/components/Breviare/BreviarContent.tsx

import { breviareSanitare, generateTxtContent } from "./../lib/breviare";

interface BreviarContentProps {
  cod: string;
}

export default function BreviarContent({ cod }: BreviarContentProps) {
  
  // DEBUG
  console.log('BreviarContent - caut cod:', cod);
  console.log('Array breviare:', breviareSanitare.map(b => b.cod));

  const breviar = breviareSanitare.find(b => b.cod === cod);
  
  console.log('Breviar găsit:', breviar ? 'DA' : 'NU');

  if (!breviar) {
    return (
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
        <h3 className="text-red-400 font-semibold">Eroare: Breviarul {cod} nu a fost găsit</h3>
        <p className="text-gray-400 text-sm mt-2">
          Coduri disponibile: {breviareSanitare.map(b => b.cod).join(', ')}
        </p>
      </div>
    );
  }

  const handleDownload = () => {
    const content = generateTxtContent(breviar);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${breviar.cod}_${breviar.slug}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700">
      {/* Header */}
      <div className="bg-gray-900/50 p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-sm text-blue-400">{breviar.cod}</span>
          <span className="text-xs text-gray-500">|</span>
          <span className="text-xs text-gray-400">{breviar.sursa}</span>
        </div>
        <h2 className="text-lg font-bold text-white">{breviar.titlu}</h2>
      </div>

      {/* Conținut simplificat pentru test */}
      <div className="p-4 space-y-4">
        <section>
          <h3 className="text-white font-semibold mb-2">Scop</h3>
          <p className="text-gray-300 text-sm">{breviar.continut.scop}</p>
        </section>

        <section>
          <h3 className="text-white font-semibold mb-2">Formula</h3>
          <div className="bg-gray-900 rounded p-3 font-mono text-green-400 text-sm">
            {breviar.continut.formula}
          </div>
        </section>

        {/* Butoane */}
        <div className="flex gap-3 pt-4 border-t border-gray-700">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm"
          >
            ⬇️ Descarcă .txt
          </button>
          
          {breviar.areCalculator && (
            <a
              href={breviar.calculatorUrl}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
            >
              🧮 Calculator
            </a>
          )}
        </div>
      </div>
    </div>
  );
}