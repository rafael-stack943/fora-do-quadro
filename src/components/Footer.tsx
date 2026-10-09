
import Link from "next/link";

const links = [
  { label: "Início", href: "/" },
  { label: "Críticas", href: "/criticas" },
  { label: "Reflexões", href: "/reflexoes" },
  { label: "Em Cartaz", href: "/em-cartaz" },
  { label: "Sobre", href: "/sobre" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080B] px-6 py-12 md:px-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

          {/* Identidade */}
          <Link
            href="/"
            className="font-serif text-2xl leading-[0.95] text-white"
          >
            FORA DO
            <br />
            QUADRO<span className="text-[#B58ADF]">.</span>
          </Link>

          {/* Navegação */}
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-6 gap-y-4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] text-gray-400 transition-colors duration-300 hover:text-[#B58ADF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Assinatura editorial */}
          <p className="max-w-[250px] text-xs leading-6 tracking-wide text-gray-500 lg:text-right">
            O que sentimos também merece
            <br />
            ser contado<span className="text-[#B58ADF]">.</span>
          </p>
        </div>

        {/* Direitos autorais */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Fora do Quadro.
            Todos os direitos reservados.
          </p>

          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
            Cinema • Cultura • Existência
          </span>
        </div>
      </div>
    </footer>
  );
}
