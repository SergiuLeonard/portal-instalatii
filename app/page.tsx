import PageContainer from "./components/PageContainer";

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Portal tehnic pentru instalații în construcții</h1>
        <p>
          Platformă dedicată domeniului instalațiilor pentru construcții,
          orientată pe structurarea informației tehnice, a normativelor și a
          instrumentelor de calcul uzuale.
        </p>
      </section>

      <section>
        <h2>Ce găsești aici</h2>
        <ul>
          <li>sinteze și trimiteri către normative tehnice</li>
          <li>principii generale de proiectare pe domenii de instalații</li>
          <li>explicații privind documentațiile tehnice uzuale</li>
          <li>calculatoare orientative pentru verificări rapide</li>
        </ul>
      </section>

      <section>
        <h2>Cui se adresează</h2>
        <p>
          Portalul este destinat proiectanților, inginerilor, tehnicienilor,
          studenților și firmelor implicate în proiectarea și execuția
          instalațiilor.
        </p>
      </section>
    </main>
  );
}
