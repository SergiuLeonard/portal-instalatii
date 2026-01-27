import PageContainer from "../components/PageContainer";

export default function KnowledgeBasePage() {
  return (
    <main>
      <section>
        <h1>Knowledge Base – Instalații</h1>
        <p>
          Secțiune dedicată organizării informației tehnice pe domenii de
          instalații și tipuri de documentații.
        </p>
      </section>

      <section>
        <h2>Domenii de instalații</h2>

        <h3>Instalații sanitare</h3>
        <ul>
          <li>alimentare cu apă</li>
          <li>canalizare menajeră</li>
          <li>canalizare pluvială</li>
        </ul>

        <h3>Rețele exterioare</h3>
        <ul>
          <li>rețele de apă</li>
          <li>rețele de canalizare</li>
          <li>branșamente</li>
          <li>cămine</li>
          <li>rezervoare și stații de pompare</li>
        </ul>

        <h3>Instalații aferente construcțiilor</h3>
        <ul>
          <li>principii generale</li>
          <li>corelare cu alte specialități</li>
        </ul>
      </section>

      <section>
        <h2>Documentații tehnice</h2>
        <ul>
          <li>DTAC</li>
          <li>Proiect Tehnic (PT)</li>
          <li>Detalii de Execuție (DDE)</li>
          <li>Memorii tehnice</li>
          <li>Breviare de calcul</li>
          <li>Caiete de sarcini</li>
        </ul>
      </section>
    </main>
  );
}
