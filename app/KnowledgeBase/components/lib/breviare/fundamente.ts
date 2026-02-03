import { Breviar } from "./types";

export const breviareFundamente: Breviar[] = [
  {
    cod: "B-FD-001",
    titlu: "Conversii unități de măsură în instalații",
    slug: "conversii-unitati-masura",
    nivel: "initiator",
    sursa: "SI / Unități tehnice / STAS",
    areCalculator: true,
    calculatorUrl: "/calculatoare/conversii-unitati",
    
    continut: {
      scop: "Conversii rapide între unitățile de măsură utilizate frecvent în proiectarea și execuția instalațiilor (presiune, debit, putere, temperatură), inclusiv unități ne-SI tradiționale.",
      
      formula: "Presiune: 1 bar = 10⁵ Pa = 10 mca = 0.1 MPa = 1.02 kgf/cm²\nDebit: 1 m³/h = 0.278 l/s = 4.4 gpm (US)\nPutere: 1 kW = 860 kcal/h = 3412 BTU/h = 1.36 CP (cai putere)",
      
      variabile: [
        { simbol: "p", definitie: "Presiune", unitate: "Pa, bar, mca" },
        { simbol: "Q", definitie: "Debit volumic", unitate: "m³/h, l/s, gpm" },
        { simbol: "P", definitie: "Putere termică/mecanică", unitate: "kW, kcal/h, BTU/h" },
        { simbol: "T", definitie: "Temperatură", unitate: "°C, °F, K" },
        { simbol: "E", definitie: "Energie", unitate: "kWh, MJ, Gcal" }
      ],
      
      exempluNumeric: {
        date: "Conversii practice pentru o centrală de 24kW, debit 1.2 m³/h, presiune 2 bar, temperatură 60°C",
        pasi: [
          "Putere 24 kW în kcal/h: 24 × 860 = 20,640 kcal/h",
          "Putere în BTU/h: 24 × 3412 = 81,888 BTU/h ≈ 82 MBH (mii BTU/h)",
          "Putere în CP: 24 × 1.36 = 32.6 CP (cai putere francezi)",
          "Debit 1.2 m³/h în l/s: 1.2 / 3.6 = 0.333 l/s",
          "Debit în gpm (galoane US pe min): 1.2 × 4.403 = 5.28 gpm",
          "Presiune 2 bar în mca: 2 × 10.2 = 20.4 mca (metri coloană apă)",
          "Presiune în PSI: 2 × 14.5 = 29 PSI",
          "Presiune în Pa: 2 × 10⁵ = 200,000 Pa = 0.2 MPa",
          "Temperatură 60°C în Fahrenheit: (60×9/5)+32 = 140°F",
          "Temperatură în Kelvin: 60 + 273.15 = 333.15 K"
        ],
        rezultat: "Tablou conversii: 24kW=20640kcal/h=82MBH, 1.2m³/h=0.33l/s=5.3gpm, 2bar=20.4mca=29PSI",
        verificare: "Verificare încrucișată: 24kW la ΔT=20°C → Q=24/(1.16×20)=1.03m³/h ≈ 1.2m³/h (aproximativ corect)"
      },
      
      observatii: [
        "Presiune: în hidraulică se folosește frecvent mCA (metri coloană apă), 1 mCA = 0.0981 bar ≈ 0.1 bar",
        "Presiune atmosferică standard: 1.01325 bar = 1013.25 mbar = 760 mmHg = 10.33 mCA",
        "Debit: 1 l/s = 3.6 m³/h (regula rapidă: împarți la 3.6)",
        "Unități vechi România: 1 at (tehnic) = 1 kgf/cm² = 0.981 bar ≈ 0.98 bar, 1 atm = 1.013 bar",
        "Putere calorică: 1 Gcal = 1.16 MW = 1000 Mcal, 1 kcal = 4.18 kJ",
        "COP conversie: 1 W/W = 3.412 BTU/h/W (EER)",
        "Viteză: 1 m/s = 3.6 km/h = 2.237 mph = 196.85 fpm (feet/min)",
        "Densitate: apă 1000 kg/m³ = 1 kg/l = 62.4 lb/ft³",
        "Viscozitate cinematică apă la 20°C: 1×10⁻⁶ m²/s = 1 cSt (centistokes)",
        "Temperatură absolută: 0 K = -273.15°C, 0°C = 273.15 K, diferențele în K = diferențele în °C"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-FD-001: Conversii unități instalații
Fundamente | Nivel: Inițiator | SI/Tehnic
================================================================================

PRESIUNE
---------
1 bar     = 100,000 Pa = 0.1 MPa
          = 10.2 mca (metri coloană apă)
          = 14.5 PSI
          = 0.987 atm
          = 1.02 kgf/cm² (at)

Regulă rapidă: 1 bar ≈ 10 mca ≈ 1 atm

DEBIT
------
1 m³/h    = 0.278 l/s  (÷3.6)
          = 4.403 gpm (US)
          = 3.667 gpm (UK)

1 l/s     = 3.6 m³/h   (×3.6)
          = 15.85 gpm

PUTERE
-------
1 kW      = 860 kcal/h
          = 3412 BTU/h
          = 1.36 CP (cai putere)
          = 1000 W

1 kcal/h  = 1.163 W
1 BTU/h   = 0.293 W
1 CP      = 736 W = 0.736 kW

TEMPERATURĂ
-----------
°C → °F:   (°C × 9/5) + 32
°F → °C:   (°F - 32) × 5/9
°C → K:    °C + 273.15

ENERGIE
--------
1 kWh     = 3.6 MJ
          = 859.8 kcal
1 Gcal    = 1163 kWh
          = 4.186 GJ

================================================================================
`
  },
  
  {
    cod: "B-FD-002",
    titlu: "Proprietăți fizice ale apei și aerului",
    slug: "proprietati-fizice-apa-aer",
    nivel: "initiator",
    sursa: "Termodinamică / Fizică construcții / Tabele fizico-chimice",
    areCalculator: true,
    calculatorUrl: "/calculatoare/proprietati-fluid",
    
    continut: {
      scop: "Valorile de referință pentru densitatea, viscozitatea, căldura specifică și conductivitatea termică a apei și aerului în condițiile uzuale de funcționare a instalațiilor (temperaturi 0-100°C).",
      
      formula: "Densitatea apei: ρ = 999.8/(1+(T-4)²/52000) [kg/m³] (aproximare 0-40°C)\nViscozitate cinematică: ν = μ/ρ [m²/s]\nNumăr Prandtl: Pr = ν/α = μ×cp/λ [-]\nPresiune vapori saturație: pvs = exp(16.65-4060/(T+235)) [mbar] (Tetens)",
      
      variabile: [
        { simbol: "ρ", definitie: "Densitate", unitate: "kg/m³" },
        { simbol: "μ", definitie: "Viscozitate dinamică", unitate: "Pa·s sau kg/m·s" },
        { simbol: "ν", definitie: "Viscozitate cinematică", unitate: "m²/s" },
        { simbol: "cp", definitie: "Căldură specifică", unitate: "J/kg·K sau kJ/kg·K" },
        { simbol: "λ", definitie: "Conductivitate termică", unitate: "W/m·K" },
        { simbol: "α", definitie: "Difuzivitate termică", unitate: "m²/s" }
      ],
      
      exempluNumeric: {
        date: "Calcul proprietăți apă la 20°C și 80°C pentru dimensionare pompă și schimbător",
        pasi: [
          "La 20°C:",
          "Densitate ρ = 998 kg/m³ (maxim la 4°C = 1000 kg/m³)",
          "Viscozitate dinamică μ = 1.002×10⁻³ Pa·s (1 centipoise)",
          "Viscozitate cinematică ν = 1.004×10⁻⁶ m²/s (1 cSt)",
          "Căldură specifică cp = 4182 J/kg·K (4.182 kJ/kg·K)",
          "Conductivitate λ = 0.598 W/m·K",
          "Prandtl Pr = 7.0 (apa rece are Pr mare, convecție forțată dominată de strat limită viteză)",
          "La 80°C:",
          "Densitate ρ = 971.8 kg/m³ (scade cu temperatura)",
          "Viscozitate μ = 0.355×10⁻³ Pa·s (scade de 3x, frecare mai mică)",
          "Viscozitate ν = 0.365×10⁻⁶ m²/s",
          "Căldură specifică cp = 4197 J/kg·K (crește ușor)",
          "Conductivitate λ = 0.668 W/m·K (crește)",
          "Prandtl Pr = 2.2 (scade, convecție mai eficientă)",
          "Aer la 20°C: ρ=1.204, cp=1005, ν=1.516×10⁻⁵, Pr=0.71"
        ],
        rezultat: "Apă 20°C: ρ=998, ν=1×10⁻⁶, cp=4.18; Apă 80°C: ρ=972, ν=0.36×10⁻⁶",
        verificare: "Scăderea viscozității cu temperatura explică de ce circulația e mai ușoară în instalațiile calde"
      },
      
      observatii: [
        "Apa are densitate maximă la 4°C (1000 kg/m³), apoi scade (958 la 100°C)",
        "Viscozitatea apei scade puternic cu temperatura: la 0°C e de 6x mai mare decât la 100°C",
        "Numărul Reynolds: Re = v×D/ν, pentru aceeași viteză și diametru, Re crește cu temperatura (ν scade), deci regimul turbulent e mai ușor de atins în apă caldă",
        "Conductivitate termică a apei crește ușor cu temperatura, dar nu semnificativ pentru calculul uzual",
        "Căldura specifică a apei e aproximativ constantă 4.18-4.22 kJ/kg·K în domeniul 0-100°C",
        "Aerul: densitate scade cu temperatura (1.29 la 0°C, 1.16 la 30°C), cp ≈ constant 1005 J/kg·K",
        "Viscozitatea aerului crește cu temperatura (opusa apei), dar variații mici",
        "Presiunea de vapori a apei crește exponențial: 23 mbar la 20°C, 199 mbar la 60°C, 1013 mbar la 100°C (punct de fierbere la 1 atm)",
        "Căldura latență de vaporizare: 2501 kJ/kg la 0°C, 2260 la 100°C",
        "Gheață: densitate 917 kg/m³, cp 2.1 kJ/kg·K"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-FD-002: Proprietăți fizice ape/aer
Fundamente | Nivel: Inițiator | Fizică
================================================================================

APĂ (la temperaturi uzuale)
----------------------------
Temperatura   Densitate   Viscozitate   Cp      Conductivitate
    °C         kg/m³       cSt (×10⁻⁶)  kJ/kgK    W/mK
-------------------------------------------------------------
   0           999.8        1.79        4.217     0.552
  10           999.7        1.31        4.193     0.587
  20           998.2        1.00        4.182     0.598
  40           992.2        0.66        4.178     0.628
  60           983.2        0.47        4.185     0.651
  80           971.8        0.36        4.197     0.668
 100           958.4        0.29        4.216     0.683

Reguli:
• Densitate maximă la 4°C (1000 kg/m³)
• Viscozitate scade cu T (de 3x de la 20→80°C)
• Cp aproximativ constant 4.18 kJ/kgK

AER (uscat, la presiune normală)
---------------------------------
Temperatura   Densitate   Viscozitate   Cp
    °C         kg/m³       cSt (×10⁻⁶)  kJ/kgK
-----------------------------------------------
   0           1.293        13.3        1.005
  20           1.204        15.1        1.005
  40           1.127        16.9        1.009

Formulă densitate aer (ideal):
ρ = p/(R×T) unde R=287 J/kgK, T în Kelvin

PRESIUNEA DE VAPORI (Tetens):
pvs[mbar] = 6.1078 × 10^((7.5×T)/(237.3+T))
La 20°C: 23.4 mbar
La 100°C: 1013 mbar (fierbere)

================================================================================
`
  }
];