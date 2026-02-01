"use client";

import { useState } from "react";

// Tipuri de documente
type DocumentCategory = "legi" | "programe" | "manuale";

interface Document {
  id: string;
  titlu: string;
  descriere: string;
  categorie: DocumentCategory;
  link?: string;
  extras?: string[];
  actualizat?: string;
}

const documente: Document[] = [
  {
    id: "legea-315-2004",
    titlu: "Legea nr. 315/2004",
    descriere: "Privind dezvoltarea regională în România (actualizată)",
    categorie: "legi",
    extras: [
      "Stabilește cadrul instituțional pentru dezvoltarea regională",
      "Definește cele 8 regiuni de dezvoltare ale României",
      "Reglementează funcționarea Consiliilor pentru Dezvoltare Regională",
      "Stabilește atribuțiile Agențiilor pentru Dezvoltare Regională",
      "Definește mecanismele de finanțare a proiectelor regionale"
    ],
    actualizat: "2024"
  },
  {
    id: "program-nord-vest",
    titlu: "Programul Regional Nord-Vest 2021-2027",
    descriere: "Priorități de finanțare - Obiective de politică și Obiective specifice",
    categorie: "programe",
    link: "https://regionordvest.ro/prioritati-de-finantare/",
    extras: [
      "Prioritatea 1: O regiune competitivă prin inovare, digitalizare și întreprinderi dinamice",
      "Prioritatea 2: O regiune cu localități prietenoase cu mediul",
      "Prioritatea 3: O regiune cu infrastructură de transport sigură și sustenabilă",
      "Prioritatea 4: O regiune accesibilă",
      "Prioritatea 5: O regiune educată",
      "Prioritatea 6: O regiune atractivă",
      "Prioritatea 7: O regiune cu comunități reziliente și integrate"
    ],
    actualizat: "2024"
  },
  {
    id: "legea-10-1995",
    titlu: "Legea nr. 10/1995",
    descriere: "Privind calitatea în construcții",
    categorie: "legi",
    extras: [
      "Definește sistemul calității în construcții",
      "Cerințe fundamentale aplicabile construcțiilor:",
      "   A. Rezistență mecanică și stabilitate",
      "   B. Securitate la incendiu",
      "   C. Igienă, sănătate și mediu",
      "   D. Siguranță și accesibilitate în exploatare",
      "   E. Protecție împotriva zgomotului",
      "   F. Economie de energie și izolare termică",
      "   G. Utilizare sustenabilă a resurselor naturale",
      "Obligațiile factorilor implicați (investitor, proiectant, executant)",
      "Controlul de stat al calității în construcții"
    ],
    actualizat: "2023"
  },
  {
    id: "legea-50-1991",
    titlu: "Legea nr. 50/1991",
    descriere: "Privind autorizarea executării lucrărilor de construcții (cu actualizările ulterioare)",
    categorie: "legi",
    extras: [
      "Procedura de autorizare a construcțiilor",
      "Certificatul de urbanism - conținut și eliberare",
      "Autorizația de construire/desființare",
      "Documentații tehnice necesare",
      "Lucrări care se pot executa fără autorizație",
      "Obligațiile titularilor autorizațiilor",
      "Recepția lucrărilor de construcții",
      "Sancțiuni și contravenții"
    ],
    actualizat: "2024"
  },
  {
    id: "manual-beneficiar",
    titlu: "Manualul Beneficiarului Ediția 6/2025",
    descriere: "Capitolul 5 – Monitorizarea Contractului de finanțare",
    categorie: "manuale",
    link: "https://regionordvest.ro/documente-utile/",
    extras: [
      "5.1. Raportarea periodică",
      "5.2. Vizitele de monitorizare",
      "5.3. Indicatori de realizare și de rezultat",
      "5.4. Modificări ale contractului de finanțare",
      "5.5. Acte adiționale",
      "5.6. Notificări",
      "5.7. Arhivarea documentelor",
      "5.8. Obligații de informare și publicitate",
      "5.9. Durabilitatea proiectului"
    ],
    actualizat: "2025"
  }
];

