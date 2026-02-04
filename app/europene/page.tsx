"use client";

import { useState } from "react";
import Link from "next/link";

// ==========================================
// TIPURI ȘI DATE
// ==========================================

interface SursaFinantare {
  titlu: string;
  url: string;
  descriere: string;
  emoji: string;
}

interface SectiuneEuropene {
  id: string;
  titlu: string;
  emoji: string;
  culoare: string;
  content: string;
  bullets: string[];
  tip: string;
}

const surseFinantare: SursaFinantare[] = [
  {
    titlu: "Ministerul Fondurilor Europene",
    url: "https://mfe.gov.ro/",
    descriere: "Autoritatea națională pentru managementul fondurilor europene",
    emoji: "🏛️",
  },
  {
    titlu: "Oportunități UE",
    url: "https://oportunitati-ue.gov.ro/",
    descriere: "Portal oficial cu oportunități de finanțare",
    emoji: "🚪",
  },
  {
    titlu: "Fonduri-UE.ro",
    url: "https://www.fonduri-ue.ro/",
    descriere: "Informații centralizate despre fondurile europene în România",
    emoji: "🇪🇺",
  },
  {
    titlu: "PNRR Proiecte",
    url: "https://proiecte.pnrr.gov.ro/#/home",
    descriere: "Platforma oficială a Planului Național de Redresare și Reziliență",
    emoji: "🚀",
  },
  {
    titlu: "Granturi IMM",
    url: "https://granturi.imm.gov.ro/#/home",
    descriere: "Finanțări pentru întreprinderi mici și mijlocii",
    emoji: "🏢",
  },
  {
    titlu: "Programe Naționale",
    url: "https://oportunitati-ue.gov.ro/programe-de-finantare/programe-nationale/",
    descriere: "POIM, POAT și alte programe operaționale",
    emoji: "📋",
  },
];

const sectiuni: SectiuneEuropene[] = [
  {
    id: "pnrr",
    titlu: "PNRR - Planul Național de Redresare și Reziliență",
    emoji: "🚀",
    culoare: "green",
    content: `PNRR este "planul de relansare" al României post-pandemie, finanțat cu bani europeni. 
    Pentru domeniul nostru (construcții și instalații), cele mai relevante sunt Reforma 5 (Tranziție Verde) 
    și investițiile în eficiență energetică.`,
    bullets: [
      "Reforma 5: Renovarea energetică a clădirilor publice și private",
      "Componenta C5: Digitalizarea instalațiilor și clădirile inteligente",
      "Axa 6: Fonduri pentru startup-uri verzi în construcții",
    ],
    tip: "💡 Studenții pot participa în echipe de consultanță pentru audit energetic sau proiectare instalații eficiente.",
  },
  {
    id: "programe-nationale",
    titlu: "Programe Naționale (POIM, POAT)",
    emoji: "📋",
    culoare: "blue",
    content: `Programele Operaționale sunt "ciolanele" mari de bani europeni gestionate de ministere. 
    POIM = Infrastructură Mare (inclusiv utilități). POAT = Asistență Tehnică.`,
    bullets: [
      "POIM: Extindere rețele apă-canal, stații de epurare, infrastructură energetică",
      "POAT: Consultanță și asistență tehnică pentru proiecte",
      "Axe dedicate: Eficiență energetică în clădiri publice",
    ],
    tip: "🏗️ Constructorii și instalatorii accesează aceste fonduri ca subcontractori ai beneficiarilor (primării, companii de utilități).",
  },
  {
    id: "granturi-imm",
    titlu: "Granturi pentru IMM-uri",
    emoji: "🏢",
    culoare: "purple",
    content: `Dacă visezi să-ți deschizi propria firmă de instalații sau consultanță în eficiență energetică, 
    granturile IMM sunt primul pas. Sunt fonduri nerambursabile (adică nu trebuie returnate).`,
    bullets: [
      "Start-up Nation: Până la 200.000 RON pentru firme noi",
      "Microgranturi: 2.000-10.000 EUR pentru capital de lucru",
      "Granturi pentru digitalizare: Software-uri de proiectare, BIM, management",
    ],
    tip: "🎯 Masteranzii pot accesa aceste fonduri imediat după facultate pentru a-și deschide birou de proiectare.",
  },
  {
    id: "alte-domenii",
    titlu: "Alte Domenii (Context General)",
    emoji: "🌍",
    culoare: "orange",
    content: `Deși ne concentrăm pe construcții, e util să știi că fondurile europene acoperă multiple domenii 
    care se intersectează cu instalațiile:`,
    bullets: [
      "Agricultură: Ferme fotovoltaice, irigații inteligente, depozite refrigerate",
      "Sănătate: Spitale noi = instalații medicale complexe",
      "Educație: Școli renovate = eficiență energetică și instalații moderne",
      "Transport: Iluminat inteligent, stații de încărcare electrice",
    ],
    tip: "🔗 Interdisciplinaritatea e cheia: un proiect de fermă solară are nevoie și de instalaționiști electricieni.",
  },
];

