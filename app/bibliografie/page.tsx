"use client";

import { useState, useEffect } from "react";

// ==========================================
// TIPURI ȘI INTERFEȚE
// ==========================================
type DocumentCategory = "legi" | "programe" | "manuale";
type Difficulty = "usor" | "mediu" | "greu";

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
  categorie: string;
  dificultate: Difficulty;
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
// SCENARII DE EXAMEN - EXTINSE (30+ întrebări)
// ==========================================
const scenarii: Scenariu[] = [
  // MONITORIZARE ȘI RAPORTARE
  {
    id: "s1",
    categorie: "Monitorizare",
    dificultate: "mediu",
    intrebare: "Beneficiarul solicită decontare dar nu are Procesul Verbal de Recepție la Terminarea Lucrărilor. Ce faci?",
    raspuns: "OPREȘTI PLATA! Conform Legii 10/1995 Art.20 și Manualului Beneficiarului Cap.5.7, recepția la terminarea lucrărilor este OBLIGATORIE înainte de plata finală. Soliciți beneficiarului să completeze procedura de recepție.",
    referinta: "Legea 10/1995, Art. 20-21 + Manual Beneficiar Cap. 5.7"
  },
  {
    id: "s2",
    categorie: "Modificări proiect",
    dificultate: "greu",
    intrebare: "Beneficiarul vrea să mute o stație de pompare la 50m distanță față de proiectul inițial. Este deviere sau modificare?",
    raspuns: "Este MODIFICARE IMPORTANTĂ (schimbare locație a unui obiectiv). Necesită aprobare de la ADR conform Manualului Beneficiarului Ed.6/2025, Cap.5.4. Beneficiarul trebuie să depună cerere de modificare cu justificare tehnică și impact asupra indicatorilor.",
    referinta: "Manual Beneficiar Cap. 5.4 - Modificări importante"
  },
  {
    id: "s3",
    categorie: "Indicatori",
    dificultate: "usor",
    intrebare: "Care este diferența între indicatorul de realizare și indicatorul de rezultat?",
    raspuns: "REALIZARE = output fizic, măsurabil direct (ex: 5 km rețea apă, 100 m² renovați). REZULTAT = impact/efect asupra populației țintă (ex: 500 persoane cu acces la apă, reducere 20% emisii CO2). Indicatorii de rezultat se măsoară de obicei la 1 an după finalizare.",
    referinta: "Program Regional NV 2021-2027 + Manual Cap. 5.3"
  },
  {
    id: "s4",
    categorie: "Cheltuieli",
    dificultate: "mediu",
    intrebare: "Beneficiarul a inclus TVA-ul în cererea de rambursare. Este eligibil?",
    raspuns: "DEPINDE! TVA este eligibil DOAR dacă beneficiarul NU poate recupera TVA-ul. Dacă beneficiarul este plătitor de TVA și poate deduce, atunci TVA-ul este NEELIGIBIL. Verifici statutul fiscal al beneficiarului și documentele justificative.",
    referinta: "Manual Beneficiar - Cheltuieli eligibile"
  },
  {
    id: "s5",
    categorie: "Acte adiționale",
    dificultate: "mediu",
    intrebare: "Un beneficiar dorește prelungirea duratei proiectului cu 6 luni. Ce procedură urmează?",
    raspuns: "Prelungirea duratei necesită ACT ADIȚIONAL la contractul de finanțare. Beneficiarul depune cerere motivată (întârzieri obiective, condiții meteo, etc.), ADR analizează și aprobă/respinge. Prelungirea nu poate depăși limita maximă a programului.",
    referinta: "Manual Beneficiar Cap. 5.5 - Acte adiționale"
  },
  {
    id: "s6",
    categorie: "Autorizații",
    dificultate: "greu",
    intrebare: "La vizita de monitorizare constați că lucrările sunt executate fără autorizație de construire. Ce faci?",
    raspuns: "SUSPENDARE IMEDIATĂ a finanțării! Conform Legii 50/1991 Art.30-31, lucrările fără autorizație constituie contravenție/infracțiune. Notifici beneficiarul, raportezi situația și soliciți regularizare. Plățile se blochează până la obținerea autorizației.",
    referinta: "Legea 50/1991, Art. 30-31"
  },
  // RECEPȚIE ȘI CALITATE
  {
    id: "s7",
    categorie: "Recepție",
    dificultate: "greu",
    intrebare: "Care este diferența între Recepția la terminarea lucrărilor și Recepția finală?",
    raspuns: "RECEPȚIA LA TERMINARE = se face imediat după finalizarea fizică, verifică conformitatea cu proiectul. RECEPȚIA FINALĂ = se face DUPĂ expirarea perioadei de garanție (2-10 ani), verifică comportarea în timp. Plata finală necesită doar recepția la terminare!",
    referinta: "Legea 10/1995, Art. 20-25"
  },
  {
    id: "s8",
    categorie: "Recepție",
    dificultate: "mediu",
    intrebare: "Cine face parte din comisia de recepție la terminarea lucrărilor?",
    raspuns: "Comisia include OBLIGATORIU: reprezentant investitor (beneficiar), reprezentant constructor, diriginte de șantier, proiectant (pentru construcții cu grad de complexitate ridicat). Investitorul este PREȘEDINTELE comisiei.",
    referinta: "Legea 10/1995, Art. 21"
  },
  {
    id: "s9",
    categorie: "Garanție",
    dificultate: "usor",
    intrebare: "Cât durează perioada de garanție pentru structuri vs. instalații?",
    raspuns: "STRUCTURI de rezistență = 10 ANI. INSTALAȚII = 2-5 ANI (în funcție de tip). Izolații, finisaje = 2-3 ani. Echipamente = conform certificat producător.",
    referinta: "Legea 10/1995, Art. 26-30"
  },
  // PLĂȚI ȘI DECONTARE
  {
    id: "s10",
    categorie: "Plăți",
    dificultate: "mediu",
    intrebare: "Ce documente sunt necesare pentru o cerere de rambursare?",
    raspuns: "1) Cererea de rambursare (formular standard), 2) Facturi și documente de plată, 3) Situații de lucrări vizate de diriginte, 4) Procese verbale recepție parțială, 5) Fotografii din șantier, 6) Raport de progres. Toate în copie conform cu originalul!",
    referinta: "Manual Beneficiar Cap. 5.6"
  },
  {
    id: "s11",
    categorie: "Plăți",
    dificultate: "greu",
    intrebare: "Beneficiarul a achiziționat echipamente dar nu le-a montat încă. Poate solicita rambursare?",
    raspuns: "DA, dar PARȚIAL. Echipamentele neinstalate pot fi rambursate doar dacă: 1) Sunt pe șantier și identificabile, 2) Există PV de recepție cantitativă, 3) Sunt conforme cu specificațiile tehnice. Se reține un % până la instalare și punere în funcțiune.",
    referinta: "Manual Beneficiar - Cheltuieli eligibile"
  },
  {
    id: "s12",
    categorie: "Plăți",
    dificultate: "usor",
    intrebare: "Care este termenul maxim de plată pentru o cerere de rambursare corect întocmită?",
    raspuns: "ADR are 45 ZILE CALENDARISTICE pentru verificare și plată de la data depunerii cererii complete. Dacă sunt necesare clarificări, termenul se suspendă până la primirea răspunsului de la beneficiar.",
    referinta: "Manual Beneficiar Cap. 5.6"
  },
  // MODIFICĂRI ȘI ABATERI
  {
    id: "s13",
    categorie: "Modificări proiect",
    dificultate: "greu",
    intrebare: "Clasifică următoarele modificări: a) schimbare furnizor, b) prelungire 2 luni, c) mutare clădire, d) reducere indicatori cu 30%",
    raspuns: "a) NEÎNSEMNATĂ - doar notificare; b) IMPORTANTĂ - act adițional ADR; c) MAJORĂ - aprobare AM (Autoritate Management); d) MAJORĂ - afectează esențial proiectul, poate duce la reziliere!",
    referinta: "Manual Beneficiar Cap. 5.4"
  },
  {
    id: "s14",
    categorie: "Modificări proiect",
    dificultate: "mediu",
    intrebare: "Beneficiarul vrea să schimbe tipul de țeavă din PPR în PE-HD. Necesită aprobare?",
    raspuns: "DEPINDE de impact. Dacă este echivalent tehnic și nu afectează bugetul/indicatorii = modificare NEÎNSEMNATĂ (notificare). Dacă modifică semnificativ costul sau performanța = modificare IMPORTANTĂ (aprobare ADR).",
    referinta: "Manual Beneficiar Cap. 5.4"
  },
  // VIZITE DE MONITORIZARE
  {
    id: "s15",
    categorie: "Monitorizare",
    dificultate: "usor",
    intrebare: "Câte vizite de monitorizare trebuie efectuate anual?",
    raspuns: "MINIM 2 vizite pe an pentru proiecte în implementare. Vizite suplimentare: la solicitarea beneficiarului, la cereri de rambursare importante, la finalizare, sau când există suspiciuni de nereguli.",
    referinta: "Manual Beneficiar Cap. 5.2"
  },
  {
    id: "s16",
    categorie: "Monitorizare",
    dificultate: "mediu",
    intrebare: "Ce verifici la o vizită de monitorizare pe teren?",
    raspuns: "1) Existența autorizațiilor valabile, 2) Conformitatea lucrărilor cu proiectul tehnic, 3) Gradul fizic de realizare vs. planificat, 4) Jurnalul de șantier și documentele, 5) Respectarea normelor SSM, 6) Etichetarea/plăcuțele de vizibilitate, 7) Situația echipamentelor.",
    referinta: "Manual Beneficiar Cap. 5.2"
  },
  {
    id: "s17",
    categorie: "Monitorizare",
    dificultate: "greu",
    intrebare: "La vizită constați că gradul fizic este 30% dar beneficiarul a declarat 60% și a primit plată. Ce faci?",
    raspuns: "SUSPICIUNE DE FRAUDĂ! 1) Documentezi cu fotografii, 2) Întocmești raport de neregulă, 3) Soliciți explicații scrise beneficiarului, 4) Raportezi la DLAF dacă se confirmă, 5) Se inițiază recuperare sume + penalități. Poate duce la REZILIERE!",
    referinta: "Manual Beneficiar + OUG 66/2011"
  },
  // DURABILITATE
  {
    id: "s18",
    categorie: "Durabilitate",
    dificultate: "mediu",
    intrebare: "Ce înseamnă perioada de durabilitate și cât durează?",
    raspuns: "DURABILITATE = obligația de a menține investiția, indicatorii și destinația proiectului. Durează 5 ANI de la PLATA FINALĂ (nu de la recepție!). În această perioadă: nu poți vinde, închiria, schimba destinația sau reduce capacitatea fără aprobare.",
    referinta: "Manual Beneficiar Cap. 5.9"
  },
  {
    id: "s19",
    categorie: "Durabilitate",
    dificultate: "greu",
    intrebare: "Beneficiarul vrea să vândă clădirea reabilitată la 3 ani după finalizare. Este permis?",
    raspuns: "NU fără aprobare! Vânzarea în perioada de durabilitate necesită: 1) Cerere justificată la ADR, 2) Noul proprietar preia toate obligațiile, 3) Se înregistrează gaj/ipotecă. Dacă vinde fără aprobare = RAMBURSARE INTEGRALĂ a finanțării!",
    referinta: "Manual Beneficiar Cap. 5.9"
  },
  // ADR ȘI STRUCTURI
  {
    id: "s20",
    categorie: "Instituții",
    dificultate: "usor",
    intrebare: "Ce este ADR și care este rolul său principal?",
    raspuns: "ADR = Agenție pentru Dezvoltare Regională. ROL: implementare și MONITORIZARE a programelor regionale, NU finanțare directă! ADR verifică proiecte, efectuează plăți din fonduri alocate, monitorizează implementarea. Sunt 8 ADR-uri în România.",
    referinta: "Legea 315/2004, Art. 7, 10"
  },
  {
    id: "s21",
    categorie: "Instituții",
    dificultate: "mediu",
    intrebare: "Care este diferența între ADR, AM și OI?",
    raspuns: "AM (Autoritate Management) = responsabil de program la nivel național, decide strategia. OI (Organism Intermediar) = delegat să gestioneze anumite axe/priorități. ADR = implementare regională, monitorizare beneficiari, verificare plăți. AM > OI > ADR în ierarhie.",
    referinta: "Legea 315/2004 + Regulamente UE"
  },
  {
    id: "s22",
    categorie: "Instituții",
    dificultate: "usor",
    intrebare: "Ce este CDR și ce rol are?",
    raspuns: "CDR = Consiliul pentru Dezvoltare Regională. Are rol CONSULTATIV (nu decizional!). Membri: președinții consiliilor județene și primarii reședințelor de județ din regiune. Aprobă strategia regională, avizează proiecte prioritare.",
    referinta: "Legea 315/2004, Art. 12"
  },
  // PROGRAM REGIONAL NV
  {
    id: "s23",
    categorie: "Program",
    dificultate: "mediu",
    intrebare: "Enumeră cele 7 priorități ale Programului Regional Nord-Vest 2021-2027.",
    raspuns: "P1: Competitivitate/inovare, P2: Mediu/energie, P3: Transport regional, P4: Mobilitate urbană, P5: Educație, P6: Turism/patrimoniu, P7: Sănătate/social. Cele mai multe fonduri: P2 (eficiență energetică) și P3 (drumuri).",
    referinta: "Program Regional NV 2021-2027"
  },
  {
    id: "s24",
    categorie: "Program",
    dificultate: "greu",
    intrebare: "Care este rata de cofinanțare pentru un proiect de reabilitare termică a unei școli?",
    raspuns: "Cofinanțare: 85% FEDR (Fondul European Dezvoltare Regională) + 13% buget de stat + 2% contribuție beneficiar. Pentru UAT-uri (primării) contribuția proprie este minimă. Atenție: TVA recuperabil = neeligibil!",
    referinta: "Program Regional NV + Ghid solicitant"
  },
  // ACHIZIȚII ȘI CONTRACTARE
  {
    id: "s25",
    categorie: "Achiziții",
    dificultate: "greu",
    intrebare: "Beneficiarul a atribuit contractul de lucrări fără publicare în SEAP. Ce consecințe are?",
    raspuns: "NEREGULĂ GRAVĂ! Consecințe: 1) Corecție financiară 25-100% din valoarea contractului, 2) Cheltuielile devin NEELIGIBILE, 3) Posibilă reziliere contract finanțare, 4) Raportare la DLAF/ANI. Excepție: achiziții sub pragul de publicare.",
    referinta: "Legea 98/2016 + OUG 66/2011"
  },
  {
    id: "s26",
    categorie: "Achiziții",
    dificultate: "mediu",
    intrebare: "Ce verifici la dosarul de achiziție publică depus de beneficiar?",
    raspuns: "1) Strategia de contractare, 2) Documentația de atribuire, 3) Publicarea în SEAP/JOUE, 4) Procesul verbal evaluare, 5) Raportul procedurii, 6) Contractul semnat, 7) Garanția de bună execuție, 8) Absența conflictului de interese.",
    referinta: "Legea 98/2016 + Manual Beneficiar"
  },
  // NEREGULI ȘI SANCȚIUNI
  {
    id: "s27",
    categorie: "Nereguli",
    dificultate: "greu",
    intrebare: "Ce este o neregulă și cum se tratează?",
    raspuns: "NEREGULĂ = încălcare a legislației UE/naționale care prejudiciază bugetul UE. Tratament: 1) Constatare și documentare, 2) Notificare beneficiar, 3) Audierea beneficiarului, 4) Decizie de recuperare, 5) Titlu de creanță. Beneficiarul poate contesta în 30 zile.",
    referinta: "OUG 66/2011"
  },
  {
    id: "s28",
    categorie: "Nereguli",
    dificultate: "mediu",
    intrebare: "Care este diferența între corecție financiară și recuperare?",
    raspuns: "CORECȚIE = reducere procentuală aplicată PREVENTIV pentru abateri (ex: 5% pentru lipsă publicitate). RECUPERARE = restituire sume DEJA PLĂTITE când se constată neeligibilitate. Corecțiile se aplică la cererea de rambursare, recuperările după.",
    referinta: "OUG 66/2011 + Regulament 1303/2013"
  },
  // DOCUMENTE ȘI ARHIVARE
  {
    id: "s29",
    categorie: "Documente",
    dificultate: "usor",
    intrebare: "Cât timp trebuie păstrate documentele proiectului?",
    raspuns: "MINIM 5 ANI de la data plății finale sau de la închiderea programului (care e mai târziu). Pentru ajutor de stat: 10 ANI. Documentele trebuie păstrate la sediul beneficiarului, accesibile pentru control.",
    referinta: "Manual Beneficiar Cap. 5.7"
  },
  {
    id: "s30",
    categorie: "Documente",
    dificultate: "mediu",
    intrebare: "Ce conține Jurnalul de șantier și cine îl completează?",
    raspuns: "JURNALUL = document cronologic al lucrărilor. Conține: data, descriere lucrări, materiale, echipamente, personal, incidente, dispoziții. Completat ZILNIC de DIRIGINTELE DE ȘANTIER. Obligatoriu conform Legii 10/1995!",
    referinta: "Legea 10/1995, Art. 14"
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
  { situatie: "Perioada de garanție", lege: "Legea 10/1995", articol: "Art. 26-30" },
  { situatie: "Modificare proiect în execuție", lege: "Manual Beneficiar", articol: "Cap. 5.4" },
  { situatie: "Cerere de rambursare", lege: "Manual Beneficiar", articol: "Cap. 5.6" },
  { situatie: "Prelungire durată proiect", lege: "Manual Beneficiar", articol: "Cap. 5.5" },
  { situatie: "Durabilitatea proiectului", lege: "Manual Beneficiar", articol: "Cap. 5.9" },
  { situatie: "Vizite de monitorizare", lege: "Manual Beneficiar", articol: "Cap. 5.2" },
  { situatie: "Rol și atribuții ADR", lege: "Legea 315/2004", articol: "Art. 7, 10" },
  { situatie: "Consiliul Dezvoltare Regională", lege: "Legea 315/2004", articol: "Art. 12" },
  { situatie: "Indicatori de monitorizare", lege: "Program Regional NV", articol: "Anexa Indicatori" },
  { situatie: "Nereguli și recuperări", lege: "OUG 66/2011", articol: "Art. 2-20" },
  { situatie: "Achiziții publice", lege: "Legea 98/2016", articol: "Art. 7, 68" }
];

// ==========================================
// COMPONENTA PRINCIPALĂ
// ==========================================
export default function BibliografiePage() {
  const [modExamen, setModExamen] = useState(false);
  const [categorieActiva, setCategorieActiva] = useState<DocumentCategory | "toate">("toate");
  const [documentDeschis, setDocumentDeschis] = useState<string | null>(null);
  const [scenariuDeschis, setScenariuDeschis] = useState<string | null>(null);
  const [filtruDificultate, setFiltruDificultate] = useState<Difficulty | "toate">("toate");
  const [filtruCategorie, setFiltruCategorie] = useState<string>("toate");
  const [progres, setProgres] = useState<Record<string, boolean>>({});
  const [intrebariRezolvate, setIntrebariRezolvate] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState({ zile: 0, ore: 0, minute: 0 });

  // Data examenului: 10.02.2026, ora 10:00
  const examenDate = new Date("2026-02-10T10:00:00");

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
    const saved = localStorage.getItem("bibliografie-progres");
    if (saved) setProgres(JSON.parse(saved));
    
    const savedIntrebari = localStorage.getItem("bibliografie-intrebari");
    if (savedIntrebari) setIntrebariRezolvate(new Set(JSON.parse(savedIntrebari)));
  }, []);

  const toggleProgres = (key: string) => {
    const newProgres = { ...progres, [key]: !progres[key] };
    setProgres(newProgres);
    localStorage.setItem("bibliografie-progres", JSON.stringify(newProgres));
  };

  const toggleIntrebare = (id: string) => {
    const newSet = new Set(intrebariRezolvate);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setIntrebariRezolvate(newSet);
    localStorage.setItem("bibliografie-intrebari", JSON.stringify([...newSet]));
  };

  // Filtrare documente
  const documenteFiltrate = categorieActiva === "toate" 
    ? documente 
    : documente.filter(d => d.categorie === categorieActiva);

  // Filtrare scenarii
  const scenariiFiltrate = scenarii.filter(s => {
    const matchDificultate = filtruDificultate === "toate" || s.dificultate === filtruDificultate;
    const matchCategorie = filtruCategorie === "toate" || s.categorie === filtruCategorie;
    return matchDificultate && matchCategorie;
  });

  // Categorii unice pentru scenarii
  const categoriiScenarii = [...new Set(scenarii.map(s => s.categorie))];

  const getCategorieColor = (categorie: DocumentCategory) => {
    switch (categorie) {
      case "legi": return "text-amber-400 border-amber-500/30 bg-amber-900/20";
      case "programe": return "text-emerald-400 border-emerald-500/30 bg-emerald-900/20";
      case "manuale": return "text-purple-400 border-purple-500/30 bg-purple-900/20";
    }
  };

  const getDificultateColor = (dif: Difficulty) => {
    switch (dif) {
      case "usor": return "bg-green-600 text-white";
      case "mediu": return "bg-amber-600 text-white";
      case "greu": return "bg-red-600 text-white";
    }
  };

  const getDificultateLabel = (dif: Difficulty) => {
    switch (dif) {
      case "usor": return "Ușor";
      case "mediu": return "Mediu";
      case "greu": return "Greu";
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

  // Progres întrebări
  const intrebariPercent = Math.round((intrebariRezolvate.size / scenarii.length) * 100);

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
                  Bibliografie Concurs ADR Nord-Vest
                </h1>
              </div>
              <p className="text-gray-400 text-sm">
                Dashboard de învățare activă - Ofițer Monitorizare | Examen: 10.02.2026, ora 10:00
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

          {/* Progress Bars */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between mb-1 text-xs text-gray-400">
                <span>Progres studiu documente</span>
                <span className="text-cyan-400 font-bold">{progresPercent}%</span>
              </div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${progresPercent}%` }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-xs text-gray-400">
                <span>Întrebări rezolvate</span>
                <span className="text-purple-400 font-bold">{intrebariRezolvate.size}/{scenarii.length} ({intrebariPercent}%)</span>
              </div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${intrebariPercent}%` }}
                />
              </div>
            </div>
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
              <button 
                key={doc.id}
                type="button"
                aria-label={`Deschide ${doc.titlu} - ${doc.procentExamen}% din examen`}
                className="flex items-center justify-between bg-black/40 rounded-lg p-3 hover:bg-black/60 transition-colors cursor-pointer text-left w-full"
                onClick={() => {
                  setCategorieActiva("toate");
                  setDocumentDeschis(doc.id);
                  setTimeout(() => {
                    document.getElementById(doc.id)?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
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
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECȚIUNEA 2: MOD EXAMEN / SCENARII
        ========================================== */}
        <section>
          {!modExamen ? (
            <button 
              type="button"
              onClick={() => setModExamen(true)}
              className="w-full bg-gradient-to-r from-purple-900/40 to-pink-900/40 hover:from-purple-900/60 hover:to-pink-900/60 border border-purple-500/30 text-white py-4 rounded-xl transition-all font-semibold flex items-center justify-center gap-3"
            >
              <span className="text-2xl">🎓</span>
              <span>Activează Modul Pregătire Examen - {scenarii.length} Scenarii Practice</span>
            </button>
          ) : (
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h2 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                  <span>🎓</span> Scenarii de Examen ({scenariiFiltrate.length} întrebări)
                </h2>
                <button 
                  type="button"
                  onClick={() => setModExamen(false)}
                  className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                  aria-label="Închide modul examen"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Închide
                </button>
              </div>

              {/* Filtre */}
              <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-purple-900/30">
                <div className="flex items-center gap-2">
                  <label htmlFor="filtru-dificultate" className="text-gray-400 text-xs">Dificultate:</label>
                  <select
                    id="filtru-dificultate"
                    aria-label="Filtrează după dificultate"
                    value={filtruDificultate}
                    onChange={(e) => setFiltruDificultate(e.target.value as Difficulty | "toate")}
                    className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white"
                  >
                    <option value="toate">Toate</option>
                    <option value="usor">Ușor</option>
                    <option value="mediu">Mediu</option>
                    <option value="greu">Greu</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="filtru-categorie-scenarii" className="text-gray-400 text-xs">Categorie:</label>
                  <select
                    id="filtru-categorie-scenarii"
                    aria-label="Filtrează după categorie"
                    value={filtruCategorie}
                    onChange={(e) => setFiltruCategorie(e.target.value)}
                    className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-sm text-white"
                  >
                    <option value="toate">Toate</option>
                    {categoriiScenarii.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {scenariiFiltrate.map((scenariu, idx) => {
                  const esteRezolvata = intrebariRezolvate.has(scenariu.id);
                  return (
                    <div 
                      key={scenariu.id} 
                      className={`bg-black/40 rounded-lg overflow-hidden transition-all ${esteRezolvata ? "opacity-60" : ""}`}
                    >
                      <button
                        type="button"
                        onClick={() => setScenariuDeschis(scenariuDeschis === scenariu.id ? null : scenariu.id)}
                        className="w-full p-4 text-left flex items-start gap-3"
                        aria-expanded={scenariuDeschis === scenariu.id}
                        aria-label={`Întrebarea ${idx + 1}: ${scenariu.intrebare}`}
                      >
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${getDificultateColor(scenariu.dificultate)}`}>
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded ${getDificultateColor(scenariu.dificultate)}`}>
                              {getDificultateLabel(scenariu.dificultate)}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">
                              {scenariu.categorie}
                            </span>
                            {esteRezolvata && (
                              <span className="text-xs px-2 py-0.5 rounded bg-green-900 text-green-400">
                                ✓ Rezolvată
                              </span>
                            )}
                          </div>
                          <p className="text-white font-medium text-sm">{scenariu.intrebare}</p>
                        </div>
                        <span className={`text-purple-400 transition-transform ${scenariuDeschis === scenariu.id ? "rotate-180" : ""}`} aria-hidden="true">
                          ▼
                        </span>
                      </button>
                      
                      {scenariuDeschis === scenariu.id && (
                        <div className="px-4 pb-4 border-t border-purple-900/30">
                          <div className="pt-3 pl-10">
                            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 mb-3">
                              <div className="text-green-400 text-xs uppercase tracking-wider mb-1">✓ Răspuns Corect:</div>
                              <p className="text-gray-200 text-sm">{scenariu.raspuns}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-xs text-gray-500">
                                📚 Referință: {scenariu.referinta}
                              </div>
                              <button
                                type="button"
                                onClick={() => toggleIntrebare(scenariu.id)}
                                className={`text-xs px-3 py-1 rounded transition-colors ${
                                  esteRezolvata 
                                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600" 
                                    : "bg-green-700 text-white hover:bg-green-600"
                                }`}
                              >
                                {esteRezolvata ? "Marchează ca nerezolvată" : "✓ Marchează ca rezolvată"}
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
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
                  <th scope="col" className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wider">Situație</th>
                  <th scope="col" className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wider">Legea Aplicabilă</th>
                  <th scope="col" className="text-left px-4 py-3 text-gray-400 text-xs uppercase tracking-wider">Articol Cheie</th>
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
            SECȚIUNEA 4: FILTRE CATEGORII DOCUMENTE
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
              type="button"
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
            <article 
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
                type="button"
                onClick={() => setDocumentDeschis(documentDeschis === doc.id ? null : doc.id)}
                className="w-full p-4 flex items-start justify-between text-left"
                aria-expanded={documentDeschis === doc.id}
                aria-label={`${doc.titlu} - ${doc.procentExamen}% din examen`}
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
                    aria-hidden="true"
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
                          const inputId = `checkbox-${checkKey}`;
                          return (
                            <li key={idx} className="flex items-start gap-2 group">
                              <input 
                                type="checkbox"
                                id={inputId}
                                checked={progres[checkKey] || false}
                                onChange={() => toggleProgres(checkKey)}
                                className="mt-1 w-4 h-4 accent-cyan-500 cursor-pointer flex-shrink-0"
                                aria-label={`Marchează ca învățat: ${item}`}
                              />
                              <label 
                                htmlFor={inputId}
                                className={`text-sm transition-all cursor-pointer ${
                                  progres[checkKey] ? "text-gray-500 line-through" : "text-gray-300"
                                }`}
                              >
                                {item}
                              </label>
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
                                <span className="text-green-400" aria-hidden="true">▸</span>
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
                                <span className="text-red-400" aria-hidden="true">!</span>
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
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Accesează documentul oficial
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
        <footer className="text-center text-gray-500 text-sm font-mono py-4">
          Dashboard actualizat: Ianuarie 2025 | Examen: 10.02.2026, ora 10:00, Cluj-Napoca
          <br />
          Durata examinării: ~3 ore | Verifică periodic pentru actualizări legislative
        </footer>
      </div>
    </main>
  );
}