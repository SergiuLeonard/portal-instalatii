'use client';

import React, { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function GhidVentilare() {
  const [activeSection, setActiveSection] = useState<string>('introducere');
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'introducere',
      title: '1. Introducere în Instalații de Ventilare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">1.1 Definiție și Scopul Ventilării</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>Ventilarea</strong> reprezintă ansamblul proceselor și instalațiilor destinate asigurării 
            calității aerului interior prin înlocuirea controlată a aerului viciat cu aer proaspăt. 
            Scopul principal este menținerea parametrilor de confort și sănătate pentru ocupanți.
          </p>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
            <h4 className="font-semibold text-cyan-300 mb-2">Obiectivele ventilării:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Asigurarea oxigenului necesar respirației</li>
              <li>Eliminarea CO₂ și a poluanților</li>
              <li>Controlul umidității interioare</li>
              <li>Eliminarea mirosurilor neplăcute</li>
              <li>Prevenirea condensului și mucegaiului</li>
              <li>Diluarea substanțelor nocive</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">1.2 Clasificarea Sistemelor de Ventilare</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">După modul de acționare:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• <strong>Ventilare naturală</strong> - bazată pe diferențe de temperatură și presiune</li>
                <li>• <strong>Ventilare mecanică</strong> - cu ventilatoare</li>
                <li>• <strong>Ventilare mixtă</strong> - combinație</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">După funcție:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• <strong>Ventilare de introducere</strong> - aport aer proaspăt</li>
                <li>• <strong>Ventilare de evacuare</strong> - extragere aer viciat</li>
                <li>• <strong>Ventilare echilibrată</strong> - introducere + evacuare</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">1.3 Cadrul Normativ</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>I5-2022</strong> - Normativ pentru proiectarea și executarea instalațiilor de ventilare și climatizare</li>
              <li>• <strong>SR EN 16798-1</strong> - Performanța energetică a clădirilor - Ventilare</li>
              <li>• <strong>SR EN 13779</strong> - Ventilarea clădirilor nerezidențiale</li>
              <li>• <strong>C107-2005</strong> - Normativ privind calculul termotehnic</li>
              <li>• <strong>MC001</strong> - Metodologie de calcul al performanței energetice</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'debite',
      title: '2. Calculul Debitelor de Aer',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">2.1 Metode de Calcul</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-400 mb-2">Metoda 1: După numărul de ocupanți</h4>
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
              Q = n × q [m³/h]
            </div>
            <p className="text-gray-300 mt-2 text-sm">
              Unde: n = numărul de persoane, q = debitul specific per persoană (25-50 m³/h·pers)
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-400 mb-2">Metoda 2: După numărul de schimburi de aer</h4>
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
              Q = V × n [m³/h]
            </div>
            <p className="text-gray-300 mt-2 text-sm">
              Unde: V = volumul încăperii [m³], n = numărul de schimburi pe oră [1/h]
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-400 mb-2">Metoda 3: După suprafața încăperii</h4>
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
              Q = A × q [m³/h]
            </div>
            <p className="text-gray-300 mt-2 text-sm">
              Unde: A = suprafața [m²], q = debitul specific per m² (3-10 m³/h·m²)
            </p>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">2.2 Debite Recomandate după Destinație</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Tip încăpere</th>
                  <th className="p-3 text-center">Schimburi/oră</th>
                  <th className="p-3 text-center">m³/h per persoană</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Locuințe - living</td>
                  <td className="p-3 text-center">0.5 - 1</td>
                  <td className="p-3 text-center">25 - 30</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Locuințe - dormitor</td>
                  <td className="p-3 text-center">0.5 - 1</td>
                  <td className="p-3 text-center">25 - 30</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Bucătărie</td>
                  <td className="p-3 text-center">10 - 15</td>
                  <td className="p-3 text-center">60 m³/h (hotă)</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Baie / WC</td>
                  <td className="p-3 text-center">6 - 10</td>
                  <td className="p-3 text-center">25 - 50 m³/h</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Birouri</td>
                  <td className="p-3 text-center">4 - 6</td>
                  <td className="p-3 text-center">30 - 50</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Săli de conferințe</td>
                  <td className="p-3 text-center">6 - 8</td>
                  <td className="p-3 text-center">30 - 40</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Restaurante</td>
                  <td className="p-3 text-center">8 - 12</td>
                  <td className="p-3 text-center">35 - 45</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Săli sport</td>
                  <td className="p-3 text-center">6 - 8</td>
                  <td className="p-3 text-center">60 - 80</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Laboratoare</td>
                  <td className="p-3 text-center">10 - 15</td>
                  <td className="p-3 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'naturala',
      title: '3. Ventilarea Naturală',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">3.1 Principii de Funcționare</h3>
          <p className="text-gray-300 leading-relaxed">
            Ventilarea naturală se bazează pe diferențele de presiune create de:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-400 mb-2">Efectul termic (tiraj)</h4>
              <p className="text-gray-300 text-sm">
                Aerul cald interior, mai ușor, se ridică și iese prin deschideri superioare, 
                fiind înlocuit cu aer rece de la exterior prin deschideri inferioare.
              </p>
              <div className="bg-gray-900 p-2 rounded mt-2 font-mono text-xs text-cyan-300">
                Δp = ρ × g × h × (Ti - Te) / Ti [Pa]
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Efectul vântului</h4>
              <p className="text-gray-300 text-sm">
                Vântul creează suprapresiune pe fațada expusă și depresiune pe fațada opusă 
                și pe acoperiș, generând curenți de aer.
              </p>
              <div className="bg-gray-900 p-2 rounded mt-2 font-mono text-xs text-cyan-300">
                Δp = 0.5 × ρ × v² × (Cp1 - Cp2) [Pa]
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">3.2 Soluții Constructive</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Ferestre și uși</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Ferestre oscilo-batante pentru ventilare controlată</li>
                <li>• Fante de ventilare în tâmplărie (grile reglabile)</li>
                <li>• Suprafață recomandată: min. 1/20 din suprafața pardoselii</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">Coșuri de ventilare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Coșuri individuale pentru băi și bucătării</li>
                <li>• Coșuri colective cu racordare etajată</li>
                <li>• Înălțime minimă: 0.4m deasupra coamei acoperișului</li>
                <li>• Secțiune minimă: 0.015 m² pentru băi, 0.02 m² pentru bucătării</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Luminatoare și lanternouri</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Eficiente pentru hale industriale</li>
                <li>• Pot fi fixe sau cu deschidere mecanizată</li>
                <li>• Suprafață: 2-5% din suprafața halei</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600 mt-4">
            <h4 className="font-semibold text-yellow-400 mb-2">⚠️ Atenție la proiectare:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Ventilarea naturală depinde de condițiile meteo - nu este constantă</li>
              <li>• Nu se recomandă pentru clădiri etanșe sau cu cerințe stricte de climatizare</li>
              <li>• Poate genera disconfort termic în sezonul rece</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'mecanica',
      title: '4. Ventilarea Mecanică',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">4.1 Tipuri de Sisteme</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-t-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Sistem de introducere</h4>
              <p className="text-gray-300 text-sm">
                Aer proaspăt introdus mecanic, evacuare naturală prin exfiltrație.
              </p>
              <p className="text-green-400 text-xs mt-2">Creează suprapresiune</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-t-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Sistem de evacuare</h4>
              <p className="text-gray-300 text-sm">
                Aer viciat extras mecanic, introducere naturală prin infiltrație.
              </p>
              <p className="text-yellow-400 text-xs mt-2">Creează depresiune</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-t-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Sistem echilibrat</h4>
              <p className="text-gray-300 text-sm">
                Atât introducerea cât și evacuarea sunt mecanice. Control complet.
              </p>
              <p className="text-cyan-400 text-xs mt-2">Presiune neutră/controlată</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">4.2 Componente Principale</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Ventilatoare</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-300">
                <div>
                  <p className="font-medium text-white">Axiale:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Debite mari, presiuni mici</li>
                    <li>Uz: hote, aerisire generală</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-white">Centrifugale:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>Presiuni mari, debite moderate</li>
                    <li>Uz: sisteme cu tubulatura lungă</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Tubulatura</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Circulară</strong> - cea mai eficientă hidraulic, recomandată</li>
                <li>• <strong>Rectangulară</strong> - flexibilitate în spații cu înălțime redusă</li>
                <li>• <strong>Flexibilă</strong> - doar pentru racorduri scurte (&lt;1.5m)</li>
                <li>• Viteze recomandate: 3-5 m/s (ramuri), 5-8 m/s (coloane principale)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Grile și difuzoare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Grile liniare</strong> - pentru tavane suspendate</li>
                <li>• <strong>Difuzoare cu jet</strong> - pentru spații înalte</li>
                <li>• <strong>Anemostate</strong> - distribuție uniformă 360°</li>
                <li>• <strong>Grile de transfer</strong> - între încăperi</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">4.3 Calcul Pierderi de Sarcină</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="font-mono text-sm text-cyan-300 mb-2">
              Δp = λ × (L/D) × (ρv²/2) + Σξ × (ρv²/2) [Pa]
            </div>
            <p className="text-gray-400 text-sm">
              λ = coeficient de frecare | L = lungime | D = diametru | ξ = coeficienți locali
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'recuperare',
      title: '5. Recuperarea Căldurii',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">5.1 Principiul Recuperării</h3>
          <p className="text-gray-300 leading-relaxed">
            Recuperatoarele de căldură preiau energia termică din aerul evacuat și o transferă 
            aerului proaspăt introdus, reducând semnificativ consumul energetic pentru 
            încălzirea/răcirea aerului de ventilare.
          </p>

          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600">
            <h4 className="font-semibold text-green-400 mb-2">✓ Beneficii energetice</h4>
            <p className="text-gray-300 text-sm">
              Un recuperator cu eficiență de 80% poate reduce consumul de energie pentru 
              ventilare cu până la 70-75%. Obligatoriu pentru clădiri nZEB!
            </p>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">5.2 Tipuri de Recuperatoare</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Recuperatoare cu plăci (în contracurent)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Eficiență: 50-90%</li>
                <li>• Fără părți mobile</li>
                <li>• Fără transfer de umiditate (sensibil)</li>
                <li>• Risc de îngheț la temperaturi scăzute</li>
                <li>• Cele mai utilizate în rezidențial</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-2">Recuperatoare rotative</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Eficiență: 70-85%</li>
                <li>• Transfer și de umiditate (entalpic)</li>
                <li>• Necesită motor pentru rotație</li>
                <li>• Posibil mic transfer de mirosuri</li>
                <li>• Recomandate pentru debite mari</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Recuperatoare cu baterii (run-around)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Eficiență: 40-60%</li>
                <li>• Fluxuri separate complet</li>
                <li>• Flexibilitate în amplasare</li>
                <li>• Necesită pompă de circulație</li>
                <li>• Pentru situații speciale (laboratoare)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">5.3 Eficiența Recuperării</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="font-mono text-sm text-cyan-300 mb-2">
              η = (t₂ - t₁) / (t₃ - t₁) × 100 [%]
            </div>
            <p className="text-gray-400 text-sm">
              t₁ = temperatura aerului exterior | t₂ = temperatura aerului după recuperator | 
              t₃ = temperatura aerului evacuat
            </p>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Clasă eficiență</th>
                  <th className="p-3 text-center">Randament</th>
                  <th className="p-3 text-left">Observații</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 text-green-400">Foarte eficient</td>
                  <td className="p-3 text-center">&gt;80%</td>
                  <td className="p-3">Recomandat nZEB, PassivHaus</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 text-yellow-400">Eficient</td>
                  <td className="p-3 text-center">70-80%</td>
                  <td className="p-3">Standard pentru clădiri noi</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 text-orange-400">Moderat</td>
                  <td className="p-3 text-center">50-70%</td>
                  <td className="p-3">Acceptabil renovări</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 text-red-400">Scăzut</td>
                  <td className="p-3 text-center">&lt;50%</td>
                  <td className="p-3">Nu se recomandă</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'climatizare',
      title: '6. Climatizare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">6.1 Definiție și Diferențe</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>Climatizarea</strong> reprezintă controlul complet al parametrilor aerului interior: 
            temperatură, umiditate, puritate și viteza curenților de aer. Spre deosebire de ventilare, 
            climatizarea include și tratarea termică și higrometrică a aerului.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
              <h4 className="font-semibold text-blue-400 mb-2">Ventilare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Înlocuire aer</li>
                <li>• Control parțial temperatură</li>
                <li>• Fără control umiditate</li>
              </ul>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-600">
              <h4 className="font-semibold text-cyan-400 mb-2">Climatizare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Înlocuire + tratare aer</li>
                <li>• Control precis temperatură</li>
                <li>• Control umiditate</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">6.2 Sisteme de Climatizare</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Sisteme "totul aer"</h4>
              <p className="text-gray-300 text-sm mb-2">
                Aerul este tratat complet în centrala de tratare (UTA) și distribuit prin tubulatura.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• UTA cu un singur canal</li>
                <li>• UTA cu debit variabil (VAV)</li>
                <li>• UTA cu dublu canal</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">Sisteme "totul apă"</h4>
              <p className="text-gray-300 text-sm mb-2">
                Unități terminale locale (ventiloconvectoare) alimentate cu apă caldă/rece.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Sistem cu 2 țevi</li>
                <li>• Sistem cu 4 țevi (încălzire + răcire simultană)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Sisteme mixte (aer-apă)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Combinație: aer primar pentru ventilare + unități terminale pentru climatizare.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Aer primar + ventiloconvectoare</li>
                <li>• Aer primar + grinzi răcitoare</li>
                <li>• Aer primar + plafoane răcitoare</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">Sisteme cu agent frigorific (VRF/VRV)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Sisteme cu expansiune directă, agent frigorific circulă până la unitățile interioare.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Flexibilitate mare</li>
                <li>• Eficiență ridicată la sarcini parțiale</li>
                <li>• Control individual pe zone</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">6.3 Sarcini Termice</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Sarcini de răcire (vara):</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Radiație solară prin ferestre</li>
              <li>• Transmisie prin pereți și acoperiș</li>
              <li>• Sarcini interne (persoane, echipamente, iluminat)</li>
              <li>• Infiltrații de aer cald</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'calitate',
      title: '7. Calitatea Aerului Interior (IAQ)',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">7.1 Parametri de Calitate</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Parametru</th>
                  <th className="p-3 text-center">Valoare recomandată</th>
                  <th className="p-3 text-center">Limită admisă</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">CO₂</td>
                  <td className="p-3 text-center text-green-400">&lt;800 ppm</td>
                  <td className="p-3 text-center text-yellow-400">&lt;1000 ppm</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">CO</td>
                  <td className="p-3 text-center text-green-400">&lt;5 ppm</td>
                  <td className="p-3 text-center text-yellow-400">&lt;9 ppm</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Umiditate relativă</td>
                  <td className="p-3 text-center text-green-400">40-60%</td>
                  <td className="p-3 text-center text-yellow-400">30-70%</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Formaldehidă</td>
                  <td className="p-3 text-center text-green-400">&lt;0.05 ppm</td>
                  <td className="p-3 text-center text-yellow-400">&lt;0.1 ppm</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">PM2.5</td>
                  <td className="p-3 text-center text-green-400">&lt;10 μg/m³</td>
                  <td className="p-3 text-center text-yellow-400">&lt;25 μg/m³</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">7.2 Categorii IAQ (SR EN 16798-1)</h3>
          
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-green-900/30 p-3 rounded-lg border border-green-600">
              <h4 className="font-semibold text-green-400">Categoria I (Excelent)</h4>
              <p className="text-gray-300 text-sm">Nivel ridicat de așteptări. Spații pentru persoane sensibile.</p>
              <p className="text-xs text-gray-400 mt-1">CO₂ &lt;550 ppm peste exterior</p>
            </div>
            <div className="bg-blue-900/30 p-3 rounded-lg border border-blue-600">
              <h4 className="font-semibold text-blue-400">Categoria II (Normal)</h4>
              <p className="text-gray-300 text-sm">Nivel normal de așteptări. Clădiri noi și renovate.</p>
              <p className="text-xs text-gray-400 mt-1">CO₂ &lt;800 ppm peste exterior</p>
            </div>
            <div className="bg-yellow-900/30 p-3 rounded-lg border border-yellow-600">
              <h4 className="font-semibold text-yellow-400">Categoria III (Acceptabil)</h4>
              <p className="text-gray-300 text-sm">Nivel moderat acceptabil. Clădiri existente.</p>
              <p className="text-xs text-gray-400 mt-1">CO₂ &lt;1150 ppm peste exterior</p>
            </div>
            <div className="bg-red-900/30 p-3 rounded-lg border border-red-600">
              <h4 className="font-semibold text-red-400">Categoria IV (Scăzut)</h4>
              <p className="text-gray-300 text-sm">Acceptat doar temporar sau în perioade limitate.</p>
              <p className="text-xs text-gray-400 mt-1">CO₂ &gt;1150 ppm peste exterior</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">7.3 Filtrarea Aerului</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 mb-3">Clase de filtre conform ISO 16890:</p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>ISO Coarse</strong> - prefiltru, particule mari (&gt;10μm)</li>
              <li>• <strong>ISO ePM10</strong> - particule &lt;10μm (praf, polen)</li>
              <li>• <strong>ISO ePM2.5</strong> - particule fine &lt;2.5μm</li>
              <li>• <strong>ISO ePM1</strong> - particule foarte fine &lt;1μm</li>
              <li>• <strong>HEPA (H13-H14)</strong> - pentru săli curate, spitale</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'executie',
      title: '8. Execuție și Punere în Funcțiune',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-cyan-400">8.1 Reguli de Montaj</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Tubulatura</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Pante de 1-2% spre punctele de drenaj</li>
                <li>• Etanșare clase A, B sau C conform normativ</li>
                <li>• Susțineri la max. 3m pentru tuburi orizontale</li>
                <li>• Izolare termică pe porțiuni exterioare și zone reci</li>
                <li>• Acces pentru curățare (trape de vizitare)</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Ventilatoare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Montaj pe suporturi antivibrante</li>
                <li>• Racorduri flexibile la tubulatura</li>
                <li>• Acces pentru întreținere</li>
                <li>• Conectare electrică conformă cu schema</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Grile și difuzoare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Poziționare conform proiectului</li>
                <li>• Etanșare la racorduri</li>
                <li>• Reglare după măsurători</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">8.2 Verificări și Probe</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-green-400 mb-2">Probe de etanșeitate</h4>
            <p className="text-gray-300 text-sm mb-2">
              Se verifică etanșeitatea rețelei la presiunea de lucru + 10%.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-300 mt-2">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-2 text-left">Clasă</th>
                    <th className="p-2 text-center">Pierderi admise</th>
                    <th className="p-2 text-left">Aplicare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-2">A</td>
                    <td className="p-2 text-center">0.027 × p^0.65 × A</td>
                    <td className="p-2">Standard</td>
                  </tr>
                  <tr>
                    <td className="p-2">B</td>
                    <td className="p-2 text-center">0.009 × p^0.65 × A</td>
                    <td className="p-2">Rezidențial calitate</td>
                  </tr>
                  <tr>
                    <td className="p-2">C</td>
                    <td className="p-2 text-center">0.003 × p^0.65 × A</td>
                    <td className="p-2">nZEB, PassivHaus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-400 mb-2">Măsurători la PIF</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Debite de aer la fiecare grilă/difuzor</li>
              <li>• Presiuni în puncte caracteristice</li>
              <li>• Putere absorbită ventilatoare</li>
              <li>• Nivel de zgomot</li>
              <li>• Temperatura aerului</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6">8.3 Echilibrare</h3>
          <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-600">
            <p className="text-gray-300 text-sm">
              <strong>Echilibrarea</strong> constă în reglarea debitelor la fiecare grilă/difuzor 
              pentru a obține valorile din proiect. Se folosesc clapete de reglaj și se măsoară 
              cu anemometre sau balometre.
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Toleranță acceptată: ±10% față de debitul proiectat
            </p>
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
            <label htmlFor="search-ventilare" className="sr-only">
              Caută în ghid
            </label>
            <input
              id="search-ventilare"
              type="text"
              placeholder="Caută în ghid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Caută în ghidul de ventilare"
            />
          </div>
          <nav aria-label="Secțiuni ghid ventilare">
            <ul className="space-y-1">
              {filteredSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-cyan-600 text-white'
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
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">
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