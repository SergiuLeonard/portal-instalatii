'use client';

import React, { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function GhidGaze() {
  const [activeSection, setActiveSection] = useState<string>('introducere');
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'introducere',
      title: '1. Introducere în Instalații de Gaze',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">1.1 Definiție și Importanță</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>Instalațiile de gaze naturale</strong> cuprind ansamblul conductelor, armăturilor, 
            aparatelor de utilizare și accesoriilor destinate transportului și utilizării gazelor 
            combustibile în scopuri casnice, comerciale sau industriale.
          </p>
          
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-600">
            <h4 className="font-semibold text-red-400 mb-2">⚠️ ATENȚIE - PERICOL!</h4>
            <p className="text-gray-300 text-sm">
              Gazele naturale sunt combustibile și pot forma amestecuri explozive cu aerul. 
              Proiectarea și execuția instalațiilor de gaze pot fi realizate DOAR de persoane 
              fizice/juridice autorizate ANRE. Nerespectarea normativelor poate duce la 
              explozii, incendii și pierderi de vieți omenești!
            </p>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">1.2 Proprietăți Gaze Naturale</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Compoziție:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Metan (CH₄): 85-98%</li>
                  <li>• Etan (C₂H₆): 1-6%</li>
                  <li>• Propan, butan: &lt;2%</li>
                  <li>• CO₂, N₂: urme</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Caracteristici:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Putere calorifică: ~34-38 MJ/m³</li>
                  <li>• Densitate: 0.73-0.85 kg/m³</li>
                  <li>• Mai ușor ca aerul (se ridică)</li>
                  <li>• Incolor, inodor (se odorizează)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-900/30 p-4 rounded-lg border border-orange-600 mt-4">
            <h4 className="font-semibold text-orange-400 mb-2">Limite de explozie:</h4>
            <div className="flex gap-8 text-gray-300 text-sm">
              <div>
                <span className="text-gray-400">LIE (limită inferioară):</span>
                <span className="font-semibold text-orange-300 ml-2">5%</span>
              </div>
              <div>
                <span className="text-gray-400">LSE (limită superioară):</span>
                <span className="font-semibold text-orange-300 ml-2">15%</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Amestecul aer-gaz este exploziv când concentrația de gaz este între 5% și 15%.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">1.3 Cadrul Normativ</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>NTPEE-2018</strong> - Norme tehnice pentru proiectarea și executarea instalațiilor de utilizare a gazelor naturale</li>
              <li>• <strong>Ordinul ANRE 89/2018</strong> - Regulament privind racordarea la sistemul de distribuție gaze</li>
              <li>• <strong>PE 902</strong> - Normativ pentru proiectarea și executarea instalațiilor interioare de gaze</li>
              <li>• <strong>NTPEE-2008</strong> - Pentru instalații existente</li>
              <li>• <strong>Legea 123/2012</strong> - Legea energiei electrice și gazelor naturale</li>
              <li>• <strong>SR EN 1775</strong> - Alimentare cu gaz - Instalații de gaz pentru clădiri</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'clasificare',
      title: '2. Clasificarea Instalațiilor',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">2.1 După Poziție</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Instalații exterioare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Branșamente</li>
                <li>• Posturi de reglare (PRM, PRS)</li>
                <li>• Conducte exterioare</li>
                <li>• Stații de reglare-măsurare</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Instalații interioare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Conducte interioare</li>
                <li>• Aparate de utilizare</li>
                <li>• Coșuri și canale de fum</li>
                <li>• Sisteme de evacuare gaze arse</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">2.2 După Presiune</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Categorie</th>
                  <th className="p-3 text-center">Presiune</th>
                  <th className="p-3 text-left">Utilizare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-green-400">Joasă presiune (JP)</td>
                  <td className="p-3 text-center">≤ 0.1 bar</td>
                  <td className="p-3">Instalații interioare locuințe</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-yellow-400">Redusă (RP)</td>
                  <td className="p-3 text-center">0.1 - 0.5 bar</td>
                  <td className="p-3">Anumite instalații industriale</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-orange-400">Medie (MP)</td>
                  <td className="p-3 text-center">0.5 - 5 bar</td>
                  <td className="p-3">Rețele distribuție</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-red-400">Înaltă (ÎP)</td>
                  <td className="p-3 text-center">&gt; 5 bar</td>
                  <td className="p-3">Transport, conducte magistrale</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">2.3 Categorii de Consumatori</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Categoria I - Casnic</h4>
              <p className="text-gray-300 text-sm">Consum &lt;100 m³/h. Apartamente, case individuale.</p>
              <p className="text-gray-400 text-xs mt-1">Aparate: aragaz, centrală termică mică, boiler</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Categoria II - Comercial mic</h4>
              <p className="text-gray-300 text-sm">Consum 100-500 m³/h. Magazine, birouri, restaurante.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Categoria III - Industrial</h4>
              <p className="text-gray-300 text-sm">Consum &gt;500 m³/h. Fabrici, centrale termice mari.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dimensionare',
      title: '3. Dimensionarea Conductelor',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">3.1 Calculul Debitului</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
            <h4 className="font-semibold text-cyan-400 mb-2">Debitul de calcul</h4>
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
              Q = Σ(Qi × ki) [m³/h]
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Qi = debitul fiecărui aparat | ki = coeficient de simultaneitate
            </p>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">3.2 Debite Nominale Aparate</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Aparat</th>
                  <th className="p-3 text-center">Putere termică [kW]</th>
                  <th className="p-3 text-center">Debit orientativ [m³/h]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Aragaz 4 ochiuri</td>
                  <td className="p-3 text-center">8-10</td>
                  <td className="p-3 text-center">0.8-1.0</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Aragaz cu cuptor</td>
                  <td className="p-3 text-center">12-14</td>
                  <td className="p-3 text-center">1.2-1.4</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Centrală murală 24 kW</td>
                  <td className="p-3 text-center">24</td>
                  <td className="p-3 text-center">2.5-2.8</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Centrală murală 28 kW</td>
                  <td className="p-3 text-center">28</td>
                  <td className="p-3 text-center">2.9-3.2</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Centrală murală 35 kW</td>
                  <td className="p-3 text-center">35</td>
                  <td className="p-3 text-center">3.5-4.0</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Boiler instant 20 kW</td>
                  <td className="p-3 text-center">20</td>
                  <td className="p-3 text-center">2.0-2.3</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Șemineu pe gaz</td>
                  <td className="p-3 text-center">5-10</td>
                  <td className="p-3 text-center">0.5-1.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">3.3 Diametre și Viteze</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Diametre minime conducte:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Branșament: minim DN 25 (1")</li>
              <li>• Coloană verticală: minim DN 20 (3/4")</li>
              <li>• Racord aparat: minim DN 15 (1/2")</li>
            </ul>
            
            <h4 className="font-semibold text-white mb-2 mt-4">Viteze admise:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Joasă presiune: max 10 m/s</li>
              <li>• Medie presiune: max 20 m/s</li>
              <li>• Valori recomandate: 3-6 m/s</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">3.4 Pierderi de Sarcină</h3>
          
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="font-mono text-sm text-cyan-300 mb-2">
              Δp = λ × (L/D) × (ρv²/2) + Σξ × (ρv²/2) [Pa]
            </div>
            <p className="text-gray-400 text-sm">
              Pierderea totală de presiune trebuie să fie &lt;10% din presiunea de intrare.
            </p>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600 mt-4">
            <h4 className="font-semibold text-yellow-400 mb-2">💡 Regula practică:</h4>
            <p className="text-gray-300 text-sm">
              Pentru instalații casnice cu L &lt;20m și max 2 aparate, conductele DN 20-25 
              sunt de obicei suficiente. Pentru distanțe mai mari sau mai multe aparate, 
              se face calcul detaliat.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'materiale',
      title: '4. Materiale și Componente',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">4.1 Conducte</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-gray-500">
              <h4 className="font-semibold text-gray-300 mb-2">Țevi de oțel</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Oțel zincat</strong> - pentru instalații aparente interioare</li>
                <li>• <strong>Oțel negru</strong> - pentru instalații exterioare (protejat)</li>
                <li>• Îmbinări: filetate, sudate sau cu flanșe</li>
                <li>• Standard: SR EN 10255 (țevi filetabile)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Țevi de cupru</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Pentru instalații interioare și încastrate</li>
                <li>• Îmbinări: lipire tare (brazare) sau fitinguri cu presare</li>
                <li>• Avantaj: flexibilitate, rezistență la coroziune</li>
                <li>• Standard: SR EN 1057</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-400 mb-2">Țevi PE (polietilenă)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• DOAR pentru instalații exterioare îngropate</li>
                <li>• Culoare galbenă (pentru gaz)</li>
                <li>• Îmbinări: electrofuziune sau cap la cap</li>
                <li>• SDR 11 pentru presiuni până la 4 bar</li>
                <li>• INTERZIS în interior sau la vedere!</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Țevi flexibile ondulate (CSST)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Oțel inoxidabil ondulat cu manta PE</li>
                <li>• Pentru racorduri finale și zone greu accesibile</li>
                <li>• Lungime maximă conform producător</li>
                <li>• Necesită împământare!</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">4.2 Armături</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Robinete:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Robinet de branșament (exterior)</li>
                  <li>• Robinet de incendiu (roșu)</li>
                  <li>• Robinet de coloană</li>
                  <li>• Robinet de apartament</li>
                  <li>• Robinet de aparat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Caracteristici:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Cu sferă (sferic) - cel mai utilizat</li>
                  <li>• Cu con (conic) - clasic</li>
                  <li>• Cu obturator - pentru DN mari</li>
                  <li>• Presiune nominală: PN 5 sau PN 16</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">4.3 Regulatoare de Presiune</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">Regulator de branșament:</strong>
                <span className="text-gray-400"> Reduce presiunea din rețea la presiunea de utilizare (ex: 2 bar → 21 mbar)</span>
              </li>
              <li>
                <strong className="text-yellow-400">Post de reglare-măsurare (PRM):</strong>
                <span className="text-gray-400"> Pentru consumatori industriali, include regulator + contor + filtru</span>
              </li>
              <li>
                <strong className="text-yellow-400">Regulator cu siguranță:</strong>
                <span className="text-gray-400"> Închide automat la suprapresiune sau subpresiune</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">4.4 Contoare de Gaz</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Tip contor</th>
                  <th className="p-3 text-center">Debit (Qmax)</th>
                  <th className="p-3 text-left">Utilizare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">G1.6</td>
                  <td className="p-3 text-center">2.5 m³/h</td>
                  <td className="p-3">Aragaz singur</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">G2.5</td>
                  <td className="p-3 text-center">4 m³/h</td>
                  <td className="p-3">Aragaz + boiler mic</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">G4</td>
                  <td className="p-3 text-center">6 m³/h</td>
                  <td className="p-3">Apartament standard</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">G6</td>
                  <td className="p-3 text-center">10 m³/h</td>
                  <td className="p-3">Casă cu centrală 24-28 kW</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">G10</td>
                  <td className="p-3 text-center">16 m³/h</td>
                  <td className="p-3">Centrală 35+ kW</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">G16-G25</td>
                  <td className="p-3 text-center">25-40 m³/h</td>
                  <td className="p-3">Comercial, bloc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'aparate',
      title: '5. Aparate de Utilizare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">5.1 Clasificarea Aparatelor</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Tip A - Fără evacuare</h4>
              <p className="text-gray-300 text-sm mb-2">
                Aparate care evacuează gazele arse direct în încăpere.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Aragaze, plite</li>
                <li>• Necesită ventilare intensă a încăperii</li>
                <li>• Doar în bucătării cu ventilare naturală sau mecanică</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Tip B - Cu tiraj natural</h4>
              <p className="text-gray-300 text-sm mb-2">
                Aparate cu cameră de ardere deschisă, racordate la coș.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• B11 - fără ventilator, fără întrerupător de tiraj</li>
                <li>• B11BS - cu supraveghere atmosferă</li>
                <li>• B22 - cu ventilator pe circuit gaze arse</li>
                <li>• Aer de ardere preluat din încăpere!</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-400 mb-2">Tip C - Cu cameră etanșă</h4>
              <p className="text-gray-300 text-sm mb-2">
                Aparate cu cameră de ardere închisă (turbo/condensare).
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• C12, C32 - prize separate aer/gaze arse</li>
                <li>• C13, C33 - priză coaxială (aer + gaze arse concentrice)</li>
                <li>• C52, C82 - cu racord la exterior (acoperiș/perete)</li>
                <li>• <strong className="text-green-400">Recomandate!</strong> Nu consumă aer din încăpere</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">5.2 Centrale Termice Murale</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Convenționale:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Randament: 88-92%</li>
                  <li>• Temperatură gaze arse: 120-180°C</li>
                  <li>• Coș tradițional sau evacuare perete</li>
                  <li>• Preț mai mic</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-300 mb-2">În condensare:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Randament: 98-109% (PCI)</li>
                  <li>• Temperatură gaze arse: 40-80°C</li>
                  <li>• Coș plastic (PP) sau inox</li>
                  <li>• Necesită evacuare condens</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600 mt-4">
            <h4 className="font-semibold text-green-400 mb-2">✓ De ce centrale în condensare?</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Economie combustibil 15-30%</li>
              <li>• Emisii CO₂ reduse</li>
              <li>• Obligatorii pentru clădiri noi (nZEB)</li>
              <li>• Funcționează optim cu încălzire în pardoseală (35-45°C)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">5.3 Amplasare Aparate</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Cerințe pentru încăperea cu centrală:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <span className="text-yellow-400">Volum minim:</span> 
                <span> 7.5 m³ pentru tip C | 12 m³ pentru tip B sub 30 kW</span>
              </li>
              <li>
                <span className="text-yellow-400">Înălțime minimă:</span>
                <span> 2.2 m</span>
              </li>
              <li>
                <span className="text-yellow-400">Ventilare:</span>
                <span> Orificii jos (aer) și sus (evacuare) pentru tip B</span>
              </li>
              <li>
                <span className="text-yellow-400">Distanțe:</span>
                <span> Min 3 cm lateral, 30 cm frontal (service)</span>
              </li>
              <li>
                <span className="text-yellow-400">Interdicții:</span>
                <span> Băi, dormitoare, garaje, spații cu pericol de incendiu</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'cosuri',
      title: '6. Coșuri și Evacuare Gaze Arse',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">6.1 Tipuri de Coșuri</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Coșuri cu tiraj natural</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Din cărămidă, beton sau metal</li>
                <li>• Secțiune minimă: 14×14 cm sau Ø120 mm</li>
                <li>• Înălțime minimă efectivă: 4 m</li>
                <li>• Pentru aparate tip B</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Tubulatură evacuare (turbo)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Din aluminiu, inox sau PP (condensare)</li>
                <li>• Coaxială Ø60/100 sau Ø80/125</li>
                <li>• Evacuare orizontală (max 3m) sau verticală</li>
                <li>• Pentru aparate tip C</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Coșuri colective (LAS)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Luft-Abgas-System - aer + gaze arse</li>
                <li>• Pentru blocuri cu centrale individuale</li>
                <li>• Canal comun cu racordări etajate</li>
                <li>• Doar pentru aparate tip C33/C53</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">6.2 Dimensionare Coș</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Secțiuni minime coș (tiraj natural):</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-3 text-left">Putere aparat</th>
                    <th className="p-3 text-center">Secțiune rotundă</th>
                    <th className="p-3 text-center">Secțiune dreptunghiulară</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="bg-gray-800">
                    <td className="p-3">până la 17 kW</td>
                    <td className="p-3 text-center">Ø120 mm</td>
                    <td className="p-3 text-center">14×14 cm</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-3">17-25 kW</td>
                    <td className="p-3 text-center">Ø130 mm</td>
                    <td className="p-3 text-center">14×14 cm</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-3">25-35 kW</td>
                    <td className="p-3 text-center">Ø150 mm</td>
                    <td className="p-3 text-center">14×20 cm</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-3">35-50 kW</td>
                    <td className="p-3 text-center">Ø180 mm</td>
                    <td className="p-3 text-center">20×20 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">6.3 Evacuare Orizontală (prin perete)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Distanțe minime de la terminație:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Ferestre/uși:</strong> 0.4-0.6 m lateral, 0.3 m deasupra</li>
              <li>• <strong>Colț clădire:</strong> 0.3 m</li>
              <li>• <strong>Sub streașină:</strong> 0.3 m</li>
              <li>• <strong>Sol:</strong> minim 2.2 m (zonă circulată)</li>
              <li>• <strong>Proprietate vecină:</strong> minim 2 m</li>
              <li>• <strong>Între terminații:</strong> minim 0.5 m</li>
            </ul>
          </div>

          <div className="bg-red-900/30 p-4 rounded-lg border border-red-600 mt-4">
            <h4 className="font-semibold text-red-400 mb-2">⚠️ INTERZIS evacuarea prin:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Pasaje sau curți interioare închise</li>
              <li>• Sub balcoane sau terase închise</li>
              <li>• În spații comune (casa scării)</li>
              <li>• În apropierea prizelor de aer (min 0.6m)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'ventilare',
      title: '7. Ventilarea Spațiilor',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">7.1 Necesitatea Ventilării</h3>
          <p className="text-gray-300 leading-relaxed">
            Aparatele de tip A și B consumă aer din încăpere pentru ardere. Este esențial 
            să se asigure aerul necesar arderii și evacuarea eventualelor scăpări de gaze.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
            <h4 className="font-semibold text-cyan-400 mb-2">Debit aer necesar arderii:</h4>
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
              Qaer = Qgaz × 10 [m³/h]
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Pentru 1 m³ gaz ars sunt necesari aproximativ 10 m³ aer.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">7.2 Orificii de Ventilare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Cerințe pentru aparate tip B:</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded">
                <h5 className="font-semibold text-green-400 mb-2">Orificiu inferior (aer proaspăt):</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Poziție: max 30 cm de pardoseală</li>
                  <li>• Secțiune: 6 cm²/kW, minim 150 cm²</li>
                  <li>• Direct spre exterior sau spații ventilate</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h5 className="font-semibold text-yellow-400 mb-2">Orificiu superior (evacuare):</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Poziție: max 30 cm de plafon</li>
                  <li>• Secțiune: minim 150 cm²</li>
                  <li>• Racordat la coș ventilație sau exterior</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">7.3 Cerințe pentru Bucătării</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <span className="text-yellow-400">Volum minim:</span>
                <span> 8 m³ pentru aragaz 4 ochiuri</span>
              </li>
              <li>
                <span className="text-yellow-400">Fereastră practicabilă:</span>
                <span> sau orificiu de ventilare minim 150 cm²</span>
              </li>
              <li>
                <span className="text-yellow-400">Hotă de absorbție:</span>
                <span> recomandată, racordată la exterior</span>
              </li>
              <li>
                <span className="text-yellow-400">Detector de gaz:</span>
                <span> recomandat pentru siguranță suplimentară</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">7.4 Detectoare de Gaz</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Detector gaz metan (CH₄)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Montare: la 30 cm de plafon (gazul se ridică)</li>
                <li>• Declanșare: la ~10% din LIE</li>
                <li>• Opțional: electrovalvă pentru închidere automată</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Detector CO (monoxid de carbon)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Montare: la înălțimea capului (~1.5m)</li>
                <li>• Declanșare: la ~50 ppm</li>
                <li>• Obligatoriu pentru aparate tip B!</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-900/30 p-4 rounded-lg border border-red-600 mt-4">
            <h4 className="font-semibold text-red-400 mb-2">☠️ PERICOL - Monoxid de carbon!</h4>
            <p className="text-gray-300 text-sm">
              CO este un gaz incolor și inodor, extrem de toxic. Se produce la ardere 
              incompletă (tiraj insuficient, coș înfundat). Simptomele intoxicării: 
              dureri de cap, amețeli, greață. Poate fi fatal!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'executie',
      title: '8. Execuție și Verificări',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-orange-400">8.1 Reguli de Montaj</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Traseu conducte</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Traseu aparent sau în ghene ventilate</li>
                <li>• Pantă 1% spre aparate (pentru condens)</li>
                <li>• Fixare solidă la max. 2 m distanță</li>
                <li>• Îmbinări accesibile (nu în zidărie!)</li>
                <li>• Protecție anticorozivă la traversări</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Îmbinări țevi oțel</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Filetate cu bandă teflon sau cânepă + pastă</li>
                <li>• Sudate de sudori autorizați</li>
                <li>• Interzis: lipitura moale, clești de strângere</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Îmbinări țevi cupru</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Lipire tare (brazare) cu aliaj Ag sau Cu-P</li>
                <li>• Fitinguri cu presare (Viega, Geberit)</li>
                <li>• Interzis: lipire moale cu staniu!</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">8.2 Probe și Verificări</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Probe obligatorii:</h4>
            
            <div className="space-y-3">
              <div className="bg-gray-700 p-3 rounded">
                <h5 className="font-semibold text-yellow-400 mb-1">1. Proba de rezistență</h5>
                <p className="text-gray-300 text-sm">
                  Presiune: 1 bar pentru JP, 3 bar pentru MP. Durată: 10 min. 
                  Criteriu: fără cădere de presiune.
                </p>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <h5 className="font-semibold text-yellow-400 mb-1">2. Proba de etanșeitate</h5>
                <p className="text-gray-300 text-sm">
                  Cu aer sau gaz inert, la presiunea de lucru. 
                  Verificare cu apă cu săpun sau detector electronic.
                </p>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <h5 className="font-semibold text-yellow-400 mb-1">3. Verificare tiraj coș</h5>
                <p className="text-gray-300 text-sm">
                  Pentru aparate tip B: tiraj minim 3 Pa. 
                  Se verifică cu depreziometru sau flacără.
                </p>
              </div>
              
              <div className="bg-gray-700 p-3 rounded">
                <h5 className="font-semibold text-yellow-400 mb-1">4. Analiza gazelor de ardere</h5>
                <p className="text-gray-300 text-sm">
                  CO &lt;100 ppm, CO₂ conform producător, randament ardere.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">8.3 Punere în Funcțiune</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Verificare conformitate instalație cu proiectul</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Aerisire conductă (eliminare aer)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Reglaj presiune regulator</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Pornire aparat și verificare funcționare</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Instruire utilizator</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Întocmire proces verbal de recepție</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-orange-400 mt-6">8.4 Documente Necesare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📄</span>
                <span>Proiect tehnic vizat de verificator atestat</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📄</span>
                <span>Aviz tehnic de racordare (ATR) de la distribuitor</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📄</span>
                <span>Contract de execuție cu firmă autorizată ANRE</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📄</span>
                <span>Certificat de racordare (de la distribuitor)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📄</span>
                <span>Proces verbal de recepție la terminarea lucrărilor (PVRTL)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📄</span>
                <span>Contract de furnizare gaz</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600 mt-4">
            <h4 className="font-semibold text-yellow-400 mb-2">📋 Verificări periodice obligatorii:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Anual:</strong> verificare tehnică periodică (VTP) de firmă autorizată</li>
              <li>• <strong>La 2 ani:</strong> curățare și verificare coș de fum</li>
              <li>• <strong>La 10 ani:</strong> revizie tehnică generală (RTG)</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const filteredSections = sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof section.content === 'string' &&
        section.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeContent = sections.find((s) => s.id === activeSection);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar Navigation */}
      <aside className="lg:w-72 flex-shrink-0">
        <div className="bg-gray-800 rounded-lg p-4 sticky top-4">
          <div className="mb-4">
            <label htmlFor="search-gaze" className="sr-only">
              Caută în ghid
            </label>
            <input
              id="search-gaze"
              type="text"
              placeholder="Caută în ghid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Caută în ghidul de instalații de gaze"
            />
          </div>
          <nav aria-label="Secțiuni ghid gaze">
            <ul className="space-y-1">
              {filteredSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-orange-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                    aria-current={activeSection === section.id ? 'page' : undefined}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="bg-gray-800 rounded-lg p-6">
          {activeContent && (
            <article>
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                {activeContent.title}
              </h2>
              {activeContent.content}
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
