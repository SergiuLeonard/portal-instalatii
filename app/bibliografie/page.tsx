"use client";

import { useState, useEffect } from "react";

// ==========================================
// TIPURI ȘI DATE
// ==========================================
type DocumentCategory = "legi" | "programe" | "manuale";

interface DocumentItem {
  id: string;
  titlu: string;
  descriere: string;
  categorie: DocumentCategory;
  link?: string;
  procentExamen: number;
  extras: string[];
  articoleEsentiale?: string[];
  capcaneExamen?: string[];
  actualizat?: string;
}

interface Scenariu {
  id: string;
  intrebare: string;
  raspuns: string;
  referinta: string;
}

interface ComparatorItem {
  situatie: string;
  lege: string;
  articol: string;
}

// ==========================================
// DATE DOCUMENTE
// ==========================================
const documente: DocumentItem[] = [
  {
    id: "manual-beneficiar",
    titlu: "Manualul Beneficiarului Ediția 6/2025",
    descriere: "Capitolul 5 – Monitorizarea Contractului de finanțare",
    categorie: "manuale",
    link: "https://regionordvest.ro/documente-utile/",
    procentExamen: 60,
    extras: [
      "5.1 Raportare: Periodică trimestrială, declarații pe propria răspundere",
      "5.2 Vizite monitorizare: Minim 2/an, constatare grad fizic de realizare",
      "5.3 Indicatori: Realizare (output-uri fizice) vs. Rezultat (impact)",
      "5.4 Modificări: Neînsemnate (notificare) vs. Importante (aprobare ADR) vs. Majore (AM)",
      "5.5 Acte adiționale: Prelungire durată, modificare indicatori, majorare buget",
      "5.6 Flux de plăți: Cerere rambursare, verificare eligibilitate, autorizare plată",
      "5.7 Recepție: Condiții pentru închidere proiect (recepție tehnică + audit)",
      "5.9 Durabilitate: Obligații de menținere 5 ani după finalizare",
      "Cheltuieli eligibile: TVA deductibil = neeligibil, cheltuieli admin max 10%"
    ],
    articoleEsentiale: [
      "Cap. 5.4 - Tipuri de modificări și circuitul de aprobare",
      "Cap. 5.6 - Fluxul cererilor de rambursare",
      "Cap. 5.7 - Condițiile pentru închiderea proiectului"
    ],
    capcaneExamen: [
      "Diferența între modificare NEÎNSEMNATĂ (doar notificare) și IMPORTANTĂ (necesită aprobare)",
      "TVA deductibil este NEELIGIBIL - greșeală frecventă!",
      "Durabilitatea de 5 ani se calculează de la PLATA FINALĂ, nu de la recepție"
    ],
    actualizat: "2025"
  },
  {
    id: "program-nord-vest",
    titlu: "Programul Regional Nord-Vest 2021-2027",
    descriere: "Priorități de finanțare - Obiective de politică și Obiective specifice",
    categorie: "programe",
    link: "https://regionordvest.ro/prioritati-de-finantare/",
    procentExamen: 20,
    extras: [
      "Prioritatea 1: Regiune competitivă (PI 1.1 - PIB/regiune, PI 1.2 - locuri de muncă)",
      "Prioritatea 2: Localități prietenoase cu mediul (PI 2.1 - emisii CO2, PI 2.2 - eficiență energetică)",
      "Prioritatea 3: Infrastructură de transport sigură și sustenabilă",
      "Prioritatea 4: Regiune accesibilă - mobilitate urbană",
      "Prioritatea 5: Regiune educată (PI 5.1 - reducere părăsire timpurie școală)",
      "Prioritatea 6: Regiune atractivă - turism și patrimoniu",
      "Prioritatea 7: Comunități reziliente - sănătate și servicii sociale"
    ],
    articoleEsentiale: [
      "Indicatori de realizare vs. Indicatori de rezultat - ESENȚIAL!",
      "Cofinanțare: 85% FEDR, 15% buget național/beneficiar",
      "Axele prioritare: 1=competitivitate, 2=energie, 3=transport, 4=mobilitate, 5=educație, 6=turism, 7=social"
    ],
    capcaneExamen: [
      "Indicatorul de REALIZARE = output fizic (km drum, m² renovați)",
      "Indicatorul de REZULTAT = impact (populație servită, emisii reduse)",
      "Nu confunda PRIORITATEA cu OBIECTIVUL SPECIFIC!"
    ],
    actualizat: "2024"
  },
  {
    id: "legea-10-1995",
    titlu: "Legea nr. 10/1995",
    descriere: "Privind calitatea în construcții",
    categorie: "legi",
    procentExamen: 10,
    extras: [
      "Art. 2: Definiții - INVESTITOR (beneficiar), PROIECTANT, CONSTRUCTOR, DIRIGINTE DE ȘANTIER",
      "Art. 5-6: Fazele calității: Proiectare → Execuție → Recepție → Exploatare",
      "Art. 14-18: Controlul execuției - verificări în faza de execuție (JURNAL de șantier)",
      "Art. 20-21: RECEPȚIA LA TERMINAREA LUCRĂRILOR - obligatorie pentru plată finală!",
      "Art. 24-25: RECEPȚIA FINALĂ - după perioada de garanție",
      "Art. 26-30: Garanția lucrărilor - 10 ani structuri, 2 ani instalații"
    ],
    articoleEsentiale: [
      "Art. 2 - Definițiile factorilor implicați",
      "Art. 20-21 - Recepția la terminarea lucrărilor",
      "Art. 24-25 - Recepția finală"
    ],
    capcaneExamen: [
      "RECEPȚIA LA TERMINAREA LUCRĂRILOR ≠ RECEPȚIA FINALĂ",
      "Recepția finală se face DUPĂ perioada de garanție, nu imediat",
      "Comisia de recepție include: investitor, constructor, diriginte, proiectant",
      "Fără PV de recepție = fără decontare!"
    ],
    actualizat: "2023"
  },
  {
    id: "legea-50-1991",
    titlu: "Legea nr. 50/1991",
    descriere: "Privind autorizarea executării lucrărilor de construcții",
    categorie: "legi",
    procentExamen: 5,
    extras: [
      "Art. 4-5: Certificat de urbanism (CU) - 12 luni valabilitate pentru autorizare",
      "Art. 6: Autorizația de construire - eliberată de primărie, 24 luni valabilitate",
      "Art. 7: Documentații necesare: PTh, avize ISU, Mediu, Sănătate",
      "Art. 11-13: Condiții pentru eliberare - PUZ/PUD, acorduri vecini",
      "Art. 27-29: DEVIERI și MODIFICĂRI în execuție - aprobări necesare",
      "Art. 30-31: Lucrări fără autorizație = contravenții/penal"
    ],
    articoleEsentiale: [
      "Art. 6-7 - Autorizația de construire și documentații",
      "Art. 27-29 - Modificări în execuție",
      "Art. 30-31 - Sancțiuni"
    ],
    capcaneExamen: [
      "Autorizația de construire = 24 luni valabilitate (nu 12!)",
      "Certificatul de urbanism = 12 luni (pentru obținere autorizație)",
      "Lucrări fără autorizație = SUSPENDARE FINANȚARE imediată!"
    ],
    actualizat: "2024"
  },
  {
    id: "legea-315-2004",
    titlu: "Legea nr. 315/2004",
    descriere: "Privind dezvoltarea regională în România (actualizată)",
    categorie: "legi",
    procentExamen: 5,
    extras: [
      "Art. 7: Agențiile pentru Dezvoltare Regională (ADR) - rol în implementarea politicilor regionale",
      "Art. 10: Atribuții specifice ADR - monitorizarea programelor operaționale și regionale",
      "Art. 12: Consiliul pentru Dezvoltare Regională (CDR) - rol consultativ",
      "Art. 20: Fonduri pentru dezvoltare regională - alocare și utilizare",
      "Termen cheie: Disparități regionale, competitivitate regională"
    ],
    articoleEsentiale: [
      "Art. 7 - Definirea și rolul ADR",
      "Art. 10 - Atribuțiile ADR în monitorizare",
      "Art. 12 - Consiliul pentru Dezvoltare Regională"
    ],
    capcaneExamen: [
      "ADR nu FINANȚEAZĂ direct, ci MONITORIZEAZĂ implementarea!",
      "România are 8 regiuni de dezvoltare (Nord-Vest, Centru, etc.)",
      "CDR = rol CONSULTATIV, nu decizional"
    ],
    actualizat: "2024"
  }
];

