import KnowledgeMenu from "./components/KnowledgeMenu";
import GhidApa from "./components/GhidApa";
import GhidCanalizare from "./components/GhidCanalizare";
import GhidTermice from "./components/GhidTermice";

export default function KnowledgeBasePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Ghiduri de proiectare instalații
      </h1>

      <KnowledgeMenu />

      <section id="apa" className="mt-12">
        <GhidApa />
      </section>

      <section id="canalizare" className="mt-12">
        <GhidCanalizare />
      </section>

      <section id="termice" className="mt-12">
        <GhidTermice />
      </section>
    </main>
  );
}
