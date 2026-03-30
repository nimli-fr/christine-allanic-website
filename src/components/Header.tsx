"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Bilan de Comp\u00e9tences", href: "/bilan-de-competences" },
  { name: "Formations SST", href: "/formation-sst" },
  { name: "\u00c0 propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-accent text-lg tracking-tight">Formations</span>
              <span className="text-primary font-semibold text-lg"> And Co</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
            >
              Prendre rendez-vous
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center hover:bg-primary-dark transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Prendre rendez-vous
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
