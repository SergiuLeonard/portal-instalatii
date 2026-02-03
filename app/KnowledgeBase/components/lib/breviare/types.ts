// /app/knowledgebase/lib/breviare/types.ts

export type DomeniuType = 
  | 'sanitare'
  | 'termice'
  | 'racire-ventilatie'
  | 'frigorifice'
  | 'electrice'
  | 'gaze'
  | 'isi'
  | 'cladiri-speciale'
  | 'automatizari'
  | 'eficienta-energetica'
  | 'hidroedilitare'
  | 'management'
  | 'fundamente';

export interface DomeniuInfo {
  id: DomeniuType;
  nume: string;
  icon: string;
  color: string;
  bgColor: string;
  descriere: string;
}

export interface Breviar {
  cod: string;
  titlu: string;
  slug: string;
  nivel: 'initiator' | 'mediu' | 'avansat';
  sursa: string;
  areCalculator: boolean;
  calculatorUrl?: string;
  
  continut: {
    scop: string;
    formula: string;
    variabile: Array<{simbol: string; definitie: string; unitate: string}>;
    exempluNumeric: {
      date: string;
      pasi: string[];
      rezultat: string;
      verificare?: string;
    };
    observatii?: string[];
  };
  
  txtSimplificat: string;
}

// Helper pentru generare TXT
export function generateTxtContent(breviar: Breviar): string {
  return breviar.txtSimplificat;
}