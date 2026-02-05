"use client";

import { useState } from "react";
import Link from "next/link";

// ==========================================
// TIPURI ȘI INTERFEȚE
// ==========================================
type CategorieNormativ = 
  | "sanitare-apa"
  | "sanitare-canalizare"
  | "incalzire"
  | "ventilare"
  | "electrice"
  | "gaze"
  | "automatizare"
  | "case-pasive"
  | "certificare";

interface Normativ {
  cod: string;
  titlu: string;
  descriere: string;
  anPublicare?: string;
  status: "în vigoare" | "abrogat" | "modificat";
  link?: string;
}

interface CategorieDatele {
  id: CategorieNormativ;
  titlu: string;
  icon: string;
  descriere: string;
  culoare: string;
  normative: Normativ[];
}

// ==========================================
// DATE NORMATIVE PE CATEGORII
// ==========================================
const categoriiNormative: CategorieDatele[] = [
  {
    id: "sanitare-apa",
    titlu: "Instalații Sanitare - Apă",
    icon: "💧",
    descriere: "Normative pentru alimentarea cu apă rece și caldă",
    culoare: "cyan",
    normative: [
      {
        cod: "STAS 1478-90",
        titlu: "Instalații sanitare. Alimentarea cu apă la construcții civile și industriale",
        descriere: "Prescripții fundamentale de proiectare pentru instalațiile de alimentare cu apă",
        anPublicare: "1990",
        status: "în vigoare"
      },
      {
        cod: "SR EN 806-1:2002",
        titlu: "Specificații pentru instalații de apă potabilă din interiorul clădirilor - Partea 1: Generalități",
        descriere: "Standard european pentru instalații de apă potabilă",
        anPublicare: "2002",
        status: "în vigoare"
      },
      {
        cod: "SR EN 806-2:2005",
        titlu: "Specificații pentru instalații de apă potabilă - Partea 2: Proiectare",
        descriere: "Cerințe de proiectare pentru instalații de apă potabilă",
        anPublicare: "2005",
        status: "în vigoare"
      },
      {
        cod: "SR EN 806-3:2006",
        titlu: "Specificații pentru instalații de apă potabilă - Partea 3: Dimensionare",
        descriere: "Metode de dimensionare a conductelor și echipamentelor",
        anPublicare: "2006",
        status: "în vigoare"
      },
      {
        cod: "I9-2015",
        titlu: "Normativ pentru proiectarea și executarea instalațiilor sanitare",
        descriere: "Normativ tehnic principal pentru instalații sanitare în România",
        anPublicare: "2015",
        status: "în vigoare"
      },
      {
        cod: "NP 133-2013",
        titlu: "Normativ privind proiectarea, execuția și exploatarea sistemelor de alimentare cu apă și canalizare a localităților",
        descriere: "Reglementări pentru sisteme publice de alimentare cu apă",
        anPublicare: "2013",
        status: "în vigoare"
      },
      {
        cod: "GP 043-99",
        titlu: "Ghid de proiectare și execuție pentru protecția anticorozivă a instalațiilor sanitare",
        descriere: "Măsuri de protecție anticorozivă pentru conducte și echipamente",
        anPublicare: "1999",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "sanitare-canalizare",
    titlu: "Instalații Sanitare - Canalizare",
    icon: "🔄",
    descriere: "Normative pentru canalizare și evacuare ape uzate",
    culoare: "orange",
    normative: [
      {
        cod: "STAS 1795-87",
        titlu: "Instalații sanitare. Canalizarea interioară",
        descriere: "Prescripții de proiectare pentru canalizarea interioară a clădirilor",
        anPublicare: "1987",
        status: "în vigoare"
      },
      {
        cod: "SR EN 12056-1:2002",
        titlu: "Sisteme de canalizare sub presiune gravitațională în interiorul clădirilor - Partea 1: Cerințe generale",
        descriere: "Standard european pentru sisteme de canalizare gravitațională",
        anPublicare: "2002",
        status: "în vigoare"
      },
      {
        cod: "SR EN 12056-2:2002",
        titlu: "Sisteme de canalizare - Partea 2: Sisteme pentru ape uzate menajere",
        descriere: "Cerințe pentru sistemele de evacuare a apelor uzate menajere",
        anPublicare: "2002",
        status: "în vigoare"
      },
      {
        cod: "SR EN 12056-3:2002",
        titlu: "Sisteme de canalizare - Partea 3: Sisteme de evacuare a apelor meteorice",
        descriere: "Proiectarea și dimensionarea sistemelor pluviale",
        anPublicare: "2002",
        status: "în vigoare"
      },
      {
        cod: "STAS 9312-87",
        titlu: "Canalizări. Stații de pompare. Prescripții de proiectare",
        descriere: "Cerințe pentru stațiile de pompare ape uzate",
        anPublicare: "1987",
        status: "în vigoare"
      },
      {
        cod: "NP 084-03",
        titlu: "Normativ pentru proiectarea, execuția și exploatarea instalațiilor de stingere a incendiilor",
        descriere: "Include prevederi pentru instalații de hidranti și sprinklere",
        anPublicare: "2003",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "incalzire",
    titlu: "Instalații de Încălzire",
    icon: "🔥",
    descriere: "Normative pentru sisteme de încălzire și centrale termice",
    culoare: "red",
    normative: [
      {
        cod: "I13-2015",
        titlu: "Normativ pentru proiectarea și executarea instalațiilor de încălzire centrală",
        descriere: "Normativ principal pentru instalații de încălzire în România",
        anPublicare: "2015",
        status: "în vigoare"
      },
      {
        cod: "SR EN 12831-1:2017",
        titlu: "Performanța energetică a clădirilor - Metoda de calcul a sarcinii termice de proiect",
        descriere: "Metodologie europeană pentru calculul necesarului de căldură",
        anPublicare: "2017",
        status: "în vigoare"
      },
      {
        cod: "MC 001-2022",
        titlu: "Metodologie de calcul al performanței energetice a clădirilor",
        descriere: "Metodologie națională pentru calculul performanței energetice",
        anPublicare: "2022",
        status: "în vigoare"
      },
      {
        cod: "C 107-2005",
        titlu: "Normativ pentru proiectarea și executarea lucrărilor de izolații termice la clădiri",
        descriere: "Cerințe de izolare termică pentru anvelopa clădirii",
        anPublicare: "2005",
        status: "în vigoare"
      },
      {
        cod: "PE 029-97",
        titlu: "Norme tehnice pentru proiectarea și executarea cazanelor de încălzire centrală",
        descriere: "Reglementări pentru centrale termice și cazane",
        anPublicare: "1997",
        status: "în vigoare"
      },
      {
        cod: "ST 048-00",
        titlu: "Specificație tehnică pentru instalații de încălzire prin pardoseală",
        descriere: "Cerințe specifice pentru sistemele de încălzire în pardoseală",
        anPublicare: "2000",
        status: "în vigoare"
      },
      {
        cod: "GP 056-00",
        titlu: "Ghid de proiectare a instalațiilor solare pentru producerea apei calde menajere",
        descriere: "Ghid pentru dimensionarea panourilor solare termice",
        anPublicare: "2000",
        status: "în vigoare"
      },
      {
        cod: "NP 048-00",
        titlu: "Normativ pentru expertizarea termică și energetică a clădirilor existente",
        descriere: "Proceduri de evaluare a performanței energetice",
        anPublicare: "2000",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "ventilare",
    titlu: "Ventilare și Climatizare",
    icon: "🌬️",
    descriere: "Normative pentru ventilație, climatizare și calitatea aerului",
    culoare: "blue",
    normative: [
      {
        cod: "I5-2010",
        titlu: "Normativ pentru proiectarea și executarea instalațiilor de ventilare și climatizare",
        descriere: "Normativ principal pentru instalații HVAC în România",
        anPublicare: "2010",
        status: "în vigoare"
      },
      {
        cod: "SR EN 16798-1:2019",
        titlu: "Performanța energetică a clădirilor - Ventilare pentru clădiri - Partea 1",
        descriere: "Parametri de mediu interior pentru proiectare și evaluare",
        anPublicare: "2019",
        status: "în vigoare"
      },
      {
        cod: "SR EN 13779:2007",
        titlu: "Ventilare pentru clădiri nerezidențiale - Cerințe de performanță",
        descriere: "Standard pentru sisteme de ventilare în clădiri non-rezidențiale",
        anPublicare: "2007",
        status: "în vigoare"
      },
      {
        cod: "SR EN 15251:2007",
        titlu: "Parametri de mediu interior pentru proiectarea și evaluarea performanței energetice",
        descriere: "Cerințe pentru calitatea aerului, temperatură, iluminat",
        anPublicare: "2007",
        status: "modificat"
      },
      {
        cod: "P118/2-2013",
        titlu: "Normativ privind securitatea la incendiu a construcțiilor - Partea 2: Instalații de stingere",
        descriere: "Include cerințe pentru instalații de desfumare",
        anPublicare: "2013",
        status: "în vigoare"
      },
      {
        cod: "NP 008-97",
        titlu: "Normativ privind igiena compoziției aerului în spații închise",
        descriere: "Cerințe pentru calitatea aerului interior",
        anPublicare: "1997",
        status: "în vigoare"
      },
      {
        cod: "GT 036-02",
        titlu: "Ghid de proiectare a instalațiilor de climatizare cu chillere și ventiloconvectoare",
        descriere: "Ghid pentru sisteme de climatizare cu apă refrigerată",
        anPublicare: "2002",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "electrice",
    titlu: "Instalații Electrice",
    icon: "⚡",
    descriere: "Normative pentru instalații electrice și iluminat",
    culoare: "yellow",
    normative: [
      {
        cod: "I7-2011",
        titlu: "Normativ pentru proiectarea și executarea instalațiilor electrice cu tensiuni până la 1000V c.a. și 1500V c.c.",
        descriere: "Normativ principal pentru instalații electrice de joasă tensiune",
        anPublicare: "2011",
        status: "în vigoare"
      },
      {
        cod: "PE 116-94",
        titlu: "Normativ de încercări și măsurători la echipamente și instalații electrice",
        descriere: "Proceduri de verificare a instalațiilor electrice",
        anPublicare: "1994",
        status: "în vigoare"
      },
      {
        cod: "NP 061-02",
        titlu: "Normativ pentru proiectarea și executarea sistemelor de iluminat artificial din clădiri",
        descriere: "Cerințe pentru iluminatul interior și exterior",
        anPublicare: "2002",
        status: "în vigoare"
      },
      {
        cod: "SR EN 12464-1:2021",
        titlu: "Lumină și iluminat - Iluminatul locurilor de muncă - Partea 1: Locuri de muncă interioare",
        descriere: "Standard european pentru iluminatul interior",
        anPublicare: "2021",
        status: "în vigoare"
      },
      {
        cod: "NTE 007/08/00",
        titlu: "Normativ pentru proiectarea și executarea rețelelor de cabluri electrice",
        descriere: "Reglementări pentru trasee de cabluri",
        anPublicare: "2008",
        status: "în vigoare"
      },
      {
        cod: "I18/1-2001",
        titlu: "Normativ pentru proiectarea și executarea instalațiilor de protecție la trăsnet",
        descriere: "Cerințe pentru sisteme de paratrăsnet și priză de pământ",
        anPublicare: "2001",
        status: "în vigoare"
      },
      {
        cod: "PE 107-95",
        titlu: "Normativ pentru proiectarea și executarea instalațiilor de curenți slabi din clădiri",
        descriere: "Reglementări pentru rețele de date, voce, securitate",
        anPublicare: "1995",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "gaze",
    titlu: "Instalații de Gaze Naturale",
    icon: "🔶",
    descriere: "Normative pentru instalații de gaze naturale și GPL",
    culoare: "amber",
    normative: [
      {
        cod: "I6-2011",
        titlu: "Normativ pentru proiectarea, executarea, verificarea și exploatarea instalațiilor de gaze naturale",
        descriere: "Normativ principal pentru instalații de gaze în România",
        anPublicare: "2011",
        status: "în vigoare"
      },
      {
        cod: "NTPEE-2008",
        titlu: "Norme tehnice pentru proiectarea și executarea rețelelor de gaze naturale",
        descriere: "Reglementări pentru rețele de distribuție gaze",
        anPublicare: "2008",
        status: "în vigoare"
      },
      {
        cod: "PE 028-97",
        titlu: "Norme tehnice pentru construcția, montarea și exploatarea arzătoarelor de gaze naturale",
        descriere: "Cerințe pentru arzătoare și echipamente pe gaz",
        anPublicare: "1997",
        status: "în vigoare"
      },
      {
        cod: "SR EN 1775:2007",
        titlu: "Alimentarea cu gaze - Conducte de gaze pentru clădiri - Presiune maximă de operare ≤ 5 bar",
        descriere: "Standard european pentru instalații de gaze interioare",
        anPublicare: "2007",
        status: "în vigoare"
      },
      {
        cod: "NP 057-02",
        titlu: "Normativ privind proiectarea și executarea conductelor de gaze naturale din polietilenă",
        descriere: "Cerințe specifice pentru conducte PE în exterior",
        anPublicare: "2002",
        status: "în vigoare"
      },
      {
        cod: "Ord. ANRE 32/2020",
        titlu: "Regulament privind racordarea la sistemul de distribuție a gazelor naturale",
        descriere: "Proceduri de racordare și avizare",
        anPublicare: "2020",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "automatizare",
    titlu: "Automatizare (BMS)",
    icon: "🤖",
    descriere: "Normative pentru automatizare, BMS și domotică",
    culoare: "violet",
    normative: [
      {
        cod: "SR EN ISO 16484-1:2010",
        titlu: "Sisteme de automatizare și control pentru clădiri (BACS) - Partea 1: Prezentare generală",
        descriere: "Standard de bază pentru sisteme BMS",
        anPublicare: "2010",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 16484-2:2004",
        titlu: "BACS - Partea 2: Hardware",
        descriere: "Cerințe pentru echipamente de automatizare",
        anPublicare: "2004",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 16484-3:2005",
        titlu: "BACS - Partea 3: Funcții",
        descriere: "Funcțiile sistemelor de automatizare în clădiri",
        anPublicare: "2005",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 16484-5:2017",
        titlu: "BACS - Partea 5: Protocol de comunicare de date BACnet",
        descriere: "Standard pentru protocol BACnet",
        anPublicare: "2017",
        status: "în vigoare"
      },
      {
        cod: "SR EN 15232-1:2017",
        titlu: "Performanța energetică a clădirilor - Impactul automatizării, controlului și managementului clădirii",
        descriere: "Metodologie de evaluare a eficienței BMS",
        anPublicare: "2017",
        status: "în vigoare"
      },
      {
        cod: "SR EN 50090",
        titlu: "Sisteme electronice pentru locuințe și clădiri (HBES) - Seria KNX",
        descriere: "Standard pentru sisteme KNX de automatizare",
        anPublicare: "2005",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "case-pasive",
    titlu: "Case Pasive și Clădiri nZEB",
    icon: "🏠",
    descriere: "Normative pentru clădiri pasive și cu consum aproape zero",
    culoare: "green",
    normative: [
      {
        cod: "Directiva 2010/31/UE",
        titlu: "Directiva privind performanța energetică a clădirilor (EPBD)",
        descriere: "Directiva europeană de bază pentru eficiență energetică",
        anPublicare: "2010",
        status: "în vigoare"
      },
      {
        cod: "Legea 372/2005",
        titlu: "Legea performanței energetice a clădirilor",
        descriere: "Transpunerea directivei EPBD în legislația română",
        anPublicare: "2005",
        status: "modificat"
      },
      {
        cod: "Ord. 2641/2017",
        titlu: "Cerințe nZEB pentru clădiri noi începând cu 2021",
        descriere: "Definiție și cerințe pentru clădiri cu consum aproape zero",
        anPublicare: "2017",
        status: "în vigoare"
      },
      {
        cod: "Passivhaus Standard",
        titlu: "Standard Passivhaus (PHI Germania)",
        descriere: "Cerințe: max 15 kWh/m²·an încălzire, etanșeitate n50 < 0.6/h",
        anPublicare: "1996",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 13790:2008",
        titlu: "Performanța energetică a clădirilor - Calculul consumului de energie pentru încălzire și răcire",
        descriere: "Metodologie de calcul a consumurilor energetice",
        anPublicare: "2008",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 13789:2017",
        titlu: "Performanță termică a clădirilor - Coeficienți de transfer termic prin transmisie și ventilare",
        descriere: "Metodologie pentru calculul pierderilor termice",
        anPublicare: "2017",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 52016-1:2017",
        titlu: "Performanța energetică a clădirilor - Necesarul de energie pentru încălzire și răcire",
        descriere: "Standard nou pentru calculul performanței energetice",
        anPublicare: "2017",
        status: "în vigoare"
      }
    ]
  },
  {
    id: "certificare",
    titlu: "Certificare Energetică",
    icon: "📊",
    descriere: "Normative pentru certificarea și auditul energetic",
    culoare: "emerald",
    normative: [
      {
        cod: "MC 001-2022",
        titlu: "Metodologie de calcul al performanței energetice a clădirilor",
        descriere: "Metodologia oficială pentru certificare energetică în România",
        anPublicare: "2022",
        status: "în vigoare"
      },
      {
        cod: "Legea 121/2014",
        titlu: "Legea privind eficiența energetică",
        descriere: "Cadrul legal pentru eficiență energetică și audit",
        anPublicare: "2014",
        status: "în vigoare"
      },
      {
        cod: "Ord. 2237/2010",
        titlu: "Regulament pentru atestarea auditorilor energetici pentru clădiri",
        descriere: "Proceduri de atestare a auditorilor energetici",
        anPublicare: "2010",
        status: "în vigoare"
      },
      {
        cod: "SR EN 16247-1:2012",
        titlu: "Audituri energetice - Partea 1: Cerințe generale",
        descriere: "Standard european pentru audituri energetice",
        anPublicare: "2012",
        status: "în vigoare"
      },
      {
        cod: "SR EN 16247-2:2014",
        titlu: "Audituri energetice - Partea 2: Clădiri",
        descriere: "Cerințe specifice pentru auditul clădirilor",
        anPublicare: "2014",
        status: "în vigoare"
      },
      {
        cod: "SR EN ISO 50001:2018",
        titlu: "Sisteme de management al energiei - Cerințe și ghid de utilizare",
        descriere: "Standard pentru implementarea unui sistem de management energetic",
        anPublicare: "2018",
        status: "în vigoare"
      },
      {
        cod: "SR EN 15603:2008",
        titlu: "Performanța energetică a clădirilor - Consumul global de energie și definirea claselor energetice",
        descriere: "Metodologie pentru clasificarea energetică A-G",
        anPublicare: "2008",
        status: "în vigoare"
      }
    ]
  }
];

// ==========================================
// COMPONENTA PRINCIPALĂ
// ==========================================
export default function NormativePage() {
  const [categorieActiva, setCategorieActiva] = useState<CategorieNormativ | null>(null);
  const [cautare, setCautare] = useState("");

  // Filtrare normative după căutare
  const filtreazaNormative = (normative: Normativ[]) => {
    if (!cautare.trim()) return normative;
    const searchLower = cautare.toLowerCase();
    return normative.filter(
      n => n.cod.toLowerCase().includes(searchLower) ||
           n.titlu.toLowerCase().includes(searchLower) ||
           n.descriere.toLowerCase().includes(searchLower)
    );
  };

  // Găsește categoria activă
  const categoriaSelectata = categoriiNormative.find(c => c.id === categorieActiva);

  // Culori pentru categorii
  const getCuloareClasa = (culoare: string, tip: "bg" | "border" | "text") => {
    const culori: Record<string, Record<string, string>> = {
      cyan: { bg: "bg-cyan-900/20", border: "border-cyan-500/30", text: "text-cyan-400" },
      orange: { bg: "bg-orange-900/20", border: "border-orange-500/30", text: "text-orange-400" },
      red: { bg: "bg-red-900/20", border: "border-red-500/30", text: "text-red-400" },
      blue: { bg: "bg-blue-900/20", border: "border-blue-500/30", text: "text-blue-400" },
      yellow: { bg: "bg-yellow-900/20", border: "border-yellow-500/30", text: "text-yellow-400" },
      amber: { bg: "bg-amber-900/20", border: "border-amber-500/30", text: "text-amber-400" },
      violet: { bg: "bg-violet-900/20", border: "border-violet-500/30", text: "text-violet-400" },
      green: { bg: "bg-green-900/20", border: "border-green-500/30", text: "text-green-400" },
      emerald: { bg: "bg-emerald-900/20", border: "border-emerald-500/30", text: "text-emerald-400" }
    };
    return culori[culoare]?.[tip] || "";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "în vigoare": return "bg-green-900/50 text-green-400 border-green-500/30";
      case "abrogat": return "bg-red-900/50 text-red-400 border-red-500/30";
      case "modificat": return "bg-amber-900/50 text-amber-400 border-amber-500/30";
      default: return "bg-gray-800 text-gray-400";
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
            {/* Header cu Gradient */}
      <div className="relative overflow-hidden border-b border-gray-800">
        {/* Background gradient cald */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-gray-900 to-cyan-900/40" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">📚</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Normative, Legislație și Reglementări
            </h1>
          </div>
          <p className="text-blue-200/80 text-lg max-w-2xl">
            Colecție completă de normative tehnice pentru instalații în construcții
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Navigare rapidă */}
        <div className="flex flex-wrap gap-3 mb-8">
          <a 
            href="#normative" 
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
          >
            📚 Normative Tehnice
          </a>
          <a 
            href="/europene" 
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
          >
            🇪🇺 Proiecte Europene
          </a>
        </div>

        {/* ==========================================
            SECȚIUNEA NORMATIVE TEHNICE
        ========================================== */}
        <section id="normative" className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📚</span> Normative Tehnice
          </h2>

          {/* Căutare */}
          <div className="mb-6">
            <label htmlFor="cautare-normative" className="sr-only">
              Caută normative
            </label>
            <div className="relative">
              <input
                id="cautare-normative"
                type="text"
                placeholder="Caută după cod, titlu sau descriere..."
                value={cautare}
                onChange={(e) => setCautare(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
                aria-label="Caută normative după cod, titlu sau descriere"
              />
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Grid Categorii */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {categoriiNormative.map((cat) => {
              const normativeFiltrate = filtreazaNormative(cat.normative);
              const areRezultate = normativeFiltrate.length > 0;
              
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategorieActiva(categorieActiva === cat.id ? null : cat.id)}
                  disabled={!areRezultate && cautare.length > 0}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    categorieActiva === cat.id
                      ? `${getCuloareClasa(cat.culoare, "border")} ${getCuloareClasa(cat.culoare, "bg")} ring-2 ring-${cat.culoare}-500/50`
                      : "border-gray-800 bg-gray-900/50 hover:border-gray-700 hover:bg-gray-900"
                  } ${!areRezultate && cautare.length > 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                  aria-expanded={categorieActiva === cat.id}
                  aria-label={`${cat.titlu} - ${normativeFiltrate.length} normative`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h3 className={`font-semibold ${categorieActiva === cat.id ? getCuloareClasa(cat.culoare, "text") : "text-white"}`}>
                        {cat.titlu}
                      </h3>
                      <p className="text-gray-500 text-xs">
                        {normativeFiltrate.length} normative
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{cat.descriere}</p>
                </button>
              );
            })}
          </div>

          {/* Lista Normative pentru categoria selectată */}
          {categoriaSelectata && (
            <div className={`border rounded-xl p-6 ${getCuloareClasa(categoriaSelectata.culoare, "border")} ${getCuloareClasa(categoriaSelectata.culoare, "bg")}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-bold ${getCuloareClasa(categoriaSelectata.culoare, "text")} flex items-center gap-2`}>
                  <span>{categoriaSelectata.icon}</span>
                  {categoriaSelectata.titlu}
                </h3>
                <button
                  type="button"
                  onClick={() => setCategorieActiva(null)}
                  className="text-gray-400 hover:text-white text-sm"
                  aria-label="Închide lista de normative"
                >
                  ✕ Închide
                </button>
              </div>

              <div className="space-y-3">
                {filtreazaNormative(categoriaSelectata.normative).map((normativ, idx) => (
                  <div 
                    key={idx}
                    className="bg-black/40 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono font-bold ${getCuloareClasa(categoriaSelectata.culoare, "text")}`}>
                          {normativ.cod}
                        </span>
                        {normativ.anPublicare && (
                          <span className="text-gray-500 text-xs">
                            ({normativ.anPublicare})
                          </span>
                        )}
                      </div>
                      <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(normativ.status)}`}>
                        {normativ.status}
                      </span>
                    </div>
                    <h4 className="text-white font-medium text-sm mb-1">
                      {normativ.titlu}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {normativ.descriere}
                    </p>
                    {normativ.link && (
                      <a
                        href={normativ.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-cyan-400 hover:text-cyan-300 text-sm"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Accesează documentul
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mesaj când nu e selectată nicio categorie */}
          {!categoriaSelectata && !cautare && (
            <div className="text-center py-8 text-gray-500">
              <p>Selectează o categorie pentru a vedea normativele disponibile</p>
            </div>
          )}

          {/* Rezultate căutare din toate categoriile */}
          {cautare && !categorieActiva && (
            <div className="space-y-6">
              {categoriiNormative.map(cat => {
                const rezultate = filtreazaNormative(cat.normative);
                if (rezultate.length === 0) return null;
                
                return (
                  <div key={cat.id} className={`border rounded-xl p-4 ${getCuloareClasa(cat.culoare, "border")} bg-gray-900/30`}>
                    <h4 className={`font-semibold ${getCuloareClasa(cat.culoare, "text")} mb-3 flex items-center gap-2`}>
                      <span>{cat.icon}</span>
                      {cat.titlu} ({rezultate.length})
                    </h4>
                    <div className="space-y-2">
                      {rezultate.slice(0, 3).map((n, idx) => (
                        <div key={idx} className="bg-black/40 rounded p-3">
                          <span className={`font-mono text-sm ${getCuloareClasa(cat.culoare, "text")}`}>{n.cod}</span>
                          <span className="text-gray-400 text-sm ml-2">- {n.titlu.substring(0, 60)}...</span>
                        </div>
                      ))}
                      {rezultate.length > 3 && (
                        <button
                          type="button"
                          onClick={() => setCategorieActiva(cat.id)}
                          className="text-cyan-400 hover:text-cyan-300 text-sm"
                        >
                          Vezi toate ({rezultate.length}) →
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

                {/* ==========================================
            SECȚIUNEA PROIECTE EUROPENE (actualizată din Bibliografie)
        ========================================== */}
        <section id="europene" className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🇪🇺</span> Proiecte Europene pentru Instalații
          </h2>
          <p className="text-gray-400 mb-4">
            Ghid simplificat pentru accesarea fondurilor europene în domeniul construcțiilor și instalațiilor.
            Resurse esențiale pentru studenți și masteranzi.
          </p>

          <Link
            href="/europene"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/40 to-green-900/40 hover:from-blue-900/60 hover:to-green-900/60 border border-blue-500/30 text-white px-6 py-3 rounded-xl transition-all"
          >
            <span>🚀</span>
            Descoperă Proiecte Europene →
          </Link>
          
          <p className="mt-4 text-sm text-gray-500">
            Descoperă Proiecte Europene{" "}
            <Link href="/europene" className="text-cyan-400 hover:underline">
              /europene
            </Link>
            {" "}pentru acces direct.
          </p>
        </section>

        {/* ==========================================
            FOOTER / NOTĂ
        ========================================== */}
        <footer className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>
            Normativele prezentate sunt cele în vigoare la data actualizării.
            <br />
            Verificați întotdeauna versiunile oficiale pe <a href="https://legislatie.just.ro" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">legislatie.just.ro</a>
          </p>
        </footer>
      </div>
    </main>
  );
}