export default function BibliografiePage() {
  const [categorieActiva, setCategorieActiva] = useState<DocumentCategory | "toate">("toate");
  const [documentDeschis, setDocumentDeschis] = useState<string | null>(null);

  const categorii = [
    { id: "toate", label: "Toate documentele", icon: "📚", count: documente.length },
    { id: "legi", label: "Legi și Norme", icon: "⚖️", count: documente.filter(d => d.categorie === "legi").length },
    { id: "programe", label: "Programe Regionale", icon: "🗺️", count: documente.filter(d => d.categorie === "programe").length },
    { id: "manuale", label: "Manuale și Ghiduri", icon: "📖", count: documente.filter(d => d.categorie === "manuale").length },
  ];

  const documenteFiltrate = categorieActiva === "toate" 
    ? documente 
    : documente.filter(d => d.categorie === categorieActiva);

  const getCategorieColor = (categorie: DocumentCategory) => {
    switch (categorie) {
      case "legi": return "text-amber-400 border-amber-500/30 bg-amber-900/10";
      case "programe": return "text-emerald-400 border-emerald-500/30 bg-emerald-900/10";
      case "manuale": return "text-purple-400 border-purple-500/30 bg-purple-900/10";
      default: return "text-gray-400 border-gray-500/30 bg-gray-900/10";
    }
  };

  const getCategorieLabel = (categorie: DocumentCategory) => {
    switch (categorie) {
      case "legi": return "Lege";
      case "programe": return "Program";
      case "manuale": return "Manual";
      default: return "";
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">📋</span>
            <h1 className="text-3xl font-bold text-white">
              Bibliografie pentru Concurs
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl">
            Documente legislative și de referință necesare pentru pregătirea concursurilor 
            în domeniul construcțiilor și dezvoltării regionale. Lista include legi, programe 
            de finanțare și manuale oficiale actualizate.
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-400 text-xl">💡</span>
            <div>
              <h3 className="text-blue-400 font-semibold mb-1">Notă importantă</h3>
              <p className="text-gray-400 text-sm">
                Asigurați-vă că consultați întotdeauna versiunile actualizate ale documentelor. 
                Legislația poate suferi modificări. Link-urile externe duc către sursele oficiale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categorii */}
      <div className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex flex-wrap gap-2">
          {categorii.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategorieActiva(cat.id as DocumentCategory | "toate")}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all flex items-center gap-2 ${
                categorieActiva === cat.id
                  ? "bg-gray-700 text-white border border-gray-600"
                  : "bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className="bg-gray-800 px-2 py-0.5 rounded text-xs">{cat.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Lista Documente */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {documenteFiltrate.map((doc) => (
            <div 
              key={doc.id}
              className={`border rounded-lg overflow-hidden transition-all ${
                documentDeschis === doc.id 
                  ? "border-gray-600 bg-gray-800/50" 
                  : "border-gray-800 bg-gray-900/30 hover:border-gray-700"
              }`}
            >
              {/* Header Document */}
              <button
                onClick={() => setDocumentDeschis(documentDeschis === doc.id ? null : doc.id)}
                className="w-full p-4 flex items-start justify-between text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2 py-1 rounded border ${getCategorieColor(doc.categorie)}`}>
                      {getCategorieLabel(doc.categorie)}
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
                <div className="px-4 pb-4 border-t border-gray-800">
                  <div className="pt-4">
                    <h4 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-3">
                      Conținut principal / Articole relevante:
                    </h4>
                    <ul className="space-y-2">
                      {doc.extras?.map((item, idx) => (
                        <li 
                          key={idx} 
                          className={`text-gray-300 text-sm flex items-start gap-2 ${
                            item.startsWith("   ") ? "ml-6" : ""
                          }`}
                        >
                          {!item.startsWith("   ") && (
                            <span className="text-cyan-400 mt-0.5">▸</span>
                          )}
                          <span>{item.trim()}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Link extern */}
                    {doc.link && (
                      <div className="mt-4 pt-4 border-t border-gray-800">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-400 px-4 py-2 rounded-lg transition-colors text-sm"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Accesează documentul oficial
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Secțiune Suplimentară - Surse Oficiale */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="border border-gray-800 rounded-lg p-6 bg-gray-900/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span>🔗</span>
            Surse oficiale recomandate
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                nume: "ADR Nord-Vest",
                url: "https://regionordvest.ro",
                descriere: "Agenția pentru Dezvoltare Regională Nord-Vest"
              },
              {
                nume: "Legislație",
                url: "https://legislatie.just.ro",
                descriere: "Portal legislativ oficial al României"
              },
              {
                nume: "MDLPA",
                url: "https://www.mdlpa.ro",
                descriere: "Ministerul Dezvoltării, Lucrărilor Publice și Administrației"
              },
              {
                nume: "ISC",
                url: "https://www.isc.gov.ro",
                descriere: "Inspectoratul de Stat în Construcții"
              }
            ].map((sursa) => (
              <a
                key={sursa.url}
                href={sursa.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{sursa.nume}</div>
                  <div className="text-gray-500 text-xs">{sursa.descriere}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="text-center text-gray-500 text-sm font-mono">
          Ultima actualizare a bibliografiei: Ianuarie 2025
          <br />
          Verificați periodic pentru modificări legislative.
        </div>
      </div>
    </main>
  );
}
