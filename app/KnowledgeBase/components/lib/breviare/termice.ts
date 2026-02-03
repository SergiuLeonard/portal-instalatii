// /app/knowledgebase/lib/breviare/termice.ts

import { Breviar } from "./types";

export const breviareTermice: Breviar[] = [
  {
    cod: "B-T-001",
    titlu: "Necesar de căldură - Calculul sarcinii termice Q",
    slug: "necesar-caldura-q",
    nivel: "initiator",
    sursa: "STAS 1907/1",
    areCalculator: true,
    calculatorUrl: "/calculatoare/necesar-caldura",
    
    continut: {
      scop: "Determinarea cantității de căldură necesară pentru menținerea temperaturii interioare confortabile într-o încăpere, în regim staționar de iarnă.",
      
      formula: "Q = Qtr + Qi  [W]\nQtr = Σ(α × S × Δt / R)  [W]\nQi = 0.34 × n × V × Δt  [W]",
      
      variabile: [
        { simbol: "Q", definitie: "Necesar total de căldură", unitate: "W" },
        { simbol: "Qtr", definitie: "Pierderi prin transmisie", unitate: "W" },
        { simbol: "Qi", definitie: "Pierderi prin infiltrații", unitate: "W" },
        { simbol: "α", definitie: "Coeficient corecție orientare", unitate: "-" },
        { simbol: "S", definitie: "Suprafață element constructiv", unitate: "m²" },
        { simbol: "Δt", definitie: "Diferență temperatură (ti - te)", unitate: "°C" },
        { simbol: "R", definitie: "Rezistență termică specifică", unitate: "m²·K/W" },
        { simbol: "n", definitie: "Număr schimburi de aer pe oră", unitate: "h⁻¹" },
        { simbol: "V", definitie: "Volumul încăperii", unitate: "m³" }
      ],
      
      exempluNumeric: {
        date: "Cameră locuință: 4×3×2.7m, perete exterior 12m² (R=2.5), fereastră 2m² (R=0.7), ti=20°C, te=-15°C",
        pasi: [
          "Δt = 20 - (-15) = 35°C",
          "Qtr perete = 1.0 × 12 × 35 / 2.5 = 168 W",
          "Qtr fereastră = 1.15 (est) × 2 × 35 / 0.7 = 115 W",
          "Qtr total = 168 + 115 + pereți interiori ≈ 450 W",
          "V = 4 × 3 × 2.7 = 32.4 m³",
          "n = 0.5 h⁻¹ (locuință etanșă)",
          "Qi = 0.34 × 0.5 × 32.4 × 35 = 193 W",
          "Q total = 450 + 193 = 643 W"
        ],
        rezultat: "Q = 643 W ≈ 650 W",
        verificare: "Specific: 650/(4×3) = 54 W/m². Pentru cameră locuință: 50-80 W/m² ✓"
      },
      
      observatii: [
        "Orientare: N=1.0, E=1.15, S=0.9, V=1.05 (adaosuri STAS 1907)",
        "Coeficientul 0.34 = ρ × c ≈ 1.2 kg/m³ × 1000 J/kg·K / 3600 s/h",
        "n recomandat: locuințe 0.3-0.6, birouri 1.0-2.0, școli 1.5-2.5 h⁻¹",
        "Calcul simplificat: Q = q₀ × Sîncăpere, unde q₀ = 60-100 W/m²",
        "Pentru clădiri vechi, majorați cu 20-30% pierderile"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-T-001: Necesar de căldură Q
Instalații Termice | Nivel: Inițiator | STAS 1907/1
================================================================================

FORMULA COMPLETĂ
----------------
Q = Qtr + Qi  [W]

Qtr = Σ(α × S × Δt / R)     [pierderi transmisie]
Qi = 0.34 × n × V × Δt      [pierderi infiltrații]

VARIABILE
---------
Q     = necesar total [W]
Qtr   = pierderi prin pereți, tavan, podea [W]
Qi    = pierderi aer infiltrat [W]
α     = coef. orientare (N=1.0, E=1.15, S=0.9, V=1.05)
S     = suprafață element [m²]
Δt    = ti - te [°C]
R     = rezistență termică [m²·K/W]
n     = schimburi aer [h⁻¹]
V     = volum încăpere [m³]

COEF. ORIENTARE α (STAS 1907)
-----------------------------
Nord:      1.00
Nord-Est:  1.10
Est:       1.15
Sud-Est:   1.05
Sud:       0.90
Sud-Vest:  0.95
Vest:      1.05
Nord-Vest: 1.00

SCHIMBURI AER n (h⁻¹)
---------------------
Locuințe:     0.3 - 0.6
Birouri:      1.0 - 2.0
Școli:        1.5 - 2.5
Săli sport:   2.0 - 4.0
Spitale:      1.5 - 3.0

FORMULA SIMPLIFICATĂ
--------------------
Q = q₀ × Sîncăpere [W]

q₀ specific [W/m²]:
- Clădire nouă, bine izolată:     40-60
- Clădire medie, anii '90-2000:   60-80
- Clădire veche, neizolată:       80-120
- Clădire foarte veche:          100-150

EXEMPLU: Cameră 4×3×2.7m, ti=20°C, te=-15°C
Qtr ≈ 450 W (calcul detaliat pe elemente)
Qi = 0.34 × 0.5 × 32.4 × 35 = 193 W
Q = 450 + 193 = 643 W ≈ 650 W

Verificare: 650/12 = 54 W/m² ∈ [50,80] ✓

================================================================================
portal-instalatii.vercel.app | calculator: /calculatoare/necesar-caldura
================================================================================`
  },
  
  {
    cod: "B-T-002",
    titlu: "Rezistență termică - Calculul R pentru învelitori",
    slug: "rezistenta-termica-r",
    nivel: "initiator",
    sursa: "STAS 1907/1 / C107",
    areCalculator: true,
    calculatorUrl: "/calculatoare/rezistenta-termica",
    
    continut: {
      scop: "Calculul rezistenței termice specifice a elementelor de construcție (pereți, acoperiș, podea) pentru evaluarea pierderilor de căldură.",
      
      formula: "R = Rsi + Σ(dj / λj) + Rse  [m²·K/W]",
      
      variabile: [
        { simbol: "R", definitie: "Rezistență termică totală", unitate: "m²·K/W" },
        { simbol: "Rsi", definitie: "Rezistență superficială interioară", unitate: "m²·K/W" },
        { simbol: "Rse", definitie: "Rezistență superficială exterioară", unitate: "m²·K/W" },
        { simbol: "dj", definitie: "Grosime strat j", unitate: "m" },
        { simbol: "λj", definitie: "Conductivitate termică strat j", unitate: "W/m·K" }
      ],
      
      exempluNumeric: {
        date: "Perete exterior: cărămidă 25cm (λ=0.6), polistiren 10cm (λ=0.04), tencuială 2cm (λ=0.8)",
        pasi: [
          "Rsi (perete) = 0.13 m²·K/W",
          "Rse (perete) = 0.04 m²·K/W",
          "Rcărămidă = 0.25 / 0.6 = 0.417 m²·K/W",
          "Rpolistiren = 0.10 / 0.04 = 2.500 m²·K/W",
          "Rtencuială = 0.02 / 0.8 = 0.025 m²·K/W",
          "Rtotal = 0.13 + 0.417 + 2.500 + 0.025 + 0.04",
          "Rtotal = 3.112 m²·K/W"
        ],
        rezultat: "R = 3.11 m²·K/W",
        verificare: "Pentru perete exterior C107/2005: Rmin = 1.8-2.4 m²·K/W. R=3.11 >> Rmin ✓"
      },
      
      observatii: [
        "Rsi: perete=0.13, acoperiș=0.10, podea=0.17 m²·K/W",
        "Rse: perete=0.04, acoperiș=0.04, podea=0.17 m²·K/W",
        "λ beton: 1.5-2.0, cărămidă: 0.6-0.8, BCA: 0.2-0.4 W/m·K",
        "λ izolații: polistiren EPS: 0.038-0.045, vată minerală: 0.035-0.045 W/m·K",
        "Punte termică: reduce R efectiv cu 10-30% dacă nu e tratată"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-T-002: Rezistență termică R
Instalații Termice | Nivel: Inițiator | STAS 1907/1 / C107
================================================================================

FORMULA
-------
R = Rsi + Σ(dj/λj) + Rse  [m²·K/W]

REZISTENȚE SUPERFICIALE
-----------------------
            Rsi     Rse
Perete:     0.13    0.04
Acoperiș:   0.10    0.04  
Podea:      0.17    0.17

CONDUCTIVITĂȚI λ [W/m·K]
------------------------
Betron:              1.5 - 2.0
Cărămidă plină:      0.6 - 0.8
Cărămidă GVP:        0.4 - 0.6
BCA:                 0.2 - 0.4
Beton celular:       0.15 - 0.25

IZOLAȚII (λ ≈ 0.04):
Polistiren EPS:      0.038 - 0.045
Polistiren XPS:      0.030 - 0.038
Vată minerală:       0.035 - 0.045
Vată de sticlă:      0.035 - 0.040
Spumă poliuretanică: 0.022 - 0.030

EXEMPLU: Perete cu polistiren
Rsi = 0.13
Cărămidă 25cm:  0.25/0.6 = 0.417
Polistiren 10cm: 0.10/0.04 = 2.500
Tencuială 2cm:   0.02/0.8 = 0.025
Rse = 0.04
---------------------------
R = 3.112 m²·K/W

NORMATIV C107 - Rmin [m²·K/W]:
Perete exterior:     1.8 - 2.4
Acoperiș:            2.5 - 3.5
Podea pe sol:        2.0 - 3.0
Podea peste beci:    1.5 - 2.0

================================================================================
`
  },
  
  {
    cod: "B-T-003",
    titlu: "Coeficienți de simultaneitate - Încălzire",
    slug: "coeficienti-simultaneitate-incalzire",
    nivel: "mediu",
    sursa: "STAS 1907/2 / SR EN 12831",
    areCalculator: false,
    
    continut: {
      scop: "Determinarea coeficienților de simultaneitate pentru dimensionarea centralelor termice și a conductelor de distribuție încălzire în funcție de numărul de elemente.",
      
      formula: "Qinstalatie = f × ΣQi  [W]",
      
      variabile: [
        { simbol: "f", definitie: "Coeficient de simultaneitate", unitate: "-" },
        { simbol: "ΣQi", definitie: "Suma necesarelor individuale", unitate: "W" },
        { simbol: "Qinstalatie", definitie: "Debit instalatie dimensionat", unitate: "W" },
        { simbol: "n", definitie: "Număr de elemente (radiatoare/apartamente)", unitate: "-" }
      ],
      
      exempluNumeric: {
        date: "Bloc 20 apartamente, Qmedie apartament = 800 W",
        pasi: [
          "ΣQi = 20 × 800 = 16.000 W",
          "Pentru n=20 apartamente, f = 0.85 (STAS 1907/2)",
          "Qinstalatie = 0.85 × 16.000 = 13.600 W",
          "Adaos 15% pierderi rețea: Qcentrala = 13.600 × 1.15 = 15.640 W",
          "Alegem centrală 16 kW sau 18 kW"
        ],
        rezultat: "Qdimensionat = 15.6 kW, centrală 16-18 kW",
        verificare: "f=0.85 pentru n=20 este conservator. SR EN 12831 poate da f=0.75-0.80."
      },
      
      observatii: [
        "f scade cu creșterea numărului de elemente (diversificare consum)",
        "Pentru n=1: f=1.0, n=10: f=0.9, n=50: f=0.75, n=100: f=0.65",
        "Normativul nou SR EN 12831 dă valori mai mici (mai economice)",
        "Întotdeauna adăugați rezervă pentru pierderi în rețea (10-20%)",
        "Pentru ACM, simultaneitatea este diferită (vezi B-S-001)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-T-003: Coeficienți de simultaneitate încălzire
Instalații Termice | Nivel: Mediu | STAS 1907/2 / SR EN 12831
================================================================================

FORMULA
-------
Qinstalatie = f × ΣQi  [W]

COEFICIENȚI f (STAS 1907/2)
-----------------------------
n = 1:    f = 1.00
n = 5:    f = 0.95
n = 10:   f = 0.90
n = 20:   f = 0.85
n = 30:   f = 0.80
n = 50:   f = 0.75
n = 100:  f = 0.65
n > 200:  f = 0.60

COEFICIENȚI f (SR EN 12831 - mai economici)
--------------------------------------------
n = 10:   f = 0.85
n = 20:   f = 0.78
n = 50:   f = 0.68
n = 100:  f = 0.60

EXEMPLU: Bloc 20 apartamente × 800 W = 16.000 W
Qinstalatie = 0.85 × 16.000 = 13.600 W
Pierderi rețea 15%: 13.600 × 1.15 = 15.640 W
Aleg centrală: 16 kW (sau 18 kW cu rezervă)

ADAOSURI OBLIGATORII
--------------------
Pierderi rețea distribuție:     10-15%
Pierderi rezervor acumulare:     5-10%
Pierderi generare (cos, cenușă): 5-10%

OBSERVAȚIE: Simultaneitatea ACM este diferită de cea încălzire!
Pentru ACM se folosește coeficientul de simultaneitate sanitar (STAS 1478).

================================================================================
`
  },
  
  {
    cod: "B-T-004",
    titlu: "Încălzire în pardoseală - Sarcină termică specifică",
    slug: "incalzire-pardoseala-sarcina",
    nivel: "mediu",
    sursa: "SR EN 1264 / C 107/5",
    areCalculator: true,
    calculatorUrl: "/calculatoare/pardoseala-caldura",
    
    continut: {
      scop: "Calculul sarcinii termice specifice și a temperaturilor de funcționare pentru instalații de încălzire în pardoseală cu apă.",
      
      formula: "qf = B × (θF - θi)^1.1  [W/m²]\nθF = θV - (θV - θR) × (1 - 1/B)",
      
      variabile: [
        { simbol: "qf", definitie: "Flux termic specific pardoseală", unitate: "W/m²" },
        { simbol: "B", definitie: "Factor de corecție strat suport", unitate: "-" },
        { simbol: "θF", definitie: "Temperatură medie suprafață pardoseală", unitate: "°C" },
        { simbol: "θi", definitie: "Temperatură interioară", unitate: "°C" },
        { simbol: "θV", definitie: "Temperatură tur", unitate: "°C" },
        { simbol: "θR", definitie: "Temperatură retur", unitate: "°C" }
      ],
      
      exempluNumeric: {
        date: "Cameră locuință, ti=20°C, strat suport beton 8cm deasupra țevii (B≈6.5)",
        pasi: [
          "Temperaturi de lucru: θV = 40°C, θR = 30°C",
          "θF = 40 - (40-30) × (1 - 1/6.5) = 40 - 10 × 0.846 = 31.5°C",
          "Verificare θF < 29°C pentru locuințe? Nu, dar acceptabil pentru baie",
          "Ajustăm: θV = 35°C, θR = 28°C",
          "θF = 35 - (35-28) × 0.846 = 35 - 5.9 = 29.1°C ≈ 29°C",
          "qf = 6.5 × (29 - 20)^1.1 = 6.5 × 9^1.1 = 6.5 × 11.1 = 72 W/m²"
        ],
        rezultat: "qf = 72 W/m², θV/θR = 35/28°C",
        verificare: "72 W/m² pentru locuință este suficient (necesar ~50-60 W/m²). θF=29°C confortabil."
      },
      
      observatii: [
        "θF maxim: 29°C locuințe, 35°C băi, 23°C dormitoare (confort)",
        "Factor B: beton 6-8, șapă 4-6, podea flotantă 2-4",
        "Diferență V-R: 5-10°C (optim 7-8°C)",
        "Pas țeavă: 10-30cm (15cm standard, 10cm băi, 20-30cm dormitoare)",
        "Înălțime strat de acoperire țeavă: min 3cm, preferabil 4-5cm"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-T-004: Încălzire în pardoseală - Sarcina specifică
Instalații Termice | Nivel: Mediu | SR EN 1264 / C 107/5
================================================================================

FORMULE
-------
qf = B × (θF - θi)^1.1  [W/m²]

θF = θV - (θV - θR) × (1 - 1/B)  [temperatură medie suprafață]

LIMITĂRI TEMPERATURĂ
--------------------
θF maxim:
- Dormitoare, living:    29°C (confort)
- Băi, bucătării:        35°C (permis)
- Săli cu perete vitrat:  23°C (evitare condens)

FACTOR B (strat suport)
-----------------------
Beton deasupra țevii 8cm:   B = 6.0 - 7.0
Șapă deasupra țevii 6cm:    B = 4.5 - 5.5
Podea flotantă deasupra:    B = 2.5 - 4.0

TEMPERATURI DE LUCRU TIPICE
----------------------------
Locuințe:        35/28°C  (ΔT=7°C)
Băi:             40/30°C  (ΔT=10°C)
Dormitoare:      32/26°C  (ΔT=6°C)

EXEMPLU: Cameră locuință, ti=20°C
Aleg: θV=35°C, θR=28°C, B=6.5
θF = 35 - (35-28) × (1-1/6.5) = 35 - 7×0.846 = 29.1°C
qf = 6.5 × (29.1-20)^1.1 = 6.5 × 11.2 = 73 W/m²

Verificare: 73 W/m² > 60 W/m² necesar ✓
           θF = 29.1°C ≈ 29°C limită (acceptabil)

DIMENSIONARE ȚEVI
-----------------
Diametru: 16×2, 17×2, 20×2 mm (PE-RT, PE-X, PB)
Pas:      10cm (băi), 15cm (standard), 20-30cm (dormitoare)
Lungime maxim circuit: 80-120m (incl. distribuție)

================================================================================
`
  },
  
  {
    cod: "B-T-005",
    titlu: "Centrală termică - Putere și debit",
    slug: "centrala-termica-putere-debit",
    nivel: "mediu",
    sursa: "SR EN 12831 / C 107/5",
    areCalculator: true,
    calculatorUrl: "/calculatoare/centrala-termica",
    
    continut: {
      scop: "Dimensionarea centralei termice (putere termică, debit) și a instalațiilor auxiliare (coș de fum, vas de expansiune).",
      
      formula: "P = Qincalzire + QACM + pierderi  [kW]\nG = P / (c × Δt)  [l/h]",
      
      variabile: [
        { simbol: "P", definitie: "Putere termică centrală", unitate: "kW" },
        { simbol: "Qincalzire", definitie: "Necesar încălzire", unitate: "kW" },
        { simbol: "QACM", definitie: "Necesar ACM instant", unitate: "kW" },
        { simbol: "G", definitie: "Debit volumic apă", unitate: "l/h" },
        { simbol: "c", definitie: "Căldură specifică apă", unitate: "Wh/kg·K (1.16)" },
        { simbol: "Δt", definitie: "Diferență temperatură tur-retur", unitate: "K sau °C" }
      ],
      
      exempluNumeric: {
        date: "Casa 120m²: Qincalzire = 8kW, QACM = 25kW (pentru 2 dușuri simultane)",
        pasi: [
          "Pierderi rețea încălzire: 10%",
          "Pierderi rezervor ACM: 10%",
          "Pincalzire = 8 × 1.10 = 8.8 kW",
          "Centrală condensare: Ptotal = 8.8 + 25 = 33.8 kW",
          "Alegem centrală 35 kW sau 24 kW cu boiler 100L",
          "Debit încălzire: Δt = 20K (70/50°C sau 60/40°C)",
          "G = 8800 / (1.16 × 20) = 8800 / 23.2 = 379 l/h = 0.105 l/s",
          "Debit ACM: GACM = 25000 / (1.16 × 25) = 862 l/h (Δt=25K, de la 10°C la 35°C)"
        ],
        rezultat: "Centrală 35 kW sau 24 kW + boiler 100L, Gincalzire = 380 l/h",
        verificare: "Centrală 35 kW acoperă ambele nevoi simultan. Varianta cu boiler este mai economică în funcționare."
      },
      
      observatii: [
        "Centralele în condensare: randament >90%, necesită coș special (inox)",
        "Centralele standard: randament 85-90%, coș normal",
        "PACM instant: 20-30 kW pentru 1 duș, 30-40 kW pentru 2 dușuri",
        "Boiler ACM: reduce puterea centrală la 20-24 kW, dar ocupă spațiu",
        "Vas expansiune: 8-12% din volum instalație încălzire"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-T-005: Centrală termică - Putere și debit
Instalații Termice | Nivel: Mediu | SR EN 12831 / C 107/5
================================================================================

FORMULA PUTERE
--------------
P = Qincalzire × (1 + pierderi) + QACM  [kW]

Pierderi rețea: 10-15%
Pierderi rezervor ACM: 10%

FORMULA DEBIT
-------------
G = P / (c × Δt)  [l/h]

c = 1.16 Wh/kg·K (căldură specifică apă)
ρ = 1 kg/l (densitate)

PUTERI TIPICE
-------------
Apartament 2 camere:     18 - 24 kW
Apartament 3-4 camere:   24 - 28 kW
Casă 100-150m²:          24 - 35 kW
Casă 150-250m²:          35 - 50 kW

PACM INSTANT (necesar pentru dușuri):
1 duș:    20 - 25 kW
2 dușuri: 30 - 40 kW
3 dușuri: 40 - 55 kW

ALTERNATIVĂ: Centrală mai mică + boiler ACM
Centrală 20-24 kW + boiler 100-200 L
Economie consum: 15-25% față de instant

EXEMPLU: Casă 120m²
Qincalzire = 8 kW
QACM instant (2 dușuri) = 25 kW
Pierderi 10%
P = 8 × 1.1 + 25 = 33.8 kW

Opțiunea 1: Centrală 35 kW în condensare
Opțiunea 2: Centrală 24 kW + boiler 100L (recomandat)

DEBIT ÎNCALZIRE (P=8.8kW, Δt=20K):
G = 8800 / (1.16 × 20) = 379 l/h

DEBIT ACM (P=25kW, Δt=25K):
G = 25000 / (1.16 × 25) = 862 l/h

================================================================================
`
  },
  
  {
    cod: "B-T-006",
    titlu: "Vas de expansiune - Volum și presiune",
    slug: "vas-expansiune-volum-presiune",
    nivel: "mediu",
    sursa: "STAS 1795 / SR EN 12828",
    areCalculator: true,
    calculatorUrl: "/calculatoare/vas-expansiune",
    
    continut: {
      scop: "Dimensionarea vasului de expansiune pentru compensarea dilatării apei în instalația de încălzire, prevenind suprapresiunile și golurile de aer.",
      
      formula: "Vn = Vs × (e/100) × (pmax + 1) / (pmax - pmin)  [l]",
      
      variabile: [
        { simbol: "Vn", definitie: "Volum nominal vas", unitate: "l" },
        { simbol: "Vs", definitie: "Volum apă instalație", unitate: "l" },
        { simbol: "e", definitie: "Dilatare relativă apă (%)", unitate: "%" },
        { simbol: "pmax", definitie: "Presiune maximă admisibilă", unitate: "bar" },
        { simbol: "pmin", definitie: "Presiune minimă (presiune umplere)", unitate: "bar" }
      ],
      
      exempluNumeric: {
        date: "Instalație casă: 8 radiatoare × 10l + 100m țeavă × 0.15l/m = 80 + 15 = 95l, Δt=70K (20→90°C)",
        pasi: [
          "Vs = 95 l (volum estimat instalație)",
          "Pentru Δt = 70K, e ≈ 2.6% (din tabel dilatare apă)",
          "pmax = 2.5 bar (presostat siguranță)",
          "pmin = 0.8 bar (presiune umplere, înălțime 8m)",
          "Vn = 95 × (2.6/100) × (2.5 + 1) / (2.5 - 0.8)",
          "Vn = 95 × 0.026 × 3.5 / 1.7",
          "Vn = 95 × 0.026 × 2.06 = 5.08 l",
          "Alegem vas 8 l (standard) sau 12 l (cu rezervă)"
        ],
        rezultat: "Vn calculat = 5.1 l, ales = 8-12 l",
        verificare: "Vas 8l >> 5.1l necesar. Presiune de preîncărcare 0.5-0.8 bar."
      },
      
      observatii: [
        "Volum apă instalație: radiatoare aluminiu/otel ~10-15l/kW, țevi ~0.1-0.3 l/m",
        "Dilatare apă: de la 20°C la 80°C, e ≈ 2.5-3.0%",
        "Vas deschis (în mansardă): vechi, fără presiune, necesită protecție îngheț",
        "Vas închis cu membrană: modern, presurizat, montaj oriunde",
        "Preîncărcare azot: 0.3-0.5 bar sub pmin"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-T-006: Vas de expansiune - Volum și presiune
Instalații Termice | Nivel: Mediu | STAS 1795 / SR EN 12828
================================================================================

FORMULA VAS ÎNCHIS (CU MEMBRANĂ)
---------------------------------
Vn = Vs × (e/100) × (pmax + 1) / (pmax - pmin)  [l]

DILATAREA APEI e [%]
---------------------
Δt=40K (20→60°C):   e = 1.0%
Δt=60K (20→80°C):   e = 2.0%  
Δt=70K (20→90°C):   e = 2.6%
Δt=80K (20→100°C):  e = 3.5%

VOLUM INSTALAȚIE Vs
-------------------
Radiatoare aluminiu/otel:  10-15 l/kW putere instalată
Radiatoare fontă:          15-25 l/kW
Țevi încălzire:            0.1-0.3 l/m (funcție de diametru)

PRESIUNI TIPICE
---------------
pmin (umplere):   0.5 - 1.0 bar (funcție de înălțime clădire)
pmax (siguranță): 2.0 - 3.0 bar (presostat sau supapă)
p0 (preîncărcare): 0.3 - 0.8 bar (azot în vas)

EXEMPLU: Casă cu 8 radiatoare
Vs = 8 × 10l + 100m × 0.15l/m = 95 l
Δt = 70K → e = 2.6%
pmax = 2.5 bar, pmin = 0.8 bar

Vn = 95 × 0.026 × (2.5+1) / (2.5-0.8)
Vn = 2.47 × 3.5 / 1.7 = 5.08 l

ALES: Vas 8 l (standard) sau 12 l (cu rezervă)

TIPURI DE VASE
--------------
Vas deschis (vechi):
  + Montaj simplu
  - Protecție îngheț (mansardă)
  - Aer în instalație
  - Evaporare apă

Vas închis cu membrană (modern):
  + Montaj oriunde
  + Fără aer în instalație
  + Fără evaporare
  - Verificare preîncărcare periodică

================================================================================
`
  }
];

export const listaTermice = breviareTermice.map(b => ({
  cod: b.cod,
  titlu: b.titlu,
  slug: b.slug,
  nivel: b.nivel,
  areCalculator: b.areCalculator
}));