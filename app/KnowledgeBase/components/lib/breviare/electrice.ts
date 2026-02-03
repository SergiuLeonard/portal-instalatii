// /app/knowledgebase/lib/breviare/electrice.ts

import { Breviar } from "./types";

export const breviareElectrice: Breviar[] = [
  {
    cod: "B-E-001",
    titlu: "Putere instalată și calculată - Coeficienți de utilizare",
    slug: "putere-instalata-calculata",
    nivel: "initiator",
    sursa: "Normativul I7 / SR HD 60364",
    areCalculator: true,
    calculatorUrl: "/calculatoare/putere-instalata",
    
    continut: {
      scop: "Determinarea puterii calculate pentru dimensionarea tablourilor electrice, conductoarelor și protecțiilor, folosind coeficienții de utilizare și simultaneitate.",
      
      formula: "Pc = Ku × Ks × Pi  [kW]\nS = Pc / cos φ  [kVA]",
      
      variabile: [
        { simbol: "Pc", definitie: "Putere calculată activă", unitate: "kW" },
        { simbol: "Pi", definitie: "Putere instalată totală", unitate: "kW" },
        { simbol: "Ku", definitie: "Coeficient de utilizare (0-1)", unitate: "-" },
        { simbol: "Ks", definitie: "Coeficient de simultaneitate (0-1)", unitate: "-" },
        { simbol: "S", definitie: "Putere aparentă", unitate: "kVA" },
        { simbol: "cos φ", definitie: "Factor de putere", unitate: "-" }
      ],
      
      exempluNumeric: {
        date: "Apartament: iluminat 500W, prize 3000W, boiler 2000W, mașină spălat 2200W",
        pasi: [
          "Pi = 0.5 + 3.0 + 2.0 + 2.2 = 7.7 kW",
          "Ku utilizat: iluminat 0.8, prize 0.3, boiler 0.8, MS 0.6",
          "Pi × Ku = 0.5×0.8 + 3.0×0.3 + 2.0×0.8 + 2.2×0.6 = 0.4 + 0.9 + 1.6 + 1.32 = 4.22 kW",
          "Ks pentru 4 circuite = 0.7 (I7)",
          "Pc = 4.22 × 0.7 = 2.95 kW",
          "cos φ = 0.9 (estimat)",
          "S = 2.95 / 0.9 = 3.28 kVA"
        ],
        rezultat: "Pc = 2.95 kW ≈ 3 kW, S = 3.3 kVA",
        verificare: "Branșament tipic apartament: 3-6 kW monofazat. Rezultat în interval normal."
      },
      
      observatii: [
        "Ku: iluminat 0.8-1.0, prize generale 0.2-0.4, HVAC 0.7-0.9, bucătărie 0.5-0.8",
        "Ks scade cu numărul circuite: 2 circuite 0.9, 5 circuite 0.6, 10+ circuite 0.4-0.5",
        "cos φ: iluminat LED 0.9-0.95, motoare 0.7-0.85, rezistive 1.0",
        "Pentru branșamente: Ia = S / (U × √3) trifazat, Ia = S / U monofazat",
        "Rezervă minimă pentru extinderi: 20-30% din Pc calculat"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-E-001: Putere instalată și calculată
Instalații Electrice | Nivel: Inițiator | I7 / SR HD 60364
================================================================================

FORMULE
-------
Pc = Ku × Ks × Pi  [kW]      (putere calculată)
S = Pc / cos φ  [kVA]        (putere aparentă)

COEFICIENȚI DE UTILIZARE Ku
-----------------------------
Iluminat LED:        0.8 - 1.0
Iluminat clasic:     0.9 - 1.0
Prize generale:      0.2 - 0.4
Prize bucătărie:     0.5 - 0.8
Aer condiționat:     0.7 - 0.9
Încălzire electrică: 0.8 - 1.0
Motoare mici:        0.6 - 0.8

COEFICIENȚI DE SIMULTANEITATE Ks
----------------------------------
2 circuite:          0.9
3-4 circuite:        0.7 - 0.8
5-7 circuite:        0.5 - 0.6
8-12 circuite:       0.4 - 0.5
>15 circuite:        0.3 - 0.4

FACTOR DE PUTERE cos φ
------------------------
Încărcări rezistive: 1.00 (boilere, radiatoare)
Iluminat LED:        0.90 - 0.95
Iluminat fluorescent:0.50 - 0.95 (cu compensare)
Motoare asincrone:   0.70 - 0.85
Aer condiționat:     0.80 - 0.90

EXEMPLU: Apartament
Iluminat 500W × 0.8 = 400W
Prize 3000W × 0.3 = 900W
Boiler 2000W × 0.8 = 1600W
Mașină spălat 2200W × 0.6 = 1320W
Suma = 4220 W

Ks = 0.7 (4 circuite)
Pc = 4.22 × 0.7 = 2.95 kW

cos φ = 0.9
S = 2.95 / 0.9 = 3.28 kVA

Branșament necesar: monofazat 3-4 kW (standard)

================================================================================
portal-instalatii.vercel.app
================================================================================`
  },
  
  {
    cod: "B-E-002",
    titlu: "Cădere de tensiune în conductoare - ΔU",
    slug: "cadere-tensiune-conductoare",
    nivel: "mediu",
    sursa: "Normativul I7 / SR HD 60364-5-52",
    areCalculator: true,
    calculatorUrl: "/calculatoare/cadere-tensiune",
    
    continut: {
      scop: "Verificarea secțiunii conductoarelor pentru limitarea căderii de tensiune, asigurând funcționarea corectă a receptoarelor și eficiență energetică.",
      
      formula: "Δu% = (2 × L × I × cos φ) / (γ × S × Un) × 100  [%]\nsau\nS = (2 × L × I × cos φ) / (γ × Δu% × Un / 100)  [mm²]",
      
      variabile: [
        { simbol: "Δu%", definitie: "Cădere de tensiune relativă", unitate: "%" },
        { simbol: "L", definitie: "Lungime conductă (dus-întors)", unitate: "m" },
        { simbol: "I", definitie: "Curent de calcul", unitate: "A" },
        { simbol: "γ", definitie: "Conductivitate material (Cu=58, Al=35)", unitate: "m/Ω·mm²" },
        { simbol: "S", definitie: "Secțiune conductă", unitate: "mm²" },
        { simbol: "Un", definitie: "Tensiune nominală (230V mf, 400V tf)", unitate: "V" }
      ],
      
      exempluNumeric: {
        date: "Circuit monofazat: L=25m, I=16A, cos φ=0.9, Cu, limită Δu=3%",
        pasi: [
          "γ cupru = 58 m/Ω·mm²",
          "Un = 230 V",
          "S necesar = (2 × 25 × 16 × 0.9) / (58 × 0.03 × 230)",
          "S = 720 / 400.2 = 1.8 mm²",
          "Alegem S = 2.5 mm² (standard minim pentru prize)",
          "Verificare Δu cu S=2.5: Δu% = (2×25×16×0.9)/(58×2.5×230) × 100",
          "Δu% = 720 / 33350 × 100 = 2.16%"
        ],
        rezultat: "S = 2.5 mm², Δu = 2.16% < 3% limită",
        verificare: "S=2.5mm² standard pentru circuite prize 16A. Cădere în limite."
      },
      
      observatii: [
        "Limite admise I7: iluminat 3%, alte circuite 5%, total branșament 0.5%",
        "Pentru distanțe mari (>30m) sau puteri mari, măriți secțiunea",
        "Cădere de tensiune mare = putere dissipată, încălzire conducte, energie irosită",
        "Cobre: γ=58, Aluminiu: γ=35 (cu 40% mai slab, secțiune cu 60% mai mare)",
        "Pentru circuite motorice cu pornire directă, verificați și la pornire (Istart = 5-7 In)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-E-002: Cădere de tensiune în conductoare
Instalații Electrice | Nivel: Mediu | I7 / SR HD 60364-5-52
================================================================================

FORMULA
-------
Δu% = (2 × L × I × cos φ) / (γ × S × Un) × 100  [%]

sau pentru aflare secțiune:
S = (2 × L × I × cos φ) / (γ × Δu% × Un / 100)  [mm²]

VARIABILE
---------
Δu%  = cădere tensiune procentual [%]
L    = lungime dus-întors [m]
I    = curent de calcul [A]
γ    = conductivitate [m/Ω·mm²]
     Cupru: 58, Aluminiu: 35
S    = secțiune [mm²]
Un   = tensiune nominală [V]
     Monofazat: 230V, Trifazat: 400V

LIMITE ADMISE (I7)
------------------
Iluminat:                    3%
Alte circuite (prize, etc):  5%
Total din branșament:        0.5% (doar pe coloană)

EXEMPLU: Circuit priză 16A, L=25m, cos φ=0.9
S = (2 × 25 × 16 × 0.9) / (58 × 0.03 × 230)
S = 720 / 400.2 = 1.8 mm²

ALES: 2.5 mm² (minim standard prize)

Verificare:
Δu% = 720 / (58 × 2.5 × 230) × 100
Δu% = 720 / 33350 × 100 = 2.16% < 3% ✓

REGULĂ PRACTICĂ
---------------
Distanțe maxime pentru S=2.5mm², 16A, Δu=3%:
- Monofazat 230V: ~35m
- Trifazat 400V: ~60m

Pentru distanțe mai mari: măriți secțiunea sau scădeți curentul.

================================================================================
`
  },
  
  {
    cod: "B-E-003",
    titlu: "Iluminat - Calcul flux luminos necesar",
    slug: "iluminat-flux-luminos",
    nivel: "mediu",
    sursa: "SR EN 12464-1 / NP 061-02",
    areCalculator: true,
    calculatorUrl: "/calculatoare/iluminat",
    
    continut: {
      scop: "Dimensionarea instalației de iluminat prin calculul fluxului luminos necesar pentru atingerea nivelului de iluminare cerut de normativ, în funcție de destinația încăperii.",
      
      formula: "Φtotal = (Em × A) / (U × MF)  [lm]\nn = Φtotal / Φlampa  [buc]",
      
      variabile: [
        { simbol: "Φtotal", definitie: "Flux luminos total necesar", unitate: "lm (lumeni)" },
        { simbol: "Em", definitie: "Iluminare medie cerută (normativ)", unitate: "lx" },
        { simbol: "A", definitie: "Suprafață iluminată", unitate: "m²" },
        { simbol: "U", definitie: "Factor de utilizare (0.3-0.6)", unitate: "-" },
        { simbol: "MF", definitie: "Factor de mentenanță (0.7-0.9)", unitate: "-" },
        { simbol: "Φlampa", definitie: "Flux luminos per lampă", unitate: "lm" },
        { simbol: "n", definitie: "Număr corpuri de iluminat", unitate: "buc" }
      ],
      
      exempluNumeric: {
        date: "Birou 5×4m=20m², Em=500lx (SR EN 12464), LED panel 3600lm, U=0.5, MF=0.8",
        pasi: [
          "Φtotal = (500 × 20) / (0.5 × 0.8) = 10000 / 0.4 = 25000 lm",
          "LED panel 60×60, Φ=3600 lm, P=36W",
          "n = 25000 / 3600 = 6.94 → 7 buc",
          "Verificare putere specifică: 7×36W = 252W, 252/20 = 12.6 W/m²",
          "Disponibil LED: 9 W/m² pentru birouri eficiente - poate optimizat",
          "Variantă: 6 panouri × 4000lm = 24000lm ≈ 25000lm, P=40W, 6×40=240W"
        ],
        rezultat: "7 panouri 3600lm sau 6 panouri 4000lm, P≈240-250W",
        verificare: "12 W/m² în limite normale (standard 10-15 W/m² LED pentru birou)."
      },
      
      observatii: [
        "Em normativ: birouri 500lx, școli 300-500lx, locuințe 100-300lx, industriale 200-1000lx",
        "U depinde de reflectanțe (tavan 0.7, pereți 0.5, podea 0.2) și indice cameră",
        "MF: curățare periodică 0.8, curățare rară 0.7, mediul praf 0.6",
        "LED modern: 100-150 lm/W, fluorescent: 60-90 lm/W, incandescent: 10-15 lm/W",
        "Evitați sub-iluminarea (oboseală) și supra-iluminarea (energie irosită)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-E-003: Iluminat - Flux luminos necesar
Instalații Electrice | Nivel: Mediu | SR EN 12464-1 / NP 061-02
================================================================================

FORMULE
-------
Φtotal = (Em × A) / (U × MF)  [lm]
n = Φtotal / Φlampa  [buc]

ILUMINARE MEDIE Em NORMATIVĂ [lx]
----------------------------------
Locuință - living:           100-200
Locuință - bucătărie/birou:  300-500
Locuință - baie:             200-300
Birouri - activitate normală: 500
Birouri - proiectare CAD:     750
Școli - săli clasă:          300-500
Săli de conferință:          500
Magazine - generale:         300
Magazine - vitrine:          750-1000
Industrie - precizie:        500-1000
Industrie - montaj general:  200-300

FACTOR DE UTILIZARE U (tipice)
--------------------------------
Încăpere mică, reflectanțe bune:  0.5 - 0.6
Încăpere medie, reflectanțe medii: 0.4 - 0.5
Încăpere mare, reflectanțe slabe:  0.3 - 0.4

FACTOR DE MENTENANȚĂ MF
------------------------
Curățare periodică (anuală):     0.8 - 0.9
Curățare rară (la 2-3 ani):      0.7 - 0.8
Mediu praf/ușor poluat:          0.6 - 0.7

EFICACITATE LUMINOASĂ [lm/W]
------------------------------
LED modern:        100 - 150
LED vechi:          80 - 100
Fluorescent T5/T8:  60 - 90
Compact fluorescent: 50 - 70
Incandescent:       10 - 15

EXEMPLU: Birou 20m², Em=500lx
Φtotal = (500 × 20) / (0.5 × 0.8) = 25000 lm
LED panel 3600lm: n = 25000/3600 = 6.94 → 7 buc
Putere: 7 × 36W = 252W (12.6 W/m²)

================================================================================
`
  },
  
  {
    cod: "B-E-004",
    titlu: "Protecții electrice - Curent nominal și declanșare",
    slug: "protectii-electrice-curent",
    nivel: "mediu",
    sursa: "Normativul I7 / SR HD 60364-4-43",
    areCalculator: true,
    calculatorUrl: "/calculatoare/protectii-electrice",
    
    continut: {
      scop: "Dimensionarea siguranțelor fuzibile și automatelor pentru protecția conductoarelor împotriva suprasarcinilor și scurtcircuitelor.",
      
      formula: "In ≤ Ib ≤ Iz\nI2 ≤ 1.45 × Iz\nIinstant ≥ k × Isc max",
      
      variabile: [
        { simbol: "In", definitie: "Curent nominal protecție", unitate: "A" },
        { simbol: "Ib", definitie: "Curent de exploatare (calculat)", unitate: "A" },
        { simbol: "Iz", definitie: "Curent admisibil conductor", unitate: "A" },
        { simbol: "I2", definitie: "Curent de declanșare siguranță", unitate: "A" },
        { simbol: "Isc", definitie: "Curent de scurtcircuit", unitate: "A" },
        { simbol: "k", definitie: "Coeficient de siguranță (1.5-2.5)", unitate: "-" }
      ],
      
      exempluNumeric: {
        date: "Circuit priză: S=2.5mm² Cu, Iz=20A în tub, Ib=14A (P=3.2kW monofazat)",
        pasi: [
          "Conditie 1: In ≤ Ib ≤ Iz → alegem In = 16A (standard) sau 20A",
          "Verificăm In=16A: 16 ≤ 14? Nu, 16 > 14. Alegem In=16A dacă Ib este estimat conservator",
          "Ib real = 3200/230 = 13.9A, poate varia până la 16A la încărcare maximă",
          "Alegem In = 16A (siguranță C16, caracteristică C pentru prize)",
          "Verificare I2: pentru automat C16, I2 ≈ 1.45×16 = 23.2A",
          "1.45×Iz = 1.45×20 = 29A, 23.2 ≤ 29 ✓",
          "Verificare scurtcircuit: Isc min la capăt circuit > 5×In pentru declanșare instantanee"
        ],
        rezultat: "Siguranță automată C16A, 2P, 6kA capacitate rupere",
        verificare: "In=16A protejează conductorul Iz=20A. Caracteristică C pentru circuite cu motoare mici."
      },
      
      observatii: [
        "Caracteristici automate: B (3-5 In), C (5-10 In), D (10-20 In) - alegeți C pentru prize",
        "Iz depinde de secțiune, izolație, mod de instalare (aer, tub, pământ)",
        "Curent admisibil 2.5mm²: ~20A în aer, ~16-20A în tub (depinde de temperatură)",
        "Pentru circuite motorice: In motor × 1.25 pentru protecție, pornitor separat pentru comandație",
        "Selectivitate: siguranța de pe circuit să declanșeze înaintea celei de pe coloană"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-E-004: Protecții electrice - Curent nominal
Instalații Electrice | Nivel: Mediu | I7 / SR HD 60364-4-43
================================================================================

CONDITII DE PROTECTIE
---------------------
1. In ≤ Ib ≤ Iz
2. I2 ≤ 1.45 × Iz

In  = curent nominal protecție [A]
Ib  = curent de exploatare [A]  
Iz  = curent admisibil conductor [A]
I2  = curet declanșare protecție (1.45×In pentru automate)

CURENȚI ADMISIBILI Iz [A] - Conductoare Cu, PVC, 30°C
------------------------------------------------------
Secțiune | În aer | În tub (2 conducte)
1.5 mm²  |   20   |     17-18
2.5 mm²  |   27   |     20-24  
4.0 mm²  |   36   |     27-32
6.0 mm²  |   46   |     34-41
10 mm²   |   63   |     46-57

CARACTERISTICI AUTOMATE
-------------------------
Tip B:  declanșare 3-5 × In  (iluminat, rezistive)
Tip C:  declanșare 5-10 × In (prize, motoare mici) ← STANDARD
Tip D:  declanșare 10-20× In (motoare mari, transformatoare)

EXEMPLU: Circuit priză 3.2kW, 2.5mm²
Ib = 3200/230 = 13.9 A
Iz = 20 A (în tub)
Aleg: In = 16 A (C16)

Verificări:
16 ≤ 13.9? Nu, dar Ib poate crește la 16A temporar
I2 = 1.45×16 = 23.2 A ≤ 1.45×20 = 29 A ✓

SELECTIVITATE
-------------
Circuit final:     C16 (viteză rapidă)
Distribuție:       C25/C32 (viteză normală)
Coloană generală:  NSX100 (viteză lentă, declanșare zona C)

================================================================================
`
  }
];

export const listaElectrice = breviareElectrice.map(b => ({
  cod: b.cod,
  titlu: b.titlu,
  slug: b.slug,
  nivel: b.nivel,
  areCalculator: b.areCalculator
}));