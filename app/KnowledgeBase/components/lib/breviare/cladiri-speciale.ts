import { Breviar } from "./types";

export const breviareCladiriSpeciale: Breviar[] = [
  {
    cod: "B-C-001",
    titlu: "Instalații în spitale - Debit aer și presiuni relative",
    slug: "instalatii-spitale-debit-aer",
    nivel: "avansat",
    sursa: "SR EN 13795 / HTM 03-01 / NP 060-2016",
    areCalculator: true,
    calculatorUrl: "/calculatoare/spitale-aer",
    
    continut: {
      scop: "Calculul debitelor de aer și presiunilor relative pentru diferite departamente din spitale (săli operație, ATI, izolare) pentru prevenirea infecțiilor și controlul contaminării.",
      
      formula: "Debit sală operație: Q = V × n + Qom [m³/h]\nPresiune relativă: ΔP = 5-25 Pa (pozitivă în săli curate, negativă în izolare)\nSchiimburi aer: săli operație 15-25 h⁻¹, ATI 6-12 h⁻¹",
      
      variabile: [
        { simbol: "Q", definitie: "Debit total aer proaspăt/retur", unitate: "m³/h" },
        { simbol: "V", definitie: "Volum sală", unitate: "m³" },
        { simbol: "n", definitie: "Număr schimburi aer pe oră", unitate: "h⁻¹" },
        { simbol: "Qom", definitie: "Debit evacuat pe câmp operator (hota chirurgicală)", unitate: "m³/h" },
        { simbol: "ΔP", definitie: "Diferență presiune față de coridor", unitate: "Pa" },
        { simbol: "H", definitie: "Eficiență filtrare HEPA (H13-H14)", unitate: "% (99.95-99.995)" }
      ],
      
      exempluNumeric: {
        date: "Sală operație 6×5m, înălțime 3m, cu câmp operator 3×3m, clasă curățenie ISO 5",
        pasi: [
          "Volum sală = 6×5×3 = 90 m³",
          "Schimburi aer minime pentru ISO 5: 20 h⁻¹ (conform EN 13795)",
          "Debit teoretic = 90 × 20 = 1800 m³/h",
          "Câmp operator (hota): suprafață 9m², viteză captare 0.25-0.5 m/s",
          "Debit hotă (0.4 m/s mediu): 9 × 0.4 × 3600 = 12960 m³/h (prea mare)",
          "Soluție: hotă cu debit limitat (low-flow) 2500 m³/h sau recirculare locală HEPA",
          "Debit total: 3000 m³/h (20% proaspăt, 80% recirculat prin HEPA)",
          "Proaspăt: 600 m³/h (6.7 schimburi), Recirculat: 2400 m³/h",
          "Presiune relativă: +15 Pa față de antecameră, +25 Pa față de coridor",
          "Filtrare: prefiltre G4+F7, filtre absolute H14 pe difuzoare (99.995% la 0.3µm)",
          "Temperatură: 20-24°C, umiditate: 45-60% RH"
        ],
        rezultat: "3000 m³/h total (600 proaspăt), +15 Pa, H14, 21°C, 50% RH",
        verificare: "Conform clase I chirurgie (ASA I-II), risc infecție <1%"
      },
      
      observatii: [
        "Clase curățenie EN ISO 14644: ISO 5 (clasa 100) pentru implanturi/ortopedie, ISO 6 pentru chirurgie generală, ISO 7 pentru ATI",
        "Flux de aer: unidirectional (laminar) deasupra câmpului operator (0.2-0.3 m/s vertical)",
        "Presiuni relative: gradient crescător de la murdar la curat (coridor < antecameră < sală operație)",
        "Izolare infecțioasă: presiune negativă (-15 Pa) și exhaust separat (fără recirculare)",
        "Debit om: 15-20 m³/h·persoană pentru personal, 40-60 pentru pacient (sedare)",
        "Zgomot: NC 40-45 (max 50 dB(A)) în săli operație",
        "Sistem redundant: 2 grupuri de ventilație cu comutare automată (50/50 sau 100% backup)",
        "Urmărire parametri: presiune diferențială, temperatură, umiditate, status filtre (presiune diferențială)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-C-001: Instalații spitale - Debit și presiune
Clădiri Speciale | Nivel: Avansat | EN 13795
================================================================================

CLASE CURĂȚENIE ȘI DEBITE
--------------------------
ISO 5 (clasa 100): Chirurgie implant/ortopedie
  • Schimburi: 15-25 h⁻¹
  • Proaspăt: min 20% sau 1200 m³/h
  • Filtrare: H14 (99.995%)

ISO 6 (clasa 1000): Chirurgie generală  
  • Schimburi: 10-20 h⁻¹
  • Filtrare: H13 (99.95%)

ISO 7 (clasa 10000): ATI, nașteri
  • Schimburi: 6-12 h⁻¹
  • Filtrare: F9+H13

PRESIUNI RELATIVE (față de coridor)
-----------------------------------
Sală operație (curată):     +15 ... +25 Pa
Antecameră:                 +5 ... +10 Pa
Coridor:                    0 Pa (referință)
Izolare infecțioasă:        -10 ... -15 Pa
Toiletă pacient:            -5 ... -10 Pa

FLUX UNIDIRECȚIONAL (câmp operator)
------------------------------------
Viteză: 0.20 - 0.30 m/s vertical
Suprafață: minim 3×3m (9m²) sau dimensiunea mesei + 1m în jur

PARAMETRI CLIMATICI
-------------------
Temperatură: 20-24°C (opțional 18°C pentru neurochirurgie)
Umiditate: 45-60% RH (prevenire electrostatică și confort)
Zgomot: <45 dB(A) (NC40)

EXEMPLU: Sală 40m², 3m înălțime
Volum = 120 m³
Debit = 120 × 20 = 2400 m³/h
Proaspăt (20%) = 480 m³/h
Recirculat (80%) = 1920 m³/h prin HEPA

================================================================================
`
  },
  
  {
    cod: "B-C-002",
    titlu: "Instalații în industria alimentară și HACCP",
    slug: "industria-alimentara-haccp",
    nivel: "mediu",
    sursa: "Regulamentul CE 852/2004 / Codex Alimentarius / SR EN 1672-2",
    areCalculator: false,
    
    continut: {
      scop: "Cerințele pentru instalații sanitare, termice și de ventilație în unități de producție, depozitare și comercializare alimente, conform standardelor HACCP și igienă.",
      
      formula: "Temperatură depozitare: Tprodus ± 2K\nDebit ventilație zone producție: 6-10 schimburi/oră\nPresiune pozitivă zone curate: +10 Pa față de zone murdare\nFlux persoane: curat → murdar (sens unic)",
      
      variabile: [
        { simbol: "T", definitie: "Temperatură de păstrare", unitate: "°C" },
        { simbol: "RH", definitie: "Umiditate relativă depozitare", unitate: "%" },
        { simbol: "n", definitie: "Schimburi aer ventilație", unitate: "h⁻¹" },
        { simbol: "ΔP", definitie: "Diferență presiune zone curate/murdare", unitate: "Pa" }
      ],
      
      exempluNumeric: {
        date: "Fabrică preparate din carne: zona tranșare (4°C), zona ambalare (8°C), depozit frigider (-18°C)",
        pasi: [
          "Zona tranșare (căldură specifică 120W/pers, 500W/m² echipamente)",
          "Sarcină frig: 10 pers×120 + 100m²×50W + 10kW proces = 1.2+5+10 = 16.2 kW",
          "Temperatură menținută: 4°C ± 2K (max 6°C, conform HACCP)",
          "Ventilație: 8 schimburi/oră pentru evacuare vapori/mirosuri",
          "Presiune: zona tranșare (+10 Pa) > zona primire (+5 Pa) > exterior (0)",
          "Pardoseală: pante 1-2% către rigole cu gratare inox (fără colițe)",
          "Racorduri sanitare: inox 316L sau PVC presiune, fără puncte moarte",
          "Iluminat: 500-750 lux în zone de lucru, etanșe IP65",
          "Apă potabilă: puncte spălare la fiecare 10m, presiune 2-3 bar",
          "Canalizare: separată apă curată de apă contaminată (grăsimi)"
        ],
        rezultat: "Instalații conform HACCP: separare fluxuri, temperaturi controlate, ventilație 8sch/h",
        verificare: "Audit igienă: puncte critice identificate și controlate (CCP)"
      },
      
      observatii: [
        "Temperaturi critice: carne refrigerată 0-4°C, congelată ≤ -18°C, pește 0-2°C, produse lactate 0-6°C",
        "Ventilație: evacuare în zone cu vapori (abur, grăsimi), presiune pozitivă în zone de produs finit",
        "Materiale: inox 304/316, PVC alimentar, etanșeitate la apă și detergenți agresivi",
        "Pardoseli: rezistente la acizi/baze, antiderapante, pante 1-2%, rigole cu sifon",
        "Pereți: glazurați până la 2m, colțuri rotunjite (R>5cm), tavan lavabil",
        "Iluminat: minimum 200 lux depozite, 500 lux producție, 750 lux control calitate, CRI>80",
        "Apă: potabilă conform standardelor, presiune suficientă pentru spălare (min 2 bar), anti-retur",
        "Evacuare apă uzată: separare pe categorii (tehnologică, sanitare, meteorică), tratare grăsimi",
        "Protecție împotriva dăunătorilor: site la evacuări, uși etanșe, iluminat exterior anti-insecte"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-C-002: Industria alimentară și HACCP
Clădiri Speciale | Nivel: Mediu | CE 852/2004
================================================================================

TEMPERATURI CRITICE (HACCP)
---------------------------
Carne refrigerată:      0 ... +4°C (max +6°C)
Carne congelată:        ≤ -18°C
Pește proaspăt:         0 ... +2°C (gheață)
Lactate:                0 ... +6°C
Preparate gastronomie:  0 ... +4°C
Înghețată:              ≤ -18°C

INSTALAȚII SANITARE
-------------------
• Pardoseală: pante 1-2% către rigole, inox/special antiderapant
• Rigole: sifon cu grătar inox, fără zone stagnante
• Pereți: faianță/glazură până la 2m, colțuri rotunjite R>5cm
• Tavan: lavabil, etanș, fără puncte de praf

VENTILAȚIE ȘI PRESIUNI
----------------------
Zone curate (produs finit):    +10 Pa (față de murdar)
Zone murdare (recepție):       0 Pa (referință)
Schimburi aer:
  • Producție: 6-10 h⁻¹
  • Depozite: 2-4 h⁻¹
  • Toalete/cămări: 10-15 h⁻¹, presiune negativă

ILUMINAT (lux)
--------------
Depozite:           200
Producție:          500
Control calitate:   750
CRI (randare culoare): >80

FLUIDE ȘI ENERGIE
-----------------
Apă: potabilă, 2-3 bar, puncte la 10m
Vapori: 7-10 bar pentru sterilizare/curățare
Aer comprimat: filtrat, uscat (pentru ambalare)

================================================================================
`
  }
];