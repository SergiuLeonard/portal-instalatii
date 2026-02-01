"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  // Ascundem NavBar pe pagina de CV
  if (pathname.startsWith("/profil")) {
    return null;
  }

  return (
    <header className="no-print">
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link href="/">Acasă</Link> |{" "}
        <Link href="/normative">Normative</Link> |{" "}
        <Link href="/KnowledgeBase">Ghiduri de proiectare</Link> |{" "}
        <Link href="/calculatoare">Calculatoare</Link> |{" "}
        <Link href="/profil">Profil</Link>
      </nav>
    </header>
  );
}
