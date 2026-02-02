"use client";

import { useState } from "react";

interface Sectiune {
  id: string;
  titlu: string;
  continut: React.ReactNode;
}

export default function GhidTermice() {
  const [sectiuneActiva, setSectiuneActiva] = useState<string>("intro");

  const sectiuni: Sectiune[] = [
    {
      id: "intro",
      titlu: "1. Principii de Termotehnică",
      continut: (
        <div className="space-y-4">
          <p>
            Instalațiile de încălzire asigură menținerea temperaturii interioare de confort 
            în sezonul rece prin compensarea pierderilor de căldură ale clădirii.
          </p>

          <h4 className="font-semibold text-red-400 mt-4">Parametri de confort termic:</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Temperatură interioară: 20-22°C (locuințe), 18-20°C (birouri)</li>
            <li>Umiditate relativă: 40-60%</li>
            <li>Viteza aerului: max. 0.2 m/s</li>
            <li>Diferență temperatură pardoseală-cap: max. 3°C</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">Terminologie:</h4>
          <dl className="space-y-2 ml-4">
            <div>
              <dt className="font-medium text-white">Necesarul de căldură (Q)</dt>
              <dd className="text-gray-400 ml-4">Puterea termică necesară pentru compensarea pierderilor [W]</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Agent termic</dt>
              <dd className="text-gray-400 ml-4">Fluidul care transportă căldura (apă caldă, abur)</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Regim termic</dt>
              <dd className="text-gray-400 ml-4">Temperaturile agentului (ex: 80/60°C, 55/45°C)</dd>
            </div>
            <div>
              <dt className="font-medium text-white">Cădere de temperatură (Δt)</dt>
              <dd className="text-gray-400 ml-4">Diferența între tur și retur</dd>
            </div>
          </dl>
        </div>
      ),
    },
    {
      id: "calcul",
      titlu: "2. Calculul Necesarului de Căldură",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">2.1 Pierderi prin transmisie (QT)</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <p className="text-red-400">Q<sub>T</sub> = Σ(A × U × Δt) [W]</p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <ul className="text-gray-400 ml-4">
              <li>A = aria elementului [m²]</li>
              <li>U = coeficientul de transfer termic [W/(m²·K)]</li>
              <li>Δt = diferența de temperatură interior-exterior [K]</li>
            </ul>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">2.2 Coeficienți U de referință (conform C107)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Element</th>
                  <th className="text-center py-2 text-gray-400">U max [W/(m²·K)]</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Pereți exteriori</td>
                  <td className="text-center">0.56</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Planșeu peste subsol</td>
                  <td className="text-center">0.50</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Terasă / Acoperiș</td>
                  <td className="text-center">0.35</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Ferestre</td>
                  <td className="text-center">1.30</td>
                </tr>
                <tr>
                  <td className="py-2">Uși exterioare</td>
                  <td className="text-center">1.80</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">2.3 Pierderi prin ventilare (QV)</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <p className="text-red-400">Q<sub>V</sub> = 0.34 × n × V × Δt [W]</p>
            <p className="text-gray-400 mt-2">Unde:</p>
            <ul className="text-gray-400 ml-4">
              <li>n = rata de ventilare [schimburi/h] (0.5 pentru locuințe)</li>
              <li>V = volumul încăperii [m³]</li>
            </ul>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">2.4 Necesarul total</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <p className="text-red-400">Q = Q<sub>T</sub> + Q<sub>V</sub> [W]</p>
            <p className="text-green-400 mt-2">Metodologie completă: MC001-2022</p>
          </div>
        </div>
      ),
    },
    {
      id: "corpuri",
      titlu: "3. Corpuri de Încălzire",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">3.1 Tipuri de radiatoare</h4>
          
          <div className="grid gap-3">
            <div className="bg-gray-800/50 rounded-lg p-4 border border-red-500/30">
              <h5 className="text-red-400 font-medium">Radiatoare din oțel (panou)</h5>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>✓ Cel mai utilizat tip în locuințe</li>
                <li>✓ Inerție termică redusă - răspuns rapid</li>
                <li>✓ Tipuri: 11, 21, 22, 33 (nr. panouri și convectoare)</li>
                <li>✓ Presiune de lucru: 10 bar</li>
                <li>⚠ Sensibil la coroziune - necesită tratare apă</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-amber-500/30">
              <h5 className="text-amber-400 font-medium">Radiatoare din aluminiu</h5>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>✓ Putere termică mare pe element</li>
                <li>✓ Greutate redusă</li>
                <li>✓ Design modern</li>
                <li>⚠ Sensibil la pH-ul apei (necesar pH 7-8)</li>
                <li>⚠ Incompatibil cu conducte de cupru (coroziune galvanică)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-500/30">
              <h5 className="text-gray-300 font-medium">Radiatoare din fontă</h5>
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                <li>✓ Durabilitate excelentă</li>
                <li>✓ Inerție termică mare - căldură uniformă</li>
                <li>✓ Rezistent la coroziune</li>
                <li>⚠ Greutate mare, încălzire lentă</li>
                <li>⚠ Folosit mai ales la renovări/retro</li>
              </ul>
            </div>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">3.2 Convectoare</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>De pardoseală:</strong> ideale sub ferestre înalte, în fața pereților cortină</li>
            <li><strong>De perete:</strong> pentru spații cu înălțime mare</li>
            <li><strong>Cu ventilator:</strong> putere mare în dimensiuni reduse</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">3.3 Amplasare corpuri încălzire</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Preferabil sub ferestre (compensează curenții reci)</li>
            <li>Distanța de pardoseală: 10-15 cm</li>
            <li>Distanța de perete: 3-5 cm</li>
            <li>Distanța de pervaz: min. 10 cm</li>
          </ul>
        </div>
      ),
    },
    {
      id: "pardoseala",
      titlu: "4. Încălzire în Pardoseală",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">4.1 Avantaje și limitări</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
              <h5 className="text-green-400 font-medium mb-2">Avantaje:</h5>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>✓ Confort termic superior</li>
                <li>✓ Temperatură uniformă în încăpere</li>
                <li>✓ Funcționează la temperaturi joase (35-45°C)</li>
                <li>✓ Ideal cu pompe de căldură</li>
                <li>✓ Fără corpuri vizibile</li>
              </ul>
            </div>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
              <h5 className="text-red-400 font-medium mb-2">Limitări:</h5>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>⚠ Inerție termică mare</li>
                <li>⚠ Nu pentru toate tipurile de pardoseală</li>
                <li>⚠ Cost inițial mai ridicat</li>
                <li>⚠ Reparații dificile</li>
                <li>⚠ Limitare putere: ~100 W/m²</li>
              </ul>
            </div>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">4.2 Straturi constructive</h4>
          <ol className="list-decimal ml-6 space-y-1 text-gray-300">
            <li>Planșeu de beton</li>
            <li>Barieră de vapori (folie PE)</li>
            <li>Izolație termică (polistiren 30-50mm)</li>
            <li>Folie cu nuturi sau plăci sistem</li>
            <li>Țeavă de încălzire (PE-X, PE-RT)</li>
            <li>Șapă (min. 45mm deasupra țevii)</li>
            <li>Pardoseală finită</li>
          </ol>

          <h4 className="font-semibold text-red-400 mt-4">4.3 Parametri de proiectare</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Parametru</th>
                  <th className="text-center py-2 text-gray-400">Valoare</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Temperatura max. pardoseală</td>
                  <td className="text-center">29°C (zone ocupate), 35°C (periferie)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Temperatura agent</td>
                  <td className="text-center">35-45°C</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Pas țeavă</td>
                  <td className="text-center">10-30 cm</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Diametru țeavă</td>
                  <td className="text-center">16-20 mm</td>
                </tr>
                <tr>
                  <td className="py-2">Lungime max. circuit</td>
                  <td className="text-center">100-120 m</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">4.4 Tipuri de montaj</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Spirală (melc):</strong> distribuție uniformă a temperaturii</li>
            <li><strong>Șarpe (meandru):</strong> zonă caldă la intrare, mai rece spre ieșire</li>
            <li><strong>Dublu șarpe:</strong> distribuție mai uniformă decât șarpele simplu</li>
          </ul>
        </div>
      ),
    },
    {
      id: "distributie",
      titlu: "5. Sisteme de Distribuție",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">5.1 Sistem bitubular</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 ml-4">
            <p className="text-gray-300">Două conducte separate: tur și retur.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-400 text-sm">
              <li>Fiecare corp primește agent la temperatura nominală</li>
              <li>Reglaj individual al fiecărui corp</li>
              <li>Cel mai utilizat sistem</li>
            </ul>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">5.2 Sistem monotubular</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 ml-4">
            <p className="text-gray-300">O singură conductă în buclă, corpurile în serie.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-400 text-sm">
              <li>Avantaj: consum redus de material</li>
              <li>Dezavantaj: ultimul corp primește agent mai rece</li>
              <li>Necesită supradimensionarea ultimelor corpuri</li>
            </ul>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">5.3 Sistem radial (cu colectoare)</h4>
          <div className="bg-gray-800/50 rounded-lg p-4 ml-4">
            <p className="text-gray-300">Fiecare corp alimentat individual de la un colector.</p>
            <ul className="list-disc ml-6 mt-2 text-gray-400 text-sm">
              <li>Avantaj: echilibrare ușoară, conducte îngropate în șapă</li>
              <li>Ideal pentru încălzire în pardoseală</li>
              <li>Conducte flexibile PE-X sau PE-RT</li>
              <li>Colector cu debitmetru și robinet reglaj</li>
            </ul>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">5.4 Echilibrare hidraulică</h4>
          <p className="text-gray-300">Asigură distribuția corectă a debitelor către toate corpurile.</p>
          <ul className="list-disc ml-6 space-y-1 text-gray-300 mt-2">
            <li>Robinete de echilibrare pe coloane/ramuri</li>
            <li>Robinete termostatice pe corpuri</li>
            <li>Calcul: ΔP disponibil = ΔP necesar + ΔP reglaj</li>
            <li>Software: IMI Hydronic, Caleffi, Danfoss</li>
          </ul>
        </div>
      ),
    },
    {
      id: "centrale",
      titlu: "6. Centrale Termice",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">6.1 Cazane murale pe gaz</h4>
          <div className="grid gap-3">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Convenționale</h5>
              <p className="text-gray-400 text-sm">Randament ~92%. Coș tradițional. Regim 80/60°C.</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Cu condensare</h5>
              <p className="text-gray-400 text-sm">Randament 98-109%. Recuperează căldura din gazele de ardere. Regim 55/45°C optim. Evacuare prin perete.</p>
            </div>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">6.2 Cazane pe combustibil solid</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Lemne:</strong> încărcare manuală, autonomie 4-8h</li>
            <li><strong>Peleți:</strong> automatizat, siloz + șnec alimentare</li>
            <li><strong>Gazeificare:</strong> randament ridicat, ardere completă</li>
            <li>Necesită: vas tampon, supapă siguranță termică</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">6.3 Pompe de căldură</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Tip</th>
                  <th className="text-center py-2 text-gray-400">COP</th>
                  <th className="text-left py-2 text-gray-400">Caracteristici</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Aer-Apă</td>
                  <td className="text-center">3.0-4.5</td>
                  <td>Cel mai accesibil, eficiență scade la frig</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Sol-Apă</td>
                  <td className="text-center">4.0-5.0</td>
                  <td>Eficiență constantă, necesită foraje/colector</td>
                </tr>
                <tr>
                  <td className="py-2">Apă-Apă</td>
                  <td className="text-center">5.0-6.0</td>
                  <td>Cea mai eficientă, necesită sursă de apă</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">6.4 Evacuare gaze de ardere</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Tip B:</strong> aer din încăpere, coș vertical</li>
            <li><strong>Tip C:</strong> etanș, kit coaxial prin perete sau acoperiș</li>
            <li>Material: inox sau aluminiu pentru condensare</li>
            <li>Panta: min. 3% spre cazan (pentru condens)</li>
          </ul>
        </div>
      ),
    },
    {
      id: "solare",
      titlu: "7. Panouri Solare Termice",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">7.1 Tipuri de panouri</h4>
          <div className="grid gap-3">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Panouri plane</h5>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li>Randament: 70-80% (la ΔT mic)</li>
                <li>Cost mai redus</li>
                <li>Ideale pentru preparare ACM</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <h5 className="text-white font-medium">Tuburi vidate</h5>
              <ul className="text-gray-400 text-sm mt-1 space-y-1">
                <li>Randament superior la temperaturi ridicate</li>
                <li>Funcționează bine iarna</li>
                <li>Cost mai ridicat</li>
              </ul>
            </div>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">7.2 Dimensionare orientativă</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>1.0-1.5 m² panou / persoană pentru ACM</li>
            <li>Volum boiler: 50-80 litri / m² panou</li>
            <li>Acoperire solară: 50-70% din necesarul anual ACM</li>
            <li>Orientare: Sud ± 30°, înclinare 30-45°</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">7.3 Schema hidraulică</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Circuit primar: panouri - schimbător de căldură (glicol)</li>
            <li>Circuit secundar: boiler bivalent</li>
            <li>Grupul solar: pompă, vas expansiune, supapă siguranță</li>
            <li>Automatizare: regulator diferențial de temperatură</li>
          </ul>

          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3 mt-4">
            <p className="text-amber-400 text-sm">
              <strong>⚠️ Protecție supraîncălzire:</strong> Panourile solare pot atinge 200°C în stagnare. 
              Prevedeți vas expansiune suficient și supapă cu descărcare controlată.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "automatizare",
      titlu: "8. Automatizare și Reglaj",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">8.1 Reglaj în funcție de temperatura exterioară</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Sondă exterioară + regulator cu curbă de încălzire</li>
            <li>Ajustează temperatura de tur în funcție de exterior</li>
            <li>Economie: 15-25% față de temperatură fixă</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">8.2 Robinete termostatice</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Reglaj individual pe fiecare corp</li>
            <li>Mențin temperatura setată în cameră</li>
            <li>Element sensibil: ceară sau gaz</li>
            <li>Obligatorii conform legislație (eficiență energetică)</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">8.3 Termostate de ambient</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>On/Off:</strong> simplu, pornește/oprește cazanul</li>
            <li><strong>Modulant:</strong> comunică cu cazanul, ajustează puterea</li>
            <li><strong>Programabil:</strong> setări diferite pe zile/ore</li>
            <li><strong>Smart:</strong> control WiFi, învățare automată, geolocalizare</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">8.4 Protecții obligatorii</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Supapă de siguranță (3 bar pentru instalații închise)</li>
            <li>Vas de expansiune dimensionat corect</li>
            <li>Termostat de siguranță (limitare temperatură max)</li>
            <li>Protecție antigel (pentru pompe de căldură și solare)</li>
          </ul>
        </div>
      ),
    },
    {
      id: "montaj",
      titlu: "9. Execuție și Montaj",
      continut: (
        <div className="space-y-4">
          <h4 className="font-semibold text-red-400">9.1 Conducte</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Materiale: cupru, oțel, PPR, PE-X, multicstrat</li>
            <li>Izolație: obligatorie, grosime conform C107</li>
            <li>Compensare dilatări: lire, puncte fixe/mobile</li>
            <li>Pantă: min. 0.3% pentru aerisire/golire</li>
          </ul>

          <h4 className="font-semibold text-red-400 mt-4">9.2 Grosimi izolație (Normativ C107)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-gray-400">Diametru</th>
                  <th className="text-center py-2 text-gray-400">Încălzire</th>
                  <th className="text-center py-2 text-gray-400">ACM cu recirculare</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn ≤ 22</td>
                  <td className="text-center">20 mm</td>
                  <td className="text-center">20 mm</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-2">Dn 22-35</td>
                  <td className="text-center">30 mm</td>
                  <td className="text-center">30 mm</td>
                </tr>
                <tr>
                  <td className="py-2">Dn {'>'} 35</td>
                  <td className="text-center">40 mm</td>
                  <td className="text-center">40 mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold text-red-400 mt-4">9.3 Probe</h4>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li><strong>Proba de presiune:</strong> 1.5 × P lucru, min. 6 bar, 30 minute</li>
            <li><strong>Proba la cald:</strong> verificare funcționare, aerisire, echilibrare</li>
            <li><strong>Reglaj:</strong> echilibrare hidraulică, setare termostate</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-red-500/30 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🔥</span> Ghid de Proiectare - Instalații de Încălzire
        </h2>
        <p className="text-gray-400 mt-1">
          Sisteme de încălzire centrală, încălzire în pardoseală, centrale termice
        </p>
      </div>

      <nav aria-label="Cuprins ghid încălzire">
        <div className="flex flex-wrap gap-2">
          {sectiuni.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSectiuneActiva(s.id)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                sectiuneActiva === s.id
                  ? "bg-red-600 text-white"
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
          <div key={s.id} className={sectiuneActiva === s.id ? "block" : "hidden"}>
            <h3 className="text-xl font-bold text-red-400 mb-4">{s.titlu}</h3>
            <div className="text-gray-300 leading-relaxed">{s.continut}</div>
          </div>
        ))}
      </article>
    </div>
  );
}