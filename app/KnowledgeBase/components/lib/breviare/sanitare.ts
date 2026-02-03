// /app/knowledgebase/lib/breviare/sanitare.ts

import { Breviar } from "./types";

export const breviareSanitare: Breviar[] = [
  {
    cod: "B-S-001",
    titlu: "Debit sanitar - Calculul debitului de proiectare qc",
    slug: "debit-sanitar-qc",
    nivel: "initiator",
    sursa: "STAS 1478",
    areCalculator: true,
    calculatorUrl: "/calculatoare/debit-sanitar",
    
    continut: {
      scop: "Determinarea debitului de proiectare pentru dimensionarea conductelor de alimentare cu apă rece în clădiri, conform STAS 1478. Debitul qc asigură funcționarea simultană a obiectelor sanitare cu o probabilitate statistică.",
      
      formula: "qc = b × (a × c × √E + 0.004 × E)  [l/s]",
      
      variabile: [
        { simbol: "qc", definitie: "Debit de calcul (proiectare)", unitate: "l/s" },
        { simbol: "E", definitie: "Echivalent total de debit", unitate: "-" },
        { simbol: "a", definitie: "Coeficient regim furnizare (24h: 0.5, intermitent: 1.0)", unitate: "-" },
        { simbol: "b", definitie: "Coeficient temperatură (apă rece: 1.0, apă caldă: 0.7)", unitate: "-" },
        { simbol: "c", definitie: "Coeficient destinație (locuințe: 1.0, birouri: 0.8, școli: 0.6)", unitate: "-" }
      ],
      
      exempluNumeric: {
        date: "Apartament 2 camere cu: lavoar baie (0.35), chiuvetă bucătărie (1.0), WC (0.5), duș (1.0)",
        pasi: [
          "E1 = 0.35 + 1.0 + 0.5 + 1.0 = 2.85 (toate sunt baterii amestecătoare)",
          "E2 = 0 (nu există robineti doar apă rece)",
          "E = 0.7 × E1 + E2 = 0.7 × 2.85 = 1.995 ≈ 2.0",
          "a = 0.5 (regim 24h pentru locuințe)",
          "b = 1.0 (apă rece)",
          "c = 1.0 (destinație locuință)",
          "√E = √2.0 = 1.414",
          "qc = 1.0 × (0.5 × 1.0 × 1.414 + 0.004 × 2.0)",
          "qc = 1.0 × (0.707 + 0.008) = 0.715 l/s"
        ],
        rezultat: "qc = 0.715 l/s ≈ 0.72 l/s",
        verificare: "Pentru apartament 2 camere, valori tipice: 0.6-0.8 l/s. Rezultatul este în intervalul acceptat."
      },
      
      observatii: [
        "Echivalentul E se calculează: E = 0.7 × E1 + E2, unde E1 = baterii amestecătoare, E2 = robineti doar apă rece",
        "Debitul minim pentru un singur robinet este 0.1 l/s, indiferent de calcul",
        "Pentru 2 camere, E tipic = 1.8-2.5, qc = 0.6-0.8 l/s",
        "Pentru 3 camere, E tipic = 2.5-3.5, qc = 0.8-1.0 l/s",
        "Coeficientul b = 0.7 pentru apă caldă reduce debitul la 70% față de apă rece"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-S-001: Debit sanitar qc
Instalații Sanitare | Nivel: Inițiator | STAS 1478
================================================================================

FORMULA
-------
qc = b × (a × c × √E + 0.004 × E)  [l/s]

VARIABILE
---------
qc = debit de calcul [l/s]
E  = echivalent total de debit [-]
a  = coef. regim furnizare (24h: 0.5, intermitent: 1.0)
b  = coef. temperatură (rece: 1.0, caldă: 0.7)
c  = coef. destinație (locuințe: 1.0, birouri: 0.8)

ECHIVALENT E
------------
E = 0.7 × E1 + E2
E1 = Σ(baterii amestecătoare)
E2 = Σ(robineti doar apă rece)

TABEL ECHIVALENTE (e)
---------------------
Lavoar baterie      0.35
Chiuvetă bucătărie  1.00
WC cu rezervor      0.50
Duș baterie         1.00
Cada baterie        1.50
Bideu baterie       0.40
Mașină spălat       1.00

EXEMPLU: Apartament 2 camere
Lavoar + Chiuvetă + WC + Duș
E1 = 0.35 + 1.0 + 0.5 + 1.0 = 2.85
E = 0.7 × 2.85 = 2.0
qc = 1.0 × (0.5 × 1.0 × √2.0 + 0.004 × 2.0)
qc = 0.707 + 0.008 = 0.715 ≈ 0.72 l/s

VERIFICARE: 0.72 l/s ∈ [0.6, 0.8] ✓

OBSERVAȚII
----------
• qc minim pentru un robinet = 0.1 l/s
• Pentru apă caldă: înmulțește cu b = 0.7

================================================================================
portal-instalatii.vercel.app | calculator: /calculatoare/debit-sanitar
================================================================================`
  },
  
  {
    cod: "B-S-002",
    titlu: "Pierderi de sarcină - Calculul înălțimii necesare Hnec",
    slug: "pierderi-sarcina-hnec",
    nivel: "initiator",
    sursa: "STAS 1478 / NP 133",
    areCalculator: true,
    calculatorUrl: "/calculatoare/pierderi-sarcina",
    
    continut: {
      scop: "Determinarea înălțimii necesare de pompare pentru asigurarea presiunii de funcționare la ultimul consumator, verificând disponibilitatea hidraulică a rețelei.",
      
      formula: "Hnec = Hg + Δh + Hu  [mH₂O]",
      
      variabile: [
        { simbol: "Hnec", definitie: "Înălțime necesară de pompare", unitate: "mH₂O (m)" },
        { simbol: "Hg", definitie: "Înălțime geodezică (diferență nivel)", unitate: "m" },
        { simbol: "Δh", definitie: "Pierderi totale de sarcină (locale + distribuite)", unitate: "m" },
        { simbol: "Hu", definitie: "Presiune de utilizare la consumator", unitate: "mH₂O" },
        { simbol: "Δhd", definitie: "Pierderi distribuite (frecare în conducte)", unitate: "m" },
        { simbol: "Δhl", definitie: "Pierderi locale (fitinguri, armături)", unitate: "m" }
      ],
      
      exempluNumeric: {
        date: "Apartament la etajul 3 (9m), rețea cu Hdisp = 20m, Hg = 9m, Hu = 3m",
        pasi: [
          "Lungime conductă etaj 3: L = 12m",
          "Pierderi distribuite: i = 20 mmH₂O/m = 0.02 m/m",
          "Δhd = 12 × 0.02 = 0.24 mH₂O",
          "Pierderi locale: 2 coți (ξ=2×1.0), 2 tee (ξ=2×0.5), 1 robinet (ξ=0.5)",
          "Σξ = 2.0 + 1.0 + 0.5 = 3.5",
          "Δhl = 3.5 × v²/(2g) = 3.5 × (1.5)²/(2×9.81) ≈ 0.40 mH₂O",
          "Δh = 0.24 + 0.40 = 0.64 mH₂O",
          "Hnec = 9 + 0.64 + 3 = 12.64 mH₂O",
          "Verificare: Hdisp = 20m > Hnec = 12.64m ✓ Funcționează gravitațional"
        ],
        rezultat: "Hnec = 12.64 mH₂O",
        verificare: "Hdisp (20m) > Hnec (12.64m). Instalația funcționează fără pompă. Rezervă de presiune: 7.36m (36%)"
      },
      
      observatii: [
        "Dacă Hdisp < Hnec: necesară pompă de presiune sau hidrofor",
        "Pierderile locale se calculează: Δhl = Σξ × v²/(2g)",
        "Viteza economică în instalații: 0.8-1.5 m/s (max 2.0 m/s)",
        "Pierderile distribuite: Δhd = L × i, unde i = panta în m/m",
        "Se verifică și situația de incendiu dacă există hidranți interiori"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-S-002: Pierderi de sarcină Hnec
Instalații Sanitare | Nivel: Inițiator | STAS 1478 / NP 133
================================================================================

FORMULA
-------
Hnec = Hg + Δh + Hu  [mH₂O]

unde Δh = Δhd + Δhl

VARIABILE
---------
Hnec = înălțime necesară de pompare [mH₂O]
Hg   = înălțime geodezică [m]
Δh   = pierderi totale [mH₂O]
Hu   = presiune utilizare [mH₂O] (vezi tabel)

TABEL Hu (STAS 1478)
--------------------
Lavoar              2-3 m
Chiuvetă            2-3 m
WC rezervor         2-3 m
Duș                 3-5 m (preferat 5m)
Cada                3-5 m
Mașină spălat       5-10 m

PIERDERI DISTRIBUITE Δhd
------------------------
Δhd = L × i
i = panta [mmH₂O/m] sau [m/m]
Valori tipice i: 20-100 mmH₂O/m

PIERDERI LOCALE Δhl
-------------------
Δhl = Σξ × v²/(2g)
g = 9.81 m/s²
v = viteza în conductă [m/s]

TABEL ξ (coef. pierderi locale)
-------------------------------
Cot 90°             1.0
Cot 45°             0.5
Tee trecere         0.5
Tee derivatie       1.5
Robinet colțar      0.5
Robinet sferă       0.2-0.5
Reducție            0.3

EXEMPLU: Etaj 3, Hg = 9m
Δhd = 12m × 0.02 = 0.24 m
Σξ = 2 coți + 2 tee + robinet = 2 + 1 + 0.5 = 3.5
Δhl = 3.5 × 1.5²/(2×9.81) = 0.40 m
Δh = 0.64 m
Hnec = 9 + 0.64 + 3 = 12.64 mH₂O

DECIZIE: Hdisp (20m) > Hnec (12.64m) → Funcționează ✓

================================================================================
portal-instalatii.vercel.app
================================================================================`
  },
  
  {
    cod: "B-S-003",
    titlu: "Pierderi locale - Coeficienți ξ pentru fitinguri și armături",
    slug: "pierderi-locale-xi",
    nivel: "initiator",
    sursa: "STAS 1478 / Indicativ I9",
    areCalculator: false,
    
    continut: {
      scop: "Calculul rapid al pierderilor locale în instalații folosind coeficienții de rezistență hidraulică ξ pentru diverse elemente de montaj.",
      
      formula: "Δhl = Σ(ξ × v² / 2g)  [mH₂O]",
      
      variabile: [
        { simbol: "Δhl", definitie: "Pierderi locale totale", unitate: "mH₂O" },
        { simbol: "ξ", definitie: "Coeficient de pierdere locală", unitate: "-" },
        { simbol: "v", definitie: "Viteza medie în conductă", unitate: "m/s" },
        { simbol: "g", definitie: "Accelerație gravitațională", unitate: "m/s² (9.81)" }
      ],
      
      exempluNumeric: {
        date: "Tronson cu: 3 coți 90°, 1 tee derivatie, 2 robineti sferă, v = 1.2 m/s",
        pasi: [
          "ξ cot 90° = 1.0 → 3 × 1.0 = 3.0",
          "ξ tee derivatie = 1.5 → 1 × 1.5 = 1.5",
          "ξ robinet sferă = 0.3 → 2 × 0.3 = 0.6",
          "Σξ = 3.0 + 1.5 + 0.6 = 5.1",
          "v² = 1.44 m²/s²",
          "2g = 19.62 m/s²",
          "v²/(2g) = 1.44/19.62 = 0.0734 m",
          "Δhl = 5.1 × 0.0734 = 0.374 mH₂O"
        ],
        rezultat: "Δhl = 0.374 mH₂O ≈ 0.37 m (≈ 0.04 bar)",
        verificare: "Pierderile locale reprezintă ~30-50% din pierderile totale în instalații interioare. Valoare rezonabilă."
      },
      
      observatii: [
        "Pentru calcule rapide: v²/2g ≈ 0.05-0.15 m pentru viteze 1-1.7 m/s",
        "Coeficienții ξ cresc cu reducerea diametrului (efect mai pronunțat la DN15-DN20)",
        "Pentru fitinguri speciale, consultați cataloagele producătorilor",
        "La îmbinări prin sudură cap-la-cap: ξ ≈ 0.05 (neglijabil)",
        "La îmbinări filetate: ξ suplimentar 0.1-0.3 per filet"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-S-003: Pierderi locale ξ
Instalații Sanitare | Nivel: Inițiator | STAS 1478 / I9
================================================================================

FORMULA
-------
Δhl = Σ(ξ × v² / 2g)  [mH₂O]

unde v²/2g = presiune dinamică [m]

TABEL ξ COMPLET
---------------
Fitinguri generale:
┌─────────────────────┬───────┐
│ Element             │   ξ   │
├─────────────────────┼───────┤
│ Cot 90°             │  1.0  │
│ Cot 45°             │  0.5  │
│ Cot 90° lung        │  0.6  │
│ Cot 90° filetat     │  1.5  │
│ Tee trecere         │  0.5  │
│ Tee derivatie       │  1.5  │
│ Cruce               │  2.0  │
└─────────────────────┴───────┘

Armături:
┌─────────────────────┬───────┐
│ Robinet sferă       │  0.2-0.5│
│ Robinet colțar      │  0.5  │
│ Robinet ventil      │  3.0-5.0│
│ Robinet cu ventuze  │  0.2  │
│ Clapetă sens        │  2.0-4.0│
│ Filtru Y            │  1.0-2.5│
│ Apometru            │  0.5  │
└─────────────────────┴───────┘

Dilatări:
┌─────────────────────┬───────┐
│ Cot U compensare    │  1.5  │
│ Lira dilatare       │  2.0  │
│ Racord flexibil     │  0.3  │
└─────────────────────┴───────┘

EXEMPLU RAPID
-------------
v = 1.2 m/s → v²/2g = 0.073 m

3 coți 90°:     3 × 1.0 × 0.073 = 0.219 m
1 tee deriv:    1 × 1.5 × 0.073 = 0.110 m  
2 robineti:     2 × 0.3 × 0.073 = 0.044 m
─────────────────────────────────────
Δhl = 0.373 m ≈ 0.37 mH₂O

REGULĂ: Δhl ≈ (30-50%) × Δh_total

================================================================================
`
  },
  
  {
    cod: "B-S-004",
    titlu: "Dimensionare conducte - Diametru nominal DN",
    slug: "dimensionare-conducte-dn",
    nivel: "mediu",
    sursa: "STAS 1478 / STAS 1795",
    areCalculator: true,
    calculatorUrl: "/calculatoare/dimensionare-conducte",
    
    continut: {
      scop: "Determinarea diametrului nominal al conductelor în funcție de debit, viteză economică și pante admisibile, asigurând funcționare silențioasă și economică.",
      
      formula: "DN = f(Q, v, i)  [mm]",
      
      variabile: [
        { simbol: "DN", definitie: "Diametru nominal", unitate: "mm" },
        { simbol: "Q", definitie: "Debit de calcul", unitate: "l/s sau m³/h" },
        { simbol: "v", definitie: "Viteză de curgere", unitate: "m/s" },
        { simbol: "i", definitie: "Panta hidraulică", unitate: "mmH₂O/m sau ‰" },
        { simbol: "A", definitie: "Secțiune transversală", unitate: "mm²" }
      ],
      
      exempluNumeric: {
        date: "Debit qc = 0.72 l/s, viteză economică v = 1.0 m/s",
        pasi: [
          "Q = 0.72 l/s = 0.00072 m³/s",
          "A = Q/v = 0.00072/1.0 = 0.00072 m² = 720 mm²",
          "D = √(4A/π) = √(4×720/3.1416) = √916.7 = 30.3 mm",
          "Alegem DN32 (diamentru interior ~35mm pentru PEHD)",
          "Verificare viteză reală: v = 4Q/(π×D²) = 0.75 m/s",
          "Panta: pentru PEHD, λ ≈ 0.02, i = λ×v²/(2gD) = 0.02×0.75²/(2×9.81×0.035) = 0.016 m/m = 16 mmH₂O/m"
        ],
        rezultat: "DN = 32 mm, v_real = 0.75 m/s, i ≈ 16 mmH₂O/m",
        verificare: "v = 0.75 m/s ∈ [0.5, 1.5] m/s ✓ Economic și silențios"
      },
      
      observatii: [
        "Viteze recomandate: AAR: 0.5-1.5 m/s (max 2.0), ACM: 0.3-1.0 m/s (reducere zgomot)",
        "Diametre standard: 15, 20, 25, 32, 40, 50, 63, 75, 90, 110 mm",
        "Pante tipice: distribuție: 20-50 mmH₂O/m, coloane: 10-30 mmH₂O/m",
        "Pentru ACM, preferați DN mai mare pentru reducere zgomot cavitație",
        "Verificați întotdeauna viteza minimă de auto-curățire în canalizare (>0.6 m/s)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-S-004: Dimensionare conducte DN
Instalații Sanitare | Nivel: Mediu | STAS 1478 / 1795
================================================================================

PRINCIPIU
---------
A = Q/v  →  DN = √(4A/π)

VITEZE ECONOMICE
----------------
AAR:        0.5 - 1.5 m/s (max 2.0 pentru evitare zgomot)
ACM:        0.3 - 1.0 m/s (preferat 0.5-0.8)
Canalizare: 0.6 - 2.5 m/s (min 0.6 auto-curățire, max 2.5 abraziune)

DIAMETRE STANDARD
-----------------
PEHD:  16, 20, 25, 32, 40, 50, 63, 75, 90, 110
PPR:   20, 25, 32, 40, 50, 63, 75, 90, 110
Fonta:  50, 63, 75, 90, 100, 125, 150

CALCUL PAS CU PAS
-----------------
1. Q [l/s] → Q [m³/s] = Q/1000
2. A [m²] = Q/v (alege v economică)
3. D [m] = √(4A/π)
4. Aleg DN standard ≥ D calculat
5. Verific v_real = 4Q/(π×DN²)

EXEMPLU: Q = 0.72 l/s, v = 1.0 m/s
A = 0.00072/1.0 = 0.00072 m² = 720 mm²
D = √(4×720/3.1416) = 30.3 mm
Aleg DN32 (Di = 35mm PEHD)
v_real = 4×0.00072/(π×0.035²) = 0.75 m/s ✓

PANTE TIPICE
------------
Distribuție orizontală: 20-50 mmH₂O/m
Coloane verticale:      10-30 mmH₂O/m
Riser ACM:              5-15 mmH₂O/m

================================================================================
portal-instalatii.vercel.app | calculator: /calculatoare/dimensionare-conducte
================================================================================`
  },
  
  {
    cod: "B-S-005",
    titlu: "Presiune disponibilă vs necesară - Verificare funcționare",
    slug: "presiune-disponibila-necesara",
    nivel: "mediu",
    sursa: "STAS 1478 / NP 133",
    areCalculator: true,
    calculatorUrl: "/calculatoare/verificare-presiune",
    
    continut: {
      scop: "Verificarea rapidă dacă presiunea disponibilă în rețea (branșament sau hidrofor) este suficientă pentru funcționarea instalației, cu determinarea rezervei sau a necesarului de pompă.",
      
      formula: "ΔH = Hdisp - Hnec  [mH₂O]\nDacă ΔH ≥ 0: Funcționează gravitațional\nDacă ΔH < 0: Necesară pompă cu Hpompa ≥ |ΔH| + rezervă (10-20%)",
      
      variabile: [
        { simbol: "Hdisp", definitie: "Presiune disponibilă la branșament/pompă", unitate: "mH₂O" },
        { simbol: "Hnec", definitie: "Presiune necesară (din B-S-002)", unitate: "mH₂O" },
        { simbol: "ΔH", definitie: "Diferență disponibil - necesar", unitate: "mH₂O" },
        { simbol: "Hpompa", definitie: "Înălțime pompare necesară", unitate: "mH₂O" }
      ],
      
      exempluNumeric: {
        date: "Bloc P+4E, Hdisp rețea = 25 mH₂O, etajul 4 (15m), consumator critic",
        pasi: [
          "Etaj 4: Hg = 15 m",
          "Hnec etaj 4 (calculat): Hnec = 15 + 1.2 + 5 = 21.2 m",
          "ΔH = 25 - 21.2 = 3.8 m",
          "Rezervă: 3.8/21.2 = 18%",
          "Concluzie: Funcționează gravitațional cu rezervă mică",
          "Variantă etaj 5 (19m): Hnec = 19 + 1.5 + 5 = 25.5 m",
          "ΔH = 25 - 25.5 = -0.5 m → Necesar hidrofor pentru ultimul etaj"
        ],
        rezultat: "Până la etaj 4: funcționează. Etaj 5: necesar hidrofor H = 3-5 m",
        verificare: "Rezervă minim recomandată: 15-20% pentru fluctuații rețea. La limită pentru etaj 4."
      },
      
      observatii: [
        "Presiune rețea urbană tipică: 15-40 mH₂O (1.5-4 bar)",
        "Fluctuații rețea: ±20% din presiunea nominală",
        "Pentru clădiri înalte (>4 etaje): soluții cu rezervoare sau pompe de etaj",
        "Hidrofoare: asigură presiune constantă, dar necesită mentenanță",
        "Soluții fără pompe: rezervoare pe acoperiș, dar necesită spațiu și investiție"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-S-005: Presiune disponibilă vs necesară
Instalații Sanitare | Nivel: Mediu | STAS 1478 / NP 133
================================================================================

CRITERIU DE DECIZIE
-------------------
ΔH = Hdisp - Hnec

ΔH ≥ 0:  Funcționează gravitațional ✓
ΔH < 0:  Necesară pompă/hidrofor

REZERVĂ RECOMANDATĂ
-------------------
Rezervă ≥ 15-20% din Hnec
(ex: pentru Hnec = 20m, Hdisp minim = 24m)

PRESIUNI TIPICE REȚEA
---------------------
Urbană:         1.5 - 4.0 bar (15-40 mH₂O)
Rurală:         1.0 - 2.5 bar (10-25 mH₂O)
Fluctuație:     ±20% din valoare nominală

EXEMPLU 1: Funcționează
-----------------------
Hdisp = 30 m, etaj 2 (6m), Hnec = 6 + 0.8 + 3 = 9.8 m
ΔH = 30 - 9.8 = 20.2 m
Rezervă = 206% >> 20% ✓✓

EXEMPLU 2: La limită
--------------------
Hdisp = 20 m, etaj 4 (12m), Hnec = 12 + 1.0 + 5 = 18 m
ΔH = 20 - 18 = 2 m
Rezervă = 11% < 20% ⚠️ (funcționează, dar cu risc)

EXEMPLU 3: Nu funcționează
--------------------------
Hdisp = 15 m, etaj 3 (9m), Hnec = 9 + 0.8 + 5 = 14.8 m
ΔH = 15 - 14.8 = 0.2 m
Rezervă = 1% << 20% 
Soluție: Hidrofor H = 5-7 m (include rezervă)

SOLUȚII PENTRU PRESIUNE INSUFICIENTĂ
------------------------------------
1. Hidrofor pe coloană (etajele superioare)
2. Rezervor pe acoperiș + pompă de umplere
3. Pompa de presiune continuă
4. Presiune directă din rețea înălțată (rareori posibil)

================================================================================
`
  },
  
  {
    cod: "B-S-006",
    titlu: "Aparate de măsură și contorizare",
    slug: "aparate-masura-contorizare",
    nivel: "mediu",
    sursa: "NP 133 / Metrologice",
    areCalculator: false,
    
    continut: {
      scop: "Dimensionarea și amplasarea contoarelor de apă, apometrelor și altor instrumente de măsură în instalații sanitare.",
      
      formula: "Qnominal contor = (1.25-1.5) × Qmax utilizare  [m³/h]",
      
      variabile: [
        { simbol: "Qnominal", definitie: "Debit nominal contor", unitate: "m³/h" },
        { simbol: "Qmax", definitie: "Debit maxim de utilizare", unitate: "m³/h" },
        { simbol: "Qmin", definitie: "Debit minim măsurabil", unitate: "l/h" },
        { simbol: "T", definitie: "Durată funcționare", unitate: "ani" }
      ],
      
      exempluNumeric: {
        date: "Bloc 12 apartamente, qc per apartament = 0.8 l/s, simultaneitate",
        pasi: [
          "Qmax total = 12 × 0.8 l/s = 9.6 l/s = 34.56 m³/h",
          "Coef. simultaneitate pentru 12 consumatori: 0.4 (STAS)",
          "Qmax simultan = 34.56 × 0.4 = 13.82 m³/h",
          "Qnominal contor = 1.3 × 13.82 = 17.97 m³/h",
          "Alegem contor DN40, Qn = 20 m³/h, Qmax = 40 m³/h",
          "Verificare Qmin: 100 l/h pentru Qn=20, suficient pentru un apartament"
        ],
        rezultat: "Contor DN40, Qn = 20 m³/h, clasa B sau C",
        verificare: "Qn = 20 > 13.82 m³/h ✓, Qmax contor = 40 > 13.82 ✓"
      },
      
      observatii: [
        "Clase de precizie: A (±2%), B (±1%), C (±0.5%) - preferați B sau C pentru facturare",
        "Durată de viață: 8-12 ani, verificare metrologică la 4-5 ani",
        "Amplasare: 10D drepte înainte, 5D după contor (D = diametru)",
        "Pentru ACM: contoare cu mecanism uscat (resist la temperatură)",
        "Contorizare individuală: obligatorie în blocuri noi (legea 10/2021)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-S-006: Aparate de măsură și contorizare
Instalații Sanitare | Nivel: Mediu | NP 133 / Metrologice
================================================================================

ALEgERE CONTOR
--------------
Qnominal = (1.25-1.5) × Qmax utilizare  [m³/h]

CLASE DE PRECIZIE
-----------------
Clasa A:  ±2%  (uz intern, nefacturare)
Clasa B:  ±1%  (standard facturare)
Clasa C:  ±0.5% (înaltă precizie)

CARACTERISTICI CONTOR APA RECE
------------------------------
Tip:  multijet sau Woltman
DN:   15, 20, 25, 32, 40, 50, 80, 100, 150
Qn:   debit nominal [m³/h]
Qmax: 2×Qn (clasa B) sau 1.6×Qn (clasa C)
Qmin: debit minim măsurabil (0.03-0.05×Qn)

EXEMPLU: Bloc 12 apartamente
Qmax total = 12 × 0.8 l/s = 34.56 m³/h
Simultaneitate 12 consumatori: 0.4
Qmax simultan = 13.82 m³/h
Qnominal = 1.3 × 13.82 = 17.97 → Qn = 20 m³/h
Aleg: DN40, Qn=20, clasa B

CONDiȚII DE MONTAJ
------------------
Înainte contor:  10D drepte (D = diametru contor)
După contor:     5D drepte
Poziție:         orizontală, cadran în sus
Acces:           ușor pentru citire și întreținere
Protecție:       anti-îngheț, anti-șoc mecanic

CONTORIZARE INDIVIDUALĂ (Legea 10/2021)
----------------------------------------
Obligatorie în blocuri noi
Recomandată în reabilitări
Soluții: radio, M-Bus, LoRa, NB-IoT

================================================================================
`
  }
];

// Exportăm și lista simplificată pentru UI
export const listaSanitare = breviareSanitare.map(b => ({
  cod: b.cod,
  titlu: b.titlu,
  slug: b.slug,
  nivel: b.nivel,
  areCalculator: b.areCalculator
}));