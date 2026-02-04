import Link from "next/link";

const features = [
  {
    icon: "📚",
    title: "Normative Tehnice",
    description: "Acces rapid la normativele în vigoare pentru instalații: I7, I9, I5, NTPEE, C107 și multe altele.",
    href: "/normative",
    color: "from-blue-600 to-blue-800",
    iconBg: "bg-blue-600",
  },
  {
    icon: "📖",
    title: "Ghiduri de Proiectare",
    description: "Ghiduri detaliate pentru instalații sanitare, termice, electrice, gaze, ventilare, automatizări și clădiri pasive.",
    href: "/KnowledgeBase",
    color: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-600",
  },
  {
    icon: "🔢",
    title: "Calculatoare Tehnice",
    description: "Instrumente de calcul pentru dimensionare conducte, debite, pierderi de sarcină și verificări rapide.",
    href: "/calculatoare",
    color: "from-emerald-600 to-emerald-800",
    iconBg: "bg-emerald-600",
  },
  {
    icon: "🇪🇺", // Schimbat din 📋
    title: "Proiecte Europene", // Schimbat din Bibliografie Concurs
    description: "Ghid simplificat pentru accesarea fondurilor UE în domeniul construcțiilor și instalațiilor.", // Descriere nouă
    href: "/europene", // Schimbat din /bibliografie
    color: "from-cyan-600 to-cyan-800", // Culoare nouă (tematică UE)
    iconBg: "bg-cyan-600", // Culoare nouă
  },
];

const domains = [
  { icon: "💧", name: "Instalații Sanitare", color: "text-blue-400" },
  { icon: "🔥", name: "Instalații Termice", color: "text-red-400" },
  { icon: "⚡", name: "Instalații Electrice", color: "text-yellow-400" },
  { icon: "💨", name: "Ventilare & Climatizare", color: "text-cyan-400" },
  { icon: "🔶", name: "Instalații de Gaze", color: "text-orange-400" },
  { icon: "🤖", name: "Automatizări BMS", color: "text-purple-400" },
  { icon: "🏠", name: "Clădiri Pasive nZEB", color: "text-emerald-400" },
  { icon: "📋", name: "Certificare Energetică", color: "text-teal-400" },
];

const stats = [
  { value: "50+", label: "Normative", icon: "📚" },
  { value: "9", label: "Domenii", icon: "🏗️" },
  { value: "70+", label: "Secțiuni Ghid", icon: "📖" },
  { value: "10+", label: "Calculatoare", icon: "🔢" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-gray-900 to-purple-900/30" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-medium">🏗️ Portal Tehnic pentru Instalații</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Totul despre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Instalații în Construcții
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Platformă dedicată inginerilor, proiectanților și tehnicienilor din domeniul 
              instalațiilor. Normative, ghiduri de proiectare, calculatoare și materiale de studiu.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/KnowledgeBase"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/25"
              >
                <span>Explorează Ghidurile</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/calculatoare"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-xl border border-gray-700 transition-all duration-200"
              >
                <span>Calculatoare</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ce găsești pe platformă</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Resurse tehnice structurate și actualizate pentru domeniul instalațiilor în construcții
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group relative bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`${feature.iconBg} w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 text-gray-600 group-hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Domenii Acoperite</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Informații tehnice complete pentru toate tipurile de instalații din clădiri
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:border-gray-600 transition-colors"
              >
                <div className="text-3xl mb-2">{domain.icon}</div>
                <div className={`font-medium ${domain.color} text-sm`}>
                  {domain.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-700/30 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Cui se adresează</h2>
                <p className="text-gray-300 mb-6">
                  Portalul este conceput pentru toți profesioniștii din domeniul instalațiilor, 
                  oferind resurse adaptate diferitelor niveluri de experiență.
                </p>
                <ul className="space-y-3">
                  {[
                    { icon: "👷", text: "Ingineri și proiectanți de instalații" },
                    { icon: "🔧", text: "Tehnicieni și instalatori autorizați" },
                    { icon: "🎓", text: "Studenți la facultăți tehnice" },
                    { icon: "🏢", text: "Firme de proiectare și execuție" },
                    { icon: "📝", text: "Candidați la examene de autorizare" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <span className="text-xl">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  🎯 Resurse pentru Studenți
                </h3>
                <p className="text-gray-400 mb-4">
                  Explorează ghidurile despre fonduri europene disponibile pentru proiecte 
                  în domeniul construcțiilor și instalațiilor.
                </p>
                <Link
                  href="/europene" // Schimbat din /bibliografie
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  <span>Vezi Proiecte Europene</span> {/* Schimbat din Vezi bibliografia */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Acces Rapid</h2>
            <p className="text-gray-400">Cele mai căutate resurse</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Calculator Debit Apă", href: "/calculatoare", tag: "Popular" },
              { title: "Ghid Instalații Termice", href: "/KnowledgeBase", tag: "Recomandat" },
              { title: "Normativ I9-2022", href: "/normative", tag: "Actualizat" },
              { title: "Calculator Pierderi Sarcină", href: "/calculatoare", tag: "Nou" },
              { title: "Clădiri Pasive - PHPP", href: "/KnowledgeBase", tag: "nZEB" },
              { title: "Certificare Energetică", href: "/KnowledgeBase", tag: "MC001" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-gray-600 hover:bg-gray-750 transition-all group"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {item.title}
                </span>
                <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded">
                  {item.tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Începe să explorezi acum
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Accesează ghidurile de proiectare, calculatoarele tehnice și normativele 
              pentru toate tipurile de instalații.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/KnowledgeBase"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <span>📖</span>
                <span>Ghiduri de Proiectare</span>
              </Link>
              <Link
                href="/normative"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <span>📚</span>
                <span>Normative Tehnice</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Single Instance */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏗️</span>
              <span className="text-white font-semibold">Portal Instalații</span>
            </div>
            <p className="text-gray-400 text-sm text-center">
              Platformă educațională pentru domeniul instalațiilor în construcții • 2024
            </p>
            <div className="flex items-center gap-4">
              <Link href="/normative" className="text-gray-400 hover:text-white text-sm transition-colors">
                Normative
              </Link>
              <Link href="/KnowledgeBase" className="text-gray-400 hover:text-white text-sm transition-colors">
                Ghiduri
              </Link>
              <Link href="/calculatoare" className="text-gray-400 hover:text-white text-sm transition-colors">
                Calculatoare
              </Link>
            </div>
          </div>
          
          {/* Autor Site - Sub toate textele */}
          <div className="mt-6 pt-6 border-t border-gray-700/50 flex justify-center">
            <Link 
              href="/profil" 
              className="group flex items-center gap-2 text-xs text-gray-500 hover:text-cyan-400 transition-all duration-200"
            >
              <span className="w-6 h-6 rounded-full bg-gray-700 group-hover:bg-cyan-900/50 flex items-center justify-center transition-colors">
                <span className="text-sm">👤</span>
              </span>
              <span className="group-hover:translate-x-0.5 transition-transform">Autor site</span>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}