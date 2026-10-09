
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080B] px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">

        <Link href="/" className="font-serif text-2xl leading-6">
          FORA DO
          <br />
          QUADRO<span className="text-[#B58ADF]">.</span>
        </Link>

        <nav
          aria-label="Navegação do rodapé"
          className="flex flex-wrap gap-5 text-[11px] uppercase tracking-widest text-gray-400"
        >
          <Link href="/" className="hover:text-white">
            Início
          </Link>
          <Link href="/criticas" className="hover:text-white">
            Críticas
          </Link>
          <Link href="/reflexoes" className="hover:text-white">
            Reflexões
          </Link>
          <Link href="/em-cartaz" className="hover:text-white">
            Em Cartaz
          </Link>
          <Link href="/sobre" className="hover:text-white">
            Sobre
          </Link>
        </nav>

        <p className="text-[10px] uppercase tracking-[0.15em] text-gray-500">
          O que sentimos também merece ser contado.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-[1500px] border-t border-white/10 pt-6">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Fora do Quadro.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
