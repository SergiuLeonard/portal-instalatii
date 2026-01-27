"use client";

export default function PrintButton() {
  return (
    <div className="cv-actions no-print">
      <button onClick={() => window.print()}>
        Descarcă CV (PDF)
      </button>
    </div>
  );
}
