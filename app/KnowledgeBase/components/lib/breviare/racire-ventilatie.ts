import { Breviar } from "./types";

export const breviareRacireVentilatie: Breviar[] = [
  {
    cod: "B-R-001",
    titlu: "Sarcina termică de răcire pentru climatizare",
    slug: "sarcina-termica-racire",
    nivel: "mediu",
    sursa: "SR EN 15255 / ASHRAE Fundamentals / NP 060-2016",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Calculul sarcinii termice de răcire pentru dimensionarea sistemelor de climatizare (split, VRF, chiller), considerând câștigurile de căldură prin transmisie, solar, ventilație și interne.",
      
      formula: "Qtot = Qtransmisie + Qsolar + Qventilatie + Qinterne  [W]\nQtransmisie = Σ(A × U × (Text - Tint)) × fsezon\nQsolar = Σ(A × g × Fc × Fz)\nQventilatie = ρ × c × qv × (Text - Tint)",
      
      variabile: [
        { simbol: "Qtot", definitie: "Sarcina totală de răcire", unitate: "W, kW" },
        { simbol: "A", definitie: "Suprafață element de închidere", unitate: "m²" },
        { simbol: "U", definitie: "Coeficient transfer termic", unitate: "W/m²K" },
        { simbol: "Text", definitie: "Temperatură exterioară de calcul vară", unitate: "°C" },
        { simbol: "Tint", definitie: "Temperatură interioară impusă", unitate: "°C" },
        { simbol: "g", definitie: "Factor solar total geam", unitate: "W/m²" },
        { simbol: "Fc", definitie: "Factor corecție umbră", unitate: "-" },
        { simbol: "qv", definitie: "Debit ventilație", unitate: "m³/s" },
        { simbol: "ρ", definitie: "Densitate aer", unitate: "1.2 kg/m³" },
        { simbol: "c", definitie: "Căldură specifică aer", unitate: "1005 J/kgK" }
      ],
      
      exempluNumeric: {
        date: "Birou 50m², înălțime 2.8m, geam 12m² orientat S, perete 25m² U=0.4, Text=32°C, Tint=24°C",
        pasi: [
          "Volum aer = 50×2.8 = 140 m³",
          "Transmisie perete: Q = 25×0.4×(32-24) = 80 W",
          "Transmisie geam (U=1.8): Q = 12×1.8×8 = 173 W",
          "Solar geam S (g=600W/m², Fc=0.5, Fz=0.9): Q = 12×600×0.5×0.9 = 3240 W",
          "Ventilație (3sch/h): qv = 140×3/3600 = 0.117 m³/s",
          "Qvent = 1.2×1005×0.117×8 = 1129 W",
          "Interne (4 pers×100W + calculatoare 4×150W + iluminat 15W/m²×50m²): Q = 400+600+750 = 1750 W",
          "Total sarcină sensibilă: 80+173+3240+1129+1750 = 6372 W ≈ 6.4 kW",
          "Adaos 10% siguranță: Qnominal = 7.0 kW"
        ],
        rezultat: "Sarcină de răcire 7.0 kW (specific 140 W/m²)",
        verificare: "Specific tipic birouri: 100-150 W/m² → 140 W/m² în plaja acceptabilă"
      },
      
      observatii: [
        "Temperatură exterioară de calcul vară în România: 30-33°C (funcție de localitate, vezi NP 060)",
        "Factor solar g: geam simplu 850 W/m², dublu 550 W/m², tripan/selectiv 400 W/m²",
        "Factori corecție umbrire (Fc): copertină fixă 0.5, mobilă 0.2, rulantă 0.15",
        "Sarcina latentă (umiditate): adaugă 20-30% la sarcina sensibilă pentru birouri",
        "Coeficient simultaneitate: 0.8-0.9 pentru camere multiple (nu toate ating maxim simultan)",
        "Orele de vârf: sarcina solară maximă la ora 14 (est) sau 16 (vest), diferită de temperatura maxima la ora 15",
        "Masa clădirii (grea/ușoară): influențează amplitudinea și decalajul sarcinii",
        "Recuperare căldură pe ventilație: reduce Qvent cu 50-80% (rotary heat exchanger)"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-R-001: Sarcina termică de răcire
Răcire/Ventilație | Nivel: Mediu | EN 15255 / NP 060
================================================================================

COMPONENTE SARCINĂ
------------------
Qtotal = Qtransmisie + Qsolar + Qventilatie + Qinterne [W]

1. TRANSMISIE (perete, geam):
Q = A × U × (Text - Tint) [W]
Ex: Perete 20m², U=0.5, ΔT=8K → Q=80W

2. SOLAR (doar transparente):
Q = A × g × Fc × Fz [W]
g = factor solar total [W/m²]:
  • Geam simplu: 850
  • Geam dublu: 550  
  • Geam tripan/selectiv: 400
Fc = 0.5 (copertină), 0.2 (mobilă)

3. VENTILAȚIE:
Q = ρ × c × qv × ΔT = 1.2 × 1005 × qv × ΔT ≈ 1.21 × qv[m³/s] × ΔT × 1000 [W]
Sau rapid: Q ≈ 0.34 × qv[m³/h] × ΔT [W]

4. INTERNE:
  • Persoane: 100W (sensibil) + 50W (latent)
  • Echipamente: putere nominală × factor utilizare
  • Iluminat LED: 10-15 W/m²

SPECIFIC TIPIC (W/m²)
---------------------
Birouri:        100-150
Săli conferință: 150-250
Restaurante:    200-300
 magazine:      80-120
Spitale:        120-180

EXEMPLU RAPID: Birou 100m²
Transmisie:     15 W/m²
Solar:          40 W/m² (depinde de orientare)
Ventilație:     25 W/m²  
Interne:        40 W/m²
Total:          120 W/m² × 100m² = 12 kW

================================================================================
`
  },
  
  {
    cod: "B-R-002",
    titlu: "Debit aer ventilație comfort și pierderi de presiune",
    slug: "debit-ventilatie-pierderi-presiune",
    nivel: "mediu",
    sursa: "SR EN 13779 / C 107/2005 / NP 060",
    areCalculator: true,
    calculatorUrl: "/calculatoare",
    
    continut: {
      scop: "Calculul debitului necesar de aer proaspăt pentru comfort și evacuare fum/foc, precum și pierderile de presiune în rețelele de ventilație pentru dimensionarea ventilatoarelor.",
      
      formula: "Qcomfort = n × Vincapere  [m³/h] sau Q = pers × qpersoana\nQfoc = Aincendiu × vfugă  [m³/h]\nΔptotal = Δpcanale + Δpfitinguri + Δpterminal  [Pa]\nΔpcanale = λ × (L/Dh) × (ρ×v²/2)",
      
      variabile: [
        { simbol: "Q", definitie: "Debit aer", unitate: "m³/h, m³/s" },
        { simbol: "n", definitie: "Număr schimburi aer pe oră", unitate: "h⁻¹" },
        { simbol: "V", definitie: "Volum încăpere", unitate: "m³" },
        { simbol: "qpersoana", definitie: "Debit specific persoană", unitate: "m³/h·pers" },
        { simbol: "v", definitie: "Viteză în canal", unitate: "m/s (3-8 m/s economic)" },
        { simbol: "λ", definitie: "Coeficient frecare (0.02-0.04)", unitate: "-" },
        { simbol: "Dh", definitie: "Diametru hidraulic (4×S/perimetru)", unitate: "m" },
        { simbol: "Δp", definitie: "Pierdere de presiune", unitate: "Pa" }
      ],
      
      exempluNumeric: {
        date: "Sistem ventilație birou 200m², 20 persoane, rețea 30m cu 4 coturi și 4 grile",
        pasi: [
          "Debit comfort: 20 pers × 36 m³/h/pers = 720 m³/h (conform EN 13779 clasa II)",
          "Debit minim igienic: 200m² × 3m × 0.5 sch/h = 300 m³/h → alegem 720 m³/h",
          "Secțiune canal: q = 720/3600 = 0.2 m³/s, viteză economică 4 m/s → S = 0.2/4 = 0.05 m²",
          "Canal circular: D = √(4×0.05/π) = 0.25m = 250mm",
          "Pierderi frecare: λ=0.03, L=30m, Dh=0.25m, v=4m/s, ρ=1.2",
          "Δpfrecare = 0.03 × (30/0.25) × (1.2×16/2) = 0.03 × 120 × 9.6 = 34.6 Pa",
          "Pierderi locale: 4 coți (ξ=0.3 fiecare) + 4 grile (ξ=1.5) = 1.2 + 6.0 = 7.2",
          "Δplocale = 7.2 × (1.2×16/2) = 69.1 Pa",
          "Filtru (clasa G4): 80 Pa, schimbător căldură: 150 Pa",
          "Δptotal = 34.6 + 69.1 + 80 + 150 = 333.7 Pa ≈ 340 Pa",
          "Putere ventilator: P = Q×Δp/η = 0.2×340/0.6 = 113 W"
        ],
        rezultat: "Debit 720 m³/h, diametru canal 250mm, presiune disponibilă 340Pa, ventilator 120W",
        verificare: "Viteză 4m/s în limite (3-6 economic), zgomot <45dB(A) pentru birou"
      },
      
      observatii: [
        "Clase ventilație EN 13779: I (inalt) 54 m³/h·pers, II (mediu) 36, III (baza) 25, IV (scazut) 22",
        "Debit specific per suprafață: birouri 1.5-3 dm³/s·m², săli conferință 4-8, restaurante 8-12",
        "Viteze admise: canale principale 6-8 m/s, secundare 4-5, terminale <3 (zgomot), evacuare fum >8-10",
        "Pierderi de presiune admisibile: 1-3 Pa/m pentru canale mari, 3-5 Pa/m pentru mici",
        "Zgomot generat: Δp > 100Pa pe elemente terminale produce zgomot perceptibil",
        "Recuperare căldură: obligatorie pentru debite > 3000 m³/h (conform normelor eficiență energetică)",
        "Presiune statică utilă ventilator: trebuie să depășească cu 10-15% suma pierderilor",
        "Canale rectangulare: latură maximă < 5 × latura minimă (optim <3) pentru uniformitate viteză"
      ]
    },
    
    txtSimplificat: `================================================================================
BREVIAR B-R-002: Debit ventilație și pierderi presiune
Ventilație | Nivel: Mediu | EN 13779
================================================================================

DEBITURI NECESARE (EN 13779)
----------------------------
Clasa I (superior):   54 m³/h·pers
Clasa II (mediu):     36 m³/h·pers
Clasa III (baza):     25 m³/h·pers
Clasa IV (scazut):    22 m³/h·pers

Formula suprafață: Q = n × V [m³/h]
unde n = schimburi/oră:
  • Birouri: 1.5-2.5
  • Locuințe: 0.5-1.0
  • Săli operații: 15-25

PIERDERI DE PRESIUNE
--------------------
Δptotal = Δpfrecare + Δplocale + Δpechipamente

1. Frecare (Darcy-Weisbach):
Δp = λ × (L/D) × (ρ×v²/2) [Pa]
λ ≈ 0.02-0.03 (canale metalice netede)
ρ = 1.2 kg/m³ (aer)

2. Locale (fitinguri):
Δp = ξ × (ρ×v²/2) [Pa]
ξ cot 90°: 0.3, mărire/secțiune: 0.2, grilă: 1.5, filtru: 2-4

DIMENSIONARE RAPIDĂ
-------------------
Q = 1000 m³/h, v = 5 m/s
S = Q/(3600×v) = 1000/18000 = 0.055 m²
D = √(4×S/π) = 0.265m → 250mm sau 300×200mm

EXEMPLU: Birou 100m², 10 persoane
Q = 10 × 36 = 360 m³/h
Canal: 200mm, v = 360/(3600×0.0314) = 3.2 m/s
Δp/m ≈ 1 Pa/m (economic)

================================================================================
`
  }
];