const dictionar = [
  { termen: "Beneficiar", definitie: "Entitatea (firmă, primărie, ONG) care primește banii și implementează proiectul.", emoji: "👥" },
  { termen: "Cofinanțare", definitie: "Banii proprii pe care trebuie să-i ai ca să accesezi fondurile europene (de obicei 2-15% din total).", emoji: "💰" },
  { termen: "Eligibilitate", definitie: "Condițiile care trebuie îndeplinite pentru ca o cheltuială să fie acceptată (ex: doar echipamente noi, nu second-hand).", emoji: "✅" },
  { termen: "Audit Energetic", definitie: "Evaluarea consumului de energie al unei clădiri cu recomandări de eficientizare.", emoji: "📊" },
  { termen: "Solicitant", definitie: "Cel care depune cererea de finanțare (poate fi diferit de beneficiar în anumite programe).", emoji: "📝" },
  { termen: "Rambursare", definitie: "Modalitatea prin care primești banii: întâi cheltuiești, apoi ceri banii înapoi (nu primești înainte).", emoji: "🔄" },
];

// ==========================================
// COMPONENTA PRINCIPALĂ
// ==========================================

export default function ProiecteEuropenePage() {
  const [sectiuneActiva, setSectiuneActiva] = useState<string | null>(null);

  const getCuloareClasa = (culoare: string) => {
    const culori: Record<string, { bg: string; border: string; text: string }> = {
      green: { bg: "bg-green-900/20", border: "border-green-500/30", text: "text-green-400" },
      blue: { bg: "bg-blue-900/20", border: "border-blue-500/30", text: "text-blue-400" },
      purple: { bg: "bg-purple-900/20", border: "border-purple-500/30", text: "text-purple-400" },
      orange: { bg: "bg-orange-900/20", border: "border-orange-500/30", text: "text-orange-400" },
    };
    return culori[culoare] || culori.blue;
  };

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇪🇺</span>
            <h1 className="text-3xl font-bold text-white">
              Proiecte Europene
            </h1>
          </div>
          <p className="text-gray-400">
            Ghid simplificat pentru accesarea fondurilor europene în domeniul construcțiilor și instalațiilor
            <span className="block text-sm mt-1 text-gray-500">Fără să te pierzi în birocrație</span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Linkuri Rapide Oficiale */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🔗</span> Surse Oficiale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {surseFinantare.map((sursa, idx) => (
              <a
                key={idx}
                href={sursa.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-gray-800 rounded-xl p-5 hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-2xl">{sursa.emoji}</span>
                  <span className="text-gray-600 group-hover:text-gray-400 transition-colors text-sm">↗</span>
                </div>
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {sursa.titlu}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {sursa.descriere}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Secțiuni Principale */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📚</span> Programe de Finanțare
          </h2>

          <div className="space-y-4">
            {sectiuni.map((sectiune) => {
              const culori = getCuloareClasa(sectiune.culoare);
              const isActive = sectiuneActiva === sectiune.id;
              
              return (
                <div
                  key={sectiune.id}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    isActive ? `${culori.border} ${culori.bg}` : "border-gray-800 bg-gray-900/30"
                  }`}
                >
                  <button
                    onClick={() => setSectiuneActiva(isActive ? null : sectiune.id)}
                    className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{sectiune.emoji}</span>
                      <h3 className={`font-semibold text-lg ${isActive ? culori.text : "text-white"}`}>
                        {sectiune.titlu}
                      </h3>
                    </div>
                    <span className={`text-gray-500 transform transition-transform ${isActive ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {isActive && (
                    <div className="px-5 pb-5 border-t border-gray-800/50 pt-4">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {sectiune.content}
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {sectiune.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-black/40 border border-gray-700 rounded-lg p-4 mt-4">
                        <p className="text-gray-300 text-sm italic">
                          {sectiune.tip}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Ghid Cum să citești un ghid */}
        <section className="mb-12 bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <span>📖</span> Cum să citești un Ghid de Finanțare
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Ghidurile de finanțare sunt documentele "biblie" care spun ce se finanțează, cât, și cum. 
                Sunt stufoase, dar urmărește secțiunile astea:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-amber-500">🎯</span>
                  <div>
                    <strong className="text-gray-200">Obiectivul specific:</strong>
                    <p className="text-gray-500 mt-0.5">Ce vrea să rezolve fondul respectiv</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-amber-500">💰</span>
                  <div>
                    <strong className="text-gray-200">Valoarea finanțării:</strong>
                    <p className="text-gray-500 mt-0.5">Minim și maxim per proiect</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <span className="text-amber-500">📋</span>
                  <div>
                    <strong className="text-gray-200">Cheltuieli eligibile:</strong>
                    <p className="text-gray-500 mt-0.5">Pe ce ai voie să dai banii</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-xl p-4 border border-amber-500/10">
              <h4 className="font-semibold text-amber-400 mb-3 flex items-center gap-2">
                <span>💡</span> Pro tip pentru începători
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nu începe să citești de la cap la coadă! Mergi direct la capitolul 
                "Condiții de eligibilitate" și "Cheltuieli eligibile". Dacă nu te încadrezi acolo, 
                restul documentului nu mai contează pentru tine.
              </p>
            </div>
          </div>
        </section>

        {/* Dicționar */}
        <section className="mb-12">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>📖</span> Dicționarul Fondurilor Europene
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {dictionar.map((item, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-colors">
                <dt className="font-semibold text-white mb-1 flex items-center gap-2">
                  <span>{item.emoji}</span>
                  {item.termen}
                </dt>
                <dd className="text-gray-400 text-sm leading-relaxed">
                  {item.definitie}
                </dd>
              </div>
            ))}
          </div>
        </section>

        {/* Footer notă */}
        <footer className="border-t border-gray-800 pt-6 mt-12 text-center text-gray-500 text-sm">
          <p>
            Informațiile sunt preluate din surse oficiale și au caracter educativ.
            <br />
            Pentru detalii actualizate, consultă întotdeauna site-urile ministerelor.
          </p>
        </footer>
      </div>
    </main>
  );
}