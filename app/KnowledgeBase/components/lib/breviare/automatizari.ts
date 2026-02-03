// /app/knowledgebase/lib/breviare/automatizari.ts

import { Breviar } from "./types";

export const breviareAutomatizari: Breviar[] = [
  {
    cod: "B-A-001",
    titlu: "Control PID - Parametri și acordare",
    slug: "control-pid-parametri",
    nivel: "mediu",
    sursa: "Automatizări industriale / Experiență practică",
    areCalculator: true,
    calculatorUrl: "/calculatoare/pid-tuning",
    
    continut: {
      scop: "Acordarea regulatorului PID pentru controlul temperaturii, presiunii sau debitului în instalații HVAC, determinarea parametrilor Kp, Ti, Td pentru răspuns optim (fără suprareglaj excesiv sau oscilații).",
      
      formula: "u(t) = Kp × [e(t) + (1/Ti)∫e(t)dt + Td×de(t)/dt]\nSau forma paralelă: P + I + D\nUnde: e(t) = w - x (eroare = prescrie - măsurat)",
      
      variabile: [
        { simbol: "Kp", definitie: "Factor de proporționalitate (bandă proporțională)", unitate: "% sau unități EU" },
        { simbol: "Ti", definitie: "Timp de integrare (reset)", unitate: "s, min" },
        { simbol: "Td", definitie: "Timp de derivare (rate)", unitate: "s, min" },
        { simbol: "Pb", definitie: "Banda proporțională = 100/Kp", unitate: "%" },
        { simbol: "e", definitie: "Eroare (deviație)", unitate: "unitate proces" },
        { simbol: "u", definitie: "Semnal de comandă (ieșire)", unitate: "%, mA, V" }
      ],
      
      exempluNumeric: {
        date: "Control temperatură încălzire: Tset=21°C, proces cu constantă de timp T=300s, timp mort τ=30s",
        pasi: [
          "Metoda Ziegler-Nichols în buclă deschisă (răspuns la treaptă):",
          "Determinăm R = panta la inflexiune = Δy/Δt = 5°C/100s = 0.05°C/s",
          "L = timp mort = 30s",
          "Parametri PID: Kp = 1.2/(R×L) = 1.2/(0.05×30) = 0.8",
          "Ti = 2×L = 60s (1 min)",
          "Td = 0.5×L = 15s",
          "Metoda alternativă (buclă închisă): creștem Kp până la oscilație continuă (Kcrit=1.2, Tosc=120s)",
          "Kp = 0.6×Kcrit = 0.72, Ti = Tosc/2 = 60s, Td = Tosc/8 = 15s",
          "Ajustare fină: reducem Kp la 0.6 pentru eliminare suprareglaj, creștem Ti la 90s"
        ],
        rezultat: "Kp=0.6, Ti=90s (1.5min), Td=15s pentru control stabil fără depășire",
        verificare: "Timp de stabilizare ≈ 3×constanta de timp = 900s (15min), suprareglaj <5%"
      },
      
      observatii: [
        "Doar P: folosit pentru procese rapide, prezintă eroare staționară (offset)",
        "PI: elimină offset-ul, folosit pentru nivel, presiune, majoritatea aplicațiilor HVAC",
        "PID: adaugă acțiune anticipativă, folosit pentru temperatură (procese lente cu timp mort)",
        "Regula practică: Td = (1/4...1/6)×Ti, raportul Ti/Td ≈ 4-6",
        "Banda proporțională Pb = 100/Kp [%], valori tipice 5-20% pentru temperatură, 20-100% pentru presiune",
        "Integrarea prea rapidă (Ti mic) → instabilitate și oscilații",
        "Derivarea prea mare (Td mare) → sensibilitate la zgomotul măsurătorii",
        "Anti-windup: limitarea integrării când actuatorul satura (100% deschis)",
        "Switchover vara/iarnă: parametri diferiți pentru încălzire (lent) vs răcire (rapid)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-A-001: Control PID - Parametri și acordare
Automatizări | Nivel: Mediu | BMS/BAS
================================================================================

FORMULA PID
------------
u(t) = Kp × [e(t) + (1/Ti)∫e(t)dt + Td×de/dt]

Componente:
P = Proporțional (reacție imediată la eroare)
I = Integral (elimină offset-ul în timp)
D = Derivativ (reacție la viteza de schimbare)

METODE DE ACORDARE
-------------------

1. ZIEGLER-NICHOLS (Buclă deschisă - răspuns treaptă):
   - Măsoară L (timp mort) și R (panta maximă)
   - P:   Kp = 1/(R×L),    Ti = ∞,     Td = 0
   - PI:  Kp = 0.9/(R×L),  Ti = 3.33L, Td = 0
   - PID: Kp = 1.2/(R×L),  Ti = 2L,    Td = 0.5L

2. ZIEGLER-NICHOLS (Buclă închisă - oscilație):
   - Crește Kp până la oscilație continuă (Kcrit, Tosc)
   - P:   Kp = 0.5×Kcrit
   - PI:  Kp = 0.45×Kcrit, Ti = Tosc/1.2
   - PID: Kp = 0.6×Kcrit,  Ti = Tosc/2, Td = Tosc/8

3. COHEN-COON (procese cu timp mort mare):
   - Kp = (1.35/R)×(1 + 0.18L/(T-L))
   - Ti = 2.5L×(1 + 0.39L/(T-L))

VALORI TIPICE HVAC
-------------------
Temperatură încălzire:
  Pb = 10-20% (Kp=5-10), Ti=5-15min, Td=1-3min

Presiune:
  Pb = 50-100% (Kp=1-2), Ti=1-3min, Td=0 (PI)

Debit:
  Pb = 100-150%, Ti=0.5-2min, Td=0

Nivel:
  Pb = 20-50%, Ti=5-10min

EXEMPLU RAPID
-------------
Proces: temperatură cameră, T=10min, τ=1min
Z-N: Kp=2, Ti=2min, Td=0.5min
Ajustare conservatoare: Kp=1.2, Ti=5min, Td=0.8min

================================================================================
`
  },
  
  {
    cod: "B-A-002",
    titlu: "Vane și servomotoare - Caracteristici de reglare",
    slug: "vane-servomotoare-caracteristici",
    nivel: "initiator",
    sursa: "Automatizări HVAC / Producători (Belimo, Siemens, Danfoss)",
    areCalculator: true,
    calculatorUrl: "/calculatoare/vana-control",
    
    continut: {
      scop: "Selecția și dimensionarea vanelor de reglare cu servomotor pentru circuitele de încălzire/răcire, determinarea caracteristicii optime (liniară vs logaritmică) și calculul autorității vanei.",
      
      formula: "Kv = Q / √(Δp)  [m³/h]\nΔpvană = (Q/Kv)²  [bar]\nAutoritate a = Δpvană / (Δpvană + Δpcircuit)\nCvariație = Qmax/Qmin (raport de turn-down)",
      
      variabile: [
        { simbol: "Kv", definitie: "Coeficient de debit (vată complet deschisă)", unitate: "m³/h" },
        { simbol: "Q", definitie: "Debit de calcul", unitate: "m³/h" },
        { simbol: "Δp", definitie: "Diferență de presiune disponibilă", unitate: "bar" },
        { simbol: "a", definitie: "Autoritate hidraulică a vanei (0.3-0.7 optim)", unitate: "-" },
        { simbol: "Cvariație", definitie: "Raport reglaj minim/maxim (turn-down)", unitate: "-" },
        { simbol: "N", definitie: "Cursă servomotor (mm sau grade)", unitate: "mm, °" }
      ],
      
      exempluNumeric: {
        date: "Radiator 2kW, ΔT=20K, Q=0.086m³/h, Δpdisp=0.1bar, alegere vana termostatică",
        pasi: [
          "Debit: Q = 2000W / (1.16×20) = 86 l/h = 0.086 m³/h",
          "Kv necesar: Kv = Q/√(Δp) = 0.086/√0.1 = 0.086/0.316 = 0.27",
          "Alegem vana cu Kvs=0.4 (cel mai apropiat superior)",
          "Δp real pe vană: Δp = (0.086/0.4)² = 0.046 bar",
          "Autoritate: a = 0.046/(0.046+0.054) = 0.46 (acceptabil, între 0.3-0.7)",
          "Caracteristică: logaritmică (egal procentual) pentru radiatoare",
          "Servomotor: 3-punct (230V) sau analogic (0-10V), forță 100-150N",
          "Timp de cursă: 120s (lent, anti-water-hammer)"
        ],
        rezultat: "Vana DN15, Kvs=0.4, caracteristică logaritmică, servomotor 230V/3-punct",
        verificare: "Autoritate 0.46 > 0.3 ✓, Kvs > Kv necesar ✓, caracteristică potrivită pentru schimbător cu panta variabilă"
      },
      
      observatii: [
        "Caracteristici vane: liniară (Q proporțional cu cursă) pentru schimbătoare plate, logaritmică (egal procentual) pentru radiatoare și schimbătoare în contracurent",
        "Kv100 = debit în m³/h la 1 bar diferență de presiune, apă 20-30°C",
        "Autoritate a < 0.3: vană prea mare, reglaj grosier la deschideri mici",
        "Autoritate a > 0.7: pierderi excesive de presiune, energie consumată de pompe",
        "Vane cu 3 căi: amestec sau deviație, atenție la funcția de bypass (amestec) sau distribuție",
        "Servomotoare: alegere după forță (N), viteză (s/mm), semnal (0-10V, 4-20mA, 3-punct)",
        "Cursă: vane cu sertar (axial) 2.5-20mm, vane cu bilă (90°) cu caracterizator special",
        "Vane cu caracteristica modificată (parabolică) pentru circuite cu pompe cu turație variabilă"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-A-002: Vane și servomotoare
Automatizări | Nivel: Inițiator | HVAC
================================================================================

FORMULE DE BAZĂ
----------------
Kv = Q / √(Δp)          [m³/h]
Q = Kv × √(Δp)          [m³/h]
Δp = (Q/Kv)²            [bar]

Autoritate hidraulică:
a = Δpvană / (Δpvană + Δpcircuit)

unde:
- a = 0.3...0.7 (optim)
- a < 0.3: vană supradimensionată
- a > 0.7: prea multă pierdere pe vană

CARACTERISTICI DE REGLARE
---------------------------
1. Liniară: ΔQ/Δh = const
   - Folosit: schimbătoare de căldură (panta aprox. liniară)
   
2. Logaritmică (Egal procentual): ΔQ/Q = const × Δh
   - Folosit: radiatoare, boilere (compensare neliniaritate schimbător)

3. Vana ON/OFF (2 poziții): doar deschis/închis
   - Folosit: circulație pompe, încărcare boiler

DIMENSIONARE RAPIDĂ
-------------------
1. Calculează Q necesar [m³/h]
2. Estimează Δp disponibil [bar] (tipic 0.05-0.2)
3. Kv = Q/√(Δp)
4. Alege Kvs standard (0.25, 0.4, 0.63, 1.0, 1.6, 2.5, 4.0, 6.3...)
5. Verifică autoritate: a = Δpvană / Δptotal > 0.3

SERVOMOTOARE - PARAMETRI
-------------------------
Forță: 100-150N (vane mici), 500-1000N (vane mari)
Semnal:
  • 3-punct (230V): deschide/oprește/închide
  • Analogic: 0-10V sau 4-20mA (poziție proporțională)
  • Modbus/BACnet: comunicație digitală

Timp de cursă: 30-150s (vane lente anti-water-hammer)

================================================================================
`
  },
  
  {
    cod: "B-A-003",
    titlu: "Senzori pentru instalații HVAC - Domenii și precizii",
    slug: "senzori-hvac-domenii-precizii",
    nivel: "initiator",
    sursa: "Automatizări / Metrologie industrială / SR EN 60751",
    areCalculator: false,
    
    continut: {
      scop: "Selecția senzorilor adecvați pentru măsurarea temperaturii, umidității, presiunii și calității aerului în instalații de climatizare, înțelegerea claselor de precizie și a domeniilor de măsură.",
      
      formula: "Eroare totală = Eroare de bază + Eroare de temperatură ambiantă + Eroare de îmbătrânire\nPrecizie [%] = (Eroare max / Domeniu măsură) × 100\nIncertitudine extinsă = k × σ (k=2 pentru 95% încredere)",
      
      variabile: [
        { simbol: "Pt100", definitie: "Senzor temperatură cu platina (100Ω la 0°C)", unitate: "Ω, °C" },
        { simbol: "NTC", definitie: "Termistor cu coeficient negativ de temperatură", unitate: "Ω, °C" },
        { simbol: "Clasa", definitie: "Clasă de precizie (A, B, 1/3 DIN, etc.)", unitate: "-" },
        { simbol: "IP", definitie: "Grad de protecție la praf și apă (IP65, IP67)", unitate: "-" },
        { simbol: "t90", definitie: "Timp de răspuns (până la 90% din valoare)", unitate: "s" }
      ],
      
      exempluNumeric: {
        date: "Alegere senzor temperatură agent termic încălzire (0-100°C), precizie cerută ±0.5°C",
        pasi: [
          "Domeniu măsură: 0-100°C (posibil 150°C pentru siguranță)",
          "Tehnologie: Pt100 (rezistență) - stabil, liniar, interval larg",
          "Clasă B: ±0.3°C la 0°C, ±0.8°C la 100°C → insuficient",
          "Clasă A: ±0.15°C la 0°C, ±0.35°C la 100°C → acceptabil",
          "1/3 DIN B: ±0.1°C la 0°C → preț mai bun, precizie superioară",
          "Element de măsură: Pt100 în teacă inox 6mm, lungime 50mm",
          "Transmițător: 4-20mA (domeniu 0-150°C), eroare ±0.1%",
          "Montaj: teacă în conductă, răspuns t90 < 10s (fără pastă termică)",
          "Protecție: IP65 pentru spații tehnice"
        ],
        rezultat: "Senzor Pt100 clasa A sau 1/3 DIN, teacă 6x50mm, 4-20mA, IP65",
        verificare: "Eroare totală <0.5°C (clasa A: 0.35°C + transmițător 0.15°C = 0.5°C) la limită dar acceptabil"
      },
      
      observatii: [
        "Temperatură: Pt100 (precizie, stabil), termocupluri (domenii mari >600°C), NTC (ieftin, semnal neliniar)",
        "Umiditate relativă: capacitive (0-100% RH, precizie ±2%), cu compensare temperatură obligatorie",
        "Presiune diferențială: membrane piezorezistive (0-1000 Pa, ±1%), pentru măsurare debit (tuburi Pitot) sau filtre murdare",
        "CO2: senzori NDIR (infraroșu nondispersiv), domeniu 0-2000/5000 ppm, precizie ±50ppm sau ±5%",
        "VOC (compuși organici volatili): senzori MOS (metal oxid semiconductor) pentru calitatea aerului (0-100% indice)",
        "Debit aer: tuburi Pitot + presiune diferențială (1-20m/s), senzori cu fir cald (hot-wire), palete cu reed",
        "Debit apă: turbina (cu impulsuri), electromagnetic (fără piese în mișcare, conductivitate necesară), ultrasunete",
        "Timp de răspuns (t90): senzori de aer 1-5s, senzori în teacă 10-30s (fără pastă), 3-10s (cu pastă termică)",
        "Calibrare: verificare anuală pentru senzori critici, interval 2-3 ani pentru senzori standard"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-A-003: Senzori HVAC - Domenii și precizii
Automatizări | Nivel: Inițiator | Metrologie
================================================================================

TIPURI DE SENZORI ȘI APLICAȚII
-------------------------------

TEMPERATURĂ:
• Pt100 (RTD): -200...+850°C, liniar, stabil, precis (clase A/B)
  - Clasa A: ±0.15°C, Clasa B: ±0.3°C (la 0°C)
  - Domeniu HVAC: clasa A sau 1/3 DIN B
  
• Termocuplu: >600°C (cazane, arzătoare)
  - Tip K (NiCr-Ni): -200...+1260°C, ±1.5°C
  
• NTC: -50...+150°C, ieftin, neliniar
  - Precizie ±0.5...2°C, folosit pentru camere

UMIDITATE:
• RH (umiditate relativă): 0-100%
  - Precizie ±2-3% RH (senzori buni)
  - Compensare temperatură obligatorie
  - Domeniu temperatură senzor: -40...+80°C

PRESIUNE:
• Absolute: 0-10bar (expansiune, boilere)
• Diferențiale: 0-100Pa, 0-1000Pa (ventilație, filtre)
• Relative: 0-16bar (circuite hidraulice)

CALITATE AER:
• CO2: 0-2000/5000ppm (NDIR), ±50ppm
• VOC: 0-100% indice calitate (semiconductor)
• PM2.5/PM10: senzori laser optici

DEBIT:
• Aer: tub Pitot (1-25m/s), anemometru cu palete
• Apă: turbină (impulsuri/L), electromagnetic (±0.5%)

CLASE DE PRECIZIE (Pt100 - SR EN 60751)
----------------------------------------
Clasa AA (1/10 DIN): ±0.1°C
Clasa A (1/3 DIN):  ±0.15°C  
Clasa B:           ±0.3°C
Clasa C:           ±0.6°C

EXEMPLU SELECȚIE
----------------
Măsurare: temperatură retur încălzire 20-80°C
Cerință: precizie ±0.5°C
Soluție: Pt100 clasa A în teacă 6mm, transmițător 4-20mA
Eroare totală: 0.35°C (senzor) + 0.1% din domeniu (transmițător)

================================================================================
`
  },
  
  {
    cod: "B-A-004",
    titlu: "Debitmetre - Principii de funcționare și formule",
    slug: "debitmetre-principii-formule",
    nivel: "mediu",
    sursa: "Metrologie fluidelor / ISO 5167 / SR EN 1434",
    areCalculator: true,
    calculatorUrl: "/calculatoare/debitmetru-selectie",
    
    continut: {
      scop: "Calculul debitului măsurat prin diferite metode (diferență de presiune, turbine, electromagnetice, ultrasunete) și determinarea incertitudinii de măsură pentru fiecare principiu.",
      
      formula: "Diafragmă/Venturi: Q = C × ε × (πd²/4) × √[2Δp/ρ]  [m³/s]\nTurbina: Q = f/k  [m³/h] unde f=frecvență, k=factor de calibrare\nElectromagnetic: Q = (πD²/4) × v = (πD²/4) × (U/(k×B))  [m³/s]\nUltrasunete (time-of-flight): Q ∝ Δt/(t1×t2)  [m³/h]",
      
      variabile: [
        { simbol: "Q", definitie: "Debit volumic", unitate: "m³/h, l/s" },
        { simbol: "C", definitie: "Coeficient de descărcare (0.6-0.98)", unitate: "-" },
        { simbol: "ε", definitie: "Factor de expansibilitate (≈1 pentru lichide)", unitate: "-" },
        { simbol: "d", definitie: "Diametru orificiu/diafragmă", unitate: "m" },
        { simbol: "D", definitie: "Diametru conductă", unitate: "m" },
        { simbol: "β", definitie: "Raport d/D (0.2-0.75)", unitate: "-" },
        { simbol: "Δp", definitie: "Pierdere de presiune măsurată", unitate: "Pa, mbar" },
        { simbol: "ρ", definitie: "Densitate fluid", unitate: "kg/m³" },
        { simbol: "k", definitie: "Factor de calibrare K-factor", unitate: "impulsuri/m³" },
        { simbol: "U", definitie: "Tensiune indusă (electromagnetic)", unitate: "V" },
        { simbol: "B", definitie: "Inducție magnetică", unitate: "T" }
      ],
      
      exempluNumeric: {
        date: "Măsurare debit apă rece într-o aducțiune DN100 (D=100mm), Qmax=50m³/h, alegere diafragmă",
        pasi: [
          "Domeniu: 10-50 m³/h (raport 5:1)",
          "Alegem diafragmă cu β=0.6 → d=60mm",
          "Qmax=50m³/h=0.0139m³/s, ρ=1000kg/m³",
          "Aria orificiu: A=π×0.06²/4=0.002827m²",
          "Coeficient C≈0.61 pentru diafragmă ascuțită, ε=1 (lichid)",
          "Δp calculat: din Q=C×A×√(2Δp/ρ) → Δp=(Q/(C×A))²×ρ/2",
          "Δp=(0.0139/(0.61×0.002827))²×500= (8.06)²×500=32500Pa=325mbar (prea mare)",
          "Recalculare cu β=0.7 (d=70mm): A=0.003848m², C≈0.60",
          "Δp=(0.0139/(0.60×0.003848))²×500= (6.02)²×500=18120Pa≈180mbar (acceptabil)",
          "Pierdere de sarcină permanentă: 50-70% din Δp ≈ 100mbar",
          "Incertitudine: ±1.5% din valoare măsurată (ISO 5167)"
        ],
        rezultat: "Diafragmă DN100/70mm (β=0.7), Δp max 180mbar, traductor diferențial 4-20mA",
        verificare: "Reynolds la Qmin: Re=4Q/(πDν)=4×2.78/(π×0.1×10⁻⁶)=35,400 > 10,000 necesar pentru diafragmă ✓"
      },
      
      observatii: [
        "Diafragme (orificii): ieftine, fără părți în mișcare, pierderi de presiune mari (50-80% din Δp), precizie 1-2%",
        "Venturi: scumpe, pierderi mici (10-15% din Δp), precizie 0.5-1%, folosite pentru dimensiuni mari",
        "Tub Pitot: pentru aer/gaze, măsoară viteza locală, necesită profil de viteză mediu, precizie 1-3%",
        "Turbine: bune pentru lichide curate, precizie 0.5-1%, necesită filtrare, uzură la timp îndelungat",
        "Electromagnetice: fără obstacol în flux, pentru lichide conductoare (>5μS/cm), precizie 0.2-0.5%, preț mediu",
        "Ultrasunete (transit-time): fără contact cu fluidul, pentru ape curate, precizie 0.5-2%, pot fi portabile",
        "Ultrasunete (Doppler): pentru fluide cu impurități/bule, precizie 2-5%",
        "Vortex: pentru gaze/abur, fără părți în mișcare, precizie 1%, necesită suficientă turbonență",
        "Masice (Coriolis): cele mai precise (0.1-0.2%), măsoară masă direct, scumpe, pentru aplicații critice",
        "Reynolds number: trebuie >10,000 pentru diafragme standard, altfel coeficientul C variază"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-A-004: Debitmetre - Principii și formule
Automatizări | Nivel: Mediu | Metrologie
================================================================================

PRINCIPII ȘI FORMULE
---------------------

1. DIFERENȚIALE (Diafragmă, Venturi, Tub Pitot):
Q = C × ε × A × √(2Δp/ρ)

unde:
C = coeficient descărcare (0.6 pentru diafragmă, 0.98 venturi)
ε = factor expansibilitate (1 pentru lichide)
A = aria secțiunii de trecere [m²]
Δp = diferență de presiune [Pa]
ρ = densitate [kg/m³]

2. TURBINĂ:
Q = f / k
f = frecvență impulsuri [Hz]
k = factor de calibrare [imp/m³]

3. ELECTROMAGNETIC:
Q = v × A = (U/(k×B)) × (πD²/4)
v = viteză indusă de tensiunea U în câmp magnetic B

4. ULTRASUNETE (Transit-time):
Q ∝ (t₂-t₁)/(t₁×t₂) ∝ Δt

COMPARAȚIE TEHNOLOGII
----------------------
Tip               Precizie  Pierdere pres.  Aplicație          Preț
------------------------------------------------------------------
Diafragmă         ±1.5%     Mare (50-80%)   Apă, gaze, abur    Mic
Venturi           ±0.7%     Mică (10-15%)   Dimensiuni mari    Mare
Turbina           ±0.5%     Medie           Lichide curate     Mediu
Electromagnetic   ±0.2%     Zero            Apă uzată, chimic  Mediu
Ultrasunete       ±1%       Zero            Ape curate/portabil Mediu
Vortex            ±1%       Medie           Gaze, abur         Mediu
Coriolis          ±0.1%     Medie           Măsurare masă      Mare

REYNOLDS CHECK
--------------
Pentru diafragme standard: Re > 10,000 necesar
Re = (4×Q)/(π×D×ν) unde ν = viscozitate cinematică [m²/s]
Apă la 20°C: ν = 1×10⁻⁶ m²/s

EXEMPLU RAPID: DN50, Q=10m³/h
Diafragmă β=0.6: Δp ≈ 50 mbar (calculat)
Venturi β=0.6: Δp ≈ 10 mbar

================================================================================
`
  },
  
  {
    cod: "B-A-005",
    titlu: "Semnale standard în automatizări (4-20mA, 0-10V)",
    slug: "semnale-standard-4-20ma-0-10v",
    nivel: "initiator",
    sursa: "Automatizări industriale / IEC 60529 / IEC 61131",
    areCalculator: true,
    calculatorUrl: "/calculatoare/semnal-conversie",
    
    continut: {
      scop: "Conversia între semnalele analogice standard (4-20mA și 0-10V) și valorile proces, calculul rezistențelor de sarcină și al erorilor de transmisie în buclele de curent.",
      
      formula: "Conversie liniară: X = Xmin + (S - Smin)×(Xmax-Xmin)/(Smax-Smin)\nRezistență sarcină: Rmax = (Valim - Vtransmisor)/0.02 [Ω] pentru 4-20mA\nCădere tensiune pe cablu: ΔU = 2×L×Rspec×I [V]\nEroare totală = Eroare senzor + Eroare transmisie + Eroare A/D",
      
      variabile: [
        { simbol: "S", definitie: "Semnal măsurat (mA sau V)", unitate: "mA, V" },
        { simbol: "X", definitie: "Valoare proces (temperatură, presiune, etc.)", unitate: "°C, bar, etc." },
        { simbol: "L", definitie: "Lungime cablu (dus-întors)", unitate: "m" },
        { simbol: "Rspec", definitie: "Rezistență specifică conductor (0.0175 Ω·mm²/m pentru Cu)", unitate: "Ω·mm²/m" },
        { simbol: "Ssec", definitie: "Secțiune cablu", unitate: "mm²" },
        { simbol: "Rload", definitie: "Rezistență de sarcină (buclă curent)", unitate: "Ω" },
        { simbol: "Valim", definitie: "Tensiune de alimentare transmițător", unitate: "V" }
      ],
      
      exempluNumeric: {
        date: "Senzor temperatură 0-100°C cu ieșire 4-20mA, cablu 100m (dus-înturs), secțiune 1.5mm², citire în PLC",
        pasi: [
          "Semnal 4-20mA corespunde la 0-100°C",
          "La 12mA (mijloc): T = 0 + (12-4)×(100-0)/(20-4) = 8×100/16 = 50°C",
          "Rezistență cablu: R = 2×100×0.0175/1.5 = 2.33Ω",
          "Cădere tensiune maximă (20mA): ΔU = 2.33×0.02 = 0.047V = 47mV",
          "Eroare indusă: 47mV la o rezistență de sarcină de 250Ω (pentru 5V la 20mA)",
          "Eroare procentuală: 47mV/5000mV = 0.94% (neglijabilă pentru majoritatea aplicațiilor)",
          "Verificare rezistență maximă sarcină: Alim=24V, transmițător necesită min 12V → Rmax=(24-12)/0.02=600Ω",
          "Sarcină PLC (250Ω) + cablu (2.33Ω) = 252.33Ω < 600Ω ✓",
          "Conversie în PLC: pentru intrare 0-10V prin rezistență 250Ω, 20mA→5V (range incomplet)",
          "Soluție: rezistență 500Ω pentru 0-10V (20mA×500=10V) sau intrare directă mA"
        ],
        rezultat: "Semnal 4-20mA cu rezistență 250Ω la distanță 100m pe 1.5mm², eroare transmisie <1%",
        verificare: "Tensiune necesară la transmițător: 12V (minim funcționare) + 5V (sarcină) = 17V < 24V disponibili ✓"
      },
      
      observatii: [
        "4-20mA: semnal în curent, imun la zgomot, detectare ruptură cablu (<4mA = defect), alimentare în 2 fire posibilă (loop-powered)",
        "0-10V: semnal în tensiune, sensibil la căderi de tensiune pe cablu (necesită cablu mai gros sau distanțe scurte), detectare ruptură mai dificilă (0V = 0 sau defect?)",
        "0-20mA: variantă mai veche, fără offset de 4mA (nu poate detecta ruptura cablului)",
        "Rezistențe de sarcină tipice: 250Ω (5V la 20mA), 500Ω (10V), 50Ω (1V pentru intrări speciale)",
        "Alimentare în 2 fire (2-wire): transmițătorul își ia energia din bucla de curent (4mA = zero funcțional)",
        "Alimentare în 4 fire (4-wire): alimentare separată de semnal, flexibilitate mai mare",
        "Conversie A/D în PLC: rezoluție tipică 12 biți (4096 pași) sau 16 biți (65536 pași)",
        "Eroare de cuantizare A/D: pentru 12 biți pe 0-100°C: 100/4096 = 0.024°C (neglijabilă față de senzor)",
        "Protocoale digitale moderne: Modbus RTU (RS485), BACnet MSTP, HART (peste 4-20mA analogic), elimină erorile de conversie",
        "Protecție la supratensiuni: diode de protecție la intrările PLC, izolare galvanică între bucle"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-A-005: Semnale standard 4-20mA și 0-10V
Automatizări | Nivel: Inițiator | Electrice
================================================================================

SEMNALE ANALOGICE STANDARD
---------------------------
4-20mA (curent):
  • 4mA = 0% (zero live - permite detectare ruptură cablu)
  • 20mA = 100%
  • Avantaje: imun la zgomot, distanțe lungi (km), alimentare 2-fire
  • Dezavantaje: necesită rezistență de sarcină, pierderi prin cablu

0-10V (tensiune):
  • 0V = 0%
  • 10V = 100%
  • Avantaje: simplu, citire directă
  • Dezavantaje: sensibil la zgomot, căderi de tensiune pe cablu, distanțe <50m

FORMULE DE CONVERSIE
--------------------
Liniară: Y = Ymin + (X-Xmin)×(Ymax-Ymin)/(Xmax-Xmin)

Exemplu: 4-20mA → 0-100°C
T = 0 + (I-4)×(100-0)/(20-4) = (I-4)×6.25

Invers: 0-100°C → 4-20mA
I = 4 + T×(20-4)/(100-0) = 4 + T×0.16

CALCUL CABLU (pentru 4-20mA)
-----------------------------
Rezistență cablu: R = 2×L×ρ/S
unde: L=lungime [m], ρ=0.0175 Ω·mm²/m (Cu), S=secțiune [mm²]

Cădere tensiune: ΔU = R×I [V]
Eroare indusă: (ΔU / (Rload×0.02)) × 100%

EXEMPLU PRACTIC
---------------
Cablu: 100m, 1.5mm², sarcină 250Ω
R = 2×100×0.0175/1.5 = 2.33Ω
ΔUmax = 2.33×0.02 = 0.047V
Eroare = 0.047/(250×0.02) = 0.94%

VERIFICARE SARCINĂ MAXIMĂ
-------------------------
Rmax = (Valimentare - Vmin_transmițător) / 0.02
Ex: (24V - 12V)/0.02 = 600Ω (rezistență totală maximă în buclă)

================================================================================
`
  }
];