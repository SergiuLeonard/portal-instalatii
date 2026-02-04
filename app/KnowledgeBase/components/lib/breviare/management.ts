import { Breviar } from "./types";

export const breviareManagementResurse: Breviar[] = [
  {
    cod: "B-M-001",
    titlu: "Estimare costuri instalații și deviz simplificat",
    slug: "estimare-costuri-deviz",
    nivel: "initiator",
    sursa: "Management proiect / Devizieră instalații / Experiență piață",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Metode rapide de estimare a costurilor pentru instalații sanitare, termice și electrice în construcții, folosind indicatori specifici pe m² sau pe element de instalare.",
      
      formula: "Cost total = Cost materiale + Manoperă + Utilaje + Organizare (5-10%) + Profit (10-15%)\nEstimare m²: Cost = Suprafață × Preț specific [€/m²]\nEstimare punctuală: Cost = Cantitate × Preț unitar",
      
      variabile: [
        { simbol: "Cmat", definitie: "Cost materiale și echipamente", unitate: "lei, €" },
        { simbol: "Cman", definitie: "Cost manoperă", unitate: "lei, €" },
        { simbol: "Ctot", definitie: "Cost total cu TVA", unitate: "lei, €" },
        { simbol: "Ps", definitie: "Preț specific pe m² construit", unitate: "€/m²" },
        { simbol: "A", definitie: "Suprafață construită/desfășurată", unitate: "m²" }
      ],
      
      exempluNumeric: {
        date: "Apartament 3 camere 75m², instalație sanitară completă (apă, canal, gaz, calorifere)",
        pasi: [
          "Metoda specificului pe m²: 75m² × 120 €/m² = 9,000 € (fără obiecte sanitare)",
          "Metoda detaliată pe elemente:",
          "Țevi cupru alimentare (40m): 40m × 25 lei/m = 1,000 lei materiale + 1,200 lei manoperă = 2,200",
          "Canalizare PVC (30m): 30m × 15 = 450 + 600 manoperă = 1,050",
          "Coloane gaze (8m): 8m × 40 = 320 + 400 = 720",
          "Calorifere (5 buc): 5 × 800 = 4,000 + 1,000 montaj = 5,000",
          "Centrală termică (24kW): 3,500 echipament + 1,500 montaj = 5,000",
          "Boiler ACM (100L): 1,200 + 400 = 1,600",
          "Obiecte sanitare (vas, lavoar, cadă, baterii): 4,000",
          "Subtotal: 2,200+1,050+720+5,000+5,000+1,600+4,000 = 19,570 lei ≈ 4,000 €",
          "Organizare 5%: 200, Profit 10%: 400, Total: 4,600 €",
          "Comparație: 4,600€/75m² = 61 €/m² (preț mai mic căci include doar instalații de bază)"
        ],
        rezultat: "4,000-4,500 € fără TVA (53-60 €/m²) pentru instalații de bază",
        verificare: "Piață România 2024: instalații complete locuință 50-120 €/m² funcție de calitate"
      },
      
      observatii: [
        "Prețuri specifice instalații complete (la cheie): locuințe 80-150 €/m², birouri 100-200 €/m², spitale 200-400 €/m², industriale 50-100 €/m²",
        "Raport manoperă/materiale: instalații simple 1:1, complexe (BMS, automatizări) 1.5:1 sau 2:1",
        "Factori care cresc prețul: clădiri cu regim înalt (manevră materiale), finisaje premium, automatizări complexe, materiale import",
        "Devizul cantitativ se bazează pe listele de cantități (LoQ) extrase din proiect sau estimări tip",
        "Rețineri garanție: 5-10% din valoare, returnate la finalizarea perioadei de garanție (2-4 ani)",
        "Actualizare prețuri: indici construcții, fluctuații materiale (cupru, oțel), creștere salarială 5-10%/an",
        "Costuri indirecte: proiectare (3-5%), diriginție (2-3%), asigurări, taxe, utilități șantier",
        "TVă: 19% (România) la lucrări, scutiri pentru locuințe sub 120m² (anumite condiții)",
        "Estimare rapidă: 1 punct sanitar (vas+lavoar) = 1,500-2,500 € total instalații în zona lui"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-M-001: Estimare costuri instalații
Management | Nivel: Inițiator | Devizieră
================================================================================

METODE DE ESTIMARE
-------------------
1. Pe m² construit:
   • Locuințe:          80-150 €/m²
   • Birouri:          100-200 €/m²
   • Spitale:          200-400 €/m²
   • Industriale:       50-100 €/m²

2. Pe puncte sanitare:
   • Grup sanitar complet: 2,000-3,500 €
   • Bucătărie (apă+gaz):  1,500-2,500 €
   • Calorifer + robineți:   800-1,200 €

STRUCTURA COSTURILOR
--------------------
Materiale:        40-50%
Manoperă:         30-40%
Utilaje:           5-10%
Organizare:        5-10%
Profit:           10-15%
TVA:              19%

Exemplu 100,000 lei total:
Materiale: 45,000
Manoperă:  35,000
Organizare: 8,000
Profit:    12,000
TVA:       19,000
Total cu TVA: 119,000

FACTORI VARIABILITATE
---------------------
+ Complexitate (regim înalt, spații înguste)
+ Materiale premium (cupru vs PPR, design radiatoare)
+ Automatizări (BMS, control climatic)
+ Urgență execuție (termene scurte = suprapreț)

================================================================================
`
  },
  
  {
    cod: "B-M-002",
    titlu: "Gestiunea mentenanței instalațiilor (FM)",
    slug: "mentenanta-instalatii-fm",
    nivel: "mediu",
    sursa: "Facility Management / Normative întreținere / ISO 41001",
    areCalculator: false,
    
    continut: {
      scop: "Planificarea activităților de întreținere preventivă și corectivă pentru instalații, calculul indicatorilor de performanță (KPI) și optimizarea ciclului de viață al echipamentelor.",
      
      formula: "Disponibilitate = MTBF / (MTBF + MTTR) [%]\nMTBF (Mean Time Between Failures) = timp funcționare / număr defecțiuni\nMTTR (Mean Time To Repair) = timp total reparații / număr defecțiuni\nCost mentenanță = Preventivă (60%) + Corectivă (40%)",
      
      variabile: [
        { simbol: "MTBF", definitie: "Timp mediu între defecțiuni", unitate: "ore, zile" },
        { simbol: "MTTR", definitie: "Timp mediu de reparație", unitate: "ore" },
        { simbol: "A", definitie: "Disponibilitate/disponibilitate", unitate: "%" },
        { simbol: "Cpm", definitie: "Cost mentenanță preventivă", unitate: "lei/an" },
        { simbol: "Ccm", definitie: "Cost mentenanță corectivă", unitate: "lei/an" }
      ],
      
      exempluNumeric: {
        date: "Centrală termică de bloc (100kW), istoric 3 defecțiuni/an, timp reparație mediu 4h, funcționare sezon 180 zile",
        pasi: [
          "Funcționare anuală: 180 zile × 24h = 4,320 ore",
          "MTBF = 4320 / 3 = 1,440 ore (60 zile între defecțiuni mediu)",
          "MTTR = 4 ore (presupunem fiecare defecțiune reparată în 4h)",
          "Disponibilitate = 1440 / (1440 + 4) = 99.72%",
          "Costuri: preventivă (revizie anuală 500 lei + curățare 300) = 800 lei",
          "Corectivă: 3 defecțiuni × 400 lei mediu = 1,200 lei",
          "Total mentenanță: 2,000 lei/an",
          "Raport preventiv/corectiv: 800/1200 = 0.67 (ideal >1.5, deci insuficient preventiv)",
          "Optimizare: creștere mentenanță preventivă la 1,500 lei (2 revizii) → reducere defecțiuni la 1/an",
          "Nou cost: 1500 + 400 = 1900 lei (economie 100 lei + disponibilitate crescută)",
          "Indicator performanță: cost/m²/an = 2000/1000m² = 2 lei/m²an (foarte bun)"
        ],
        rezultat: "Disponibilitate 99.7%, cost 2 lei/m²an, optimizare prin creștere preventivă",
        verificare: "Disponibilitate >99.5% acceptabil pentru confort, >99.9% pentru procese critice"
      },
      
      observatii: [
        "Tipuri mentenanță: 1. Corectivă (după defect), 2. Preventivă (planificat calendar/km), 3. Predictivă (condiție reală, senzori)",
        "Interval optim preventiv: 80% din MTBF sau conform recomandare producător",
        "Pareto 80/20: 80% defecțiuni de la 20% echipamente - identificare criticală",
        "Documentare: fișe tehnice, istoric intervenții, stoc piese schimb (ABC analysis)",
        "Legislație: verificări periodice obligatorii (gaze anual, instalații electrice 2-5 ani, cazane 2-4 ani)",
        "Outsourcing FM: 30-50% din costurile totale de operare ale clădirii sunt mentenanță",
        "Energy Management: mentenanța influențează eficiența (curățare schimbătoare, calibrare senzori)",
        "Software CMMS (Computerized Maintenance Management): planificare, stocuri, raportare KPI",
        " lifecycle cost: investiție inițială 20%, operare+mentenanță 80% pe 20 ani"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-M-002: Mentenanța instalațiilor (FM)
Management | Nivel: Mediu | ISO 41001
================================================================================

INDICATORI KPI
--------------
MTBF = timp funcționare / număr defecțiuni [ore]
MTTR = timp total reparații / număr defecțiuni [ore]
Disponibilitate = MTBF / (MTBF + MTTR) × 100%

Valori țintă:
  • Confort clădiri:     >99.0%
  • Procese industriale: >99.9%
  • Spitale/critical:    >99.99%

TIPURI MENTENANȚĂ
-----------------
1. CORECTIVĂ (reacțivă):
   - După apariția defectului
   - Cost mare, disconfort, urgență
   
2. PREVENTIVĂ (planificată):
   - La intervale fixe (timp, funcționare)
   - Revizii, schimbări filtre, ungere
   
3. PREDICTIVĂ (condiționată):
   - Bazată pe starea reală
   - Senzori vibrație, temperatură, curent

RAPORT OPTIM
------------
Cost preventiv / Cost corectiv = 1.5 ... 3.0
(Dacă <1, se cheltuie prea puțin pe preventiv)

VERIFICĂRI OBLIGATORII (România)
--------------------------------
• Instalații gaze:             anual (utilizator) / 5 ani (instalator)
• Instalații electrice:        2 ani (verificare) / 5 ani (instalator autorizat)
• Cazane >100kW:               anual
• Extinctoare:                 anual
• Hidranți:                    semestrial

================================================================================
`
  }
];