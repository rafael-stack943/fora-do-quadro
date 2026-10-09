
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { artigos } from "@/data/artigos";

export const metadata = {
  title: "Críticas",
  description:
    "Críticas e análises cinematográficas do Fora do Quadro.",
};

export default function CriticasPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <section className="border-b border-white/10 px-6 pb-16 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              Fora do Quadro / 01
            </p>

            <h1 className="font-serif text-6xl tracking-tight md:text-8xl">
              Críticas<span className="text-[#B58ADF]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              Nem toda história termina quando os créditos sobem.
              Aqui, exploramos aquilo que o cinema deixa em nós:
              memórias, sentimentos e perguntas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="font-serif text-2xl md:text-3xl">
                Últimas análises
              </h2>

              <span className="text-xs uppercase tracking-widest text-gray-500">
                {artigos.length} {artigos.length === 1 ? "texto" : "textos"}
              </span>
            </div>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {artigos.map((artigo, index) => (
              <Reveal key={artigo.slug} delay={index * 0.12}>
                <article className="group">
                  <Link
                    href={`/criticas/${artigo.slug}`}
                    className="block"
                  >
                    <div className="relative mb-6 h-[350px] overflow-hidden bg-[#17131D]">
                      <div
                        role="img"
                        aria-label={`Imagem ilustrativa de ${artigo.titulo}`}
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url("${artigo.imagem}")`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B58ADF]">
                      {artigo.categoria}
                    </p>

                    <h3 className="mb-4 font-serif text-3xl leading-tight transition-colors group-hover:text-[#B58ADF]">
                      {artigo.titulo}
                    </h3>

                    <p className="mb-6 leading-7 text-gray-400">
                      {artigo.subtitulo}
                    </p>

                    <span className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white transition-colors group-hover:text-[#B58ADF]">
                      Ler crítica <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
