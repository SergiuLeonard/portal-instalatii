// /app/knowledgebase/lib/breviare/gaze.ts

import { Breviar } from "./types";

export const breviareGaze: Breviar[] = [
  {
    cod: "B-G-001",
    titlu: "Debit gaze naturale - Calculul consumului",
    slug: "debit-gaze-naturale",
    nivel: "initiator",
    sursa: "Normativul I5 / SR EN 1775",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Determinarea debitului de gaze naturale necesar pentru alimentarea aparatelor de consum (centrale, boilere, aragazuri, etc.), considerând simultaneitatea și puterea calorifică.",
      
      formula: "Q = Σ(Pi × si) / Hi × fs  [m³/h]\nsau\nQ = Σ(Pi × si) / (Hi × η)  [m³/h]",
      
      variabile: [
        { simbol: "Q", definitie: "Debit volumic gaze", unitate: "m³/h" },
        { simbol: "Pi", definitie: "Putere calorifică aparat i", unitate: "kW" },
        { simbol: "si", definitie: "Coeficient simultaneitate aparat i", unitate: "-" },
        { simbol: "Hi", definitie: "Putere calorifică inferioară gaze", unitate: "kWh/m³ (≈10)" },
        { simbol: "fs", definitie: "Factor siguranță (1.1-1.2)", unitate: "-" },
        { simbol: "η", definitie: "Randament ardere (0.9-0.95)", unitate: "-" }
      ],
      
      exempluNumeric: {
        date: "Casă: centrală 24kW, boiler 100L (22kW), aragaz 4 ochiuri (7.5kW), cuptor electric separat",
        pasi: [
          "Puteri calorifice: centrală 24kW, boiler 22kW, aragaz 7.5kW",
          "Simultaneitate: centrală 1.0 (iarna), boiler 0.8, aragaz 0.5",
          "Putere simultană = 24×1.0 + 22×0.8 + 7.5×0.5 = 24 + 17.6 + 3.75 = 45.35 kW",
          "Hi = 10 kWh/m³ (gaze naturale tipice)",
          "Randament η = 0.9",
          "Q = 45.35 / (10 × 0.9) = 45.35 / 9 = 5.04 m³/h",
          "Verificare: consum specific 0.4-0.6 m³/h per kW instalat, 45.35×0.5=22.6, dar simultaneitate reduce"
        ],
        rezultat: "Q = 5.0 m³/h debit maxim simultan",
        verificare: "Contor gaze G4 (4 m³/h) ar fi insuficient, G6 (6 m³/h) sau G10 (10 m³/h) recomandat."
      },
      
      observatii: [
        "Coeficienți simultaneitate: încălzire 1.0, ACM 0.6-0.8, gătit 0.3-0.5, uscător 0.8",
        "Putere calorifică gaze: 9.5-11.5 kWh/m³ (funcție de compoziție, standard 10)",
        "Contoare: G1.6 (1.6m³/h), G2.5, G4, G6, G10, G16, G25 - alegeți Qmax > 1.2×Qcalculat",
        "Presiune alimentare: 20 mbar (joasă) sau 0.5-5 bar (medie) pentru instalații mari",
        "Legea gaze naturale 123/2012: obligativitatea branșamentelor și contorizării separate"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-001: Debit gaze naturale
Instalații Gaze | Nivel: Inițiator | I5 / SR EN 1775
================================================================================

FORMULA
-------
Q = Σ(Pi × si) / (Hi × η)  [m³/h]

sau simplificat:
Q ≈ Putere[kW] / 9  [m³/h] (pentru η=0.9, Hi=10)

VARIABILE
---------
Q   = debit gaze [m³/h]
Pi  = putere aparat i [kW]
si  = coeficient simultaneitate [-]
Hi  = putere calorifică gaze [kWh/m³]
    (gaze naturale: 9.5-11.5, standard 10)
η   = randament ardere (0.90-0.95)

COEFICIENȚI SIMULTANEITATE
----------------------------
Încălzire centrală:    1.0 (iarna), 0 (vara)
ACM (boiler):          0.6 - 0.8
Gătit (aragaz):        0.3 - 0.5
Uscător rufe gaze:     0.8
Șemineu:               0.5 - 0.8

TIPURI CONTOR (Qmax)
---------------------
G1.6:   1.6 m³/h  (apartament mic, doar aragaz)
G2.5:   2.5 m³/h  (apartament cu centrală)
G4:     4 m³/h    (casă mică)
G6:     6 m³/h    (casă medie, standard)
G10:   10 m³/h    (casă mare, 2 centrale)
G16:   16 m³/h    (imobil mic)
G25:   25 m³/h    (imobil mediu)

EXEMPLU: Casă modernă
Centrală 24kW × 1.0 = 24.0
Boiler 22kW × 0.8   = 17.6
Aragaz 7.5kW × 0.5  =  3.8
Total P = 45.4 kW

Q = 45.4 / (10 × 0.9) = 5.04 m³/h

ALES: Contor G6 sau G10

================================================================================
`
  },
  
  {
    cod: "B-G-002",
    titlu: "Pierderi de presiune în conducte de gaze",
    slug: "pierderi-presiune-gaze",
    nivel: "mediu",
    sursa: "Normativul I5 / SR EN 1775",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Verificarea secțiunii conductelor de gaze pentru asigurarea presiunii minime la aparate (≥17 mbar pentru joasă presiune), calculând pierderile de presiune în rețea.",
      
      formula: "Δp = Σ(ξ × ρ × v² / 2) + λ × (L/D) × (ρ × v² / 2)  [mbar]\nv = Q / (3600 × A)  [m/s]",
      
      variabile: [
        { simbol: "Δp", definitie: "Pierdere totală de presiune", unitate: "mbar" },
        { simbol: "ξ", definitie: "Coeficient rezistență locală", unitate: "-" },
        { simbol: "λ", definitie: "Coeficient frecare (Darcy)", unitate: "-" },
        { simbol: "L", definitie: "Lungime conductă echivalentă", unitate: "m" },
        { simbol: "D", definitie: "Diametru interior conductă", unitate: "m" },
        { simbol: "ρ", definitie: "Densitate gaze (≈0.7 kg/m³)", unitate: "kg/m³" },
        { simbol: "v", definitie: "Viteză de curgere", unitate: "m/s" },
        { simbol: "Q", definitie: "Debit în condiții normale", unitate: "m³/h" }
      ],
      
      exempluNumeric: {
        date: "Conductă gaz DN25 (Di=27mm), L=15m, Q=5m³/h, 3 coți, 2 robinete",
        pasi: [
          "A = π × (0.027)² / 4 = 0.000573 m²",
          "v = 5 / (3600 × 0.000573) = 5 / 2.06 = 2.42 m/s",
          "Verificare viteză: 2.42 < 10 m/s (maxim admis I5) ✓",
          "ρ = 0.7 kg/m³, ρv²/2 = 0.7 × 2.42² / 2 = 2.05 Pa = 0.0205 mbar",
          "Pierderi locale: 3 coți ξ=0.3, 2 robinete ξ=0.2, total ξ=1.3",
          "Δplocale = 1.3 × 0.0205 = 0.027 mbar",
          "λ pentru oțel (rugozitate 0.05mm, Re≈5000) ≈ 0.04",
          "Δpfrecare = 0.04 × (15/0.027) × 0.0205 = 0.46 mbar",
          "Δp total = 0.027 + 0.46 = 0.49 mbar",
          "Presiune disponibilă 20mbar - 0.49 = 19.51 > 17mbar minim ✓"
        ],
        rezultat: "Δp = 0.49 mbar, presiune la aparat 19.5 mbar > 17 mbar minim",
        verificare: "Pierderi sub 1 mbar pentru instalație interioară - în limite foarte bune."
      },
      
      observatii: [
        "Viteze maxime: interior 10 m/s, exterior 15-20 m/s (I5)",
        "Presiune minimă la aparat: 17 mbar (gaze naturale 20 mbar)",
        "Pierderi admisibile: <1 mbar pentru instalație interioară, <2.5 mbar total",
        "Conducte oțel: rugozitate 0.05mm, cupru: 0.0015mm (frecare mult mai mică)",
        "Diametre standard: 1/2\"(15mm), 3/4\"(20mm), 1\"(25mm), 1 1/4\"(32mm), 1 1/2\"(40mm)",
        "Formula Renouard simplificată pentru gaze: Δp = 1.35×10⁶ × Q¹·⁸²² × L / D⁴·⁸²²"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-002: Pierderi de presiune în conducte gaze
Instalații Gaze | Nivel: Mediu | I5 / SR EN 1775
================================================================================

FORMULA SIMPLIFICATĂ (Renouard)
--------------------------------
Δp = 1.35 × 10⁶ × Q^1.822 × L / D^4.822  [mbar]

unde:
Q = debit [m³/h]
L = lungime [m]
D = diametru interior [mm]

VITEZE ADMISE
-------------
Interior clădiri:    max 10 m/s
Exterior/aderență:   max 15-20 m/s
Minim recomandat:    0.5 m/s (evitare condens)

PRESIUNI CRITICE [mbar]
-----------------------
Presiune alimentare:     20 (joasă presiune)
Presiune minimă aparat:  17
Pierdere maximă admisă:   3 (interior), 5 (total)

COEFICIENȚI ξ TIPICI
--------------------
Cot 90°:         0.3
Cot 45°:         0.2
Robinet sferă:   0.1
Robinet dop:     0.3
Teu trecere:     0.2
Teu derivatie:   0.5
Reducție:        0.2

EXEMPLU: DN25, L=15m, Q=5m³/h
v = Q/(3600×A) = 2.42 m/s < 10 ✓

Δp ≈ 0.5 mbar (calcul detaliat)
Presiune rămasă: 20 - 0.5 = 19.5 mbar > 17 ✓

DIAMETRE COMERCIALE (interior aprox.)
--------------------------------------
1/2" (15mm):   Di ≈ 16 mm
3/4" (20mm):   Di ≈ 21 mm  
1"   (25mm):   Di ≈ 27 mm
1 1/4" (32mm): Di ≈ 35 mm
1 1/2" (40mm): Di ≈ 41 mm

================================================================================
`
  },
  
  {
    cod: "B-G-003",
    titlu: "Ventilație și aerisire pentru gaze naturale",
    slug: "ventilatie-aerisire-gaze",
    nivel: "initiator",
    sursa: "Normativul I5 / SR EN 1775 / C 92/2003",
    areCalculator: false,
    
    continut: {
      scop: "Dimensionarea necesarului de aer pentru arderea gazului și evacuarea produselor de ardere, asigurând siguranța împotriva acumulărilor de gaze și asfixierii.",
      
      formula: "Vevacuare = 3 × Vîncăpere  [m³/h]\nVardere = 0.6 × Pinstalată  [m³/h]\nSgrilă = V / (3600 × v)  [m²]",
      
      variabile: [
        { simbol: "Vevacuare", definitie: "Debit evacuare forțată/ naturală", unitate: "m³/h" },
        { simbol: "Vîncăpere", definitie: "Volum încăpere centralei", unitate: "m³" },
        { simbol: "Vardere", definitie: "Debit aer ardere teoretic", unitate: "m³/h" },
        { simbol: "Pinstalată", definitie: "Putere totală instalată gaze", unitate: "kW" },
        { simbol: "Sgrilă", definitie: "Secțiune grilă aerisire", unitate: "m²" },
        { simbol: "v", definitie: "Viteză trecere grilă (1-2 m/s)", unitate: "m/s" }
      ],
      
      exempluNumeric: {
        date: "Centrale termică în balcon închis: 3×2×2.5m=15m³, centrală 24kW, boiler 22kW",
        pasi: [
          "Volum încăpere = 15 m³",
          "Putere totală = 24 + 22 = 46 kW",
          "Evacuare produși ardere: Vevac = 3 × 15 = 45 m³/h (minimum normativ)",
          "Aer ardere necesar: Vard = 0.6 × 46 = 27.6 m³/h",
          "Grilă inferioară (aer proaspăt): S = 27.6 / (3600 × 1.5) = 0.0051 m² = 51 cm²",
          "Grilă superioară (evacuare): S = 45 / (3600 × 2) = 0.00625 m² = 62.5 cm²",
          "Standard minim: 100 cm² fiecare grilă (I5)",
          "Decizie: grilaje 10×10cm (100cm²) sau 15×10cm (150cm²) pentru siguranță"
        ],
        rezultat: "Grilaje 100-150 cm², evacuare 45 m³/h, coș de fum etanș",
        verificare: "I5 cere min 100cm² grilă inferioară și superioară pentru >20kW în încăpere închisă."
      },
      
      observatii: [
        "Centrale etanșe (room-sealed): nu necesită aer din încăpere (trage/elimina exterior)",
        "Centrale deschise: necesită 3m³/h evacuare per m³ încăpere, min 30m³/h",
        "Înălțime minimă încăpere: 2.2m, volum minim: 6m³ pentru centrale <20kW",
        "Grilaje: inferioară (<30cm de podea) pentru aer proaspăt, superioară (>1.8m) pentru evacuare",
        "Gazul natural este mai ușor decât aerul (0.7kg/m³ vs 1.2kg/m³), deci se acumulează sus",
        "Detectoare gaze: amplasate la >30cm de tavan, 1-4m de sursă potențială",
        "Interzis centrale deschise în baie sau dormitor (doar centrale etanșe cu acumulator)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-003: Ventilație și aerisire gaze
Instalații Gaze | Nivel: Inițiator | I5 / SR EN 1775
================================================================================

FORMULE
--------
Evacuare produși ardere:
Vevac = 3 × Vîncăpere [m³/h]  (minim 30 m³/h)

Aer ardere necesar:
Vard = 0.6 × Pinstalată [m³/h]

Secțiune grilă:
S = V / (3600 × v) [m²]
v = 1-2 m/s (viteză recomandată)

CONDENȘII OBLIGATORII (I5)
---------------------------
• Volum minim încăpere: 6 m³
• Înălțime minimă: 2.2 m
• Grilă inferioară: min 100 cm² (<30cm de podea)
• Grilă superioară: min 100 cm² (>1.8m înălțime)
• Distanță liberă laterală centrale: min 10 cm

TIPURI CENTRALE
---------------
1. Deschise (tradiționale):
   - Necesită aer din încăpere
   - Evacuare prin coș
   - 3m³/h per m³ încăpere

2. Etanșe (room-sealed):
   - Circuit închis exterior
   - Nu consumă aer din încăpere
   - Permise în băi/dormitoare (doar cu acumulator)

3. Condensare:
   - Randament >90%
   - Evacuare plastic (exterior)
   - Condens evacuat la canalizare

EXEMPLU: Balcon închis 15m³, 46kW
---------------------------------
Vevac = 3 × 15 = 45 m³/h
Vard = 0.6 × 46 = 27.6 m³/h

Sinf = 27.6/(3600×1.5) = 51 cm² → ales 100 cm²
Sevac = 45/(3600×2) = 62.5 cm² → ales 100 cm²

Rezultat: 2 grilaje 10×10cm

================================================================================
`
  },
  
  {
    cod: "B-G-004",
    titlu: "Dimensionarea conductelor de gaze după Renouard",
    slug: "dimensionare-conducte-renouard",
    nivel: "mediu",
    sursa: "Normativul I5 / SR EN 1775",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Determinarea diametrului necesar al conductelor de gaze pentru a asigura debitul maxim cu pierderi de presiune admisibile, folosind formula Renouard simplificată.",
      
      formula: "D = [ (1.35 × 10⁶ × Q¹·⁸²² × L) / Δp ]^(1/4.822)  [mm]\nsau invers:\nΔp = 1.35 × 10⁶ × Q¹·⁸²² × L / D⁴·⁸²²  [mbar]",
      
      variabile: [
        { simbol: "D", definitie: "Diametru interior conductă", unitate: "mm" },
        { simbol: "Q", definitie: "Debit maxim de calcul", unitate: "m³/h" },
        { simbol: "L", definitie: "Lungime conductă + echivalente locale", unitate: "m" },
        { simbol: "Δp", definitie: "Pierdere de presiune admisibilă", unitate: "mbar" },
        { simbol: "1.35×10⁶", definitie: "Coeficient pentru gaze naturale", unitate: "-" }
      ],
      
      exempluNumeric: {
        date: "Casă cu Q=5m³/h, Ltotal=25m (incl. echivalente), Δpadmis=1.5mbar",
        pasi: [
          "Date: Q=5, L=25, Δp=1.5",
          "D = [ (1.35×10⁶ × 5^1.822 × 25) / 1.5 ]^(1/4.822)",
          "5^1.822 = 19.4",
          "Numărător = 1.35×10⁶ × 19.4 × 25 = 654.75×10⁶",
          "D = (654.75×10⁶ / 1.5)^(0.207) = (436.5×10⁶)^0.207",
          "D = 23.4 mm diametru interior necesar",
          "Alegere: DN25 (Di=27mm) - cupru sau oțel",
          "Verificare inversă: Δp real = 1.35×10⁶ × 19.4 × 25 / 27^4.822 = 0.85 mbar < 1.5 ✓"
        ],
        rezultat: "D necesar ≈ 23mm → ales DN25 (27mm int)",
        verificare: "Cu DN25 pierdere reală 0.85mbar, suficient pentru rețea mai lungă sau debit viitor"
      },
      
      observatii: [
        "Formula valabilă pentru gaze naturale (densitate 0.65-0.75 kg/m³), presiune 20mbar",
        "Lungime echivalentă: Lreal + sumă(Lechivalente) unde un cot = 0.5-2m, robinet = 0.3-0.5m",
        "Debit simultan de calcul: Qcalcul = Qmax simultan × 1.1 (factor siguranță)",
        "Diametre standard: 15, 20, 25, 32, 40, 50 mm (vezi tabel interior/exterior)",
        "Pentru conducte PE (polietilenă): rugozitate diferită, consultați tabele specifice I5",
        "Pierdere maximă admisibilă: 2.5mbar de la branșament până la aparat (I5)",
        "Viteză economică: 3-6 m/s (optim consum energetic vs. zgomot)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-004: Dimensionare conducte gaze (Renouard)
Instalații Gaze | Nivel: Mediu | I5 / SR EN 1775
================================================================================

FORMULA RENOUARD SIMPLIFICATĂ
-----------------------------
D = [ (1.35×10⁶ × Q^1.822 × L) / Δp ]^(1/4.822)  [mm]

unde:
Q = debit [m³/h]
L = lungime echivalentă [m]
Δp = pierdere admisibilă [mbar]
D = diametru interior [mm]

LUNGIMI ECHIVALENTE (adăugate la Lreal)
----------------------------------------
Cot 90°:         +1.0 m
Cot 45°:         +0.5 m
Robinet sferă:   +0.3 m
Robinet dop:     +0.5 m
Teu derivatie:   +1.5 m
Reducție:        +0.3 m

DIAMETRE COMERCIALE (Di interior)
----------------------------------
Oțel:   15(13), 20(19), 25(25), 32(32), 40(39), 50(49) mm
Cupru:  15(13), 18(15), 22(20), 28(26), 35(33), 42(39) mm
PE:     20(16), 25(20), 32(26), 40(32), 50(40), 63(51) mm

PAȘI CALCUL
-----------
1. Determină Qmax simultan (vezi B-G-001)
2. Adaugă 10% factor siguranță → Qcalc
3. Estimează Ltotal = Lgeometric + echivalente
4. Alege Δpadmis (max 2.5mbar total)
5. Calculează Dnecesar
6. Rotunjește la diametru comercial superior
7. Verifică viteza: v = Q/(3600×π×D²/4) < 10m/s

EXEMPLU RAPID: Q=4m³/h, L=20m, Δp=2mbar
D = [1.35×10⁶ × 4^1.822 × 20 / 2]^0.207
D = [1.35×10⁶ × 12.1 × 10]^0.207 = 20.8 mm
ALES: DN25 (D=25mm) sau 22mm cupru

================================================================================
`
  },
  
  {
    cod: "B-G-005",
    titlu: "Verificarea etanșeității instalațiilor de gaze",
    slug: "verificare-etanșeitate-gaze",
    nivel: "initiator",
    sursa: "Normativul I5 / Legea 123/2012 / Ordin 163/2016",
    areCalculator: false,
    
    continut: {
      scop: "Procedura de verificare a etanșeității instalațiilor noi sau modificate, măsurarea presiunii de încercare și detectarea scăpărilor conform normativelor în vigoare.",
      
      formula: "Pîncercare = 1.5 × Pmax_exploatare  [bar]\nΔpadmis = 0.1 × Pîncercare  [%/oră]\nSau: Δp < 0.01 bar în 30 minute (pentru 4 bar)",
      
      variabile: [
        { simbol: "Pîncercare", definitie: "Presiune de încercare", unitate: "bar" },
        { simbol: "Pmax_exploatare", definitie: "Presiune maximă de lucru", unitate: "bar" },
        { simbol: "Δp", definitie: "Pierdere de presiune în timpul testului", unitate: "bar sau %" },
        { simbol: "T", definitie: "Durata testului", unitate: "minute" }
      ],
      
      exempluNumeric: {
        date: "Instalație nouă joasă presiune (20mbar=0.02bar) cu regulator",
        pasi: [
          "Presiune maximă după regulator: 0.02 bar (20 mbar)",
          "Pîncercare = 1.5 × 0.02 = 0.03 bar = 30 mbar (minim 100mbar practic)",
          "I5 recomandă minimum 100 mbar pentru JP (joasă presiune)",
          "Presiune de test efectivă: 1.0 bar (cu aer/azot)",
          "Timp de stabilizare: 30 minute, timp de observație: 30 minute",
          "Pierdere admisibilă: < 0.01 bar în 30 minute",
          "Test efectuat: 1.0 bar → după 30 min = 0.995 bar (Δp=0.005) < 0.01 ✓",
          "Verificare cu spumă la îmbinări: fără bule"
        ],
        rezultat: "Instalație etanșă, declarație de conformitate emisă",
        verificare: "Diferență de 5mbar în 30min < 10mbar admisibil → ETANȘ"
      },
      
      observatii: [
        "Presiuni de încercare: JP (joasă) = min 100mbar, MP (medie) = 1.5×Pexploatare, max 15bar",
        "Agent de test: aer comprimat sau azot (INTERZIS oxigen sau gaze combustibile)",
        "Durată test: stabilizare 30min, observație 30min pentru instalații <50m",
        "Detectare scăpări: soluție spumantă (săpun) sau detector electronic",
        "Volumul de încercare: întreaga instalație sau secțiuni izolate prin robinete",
        "Documentare: proces verbal de încercare, declarație de conformitate, schema instalației",
        "Verificare periodică obligatorie: la 10 ani pentru instalații interioare, la 5 ani pentru branșamente",
        "Utilizatorul are obligația de a permite accesul reprezentanților distribuitorului pentru verificări"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-005: Verificare etanșeitate gaze
Instalații Gaze | Nivel: Inițiator | I5 / Legea 123/2012
================================================================================

PRESIUNI DE ÎNCERCARE
---------------------
Joasă presiune (JP, 20mbar):   min 100 mbar (0.1 bar) sau 1.5×Pmax
Medie presiune (MP, 0.5-5bar): 1.5 × Pmax exploatare (max 15 bar)

PROCEDURA DE TEST
-----------------
1. Izolare: închide toate robinetele aparatelor
2. Conectare: manometru calibrat (clasa 0.6 sau mai bun)
3. Umplere: cu aer/azot până la Pîncercare
4. Stabilizare: așteaptă 30 minute (compensare termică)
5. Observație: monitorizează 30 minute
6. Acceptare: Δp < 0.01 bar (JP) sau <1%/oră

CRITERII DE ETANȘEITATE
------------------------
JP (test la 1 bar):
  • Diferență < 0.01 bar în 30 min = ETANȘ
  • Diferență > 0.01 bar = SCĂPĂRI → reparații + retest

MP (test la Pîncercare):
  • Pierdere < 1% pe oră = ETANȘ
  • Pierdere > 1% = NEEȘANȘ

DETECTARE SCĂPĂRI
-----------------
• Metoda spumei: soluție săpun aplicată pe îmbinări
• Detector electronic: pentru cantități mici (ppm)
• Soluții spray comerciale (nu degresante!)

DOCUMENTARE OBLIGATORIE
------------------------
□ Proces verbal de încercare la presiune
□ Declarație de conformitate (furnizor/instalator)
□ Schema instalației semnată de proiectant
□ Certificat de racordare (emis de distribuitor)

PERIODICITATE VERIFICĂRI
-------------------------
Instalații interioare:       la 10 ani
Branșamente/contoare:        la 5 ani
Aparate de ardere:           anual (de utilizator)

================================================================================
`
  },
  
  {
    cod: "B-G-006",
    titlu: "Evacuarea produselor de ardere - Coșuri de fum",
    slug: "evacuare-produse-ardere-cosuri",
    nivel: "mediu",
    sursa: "Normativul I5 / C 92/2003 / SR EN 13384",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Dimensionarea coșurilor de fum pentru evacuarea sigură a produselor de ardere, asigurarea tirajului natural și prevenirea condensului.",
      
      formula: "S = Qgaze / (3600 × v)  [m²]\nv = √[2×g×H×(ρaer-ρgaze)/ρgaze]  [m/s]\nHmin = 0.5 + 0.05×P[kW]  [m]",
      
      variabile: [
        { simbol: "S", definitie: "Secțiune minimă coș de fum", unitate: "cm² sau m²" },
        { simbol: "Qgaze", definitie: "Debit gaze arse", unitate: "m³/h" },
        { simbol: "v", definitie: "Viteză în coș (recomandat 3-6 m/s)", unitate: "m/s" },
        { simbol: "H", definitie: "Înălțime coș deasupra aparatului", unitate: "m" },
        { simbol: "g", definitie: "Accelerație gravitațională", unitate: "9.81 m/s²" },
        { simbol: "ρ", definitie: "Densitate (aer≈1.2, gaze≈0.8 kg/m³)", unitate: "kg/m³" }
      ],
      
      exempluNumeric: {
        date: "Centrală 24kW în condensare, cos vertical exterior",
        pasi: [
          "Debit gaze arse ≈ 30-35 m³/h per kW pentru centrale convenționale",
          "Pentru condensare: debit redus, dar temperatură joasă (50-60°C)",
          "Secțiune necesară: S = 30 m³/h / (3600 × 4 m/s) = 0.00208 m² = 20.8 cm²",
          "Diametru echivalent: d = √(4×20.8/π) = 5.1 cm",
          "Alegere standard: Ø80mm (S=50cm²) pentru centrale până la 35kW",
          "Înălțime minimă: H = 0.5 + 0.05×24 = 1.7m deasupra centralei",
          "Total coș: 1.7m + înălțimea centralei (0.8m) = 2.5m minim",
          "Pentru condensare: obligatoriu material inox sau PP (acid sulfuric în condens)"
        ],
        rezultat: "Coș Ø80mm, H=2.5m, materiale rezistente la condens",
        verificare: "Secțiune 50cm² > 20.8cm² necesar, viteză reală ~1.7m/s (acceptabil pentru condensare)"
      },
      
      observatii: [
        "Coșuri pentru gaze naturale: etanșe, din inox AISI 316L sau aluminiu anodizat",
        "Centrale convenționale (non-condensare): temperaturi 120-180°C, cos metalic sau ceramic",
        "Centrale condensare: pH condens 3-4 (acid), obligatoriu inox 316L, PP sau PVC special",
        "Diametre standard: Ø80 (până la 30kW), Ø100 (30-50kW), Ø130 (50-80kW)",
        "Înălțime maximă fără ajutor tiraj: 15-20m (pierderi de presiune prea mari)",
        "Coșurile evacuare prin perete (orizontale): max 1m orizontal, apoi vertical",
        "Interzis: racordarea mai multor aparate la același coș fără calcul de verificare",
        "Verificare tiraj: cu anemometru, minim 1-2 m/s în coș la funcționare"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-006: Coșuri de fum și evacuare gaze arse
Instalații Gaze | Nivel: Mediu | I5 / C 92/2003
================================================================================

DIMENSIONARE SECȚIUNE
---------------------
S = Qgaze / (3600 × v)  [m²]

v = viteză recomandată:
  • Centrale convenționale: 3-6 m/s
  • Centrale condensare: 1-3 m/s (risc condens)

Qgaze ≈ 25-35 m³/h per kW (funcție de randament)

DIAMETRE STANDARD (secțiune circulară)
---------------------------------------
Ø80mm  (50cm²):   până la 25-30 kW
Ø100mm (78cm²):   30-50 kW  
Ø130mm (132cm²):  50-80 kW
Ø150mm (176cm²):  80-120 kW

ÎNĂLȚIME MINIMĂ COȘ
-------------------
Hmin = 0.5 + 0.05 × P[kW]  [m]

Exemple:
  • 24kW: Hmin = 0.5 + 1.2 = 1.7m deasupra aparatului
  • 35kW: Hmin = 0.5 + 1.75 = 2.25m

MATERIALE PERMISE
-----------------
Convenționale (120-180°C):
  • Inox AISI 304/316
  • Aluminiu anodizat
  • Ceramică / Cărămidă

Condensare (50-90°C, acid):
  • Inox AISI 316L (obligatoriu L - low carbon)
  • Polipropilenă (PP) special
  • PVC special
  • INTERZIS: aluminiu, oțel zincat, ceramică obișnuită

REGULI DE MONTAJ
----------------
• Minim 5cm față de materiale combustibile
• Izolație termică în trecerea prin structuri
• Pantă de scurgere condens (1-2° spre centrală)
• Inspectie și curățare: trepiede la fiecare etaj
• Capac terminal: anti-vânt, anti-păsări

================================================================================
`
  },
  
  {
    cod: "B-G-007",
    titlu: "Amplasarea detectoarelor de gaze",
    slug: "detectoare-gaze-amplasare",
    nivel: "initiator",
    sursa: "Normativul I5 / SR EN 50194 / Legea 123/2012",
    areCalculator: false,
    
    continut: {
      scop: "Determinarea pozițiilor optime pentru detectoarele de gaz metan și monoxid de carbon, pentru detectarea timpurie a scăpărilor și protecția locatarilor.",
      
      formula: "Gaze naturale (metan): densitate 0.65 kg/m³ → detector la înălțime\nCO: densitate 1.25 kg/m³ → detector la 1.5m sau jos\nDistanță maximă: 4-6m de sursă, 8m între detectoare",
      
      variabile: [
        { simbol: "Hdetector", definitie: "Înălțime montaj față de tavan", unitate: "m sau cm" },
        { simbol: "Dsursa", definitie: "Distanță de sursa potențială", unitate: "m" },
        { simbol: "Dmax", definitie: "Distanță maximă acoperire", unitate: "m" }
      ],
      
      exempluNumeric: {
        date: "Bucătărie 3×4m cu centrală gaz pe perete și aragaz",
        pasi: [
          "Metan (CH4): mai ușor decât aer (0.65 < 1.2) → urcă, acumulare sus",
          "Poziție detector gaz: la 10-30cm de tavan, maxim 30cm de colțuri",
          "Distanță de aragaz: min 1m, max 4m (evitare falsă declanșare de la flacără)",
          "Distanță de centrală: min 1m, max 4m",
          "Detector CO: la 1.0-1.5m înălțime (domeniu respirație), 1-3m de aparat",
          "Bucătăria este 3×4m, deci UN detector de gaz este suficient (acoperire 40-60m²)",
          "Poziție optimă: centrul tavanului sau 30cm de tavan pe peretele cu centrale",
          "Verificare: evitat deasupra aragazului (abur, grăsime), evitat curenți de aer"
        ],
        rezultat: "1 detector gaz la 30cm de tavan, 1 detector CO la 1.5m înălțime",
        verificare: "Distanțe 1-4m de surse, acoperire completă încăpere 12m²"
      },
      
      observatii: [
        "Gaz metan (natural): detector în partea SUPERIOARĂ a încăperii (la tavan)",
        "Gaz petrolier lichefiat (GPL): detector în partea INFERIOARĂ (jos, 15-30cm de podea)",
        "Monoxid de carbon: la 1.0-1.5m (nivel respirație), nu la tavan!",
        "Distanțe: min 1m de sursă (evitare fals), max 4-6m de sursă, max 8m între detectoare",
        "Evita: curenți de aer, aburi (chiuvetă, aragaz direct), temperaturi extreme (<5°C, >40°C)",
        "Obligativitate: detectoare de gaz în încăperi cu aparate de ardere deschise (I5)",
        "Conectare: la rețeaua electrică cu baterie backup sau baterie 10 ani",
        "Semnal: acustic >85dB și optic, opțional transmisie la telefon/distribuitor"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-G-007: Detectoare de gaze - Amplasare
Instalații Gaze | Nivel: Inițiator | I5 / SR EN 50194
================================================================================

PRINCIPIU FIZIC
---------------
Gaz natural (metan):    0.65 kg/m³ → URCĂ (sus)
GPL (butan/propan):     1.8-2.0 kg/m³ → COBORÂ (jos)  
CO (monoxid):           1.25 kg/m³ → nivel mediu

POZIȚII MONTAJ
--------------
METAN (la tavan):
  • 10-30 cm sub tavan
  • Maxim 30 cm de colțuri
  • Maxim 3m de perete lateral

GPL (jos):
  • 15-30 cm deasupra pardoselii
  • Nu sub mobilier
  • Aproape de sursă (sobă, butelie)

CO (nivel respirație):
  • 1.0 - 1.5 m înălțime
  • Minim 1m de aparat
  • Maxim 3m de aparat

DISTANȚE ȘI ACOPERIRE
---------------------
• Distanță sursă: 1-4 m (optim 2-3m)
• Acoperire: 40-60 m² per detector
• Distanță între detectoare: max 8m

ZONE INTERZISE/ EVITARE
-----------------------
× Deasupra aragazului (abur, grăsime)
× Lângă uși/ferestre (curenți)
× Lângă ventilatoare (turbulențe)
× În colțuri (stagnează aerul)
× Sub 5°C sau peste 40°C

OBLIGATIVITĂȚI LEGALE (I5)
---------------------------
□ Apartament cu centrală deschisă: 1 detector gaz + 1 CO
□ Casă: detector pe fiecare nivel + lângă dormitoare
□ Garaj cu încălzire gaz: detector gaz + ventilație forțată

TESTARE
-------
Buton test lunar
Recalibrare la 5 ani sau conform certificat

================================================================================
`
  }
];