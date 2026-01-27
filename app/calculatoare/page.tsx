import PageContainer from "../components/PageContainer";

export default function CalculatoarePage() {
  return (
    <main>
      <section>
        <h1>Calculatoare pentru instalații</h1>
        <p>
          Secțiune dedicată instrumentelor de calcul orientative utilizate în
          domeniul instalațiilor pentru construcții.
        </p>
      </section>

      <section>
        <h2>Categorii de calcul</h2>

        <h3>Instalații sanitare</h3>
        <ul>
          <li>estimare debite</li>
          <li>dimensionare conducte</li>
          <li>verificare viteze</li>
        </ul>

        <h3>Canalizare</h3>
        <ul>
          <li>calcul debite uzate</li>
          <li>pante minime</li>
          <li>verificare grad de umplere</li>
        </ul>

        <h3>Rețele exterioare</h3>
        <ul>
          <li>pierderi de sarcină</li>
          <li>dimensionare conducte</li>
          <li>verificare presiuni</li>
        </ul>
      </section>

      <section>
        <h2>Notă</h2>
        <p>
          Rezultatele obținute au caracter orientativ și nu înlocuiesc calculele
          detaliate din cadrul proiectelor tehnice.
        </p>
      </section>
    </main>
  );
}
