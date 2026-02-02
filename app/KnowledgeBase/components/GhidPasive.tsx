'use client';

import React, { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function GhidPasive() {
  const [activeSection, setActiveSection] = useState<string>('introducere');
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'introducere',
      title: '1. Introducere în Clădiri Pasive',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">1.1 Ce este o Clădire Pasivă?</h3>
          <p className="text-gray-300 leading-relaxed">
            O <strong>clădire pasivă (Passivhaus)</strong> este o clădire cu consum energetic 
            extrem de redus, care asigură confort termic fără sisteme convenționale de 
            încălzire sau răcire. Conceptul a fost dezvoltat în Germania în anii 1990.
          </p>
          
          <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-600">
            <h4 className="font-semibold text-emerald-400 mb-2">🏠 Principiul de bază:</h4>
            <p className="text-gray-300 text-sm">
              O clădire pasivă este atât de bine izolată și etanșă încât poate fi încălzită 
              doar cu aerul proaspăt de ventilare, fără radiatoare sau alte sisteme clasice.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">1.2 Standarde și Definiții</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
              <h4 className="font-semibold text-emerald-400 mb-2">Passivhaus Classic</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cerere energie încălzire: ≤15 kWh/m²·an</li>
                <li>• Cerere energie răcire: ≤15 kWh/m²·an</li>
                <li>• Energie primară totală: ≤120 kWh/m²·an</li>
                <li>• Etanșeitate: n₅₀ ≤ 0.6 h⁻¹</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Passivhaus Plus</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cerere energie regenerabilă: ≤45 kWh/m²·an</li>
                <li>• Generare energie regenerabilă: ≥60 kWh/m²·an</li>
                <li>• Balanță aproape zero sau pozitivă</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Passivhaus Premium</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cerere energie regenerabilă: ≤30 kWh/m²·an</li>
                <li>• Generare energie regenerabilă: ≥120 kWh/m²·an</li>
                <li>• Clădire cu energie pozitivă</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">1.3 nZEB vs Passivhaus</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Aspect</th>
                  <th className="p-3 text-left">nZEB (România)</th>
                  <th className="p-3 text-left">Passivhaus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Bază legală</td>
                  <td className="p-3">Directiva EPBD, legislație națională</td>
                  <td className="p-3">Standard voluntar PHI</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Energie primară</td>
                  <td className="p-3">≤100 kWh/m²·an</td>
                  <td className="p-3">≤120 kWh/m²·an</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Cerere încălzire</td>
                  <td className="p-3">Nu este specificată fix</td>
                  <td className="p-3">≤15 kWh/m²·an</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Etanșeitate</td>
                  <td className="p-3">Recomandată</td>
                  <td className="p-3">Obligatorie ≤0.6 h⁻¹</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Certificare</td>
                  <td className="p-3">Certificat energetic</td>
                  <td className="p-3">Certificat PHI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">1.4 Cadrul Normativ România</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Legea 372/2005</strong> - Performanța energetică a clădirilor (modificată)</li>
              <li>• <strong>Ordinul 2641/2017</strong> - Cerințe nZEB</li>
              <li>• <strong>MC001-2022</strong> - Metodologie calcul performanță energetică</li>
              <li>• <strong>C107-2005</strong> - Normativ termotehnic (în actualizare)</li>
              <li>• <strong>Directiva 2018/844</strong> - EPBD (European Performance of Buildings Directive)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'principii',
      title: '2. Cele 5 Principii Passivhaus',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">2.1 Izolare Termică Superioară</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
            <p className="text-gray-300 text-sm mb-3">
              Anvelopa clădirii trebuie izolată continuu, cu grosimi semnificativ mai mari 
              decât standardul actual.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Valori U recomandate:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Pereți exteriori: U ≤ 0.15 W/m²K</li>
                  <li>• Acoperiș: U ≤ 0.10 W/m²K</li>
                  <li>• Pardoseală: U ≤ 0.15 W/m²K</li>
                  <li>• Ferestre: Uw ≤ 0.80 W/m²K</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Grosimi izolație tipice:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Pereți: 25-40 cm</li>
                  <li>• Acoperiș: 30-50 cm</li>
                  <li>• Pardoseală: 20-30 cm</li>
                  <li>• Conductivitate: λ ≤ 0.035 W/mK</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">2.2 Ferestre de Înaltă Performanță</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Cerințe sticlă:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Tripan sau cvadrupan</li>
                  <li>• Ug ≤ 0.5-0.7 W/m²K</li>
                  <li>• Umplutură: Argon sau Kripton</li>
                  <li>• Straturi Low-E multiple</li>
                  <li>• g-value (factor solar): 0.5-0.6</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Cerințe tâmplărie:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Uf ≤ 0.8 W/m²K</li>
                  <li>• Profile cu camere multiple</li>
                  <li>• Garnituri triple EPDM</li>
                  <li>• Distanțier "warm edge"</li>
                  <li>• Montaj în planul izolației</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">2.3 Etanșeitate la Aer</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-400 mb-2">⚠️ Criteriu esențial!</h4>
            <p className="text-gray-300 text-sm mb-3">
              Etanșeitatea previne pierderile de căldură prin infiltrații și evită condensul 
              în structură. Se verifică prin testul Blower Door.
            </p>
            <div className="bg-gray-900 p-3 rounded">
              <p className="text-gray-300 text-sm">
                <strong>Cerință Passivhaus:</strong> n₅₀ ≤ 0.6 h⁻¹
              </p>
              <p className="text-gray-400 text-xs mt-1">
                La o diferență de presiune de 50 Pa, volumul de aer schimbat pe oră 
                trebuie să fie sub 60% din volumul clădirii.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">2.4 Eliminarea Punților Termice</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              <strong>Punte termică</strong> = zonă cu rezistență termică redusă, unde 
              căldura se pierde mai rapid (colțuri, racorduri, console).
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-yellow-400 text-sm mb-1">Zone critice:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Racord perete-fundație</li>
                  <li>• Racord perete-acoperiș</li>
                  <li>• Contur ferestre și uși</li>
                  <li>• Balcoane și console</li>
                  <li>• Colțuri clădire</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-green-400 text-sm mb-1">Soluții:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Izolație continuă fără întreruperi</li>
                  <li>• Conectori termici (Schöck Isokorb)</li>
                  <li>• Detalii proiectare 2D/3D</li>
                  <li>• Valoare Ψ ≤ 0.01 W/mK</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">2.5 Ventilare Mecanică cu Recuperare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
            <h4 className="font-semibold text-cyan-400 mb-2">MVHR (Mechanical Ventilation with Heat Recovery)</h4>
            <p className="text-gray-300 text-sm mb-3">
              Sistemul de ventilare este "inima" unei clădiri pasive. Asigură aer proaspăt 
              constant, recuperând căldura din aerul evacuat.
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Eficiență recuperare:</strong> ≥75% (recomandat ≥85%)</li>
              <li>• <strong>Consum electric:</strong> ≤0.45 Wh/m³</li>
              <li>• <strong>Bypass</strong> pentru răcire gratuită vara</li>
              <li>• <strong>Filtrare</strong> aer exterior (F7/ISO ePM2.5)</li>
            </ul>
          </div>

          <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-600 mt-4">
            <h4 className="font-semibold text-emerald-400 mb-2">💡 De ce funcționează?</h4>
            <p className="text-gray-300 text-sm">
              Combinând cele 5 principii, pierderile de căldură devin atât de mici încât 
              pot fi acoperite doar de câștigurile interne (persoane, echipamente, iluminat) 
              și solare, plus aerul preîncălzit de la ventilare.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'anvelopa',
      title: '3. Proiectarea Anvelopei',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">3.1 Pereți Exteriori</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Sistem ETICS (termosistem)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Polistiren expandat EPS: 20-30 cm, λ=0.032-0.040</li>
                <li>• Vată minerală: 20-30 cm, λ=0.035-0.040</li>
                <li>• Aplicare pe zidărie sau beton</li>
                <li>• U rezultat: 0.12-0.18 W/m²K</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Sistem cu structură din lemn</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Cadre lemn cu izolație în goluri: 20-30 cm</li>
                <li>• Izolație suplimentară exterioară: 8-12 cm</li>
                <li>• Barieră vapori interior (Sd ≥ 50m)</li>
                <li>• Membrană permeabilă exterior</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Sistem prefabricat (SIP, CLT)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Panouri SIP: miez EPS/PUR, fețe OSB</li>
                <li>• CLT (Cross Laminated Timber) + izolație</li>
                <li>• Montaj rapid, calitate controlată fabrică</li>
                <li>• Etanșeitate garantată la îmbinări</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">3.2 Acoperiș</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Acoperiș tip terasă:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Izolație: 30-40 cm PUR/PIR sau EPS</li>
                  <li>• Acoperiș inversat (izolație peste hidroizolație)</li>
                  <li>• Barieră vapori sub izolație</li>
                  <li>• U ≤ 0.10 W/m²K</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Acoperiș înclinat:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Izolație între și sub căpriori</li>
                  <li>• Total: 35-50 cm vată minerală</li>
                  <li>• Ventilare sub învelitoare</li>
                  <li>• Barieră vapori continuă</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">3.3 Pardoseală / Fundație</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-cyan-400">Radier pe sol:</strong>
                <span className="text-gray-400"> Izolație 20-30 cm XPS sub radier, U ≤ 0.15 W/m²K</span>
              </li>
              <li>
                <strong className="text-cyan-400">Subsol încălzit:</strong>
                <span className="text-gray-400"> Izolație perimetrală fundație + sub radier</span>
              </li>
              <li>
                <strong className="text-cyan-400">Subsol neîncălzit:</strong>
                <span className="text-gray-400"> Izolație planșeu peste subsol, atenție la punți</span>
              </li>
            </ul>
            <div className="bg-yellow-900/30 p-3 rounded mt-3">
              <p className="text-yellow-400 text-sm">
                ⚠️ Atenție la racordul perete-fundație! Necesită soluții speciale 
                (soclu izolat, conectori termici).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">3.4 Detalii Critice</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Detaliu</th>
                  <th className="p-3 text-left">Problemă</th>
                  <th className="p-3 text-left">Soluție Passivhaus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Montaj fereastră</td>
                  <td className="p-3">Punte termică la pervaz</td>
                  <td className="p-3">Montaj în planul izolației, console izolate</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Balcon</td>
                  <td className="p-3">Consolă = punte masivă</td>
                  <td className="p-3">Isokorb sau balcon independent</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Acoperiș plat</td>
                  <td className="p-3">Atică cu pierderi</td>
                  <td className="p-3">Atică izolată complet, fără întreruperi</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Intrare cablu/țevi</td>
                  <td className="p-3">Infiltrații, punți</td>
                  <td className="p-3">Manșoane etanșe, izolație locală</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'etanseitate',
      title: '4. Etanșeitate la Aer',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">4.1 Importanța Etanșeității</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              Infiltrațiile necontrolate de aer cauzează:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Pierderi semnificative de căldură (până la 30-40%)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Condens interstițial și mucegai</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Disconfort (curenți de aer rece)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Eficiență redusă a ventilării mecanice</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Probleme acustice</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">4.2 Stratul de Etanșeitate</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-gray-300 text-sm mb-3">
              <strong>Regula creionului:</strong> Trebuie să poți trasa cu creionul o linie 
              continuă pe planurile clădirii, reprezentând stratul etanș - fără întreruperi!
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Materiale etanșare:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Membrane PE/PP (barieră vapori)</li>
                  <li>• Membrane inteligente (Sd variabil)</li>
                  <li>• Benzi adezive speciale</li>
                  <li>• Chituri și mastic etanș</li>
                  <li>• Mansoane pentru țevi/cabluri</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Zone de etanșare:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Îmbinări membrane</li>
                  <li>• Racord tâmplărie la perete</li>
                  <li>• Străpungeri (țevi, cabluri)</li>
                  <li>• Prize și întrerupătoare</li>
                  <li>• Trape acces pod</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">4.3 Testul Blower Door</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Procedura de testare:</h4>
            <ol className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-semibold">1.</span>
                <span>Se montează un ventilator calibrat într-o ușă/fereastră</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-semibold">2.</span>
                <span>Se creează o depresiune de 50 Pa în clădire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-semibold">3.</span>
                <span>Se măsoară debitul de aer necesar pentru menținerea presiunii</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-semibold">4.</span>
                <span>Se calculează n₅₀ = Debit [m³/h] / Volum clădire [m³]</span>
              </li>
            </ol>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Standard</th>
                  <th className="p-3 text-center">n₅₀ [h⁻¹]</th>
                  <th className="p-3 text-left">Interpretare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-emerald-900/30">
                  <td className="p-3 font-semibold text-emerald-400">Passivhaus</td>
                  <td className="p-3 text-center">≤ 0.6</td>
                  <td className="p-3">Excelent - certificabil</td>
                </tr>
                <tr className="bg-green-900/30">
                  <td className="p-3 font-semibold text-green-400">nZEB recomandat</td>
                  <td className="p-3 text-center">≤ 1.0</td>
                  <td className="p-3">Foarte bun</td>
                </tr>
                <tr className="bg-yellow-900/30">
                  <td className="p-3 font-semibold text-yellow-400">Standard actual</td>
                  <td className="p-3 text-center">≤ 3.0</td>
                  <td className="p-3">Acceptabil construcții noi</td>
                </tr>
                <tr className="bg-red-900/30">
                  <td className="p-3 font-semibold text-red-400">Clădiri vechi</td>
                  <td className="p-3 text-center">5-10+</td>
                  <td className="p-3">Pierderi majore</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">4.4 Detectarea Infiltrațiilor</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">Termografie IR:</strong>
                <span className="text-gray-400"> Vizualizează diferențe de temperatură la infiltrații</span>
              </li>
              <li>
                <strong className="text-yellow-400">Fum tracer:</strong>
                <span className="text-gray-400"> Fum artificial arată curenții de aer</span>
              </li>
              <li>
                <strong className="text-yellow-400">Anemometru:</strong>
                <span className="text-gray-400"> Măsoară viteza aerului în puncte suspecte</span>
              </li>
              <li>
                <strong className="text-yellow-400">Mână/hârtie:</strong>
                <span className="text-gray-400"> Metodă simplă pentru detectare grosieră</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'ventilare',
      title: '5. Ventilare cu Recuperare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">5.1 Principiul MVHR</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              <strong>MVHR</strong> (Mechanical Ventilation with Heat Recovery) extrage aerul 
              viciat din bucătărie/băi, recuperează căldura și o transferă aerului proaspăt 
              introdus în camerele de zi.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-green-400 mb-2">Aer introdus (supply):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Living, dormitoare, birouri</li>
                  <li>• Aer filtrat și preîncălzit</li>
                  <li>• Difuzoare în tavan sau perete</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-red-400 mb-2">Aer evacuat (extract):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Bucătărie, băi, WC, dressinguri</li>
                  <li>• Aer cu umiditate/mirosuri</li>
                  <li>• Grile în tavan/perete</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">5.2 Cerințe Passivhaus</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-emerald-500">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-emerald-400">Eficiență recuperare:</strong>
                <span> ≥75% (certificat PHI recomandat ≥85%)</span>
              </li>
              <li>
                <strong className="text-emerald-400">Consum electric:</strong>
                <span> ≤0.45 Wh/m³ aer transportat</span>
              </li>
              <li>
                <strong className="text-emerald-400">Nivel zgomot:</strong>
                <span> ≤25 dB(A) în dormitoare</span>
              </li>
              <li>
                <strong className="text-emerald-400">Bypass:</strong>
                <span> 100% pentru răcire vara (free cooling)</span>
              </li>
              <li>
                <strong className="text-emerald-400">Filtrare:</strong>
                <span> F7 sau mai bun pe introducere</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">5.3 Tipuri de Recuperatoare</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Schimbător în contracurent (plăci)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Eficiență: 75-95%</li>
                <li>• Fără transfer umiditate (sensibil)</li>
                <li>• Necesită drenaj condens</li>
                <li>• Cel mai utilizat în Passivhaus</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Schimbător entalpic (rotor sau membrană)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Recuperează și umiditatea</li>
                <li>• Avantajos în climate uscate</li>
                <li>• Posibil transfer mirosuri (mic)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">5.4 Dimensionare Debite</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Debite recomandate:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-2 text-left">Încăpere</th>
                    <th className="p-2 text-center">Debit minim</th>
                    <th className="p-2 text-left">Observații</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="bg-gray-800">
                    <td className="p-2">Dormitor</td>
                    <td className="p-2 text-center">25-30 m³/h/pers</td>
                    <td className="p-2">Introducere</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-2">Living</td>
                    <td className="p-2 text-center">25-30 m³/h/pers</td>
                    <td className="p-2">Introducere</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-2">Bucătărie</td>
                    <td className="p-2 text-center">60 m³/h</td>
                    <td className="p-2">Evacuare (+ hotă separată)</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-2">Baie</td>
                    <td className="p-2 text-center">40 m³/h</td>
                    <td className="p-2">Evacuare</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-2">WC</td>
                    <td className="p-2 text-center">20 m³/h</td>
                    <td className="p-2">Evacuare</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">5.5 Distribuție și Tubulatura</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-cyan-400">Tubulatura rigidă:</strong>
                <span className="text-gray-400"> Oțel zincat sau PP, pierderi mici, durabilă</span>
              </li>
              <li>
                <strong className="text-cyan-400">Tubulatura flexibilă:</strong>
                <span className="text-gray-400"> Doar pentru racorduri finale scurte</span>
              </li>
              <li>
                <strong className="text-cyan-400">Sistem radial:</strong>
                <span className="text-gray-400"> Tuburi mici (Ø75mm) de la plenum la difuzoare</span>
              </li>
              <li>
                <strong className="text-cyan-400">Viteze:</strong>
                <span className="text-gray-400"> Max 3 m/s în ramuri, 5 m/s în coloane</span>
              </li>
              <li>
                <strong className="text-cyan-400">Izolație:</strong>
                <span className="text-gray-400"> Pe porțiuni neîncălzite (pod, exterior)</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'instalatii',
      title: '6. Instalații și Surse Energie',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">6.1 Încălzire în Clădiri Pasive</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-gray-300 text-sm mb-3">
              Datorită cererii foarte mici de încălzire (≤15 kWh/m²·an), soluțiile convenționale 
              sunt supradimensionate. Opțiuni preferate:
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Post-încălzire pe ventilare:</strong> Baterie electrică sau apă caldă în UTA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Pompă de căldură aer-aer:</strong> Unitate mică split, eficiență ridicată</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span><strong>Pardoseală caldă:</strong> Circuit mic, temperatură joasă (max 30°C)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">△</span>
                <span><strong>Radiatoare:</strong> Doar dacă e necesar (băi), dimensiuni foarte mici</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">6.2 Răcire (Cooling)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Strategii pasive (prioritare):</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Protecție solară:</strong> Umbrire exterioară (obloane, brissoleil)</li>
              <li>• <strong>Free cooling nocturn:</strong> Bypass ventilare când T ext &lt; T int</li>
              <li>• <strong>Masă termică:</strong> Beton aparent, fără tavan fals</li>
              <li>• <strong>Sticla cu g redus:</strong> g ≤ 0.35 pe fațade E/V/S</li>
            </ul>
            
            <h4 className="font-semibold text-white mb-2 mt-4">Răcire activă (dacă e necesară):</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Pompă de căldură reversibilă</li>
              <li>• Răcire pe circuitul de ventilare</li>
              <li>• Plafon răcitor radiant</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">6.3 Apă Caldă Menajeră (ACM)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              ACM devine consumul dominant în clădiri pasive. Soluții eficiente:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Pompa de căldură ACM:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Boiler cu PdC integrată</li>
                  <li>• COP 2.5-3.5</li>
                  <li>• Poate prelua aer de la MVHR</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Panouri solare termice:</h4>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Acoperă 50-70% din necesar</li>
                  <li>• Necesită suport (PdC sau electric)</li>
                  <li>• Suprafață: 4-6 m² / familie</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">6.4 Energie Regenerabilă</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Panouri fotovoltaice (PV):</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Producție: 150-200 kWh/m²·an (România)</li>
              <li>• Suprafață tipică nZEB: 20-40 m² (4-8 kWp)</li>
              <li>• Acoperă consumul electric al clădirii + PdC</li>
              <li>• Stocare în baterii sau net metering</li>
            </ul>
          </div>

          <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-600 mt-4">
            <h4 className="font-semibold text-emerald-400 mb-2">🏆 Combinația ideală Passivhaus:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• MVHR cu eficiență ≥85%</li>
              <li>• Pompă de căldură compactă (încălzire + ACM)</li>
              <li>• Panouri PV pe acoperiș</li>
              <li>• Eventual panouri solare termice pentru ACM</li>
            </ul>
            <p className="text-emerald-300 text-xs mt-2">
              Consum energie primară: 30-60 kWh/m²·an (vs. 150-250 kWh/m²·an clădire standard)
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'phpp',
      title: '7. Calculul PHPP',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">7.1 Ce este PHPP?</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              <strong>PHPP</strong> (Passive House Planning Package) este instrumentul oficial 
              de calcul și verificare pentru certificarea Passivhaus. Este un fișier Excel 
              complex care calculează balanța energetică completă a clădirii.
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Dezvoltat de Passive House Institute (PHI) Darmstadt</li>
              <li>• Versiunea actuală: PHPP 10</li>
              <li>• Validat prin măsurători pe clădiri reale</li>
              <li>• Precizie mai mare decât metodele simplificate</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">7.2 Date de Intrare PHPP</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Geometrie și climat:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Suprafețe tratate termic (SRT)</li>
                  <li>• Volumul încălzit</li>
                  <li>• Date climatice locație</li>
                  <li>• Orientare fațade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Anvelopă:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Compoziție pereți, acoperiș, pardoseală</li>
                  <li>• Caracteristici ferestre (Ug, Uf, g)</li>
                  <li>• Punți termice (Ψ, χ)</li>
                  <li>• Etanșeitate (n₅₀)</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">7.3 Foile de Calcul Principale</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Foaie</th>
                  <th className="p-3 text-left">Conținut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Verification</td>
                  <td className="p-3">Rezultate finale, verificare criterii</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Climate</td>
                  <td className="p-3">Date climatice, radiație solară</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">U-Values</td>
                  <td className="p-3">Calculul coeficienților U elemente opace</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Areas</td>
                  <td className="p-3">Suprafețe anvelopă, orientări</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Windows</td>
                  <td className="p-3">Detalii ferestre, câștiguri solare</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Ventilation</td>
                  <td className="p-3">Sistem MVHR, debite, eficiență</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Annual Heating</td>
                  <td className="p-3">Balanța energetică încălzire</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Summer</td>
                  <td className="p-3">Verificare supraîncălzire, răcire</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">DHW + Distribution</td>
                  <td className="p-3">Apă caldă, pierderi distribuție</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Electricity</td>
                  <td className="p-3">Consum electric, aparate, iluminat</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">PV</td>
                  <td className="p-3">Producție panouri fotovoltaice</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">7.4 Rezultate și Criterii</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Criterii de verificare:</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <span className="text-gray-300 text-sm">Cerere încălzire</span>
                <span className="text-emerald-400 font-semibold">≤ 15 kWh/m²a</span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <span className="text-gray-300 text-sm">Sarcină încălzire</span>
                <span className="text-emerald-400 font-semibold">≤ 10 W/m²</span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <span className="text-gray-300 text-sm">Cerere răcire</span>
                <span className="text-emerald-400 font-semibold">≤ 15 kWh/m²a</span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <span className="text-gray-300 text-sm">Frecvență supraîncălzire</span>
                <span className="text-emerald-400 font-semibold">≤ 10% ore &gt;25°C</span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <span className="text-gray-300 text-sm">Energie primară (PER)</span>
                <span className="text-emerald-400 font-semibold">≤ 120 kWh/m²a</span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-2 rounded">
                <span className="text-gray-300 text-sm">Etanșeitate n₅₀</span>
                <span className="text-emerald-400 font-semibold">≤ 0.6 h⁻¹</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600 mt-4">
            <h4 className="font-semibold text-yellow-400 mb-2">💡 Sfat practic:</h4>
            <p className="text-gray-300 text-sm">
              PHPP se folosește iterativ în proiectare. Se pornește cu o estimare, se 
              verifică rezultatele, și se ajustează soluțiile (mai multă izolație, 
              ferestre mai bune, etc.) până la îndeplinirea criteriilor.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'certificare',
      title: '8. Certificare și Costuri',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-emerald-400">8.1 Procesul de Certificare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Etape certificare Passivhaus:</h4>
            <ol className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                <span><strong>Pre-certificare (opțională):</strong> Verificare PHPP în faza de proiect</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                <span><strong>Documentare execuție:</strong> Fotografii, detalii, fișe tehnice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                <span><strong>Test Blower Door:</strong> Verificare etanșeitate n₅₀ ≤ 0.6</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                <span><strong>Verificare finală:</strong> Calcul PHPP cu date reale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-emerald-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">5</span>
                <span><strong>Emitere certificat:</strong> De către certificator acreditat PHI</span>
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">8.2 Certificatori în România</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>BPIE</strong> - Buildings Performance Institute Europe</li>
              <li>• <strong>ROENEF</strong> - Asociația pentru promovarea eficienței energetice</li>
              <li>• <strong>ProPassivhaus</strong> - Certificatori individuali acreditați</li>
              <li>• <strong>Certificatori internaționali</strong> - PHI Darmstadt direct</li>
            </ul>
            <p className="text-gray-400 text-xs mt-3">
              Lista completă: <span className="text-cyan-400">passivehouse-database.org</span>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">8.3 Costuri Suplimentare</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Element</th>
                  <th className="p-3 text-center">Cost suplimentar</th>
                  <th className="p-3 text-left">Observații</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Izolație suplimentară</td>
                  <td className="p-3 text-center">+3-5%</td>
                  <td className="p-3">Grosime dublă față de standard</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Ferestre tripan</td>
                  <td className="p-3 text-center">+5-10%</td>
                  <td className="p-3">vs. ferestre duble standard</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">MVHR</td>
                  <td className="p-3 text-center">3.000-8.000€</td>
                  <td className="p-3">Sistem complet cu distribuție</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Etanșeitate</td>
                  <td className="p-3 text-center">+1-2%</td>
                  <td className="p-3">Materiale și manoperă</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Proiectare PHPP</td>
                  <td className="p-3 text-center">2.000-5.000€</td>
                  <td className="p-3">Calcul și optimizare</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Certificare</td>
                  <td className="p-3 text-center">1.500-3.000€</td>
                  <td className="p-3">Inclusiv test Blower Door</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-900/30 p-4 rounded-lg border border-emerald-600 mt-4">
            <h4 className="font-semibold text-emerald-400 mb-2">📊 Cost total suplimentar estimativ:</h4>
            <p className="text-gray-300 text-sm">
              <strong>10-15%</strong> față de o construcție standard de calitate bună.
              <br />
              <span className="text-gray-400">
                Amortizare: 10-15 ani prin economii la energie (funcție de prețurile energiei).
              </span>
            </p>
          </div>

          <h3 className="text-xl font-semibold text-emerald-400 mt-6">8.4 Beneficii pe Termen Lung</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Financiare:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✓ Facturi energie reduse 70-90%</li>
                  <li>✓ Independență de prețul energiei</li>
                  <li>✓ Valoare proprietate crescută</li>
                  <li>✓ Posibile subvenții și facilități</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Confort și sănătate:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✓ Temperatură uniformă în toate camerele</li>
                  <li>✓ Fără curenți de aer rece</li>
                  <li>✓ Aer proaspăt filtrat continuu</li>
                  <li>✓ Fără mucegai sau condens</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <h4 className="font-semibold text-white mb-3">Statistici globale Passivhaus:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-gray-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-emerald-400">65.000+</p>
                <p className="text-gray-400 text-xs">Clădiri certificate</p>
              </div>
              <div className="bg-gray-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-emerald-400">1.000+</p>
                <p className="text-gray-400 text-xs">În România</p>
              </div>
              <div className="bg-gray-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-emerald-400">90%</p>
                <p className="text-gray-400 text-xs">Economie energie</p>
              </div>
              <div className="bg-gray-700 p-3 rounded text-center">
                <p className="text-2xl font-bold text-emerald-400">30+ ani</p>
                <p className="text-gray-400 text-xs">Experiență standard</p>
              </div>
            </div>
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
            <label htmlFor="search-pasive" className="sr-only">
              Caută în ghid
            </label>
            <input
              id="search-pasive"
              type="text"
              placeholder="Caută în ghid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Caută în ghidul de clădiri pasive"
            />
          </div>
          <nav aria-label="Secțiuni ghid clădiri pasive">
            <ul className="space-y-1">
              {filteredSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-emerald-600 text-white'
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
              <h2 className="text-2xl font-bold text-emerald-400 mb-6">
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