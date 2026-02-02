'use client';

import React, { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function GhidAutomatizare() {
  const [activeSection, setActiveSection] = useState<string>('introducere');
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'introducere',
      title: '1. Introducere în Automatizări',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">1.1 Ce este BMS/BAS?</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>Building Management System (BMS)</strong> sau <strong>Building Automation System (BAS)</strong> 
            reprezintă sistemul centralizat de monitorizare și control al instalațiilor dintr-o clădire: 
            HVAC, iluminat, securitate, incendiu, ascensoare, energie.
          </p>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-300 mb-2">Beneficii automatizare:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Reducere consum energie 15-30%</li>
              <li>Confort îmbunătățit pentru ocupanți</li>
              <li>Întreținere predictivă (reducere costuri)</li>
              <li>Monitorizare centralizată 24/7</li>
              <li>Raportare și analiză date</li>
              <li>Integrare sisteme diverse</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">1.2 Niveluri de Automatizare</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Nivel 1</span>
                <h4 className="font-semibold text-white">Câmp (Field Level)</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Senzori, actuatoare, traductoare. Dispozitive care măsoară și acționează direct.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Nivel 2</span>
                <h4 className="font-semibold text-white">Automatizare (Automation Level)</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Controlere (DDC, PLC), regulatoare. Procesează datele și emit comenzi.
              </p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">Nivel 3</span>
                <h4 className="font-semibold text-white">Management (Management Level)</h4>
              </div>
              <p className="text-gray-300 text-sm">
                Server BMS, interfață operator, baze de date, rapoarte, alarme.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">1.3 Standarde și Protocoale</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>BACnet</strong> - Building Automation and Control Networks (ASHRAE 135)</li>
              <li>• <strong>KNX</strong> - Standard european pentru automatizări clădiri (ISO/IEC 14543)</li>
              <li>• <strong>Modbus</strong> - Protocol industrial pentru comunicație dispozitive</li>
              <li>• <strong>LON</strong> - Local Operating Network</li>
              <li>• <strong>DALI</strong> - Digital Addressable Lighting Interface</li>
              <li>• <strong>EnOcean</strong> - Protocol wireless fără baterii</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'senzori',
      title: '2. Senzori și Traductoare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">2.1 Senzori de Temperatură</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Tip senzor</th>
                  <th className="p-3 text-center">Domeniu</th>
                  <th className="p-3 text-center">Precizie</th>
                  <th className="p-3 text-left">Utilizare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">NTC (termistor)</td>
                  <td className="p-3 text-center">-40...+125°C</td>
                  <td className="p-3 text-center">±0.2°C</td>
                  <td className="p-3">HVAC, ambient</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Pt100/Pt1000</td>
                  <td className="p-3 text-center">-200...+850°C</td>
                  <td className="p-3 text-center">±0.1°C</td>
                  <td className="p-3">Conducte, industrial</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Termocuplu</td>
                  <td className="p-3 text-center">-270...+1800°C</td>
                  <td className="p-3 text-center">±1-2°C</td>
                  <td className="p-3">Temperaturi extreme</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Digital (I2C)</td>
                  <td className="p-3 text-center">-40...+125°C</td>
                  <td className="p-3 text-center">±0.5°C</td>
                  <td className="p-3">Smart home, IoT</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">2.2 Senzori de Umiditate</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Capacitivi:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Domeniu: 0-100% RH</li>
                  <li>• Precizie: ±2-3% RH</li>
                  <li>• Cei mai utilizați</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Combinați (T+RH):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Temperatură + umiditate</li>
                  <li>• Calculează punct de rouă</li>
                  <li>• Output: 0-10V sau 4-20mA</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">2.3 Senzori de Presiune</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Presiune diferențială (Δp)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Pentru filtre aer (colmatare)</li>
                <li>• Pentru camere curate (suprapresiune)</li>
                <li>• Domeniu: 0-500 Pa tipic</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">Presiune absolută/relativă</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Pentru conducte apă/gaz</li>
                <li>• Domeniu: 0-10/16/25 bar</li>
                <li>• Protecție la suprapresiune</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">2.4 Senzori Calitate Aer</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">CO₂</h4>
                <p className="text-gray-400 text-xs">0-2000/5000 ppm</p>
                <p className="text-gray-300 text-xs mt-1">Control ventilare DCV</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">VOC</h4>
                <p className="text-gray-400 text-xs">0-1000 ppb</p>
                <p className="text-gray-300 text-xs mt-1">Compuși organici volatili</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">PM2.5/PM10</h4>
                <p className="text-gray-400 text-xs">0-500 μg/m³</p>
                <p className="text-gray-300 text-xs mt-1">Particule în suspensie</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">2.5 Senzori de Prezență și Lumină</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">PIR (infraroșu pasiv):</strong>
                <span className="text-gray-400"> Detectează mișcare prin radiație termică</span>
              </li>
              <li>
                <strong className="text-yellow-400">Ultrasonic:</strong>
                <span className="text-gray-400"> Detectează mișcare prin unde sonore</span>
              </li>
              <li>
                <strong className="text-yellow-400">Dual-tech:</strong>
                <span className="text-gray-400"> PIR + ultrasonic (reduce alarme false)</span>
              </li>
              <li>
                <strong className="text-yellow-400">Senzor lumină (lux):</strong>
                <span className="text-gray-400"> 0-10.000 lux, pentru dimming natural</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'actuatoare',
      title: '3. Actuatoare și Elemente de Execuție',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">3.1 Vane și Servomotoare</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Vane cu 2 căi</h4>
              <p className="text-gray-300 text-sm mb-2">
                Reglează debitul prin închidere/deschidere. Pentru baterii de încălzire/răcire.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Caracteristică: liniară sau egală în procente</li>
                <li>• Comandă: ON/OFF, 3 puncte, 0-10V</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Vane cu 3 căi</h4>
              <p className="text-gray-300 text-sm mb-2">
                Amestec sau deviere. Pentru circuite cu bypass sau recirculare.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Amestec: două intrări, o ieșire</li>
                <li>• Deviere: o intrare, două ieșiri</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Servomotoare vane</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>Termic</strong>: lent (2-3 min), silențios, ieftin</li>
                <li>• <strong>Electric</strong>: rapid (10-60s), precis, feedback</li>
                <li>• <strong>Pneumatic</strong>: foarte rapid, forță mare, industrial</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">3.2 Clapete și Actuatoare Aer</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Tipuri clapete:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Reglaj debit aer</li>
                  <li>• Aer proaspăt/recirculat</li>
                  <li>• Antifoc (cu fuzibil sau electromagnet)</li>
                  <li>• Antiretour (sens unic)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Actuatoare:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Cuplu: 2-40 Nm</li>
                  <li>• Timp rotație: 60-150s</li>
                  <li>• Cu resort de revenire (fail-safe)</li>
                  <li>• Comandă: 0-10V, 2-10V, 4-20mA</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">3.3 Variatore de Turație (VFD)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 mb-3">
              <strong>Variable Frequency Drive (VFD)</strong> - reglează turația motoarelor 
              electrice prin modificarea frecvenței alimentării.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-green-400 mb-2">Avantaje:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Economie energie 30-50%</li>
                  <li>• Pornire lină (fără șoc)</li>
                  <li>• Reglaj precis debit/presiune</li>
                  <li>• Reducere uzură mecanică</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-yellow-400 mb-2">Aplicații:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Pompe circulație</li>
                  <li>• Ventilatoare UTA</li>
                  <li>• Compresoare</li>
                  <li>• Pompe hidrofor</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600 mt-4">
            <h4 className="font-semibold text-green-400 mb-2">💡 Legea afinității (pompe/ventilatoare):</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="bg-gray-800 p-2 rounded text-center">
                <p className="font-mono text-cyan-300">Q₂/Q₁ = n₂/n₁</p>
                <p className="text-xs text-gray-400 mt-1">Debit ~ turație</p>
              </div>
              <div className="bg-gray-800 p-2 rounded text-center">
                <p className="font-mono text-cyan-300">H₂/H₁ = (n₂/n₁)²</p>
                <p className="text-xs text-gray-400 mt-1">Presiune ~ turație²</p>
              </div>
              <div className="bg-gray-800 p-2 rounded text-center">
                <p className="font-mono text-cyan-300">P₂/P₁ = (n₂/n₁)³</p>
                <p className="text-xs text-gray-400 mt-1">Putere ~ turație³</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">3.4 Relee și Contactoare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">Releu:</strong>
                <span className="text-gray-400"> Comută sarcini mici (max 10-16A), comandă 24V/230V</span>
              </li>
              <li>
                <strong className="text-yellow-400">Contactor:</strong>
                <span className="text-gray-400"> Comută sarcini mari (motoare), cu protecție termică</span>
              </li>
              <li>
                <strong className="text-yellow-400">SSR (Solid State Relay):</strong>
                <span className="text-gray-400"> Electronic, fără părți mobile, comutare rapidă</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'controlere',
      title: '4. Controlere și Automate',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">4.1 Tipuri de Controlere</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">DDC (Direct Digital Control)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Controlere programabile pentru HVAC. Specific clădiri.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Intrări/ieșiri universale (UI, AO, DO)</li>
                <li>• Programare grafică sau text</li>
                <li>• Comunicație BACnet, Modbus, LON</li>
                <li>• Producători: Siemens, Honeywell, Johnson Controls, Schneider</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">PLC (Programmable Logic Controller)</h4>
              <p className="text-gray-300 text-sm mb-2">
                Automate programabile industriale. Robustețe maximă.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Aplicații industriale și critice</li>
                <li>• Programare Ladder, FBD, ST (IEC 61131-3)</li>
                <li>• Comunicație Profibus, Profinet, EtherNet/IP</li>
                <li>• Producători: Siemens, Allen-Bradley, Schneider, ABB</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-2">Controlere de cameră</h4>
              <p className="text-gray-300 text-sm mb-2">
                Controlere locale pentru zone individuale.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• Termostate inteligente</li>
                <li>• Fan-coil controlere</li>
                <li>• VAV box controlere</li>
                <li>• Comunicație: KNX, BACnet MS/TP, Modbus RTU</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">4.2 Intrări și Ieșiri (I/O)</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Tip</th>
                  <th className="p-3 text-left">Semnal</th>
                  <th className="p-3 text-left">Exemple utilizare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-green-400">DI (Digital Input)</td>
                  <td className="p-3">ON/OFF, contact uscat</td>
                  <td className="p-3">Stare pompă, alarme, contact fereastră</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-blue-400">AI (Analog Input)</td>
                  <td className="p-3">0-10V, 4-20mA, Pt1000</td>
                  <td className="p-3">Temperatură, presiune, umiditate</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-yellow-400">DO (Digital Output)</td>
                  <td className="p-3">Releu, 24V DC</td>
                  <td className="p-3">Pornire pompă, comandă ON/OFF</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-purple-400">AO (Analog Output)</td>
                  <td className="p-3">0-10V, 4-20mA</td>
                  <td className="p-3">Comandă vană, poziție clapetă, VFD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">4.3 Regulare PID</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 mb-3">
              Controlul <strong>PID</strong> (Proporțional-Integral-Derivativ) este cel mai 
              utilizat algoritm de reglare automată.
            </p>
            
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300 mb-3">
              u(t) = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt
            </div>
            
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-red-400 text-sm mb-1">P (Proporțional)</h4>
                <p className="text-gray-400 text-xs">
                  Răspunde la eroarea curentă. Mai mare = reacție mai rapidă, dar oscilații.
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-green-400 text-sm mb-1">I (Integral)</h4>
                <p className="text-gray-400 text-xs">
                  Elimină eroarea permanentă. Mai mare = stabilitate, dar răspuns lent.
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-blue-400 text-sm mb-1">D (Derivativ)</h4>
                <p className="text-gray-400 text-xs">
                  Anticipează schimbările. Reduce depășirile, sensibil la zgomot.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">4.4 Programare Orar</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              Programele orare permit funcționarea diferențiată în funcție de timp:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Zilnic:</strong> Start/stop la ore fixe</li>
              <li>• <strong>Săptămânal:</strong> Program diferit weekend</li>
              <li>• <strong>Calendar:</strong> Sărbători, vacanțe</li>
              <li>• <strong>Optimizare start:</strong> Pornire anticipată funcție de T exterior</li>
              <li>• <strong>Night setback:</strong> Reducere temperatură noapte</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'comunicatie',
      title: '5. Rețele și Comunicație',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">5.1 Protocoale de Comunicație</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">BACnet</h4>
              <p className="text-gray-300 text-sm mb-2">
                Standard ASHRAE pentru automatizări clădiri. Interoperabilitate garantată.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• <strong>BACnet IP</strong> - peste Ethernet, cel mai rapid</li>
                <li>• <strong>BACnet MS/TP</strong> - RS-485, pentru controlere</li>
                <li>• <strong>BACnet SC</strong> - Secure Connect, cu TLS</li>
                <li>• Obiecte standardizate: AI, AO, BI, BO, AV, BV, Schedule...</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Modbus</h4>
              <p className="text-gray-300 text-sm mb-2">
                Protocol simplu, larg răspândit. Master-slave.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• <strong>Modbus RTU</strong> - serial RS-485, binar</li>
                <li>• <strong>Modbus TCP</strong> - peste Ethernet</li>
                <li>• Registre: Coils, Discrete Inputs, Holding Registers, Input Registers</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-2">KNX</h4>
              <p className="text-gray-300 text-sm mb-2">
                Standard european pentru smart home și clădiri. Descentralizat.
              </p>
              <ul className="text-gray-400 text-xs space-y-1">
                <li>• <strong>KNX TP</strong> - Twisted Pair, cel mai comun</li>
                <li>• <strong>KNX RF</strong> - Radio frequency, wireless</li>
                <li>• <strong>KNX IP</strong> - Backbone, integrare rețea IT</li>
                <li>• Adresare pe 3 nivele: Zonă.Linie.Dispozitiv</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">5.2 Topologii de Rețea</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Nivel câmp (Field):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Bus RS-485 (Modbus RTU, BACnet MS/TP)</li>
                  <li>• Linie KNX TP</li>
                  <li>• Lungime max: 1000m (cu repetor)</li>
                  <li>• Max 64-128 dispozitive/segment</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Nivel management:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Ethernet TCP/IP (BACnet IP, Modbus TCP)</li>
                  <li>• Fiber optic pentru distanțe mari</li>
                  <li>• VLAN dedicat pentru BMS</li>
                  <li>• Switch-uri managed</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">5.3 Integrare Sisteme</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 mb-3">
              BMS-ul poate integra diverse subsisteme prin gateway-uri:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-green-400 text-sm">Sisteme HVAC:</h4>
                <p className="text-gray-400 text-xs">UTA, chillere, cazane, pompe de căldură</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-yellow-400 text-sm">Iluminat:</h4>
                <p className="text-gray-400 text-xs">DALI, KNX, 0-10V, DMX</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-blue-400 text-sm">Securitate:</h4>
                <p className="text-gray-400 text-xs">Control acces, CCTV, antiefracție</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-red-400 text-sm">Incendiu:</h4>
                <p className="text-gray-400 text-xs">Detecție, alarmare, desfumare (doar citire)</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-purple-400 text-sm">Energie:</h4>
                <p className="text-gray-400 text-xs">Contoare, analizoare, panouri fotovoltaice</p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-400 text-sm">Ascensoare:</h4>
                <p className="text-gray-400 text-xs">Stare funcționare, alarme, traffic management</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">5.4 Cybersecurity</h3>
          
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-600">
            <h4 className="font-semibold text-red-400 mb-2">⚠️ Securitate rețea BMS:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Izolare rețea BMS de IT (VLAN separat, firewall)</li>
              <li>• Autentificare și parole puternice</li>
              <li>• Criptare comunicații (BACnet SC, VPN)</li>
              <li>• Update-uri firmware regulate</li>
              <li>• Audit și monitorizare acces</li>
              <li>• Backup configurații</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'scada',
      title: '6. SCADA și Interfață Operator',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">6.1 Ce este SCADA?</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>SCADA</strong> (Supervisory Control And Data Acquisition) reprezintă sistemul 
            software de supraveghere și control, care oferă o interfață grafică pentru 
            operatori și administratori.
          </p>

          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-300 mb-2">Funcții SCADA/BMS:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Vizualizare grafică sinoptice</li>
              <li>Monitorizare parametri în timp real</li>
              <li>Comandă manuală echipamente</li>
              <li>Gestionare alarme și evenimente</li>
              <li>Înregistrare date istorice (trending)</li>
              <li>Rapoarte și analize</li>
              <li>Gestionare utilizatori și drepturi</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">6.2 Interfața Grafică</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Elemente tipice:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-cyan-300 mb-2">Sinoptice:</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Schema generală clădire</li>
                  <li>• Scheme instalații (HVAC, electric)</li>
                  <li>• Planuri etaje cu zone</li>
                  <li>• Detalii echipamente</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-cyan-300 mb-2">Indicatoare:</h5>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Valori numerice (temperaturi, presiuni)</li>
                  <li>• Bare grafice (niveluri, procente)</li>
                  <li>• Stări echipamente (pornit/oprit/avarie)</li>
                  <li>• Animații (flux, rotație)</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">6.3 Gestionare Alarme</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Prioritate</th>
                  <th className="p-3 text-left">Descriere</th>
                  <th className="p-3 text-left">Acțiune</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-red-900/30">
                  <td className="p-3 font-semibold text-red-400">Critică</td>
                  <td className="p-3">Siguranță persoane, avarie majoră</td>
                  <td className="p-3">Intervenție imediată, notificare SMS</td>
                </tr>
                <tr className="bg-orange-900/30">
                  <td className="p-3 font-semibold text-orange-400">Majoră</td>
                  <td className="p-3">Defecțiune echipament, parametri critici</td>
                  <td className="p-3">Intervenție în 1h, notificare email</td>
                </tr>
                <tr className="bg-yellow-900/30">
                  <td className="p-3 font-semibold text-yellow-400">Minoră</td>
                  <td className="p-3">Abateri parametri, întreținere necesară</td>
                  <td className="p-3">Verificare program, log</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-blue-400">Informativă</td>
                  <td className="p-3">Schimbări stare, evenimente normale</td>
                  <td className="p-3">Doar înregistrare</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">6.4 Trending și Rapoarte</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Trenduri (grafice temporale):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Temperatura în timp</li>
                  <li>• Consumuri energie</li>
                  <li>• Funcționare echipamente</li>
                  <li>• Comparații perioade</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Rapoarte:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Consum energie (zilnic, lunar, anual)</li>
                  <li>• Ore funcționare echipamente</li>
                  <li>• Statistici alarme</li>
                  <li>• KPI-uri clădire</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">6.5 Acces Remote</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-cyan-400">Web client:</strong>
                <span className="text-gray-400"> Acces prin browser, HTML5</span>
              </li>
              <li>
                <strong className="text-cyan-400">Aplicație mobilă:</strong>
                <span className="text-gray-400"> iOS/Android, notificări push</span>
              </li>
              <li>
                <strong className="text-cyan-400">VPN:</strong>
                <span className="text-gray-400"> Acces securizat la rețeaua BMS</span>
              </li>
              <li>
                <strong className="text-cyan-400">Cloud:</strong>
                <span className="text-gray-400"> Platforme IoT (Azure, AWS, proprietare)</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'aplicatii',
      title: '7. Aplicații HVAC',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">7.1 Control Unități de Tratare Aer (UTA)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Funcții automate UTA:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <div>
                  <strong>Control temperatură:</strong>
                  <span className="text-gray-400"> Reglaj baterii încălzire/răcire pentru T introdusă constantă sau compensată</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <div>
                  <strong>Control umiditate:</strong>
                  <span className="text-gray-400"> Umidificare/dezumidificare în funcție de setpoint</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <div>
                  <strong>Free cooling:</strong>
                  <span className="text-gray-400"> Utilizare aer exterior când T ext &lt; T int (economie energie)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <div>
                  <strong>Control presiune:</strong>
                  <span className="text-gray-400"> Menținere Δp constant în canale (VFD ventilatoare)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">•</span>
                <div>
                  <strong>Protecție îngheț:</strong>
                  <span className="text-gray-400"> Oprire ventilator + deschidere vană căldură la T&lt;5°C</span>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">7.2 Ventilare Controlată după Cerere (DCV)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-gray-300 text-sm mb-3">
              <strong>Demand Controlled Ventilation</strong> - ajustează debitul de aer în funcție 
              de ocupare reală, nu maximă presupusă.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Senzor CO₂:</h4>
                <p className="text-gray-400 text-xs">
                  Setpoint 800 ppm. Crește debitul când CO₂ crește.
                </p>
              </div>
              <div className="bg-gray-700 p-3 rounded">
                <h4 className="font-semibold text-cyan-300 text-sm mb-1">Senzor prezență:</h4>
                <p className="text-gray-400 text-xs">
                  Reduce ventilarea în spații neocupate.
                </p>
              </div>
            </div>
            <p className="text-green-400 text-sm mt-3">✓ Economie energie 20-40% față de debit constant</p>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">7.3 Control Centrale Termice</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">Cascadă cazane:</strong>
                <span className="text-gray-400"> Pornire secvențială în funcție de sarcină</span>
              </li>
              <li>
                <strong className="text-yellow-400">Curbă climatică:</strong>
                <span className="text-gray-400"> T tur funcție de T exterior (ex: -15°C ext → 75°C tur)</span>
              </li>
              <li>
                <strong className="text-yellow-400">Protecție cazan:</strong>
                <span className="text-gray-400"> ΔT max, T max/min, presiune, lipsa flacără</span>
              </li>
              <li>
                <strong className="text-yellow-400">Optimizare start:</strong>
                <span className="text-gray-400"> Pornire anticipată pentru T comfort la ora dorită</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">7.4 Control Chillere și Pompe de Căldură</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-blue-400">Setpoint T apă răcită:</strong>
                <span className="text-gray-400"> 6-12°C, ajustat după sarcină (reset)</span>
              </li>
              <li>
                <strong className="text-blue-400">Staging compresoare:</strong>
                <span className="text-gray-400"> Pornire/oprire secvențială, rotație ore funcționare</span>
              </li>
              <li>
                <strong className="text-blue-400">Free cooling chiller:</strong>
                <span className="text-gray-400"> Bypass compresor când T ext &lt; T apă</span>
              </li>
              <li>
                <strong className="text-blue-400">Control turnuri răcire:</strong>
                <span className="text-gray-400"> T condensare optimă, VFD ventilatoare</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">7.5 Control Zone (VAV/Fan-coil)</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">VAV (Variable Air Volume):</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Reglaj debit aer per zonă</li>
                <li>• Clapetă motorizată cu controler</li>
                <li>• Feedback presiune/debit</li>
                <li>• Reîncălzire locală opțională</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-cyan-300 mb-2">Fan-coil:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Control viteză ventilator (3 trepte/VFD)</li>
                <li>• Control vană apă 2/4 țevi</li>
                <li>• Termostat local sau centralizat</li>
                <li>• Changeover automat cald/rece</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'iluminat',
      title: '8. Automatizare Iluminat',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-purple-400">8.1 Strategii de Control</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Control după prezență</h4>
              <p className="text-gray-300 text-sm">
                Aprindere la detectare mișcare, stingere după timeout (5-30 min).
              </p>
              <p className="text-green-400 text-xs mt-1">✓ Economie: 20-40%</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Daylight harvesting</h4>
              <p className="text-gray-300 text-sm">
                Dimming în funcție de lumina naturală. Senzor lux menține nivel constant.
              </p>
              <p className="text-green-400 text-xs mt-1">✓ Economie: 30-50%</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-400 mb-2">Programare orar</h4>
              <p className="text-gray-300 text-sm">
                Scene presetate pe ore: 100% zi lucrătoare, 50% pauză, OFF noapte.
              </p>
              <p className="text-green-400 text-xs mt-1">✓ Economie: 15-25%</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Task tuning</h4>
              <p className="text-gray-300 text-sm">
                Reducere nivel maxim (ex: 80% în loc de 100%) când nu e necesar.
              </p>
              <p className="text-green-400 text-xs mt-1">✓ Economie: 10-20%</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">8.2 Protocol DALI</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 mb-3">
              <strong>DALI</strong> (Digital Addressable Lighting Interface) - protocol 
              standard pentru controlul digital al iluminatului.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Caracteristici:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Max 64 dispozitive/linie</li>
                  <li>• 16 grupuri, 16 scene</li>
                  <li>• Dimming 0.1-100%</li>
                  <li>• Feedback stare și erori</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">DALI-2:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Senzori și butoane pe bus</li>
                  <li>• Control culoare (Tunable White, RGBW)</li>
                  <li>• Interoperabilitate certificată</li>
                  <li>• Diagnosticare avansată</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">8.3 Integrare cu BMS</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Moduri de integrare iluminat:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">Gateway DALI-BACnet:</strong>
                <span className="text-gray-400"> Expune grupuri DALI ca obiecte BACnet</span>
              </li>
              <li>
                <strong className="text-yellow-400">KNX-BACnet:</strong>
                <span className="text-gray-400"> Integrare bidirecțională, scene și feedback</span>
              </li>
              <li>
                <strong className="text-yellow-400">0-10V din controler DDC:</strong>
                <span className="text-gray-400"> Control analog simplu, fără feedback</span>
              </li>
              <li>
                <strong className="text-yellow-400">Releu ON/OFF:</strong>
                <span className="text-gray-400"> Control bazic, grupuri mari</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-purple-400 mt-6">8.4 Human Centric Lighting</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-gray-300 text-sm mb-3">
              <strong>HCL</strong> - iluminat care respectă ritmul circadian uman, 
              variind temperatura de culoare și intensitatea pe parcursul zilei.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-300 mt-2">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-2 text-left">Oră</th>
                    <th className="p-2 text-center">Temp. culoare</th>
                    <th className="p-2 text-center">Intensitate</th>
                    <th className="p-2 text-left">Efect</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="p-2">Dimineață (7-9)</td>
                    <td className="p-2 text-center text-blue-400">5000-6500K</td>
                    <td className="p-2 text-center">70-100%</td>
                    <td className="p-2">Activare, energie</td>
                  </tr>
                  <tr>
                    <td className="p-2">Zi (9-17)</td>
                    <td className="p-2 text-center text-cyan-400">4000-5000K</td>
                    <td className="p-2 text-center">100%</td>
                    <td className="p-2">Productivitate</td>
                  </tr>
                  <tr>
                    <td className="p-2">Seară (17-20)</td>
                    <td className="p-2 text-center text-yellow-400">3000-4000K</td>
                    <td className="p-2 text-center">60-80%</td>
                    <td className="p-2">Relaxare</td>
                  </tr>
                  <tr>
                    <td className="p-2">Noapte (20+)</td>
                    <td className="p-2 text-center text-orange-400">2700-3000K</td>
                    <td className="p-2 text-center">30-50%</td>
                    <td className="p-2">Pregătire somn</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-900/30 p-4 rounded-lg border border-green-600 mt-4">
            <h4 className="font-semibold text-green-400 mb-2">✓ Beneficii automatizare iluminat:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Reducere consum energie 40-60%</li>
              <li>• Confort vizual îmbunătățit</li>
              <li>• Durată de viață mărită corpuri iluminat</li>
              <li>• Flexibilitate scene și configurări</li>
              <li>• Integrare cu alte sisteme (HVAC, securitate)</li>
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
            <label htmlFor="search-automatizare" className="sr-only">
              Caută în ghid
            </label>
            <input
              id="search-automatizare"
              type="text"
              placeholder="Caută în ghid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Caută în ghidul de automatizări"
            />
          </div>
          <nav aria-label="Secțiuni ghid automatizare">
            <ul className="space-y-1">
              {filteredSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-purple-600 text-white'
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
              <h2 className="text-2xl font-bold text-purple-400 mb-6">
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