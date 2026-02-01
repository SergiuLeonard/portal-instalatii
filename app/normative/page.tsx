import Link from "next/link";

export default function NormativePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Normative, Legislație și Reglementări
      </h1>

      {/* Butoane / secțiuni */}
      <div className="flex flex-wrap gap-3 mb-10">
        <a href="#normative" className="btn">
          Normative
        </a>
        <a href="#bibliografie" className="btn">
          Bibliografie
        </a>
      </div>

      {/* Secțiuni */}
      <section id="normative" className="mb-16">
        <h2 className="text-xl font-semibold mb-4">
          Normative tehnice
        </h2>
        <p className="text-gray-600">
          Aici vor fi listate normativele tehnice (din PDF).
        </p>
      </section>

      <section id="bibliografie">
        <h2 className="text-xl font-semibold mb-4">
          Bibliografie
        </h2>
        <p className="text-gray-600">
          Vezi bibliografia detaliată pentru concurs.
        </p>

        {/* LINK către pagina ta mare */}
        <Link
          href="/bibliografie"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Accesează bibliografia completă →
        </Link>
      </section>
    </main>
  );
}
