
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FeaturedArticle() {
  return (
    <section
      id="conteudo"
      className="border-t border-white/10 bg-[#0B0B0F] px-6 py-20 md:px-16"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-12 lg:grid-cols-2">

        {/* Texto editorial animado */}
        <Reveal>
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              01 / Em destaque — Crítica
            </p>

            <h2 className="font-serif text-5xl leading-[1.1] md:text-6xl">
              O amor que
              <br />
              permanece
              <br />
              <span className="italic text-[#B58ADF]">
                depois da ausência.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
              Uma reflexão sobre Hamnet, o luto e a maneira como
              a arte encontra formas de preservar aquilo que
              o tempo não pode devolver.
            </p>

            <Link
              href="/criticas/hamnet"
              className="mt-10 inline-flex items-center gap-8 border border-[#A875D6] px-7 py-4 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#A875D6]/20"
            >
              Ler crítica
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        {/* Fotografia editorial animada */}
        <Reveal delay={0.2}>
          <Link
            href="/criticas/hamnet"
            aria-label="Ler crítica de Hamnet"
            className="group relative block h-[350px] overflow-hidden md:h-[500px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/images/hamnet.jpg')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 to-transparent" />

            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/70">
              Hamnet · Chloé Zhao · 2025
            </span>
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
