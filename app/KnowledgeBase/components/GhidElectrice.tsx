'use client';

import React, { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function GhidElectrice() {
  const [activeSection, setActiveSection] = useState<string>('introducere');
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'introducere',
      title: '1. Introducere în Instalații Electrice',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">1.1 Definiție și Clasificare</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>Instalațiile electrice</strong> cuprind totalitatea echipamentelor, conductorilor, 
            aparatelor și accesoriilor destinate producerii, transportului, distribuției și utilizării 
            energiei electrice în clădiri.
          </p>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-300 mb-2">Clasificare după tensiune:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li><strong>Foarte joasă tensiune (FJT)</strong> - sub 50V AC / 120V DC</li>
              <li><strong>Joasă tensiune (JT)</strong> - 50-1000V AC / 120-1500V DC</li>
              <li><strong>Medie tensiune (MT)</strong> - 1-35 kV</li>
              <li><strong>Înaltă tensiune (ÎT)</strong> - peste 35 kV</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">1.2 Tipuri de Instalații în Clădiri</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">Instalații de forță:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Alimentare utilaje, mașini</li>
                <li>• Motoare electrice</li>
                <li>• Prize industriale</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Instalații de iluminat:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Iluminat general și local</li>
                <li>• Iluminat de siguranță</li>
                <li>• Iluminat decorativ</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-400 mb-2">Instalații speciale:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Curenți slabi (voce-date)</li>
                <li>• Sisteme de securitate</li>
                <li>• Automatizări (BMS)</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-red-400 mb-2">Instalații de protecție:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Protecție la supracurenți</li>
                <li>• Protecție la șoc electric</li>
                <li>• Protecție la trăsnet (LPS)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">1.3 Cadrul Normativ</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>I7-2011</strong> - Normativ pentru proiectarea și executarea instalațiilor electrice cu tensiuni până la 1000V AC</li>
              <li>• <strong>NTE 007/08/00</strong> - Normativ pentru proiectarea și executarea rețelelor de cabluri electrice</li>
              <li>• <strong>PE 116</strong> - Normativ de încercări și măsurători la echipamente și instalații electrice</li>
              <li>• <strong>HD 60364</strong> - Instalații electrice de joasă tensiune (standard european)</li>
              <li>• <strong>NP-I7-2002</strong> - Normativ pentru proiectarea iluminatului</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'alimentare',
      title: '2. Alimentarea cu Energie Electrică',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">2.1 Scheme de Alimentare</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Alimentare simplă (radială)</h4>
              <p className="text-gray-300 text-sm">
                O singură sursă de alimentare. Economică dar fără redundanță. 
                Acceptabilă pentru consumatori de categoria III.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Alimentare dublă</h4>
              <p className="text-gray-300 text-sm">
                Două surse independente cu comutare automată (AAR). 
                Pentru consumatori de categoria II.
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Alimentare cu sursă de rezervă</h4>
              <p className="text-gray-300 text-sm">
                Rețea + generator diesel + UPS. Pentru consumatori de categoria I 
                (spitale, centre de date, aeroporturi).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">2.2 Categorii de Consumatori</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Categorie</th>
                  <th className="p-3 text-left">Descriere</th>
                  <th className="p-3 text-center">Întrerupere admisă</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-red-400">I (specială)</td>
                  <td className="p-3">Întreruperea pune în pericol viața sau produce pagube majore</td>
                  <td className="p-3 text-center">0 (continuitate)</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-yellow-400">II</td>
                  <td className="p-3">Întreruperea produce oprirea proceselor importante</td>
                  <td className="p-3 text-center">Sub 30 min</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-green-400">III</td>
                  <td className="p-3">Consumatori cu cerințe normale</td>
                  <td className="p-3 text-center">Până la 24h</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">2.3 Branșament și FDCP</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-300 mb-2">Componente branșament:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Cutie de branșament</strong> - punctul de delimitare cu distribuitor</li>
              <li>• <strong>Cablu de branșament</strong> - de la rețea la FDCP</li>
              <li>• <strong>FDCP</strong> - Firida de distribuție și contorizare principală</li>
              <li>• <strong>Contor</strong> - măsurarea energiei consumate</li>
              <li>• <strong>Întreruptor general</strong> - protecție și secționare</li>
            </ul>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600 mt-4">
            <h4 className="font-semibold text-yellow-400 mb-2">⚡ Putere instalată vs. absorbită</h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p><strong>Pi (instalată)</strong> = suma puterilor nominale ale tuturor receptoarelor</p>
              <p><strong>Pa (absorbită)</strong> = Pi × ks × ku</p>
              <p className="text-gray-400">ks = coeficient de simultaneitate | ku = coeficient de utilizare</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'dimensionare',
      title: '3. Dimensionarea Circuitelor',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">3.1 Curentul de Calcul</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Circuit monofazat</h4>
              <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
                Ib = P / (U × cos φ) [A]
              </div>
              <p className="text-gray-400 text-xs mt-2">
                P = putere [W], U = 230V, cos φ ≈ 0.8-1
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Circuit trifazat</h4>
              <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300">
                Ib = P / (√3 × U × cos φ) [A]
              </div>
              <p className="text-gray-400 text-xs mt-2">
                P = putere [W], U = 400V, cos φ ≈ 0.8-0.9
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">3.2 Alegerea Secțiunii Conductorilor</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Condiții de verificare:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span><strong>Capacitate de curent:</strong> Iz ≥ Ib (curentul admisibil ≥ curentul de calcul)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span><strong>Cădere de tensiune:</strong> ΔU% ≤ 3-5% (conform normativ)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-green-400">✓</span>
                <span><strong>Solicitare termică:</strong> I²t ≤ k²S² (la scurtcircuit)</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">3.3 Secțiuni Minime și Curenți Admiși</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Secțiune [mm²]</th>
                  <th className="p-3 text-center">Cu în tub [A]</th>
                  <th className="p-3 text-center">Cu în aer [A]</th>
                  <th className="p-3 text-left">Utilizare tipică</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">1.5</td>
                  <td className="p-3 text-center">14.5</td>
                  <td className="p-3 text-center">19.5</td>
                  <td className="p-3">Iluminat (max 10A)</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">2.5</td>
                  <td className="p-3 text-center">20</td>
                  <td className="p-3 text-center">27</td>
                  <td className="p-3">Prize 16A</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">4</td>
                  <td className="p-3 text-center">27</td>
                  <td className="p-3 text-center">36</td>
                  <td className="p-3">Prize dedicate, plite</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">6</td>
                  <td className="p-3 text-center">35</td>
                  <td className="p-3 text-center">46</td>
                  <td className="p-3">Cuptoare, boilere mari</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">10</td>
                  <td className="p-3 text-center">48</td>
                  <td className="p-3 text-center">65</td>
                  <td className="p-3">Alimentări tablouri</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">16</td>
                  <td className="p-3 text-center">64</td>
                  <td className="p-3 text-center">87</td>
                  <td className="p-3">Coloane principale</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">25</td>
                  <td className="p-3 text-center">84</td>
                  <td className="p-3 text-center">114</td>
                  <td className="p-3">Tablouri generale</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">3.4 Cădere de Tensiune</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="font-mono text-sm text-cyan-300 mb-2">
              ΔU% = (2 × L × Ib × cos φ) / (γ × S × U) × 100
            </div>
            <p className="text-gray-400 text-sm">
              L = lungime circuit [m] | γ = conductivitate (56 Cu, 35 Al) | S = secțiune [mm²]
            </p>
            <div className="mt-3 text-sm text-gray-300">
              <p><strong>Limite admise:</strong></p>
              <ul className="list-disc list-inside ml-2 text-gray-400">
                <li>3% pentru iluminat</li>
                <li>5% pentru alte utilizări</li>
                <li>8% la pornirea motoarelor</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'protectie',
      title: '4. Protecția Instalațiilor',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">4.1 Protecția la Supracurenți</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-400 mb-2">Suprasarcină</h4>
              <p className="text-gray-300 text-sm mb-2">
                Curent care depășește valoarea nominală, dar nu este scurtcircuit.
              </p>
              <p className="text-gray-400 text-xs">
                Protecție: curba termică a disjunctorului (tip B, C, D)
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Scurtcircuit</h4>
              <p className="text-gray-300 text-sm mb-2">
                Contact accidental între conductori cu potențiale diferite.
              </p>
              <p className="text-gray-400 text-xs">
                Protecție: declanșator magnetic instantaneu
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">4.2 Tipuri de Disjunctoare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-3 text-left">Curba</th>
                    <th className="p-3 text-center">Declanșare magnetică</th>
                    <th className="p-3 text-left">Utilizare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="bg-gray-800">
                    <td className="p-3 font-semibold text-blue-400">B</td>
                    <td className="p-3 text-center">3-5 × In</td>
                    <td className="p-3">Rezidențial, iluminat, prize</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-3 font-semibold text-green-400">C</td>
                    <td className="p-3 text-center">5-10 × In</td>
                    <td className="p-3">Uz general, motoare mici</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-3 font-semibold text-yellow-400">D</td>
                    <td className="p-3 text-center">10-20 × In</td>
                    <td className="p-3">Motoare, transformatoare</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-3 font-semibold text-red-400">K</td>
                    <td className="p-3 text-center">8-12 × In</td>
                    <td className="p-3">Motoare cu curent mare de pornire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">4.3 Protecția la Șoc Electric</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Protecție de bază (contact direct)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Izolarea părților active</li>
                <li>• Bariere și carcase (IP2X minim)</li>
                <li>• Îngrădiri și distanțe de protecție</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Protecție la defect (contact indirect)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Legare la pământ + dispozitiv diferențial (DDR)</strong></li>
                <li>• Separare electrică (transformator de izolare)</li>
                <li>• Utilizare TFJS (tensiune foarte joasă de securitate)</li>
                <li>• Izolație suplimentară sau dublă (clasa II)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">4.4 Dispozitive Diferențiale (DDR)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-3 text-left">Sensibilitate</th>
                    <th className="p-3 text-left">Protecție asigurată</th>
                    <th className="p-3 text-left">Utilizare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr className="bg-gray-800">
                    <td className="p-3 font-semibold text-red-400">10 mA</td>
                    <td className="p-3">Protecție persoane - înaltă sensibilitate</td>
                    <td className="p-3">Băi, piscine, zone cu risc</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-3 font-semibold text-orange-400">30 mA</td>
                    <td className="p-3">Protecție persoane - standard</td>
                    <td className="p-3">Prize, circuite terminale</td>
                  </tr>
                  <tr className="bg-gray-800">
                    <td className="p-3 font-semibold text-yellow-400">100-300 mA</td>
                    <td className="p-3">Protecție la incendiu</td>
                    <td className="p-3">Tablouri generale, alimentări</td>
                  </tr>
                  <tr className="bg-gray-800/50">
                    <td className="p-3 font-semibold text-green-400">500-1000 mA</td>
                    <td className="p-3">Protecție echipamente</td>
                    <td className="p-3">Utilaje industriale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-red-900/30 p-4 rounded-lg border border-red-600 mt-4">
            <h4 className="font-semibold text-red-400 mb-2">⚠️ OBLIGATORIU DDR 30mA:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Toate prizele din locuințe (I7-2011)</li>
              <li>• Prize din băi și bucătării</li>
              <li>• Prize din exterior</li>
              <li>• Circuite pentru echipamente portabile</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'iluminat',
      title: '5. Instalații de Iluminat',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">5.1 Noțiuni Fundamentale</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Flux luminos (Φ)</h4>
              <p className="text-gray-300 text-sm">Cantitatea totală de lumină emisă de o sursă.</p>
              <p className="text-yellow-400 text-xs mt-1">Unitate: lumen [lm]</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Iluminare (E)</h4>
              <p className="text-gray-300 text-sm">Fluxul luminos pe unitatea de suprafață.</p>
              <p className="text-yellow-400 text-xs mt-1">Unitate: lux [lx] = lm/m²</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Intensitate luminoasă (I)</h4>
              <p className="text-gray-300 text-sm">Fluxul luminos într-o anumită direcție.</p>
              <p className="text-yellow-400 text-xs mt-1">Unitate: candela [cd]</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Luminanță (L)</h4>
              <p className="text-gray-300 text-sm">Senzația de strălucire percepută.</p>
              <p className="text-yellow-400 text-xs mt-1">Unitate: cd/m²</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">5.2 Niveluri de Iluminare Recomandate</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Spațiu / Activitate</th>
                  <th className="p-3 text-center">E minim [lux]</th>
                  <th className="p-3 text-center">E recomandat [lux]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Coridoare, scări</td>
                  <td className="p-3 text-center">50</td>
                  <td className="p-3 text-center">100</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Locuințe - living</td>
                  <td className="p-3 text-center">100</td>
                  <td className="p-3 text-center">200</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Locuințe - bucătărie</td>
                  <td className="p-3 text-center">200</td>
                  <td className="p-3 text-center">300-500</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Birouri - general</td>
                  <td className="p-3 text-center">300</td>
                  <td className="p-3 text-center">500</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Birouri - lucru la calculator</td>
                  <td className="p-3 text-center">300</td>
                  <td className="p-3 text-center">500</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Săli de clasă</td>
                  <td className="p-3 text-center">300</td>
                  <td className="p-3 text-center">500</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Laboratoare</td>
                  <td className="p-3 text-center">500</td>
                  <td className="p-3 text-center">750</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Lucru de precizie</td>
                  <td className="p-3 text-center">750</td>
                  <td className="p-3 text-center">1000-1500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">5.3 Tipuri de Surse de Lumină</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">LED (Light Emitting Diode)</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>
                  <p className="text-gray-400">Eficacitate:</p>
                  <p>80-200 lm/W</p>
                </div>
                <div>
                  <p className="text-gray-400">Durată viață:</p>
                  <p>25.000-50.000 h</p>
                </div>
              </div>
              <p className="text-green-300 text-xs mt-2">✓ Recomandat pentru toate aplicațiile</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Fluorescente (tuburi T5, T8)</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>
                  <p className="text-gray-400">Eficacitate:</p>
                  <p>60-100 lm/W</p>
                </div>
                <div>
                  <p className="text-gray-400">Durată viață:</p>
                  <p>10.000-20.000 h</p>
                </div>
              </div>
              <p className="text-yellow-300 text-xs mt-2">⚠ În curs de eliminare, se înlocuiesc cu LED</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Incandescente / Halogen</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>
                  <p className="text-gray-400">Eficacitate:</p>
                  <p>10-25 lm/W</p>
                </div>
                <div>
                  <p className="text-gray-400">Durată viață:</p>
                  <p>1.000-3.000 h</p>
                </div>
              </div>
              <p className="text-red-300 text-xs mt-2">✗ Interzise la vânzare în UE</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">5.4 Calcul Iluminat (metoda lumenilor)</h3>
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="font-mono text-sm text-cyan-300 mb-2">
              n = (E × A) / (Φ × η × FM)
            </div>
            <p className="text-gray-400 text-sm">
              n = număr corpuri | E = iluminare [lux] | A = suprafață [m²] | 
              Φ = flux/corp [lm] | η = randament utilizare | FM = factor mentenanță
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'prize',
      title: '6. Prize și Circuite Speciale',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">6.1 Prize Standard</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-cyan-300 mb-2">Prize tip Schuko (CEE 7/4)</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Tensiune nominală: 230V AC</li>
              <li>• Curent nominal: 16A</li>
              <li>• Cu contact de protecție (împământare laterală)</li>
              <li>• Secțiune conductor: minim 2.5 mm² Cu</li>
              <li>• Protecție: disjunctor 16A curba B/C + DDR 30mA</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">6.2 Număr Minim de Prize (I7-2011)</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Încăpere</th>
                  <th className="p-3 text-center">Nr. minim prize</th>
                  <th className="p-3 text-left">Observații</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Living (sub 20 m²)</td>
                  <td className="p-3 text-center">5</td>
                  <td className="p-3">+1 pentru fiecare 4 m² suplimentari</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Dormitor</td>
                  <td className="p-3 text-center">4</td>
                  <td className="p-3">Minim 2 lângă pat</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Bucătărie</td>
                  <td className="p-3 text-center">6</td>
                  <td className="p-3">+circuite dedicate pentru electrocasnice</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Baie</td>
                  <td className="p-3 text-center">1-2</td>
                  <td className="p-3">Doar în zona 3 (la &gt;2.4m de cadă)</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Hol</td>
                  <td className="p-3 text-center">1</td>
                  <td className="p-3">Pentru aspirator</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Birou</td>
                  <td className="p-3 text-center">4-6</td>
                  <td className="p-3">Calculator, periferice</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">6.3 Circuite Dedicate</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 mb-3">Consumatorii mari necesită circuite separate:</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-orange-400 text-sm">Bucătărie:</h4>
                <ul className="text-gray-300 text-xs space-y-1 mt-1">
                  <li>• Plită electrică: 6 mm², 32A</li>
                  <li>• Cuptor: 4 mm², 20A</li>
                  <li>• Mașină spălat vase: 2.5 mm², 16A</li>
                  <li>• Frigider: 2.5 mm², 16A</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-blue-400 text-sm">Baie/Utilități:</h4>
                <ul className="text-gray-300 text-xs space-y-1 mt-1">
                  <li>• Boiler electric: 4-6 mm², 20-32A</li>
                  <li>• Mașină spălat rufe: 2.5 mm², 16A</li>
                  <li>• Uscător rufe: 4 mm², 20A</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-green-400 text-sm">HVAC:</h4>
                <ul className="text-gray-300 text-xs space-y-1 mt-1">
                  <li>• Aer condiționat: 2.5-4 mm², 16-20A</li>
                  <li>• Pompă de căldură: conform putere</li>
                  <li>• Ventilație mecanică: 1.5-2.5 mm²</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-purple-400 text-sm">Exterior:</h4>
                <ul className="text-gray-300 text-xs space-y-1 mt-1">
                  <li>• Stație încărcare EV: 6-10 mm², 32A</li>
                  <li>• Iluminat exterior: 1.5 mm²</li>
                  <li>• Prize exterior: 2.5 mm² + DDR 30mA</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">6.4 Zone de Protecție în Băi</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-4 gap-2 text-sm">
              <div className="bg-red-900/50 p-3 rounded text-center">
                <p className="font-semibold text-red-400">Zona 0</p>
                <p className="text-gray-300 text-xs">Interior cadă/duș</p>
                <p className="text-gray-400 text-xs mt-1">Doar IPX7, TFJS 12V</p>
              </div>
              <div className="bg-orange-900/50 p-3 rounded text-center">
                <p className="font-semibold text-orange-400">Zona 1</p>
                <p className="text-gray-300 text-xs">Deasupra căzii</p>
                <p className="text-gray-400 text-xs mt-1">IPX5, fără prize</p>
              </div>
              <div className="bg-yellow-900/50 p-3 rounded text-center">
                <p className="font-semibold text-yellow-400">Zona 2</p>
                <p className="text-gray-300 text-xs">0.6m de zona 1</p>
                <p className="text-gray-400 text-xs mt-1">IPX4, prize rasoare</p>
              </div>
              <div className="bg-green-900/50 p-3 rounded text-center">
                <p className="font-semibold text-green-400">Zona 3</p>
                <p className="text-gray-300 text-xs">&gt;2.4m de cadă</p>
                <p className="text-gray-400 text-xs mt-1">Prize cu DDR 30mA</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'impamantare',
      title: '7. Instalația de Împământare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-yellow-400">7.1 Scopul Împământării</h3>
          <p className="text-gray-300 leading-relaxed">
            Instalația de împământare asigură legătura conductoarelor de protecție cu pământul, 
            permițând scurgerea curenților de defect și limitarea tensiunilor de atingere la 
            valori nepericuloase.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-300 mb-2">Funcții principale:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Protecția persoanelor contra șocului electric</li>
              <li>Protecția echipamentelor la supratensiuni</li>
              <li>Funcționarea corectă a protecțiilor</li>
              <li>Protecție la trăsnet (LPS)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">7.2 Scheme de Legare la Pământ</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">TN (Terre-Neutre)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Punctul neutru al sursei legat direct la pământ. Masele conectate la neutru.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• <strong>TN-S</strong>: PE și N separate pe tot traseul</li>
                <li>• <strong>TN-C</strong>: PE și N combinate (PEN) - doar alimentări</li>
                <li>• <strong>TN-C-S</strong>: PEN până la tablou, apoi separate</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">TT (Terre-Terre)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Neutrul sursei și masele au prize de pământ separate.
              </p>
              <p className="text-gray-400 text-xs">
                Utilizare: când nu există TN disponibil de la distribuitor. 
                Necesită DDR obligatoriu.
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-2">IT (Izolat-Terre)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Sursa izolată de pământ sau legată prin impedanță mare.
              </p>
              <p className="text-gray-400 text-xs">
                Utilizare: spitale (săli operație), mine, procese critice. 
                Necesită CPI (controlul permanent al izolației).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">7.3 Elemente Priză de Pământ</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Electrozi verticali</strong> - țevi sau profile OL-Zn, L=2-3m</li>
              <li>• <strong>Electrozi orizontali</strong> - platbande sau bare, adâncime 0.6-0.8m</li>
              <li>• <strong>Fundații armate</strong> - pot servi ca priză naturală</li>
              <li>• <strong>Centura de împământare</strong> - leagă toți electrozii</li>
              <li>• <strong>Bară principală de egalizare (BPE)</strong> - punct de colectare</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">7.4 Valori Rezistență de Dispersie</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Aplicație</th>
                  <th className="p-3 text-center">Rd max [Ω]</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Locuințe (TN)</td>
                  <td className="p-3 text-center">4</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Locuințe (TT cu DDR 30mA)</td>
                  <td className="p-3 text-center">100</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Posturi de transformare</td>
                  <td className="p-3 text-center">4</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Instalații de paratrăsnet</td>
                  <td className="p-3 text-center">10</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Centre de date</td>
                  <td className="p-3 text-center">1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600 mt-4">
            <h4 className="font-semibold text-green-400 mb-2">✓ Legătura echipotențială</h4>
            <p className="text-gray-300 text-sm">
              Toate elementele metalice din clădire (țevi apă, gaz, încălzire, armături, 
              căzi metalice) trebuie conectate la bara de egalizare prin conductoare 
              de minim 6 mm² Cu.
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
          <h3 className="text-xl font-semibold text-yellow-400">8.1 Reguli de Montaj</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Trasee cabluri</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Trasee orizontale: la 30 cm de plafon sau 30 cm de pardoseală</li>
                <li>• Trasee verticale: la 15 cm de colțuri, uși, ferestre</li>
                <li>• Protecție mecanică în tuburi sau jgheaburi</li>
                <li>• Raze de curbură minim 6 × diametrul cablului</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Conexiuni și terminații</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Doar în doze de derivație accesibile</li>
                <li>• Cleme cu arc sau șurub (nu bandă izolantă!)</li>
                <li>• Marcarea conductoarelor: L=maro, N=albastru, PE=galben-verde</li>
                <li>• Nu se îmbină conductoare Cu cu Al direct</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Tablouri electrice</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Înălțime montaj: 1.4-1.8 m de pardoseală</li>
                <li>• Acces liber minim 0.7 m în față</li>
                <li>• Grad de protecție minim IP30 (IP44 în medii umede)</li>
                <li>• Etichetare circuite obligatorie</li>
                <li>• Rezervă minim 20% spațiu pentru extinderi</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">8.2 Verificări la Recepție (PE 116)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Măsurători obligatorii:</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-green-400 mt-0.5">1.</span>
                <div>
                  <strong>Continuitatea conductoarelor de protecție</strong>
                  <p className="text-gray-400 text-xs">Verificare cu ohmetru, rezistență &lt;1Ω</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-green-400 mt-0.5">2.</span>
                <div>
                  <strong>Rezistența de izolație</strong>
                  <p className="text-gray-400 text-xs">Minim 0.5 MΩ între conductori și față de pământ (la 500V DC)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-green-400 mt-0.5">3.</span>
                <div>
                  <strong>Rezistența de dispersie a prizei de pământ</strong>
                  <p className="text-gray-400 text-xs">Conform schemei de legare la pământ</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-green-400 mt-0.5">4.</span>
                <div>
                  <strong>Verificarea DDR</strong>
                  <p className="text-gray-400 text-xs">Timp de declanșare &lt;300ms la IΔn, &lt;40ms la 5×IΔn</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <span className="text-green-400 mt-0.5">5.</span>
                <div>
                  <strong>Impedanța buclei de defect</strong>
                  <p className="text-gray-400 text-xs">Zs × Ia ≤ U0 (pentru deconectare automată)</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mt-6">8.3 Documente Necesare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">📄</span>
                <span>Proiect tehnic vizat (pentru lucrări noi sau modificări)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">📄</span>
                <span>Buletine de verificare PRAM / electrician autorizat</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">📄</span>
                <span>Declarații de conformitate pentru echipamente</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">📄</span>
                <span>Schemă monofilară actualizată</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">📄</span>
                <span>Proces verbal de recepție</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-900/30 p-4 rounded-lg border border-red-600 mt-4">
            <h4 className="font-semibold text-red-400 mb-2">⚠️ Atenție!</h4>
            <p className="text-gray-300 text-sm">
              Lucrările la instalațiile electrice pot fi executate doar de electricieni 
              autorizați ANRE. Verificările periodice sunt obligatorii conform legislației 
              în vigoare (la punerea în funcțiune, periodic la 2-4 ani, și după modificări).
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
            <label htmlFor="search-electrice" className="sr-only">
              Caută în ghid
            </label>
            <input
              id="search-electrice"
              type="text"
              placeholder="Caută în ghid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Caută în ghidul de instalații electrice"
            />
          </div>
          <nav aria-label="Secțiuni ghid electrice">
            <ul className="space-y-1">
              {filteredSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-yellow-600 text-white'
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
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">
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