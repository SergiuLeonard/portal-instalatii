import { Breviar } from "./types";

export const breviareFrigorifice: Breviar[] = [
  {
    cod: "B-F-001",
    titlu: "Ciclu frigorific și coeficient de performanță",
    slug: "ciclu-frigorific-cop",
    nivel: "mediu",
    sursa: "Termodinamică / Instalații frigorifice / EN 378",
    areCalculator: true,
    calculatorUrl: "/calculatoare/ciclu-frigorific",
    
    continut: {
      scop: "Analiza ciclului frigorific de compresie cu agent refrigerant și calculul coeficientului de performanță (COP) pentru evaluarea eficienței instalațiilor de refrigerare.",
      
      formula: "COP = Qevaporator / Lcompresor = (h1 - h4) / (h2 - h1)\nEER = Qracire / Welectric [kW/kW]\nCOPîncălzire = COPracire + 1 (pentru pompe de căldură)",
      
      variabile: [
        { simbol: "COP", definitie: "Coeficient de performanță frigorific", unitate: "-" },
        { simbol: "EER", definitie: "Energy Efficiency Ratio", unitate: "kW/kW sau BTU/h·W" },
        { simbol: "h", definitie: "Entalpie specifică agent frigorific", unitate: "kJ/kg" },
        { simbol: "Q", definitie: "Putere frigorifică", unitate: "kW" },
        { simbol: "L", definitie: "Lucru mecanic compresie", unitate: "kW" },
        { simbol: "ṁ", definitie: "Debit masic agent frigorific", unitate: "kg/s" }
      ],
      
      exempluNumeric: {
        date: "Instalație cu R410A, evaporare -10°C, condensare +40°C, subrăcire 5K, supraîncălzire 10K",
        pasi: [
          "Puncte ciclu (din diagramă p-h sau soft):",
          "h1 (aspirație compresor): 420 kJ/kg (vapori supraîncălziți la -10+10=0°C)",
          "h2 (refuleare): 460 kJ/kg (presiune condensare ~24 bar, isentropă)",
          "h3 (lichid subrăcit): 250 kJ/kg (40-5=35°C)",
          "h4 (după ventil): 250 kJ/kg (expansiune izentalpică)",
          "Putere frigorifică: qev = h1 - h4 = 420 - 250 = 170 kJ/kg",
          "Lucru compresie: l = h2 - h1 = 460 - 420 = 40 kJ/kg",
          "COP = 170 / 40 = 4.25",
          "Debit masic pentru 10kW frig: ṁ = 10/170 = 0.0588 kg/s = 3.53 kg/min",
          "Putere compresor: P = 10/4.25 = 2.35 kW"
        ],
        rezultat: "COP = 4.25, putere absorbită 2.35 kW pentru 10 kW frig",
        verificare: "COP tipic pentru aer condiționat: 3-5, valoare bună pentru condiții date"
      },
      
      observatii: [
        "COP variază puternic cu temperaturile de lucru: crește cu cât diferența (Tcond - Tevap) este mai mică",
        "Carnot COP = Tevap / (Tcond - Tevap) [în Kelvin] - limita teoretică maximă",
        "Pentru R410A la -10/+40°C: COP Carnot ≈ 263/(313-263) = 5.26, COP real 4.25 → eficiență ciclu 80%",
        "Subrăcirea lichidului crește COP (h4 scade), supraîncălzirea protejează compresorul",
        "EER = COP × 3.412 (conversie în BTU/h·W)",
        "SEER (sezonier): medie ponderată pentru condiții partiale de funcționare",
        "Pompe de căldură: COPîncălzire = COPracire + 1 (energia compresorului se adaugă la căldura evacuată)",
        "Agenți frigorifici moderni: R32 (COP mai bun, GWP 675), R410A (GWP 2088, faze out), R290 (propan, GWP 3, inflamabil)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-F-001: Ciclu frigorific și COP
Frigorifice | Nivel: Mediu | Termodinamică
================================================================================

CICLU FRIGORIFIC (compresie)
----------------------------
1. Evaporare: lichid → vapor (absorbă căldură Qev)
2. Compresie: vapor comprimat (lucru mecanic L)
3. Condensare: vapor → lichid (cedează căldură Qcd)
4. Expansiune: lichid → amestec (fără schimb de căldură)

FORMULE FUNDAMENTALE
--------------------
COP = Qev / L = (h1 - h4) / (h2 - h1)

Putere frigorifică: Qev = ṁ × (h1 - h4) [kW]
Putere compresor: P = Qev / COP [kW]

Pentru pompe de căldură:
COPîncălzire = Qcd / P = COPracire + 1

VALORI TIPICE COP
-----------------
Aer condiționat (Tevap +5°C, Tcond +35°C): 3.5-4.5
Frigider casnic (-25/+45°C): 1.5-2.0
Vitrină frigorifică (-10/+35°C): 2.0-2.5
Pompă căldură aer-apă (+35/+55°C): 3.0-4.0 (A2/W35)

EFICIENȚĂ CARNOT
----------------
COPmax = Tevap[K] / (Tcond[K] - Tevap[K])
Ex: -10°C/+40°C → 263/(313-263) = 5.26 (limită teoretică)

EXEMPLU RAPID
-------------
R32, Tevap=+5°C, Tcond=+40°C
h1=410, h2=435, h3=250, h4=250 kJ/kg
COP = (410-250)/(435-410) = 160/25 = 6.4 (ideal, fără pierderi)

================================================================================
`
  },
  
  {
    cod: "B-F-002",
    titlu: "Dimensionare conducte frigorifice și izolații",
    slug: "conducte-frigorifice-izolatii",
    nivel: "avansat",
    sursa: "EN 378 / ASHRAE / Good practice frigorific",
    areCalculator: true,
    calculatorUrl: "/calculatoare/conducte-frig",
    
    continut: {
      scop: "Calculul dimensiunilor conductelor de agent frigorific (cupru) pentru lichid și sucțiune, pierderile de presiune admisibile și grosimea izolației termice pentru prevenirea condensului.",
      
      formula: "Δpadmis lichid: 0.5-1K echivalent (~6-12 kPa pentru R410A)\nΔpadmis sucțiune: 1-2K echivalent (~15-30 kPa)\nViteză lichid: 0.5-1.5 m/s, vapori: 10-20 m/s\nδizolatie = λ × (Tsurf - Tamb) / (α × (Tamb - Td)) [m]",
      
      variabile: [
        { simbol: "D", definitie: "Diametru interior conductă", unitate: "mm" },
        { simbol: "Δp", definitie: "Pierdere de presiune", unitate: "kPa, bar" },
        { simbol: "v", definitie: "Viteză de curgere", unitate: "m/s" },
        { simbol: "δ", definitie: "Grosime izolație", unitate: "mm" },
        { simbol: "λ", definitie: "Conductivitate termică izolație (~0.04)", unitate: "W/mK" },
        { simbol: "Td", definitie: "Temperatură de rouă", unitate: "°C" },
        { simbol: "α", definitie: "Coeficient convecție (~8)", unitate: "W/m²K" }
      ],
      
      exempluNumeric: {
        date: "Sistem split 12kW cu R32, lungimi: lichid 15m, gaz 15m, înălțime 5m (condensator sus)",
        pasi: [
          "Debit masic R32: qm = 12kW / 170 kJ/kg = 0.0706 kg/s",
          "Densitate lichid R32 la 40°C: ρ=850 kg/m³, volumetric qv = 0.0706/850 = 0.000083 m³/s = 0.083 l/s",
          "Viteză economică lichid 1.0 m/s → S = 0.000083/1 = 0.000083 m², D = 10.3mm",
          "Alegem țeavă cupru 12mm (3/8\") exterioară, 10mm interioară (standard)",
          "Verificare Δp lichid: pentru 12kW, 15m, colivi 3/8\" → Δp ≈ 8 kPa (0.08 bar) < 0.5K admisibil ✓",
          "Sucțiune vapori: ρ=25 kg/m³, qv = 0.0706/25 = 0.00282 m³/s, viteză 15 m/s",
          "S = 0.00282/15 = 0.000188 m², D = 15.5mm → alegem 5/8\" (16mm ext, 14mm int)",
          "Pierdere presiune sucțiune: Δp ≈ 15 kPa pentru 15m cu 2 coți, echivalent 1.5K < 2K admisibil ✓",
          "Pierdere statică înălțime: 5m × 9.81 × (850-25)/100000 = 0.4 bar adițional la lichid",
          "Izolație sucțiune: Temp suprafață +5°C, Tamb +25°C, Td +20°C, λ=0.04",
          "δ = 0.04 × (5-25) / (8 × (25-20)) = 0.04 × (-20) / 40 = 0.02m = 20mm (minim 13mm pentru siguranță)"
        ],
        rezultat: "Lichid 3/8\" (10mm), Sucțiune 5/8\" (14mm), izolație 20mm",
        verificare: "Viteze în limite, pierderi < 2K echivalent, fără condens pe izolație"
      },
      
      observatii: [
        "Conductele de lichid se dimensionează pentru viteze mici (fără eroziune) și pierderi mici (sub 1K)",
        "Conductele de vapori (sucțiune) se dimensionează pentru pierderi mici (<2K) pentru a nu reduce capacitatea",
        "Diametre standard cupru: 1/4\"(6mm), 3/8\"(10mm), 1/2\"(12mm), 5/8\"(16mm), 3/4\"(19mm), 7/8\"(22mm)",
        "Pierderea de presiune pe înălțime (coloni) pentru lichid: ρ×g×H (important la sistemele pe verticală)",
        "Pentru vapori: coloana de înălțime reduce presiunea de aspirație (ρ mic, efect minor)",
        "Izolație minimă: 13mm pentru prevenire condens în condiții normale, 20mm pentru medii umede",
        "Conductele de lichid cald (de la condensator) pot fi neizolate sau izolate minim pentru protecție",
        "Racorduri și armături: folosite cele cu pierderi mici (colivii lungi, nu coturi scurte)",
        "Nivelul de ulei în conducte: viteze > 3-4 m/s necesare pentru transport ulei înapoi la compresor"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-F-002: Conducte frigorifice și izolații
Frigorifice | Nivel: Avansat | EN 378
================================================================================

DIMENSIONARE CONDUCTE
---------------------
LICHID (de la condensator la vaporizator):
  • Viteză: 0.5-1.5 m/s (max 3 pentru a evita eroziunea sonică)
  • Pierdere admisibilă: echivalent 0.5-1K (6-12 kPa pentru R410A)
  • Calcul: D = √(4×qm/(π×ρ×v))

GAZ/SUCȚIUNE (de la vaporizator la compresor):
  • Viteză: 10-20 m/s (min 3 pentru transport ulei)
  • Pierdere admisibilă: echivalent 1-2K (15-30 kPa)
  • Atentie: pierderile reduc capacitatea și cresc temperatura de aspirație

DIAMETRE STANDARD CUPRU (inch/mm ext x int)
--------------------------------------------
1/4\"   = 6.35 x 4.75 mm (vapori mici)
3/8\"   = 9.52 x 7.75 mm (lichid până la 7kW)
1/2\"   = 12.7 x 10.0 mm (lichid 7-15kW)
5/8\"   = 15.88 x 12.8 mm (vapori 7-15kW)
3/4\"   = 19.05 x 15.0 mm
7/8\"   = 22.2 x 19.0 mm

IZOLAȚIE TERMICĂ
----------------
Formula: δ = λ × ΔT / (α × (Tamb - Td)) [m]
unde:
λ = 0.035-0.04 W/mK (cauciuc/armaflex)
α = 8 W/m²K (convecție naturală)
Td = temperatura de rouă (20-22°C vară)

Grosimi practice:
  • Minim: 13mm (interior uscat)
  • Standard: 19mm (exterior/protecție mecanică)
  • Tropical: 25mm (umiditate mare)

================================================================================
`
  }
];