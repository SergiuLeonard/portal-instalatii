// /app/knowledgebase/components/Breviare/Breviare.tsx

"use client";

import { useState } from "react";
import { domenii, DomeniuType } from "./../lib/breviare";
import DomeniiGrid from "./DomeniiGrid";
import DomeniuDetail from "./DomeniuDetail";

export default function Breviare() {
  const [domeniuActiv, setDomeniuActiv] = useState<DomeniuType | null>(null);

  const domeniuInfo = domenii.find((d) => d.id === domeniuActiv);

  // DEBUG - vezi în consolă ce se întâmplă
  console.log('Domenii disponibile:', domenii.length);
  console.log('Domeniu activ:', domeniuActiv);
  console.log('Domeniu info:', domeniuInfo);

  return (
    <div>
      {!domeniuActiv ? (
        <DomeniiGrid 
          domenii={domenii} 
          onSelect={setDomeniuActiv} 
        />
      ) : (
        <DomeniuDetail 
          domeniu={domeniuInfo!} 
          onBack={() => setDomeniuActiv(null)} 
        />
      )}
    </div>
  );
}