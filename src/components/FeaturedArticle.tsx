
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
              01 / Em destaque — Ensaio
            </p>

            <h2 className="font-serif text-5xl leading-[1.1] md:text-6xl">
              As histórias
              <br />
              que nos
              <br />
              <span className="italic text-[#B58ADF]">
                encontram.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-400">
              Por que algumas obras permanecem conosco mesmo
              depois que os créditos sobem? Uma reflexão sobre
              o impacto do cinema em nossas vidas e na forma
              como enxergamos o mundo.
            </p>

            <Link
              href="/criticas"
              className="mt-10 inline-flex items-center gap-8 border border-[#A875D6] px-7 py-4 text-xs uppercase tracking-widest transition-all duration-300 hover:bg-[#A875D6]/20"
            >
              Ler ensaio
              <span>→</span>
            </Link>
          </div>
        </Reveal>

        {/* Fotografia editorial animada */}
        <Reveal delay={0.2}>
          <div className="group relative h-[350px] overflow-hidden md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/60 to-transparent" />

            <span className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/70">
              Cinema também é casa.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
