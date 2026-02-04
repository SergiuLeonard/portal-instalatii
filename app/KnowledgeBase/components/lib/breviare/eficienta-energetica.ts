import { Breviar } from "./types";

export const breviareEficientaEnergetica: Breviar[] = [
  {
    cod: "B-E-001",
    titlu: "Bilanț energetic și consum specific clădire",
    slug: "bil energetic-consum-specific",
    nivel: "mediu",
    sursa: "Directivei EPBD / SR EN ISO 52000 / Legea 372/2005",
    areCalculator: true,
    calculatorUrl: "/calculatoare/bilant-energetic",
    
    continut: {
      scop: "Calculul consumului specific de energie primară și finală pentru clădiri (kWh/m²/an), determinarea clasei energetice și identificarea măsurilor de eficiență.",
      
      formula: "Ef = Qincalzire + Qapa + Qracire + Qventilatie + Qiluminat [kWh/an]\nEp = Ef × fp [kWh primar/an]\nEspecific = Ep / Aincalzita [kWh/m²an]\nfp = factor de conversie în energie primară (2.1 electric, 1.0 gaze, 0.8 biomasă)",
      
      variabile: [
        { simbol: "Ef", definitie: "Energia finală consumată", unitate: "kWh/an" },
        { simbol: "Ep", definitie: "Energia primară", unitate: "kWh/an" },
        { simbol: "Especific", definitie: "Consum specific raportat la suprafață", unitate: "kWh/m²an" },
        { simbol: "fp", definitie: "Factor de conversie energie primară", unitate: "-" },
        { simbol: "A", definitie: "Suprafață utilă încălzită/răcită", unitate: "m²" },
        { simbol: "Q", definitie: "Consum pe categorie de utilizare", unitate: "kWh/an" }
      ],
      
      exempluNumeric: {
        date: "Clădire birouri 1000m² P+3E, încălzire gaze, răcire electric, apă caldă solar+punct termic",
        pasi: [
          "Încălzire: 80 kWh/m²an × 1000m² = 80,000 kWh (gaze, fp=1.0) → 80,000 kWh primar",
          "Apă caldă: 20 kWh/m²an × 1000 = 20,000 kWh (50% solar fp=0, 50% gaze fp=1) → 10,000 kWh primar",
          "Răcire: 25 kWh/m²an × 1000 = 25,000 kWh (electric, fp=2.1) → 52,500 kWh primar",
          "Ventilație: 15 kWh/m²an × 1000 = 15,000 kWh (electric, fp=2.1) → 31,500 kWh primar",
          "Iluminat: 25 kWh/m²an × 1000 = 25,000 kWh (electric, fp=2.1) → 52,500 kWh primar",
          "Total energie primară: 80k + 10k + 52.5k + 31.5k + 52.5k = 226,500 kWh/an",
          "Specific: 226,500 / 1000 = 226.5 kWh/m²an",
          "Clasă energetică: C (100-150 e clar A/B, 150-250 e C/D, 250-350 e E/F)",
          "Comparativ cu clădire de referință (350 kWh/m²an): 226.5/350 = 0.65 → Clasa C"
        ],
        rezultat: "226.5 kWh/m²an energie primară, Clasa energetică C",
        verificare: "Birouri performante: <150 kWh/m²an (A/B), normale: 150-300 (C/D), vechi: >300 (E-G)"
      },
      
      observatii: [
        "Factori conversie energie primară (fp) România: electricitate 2.1, gaze naturale 1.0, biomasă 0.8-1.0, cărbune 1.2, petrol 1.1",
        "Clase energetice (EPBD): A (0-50), B (50-75), C (75-100), D (100-150), E (150-200), F (200-250), G (>250) kWh/m²an pentru birouri",
        "Clădiri nZEB (Nearly Zero Energy Building): consum < clădire de referință, acoperit >50% din consum din regenerabile",
        "Certificat energetic obligatoriu: la vânzare/închiriere, valabilitate 10 ani",
        "Audit energetic obligatoriu: pentru clădiri >250m² din sectorul public sau >1000m² private",
        "Măsuri eficiență prioritate: 1. Etichetare energetică, 2. Izolație termică, 3. Tâmplărie, 4. Sisteme HVAC eficiente, 5. Iluminat LED, 6. Automatizări (BMS)",
        "ROI tipic: izolație 5-10 ani, pompe de căldură 7-12 ani, panouri solare 6-10 ani, LED 2-4 ani",
        "Certificare verde: BREEAM, LEED, DGNB - cerințe suplimentare față de eficiență energetică (apă, materiale, locație)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-E-001: Bilanț energetic și consum specific
Eficiență Energetică | Nivel: Mediu | EPBD / ISO 52000
================================================================================

FORMULE BILANȚ
--------------
Energia finală (Ef) = energia contorizată [kWh/an]
Energia primară (Ep) = Ef × fp [kWh/an]
Consum specific = Ep / Suprafață [kWh/m²an]

FACTORI CONVERSIE fp (România)
------------------------------
Electricitate:      2.1 (cel mai mare, emisii ridicate)
Gaze naturale:      1.0 (referință)
Biomasă:            0.8-1.0 (regenerabil)
Cărbune:            1.2
Petrol:             1.1

CLASE ENERGETICE (birouri)
---------------------------
A:   <  50 kWh/m²an (nZEB)
B:   50- 75
C:   75-100  
D:  100-150
E:  150-200
F:  200-250
G:  > 250

EXEMPLU CALCUL RAPID
--------------------
Clădire 500m²:
- Încălzire gaze: 40,000 kWh × 1.0 = 40,000
- Electricitate:  30,000 kWh × 2.1 = 63,000
Total primar: 103,000 kWh/an
Specific: 206 kWh/m²an → Clasa E

nZEB (Nearly Zero Energy):
- Consum maxim 50-100 kWh/m²an
- Minim 50% din consum din regenerabile

================================================================================
`
  },
  
  {
    cod: "B-E-002",
    titlu: "Randament sisteme și pierderi în instalații (η global)",
    slug: "randament-pierderi-instalatii",
    nivel: "mediu",
    sursa: "Eficiență energetică în instalații / SR EN 15316",
    areCalculator: true,
    calculatorUrl: "/calculatoare/randament-instalatii",
    
    continut: {
      scop: "Calculul randamentului global al instalațiilor termice (încălzire, apă caldă) prin înlănțuirea randamentelor componente (generator, distribuție, emisie, reglare).",
      
      formula: "ηglobal = ηgenerator × ηdistribuție × ηemisie × ηreglare × ηrecuperare\nPierderi distribuție = Qutil × (1/η - 1) [kWh]\nCOP sistem = COPgenerator × ηdistribuție (pentru pompe de căldură)",
      
      variabile: [
        { simbol: "ηglobal", definitie: "Randament total instalație", unitate: "% sau -" },
        { simbol: "ηgen", definitie: "Randament generator (centrală)", unitate: "%" },
        { simbol: "ηdist", definitie: "Randament distribuție (rețea)", unitate: "%" },
        { simbol: "ηemis", definitie: "Randament emisie (calorifere)", unitate: "%" },
        { simbol: "Qutil", definitie: "Căldura livrată în spații", unitate: "kWh" },
        { simbol: "Qpierdere", definitie: "Pierderi în rețea", unitate: "kWh" }
      ],
      
      exempluNumeric: {
        date: "Instalație încălzire cu centrală condensare în condominiu: centrală 25kW, rețea 200m, calorifere cu termostate",
        pasi: [
          "Randament generator (centrală gaz condensare): 95% (return 50°C)",
          "Randament distribuție: pierderi rețea 8% (rețea veche neizolată) → ηdist = 92%",
          "Randament emisie: calorifere cu termostat, supradimensionate → ηemis = 95%",
          "Randament reglare: termostate de capăt + vreme compensată → ηregl = 90%",
          "Randament global: 0.95 × 0.92 × 0.95 × 0.90 = 0.747 = 74.7%",
          "Pentru a livra 100 kWh utili în camere: Qprodus = 100 / 0.747 = 133.8 kWh",
          "Pierderi totale: 33.8 kWh (13.8 în distribuție, 5 în emisie, 10 în reglare neoptimă)",
          "Comparație cu centrală veche clasică (η=80%, distribuție 85%): ηglobal = 0.8×0.85×0.9×0.8 = 49%",
          "Economie prin modernizare: (133.8 - 100/0.49)/133.8 = 35% reducere consum",
          "Verificare izolație distribuție: dacă izolăm rețeaua (pierderi 3%), ηdist=97%, ηglobal=78.5%"
        ],
        rezultat: "ηglobal = 75%, pierderi 25% din energie produsă",
        verificare: "Instalații moderne: 75-85%, instalații vechi: 50-65%"
      },
      
      observatii: [
        "Randament generator: centrale condensare 95-98%, centrale convenționale 80-88%, cazane vechi 60-75%",
        "Pierderi distribuție: rețele neizolate 10-20%, izolate 2-5%, instalații în pardoseală 5-8%",
        "Randament emisie: calorifere 95-98%, încălzire în pardoseală 90-95% (pierderi către sol), convectoare 85-90%",
        "Randament reglare: fără reglaj 70-80%, cu termostate de capăt 85-90%, cu vreme compensată 90-95%, cu BMS 92-98%",
        "Instalații în pardoseală: temperatură medie joasă (35-45°C) compatibilă cu pompe de căldură (COP ridicat)",
        "Recuperare căldură: pe ventilație 50-80%, pe apă uzată 20-40%, pe condens frigideri/camere reci 100% (util)",
        "Pompe de căldură: COP instant 3-5, COP anual (SCOP) 2.5-4.5, depinde de temperatură sursă/prelucrare",
        "Etanșeitate conducte: pierderi de aer în rețelele de ventilație reduc eficiența cu 10-30%",
        "Debit circulație: supradimensionarea pompei crește consumul electric și reduce ΔT (pierderi suplimentare)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-E-002: Randament global instalații
Eficiență Energetică | Nivel: Mediu | EN 15316
================================================================================

RANDAMENT GLOBAL
----------------
ηglobal = ηgenerator × ηdistribuție × ηemisie × ηreglare

Valori tipice:
Generator:
  • Cazan condensare: 95-98%
  • Cazan convențional: 80-90%
  • Cazan vechi (>20ani): 60-75%

Distribuție:
  • Rețea izolată nouă: 95-98%
  • Rețea neizolată: 80-90%
  • Instalație pardoseală: 92-95%

Emisie:
  • Calorifere: 95-98%
  • Pardoseală: 90-95%
  • Convectoare: 85-90%

Reglare:
  • Fără reglaj: 70-80%
  • Termostate capăt: 85-90%
  • Vreme compensată: 90-95%
  • BMS inteligent: 95-98%

CALCUL EXEMPLU
--------------
Modern: 0.96 × 0.97 × 0.96 × 0.95 = 85%
Vechi:  0.75 × 0.85 × 0.90 × 0.80 = 46%

Pentru 100 kWh livrat:
Modern consumă: 118 kWh
Vechi consumă:  217 kWh
Economie:       45%

================================================================================
`
  }
];