
import Link from "next/link";

const menuItems = [
  { label: "Início", href: "/" },
  { label: "Críticas", href: "/criticas" },
  { label: "Reflexões", href: "/reflexoes" },
  { label: "Em Cartaz", href: "/em-cartaz" },
  { label: "Sobre", href: "/sobre" },
];

export default function Header() {
  return (
    <header className="relative z-50 w-full border-b border-white/10 bg-[#0B0B0F]/95">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 md:px-16">
        {/* Identidade visual */}
        <Link
          href="/"
          className="font-serif text-xl leading-[0.95] tracking-tight text-white md:text-2xl"
        >
          FORA DO
          <br />
          QUADRO<span className="text-[#A875D6]">.</span>
        </Link>

        {/* Navegação */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 md:flex"
        >
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[11px] uppercase tracking-[0.15em] text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#A875D6] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Detalhe editorial */}
        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#A875D6] lg:block">
          Cinema & Existência
        </span>
      </div>
    </header>
  );
}
