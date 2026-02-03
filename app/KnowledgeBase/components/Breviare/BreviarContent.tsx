// /app/knowledgebase/components/Breviare/BreviarContent.tsx

import { findBreviar, generateTxtContent } from "./../lib/breviare";

interface BreviarContentProps {
  cod: string;
}

export default function BreviarContent({ cod }: BreviarContentProps) {
  
  const breviar = findBreviar(cod);
  
  if (!breviar) {
    return (
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-6">
        <h3 className="text-red-400 font-semibold">Breviarul {cod} nu a fost găsit</h3>
        <p className="text-gray-400 text-sm mt-2">
          Verificați codul sau selectați alt breviar din listă.
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
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900/50 p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="font-mono text-sm text-blue-400">{breviar.cod}</span>
          <span className="text-xs text-gray-500">|</span>
          <span className="text-xs text-gray-400">{breviar.sursa}</span>
          <span className="text-xs text-gray-500">|</span>
          <span className={`text-xs px-2 py-0.5 rounded ${
            breviar.nivel === 'initiator' ? 'text-green-400 bg-green-900/30' :
            breviar.nivel === 'mediu' ? 'text-yellow-400 bg-yellow-900/30' :
            'text-red-400 bg-red-900/30'
          }`}>
            {breviar.nivel === 'initiator' ? 'Inițiator' :
             breviar.nivel === 'mediu' ? 'Mediu' : 'Avansat'}
          </span>
        </div>
        <h2 className="text-lg font-bold text-white leading-tight">
          {breviar.titlu}
        </h2>
      </div>

      {/* Conținut */}
      <div className="p-4 space-y-5">
        {/* Scop */}
        <section>
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-500 rounded"></span>
            Scop
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed pl-3">
            {breviar.continut.scop}
          </p>
        </section>

        {/* Formula */}
        <section>
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <span className="w-1 h-5 bg-green-500 rounded"></span>
            Formula fundamentală
          </h3>
          <div className="bg-gray-900 rounded-lg p-3 font-mono text-green-400 text-sm whitespace-pre-line overflow-x-auto">
            {breviar.continut.formula}
          </div>
        </section>

        {/* Variabile */}
        <section>
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <span className="w-1 h-5 bg-yellow-500 rounded"></span>
            Variabile
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-900/50">
                <tr>
                  <th className="text-left p-2 text-gray-400 font-medium">Simbol</th>
                  <th className="text-left p-2 text-gray-400 font-medium">Definiție</th>
                  <th className="text-left p-2 text-gray-400 font-medium">Unitate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {breviar.continut.variabile.map((v: { simbol: string; definitie: string; unitate: string }, i: number) => (
                  <tr key={i}>
                    <td className="p-2 font-mono text-blue-400 text-sm">{v.simbol}</td>
                    <td className="p-2 text-gray-300 text-sm">{v.definitie}</td>
                    <td className="p-2 text-gray-400 text-xs font-mono">{v.unitate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Exemplu numeric */}
        <section>
          <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
            <span className="w-1 h-5 bg-purple-500 rounded"></span>
            Exemplu numeric
          </h3>
          <div className="bg-gray-900/50 rounded-lg p-3">
            <p className="text-gray-300 text-sm mb-3 italic">
              {breviar.continut.exempluNumeric.date}
            </p>
            <div className="space-y-1 mb-3">
              {breviar.continut.exempluNumeric.pasi.map((pas: string, i: number) => (
                <p key={i} className="text-gray-300 font-mono text-xs">
                  <span className="text-gray-500 mr-2">{i + 1}.</span>
                  {pas}
                </p>
              ))}
            </div>
            <div className="bg-green-900/20 border border-green-700/50 rounded p-2">
              <p className="text-green-400 font-semibold text-sm">
                {breviar.continut.exempluNumeric.rezultat}
              </p>
              {breviar.continut.exempluNumeric.verificare && (
                <p className="text-gray-400 text-xs mt-1">
                  {breviar.continut.exempluNumeric.verificare}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Observații */}
        {breviar.continut.observatii && breviar.continut.observatii.length > 0 && (
          <section>
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded"></span>
              Observații și capcane
            </h3>
            <ul className="space-y-1">
              {breviar.continut.observatii.map((obs: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Footer cu acțiuni */}
      <div className="bg-gray-900/50 p-4 border-t border-gray-700 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Descarcă .txt
          </button>
          
          {breviar.areCalculator && breviar.calculatorUrl && (
            <a
              href={breviar.calculatorUrl}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Calculator
            </a>
          )}
        </div>
        
        <span className="text-xs text-gray-500">
          {breviar.cod} • portal-instalatii.vercel.app
        </span>
      </div>
    </div>
  );
}