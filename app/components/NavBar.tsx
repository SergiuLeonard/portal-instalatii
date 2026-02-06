"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Acasă", short: "A" },
  { href: "/normative", label: "Normative", short: "N" },
  { href: "/KnowledgeBase", label: "Ghiduri", short: "G" },
  { href: "/europene", label: "Proiecte", short: "E" },
  { href: "/calculatoare", label: "Calc", short: "L" },  
];

const PORTAL_URL = "https://portal-constructii.vercel.app"; 

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="no-print relative overflow-hidden border-b border-gray-700/50 sticky top-0 z-50">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900 to-purple-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      <div className="absolute -bottom-10 left-1/4 w-1/2 h-20 bg-blue-500/20 blur-3xl rounded-full" />

      <nav className="relative z-10 max-w-7xl mx-auto px-4 backdrop-blur-sm">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white font-bold text-lg hover:text-blue-400 transition-colors shrink-0"
          >
            <span>🏗️</span>
            <span className="hidden sm:inline">Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)] border border-blue-400/50"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-amber-600 via-orange-600 to-orange-500 text-white hover:from-amber-500 hover:via-orange-500 hover:to-orange-400 transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-orange-400/50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Construcții</span>
            </a>
          </div>

          {/* Mobile Navigation - Butoane compacte unul lângă altul */}
          <div className="md:hidden flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            {/* Portal Construcții - iconiță */}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500 transition-all shadow-[0_0_10px_rgba(245,158,11,0.3)] border border-orange-400/30 shrink-0"
              title="Portal Construcții"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </a>
            
            {/* Separator */}
            <div className="w-px h-6 bg-gray-700 mx-1 shrink-0" />
            
            {/* Butoane nav - doar prima literă */}
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                      : "text-gray-300 hover:bg-gray-800 bg-gray-800/30"
                  }`}
                  title={item.label}
                >
                  {item.short}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}