// ==========================================
// SCENARII DE EXAMEN
// ==========================================
const scenarii: Scenariu[] = [
  {
    id: "s1",
    intrebare: "Beneficiarul solicită decontare dar nu are Procesul Verbal de Recepție la Terminarea Lucrărilor. Ce faci?",
    raspuns: "OPREȘTI PLATA! Conform Legii 10/1995 Art.20 și Manualului Beneficiarului Cap.5.7, recepția la terminarea lucrărilor este OBLIGATORIE înainte de plata finală. Soliciți beneficiarului să completeze procedura de recepție.",
    referinta: "Legea 10/1995, Art. 20-21 + Manual Beneficiar Cap. 5.7"
  },
  {
    id: "s2",
    intrebare: "Beneficiarul vrea să mute o stație de pompare la 50m distanță față de proiectul inițial. Este deviere sau modificare?",
    raspuns: "Este MODIFICARE IMPORTANTĂ (schimbare locație a unui obiectiv). Necesită aprobare de la ADR conform Manualului Beneficiarului Ed.6/2025, Cap.5.4. Beneficiarul trebuie să depună cerere de modificare cu justificare tehnică și impact asupra indicatorilor.",
    referinta: "Manual Beneficiar Cap. 5.4 - Modificări importante"
  },
  {
    id: "s3",
    intrebare: "Care este diferența între indicatorul de realizare și indicatorul de rezultat?",
    raspuns: "REALIZARE = output fizic, măsurabil direct (ex: 5 km rețea apă, 100 m² renovați). REZULTAT = impact/efect asupra populației țintă (ex: 500 persoane cu acces la apă, reducere 20% emisii CO2). Indicatorii de rezultat se măsoară de obicei la 1 an după finalizare.",
    referinta: "Program Regional NV 2021-2027 + Manual Cap. 5.3"
  },
  {
    id: "s4",
    intrebare: "Beneficiarul a inclus TVA-ul în cererea de rambursare. Este eligibil?",
    raspuns: "DEPINDE! TVA este eligibil DOAR dacă beneficiarul NU poate recupera TVA-ul. Dacă beneficiarul este plătitor de TVA și poate deduce, atunci TVA-ul este NEELIGIBIL. Verifici statutul fiscal al beneficiarului și documentele justificative.",
    referinta: "Manual Beneficiar - Cheltuieli eligibile"
  },
  {
    id: "s5",
    intrebare: "Un beneficiar dorește prelungirea duratei proiectului cu 6 luni. Ce procedură urmează?",
    raspuns: "Prelungirea duratei necesită ACT ADIȚIONAL la contractul de finanțare. Beneficiarul depune cerere motivată (întârzieri obiective, condiții meteo, etc.), ADR analizează și aprobă/respinge. Prelungirea nu poate depăși limita maximă a programului.",
    referinta: "Manual Beneficiar Cap. 5.5 - Acte adiționale"
  },
  {
    id: "s6",
    intrebare: "La vizita de monitorizare constați că lucrările sunt executate fără autorizație de construire. Ce faci?",
    raspuns: "SUSPENDARE IMEDIATĂ a finanțării! Conform Legii 50/1991 Art.30-31, lucrările fără autorizație constituie contravenție/infracțiune. Notifici beneficiarul, raportezi situația și soliciți regularizare. Plățile se blochează până la obținerea autorizației.",
    referinta: "Legea 50/1991, Art. 30-31"
  }
];

