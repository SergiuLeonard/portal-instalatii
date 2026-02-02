"use client";

import { useState } from "react";

interface Sectiune {
  id: string;
  titlu: string;
  continut: React.ReactNode;
}

export default function GhidApa() {
  const [sectiuneActiva, setSectiuneActiva] = useState<string>("intro");

  const sectiuni: Sectiune[] = [
    {
      id: "intro",
      titlu: "1. Introducere și Terminologie",
      continut: (
        <div className="space-y-4">
          <p>
            Instalațiile de alimentare cu apă reprezintă ansamblul de conducte, armături și echipamente 
            care asigură transportul apei de la sursa de alimentare până la punctele de consum din interiorul clădirilor.
          </p>
          
          <h4 className="font-semibold text-cyan-400 mt-4">Terminologie de bază:</h4>
          <dl className="space-y-2 ml-4">
            <div>
              <dt className="font-medium text-white">Branșament</dt>
              <dd className="text-gray-400 ml-4">Conducta care face legătura între rețeaua publică și instalația interioară</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Coloană</dt>
              <dd className="text-gray-400 ml-4">Conductă verticală care distribuie apa pe nivele</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Ramificație</dt>
              <dd className="text-gray-400 ml-4">Conductă orizontală care alimentează obiectele sanitare de pe un nivel</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Debit de calcul (qc)</dt>
              <dd className="text-gray-400 ml-4">Debitul maxim probabil pentru dimensionarea instalației</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Presiune de utilizare (Hu)</dt>
              <dd className="text-gray-400 ml-4">Presiunea minimă necesară la punctul de consum</dd>
            </div>
          </dl>
        </div>
      ),
    },
    {
      id: "normativ",
      titlu: "2. Cadru Normativ",
      continut: (
        <div className="space-y-4">
          <p>Proiectarea instalațiilor de apă se realizează conform următoarelor normative:</p>
          
          <div className="grid gap-3 mt-4">
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <span className="text-cyan-400 font-mono font-bold">STAS 1478-90</span>
              <p className="text-gray-400 text-sm mt-1">Instalații sanitare. Alimentarea cu apă la construcții civile și industriale. Prescripții fundamentale de proiectare.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <span className="text-cyan-400 font-mono font-bold">I9-2015</span>
              <p className="text-gray-400 text-sm mt-1">Normativ pentru proiectarea și executarea instalațiilor sanitare.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <span className="text-cyan-400 font-mono font-bold">SR EN 806 (părțile 1-5)</span>
              <p className="text-gray-400 text-sm mt-1">Specificații pentru instalații de apă potabilă din interiorul clădirilor.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
              <span className="text-cyan-400 font-mono font-bold">Legea 458/2002</span>
              <p className="text-gray-400 text-sm mt-1">Calitatea apei potabile - parametri de calitate.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "surse",
      titlu: "3. Surse de Alimentare cu Apă",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">3.1 Rețeaua publică de distribuție</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Cea mai frecventă sursă pentru clădiri urbane</li>
            <li>Presiune disponibilă: 2.5 - 6 bar (în funcție de zonă)</li>
            <li>Necesită branșament și contor la limita proprietății</li>
            <li>Avantaj: calitate controlată, debit constant</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">3.2 Surse proprii</h4>
          
          <div className="ml-4 space-y-3">
            <div>
              <h5 className="font-medium text-white">Foraje / Puțuri:</h5>
              <ul className="list-disc ml-6 text-gray-400 text-sm">
                <li>Necesită autorizație de exploatare</li>
                <li>Analize periodice ale calității apei</li>
                <li>Tratare (filtrare, dezinfecție) obligatorie</li>
                <li>Pompă submersibilă + vas de expansiune</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-white">Captări de suprafață:</h5>
              <ul className="list-disc ml-6 text-gray-400 text-sm">
                <li>Râuri, lacuri (rar pentru clădiri individuale)</li>
                <li>Stație de tratare complexă necesară</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 mt-4">
            <p className="text-amber-400 text-sm">
              <strong>⚠️ Atenție:</strong> Pentru clădiri cu alimentare din rețea publică + rezervor/pompă, 
              este obligatorie separarea hidraulică (întreruperea coloanei de apă) pentru a preveni contaminarea rețelei.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "componente",
      titlu: "4. Elemente Componente",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">4.1 Branșamentul</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Material: PEID (polietilenă de înaltă densitate) PE100, PN10/16</li>
            <li>Diametru minim: Dn 32 mm pentru clădiri individuale</li>
            <li>Adâncime montare: min. 90-110 cm (sub adâncimea de îngheț)</li>
            <li>Panta: min. 0.3% spre rețea (pentru golire)</li>
            <li>Protecție: tub de protecție la traversarea fundației</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">4.2 Contorizarea</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Contor general la limita proprietății sau în cămin</li>
            <li>Contoare individuale pentru fiecare unitate locativă</li>
            <li>Tip: cu jet unic/multiplu, ultrasonice (clasa B, C)</li>
            <li>Montare: orizontal, pe conductă dreaptă (5D-3D)</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">4.3 Distribuția interioară</h4>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Element</th>
                  <th className="text-left py-2 text-gray-400">Descriere</th>
                  <th className="text-left py-2 text-gray-400">Diametre uzuale</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Distribuție principală</td>
                  <td>Conductă orizontală în subsol</td>
                  <td>Dn 32 - 63 mm</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Coloane</td>
                  <td>Conducte verticale pe casa scării</td>
                  <td>Dn 25 - 40 mm</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Ramificații</td>
                  <td>Distribuție pe nivel/apartament</td>
                  <td>Dn 20 - 32 mm</td>
                </tr>
                <tr>
                  <td className="py-2">Racorduri</td>
                  <td>Legătură la obiecte sanitare</td>
                  <td>Dn 15 - 20 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "calcul",
      titlu: "5. Calculul Hidraulic",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">5.1 Determinarea debitelor</h4>
          <p className="text-gray-300">Metoda echivalenților specifici (STAS 1478):</p>
          
          <div className="bg-gray-800/50 rounded-lg p-4 mt-2 font-mono text-sm">
            <p className="text-cyan-400">E = 0.7 × E₁ + E₂</p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <ul className="text-gray-400 ml-4">
              <li>E₁ = echivalent baterii amestecătoare</li>
              <li>E₂ = echivalent robinete apă rece</li>
            </ul>
            <p className="text-cyan-400 mt-3">qc = b × (a × c × E + 0.004 × E) [l/s]</p>
          </div>

          <h4 className="font-semibold text-cyan-400 mt-4">5.2 Echivalenți specifici (e):</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Obiect sanitar</th>
                  <th className="text-center py-2 text-gray-400">e (AR)</th>
                  <th className="text-center py-2 text-gray-400">e (AC)</th>
                  <th className="text-center py-2 text-gray-400">qs [l/s]</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Lavoar</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.1</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Cada de baie</td>
                  <td className="text-center">0.5</td>
                  <td className="text-center">0.5</td>
                  <td className="text-center">0.3</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Duș</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.15</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">WC cu rezervor</td>
                  <td className="text-center">0.5</td>
                  <td className="text-center">-</td>
                  <td className="text-center">0.12</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Spălător bucătărie</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.2</td>
                </tr>
                <tr>
                  <td className="py-2">Mașină de spălat</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">-</td>
                  <td className="text-center">0.2</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-cyan-400 mt-4">5.3 Dimensionarea conductelor</h4>
          <p className="text-gray-300">Criterii de dimensionare:</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-400">
            <li>Viteza apei: 0.5 - 2.0 m/s (optim 1.0 - 1.5 m/s)</li>
            <li>Gradient pierderi de sarcină: max. 40 mm CA/m</li>
            <li>Presiune minimă la cel mai defavorabil punct: 5 m CA</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">5.4 Verificarea presiunii</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 mt-2 font-mono text-sm">
            <p className="text-cyan-400">H<sub>nec</sub> = H<sub>g</sub> + Σh<sub>d</sub> + Σh<sub>l</sub> + H<sub>u</sub></p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <ul className="text-gray-400 ml-4">
              <li>H<sub>g</sub> = înălțimea geodezică [m]</li>
              <li>Σh<sub>d</sub> = pierderi distribuite [m]</li>
              <li>Σh<sub>l</sub> = pierderi locale [m]</li>
              <li>H<sub>u</sub> = presiunea de utilizare [m]</li>
            </ul>
            <p className="text-green-400 mt-3">Condiție: H<sub>disp</sub> ≥ H<sub>nec</sub></p>
          </div>
        </div>
      ),
    },
    {
      id: "materiale",
      titlu: "6. Materiale pentru Conducte",
      continut: (
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-500/30">
              <h4 className="font-semibold text-cyan-400 mb-2">PPR (Polipropilenă)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Cel mai utilizat pentru instalații interioare</li>
                <li>✓ Îmbinare prin sudură (polifuziune)</li>
                <li>✓ Rezistent la coroziune</li>
                <li>✓ Temp. max: 70°C (PPR), 95°C (PPR-CT)</li>
                <li>✓ Presiune: PN 10, PN 16, PN 20</li>
                <li>⚠ Dilatare termică mare - compensatori necesari</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-red-500/30">
              <h4 className="font-semibold text-red-400 mb-2">PE-X (Polietilenă reticulată)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Flexibil - montaj rapid în sistem radial</li>
                <li>✓ Tipuri: PE-Xa, PE-Xb, PE-Xc</li>
                <li>✓ Îmbinare: fitinguri cu presare sau expandare</li>
                <li>✓ Ideal pentru încălzire în pardoseală</li>
                <li>✓ Temp. max: 95°C</li>
                <li>⚠ Sensibil la UV - necesită protecție</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-amber-500/30">
              <h4 className="font-semibold text-amber-400 mb-2">Cupru</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Durabilitate excelentă (50+ ani)</li>
                <li>✓ Proprietăți antibacteriene naturale</li>
                <li>✓ Îmbinare: lipire, presare, racorduri</li>
                <li>✓ Rezistent la temperaturi ridicate</li>
                <li>⚠ Cost ridicat</li>
                <li>⚠ Coroziune în ape agresive (pH scăzut)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-500/30">
              <h4 className="font-semibold text-gray-300 mb-2">Oțel zincat (istoric)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Robustețe mecanică</li>
                <li>⚠ Nu se mai folosește pentru apă potabilă</li>
                <li>⚠ Probleme de coroziune și depuneri</li>
                <li>⚠ Îmbinare prin filet - manoperă mare</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "armaturi",
      titlu: "7. Armături și Accesorii",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">7.1 Robinete de închidere</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Robinet cu sferă</strong> - cel mai utilizat, închidere rapidă ¼ tură</li>
            <li><strong>Robinet cu ventil</strong> - reglaj debit, pierderi mari</li>
            <li><strong>Robinet cu sertar</strong> - pentru diametre mari, închidere completă</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">7.2 Clapete de reținere (sens unic)</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Previn întoarcerea apei în rețea</li>
            <li>Obligatorii după pompă și la branșament</li>
            <li>Tipuri: cu clapă, cu arc, cu bilă</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">7.3 Reductoare de presiune</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Mențin presiune constantă la variații din rețea</li>
            <li>Obligatorii când presiunea depășește 5-6 bar</li>
            <li>Montare: după contor, pe poziție orizontală</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">7.4 Alte accesorii</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Filtru mecanic</strong> - protecție echipamente (obligatoriu)</li>
            <li><strong>Vas de expansiune</strong> - pentru sisteme cu pompă</li>
            <li><strong>Dezaerator</strong> - elimină aerul din instalație</li>
            <li><strong>Robinet de golire</strong> - în punctele joase</li>
            <li><strong>Supapă de siguranță</strong> - pentru boilere</li>
          </ul>
        </div>
      ),
    },
    {
      id: "apa-calda",
      titlu: "8. Apă Caldă Menajeră",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">8.1 Sisteme de preparare</h4>
          
          <div className="grid gap-3 mt-2">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Boilere electrice</h5>
              <p className="text-gray-400 text-sm">Avantaje: instalare simplă, cost redus. Dezavantaje: consum electric mare, capacitate limitată.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Centrale termice murale</h5>
              <p className="text-gray-400 text-sm">Cu producție instantanee sau cu boiler incorporat. Eficiență ridicată (condensare).</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Panouri solare termice</h5>
              <p className="text-gray-400 text-sm">Acoperă 60-80% din necesar în sezonul cald. Necesită sursă auxiliară.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Pompe de căldură</h5>
              <p className="text-gray-400 text-sm">Eficiență COP 3-4. Ideale în combinație cu fotovoltaic.</p>
            </div>
          </div>

          <h4 className="font-semibold text-cyan-400 mt-4">8.2 Distribuție cu recirculare</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Obligatorie când distanța depășește 6m până la cel mai îndepărtat punct</li>
            <li>Pompă de recirculare cu debit redus (0.1-0.3 l/s)</li>
            <li>Izolație termică conducte: min. 13mm pentru Dn ≤ 22mm</li>
            <li>Temperatura în recirculare: min. 55°C (prevenire Legionella)</li>
          </ul>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mt-4">
            <h5 className="text-red-400 font-medium">⚠️ Prevenire Legionella:</h5>
            <ul className="text-gray-400 text-sm mt-2 space-y-1">
              <li>• Temperatura în boiler: min. 60°C</li>
              <li>• Temperatura la robinetele utilizatorilor: min. 50°C</li>
              <li>• Dezinfecție termică periodică: 70°C timp de 30 minute</li>
              <li>• Evitarea stagnării apei (puncte moarte)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "executie",
      titlu: "9. Execuție și Montaj",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">9.1 Reguli generale de montaj</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Conductele se montează cu pantă de min. 0.3% spre punctele de golire</li>
            <li>Distanța minimă între conducte și pereți: 3 cm</li>
            <li>Suporți/brățări la maxim 1.5m pentru conducte orizontale</li>
            <li>Traversarea pereților/planșeelor: prin tuburi de protecție</li>
            <li>Conducta de apă rece se montează sub cea de apă caldă</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">9.2 Compensarea dilatărilor</h4>
          <p className="text-gray-400 text-sm mb-2">
            Pentru conducte PPR, dilatarea liniară este ~0.15 mm/m/°C:
          </p>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Lire de dilatație (compensatori în U) la fiecare 2 nivele</li>
            <li>Puncte fixe și puncte mobile (glisante)</li>
            <li>Lungime maximă între puncte fixe: 6-8m pentru PPR</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">9.3 Izolații termice</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Diametru</th>
                  <th className="text-left py-2 text-gray-400">Grosime izolație AC</th>
                  <th className="text-left py-2 text-gray-400">Grosime izolație AR*</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn ≤ 22 mm</td>
                  <td>13 mm</td>
                  <td>9 mm</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 22-35 mm</td>
                  <td>19 mm</td>
                  <td>13 mm</td>
                </tr>
                <tr>
                  <td className="py-2">Dn {'>'} 35 mm</td>
                  <td>25 mm</td>
                  <td>19 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-1">* AR: izolație anticondensare în spații cu umiditate ridicată</p>
        </div>
      ),
    },
    {
      id: "probe",
      titlu: "10. Probe și Recepție",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-cyan-400">10.1 Proba de presiune (etanșeitate)</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-300">
              <li><strong>Presiune de probă:</strong> 1.5 × presiunea de serviciu (min. 10 bar)</li>
              <li><strong>Durata:</strong> minimum 30 minute</li>
              <li><strong>Criteriu acceptare:</strong> fără scădere de presiune</li>
              <li><strong>Documentare:</strong> Proces verbal de probă presiune</li>
            </ul>
          </div>

          <h4 className="font-semibold text-cyan-400 mt-4">10.2 Spălarea instalației</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Se execută înainte de punerea în funcțiune</li>
            <li>Viteza apei de spălare: min. 1.5 m/s</li>
            <li>Până când apa evacuată este limpede</li>
            <li>Pentru instalații mari: dezinfecție cu clor</li>
          </ul>

          <h4 className="font-semibold text-cyan-400 mt-4">10.3 Documente de recepție</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Proces verbal probe de presiune</li>
            <li>Certificat calitate materiale</li>
            <li>Declarații de conformitate echipamente</li>
            <li>Schema executată a instalației (as-built)</li>
            <li>Instrucțiuni de exploatare și întreținere</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-cyan-500/30 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>💧</span> Ghid de Proiectare - Instalații de Apă
        </h2>
        <p className="text-gray-400 mt-1">
          Alimentare cu apă rece și apă caldă menajeră pentru clădiri civile
        </p>
      </div>

      {/* Cuprins navigabil */}
      <nav aria-label="Cuprins ghid instalații apă">
        <div className="flex flex-wrap gap-2">
          {sectiuni.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSectiuneActiva(s.id)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                sectiuneActiva === s.id
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {s.titlu}
            </button>
          ))}
        </div>
      </nav>

      {/* Conținut secțiune activă */}
      <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        {sectiuni.map((s) => (
          <div
            key={s.id}
            className={sectiuneActiva === s.id ? "block" : "hidden"}
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4">{s.titlu}</h3>
            <div className="text-gray-300 leading-relaxed">
              {s.continut}
            </div>
          </div>
        ))}
      </article>

      {/* Link către calculator */}
      <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
        <p className="text-cyan-400 font-medium mb-2">🔢 Calculator disponibil:</p>
        <p className="text-gray-400 text-sm">
          Folosește <a href="/calculatoare" className="text-cyan-400 hover:underline">Calculatorul pentru Apă Rece + Caldă</a> pentru 
          dimensionarea rapidă a instalației conform formulelor din acest ghid.
        </p>
      </div>
    </div>
  );
}