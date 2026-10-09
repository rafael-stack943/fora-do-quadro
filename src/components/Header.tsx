
"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Críticas", href: "/criticas" },
  { label: "Reflexões", href: "/reflexoes" },
  { label: "Em Cartaz", href: "/em-cartaz" },
  { label: "Sobre", href: "/sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#0B0B0F]">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-16">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-serif text-2xl leading-[0.95] text-white"
        >
          FORA DO
          <br />
          QUADRO<span className="text-[#A875D6]">.</span>
        </Link>

        {/* Navegação desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 md:flex"
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[11px] uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#A875D6] transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#A875D6] lg:block">
          Cinema & Existência
        </span>

        {/* Botão mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Navegação mobile */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className="fixed inset-x-0 top-[80px] bottom-0 z-50 overflow-y-auto border-t border-[#A875D6]/30 bg-[#0B0B0F] px-8 py-10 md:hidden"
        >
          <div className="flex flex-col gap-7">
            {menuItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-5 border-b border-white/10 pb-5 font-serif text-3xl transition-colors hover:text-[#B58ADF]"
              >
                <span className="font-sans text-xs text-[#A875D6]">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-gray-500">
            O cinema termina. O sentimento, não.
          </p>
        </nav>
      )}
    </header>
  );
}
