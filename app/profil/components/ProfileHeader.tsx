export default function ProfileHeader() {
  return (
    <section className="cv-header">
      <img
        src="/profil.jpg"
        alt="Sergiu-Leonard Cherecheș"
        className="cv-photo"
      />

      <div className="cv-header-text">
        <h1>Sergiu-Leonard Cherecheș</h1>

        <div className="title">
          Inginer Instalații pentru Construcții (HVAC · Apă-Canal · Termice - Electrice) - Cluj-Napoca, România
        </div>

        <p className="summary">
          Inginer instalații pentru construcții, cu peste 15 ani experiență în proiectare, 
          execuție și mentenanță (apă-canal, HVAC, sanitare, termice). Experiență completă 
          pe ciclul proiectelor: teren → proiectare → execuție → exploatare, 
          în proiecte publice majore finanțate din fonduri UE.
        </p>
      </div>
    </section>
  );
}
