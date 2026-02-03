// /app/knowledgebase/lib/breviare/index.ts

// Tipuri
export type { DomeniuType, DomeniuInfo, Breviar } from './types';

// Date domenii
export { domenii } from './domenii';

// Breviare pe domenii - importă toate
import { Breviar } from "./types";
import { breviareSanitare } from './sanitare';
import { breviareTermice } from './termice';
import { breviareRacireVentilatie } from './racire-ventilatie';
import { breviareFrigorifice } from './frigorifice';
import { breviareElectrice } from './electrice';
import { breviareGaze } from './gaze';
import { breviareISI } from './isi';
import { breviareCladiriSpeciale } from './cladiri-speciale';
import { breviareAutomatizari } from './automatizari';
import { breviareEficientaEnergetica } from './eficienta-energetica';
import { breviareHidroedilitare } from './hidroedilitare';
import { breviareManagementResurse } from './management';
import { breviareFundamente } from './fundamente';

// Export individual
export {
  breviareSanitare,
  breviareTermice,
  breviareRacireVentilatie,
  breviareFrigorifice,
  breviareElectrice,
  breviareGaze,
  breviareISI,
  breviareCladiriSpeciale,
  breviareAutomatizari,
  breviareEficientaEnergetica,
  breviareHidroedilitare,
  breviareManagementResurse,
  breviareFundamente
};

// Array complet pentru căutare
export const toateBreviarele = [
  ...breviareSanitare,
  ...breviareTermice,
  ...breviareRacireVentilatie,
  ...breviareFrigorifice,
  ...breviareElectrice,
  ...breviareGaze,
  ...breviareISI,
  ...breviareCladiriSpeciale,
  ...breviareAutomatizari,
  ...breviareEficientaEnergetica,
  ...breviareHidroedilitare,
  ...breviareManagementResurse,
  ...breviareFundamente
];

// Helper pentru căutare după cod
export function findBreviar(cod: string): Breviar | undefined {
  return toateBreviarele.find(b => b.cod === cod);
}

// Utils
export { generateTxtContent } from './types';