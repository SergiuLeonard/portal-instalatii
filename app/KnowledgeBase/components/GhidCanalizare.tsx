"use client";

import { useState } from "react";

interface Sectiune {
  id: string;
  titlu: string;
  continut: React.ReactNode;
}

export default function GhidCanalizare() {
  const [sectiuneActiva, setSectiuneActiva] = useState<string>("intro");

  const sectiuni: Sectiune[] = [
    {
      id: "intro",
      titlu: "1. Principii de Proiectare",
      continut: (
        <div className="space-y-4">
          <p>
            Instalațiile de canalizare asigură colectarea și evacuarea apelor uzate menajere și a apelor 
            meteorice din clădiri către rețeaua publică de canalizare sau sisteme individuale de epurare.
          </p>
          
          <h4 className="font-semibold text-orange-400 mt-4">Principii fundamentale:</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Evacuarea gravitațională - fără ajutor mecanic</li>
            <li>Etanșeitatea la gaze și lichide</li>
            <li>Ventilarea corespunzătoare pentru echilibrarea presiunilor</li>
            <li>Accesibilitatea pentru curățire și întreținere</li>
            <li>Protecția fonică - izolare la zgomot</li>
          </ul>

          <h4 className="font-semibold text-orange-400 mt-4">Terminologie:</h4>
          <dl className="space-y-2 ml-4">
            <div>
              <dt className="font-medium text-white">Sifon</dt>
              <dd className="text-gray-400 ml-4">Dispozitiv cu gardă hidraulică care împiedică pătrunderea gazelor din canalizare</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Coloană de canalizare</dt>
              <dd className="text-gray-400 ml-4">Conductă verticală care colectează apele uzate de pe nivele</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Colector</dt>
              <dd className="text-gray-400 ml-4">Conductă orizontală care transportă apele către exterior</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Gardă hidraulică</dt>
              <dd className="text-gray-400 ml-4">Înălțimea coloanei de apă din sifon (min. 50mm)</dd>
            </div>
          </dl>
        </div>
      ),
    },
    {
      id: "sisteme",
      titlu: "2. Tipuri de Sisteme",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">2.1 Sistem unitar</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 ml-4">
            <p className="text-gray-300">Apele uzate menajere și apele meteorice sunt evacuate prin aceeași rețea.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-400 text-sm">
              <li>Avantaj: cost redus de execuție</li>
              <li>Dezavantaj: supraîncărcarea rețelei în timpul ploilor</li>
              <li>Utilizare: zone urbane vechi</li>
            </ul>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">2.2 Sistem separativ</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 ml-4">
            <p className="text-gray-300">Rețele separate pentru ape uzate menajere și ape meteorice.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-400 text-sm">
              <li>Avantaj: dimensionare optimă, posibilitate de reutilizare ape pluviale</li>
              <li>Dezavantaj: cost mai ridicat</li>
              <li>Utilizare: construcții noi, obligatoriu în multe localități</li>
            </ul>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">2.3 Sistem mixt</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 ml-4">
            <p className="text-gray-300">Combinație între cele două sisteme în funcție de condițiile locale.</p>
          </div>

          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 mt-4">
            <p className="text-amber-400 text-sm">
              <strong>⚠️ Important:</strong> Verificați cerințele operatorului local de canalizare 
              înainte de proiectare. Multe localități impun sistem separativ pentru construcții noi.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "obiecte",
      titlu: "3. Obiecte Sanitare și Racorduri",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">3.1 Diametre racorduri</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Obiect sanitar</th>
                  <th className="text-center py-2 text-gray-400">Dn racord [mm]</th>
                  <th className="text-center py-2 text-gray-400">Es</th>
                  <th className="text-center py-2 text-gray-400">qs max [l/s]</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Lavoar</td>
                  <td className="text-center">40</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.5</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Bideu</td>
                  <td className="text-center">40</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.5</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Cada de baie</td>
                  <td className="text-center">50</td>
                  <td className="text-center">0.5</td>
                  <td className="text-center">0.8</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Duș</td>
                  <td className="text-center">50</td>
                  <td className="text-center">0.5</td>
                  <td className="text-center">0.4</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">WC cu rezervor</td>
                  <td className="text-center">110</td>
                  <td className="text-center">2.5</td>
                  <td className="text-center">1.8</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Spălător bucătărie</td>
                  <td className="text-center">50</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.5</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Mașină de spălat rufe</td>
                  <td className="text-center">50</td>
                  <td className="text-center">0.5</td>
                  <td className="text-center">0.8</td>
                </tr>
                <tr>
                  <td className="py-2">Mașină de spălat vase</td>
                  <td className="text-center">50</td>
                  <td className="text-center">0.33</td>
                  <td className="text-center">0.5</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">3.2 Sifoane</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Sifon de lavoar/bideu:</strong> sifon tip sticlă sau tubular, Dn 32-40</li>
            <li><strong>Sifon de pardoseală:</strong> pentru băi, bucătării - cu grătar inox</li>
            <li><strong>Sifon de cadă/duș:</strong> îngropat în planșeu, h redusă (50-90mm)</li>
            <li><strong>Gardă hidraulică minimă:</strong> 50 mm</li>
            <li><strong>Sifon WC:</strong> încorporat în vasul WC</li>
          </ul>
        </div>
      ),
    },
    {
      id: "coloane",
      titlu: "4. Coloane de Canalizare",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">4.1 Amplasare și traseu</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Se amplasează în ghene ventilate sau aparent (la cerere)</li>
            <li>Distanța maximă de la obiectele sanitare: 3m</li>
            <li>Se evită schimbările de direcție (max 45°)</li>
            <li>Coloana continuă până deasupra acoperișului (ventilare)</li>
          </ul>

          <h4 className="font-semibold text-orange-400 mt-4">4.2 Dimensionare coloane</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Diametru coloană</th>
                  <th className="text-center py-2 text-gray-400">Debit maxim [l/s]</th>
                  <th className="text-left py-2 text-gray-400">Utilizare tipică</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 50</td>
                  <td className="text-center">0.5</td>
                  <td>Lavoar individual</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 75</td>
                  <td className="text-center">1.5</td>
                  <td>Obiecte fără WC</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 110</td>
                  <td className="text-center">4.0</td>
                  <td>Standard cu WC</td>
                </tr>
                <tr>
                  <td className="py-2">Dn 125</td>
                  <td className="text-center">5.8</td>
                  <td>Clădiri mari</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">4.3 Reguli de racordare</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>WC-ul se racordează direct la coloană (nu prin conducte orizontale lungi)</li>
            <li>Unghiul de racordare la coloană: max 45° (ramificație oblică)</li>
            <li>Nu se racordează mai multe obiecte la același nivel în același punct</li>
            <li>Conductele orizontale: pantă min. 2% pentru Dn≤75, 1.5% pentru Dn≥110</li>
          </ul>

          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mt-4">
            <p className="text-red-400 text-sm">
              <strong>⚠️ Evitați:</strong> Racordarea obiectelor sanitare în dreptul schimbărilor 
              de direcție ale coloanei (zone cu turbulențe și risc de sifonare).
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "colectoare",
      titlu: "5. Colectoare Orizontale",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">5.1 Amplasare</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>În subsolul clădirii, sub planșeul peste subsol</li>
            <li>Îngropate în sol (sub pardoseala subsolului)</li>
            <li>Suspendate de planșeu (acces mai ușor pentru reparații)</li>
          </ul>

          <h4 className="font-semibold text-orange-400 mt-4">5.2 Pante de montaj</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Diametru</th>
                  <th className="text-center py-2 text-gray-400">Panta minimă</th>
                  <th className="text-center py-2 text-gray-400">Panta recomandată</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 50-75</td>
                  <td className="text-center">2.0%</td>
                  <td className="text-center">2.5-3.0%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 110</td>
                  <td className="text-center">1.5%</td>
                  <td className="text-center">2.0%</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 125-160</td>
                  <td className="text-center">1.0%</td>
                  <td className="text-center">1.5%</td>
                </tr>
                <tr>
                  <td className="py-2">Dn 200+</td>
                  <td className="text-center">0.5%</td>
                  <td className="text-center">1.0%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">5.3 Schimbări de direcție</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Se realizează cu coturi de 45° (evitați 90°)</li>
            <li>Pentru schimbări de 90°: două coturi de 45° sau cot cu rază mare</li>
            <li>La baza coloanelor: cot de 90° cu rază mare sau două coturi de 45°</li>
          </ul>
        </div>
      ),
    },
    {
      id: "ventilare",
      titlu: "6. Ventilarea Instalației",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">6.1 Scopul ventilării</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Echilibrarea presiunilor în rețea (evitarea sifonării)</li>
            <li>Evacuarea gazelor din canalizare</li>
            <li>Asigurarea curgerii normale a apelor uzate</li>
          </ul>

          <h4 className="font-semibold text-orange-400 mt-4">6.2 Tipuri de ventilare</h4>
          
          <div className="space-y-3 ml-4">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Ventilare primară</h5>
              <p className="text-gray-400 text-sm">Prelungirea coloanei deasupra acoperișului. Obligatorie pentru toate coloanele.</p>
              <ul className="text-gray-400 text-sm mt-1 list-disc ml-4">
                <li>Înălțime min. 50 cm deasupra acoperișului</li>
                <li>Distanță min. 4m de ferestre/balcoane</li>
                <li>Căciulă de ventilare la capăt</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Ventilare secundară</h5>
              <p className="text-gray-400 text-sm">Coloană suplimentară paralelă cu coloana de canalizare, legată la fiecare nivel.</p>
              <ul className="text-gray-400 text-sm mt-1 list-disc ml-4">
                <li>Necesară pentru clădiri înalte (P+4 și mai mult)</li>
                <li>Diametru min. Dn 50-75</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Supape de aerisire (AAV)</h5>
              <p className="text-gray-400 text-sm">Alternativă pentru ventilare secundară în spații fără acces la exterior.</p>
              <ul className="text-gray-400 text-sm mt-1 list-disc ml-4">
                <li>Permite intrarea aerului, blochează ieșirea gazelor</li>
                <li>Nu înlocuiește ventilarea primară!</li>
                <li>Montare în spații ventilate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "calcul",
      titlu: "7. Calculul Hidraulic",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">7.1 Debitul de calcul</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <p className="text-orange-400">qc = qs + qs,max [l/s]</p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <p className="text-orange-400 mt-2">qs = 0.4 × √(ΣEs) + 0.001 [l/s]</p>
            <ul className="text-gray-400 ml-4 mt-2">
              <li>ΣEs = suma echivalenților specifici</li>
              <li>qs,max = debitul maxim al celui mai mare obiect</li>
            </ul>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">7.2 Verificarea colectorului (Manning)</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <p className="text-orange-400">v = (1/n) × R<sup>2/3</sup> × i<sup>1/2</sup> [m/s]</p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <ul className="text-gray-400 ml-4">
              <li>n = 0.012 (coef. rugozitate PVC/PP)</li>
              <li>R = D/4 (raza hidraulică pentru secțiune plină)</li>
              <li>i = panta [m/m]</li>
            </ul>
            <p className="text-green-400 mt-3">Condiție: qc ≤ 0.7 × qsp (grad umplere max. 70%)</p>
            <p className="text-green-400">Viteză: 0.7 m/s ≤ v ≤ 3.0 m/s</p>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">7.3 Exemplu de calcul</h4>
          <div className="bg-gray-800/50 rounded-lg p-4">
            <p className="text-gray-300 text-sm">Pentru un apartament cu: WC, lavoar, cadă, duș, chiuvetă, mașină spălat</p>
            <ul className="text-gray-400 text-sm mt-2 space-y-1">
              <li>ΣEs = 2.5 + 0.33 + 0.5 + 0.5 + 0.33 + 0.5 = 4.66</li>
              <li>qs = 0.4 × √4.66 + 0.001 = 0.864 l/s</li>
              <li>qs,max = 1.8 l/s (WC)</li>
              <li>qc = 0.864 + 1.8 = <strong className="text-orange-400">2.66 l/s</strong></li>
            </ul>
            <p className="text-green-400 text-sm mt-2">→ Coloană Dn 110 (capacitate 4.0 l/s) ✓</p>
          </div>
        </div>
      ),
    },
    {
      id: "materiale",
      titlu: "8. Materiale",
      continut: (
        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-orange-500/30">
              <h4 className="font-semibold text-orange-400 mb-2">PVC-U (cel mai utilizat)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Cost redus, ușor de prelucrat</li>
                <li>✓ Rezistent la coroziune și substanțe chimice</li>
                <li>✓ Îmbinare: cu mufă și garnitură de cauciuc</li>
                <li>✓ Culoare gri (interior) sau portocaliu (exterior)</li>
                <li>⚠ Sensibil la temperaturi ridicate (max. 60°C)</li>
                <li>⚠ Zgomot la curgerea apei</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-500/30">
              <h4 className="font-semibold text-blue-400 mb-2">PP (Polipropilenă) - silențioasă</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Izolare fonică excelentă (triple strat)</li>
                <li>✓ Rezistent la temperaturi mai ridicate (95°C)</li>
                <li>✓ Ideal pentru clădiri rezidențiale de calitate</li>
                <li>✓ Mărci: Geberit Silent-PP, Wavin AS+</li>
                <li>⚠ Cost mai ridicat decât PVC</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-500/30">
              <h4 className="font-semibold text-gray-300 mb-2">Fontă (pentru renovări)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Durabilitate excelentă (50+ ani)</li>
                <li>✓ Izolare fonică foarte bună</li>
                <li>✓ Rezistență la foc</li>
                <li>⚠ Greutate mare, montaj dificil</li>
                <li>⚠ Cost ridicat</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-amber-500/30">
              <h4 className="font-semibold text-amber-400 mb-2">PE-HD (exterior/îngropat)</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Flexibil, rezistent la îngheț</li>
                <li>✓ Îmbinare prin sudură (etanșeitate perfectă)</li>
                <li>✓ Ideal pentru canalizare exterioară</li>
                <li>✓ Culoare neagră</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "curatire",
      titlu: "9. Piese de Curățire",
      continut: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Piesele de curățire asigură accesul pentru desfundare și întreținere.
          </p>

          <h4 className="font-semibold text-orange-400">9.1 Amplasare obligatorie</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>La baza fiecărei coloane</li>
            <li>La schimbările de direcție {'>'} 45°</li>
            <li>Pe colectoare la max. 15m distanță</li>
            <li>Înainte de ieșirea din clădire</li>
            <li>La capătul aval al colectoarelor lungi</li>
          </ul>

          <h4 className="font-semibold text-orange-400 mt-4">9.2 Tipuri de piese</h4>
          <div className="grid gap-3 ml-4">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Piesa de curățire (dop)</h5>
              <p className="text-gray-400 text-sm">Ramificație la 45° cu capac filetat sau cu garnitură. Acces pentru sârma de desfundare.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Sifon de pardoseală cu dop</h5>
              <p className="text-gray-400 text-sm">Acces la conductele orizontale din planșeu.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Cămin de vizitare</h5>
              <p className="text-gray-400 text-sm">Pentru canalizarea exterioară, la schimbări de direcție și pe traseu la max. 30-50m.</p>
            </div>
          </div>

          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 mt-4">
            <p className="text-green-400 text-sm">
              <strong>💡 Recomandare:</strong> Marcați poziția pieselor de curățire pe planurile 
              as-built și informați utilizatorul despre locația lor.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "meteorice",
      titlu: "10. Ape Meteorice",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-orange-400">10.1 Calculul debitului pluvial</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <p className="text-orange-400">qc = 0.0001 × ρ × S × I [l/s]</p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <ul className="text-gray-400 ml-4">
              <li>ρ = coeficient de scurgere (0.5-1.0)</li>
              <li>S = suprafața acoperită [m²]</li>
              <li>I = intensitatea ploii [l/(s·ha)]</li>
            </ul>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">10.2 Coeficienți de scurgere (ρ)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Tip suprafață</th>
                  <th className="text-center py-2 text-gray-400">ρ</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Acoperiș impermeabil</td>
                  <td className="text-center">1.0</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Acoperiș metalic</td>
                  <td className="text-center">0.9</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Terasă cu pietriș</td>
                  <td className="text-center">0.7</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Terasă verde</td>
                  <td className="text-center">0.5</td>
                </tr>
                <tr>
                  <td className="py-2">Curte pavată</td>
                  <td className="text-center">0.8</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-orange-400 mt-4">10.3 Receptoare și coloane pluviale</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>1 receptor la max. 150-200 m² suprafață</li>
            <li>Înălțimea apei la receptor: 15 cm (proiectare)</li>
            <li>Diametru minim coloană: Dn 75-100</li>
            <li>Coloane separate de cele de ape uzate (recomandare)</li>
            <li>Racordare la canalizare prin sifon de curte</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-orange-500/30 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🔄</span> Ghid de Proiectare - Canalizare
        </h2>
        <p className="text-gray-400 mt-1">
          Canalizare interioară, exterioară și evacuare ape meteorice
        </p>
      </div>

      <nav aria-label="Cuprins ghid canalizare">
        <div className="flex flex-wrap gap-2">
          {sectiuni.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSectiuneActiva(s.id)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                sectiuneActiva === s.id
                  ? "bg-orange-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {s.titlu}
            </button>
          ))}
        </div>
      </nav>

      <article className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
        {sectiuni.map((s) => (
          <div
            key={s.id}
            className={sectiuneActiva === s.id ? "block" : "hidden"}
          >
            <h3 className="text-xl font-bold text-orange-400 mb-4">{s.titlu}</h3>
            <div className="text-gray-300 leading-relaxed">
              {s.continut}
            </div>
          </div>
        ))}
      </article>

      <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
        <p className="text-orange-400 font-medium mb-2">🔢 Calculator disponibil:</p>
        <p className="text-gray-400 text-sm">
          Folosește <a href="/calculatoare" className="text-orange-400 hover:underline">Calculatorul pentru Canalizare și Ape Meteorice</a> pentru 
          dimensionarea rapidă conform formulelor din acest ghid.
        </p>
      </div>
    </div>
  );
}
