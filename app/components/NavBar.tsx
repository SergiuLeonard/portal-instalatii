"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Acasă" },
  { href: "/normative", label: "Normative" },
  { href: "/KnowledgeBase", label: "Ghiduri de proiectare" },
  { href: "/europene", label: "Proiecte Europene" },
  { href: "/calculatoare", label: "Calculatoare" },  
];

// Link către Portalul Construcții (modifică URL-ul după caz)
const PORTAL_URL = "https://portal-constructii.vercel.app"; 
//Sau dacă rulezi local: "http://localhost:3001"

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="no-print relative overflow-hidden border-b border-gray-700/50 sticky top-0 z-50">
            {/* Gradient Background cu Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-gray-900 to-purple-900/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
            
            {/* Glow effect în partea de sus */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div className="absolute -bottom-10 left-1/4 w-1/2 h-20 bg-blue-500/20 blur-3xl rounded-full" />

            <nav className="relative z-10 max-w-7xl mx-auto px-4 backdrop-blur-sm">
            <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white font-bold text-lg hover:text-blue-400 transition-colors"
          >
            <span className="text-sm">🏗️</span>
            <span className="hidden sm:inline">Portal Instalații</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = 
                item.href === "/" 
                  ? pathname === "/" 
                  : pathname.startsWith(item.href);
              
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
            
            {/* Portal Construcții Button - Desktop */}
            <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-amber-600 via-orange-600 to-orange-500 text-white hover:from-amber-500 hover:via-orange-500 hover:to-orange-400 transition-all duration-200 shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-orange-400/50"
                title="Accesează Portalul Construcții"
              >
              {/* Icon clădire/construcție */}
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                />
              </svg>
              <span>Portal Construcții</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Portal Button - Mobile (icon only) */}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-500 hover:to-orange-500 transition-all duration-200 shadow-[0_0_10px_rgba(245,158,11,0.3)] border border-orange-400/30"
              title="Portal Construcții"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                />
              </svg>
            </a>
            
            <MobileMenu pathname={pathname} navItems={navItems} portalUrl={PORTAL_URL} />
          </div>
        </div>
      </nav>
    </header>
  );
}

// MobileMenu component - actualizat cu Portal Construcții
function MobileMenu({ pathname, navItems, portalUrl }: { 
  pathname: string; 
  navItems: {href: string; label: string}[];
  portalUrl: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        aria-label="Meniu navigare"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-56 bg-gray-800 border border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
            <div className="py-2">
              {navItems.map((item) => {
                const isActive = 
                  item.href === "/" 
                    ? pathname === "/" 
                    : pathname.startsWith(item.href);
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)] border-l-4 border-blue-400"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Separator */}
              <div className="border-t border-gray-700 my-2" />
              
              {/* Portal Construcții Link in Mobile Menu */}
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-amber-400 hover:bg-gray-700 transition-colors"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
                <span>Portal Construcții</span>
                <svg 
                  className="w-4 h-4 ml-auto" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}