import Image from "next/image";
import Link from "next/link";

export default function ProfilPage() {
  return (
    <>
      {/* Navbar pentru pagina de profil */}
      <header className="bg-gray-900 border-b border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Link href="/profil" className="px-3 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white transition-all duration-200">
              Curriculum vitae
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Header Section */}
          <section className="bg-gray-800 rounded-2xl p-6 md:p-8 mb-6 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Photo */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
                <Image
                  src="/profil/profile-photo.jpg"
                  alt="Sergiu-Leonard Cherecheș"
                  fill
                  className="rounded-xl object-cover border-4 border-gray-700"
                  priority
                />
              </div>
              
              {/* Info */}
              <div className="text-center md:text-left flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Sergiu-Leonard Cherecheș
                </h1>
                <p className="text-xl text-blue-400 mb-4">
                  Inginer Instalații pentru Construcții
                </p>
                
                {/* Contact */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
                  <a 
                    href="mailto:sergiuleonardchereches@gmail.com" 
                    className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
                  >
                    <span>📧</span>
                    <span>Email</span>
                  </a>
                  <a 
                    href="tel:+40731129711" 
                    className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
                  >
                    <span>📱</span>
                    <span>+40 731 129 711</span>
                  </a>
                  <span className="inline-flex items-center gap-2 bg-gray-700 px-3 py-2 rounded-lg text-gray-300">
                    <span>📍</span>
                    <span>Cluj-Napoca, România</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* About / Summary */}
          <section className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-blue-400">👤</span> Despre mine
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Inginer instalații pentru construcții cu peste 15 ani de experiență în proiectarea și 
              asistența tehnică pentru infrastructuri hidroedilitare. Experiență dovedită în proiecte 
              majore POIM pentru sisteme de apă și canalizare. Studii postuniversitare în informatică 
              aplicată și programare, cu competențe în dezvoltare software și gestionarea bazelor de date.
            </p>
          </section>

          {/* Experience */}
          <section className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">💼</span> Experiență Profesională
            </h2>
            
            <div className="space-y-6">
              {/* Job 1 */}
              <div className="border-l-2 border-blue-600 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">Inginer Instalații pentru Construcții</h3>
                  <span className="text-xs bg-blue-900/50 text-blue-400 px-2 py-1 rounded">2019 - 2025</span>
                </div>
                <p className="text-blue-400 text-sm mb-2">ROMAIR CONSULTING S.R.L., București</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Asistență tehnică pentru proiecte POIM de infrastructură apă și canalizare</li>
                  <li>• Verificarea conformității soluțiilor tehnice cu proiectul și caietele de sarcini</li>
                  <li>• Participare la faze determinante și ședințe de progres</li>
                  <li>• Proiecte: Turda-Câmpia Turzii, Sibiu, Buzău</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-gray-600 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">GWH-Installateur</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">2018</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">HOGO Holding GmbH, Austria</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Instalator tehnic specializat în instalații de gaz, sanitare și încălzire</li>
                  <li>• Montaj, mentenanță și reparare sisteme din clădiri</li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-2 border-gray-600 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">Inginer Instalații pentru Construcții</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">2017 - 2018</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">SC CALORIA SRL</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Proiectare instalații: gaze naturale, sanitare, electrice</li>
                  <li>• Proiectare rețele edilitare, stații de epurare și pompare</li>
                  <li>• Studii de fezabilitate, proiecte tehnice, detalii de execuție</li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="border-l-2 border-gray-600 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">Inginer Instalații pentru Construcții</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">2014 - 2017</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">ROMAIR CONSULTING S.R.L., București</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Elaborare aplicație finanțare POIM 2014-2020</li>
                  <li>• Elaborare soluții tehnice și planșe desenate</li>
                  <li>• Studii de fezabilitate, proiecte tehnice pentru infrastructuri hidroedilitare</li>
                </ul>
              </div>

              {/* Job 5 */}
              <div className="border-l-2 border-gray-600 pl-4">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">Inginer Instalații pentru Construcții</h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">2009 - 2014</span>
                </div>
                <p className="text-gray-400 text-sm mb-2">COMPANIA DE APĂ SOMEȘ S.A., Cluj-Napoca</p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Proiectare și avizare tehnică pentru rețele de apă și canalizare</li>
                  <li>• Urmărirea execuției lucrărilor de extindere rețele utilități</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">🎓</span> Educație
            </h2>
            
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white">Studii Postuniversitare - Informatică Aplicată și Programare</h3>
                  <span className="text-sm text-gray-400">2019 - 2021</span>
                </div>
                <p className="text-blue-400 text-sm mb-2">Universitatea Tehnică din Cluj-Napoca (DECIDFR)</p>
                <p className="text-gray-400 text-sm">
                  Programare orientată pe obiect, Algoritmi și structuri de date, Baze de date SQL, 
                  Programare Web, Ingineria software
                </p>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white">Master - Inginer Instalații pentru Construcții</h3>
                  <span className="text-sm text-gray-400">2009 - 2011</span>
                </div>
                <p className="text-blue-400 text-sm mb-2">Facultatea de Instalații, UTCN</p>
                <p className="text-gray-400 text-sm">
                  Instalații pentru clădiri multizonale, Domotică și BMS, Audit și certificare energetică, 
                  Clădiri pasive și inteligente
                </p>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white">Diplomă de Inginer - Instalații pentru Construcții</h3>
                  <span className="text-sm text-gray-400">2005 - 2009</span>
                </div>
                <p className="text-blue-400 text-sm mb-2">Facultatea de Instalații, UTCN</p>
                <p className="text-gray-400 text-sm">
                  Instalații de încălzire, sanitare, ventilare, electrice, frigorifice, gaze naturale, automatizare
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">🛠️</span> Competențe Tehnice
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-300 mb-3">Software CAD & Specialitate</h3>
                <div className="flex flex-wrap gap-2">
                  {["AutoCAD", "Bentley Microstation", "Urbano", "Canalis", "EPANET", "GIS", "TOPCON"].map((skill) => (
                    <span key={skill} className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-300 mb-3">Programare & IT</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Programare Web", "MS Office", "Baze de date", "GIS"].map((skill) => (
                    <span key={skill} className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-300 mb-3">Domenii de Expertiză</h3>
                <div className="flex flex-wrap gap-2">
                  {["Instalații Sanitare", "Instalații Termice", "Instalații Gaze", "Rețele Hidroedilitare", "Stații de Epurare"].map((skill) => (
                    <span key={skill} className="bg-emerald-900/30 text-emerald-400 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-300 mb-3">Limbi Străine</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Engleză</span>
                    <span className="text-gray-400 text-sm">B2 (citire/scriere), B1 (conversație)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Germană</span>
                    <span className="text-gray-400 text-sm">A1 (nivel de bază)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="bg-gray-800 rounded-2xl p-6 mb-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-blue-400">🏗️</span> Proiecte Majore
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="https://caaries.ro/poim-2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors group"
              >
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  POIM Turda-Câmpia Turzii
                </h3>
                <p className="text-gray-400 text-sm">
                  Dezvoltare infrastructură apă și apă uzată 2014-2020
                </p>
              </a>

              <a 
                href="https://www.apacansb.ro/investitii/proiect-poim/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors group"
              >
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  POIM Sibiu
                </h3>
                <p className="text-gray-400 text-sm">
                  Dezvoltare infrastructură apă și apă uzată 2014-2020
                </p>
              </a>

              <a 
                href="https://poim.cabuzau.ro/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700 transition-colors group"
              >
                <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                  POIM Buzău
                </h3>
                <p className="text-gray-400 text-sm">
                  Dezvoltare infrastructură apă și apă uzată 2014-2020
                </p>
              </a>
            </div>
          </section>

          {/* Footer */}
          <div className="text-center text-gray-500 text-sm py-4">
            <p>📍 Cluj-Napoca, România • Disponibil pentru proiecte și colaborări</p>
          </div>

        </div>
      </main>
    </>
  );
}