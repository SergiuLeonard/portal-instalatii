'use client';

import React, { useState } from 'react';

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function GhidCertificare() {
  const [activeSection, setActiveSection] = useState<string>('introducere');
  const [searchTerm, setSearchTerm] = useState('');

  const sections: Section[] = [
    {
      id: 'introducere',
      title: '1. Introducere în Certificarea Energetică',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">1.1 Ce este Certificatul Energetic?</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong>Certificatul de performanță energetică</strong> este un document oficial care 
            evaluează și clasifică o clădire din punct de vedere al consumului de energie, 
            similar cu eticheta energetică de pe electrocasnice.
          </p>
          
          <div className="bg-teal-900/30 p-4 rounded-lg border border-teal-600">
            <h4 className="font-semibold text-teal-400 mb-2">📋 Scopul certificatului:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Informarea proprietarilor/chiriașilor despre consumul energetic</li>
              <li>Compararea clădirilor din punct de vedere energetic</li>
              <li>Identificarea măsurilor de îmbunătățire</li>
              <li>Stimularea renovărilor energetice</li>
              <li>Conformitate cu legislația europeană și națională</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">1.2 Când este Obligatoriu?</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong>Vânzare</strong> - Obligatoriu la actul de vânzare-cumpărare</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong>Închiriere</strong> - Obligatoriu la contractul de închiriere</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong>Construcție nouă</strong> - La recepția clădirii</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong>Renovare majoră</strong> - După finalizarea lucrărilor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong>Clădiri publice</strong> - Afișare obligatorie (&gt;250 m²)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✓</span>
                <span><strong>Anunțuri imobiliare</strong> - Clasa energetică obligatorie în anunț</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">1.3 Cadrul Legislativ</h3>
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Legea 372/2005</strong> - Performanța energetică a clădirilor (republicată, modificată)</li>
              <li>• <strong>Ordinul 2641/2017</strong> - Metodologia de calcul MC001</li>
              <li>• <strong>Directiva 2010/31/UE (EPBD)</strong> - Directiva europeană privind performanța energetică</li>
              <li>• <strong>Directiva 2018/844/UE</strong> - Modificări EPBD</li>
              <li>• <strong>Ordinul MDLPA 386/2016</strong> - Atestare auditori energetici</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">1.4 Valabilitate</h3>
          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600">
            <p className="text-gray-300 text-sm">
              <strong>Certificatul energetic este valabil 10 ani</strong> de la data emiterii, 
              cu condiția să nu se efectueze modificări majore la clădire (renovare anvelopă, 
              schimbare sistem încălzire, etc.).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'clase',
      title: '2. Clasele Energetice',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">2.1 Scala de Clasificare</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-4">
              Clădirile sunt clasificate pe o scară de la <strong>A+</strong> (foarte eficientă) 
              la <strong>G</strong> (ineficientă), în funcție de consumul de energie primară.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-green-600 rounded flex items-center justify-center font-bold text-white">A+</div>
                <span className="text-gray-300 text-sm">≤ 53 kWh/m²·an - Passivhaus, nZEB</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-green-500 rounded flex items-center justify-center font-bold text-white">A</div>
                <span className="text-gray-300 text-sm">54 - 100 kWh/m²·an - Foarte eficientă</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-lime-500 rounded flex items-center justify-center font-bold text-white">B</div>
                <span className="text-gray-300 text-sm">101 - 150 kWh/m²·an - Eficientă</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-white">C</div>
                <span className="text-gray-300 text-sm">151 - 200 kWh/m²·an - Medie</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-orange-500 rounded flex items-center justify-center font-bold text-white">D</div>
                <span className="text-gray-300 text-sm">201 - 250 kWh/m²·an - Satisfăcătoare</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-orange-600 rounded flex items-center justify-center font-bold text-white">E</div>
                <span className="text-gray-300 text-sm">251 - 300 kWh/m²·an - Ineficientă</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-red-500 rounded flex items-center justify-center font-bold text-white">F</div>
                <span className="text-gray-300 text-sm">301 - 350 kWh/m²·an - Foarte ineficientă</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-8 bg-red-700 rounded flex items-center justify-center font-bold text-white">G</div>
                <span className="text-gray-300 text-sm">&gt; 350 kWh/m²·an - Extrem de ineficientă</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">2.2 Indici de Performanță</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Indice energie primară (EP):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Exprimă consumul total de energie</li>
                  <li>• Include factori de conversie</li>
                  <li>• Unitate: kWh/m²·an</li>
                  <li>• <strong>Principal indicator pentru clasă</strong></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Indice emisii CO₂:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Emisii gaze cu efect de seră</li>
                  <li>• Funcție de sursa de energie</li>
                  <li>• Unitate: kg CO₂/m²·an</li>
                  <li>• Indicator de impact ecologic</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">2.3 Factori de Conversie Energie Primară</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Sursă energie</th>
                  <th className="p-3 text-center">Factor f</th>
                  <th className="p-3 text-center">kg CO₂/kWh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Gaze naturale</td>
                  <td className="p-3 text-center">1.17</td>
                  <td className="p-3 text-center">0.205</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Energie electrică rețea</td>
                  <td className="p-3 text-center">2.62</td>
                  <td className="p-3 text-center">0.299</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Motorină/păcură</td>
                  <td className="p-3 text-center">1.10</td>
                  <td className="p-3 text-center">0.265</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Lemn/biomasă</td>
                  <td className="p-3 text-center">0.15</td>
                  <td className="p-3 text-center">0.024</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Energie solară termică</td>
                  <td className="p-3 text-center">0.00</td>
                  <td className="p-3 text-center">0.000</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Energie fotovoltaică</td>
                  <td className="p-3 text-center">0.00</td>
                  <td className="p-3 text-center">0.000</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Termoficare (cogenerare)</td>
                  <td className="p-3 text-center">0.92</td>
                  <td className="p-3 text-center">0.220</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-teal-900/30 p-4 rounded-lg border border-teal-600 mt-4">
            <h4 className="font-semibold text-teal-400 mb-2">💡 De ce contează factorul f?</h4>
            <p className="text-gray-300 text-sm">
              Aceeași clădire poate avea clase diferite în funcție de sursa de energie. 
              Trecerea de la gaz (f=1.17) la pompă de căldură electrică eficientă poate 
              îmbunătăți semnificativ clasa energetică.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'metodologie',
      title: '3. Metodologia de Calcul MC001',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">3.1 Structura MC001</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              <strong>MC001-2022</strong> este metodologia oficială de calcul a performanței 
              energetice în România, armonizată cu standardele europene (seria SR EN ISO 52000).
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Partea 1:</strong> Anvelopă - pierderi prin transmisie</li>
              <li>• <strong>Partea 2:</strong> Performanța instalațiilor de încălzire</li>
              <li>• <strong>Partea 3:</strong> Performanța instalațiilor de răcire</li>
              <li>• <strong>Partea 4:</strong> Iluminat și energie electrică</li>
              <li>• <strong>Partea 5:</strong> Apă caldă menajeră</li>
              <li>• <strong>Partea 6:</strong> Ventilare</li>
              <li>• <strong>Partea 7:</strong> Surse regenerabile</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">3.2 Balanța Energetică</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-teal-500">
            <h4 className="font-semibold text-white mb-3">Ecuația de bază:</h4>
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300 mb-3">
              Qîncălzire = Qtr + Qv - Qs - Qi
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><strong>Qtr</strong> = Pierderi prin transmisie (pereți, acoperiș, ferestre)</li>
              <li><strong>Qv</strong> = Pierderi prin ventilare (infiltrații + ventilare)</li>
              <li><strong>Qs</strong> = Câștiguri solare (prin ferestre)</li>
              <li><strong>Qi</strong> = Câștiguri interne (persoane, echipamente, iluminat)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">3.3 Calculul Pierderilor prin Transmisie</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300 mb-3">
              Qtr = Σ(Ai × Ui) × (Ti - Te) × t + Σ(Ψj × Lj) × (Ti - Te) × t
            </div>
            <ul className="text-gray-300 text-sm space-y-1">
              <li><strong>A</strong> = Suprafața elementului [m²]</li>
              <li><strong>U</strong> = Coeficientul de transfer termic [W/m²K]</li>
              <li><strong>Ψ</strong> = Coeficient punte termică liniară [W/mK]</li>
              <li><strong>L</strong> = Lungimea punții termice [m]</li>
              <li><strong>Ti-Te</strong> = Diferența de temperatură interior-exterior</li>
              <li><strong>t</strong> = Timpul (ore în sezon)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">3.4 Date Climatice</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Zonă climatică</th>
                  <th className="p-3 text-center">Te medie iarnă</th>
                  <th className="p-3 text-center">Grade-zile</th>
                  <th className="p-3 text-left">Localități reprezentative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-blue-400">I</td>
                  <td className="p-3 text-center">-12°C</td>
                  <td className="p-3 text-center">2800</td>
                  <td className="p-3">Constanța, Tulcea</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">II</td>
                  <td className="p-3 text-center">-15°C</td>
                  <td className="p-3 text-center">3200</td>
                  <td className="p-3">București, Craiova, Galați</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-yellow-400">III</td>
                  <td className="p-3 text-center">-18°C</td>
                  <td className="p-3 text-center">3600</td>
                  <td className="p-3">Cluj, Iași, Timișoara</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-red-400">IV</td>
                  <td className="p-3 text-center">-21°C</td>
                  <td className="p-3 text-center">4000</td>
                  <td className="p-3">Brașov, Miercurea Ciuc</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">3.5 Calculul Energie Primară</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="bg-gray-900 p-3 rounded font-mono text-sm text-cyan-300 mb-3">
              EP = (Qîncălzire/ηîncălzire + Qrăcire/ηrăcire + QACM/ηACM + Eiluminat + Eauxiliare) × f
            </div>
            <p className="text-gray-400 text-sm">
              Energia finală consumată se înmulțește cu factorul de conversie corespunzător 
              sursei de energie pentru a obține energia primară.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'audit',
      title: '4. Procesul de Auditare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">4.1 Cine Poate Emite Certificate?</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              Certificatele energetice pot fi emise doar de <strong>auditori energetici 
              atestați</strong> de Ministerul Dezvoltării (MDLPA).
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Cerințe atestare:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Studii superioare tehnice</li>
                  <li>• Curs autorizat (80-120 ore)</li>
                  <li>• Examen la MDLPA</li>
                  <li>• Specializare pe tip clădire</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">Grade de atestare:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• <strong>Gradul I:</strong> Locuințe individuale</li>
                  <li>• <strong>Gradul IIa:</strong> Blocuri locuințe</li>
                  <li>• <strong>Gradul IIb:</strong> Clădiri publice</li>
                  <li>• <strong>Gradul III:</strong> Industrial, complex</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">4.2 Etapele Auditului</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ol className="text-gray-300 text-sm space-y-3">
              <li className="flex items-start gap-3">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                <div>
                  <strong>Colectare documente:</strong>
                  <p className="text-gray-400 text-xs mt-1">Planuri, relevee, acte proprietate, facturi energie</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                <div>
                  <strong>Inspecție la fața locului:</strong>
                  <p className="text-gray-400 text-xs mt-1">Măsurători, verificare anvelopă, instalații, fotografii</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                <div>
                  <strong>Calcul conform MC001:</strong>
                  <p className="text-gray-400 text-xs mt-1">Introducere date în software, calcul indici</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">4</span>
                <div>
                  <strong>Elaborare recomandări:</strong>
                  <p className="text-gray-400 text-xs mt-1">Măsuri de îmbunătățire, analiză cost-beneficiu</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-teal-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0">5</span>
                <div>
                  <strong>Emitere certificat:</strong>
                  <p className="text-gray-400 text-xs mt-1">Înregistrare în sistemul național, semnătură</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">4.3 Date Necesare pentru Audit</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Documente clădire:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Planuri arhitectură (sau releveu)</li>
                  <li>• Secțiuni și fațade</li>
                  <li>• Extras carte funciară</li>
                  <li>• Anul construcției</li>
                  <li>• Intervenții/renovări anterioare</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Date instalații:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Tip și putere centrală termică</li>
                  <li>• Sistem de distribuție încălzire</li>
                  <li>• Tip ferestre (geam, profil)</li>
                  <li>• Sistem ventilare</li>
                  <li>• Sistem preparare ACM</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">4.4 Costuri Orientative</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Tip clădire</th>
                  <th className="p-3 text-center">Cost orientativ</th>
                  <th className="p-3 text-left">Observații</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Apartament</td>
                  <td className="p-3 text-center">150-300 RON</td>
                  <td className="p-3">Funcție de suprafață</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Casă individuală</td>
                  <td className="p-3 text-center">300-600 RON</td>
                  <td className="p-3">Funcție de complexitate</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Bloc locuințe</td>
                  <td className="p-3 text-center">1.000-5.000 RON</td>
                  <td className="p-3">Funcție de număr apartamente</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Clădire birouri</td>
                  <td className="p-3 text-center">2.000-10.000 RON</td>
                  <td className="p-3">Funcție de suprafață și instalații</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: 'continut',
      title: '5. Conținutul Certificatului',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">5.1 Structura Certificatului</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              Certificatul de performanță energetică conține următoarele secțiuni principale:
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">📍</span>
                <span><strong>Identificare clădire:</strong> Adresă, destinație, an construcție, suprafață</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">📊</span>
                <span><strong>Clasa energetică:</strong> Scala grafică A+ la G</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">⚡</span>
                <span><strong>Indicatori energetici:</strong> Energie primară, emisii CO₂</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">🔥</span>
                <span><strong>Defalcare consumuri:</strong> Încălzire, răcire, ACM, iluminat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">📝</span>
                <span><strong>Descriere tehnică:</strong> Anvelopă, instalații</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">💡</span>
                <span><strong>Recomandări:</strong> Măsuri de îmbunătățire</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">5.2 Pagina 1 - Sinteza</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="bg-gray-900 p-4 rounded-lg border-2 border-gray-600">
              <div className="text-center mb-4">
                <h4 className="text-lg font-bold text-white">CERTIFICAT DE PERFORMANȚĂ ENERGETICĂ</h4>
                <p className="text-gray-400 text-sm">pentru clădiri existente</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Adresa clădirii:</p>
                  <p className="text-white text-sm">Str. Exemplu nr. 10, București</p>
                  
                  <p className="text-gray-400 text-xs mb-1 mt-3">Destinație:</p>
                  <p className="text-white text-sm">Locuință individuală</p>
                  
                  <p className="text-gray-400 text-xs mb-1 mt-3">Suprafață utilă:</p>
                  <p className="text-white text-sm">150 m²</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 bg-lime-500 rounded-lg flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">B</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-2">Clasa energetică</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-xs">Energie primară</p>
                    <p className="text-2xl font-bold text-teal-400">142</p>
                    <p className="text-gray-400 text-xs">kWh/m²·an</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Emisii CO₂</p>
                    <p className="text-2xl font-bold text-green-400">28</p>
                    <p className="text-gray-400 text-xs">kg/m²·an</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">5.3 Defalcarea Consumurilor</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-white mb-3">Consumuri anuale estimate:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-32 text-gray-300 text-sm">Încălzire</div>
                <div className="flex-1 bg-gray-700 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="w-20 text-right text-gray-300 text-sm">85 kWh/m²</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 text-gray-300 text-sm">Apă caldă</div>
                <div className="flex-1 bg-gray-700 rounded-full h-4">
                  <div className="bg-orange-500 h-4 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <div className="w-20 text-right text-gray-300 text-sm">35 kWh/m²</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 text-gray-300 text-sm">Iluminat</div>
                <div className="flex-1 bg-gray-700 rounded-full h-4">
                  <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <div className="w-20 text-right text-gray-300 text-sm">15 kWh/m²</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-32 text-gray-300 text-sm">Auxiliare</div>
                <div className="flex-1 bg-gray-700 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full" style={{ width: '5%' }}></div>
                </div>
                <div className="w-20 text-right text-gray-300 text-sm">7 kWh/m²</div>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">5.4 Comparație cu Referința</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              Certificatul compară clădirea cu valorile de referință pentru:
            </p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <strong>Clădire de referință:</strong> Aceeași geometrie, dar cu valori U conform C107</li>
              <li>• <strong>Clădire nZEB:</strong> Cerințe minime pentru clădiri noi</li>
              <li>• <strong>Media națională:</strong> Pentru clădiri similare</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'recomandari',
      title: '6. Recomandări de Îmbunătățire',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">6.1 Categorii de Măsuri</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-400 mb-2">Anvelopă (izolație)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Termoizolarea pereților exteriori (ETICS)</li>
                <li>• Termoizolarea acoperișului/podului</li>
                <li>• Termoizolarea planșeului peste subsol</li>
                <li>• Înlocuirea ferestrelor și ușilor</li>
                <li>• Eliminarea punților termice</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-400 mb-2">Sistem de încălzire</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Înlocuirea centralei termice vechi</li>
                <li>• Montare centrală în condensare</li>
                <li>• Instalare pompă de căldură</li>
                <li>• Izolarea conductelor de distribuție</li>
                <li>• Montare robineți termostatici</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-400 mb-2">Apă caldă menajeră</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Panouri solare termice</li>
                <li>• Boiler cu pompă de căldură</li>
                <li>• Izolare rezervor și conducte</li>
                <li>• Baterii cu economizor de apă</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-400 mb-2">Ventilare și climatizare</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Ventilare mecanică cu recuperare (MVHR)</li>
                <li>• Umbrire solară exterioară</li>
                <li>• Free cooling nocturn</li>
                <li>• Climatizare cu inverter</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Energie regenerabilă</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Panouri fotovoltaice</li>
                <li>• Panouri solare termice</li>
                <li>• Pompe de căldură</li>
                <li>• Stocare energie (baterii)</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">6.2 Analiza Cost-Beneficiu</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Măsură</th>
                  <th className="p-3 text-center">Economie</th>
                  <th className="p-3 text-center">Cost</th>
                  <th className="p-3 text-center">Amortizare</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3">Izolare pereți 15cm</td>
                  <td className="p-3 text-center text-green-400">25-35%</td>
                  <td className="p-3 text-center">50-80 €/m²</td>
                  <td className="p-3 text-center">8-12 ani</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Ferestre tripan</td>
                  <td className="p-3 text-center text-green-400">10-15%</td>
                  <td className="p-3 text-center">250-400 €/m²</td>
                  <td className="p-3 text-center">15-20 ani</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">Centrală condensare</td>
                  <td className="p-3 text-center text-green-400">15-25%</td>
                  <td className="p-3 text-center">2.000-4.000 €</td>
                  <td className="p-3 text-center">5-8 ani</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Pompă căldură aer-apă</td>
                  <td className="p-3 text-center text-green-400">40-60%</td>
                  <td className="p-3 text-center">8.000-15.000 €</td>
                  <td className="p-3 text-center">8-12 ani</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3">MVHR</td>
                  <td className="p-3 text-center text-green-400">15-25%</td>
                  <td className="p-3 text-center">4.000-8.000 €</td>
                  <td className="p-3 text-center">10-15 ani</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3">Panouri PV 5kWp</td>
                  <td className="p-3 text-center text-green-400">50-70% electric</td>
                  <td className="p-3 text-center">5.000-8.000 €</td>
                  <td className="p-3 text-center">6-10 ani</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">6.3 Pachete de Măsuri</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-400 mb-2">Pachet Minim</h4>
              <p className="text-gray-400 text-xs mb-2">Cost: 5.000-10.000€</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Izolare pod 20cm</li>
                <li>• Etanșare ferestre</li>
                <li>• Robineți termostatici</li>
                <li>• LED-uri</li>
              </ul>
              <p className="text-green-400 text-xs mt-2">Economie: 15-25%</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-400 mb-2">Pachet Mediu</h4>
              <p className="text-gray-400 text-xs mb-2">Cost: 20.000-40.000€</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• + ETICS pereți</li>
                <li>• + Ferestre noi</li>
                <li>• + Centrală condensare</li>
                <li>• + Izolare conducte</li>
              </ul>
              <p className="text-green-400 text-xs mt-2">Economie: 40-60%</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">Pachet nZEB</h4>
              <p className="text-gray-400 text-xs mb-2">Cost: 50.000-80.000€</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• + Pompă căldură</li>
                <li>• + MVHR</li>
                <li>• + Panouri PV</li>
                <li>• + Smart home</li>
              </ul>
              <p className="text-green-400 text-xs mt-2">Economie: 70-90%</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'finantare',
      title: '7. Programe de Finanțare',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">7.1 Casa Verde Plus (AFM)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-400 mb-2">Finanțare nerambursabilă persoane fizice:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-yellow-400">Panouri fotovoltaice:</strong>
                <span> până la 20.000 lei</span>
              </li>
              <li>
                <strong className="text-yellow-400">Panouri solare termice:</strong>
                <span> până la 6.000 lei</span>
              </li>
              <li>
                <strong className="text-yellow-400">Pompe de căldură:</strong>
                <span> până la 15.000 lei</span>
              </li>
              <li>
                <strong className="text-yellow-400">Stații încărcare EV:</strong>
                <span> până la 10.000 lei</span>
              </li>
            </ul>
            <p className="text-gray-400 text-xs mt-3">
              ⚠️ Programul se deschide periodic, consultați site-ul AFM pentru sesiuni active.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">7.2 PNRR - Renovare Energetică</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-400 mb-2">Componenta 5 - Valul Renovării:</h4>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong>Blocuri de locuințe:</strong>
                <span className="text-gray-400"> Finanțare până la 100% pentru renovare energetică</span>
              </li>
              <li>
                <strong>Clădiri publice:</strong>
                <span className="text-gray-400"> Finanțare pentru autorități locale/centrale</span>
              </li>
              <li>
                <strong>Cerință:</strong>
                <span className="text-gray-400"> Reducere consum primar cu min. 30%</span>
              </li>
            </ul>
            <div className="bg-blue-900/30 p-3 rounded mt-3">
              <p className="text-blue-300 text-sm">
                Pentru blocuri: asociațiile de proprietari aplică prin primării.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">7.3 Programul Regional (REGIO)</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li>
                <strong className="text-cyan-400">Beneficiari:</strong>
                <span> Autorități publice locale, instituții</span>
              </li>
              <li>
                <strong className="text-cyan-400">Obiectiv:</strong>
                <span> Eficiență energetică clădiri publice</span>
              </li>
              <li>
                <strong className="text-cyan-400">Intensitate:</strong>
                <span> Până la 98% (cofinanțare 2%)</span>
              </li>
              <li>
                <strong className="text-cyan-400">Activități:</strong>
                <span> Izolație, instalații, energie regenerabilă</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">7.4 Credite Bancare "Verzi"</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-gray-300 text-sm mb-3">
              Mai multe bănci oferă credite cu condiții preferențiale pentru renovări energetice:
            </p>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• <strong>Credite "verzi"</strong> cu dobândă redusă</li>
              <li>• <strong>Ecofinanțare</strong> pentru case pasive</li>
              <li>• <strong>Credite ipotecare</strong> cu bonus pentru clădiri eficiente</li>
              <li>• <strong>Leasing</strong> pentru echipamente (PV, pompe căldură)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">7.5 Facilități Fiscale</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Facilitate</th>
                  <th className="p-3 text-left">Descriere</th>
                  <th className="p-3 text-left">Beneficiari</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-green-400">Scutire impozit clădire</td>
                  <td className="p-3">50-100% pentru clădiri renovate energetic</td>
                  <td className="p-3">Persoane fizice (în anumite UAT-uri)</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-green-400">TVA redus 5%</td>
                  <td className="p-3">Pentru locuințe sociale eficiente</td>
                  <td className="p-3">Dezvoltatori, constructori</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-green-400">Deduceri fiscale</td>
                  <td className="p-3">Pentru investiții în energie regenerabilă</td>
                  <td className="p-3">Companii (persoane juridice)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-teal-900/30 p-4 rounded-lg border border-teal-600 mt-4">
            <h4 className="font-semibold text-teal-400 mb-2">💡 Sfat important:</h4>
            <p className="text-gray-300 text-sm">
              Înainte de a aplica la orice program de finanțare, obțineți <strong>certificatul 
              energetic</strong> și <strong>auditul energetic</strong> - sunt obligatorii pentru 
              majoritatea programelor și vă ajută să identificați măsurile cele mai eficiente.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'software',
      title: '8. Software și Instrumente',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-400">8.1 Software Certificare România</h3>
          
          <div className="space-y-3">
            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-400 mb-2">Mc001 Software (oficial)</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Dezvoltat conform metodologiei MC001</li>
                <li>• Gratuit pentru auditori atestați</li>
                <li>• Generează certificat în format standard</li>
                <li>• Actualizat periodic de MDLPA</li>
              </ul>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-400 mb-2">Software privat autorizat</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• <strong>DOSET:</strong> Interfață intuitivă, baze de date integrate</li>
                <li>• <strong>EnergoCert:</strong> Calcul rapid, rapoarte detaliate</li>
                <li>• <strong>CertEnerg:</strong> Module suplimentare pentru audit</li>
                <li>• Necesită validare MC001</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">8.2 Software Internațional</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">PHPP (Passivhaus):</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Standard pentru certificare Passivhaus</li>
                  <li>• Calcul detaliat balanță energetică</li>
                  <li>• Baze de date componente certificate</li>
                  <li>• Licență: ~200-400€</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">DesignBuilder / EnergyPlus:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Simulare dinamică avansată</li>
                  <li>• Modelare 3D completă</li>
                  <li>• Analiză confort și supraîncălzire</li>
                  <li>• Pentru proiecte complexe</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">8.3 Instrumente de Măsurare</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-300">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-left">Instrument</th>
                  <th className="p-3 text-left">Utilizare</th>
                  <th className="p-3 text-center">Preț orientativ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Cameră termografică</td>
                  <td className="p-3">Detectare punți termice, infiltrații</td>
                  <td className="p-3 text-center">500-5.000€</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Blower Door</td>
                  <td className="p-3">Test etanșeitate n₅₀</td>
                  <td className="p-3 text-center">3.000-8.000€</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Data logger</td>
                  <td className="p-3">Înregistrare T, RH în timp</td>
                  <td className="p-3 text-center">50-300€</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Analizor gaze ardere</td>
                  <td className="p-3">Verificare eficiență cazan</td>
                  <td className="p-3 text-center">500-2.000€</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="p-3 font-semibold text-cyan-400">Telemetru laser</td>
                  <td className="p-3">Măsurare distanțe, suprafețe</td>
                  <td className="p-3 text-center">50-200€</td>
                </tr>
                <tr className="bg-gray-800/50">
                  <td className="p-3 font-semibold text-cyan-400">Luxmetru</td>
                  <td className="p-3">Măsurare nivel iluminare</td>
                  <td className="p-3 text-center">30-150€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">8.4 Baze de Date și Resurse</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-teal-400">🔗</span>
                <span><strong>passivehouse-database.org</strong> - Clădiri și componente certificate PHI</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">🔗</span>
                <span><strong>u-wert.net</strong> - Calculator online U pentru straturi</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">🔗</span>
                <span><strong>epbd.de</strong> - Baze de date materiale și coeficienți</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">🔗</span>
                <span><strong>buildingphysics.com</strong> - Calcule condensare, diagrame Glaser</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-teal-400">🔗</span>
                <span><strong>MDLPA - Lista auditori</strong> - Registrul auditorilor atestați</span>
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-teal-400 mt-6">8.5 Flux de Lucru Recomandat</h3>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <ol className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">1.</span>
                <span><strong>Colectare date:</strong> Planuri, măsurători, fotografii</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">2.</span>
                <span><strong>Calcul U:</strong> u-wert.net sau manual pentru fiecare element</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">3.</span>
                <span><strong>Introducere în MC001:</strong> Geometrie, instalații, climat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">4.</span>
                <span><strong>Verificare rezultate:</strong> Comparare cu facturi reale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">5.</span>
                <span><strong>Elaborare recomandări:</strong> Simulare variante îmbunătățire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400 font-bold">6.</span>
                <span><strong>Emitere certificat:</strong> Generare, semnare, înregistrare</span>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-600 mt-4">
            <h4 className="font-semibold text-yellow-400 mb-2">⚠️ Atenție la calitate!</h4>
            <p className="text-gray-300 text-sm">
              Un certificat energetic de calitate necesită timp și atenție la detalii. 
              Certificatele "la comandă" fără inspecție reală sau cu date estimate grosier 
              nu reflectă performanța reală și nu oferă recomandări utile.
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
            <label htmlFor="search-certificare" className="sr-only">
              Caută în ghid
            </label>
            <input
              id="search-certificare"
              type="text"
              placeholder="Caută în ghid..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Caută în ghidul de certificare energetică"
            />
          </div>
          <nav aria-label="Secțiuni ghid certificare energetică">
            <ul className="space-y-1">
              {filteredSections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-teal-600 text-white'
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
              <h2 className="text-2xl font-bold text-teal-400 mb-6">
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