// ==========================================
// COMPARATOR LEGISLATIV
// ==========================================
const comparator: ComparatorItem[] = [
  { situatie: "Autorizație construire necesară", lege: "Legea 50/1991", articol: "Art. 6-7" },
  { situatie: "Verificare calitate execuție", lege: "Legea 10/1995", articol: "Art. 14-19" },
  { situatie: "Recepția la terminarea lucrărilor", lege: "Legea 10/1995", articol: "Art. 20-21" },
  { situatie: "Recepția finală (după garanție)", lege: "Legea 10/1995", articol: "Art. 24-25" },
  { situatie: "Modificare proiect în execuție", lege: "Manual Beneficiar", articol: "Cap. 5.4" },
  { situatie: "Cerere de rambursare", lege: "Manual Beneficiar", articol: "Cap. 5.6" },
  { situatie: "Prelungire durată proiect", lege: "Manual Beneficiar", articol: "Cap. 5.5" },
  { situatie: "Durabilitatea proiectului", lege: "Manual Beneficiar", articol: "Cap. 5.9" },
  { situatie: "Rol și atribuții ADR", lege: "Legea 315/2004", articol: "Art. 7, 10" },
  { situatie: "Indicatori de monitorizare", lege: "Program Regional NV", articol: "Anexa Indicatori" }
];

