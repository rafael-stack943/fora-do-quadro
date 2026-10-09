
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchOverlay from "@/components/SearchOverlay";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Críticas", href: "/criticas" },
  { label: "Reflexões", href: "/reflexoes" },
  { label: "Em Cartaz", href: "/em-cartaz" },
  { label: "Sobre", href: "/sobre" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;

    const fecharComEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, [menuOpen]);

  function estaAtivo(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function abrirBusca() {
    setMenuOpen(false);
    setSearchOpen(true);
  }

  function fecharBusca() {
    setSearchOpen(false);
  }

  return (
    <>
      <header className="relative z-50 border-b border-white/10 bg-[#0B0B0F]">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-6 py-6 md:px-16">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="shrink-0 font-serif text-2xl leading-[0.95] text-white"
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
            {menuItems.map((item) => {
              const ativo = estaAtivo(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={ativo ? "page" : undefined}
                  className={`group relative py-2 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 ${
                    ativo
                      ? "text-[#B58ADF]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#A875D6] transition-all duration-300 ${
                      ativo
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Ações */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="mr-3 hidden text-[10px] uppercase tracking-[0.2em] text-[#A875D6] xl:block">
              Cinema & Existência
            </span>

            {/* Busca */}
            <button
              type="button"
              aria-label="Pesquisar no site"
              title="Pesquisar"
              onClick={abrirBusca}
              className="flex h-11 w-11 items-center justify-center text-gray-400 transition-colors duration-300 hover:text-[#B58ADF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58ADF]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            {/* Menu mobile */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((atual) => !atual)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 text-white md:hidden"
            >
              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${
                  menuOpen
                    ? "translate-y-[3.5px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-px w-6 bg-current transition-transform duration-300 ${
                  menuOpen
                    ? "-translate-y-[3.5px] -rotate-45"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Navegação mobile */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-[#A875D6]/30 bg-[#0B0B0F] px-8 py-10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-7">
              {menuItems.map((item, index) => {
                const ativo = estaAtivo(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={ativo ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-5 border-b border-white/10 pb-5 font-serif text-3xl transition-colors duration-300 ${
                      ativo
                        ? "text-[#B58ADF]"
                        : "text-white hover:text-[#B58ADF]"
                    }`}
                  >
                    <span className="font-sans text-xs text-[#A875D6]">
                      0{index + 1}
                    </span>

                    {item.label}
                  </Link>
                );
              })}
            </div>

            <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-gray-500">
              O cinema termina. O sentimento, não.
            </p>
          </nav>
        )}
      </header>

      {/* Busca global */}
      <SearchOverlay
        open={searchOpen}
        onClose={fecharBusca}
      />
    </>
  );
}
