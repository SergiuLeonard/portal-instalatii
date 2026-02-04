import { Breviar } from "./types";

export const breviareHidroedilitare: Breviar[] = [
  {
    cod: "B-H-001",
    titlu: "Debit specific și variație consum apă potabilă",
    slug: "debit-specific-variatie-apa",
    nivel: "mediu",
    sursa: "SR 1343-1 / NP 133 / STAS 1343",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Calculul debitelor de apă pentru localități (aducțiuni și rețele distribuție), considerând consumul specific zilnic, coeficienții de variație și debitul maxim orar.",
      
      formula: "Qzi_mediu = N × qs [m³/zi]\nQzi_max = Qzi_mediu × Kzi [m³/zi]\nQorar_max = Qzi_max × Kor / 24 [m³/h]\nQsecundar_max = Qorar_max × 1.5 [m³/h]",
      
      variabile: [
        { simbol: "N", definitie: "Număr locuitori", unitate: "persoane" },
        { simbol: "qs", definitie: "Debit specific zilnic mediu", unitate: "l/zi·pers" },
        { simbol: "Kzi", definitie: "Coeficient zi maximă (1.2-1.4)", unitate: "-" },
        { simbol: "Kor", definitie: "Coeficient oră maximă (1.5-2.0)", unitate: "-" },
        { simbol: "Q", definitie: "Debit calculat", unitate: "m³/zi sau m³/h" }
      ],
      
      exempluNumeric: {
        date: "Localitate 5000 locuitori, consum specific 150 l/zi·pers (apartamente cu baie și bucătărie)",
        pasi: [
          "Consum mediu zilnic: Qmed = 5000 × 150 = 750,000 l/zi = 750 m³/zi",
          "Coeficient zi maximă (Kzi): 1.3 pentru localități mici-medii",
          "Ziua maximă: Qzimax = 750 × 1.3 = 975 m³/zi",
          "Coeficient oră maximă (Kor): 1.8 (conform SR 1343 pentru 5000 loc)",
          "Ora maximă: Qorar = (975 × 1.8) / 24 = 73.1 m³/h = 20.3 l/s",
          "Debit maxim secundar (incendiu simultan): Qinc = 10 l/s (1 hidrant)",
          "Debit rețea: Qtotal = 20.3 + 10 = 30.3 l/s (la incendiu consum domestic redus)",
          "Rezervor înmagazinare: V = 20-40% din Qzimediu = 150-300 m³",
          "Aducțiune: dimensionată pentru Qorar (20.3 l/s), diametru economic 200-250mm"
        ],
        rezultat: "975 m³/zi maxim, 73 m³/h orar maxim, 20.3 l/s continuu",
        verificare: "Specific 150 l/zi·pers tipic pentru România (media UE: 120-180)"
      },
      
      observatii: [
        "Consum specific (SR 1343-1): locuințe fără canalizare 40-60 l/zi·pers, cu canalizare 80-120, cu baie 120-160, cu aparat spălat 150-200",
        "Coeficient zi maximă (Kzi): scade cu numărul locuitorilor (1.4 la <1000 loc, 1.2 la >100,000)",
        "Coeficient oră maximă (Kor): 2.0-2.5 la sate, 1.5-1.8 la orașe, depinde de uniformitate consum",
        "Pierderi în rețea: acceptabile <15% (România media 25-30%, ținte UE <10%)",
        "Debit de incendiu: conform SR 1465, 5-40 l/s funcție de clădiri și populație",
        "Presiune în rețea: 2-6 bar (minim 1.5 la robinet, maxim 6 pentru protejare fitinguri)",
        "Rezervoare: din beton armat (îngropate) sau metalice (elevate), timp staționare 4-8 ore",
        "Cămine vane: la fiecare 500-1000m în rețele, dimensiuni pentru acces operare",
        "Aducțiuni: minimum 2 fire pentru siguranță (la localități >3000 loc), sau rezervor de incendiu"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-H-001: Debit apă comunitară și variații
Hidroedilitare | Nivel: Mediu | SR 1343
================================================================================

CONSUM SPECIFIC qs (l/zi·persoană)
-----------------------------------
Fără canalizare:          40-60
Cu canalizare:            80-120  
Cu baie:                  120-160
Cu mașină spălat:         150-200
Comercial/birou:          50-80
Școală:                   30-50
Spital:                   300-500

FORMULE
---------
Qzi_mediu = N × qs [m³/zi]
Qzi_max = Qzi_mediu × Kzi
Qorar_max = (Qzi_max × Kor) / 24 [m³/h]

COEFICIENȚI DE VARIAȚIE
------------------------
Kzi (zi maximă):
  • < 1000 loc:  1.4
  • 1000-10000:  1.3
  • > 100000:    1.2

Kor (oră maximă):
  • Sate:        2.0-2.5
  • Orașe mici:  1.7-2.0
  • Orașe mari:  1.5-1.7

EXEMPLU: Oraș 10,000 loc, qs=150 l/zi
Qmed = 1,500 m³/zi
Qzimax = 1500 × 1.2 = 1,800 m³/zi
Qorar = (1800 × 1.6) / 24 = 120 m³/h = 33.3 l/s

================================================================================
`
  },
  
  {
    cod: "B-H-002",
    titlu: "Lovitura de berbec în aducțiuni",
    slug: "lovitura-berbec-aductiuni",
    nivel: "avansat",
    sursa: "Mecanica fluidelor / Proiectarea rețelelor de apă",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Calculul presiunii maxime generate de lovitura de berbec (transient hidraulic) la închiderea bruscă a vanelor în aducțiuni și rețele de apă, și dimensionarea camerelor de aer sau supapelor de evacuare.",
      
      formula: "Presiune berbec: ΔH = a × Δv / g [m]\nViteză undă: a = 1420 / √(1 + (K×D)/(E×e)) [m/s]\nTimp critic: Tc = 2×L / a [s]",
      
      variabile: [
        { simbol: "ΔH", definitie: "Suprapresiune de lovitură", unitate: "mCA" },
        { simbol: "a", definitie: "Viteza de propagare a undei de presiune", unitate: "m/s" },
        { simbol: "Δv", definitie: "Variație viteză (vinițial - vfinal)", unitate: "m/s" },
        { simbol: "g", definitie: "Accelerație gravitațională", unitate: "9.81 m/s²" },
        { simbol: "K", definitie: "Modul de elasticitate apei", unitate: "2.1×10⁹ Pa" },
        { simbol: "E", definitie: "Modul de elasticitate material conductă", unitate: "Pa (otel 2×10¹¹, PE 8×10⁸)" },
        { simbol: "D", definitie: "Diametru interior conductă", unitate: "m" },
        { simbol: "e", definitie: "Grosime perete conductă", unitate: "m" },
        { simbol: "L", definitie: "Lungime conductă", unitate: "m" }
      ],
      
      exempluNumeric: {
        date: "Aducțiune oțel DN400 (e=6mm), L=2000m, viteză inițială 1.5 m/s, închidere vană în 3 secunde",
        pasi: [
          "Date conductă: D=0.4m, e=0.006m, E=2.1×10¹¹ Pa (otel), K=2.1×10⁹ Pa",
          "Viteză undă: a = 1420 / √(1 + (2.1×10⁹×0.4)/(2.1×10¹¹×0.006))",
          "Calcul: (2.1×10⁹×0.4)=8.4×10⁸, (2.1×10¹¹×0.006)=1.26×10⁹, raport=0.667",
          "a = 1420 / √1.667 = 1420 / 1.29 = 1100 m/s",
          "Timp critic: Tc = 2×2000/1100 = 3.64 secunde",
          "Timp închidere (3s) < Tc (3.64s) → lovitură de berbec directă (maximă)",
          "Δv = 1.5 m/s (de la 1.5 la 0)",
          "ΔH = 1100 × 1.5 / 9.81 = 168 mCA = 16.8 bar",
          "Presiune statică inițială: Hgeom=20m + pierderi=5m = 25m (2.5 bar)",
          "Presiune maximă: 2.5 + 16.8 = 19.3 bar",
          "PN conductă: trebuie PN25 sau măsuri de atenuare",
          "Soluție: cameră de aer (water tower) sau supapă de evacuare reglată la 8 bar"
        ],
        rezultat: "Suprapresiune 16.8 bar, total 19.3 bar, necesară protecție",
        verificare: "Viteză undă în oțel: 800-1200 m/s (corect), în PE: 200-400 m/s"
      },
      
      observatii: [
        "Lovitură de berbec apare când Tînchidere < Tc = 2L/a (închidere rapidă)",
        "Dacă Tînchidere > 3-5×Tc, lovitura este atenuată (închidere lentă)",
        "Atenuare naturală: frecarea cu pereții, aer dizolvat în apă, material elastic",
        "Măsuri de protecție: 1. Camere de aer (water towers), 2. Supape de evacuare, 3. Vane cu închidere lentă (>30s), 4. Baloane de aer, 5. Vane anti-șoc",
        "Camere de aer: volum V = 1.5×Q×L/(a×Δp_admis) [m³], montate la capătul conductei",
        "Supape de evacuare: deschid la presiune > Hstatic + 20-30%",
        "Viteza undă: oțel ~1000 m/s, fontă ~1200, PVC ~300, PE ~200, azbociment ~800",
        "Efectul materialului: PE și PVC atenuează berbecul prin deformare elastică",
        "Pericol maxim: la pompe (oprire bruscă prin lipsă curent) - obligatoriu clapete de retenție + rezervor de aspirație"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-H-002: Lovitura de berbec
Hidroedilitare | Nivel: Avansat | Mecanică fluidelor
================================================================================

CONDENȘII APARIȚIE
------------------
Apare când Tînchidere < Tc = 2L/a
Tc = timp critic (dus-întors undă presiune)
L = lungime conductă [m]
a = viteză undă [m/s]

FORMULA SUPRAPRESIUNE
---------------------
ΔH = a × Δv / g [m]
Δv = variație viteză [m/s]
g = 9.81 [m/s²]

VITEZA UNDEI (Michaud)
----------------------
a = 1420 / √(1 + (K×D)/(E×e)) [m/s]

K = 2.1×10⁹ Pa (modul apă)
E = modul material:
  • Oțel: 2.1×10¹¹ Pa
  • Fontă: 9×10¹⁰
  • PE: 8×10⁸
  • PVC: 3×10⁹

Valori practice a:
  • Oțel: 800-1200 m/s
  • PE: 200-400 m/s
  • Beton: 900-1400 m/s

EXEMPLU RAPID
-------------
Conductă oțel L=1000m, v=2m/s, a=1000m/s
Tc = 2×1000/1000 = 2 secunde
Dacă se închide în 1s (<2s):
ΔH = 1000×2/9.81 = 204 mCA ≈ 20 bar!

PROTECȚII
---------
• Vane închidere lentă (>30s)
• Camere de aer (water towers)
• Supape de evacuare
• Materiale elastice (PE in loc de oțel)

================================================================================
`
  }
];