// ==========================================
// COMPONENTA PRINCIPALĂ
// ==========================================
export default function BibliografiePage() {
  const [modExamen, setModExamen] = useState(false);
  const [categorieActiva, setCategorieActiva] = useState<DocumentCategory | "toate">("toate");
  const [documentDeschis, setDocumentDeschis] = useState<string | null>(null);
  const [scenariuDeschis, setScenariuDeschis] = useState<string | null>(null);
  const [progres, setProgres] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState({ zile: 8, ore: 10, minute: 0 });

  // Data examenului - MODIFICĂ AICI
  const examenDate = new Date('2026-01-10T10:00:00');

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = examenDate.getTime() - now.getTime();
      if (diff > 0) {
        setTimeLeft({
          zile: Math.floor(diff / (1000 * 60 * 60 * 24)),
          ore: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minute: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Load/Save progres din localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bibliografie-progres');
    if (saved) setProgres(JSON.parse(saved));
  }, []);

  const toggleProgres = (key: string) => {
    const newProgres = { ...progres, [key]: !progres[key] };
    setProgres(newProgres);
    localStorage.setItem('bibliografie-progres', JSON.stringify(newProgres));
  };

  const documenteFiltrate = categorieActiva === "toate" 
    ? documente 
    : documente.filter(d => d.categorie === categorieActiva);

  const getCategorieColor = (categorie: DocumentCategory) => {
    switch (categorie) {
      case "legi": return "text-amber-400 border-amber-500/30 bg-amber-900/20";
      case "programe": return "text-emerald-400 border-emerald-500/30 bg-emerald-900/20";
      case "manuale": return "text-purple-400 border-purple-500/30 bg-purple-900/20";
    }
  };

  const getProcentColor = (procent: number) => {
    if (procent >= 50) return "text-red-400 bg-red-900/30";
    if (procent >= 15) return "text-amber-400 bg-amber-900/30";
    return "text-gray-400 bg-gray-800";
  };

  // Calculează progresul total
  const totalItems = documente.reduce((acc, doc) => acc + (doc.extras?.length || 0), 0);
  const completedItems = Object.values(progres).filter(Boolean).length;
  const progresPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header cu Timer */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🎯</span>
                <h1 className="text-2xl md:text-3xl font-bold text-white">
                  Bibliografie Concurs - Dashboard Învățare
                </h1>
              </div>
              <p className="text-gray-400 text-sm">
                Pregătire activă pentru examenul de Ofițer Monitorizare ADR Nord-Vest
              </p>
            </div>
            
            {/* Timer Examen */}
            {timeLeft.zile >= 0 && (
              <div className="flex items-center gap-3 bg-red-900/30 border border-red-500/40 px-4 py-3 rounded-lg">
                <span className="text-2xl">⏰</span>
                <div>
                  <div className="text-red-400 text-xs uppercase tracking-wider">Examen în:</div>
                  <div className="font-mono font-bold text-white text-lg">
                    {timeLeft.zile}z {timeLeft.ore}h {timeLeft.minute}m
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-800 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${progresPercent}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>Progres studiu: {completedItems}/{totalItems} puncte</span>
            <span className="font-bold text-cyan-400">{progresPercent}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        
        {/* ==========================================
            SECȚIUNEA 1: QUICK WINS
        ========================================== */}
        <section className="bg-gradient-to-br from-amber-900/20 to-orange-900/10 border border-amber-500/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <span>⚡</span> QUICK WINS - Învață Primul!
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Distribuția aproximativă a subiectelor la examen. Concentrează-te pe cele cu procent mare!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {documente
              .sort((a, b) => b.procentExamen - a.procentExamen)
              .map((doc) => (
              <div 
                key={doc.id}
                className="flex items-center justify-between bg-black/40 rounded-lg p-3 hover:bg-black/60 transition-colors cursor-pointer"
                onClick={() => {
                  setCategorieActiva("toate");
                  setDocumentDeschis(doc.id);
                  document.getElementById(doc.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${getProcentColor(doc.procentExamen)}`}>
                    {doc.procentExamen}%
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{doc.titlu}</div>
                    <div className="text-gray-500 text-xs">{doc.descriere.substring(0, 40)}...</div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECȚIUNEA 2: MOD EXAMEN / SCENARII
        ========================================== */}
        <section>
          {!modExamen ? (
            <button 
              onClick={() => setModExamen(true)}
              className="w-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 hover:from-purple-900/60 hover:to-pink-900/60 border border-purple-500/30 text-white py-4 rounded-xl transition-all font-semibold flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🎓</span>
              <span>Activează Modul Pregătire Examen - Scenarii Practice</span>
            </button>
          ) : (
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                  <span>🎓</span> Scenarii de Examen - Întrebări Practice
                </h2>
                <button 
                  onClick={() => setModExamen(false)}
                  className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Închide
                </button>
              </div>
              
              <div className="space-y-3">
                {scenarii.map((scenariu, idx) => (
                  <div key={scenariu.id} className="bg-black/40 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setScenariuDeschis(scenariuDeschis === scenariu.id ? null : scenariu.id)}
                      className="w-full p-4 text-left flex items-start gap-3"
                    >
                      <span className="bg-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-white font-medium">{scenariu.intrebare}</p>
                      </div>
                      <span className={`text-purple-400 transition-transform ${scenariuDeschis === scenariu.id ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {scenariuDeschis === scenariu.id && (
                      <div className="px-4 pb-4 border-t border-purple-900/30">
                        <div className="pt-3 pl-10">
                          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 mb-2">
                            <div className="text-green-400 text-xs uppercase tracking-wider mb-1">✓ Răspuns Corect:</div>
                            <p className="text-gray-200 text-sm">{scenariu.raspuns}</p>
                          </div>
                          <div className="text-xs text-gray-500">
                            📚 Referință: {scenariu.referinta}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ==========================================
            SECȚIUNEA 3: COMPARATOR LEGISLATIV
        ========================================== */}
        <section className="bg-gray-900/50 border border-gray-700 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span>📊</span> Comparator Legislativ - Ce Lege Aplici?
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wider">Situație</th>
                  <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wider">Legea Aplicabilă</th>
                  <th className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wider">Articol Cheie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {comparator.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-4 py-3 text-white text-sm">{item.situatie}</td>
                    <td className="px-4 py-3">
                      <span className="text-cyan-400 font-mono text-sm">{item.lege}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-mono">{item.articol}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ==========================================
            SECȚIUNEA 4: FILTRE CATEGORII
        ========================================== */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "toate", label: "Toate", icon: "📚" },
            { id: "manuale", label: "Manuale", icon: "📖" },
            { id: "programe", label: "Programe", icon: "🗺️" },
            { id: "legi", label: "Legi", icon: "⚖️" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategorieActiva(cat.id as DocumentCategory | "toate")}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all flex items-center gap-2 ${
                categorieActiva === cat.id
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* ==========================================
            SECȚIUNEA 5: FIȘE DOCUMENTE DETALIATE
        ========================================== */}
        <section className="space-y-4">
          {documenteFiltrate.map((doc) => (
            <div 
              key={doc.id}
              id={doc.id}
              className={`border rounded-xl overflow-hidden transition-all ${
                documentDeschis === doc.id 
                  ? "border-cyan-500/50 bg-gray-800/50" 
                  : "border-gray-800 bg-gray-900/30 hover:border-gray-700"
              }`}
            >
              {/* Header Document */}
              <button
                onClick={() => setDocumentDeschis(documentDeschis === doc.id ? null : doc.id)}
                className="w-full p-4 flex items-start justify-between text-left"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded border ${getCategorieColor(doc.categorie)}`}>
                      {doc.categorie.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded font-bold ${getProcentColor(doc.procentExamen)}`}>
                      {doc.procentExamen}% din examen
                    </span>
                    {doc.actualizat && (
                      <span className="text-xs text-gray-500">
                        Actualizat: {doc.actualizat}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {doc.titlu}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {doc.descriere}
                  </p>
                </div>
                <div className="ml-4 text-gray-500">
                  <svg 
                    className={`w-5 h-5 transition-transform ${documentDeschis === doc.id ? "rotate-180" : ""}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Conținut Expandabil */}
              {documentDeschis === doc.id && (
                <div className="px-4 pb-4 border-t border-gray-700">
                  <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    
                    {/* Coloana 1: Conținut cu Checkbox */}
                    <div>
                      <h4 className="text-cyan-400 text-sm font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span>📝</span> Conținut de studiat:
                      </h4>
                      <ul className="space-y-2">
                        {doc.extras?.map((item, idx) => {
                          const checkKey = `${doc.id}-${idx}`;
                          return (
                            <li key={idx} className="flex items-start gap-2 group">
                              <input 
                                type="checkbox"
                                checked={progres[checkKey] || false}
                                onChange={() => toggleProgres(checkKey)}
                                className="mt-1 w-4 h-4 accent-cyan-500 cursor-pointer flex-shrink-0"
                              />
                              <span className={`text-sm transition-all ${
                                progres[checkKey] ? "text-gray-500 line-through" : "text-gray-300"
                              }`}>
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Coloana 2: Articole Esențiale + Capcane */}
                    <div className="space-y-4">
                      {/* Articole Esențiale */}
                      {doc.articoleEsentiale && (
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                          <h4 className="text-green-400 text-sm font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span>🔑</span> Articole Esențiale:
                          </h4>
                          <ul className="space-y-1">
                            {doc.articoleEsentiale.map((art, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-green-400">▸</span>
                                {art}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Capcane Examen */}
                      {doc.capcaneExamen && (
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                          <h4 className="text-red-400 text-sm font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                            <span>⚠️</span> Capcane la Examen:
                          </h4>
                          <ul className="space-y-1">
                            {doc.capcaneExamen.map((cap, idx) => (
                              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-red-400">!</span>
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Link Extern */}
                      {doc.link && (
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-400 px-4 py-3 rounded-lg transition-colors text-sm"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Accesează documentul oficial
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ==========================================
            SECȚIUNEA 6: SURSE OFICIALE
        ========================================== */}
        <section className="border border-gray-800 rounded-xl p-6 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span>🔗</span> Surse Oficiale pentru Descărcare
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { nume: "ADR Nord-Vest", url: "https://regionordvest.ro", desc: "Documente și manuale" },
              { nume: "Legislație RO", url: "https://legislatie.just.ro", desc: "Legi actualizate" },
              { nume: "MDLPA", url: "https://www.mdlpa.ro", desc: "Minister Dezvoltare" },
              { nume: "ISC", url: "https://www.isc.gov.ro", desc: "Inspecția Construcții" }
            ].map((sursa) => (
              <a
                key={sursa.url}
                href={sursa.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{sursa.nume}</div>
                  <div className="text-gray-500 text-xs">{sursa.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm font-mono py-4">
          Dashboard actualizat: Ianuarie 2025 | Verifică periodic pentru modificări legislative
        </div>
      </div>
    </main>
  );
}