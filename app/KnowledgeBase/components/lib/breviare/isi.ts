// /app/knowledgebase/lib/breviare/isi.ts

import { Breviar } from "./types";

export const breviareISI: Breviar[] = [
  {
    cod: "B-I-001",
    titlu: "Hidranți interiori - Debit și presiune",
    slug: "hidranti-interiori-debit-presiune",
    nivel: "mediu",
    sursa: "NP 086-05 / SR EN 671-1",
    areCalculator: true,
    calculatorUrl: "/calculatoare/hidranti-interiori",
    
    continut: {
      scop: "Dimensionarea instalației de hidranți interiori pentru stingerea incendiilor, asigurând debitul și presiunea minimă la cel mai defavorabil hidrant.",
      
      formula: "Q = n × q × fs  [l/s]\nHnec = Hg + Δp + Hu + Hrez  [mH₂O]",
      
      variabile: [
        { simbol: "Q", definitie: "Debit total instalație", unitate: "l/s" },
        { simbol: "n", definitie: "Număr hidranți simultani", unitate: "-" },
        { simbol: "q", definitie: "Debit per hidrant", unitate: "l/s" },
        { simbol: "fs", definitie: "Factor siguranță (1.2-1.3)", unitate: "-" },
        { simbol: "Hnec", definitie: "Presiune necesară", unitate: "mH₂O" },
        { simbol: "Δp", definitie: "Pierderi de presiune în rețea", unitate: "mH₂O" },
        { simbol: "Hu", definitie: "Presiune de utilizare minimă", unitate: "mH₂O" }
      ],
      
      exempluNumeric: {
        date: "Clădire birouri P+5E, 3 hidranți/simultan, q=2.5 l/s, Hg=25m",
        pasi: [
          "n = 3 hidranți (NP 086 pentru birouri >4000m²)",
          "q = 2.5 l/s (tipic pentru hidranți interiori)",
          "fs = 1.2",
          "Q = 3 × 2.5 × 1.2 = 9 l/s = 32.4 m³/h",
          "Pierderi Δp: rețea hidranți L=150m, i=5% = 7.5 m",
          "Hu = 20 mH₂O (presiune minimă la hidrant, NP 086)",
          "Hrez = 5 mH₂O (rezervă)",
          "Hnec = 25 + 7.5 + 20 + 5 = 57.5 mH₂O"
        ],
        rezultat: "Q = 9 l/s, Hnec = 57.5 m, pompa 10-12 l/s, H=60-70m",
        verificare: "Debit tipic instalație hidranți: 2-4 hidranți × 2.5 l/s = 5-10 l/s. Rezultat în interval."
      },
      
      observatii: [
        "Număr hidranți simultani: locuințe 1, birouri 2-3, industriale 2-4, depozite 4-6",
        "Debit hidrant: 2.0 l/s (minim normativ), 2.5 l/s (standard), 3.0-5.0 l/s (clădiri înalte)",
        "Presiune minimă la robinet hidrant: 20 mH₂O (2 bar), maximă 60 mH₂O (6 bar)",
        "Timp de intervenție: max 5 minute de la alarmă până la apă la hidrant",
        "Rezervor incendiu: V = Q × T, T=30-60 minute de autonomie"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-I-001: Hidranți interiori - Debit și presiune
Instalații Siguranță la Foc | Nivel: Mediu | NP 086-05 / SR EN 671-1
================================================================================

FORMULE
-------
Q = n × q × fs  [l/s]
Hnec = Hg + Δp + Hu + Hrez  [mH₂O]

NUMĂR HIDRAȚI SIMULTANI (NP 086)
----------------------------------
Locuințe <4000m²:          1
Locuințe >4000m²:          2
Birouri/comerț:            2-3
Industriale ușoare:        2
Industriale pericol:       3-4
Depozite:                  4-6

DEBIT PER HIDRANT q [l/s]
-------------------------
Standard:                  2.5
Minim normativ:            2.0
Clădiri înalte:            3.0 - 5.0
Clădiri foarte înalte:     >5.0

PRESIUNI [mH₂O]
---------------
Minim la hidrant:          20  (2 bar)
Maxim la hidrant:          60  (6 bar)
Rezervă rețea:             5-10
Pierderi tipice rețea:     10-30%

FACTOR SIGURANȚĂ fs: 1.2 - 1.3

EXEMPLU: Birou P+5E
n = 3, q = 2.5 l/s, fs = 1.2
Q = 3 × 2.5 × 1.2 = 9 l/s

Hnec = 25m (geodezic) + 7.5m (pierderi) + 20m (utilizare) + 5m (rezervă)
Hnec = 57.5 mH₂O

POMPĂ: Q = 10-12 l/s, H = 60-70 m

REZERVOR INCENDIU
-----------------
V = Q × T [m³]
T = autonomie [ore]
Standard: 30-60 minute = 0.5-1 oră

V = 9 l/s × 3600 s × 0.75 h = 24.3 m³
Ales: 25 m³

================================================================================
`
  },
  
  {
    cod: "B-I-002",
    titlu: "Sprinklere - Densitate și arie de acoperire",
    slug: "sprinklere-densitate-arie",
    nivel: "avansat",
    sursa: "NP 086-05 / SR EN 12845",
    areCalculator: true,
    calculatorUrl: "/calculatoare/sprinklere",
    
    continut: {
      scop: "Dimensionarea sistemului automat de stingere cu sprinklere, determinând numărul de capete, debitul și presiunea necesare în funcție de pericolul de incendiu.",
      
      formula: "Q = D × A  [l/min]\nn = Aria_totală / Arie_sprinkler  [buc]",
      
      variabile: [
        { simbol: "Q", definitie: "Debit sistem sprinkler", unitate: "l/min" },
        { simbol: "D", definitie: "Densitate de aplicare", unitate: "mm/min sau l/min·m²" },
        { simbol: "A", definitie: "Arie de operare", unitate: "m²" },
        { simbol: "n", definitie: "Număr sprinklere în aria de operare", unitate: "buc" },
        { simbol: "Arie_sprinkler", definitie: "Suprafață protejată per capăt", unitate: "m²" }
      ],
      
      exempluNumeric: {
        date: "Depozit mărfuri generale, pericol mediu, tavan 8m, suprafață 2000m²",
        pasi: [
          "Clasificare pericol: OH2 (depozit mărfuri generale înălțime <7.5m)",
          "Densitate D = 5.0 mm/min = 5.0 l/min·m² (NP 086 tabel)",
          "Arie operare A = 144 m² (pentru OH2, sistem standard)",
          "Q = 5.0 × 144 = 720 l/min = 12 l/s",
          "Suprafață per sprinkler: 12 m² (pentru înălțime 8m, tipic)",
          "n = 144 / 12 = 12 sprinklere în aria de operare",
          "Debit per sprinkler: q = 720 / 12 = 60 l/min",
          "Presiune necesară: p = (q/K)², K=80 (factor sprinkler standard)",
          "p = (60/80)² = 0.56 bar = 5.6 mH₂O minim la cel mai defavorabil"
        ],
        rezultat: "Q=12 l/s, 12 sprinklere, q=60 l/min, p=0.56 bar minim",
        verificare: "Debit tipic sprinkler OH2: 10-20 l/s. Presiune la capăt tipică 0.5-1.0 bar."
      },
      
      observatii: [
        "Clase pericol: LH (ușor), OH (obișnuit 1-4), HHP (înalt pericol), depozite (ESFR)",
        "Densități: LH 2.25, OH1 3.0, OH2 5.0, OH3 7.5, OH4 10.0 mm/min",
        "Arii operare: LH 84m², OH 144-216m², HHP 260-300m²",
        "Factor K sprinkler: 80 (standard), 115 (mare debit), ESFR 200+",
        "Răspuns sprinkler: RTI <50 (rapid), 50-80 (standard), >80 (special)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-I-002: Sprinklere - Densitate și arie
Instalații Siguranță la Foc | Nivel: Avansat | NP 086-05 / SR EN 12845
================================================================================

FORMULE
-------
Q = D × A  [l/min]
n = Arie_operare / Suprafață_per_sprinkler  [buc]
q = Q / n  [l/min per sprinkler]
p = (q / K)²  [bar]

CLASE DE PERICOL
----------------
LH:  Light Hazard (locuințe, birouri, școli)
OH:  Ordinary Hazard (comerț, industrial ușor)
HHP: High Hazard Periculos (industrial periculos)

DENSITĂȚI D [mm/min = l/min·m²]
--------------------------------
LH:   2.25
OH1:  3.0
OH2:  5.0
OH3:  7.5
OH4:  10.0
HHP:  10.0+

ARII DE OPERARE A [m²]
----------------------
LH:    84
OH1:   144
OH2:   144-216
OH3:   216-260
OH4:   260-300

FACTOR K SPRINKLER
-------------------
K=80:   Standard (pendent/upright)
K=115:  Mare debit
K=200+: ESFR (Early Suppression Fast Response)

EXEMPLU: Depozit OH2
D = 5.0 mm/min, A = 144 m²
Q = 5.0 × 144 = 720 l/min = 12 l/s

Suprafață per sprinkler = 12 m² (la 8m înălțime)
n = 144 / 12 = 12 sprinklere

q = 720 / 12 = 60 l/min per sprinkler
p = (60/80)² = 0.56 bar minim la capăt

COMPONENTE SISTEM
-----------------
Rețea:  oțel zincat / cupru / PEHD (îngropat)
Pompa:  Q = debit calculat + rezervă 10%
Rezervor: 30-60 minute autonomie
Grup pompare: electric + diesel (backup) sau electric + electric

================================================================================
`
  },
  
  {
    cod: "B-I-003",
    titlu: "Rezervor incendiu - Volum și configurare",
    slug: "rezervor-incendiu-volum",
    nivel: "mediu",
    sursa: "NP 086-05 / SR EN 12845",
    areCalculator: true,
    calculatorUrl: "/calculatoare/rezervor-incendiu",
    
    continut: {
      scop: "Calculul volumului rezervorului de apă pentru incendiu, asigurând autonomia necesară pompelor de stingere până la intervenția pompierilor.",
      
      formula: "V = Q × T × 60  [m³]\nVmin = max(Vcalculat, Vnormativ)  [m³]",
      
      variabile: [
        { simbol: "V", definitie: "Volum rezervor", unitate: "m³" },
        { simbol: "Q", definitie: "Debit pompe incendiu", unitate: "m³/h sau l/s" },
        { simbol: "T", definitie: "Timp autonomie", unitate: "minute" },
        { simbol: "Vmin", definitie: "Volum minim normativ", unitate: "m³" },
        { simbol: "hs", definitie: "Înălțime sugeții", unitate: "m" },
        { simbol: "Vinv", definitie: "Volum inutilizabil (fund)", unitate: "m³" }
      ],
      
      exempluNumeric: {
        date: "Clădire birouri cu hidranți: Q=9 l/s=32.4 m³/h, sprinkler opțional Q=12 l/s",
        pasi: [
          "Sistem hidranți: Qh = 9 l/s = 32.4 m³/h",
          "Timp autonomie hidranți: Th = 60 minute (NP 086)",
          "Vh = 32.4 × 1 = 32.4 m³",
          "Sistem sprinklere: Qs = 12 l/s = 43.2 m³/h",
          "Timp autonomie sprinklere: Ts = 60 minute",
          "Vs = 43.2 × 1 = 43.2 m³",
          "Vtotal = max(Vh, Vs) = 43.2 m³",
          "Adaos 10% pierderi/evaporare: V = 43.2 × 1.1 = 47.5 m³",
          "Alegem V = 50 m³ (standard rezervor prefabricat)",
          "Verificare Vmin normativ: birouri P+5 <10000m², Vmin=50m³ ✓"
        ],
        rezultat: "V = 50 m³, rezervor din beton sau metalic prefabricat",
        verificare: "Volum tipic clădiri birouri: 25-100 m³. 50m³ în interval normal."
      },
      
      observatii: [
        "Timp autonomie: hidranți 30-60 min, sprinklere 60-90 min (clădiri înalte 90-120 min)",
        "Volum minim normativ: locuințe 25m³, birouri 25-50m³, industriale 50-200m³, depozite 100-1000m³",
        "Rezervor din beton: durabil, economic >50m³, dar necesită întreținere",
        "Rezervor metalic: rapid montaj, prefabricat, protecție anticorozivă necesară",
        "Volum inutilizabil: 0.5-1.0m (fund rezervor sub nivelul prizei pompei)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-I-003: Rezervor incendiu - Volum
Instalații Siguranță la Foc | Nivel: Mediu | NP 086-05 / SR EN 12845
================================================================================

FORMULĂ
-------
V = Q × T × (60/3600) = Q[l/s] × T[min] / 60  [m³]

sau cu Q în m³/h:
V = Q[m³/h] × T[h]  [m³]

TIMPI AUTONOMIE [minute]
-------------------------
Hidranti (clădiri mici):     30
Hidranti (clădiri normale):  60
Sprinklere standard:         60
Sprinklere clădiri înalte:   90-120
Depozite mari:              120+

VOLUME MINIME NORMATIVE [m³]
-----------------------------
Locuințe <4000m²:           25
Locuințe >4000m²:           50
Birouri/comerț <10000m²:    50
Birouri/comerț >10000m²:   100-200
Industrial ușor:            50-100
Industrial periculos:      100-200
Depozite:                  100-1000 (funcție de pericol)

EXEMPLU: Birou cu ambele sisteme
Hidranti:  Q = 9 l/s = 32.4 m³/h, T = 60 min
Vh = 32.4 × 1 = 32.4 m³

Sprinklere: Q = 12 l/s = 43.2 m³/h, T = 60 min
Vs = 43.2 × 1 = 43.2 m³

V = max(32.4, 43.2) = 43.2 m³
Adaos 10%: V = 47.5 m³
Ales: 50 m³ (standard)

TIPURI REZERVOARE
-----------------
Bet armat:        economic >30m³, durabil, montaj lung
Metalic:          rapid, prefabricat, <100m³ tipic
PEHD:             <50m³, fose, protecție mecanică necesară
Rezervor natural: lac, râu (filtrare necesară)

================================================================================
`
  }
];

export const listaISI = breviareISI.map(b => ({
  cod: b.cod,
  titlu: b.titlu,
  slug: b.slug,
  nivel: b.nivel,
  areCalculator: b.areCalculator
}));