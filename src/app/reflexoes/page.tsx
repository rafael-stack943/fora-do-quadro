import Link from "next/link";
import Reveal from "@/components/Reveal";
import { reflexoes } from "@/data/reflexoes";

export const metadata = {
  title: "Reflexões",
  description:
    "Textos autorais sobre sentimentos, existência, memória e cinema.",
};

export default function ReflexoesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Introdução */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-32 md:px-16 md:pt-40">
        <div className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-[#7945B5]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              Fora do Quadro / 02
            </p>

            <h1 className="font-serif text-6xl tracking-tight md:text-8xl">
              Reflexões<span className="text-[#B58ADF]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              Algumas histórias não pertencem apenas ao cinema. Pertencem àquilo
              que carregamos em silêncio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manifesto editorial */}
      <section className="border-b border-white/10 px-6 py-28 md:px-16">
        <Reveal>
          <div className="mx-auto max-w-[950px] text-center">
            <span
              aria-hidden="true"
              className="font-serif text-7xl text-[#B58ADF]/60"
            >
              “
            </span>

            <h2 className="mt-4 font-serif text-3xl italic leading-relaxed md:text-5xl">
              Existem sentimentos que não procuram respostas. Apenas um lugar
              onde possam existir.
            </h2>

            <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              Notas sobre a existência
            </p>
          </div>
        </Reveal>
      </section>

      {/* Lista de reflexões */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-14 flex items-end justify-between gap-4">
              <h2 className="font-serif text-3xl md:text-4xl">
                Fragmentos escritos
              </h2>

              <span className="text-xs uppercase tracking-widest text-gray-500">
                {reflexoes.length} textos
              </span>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {reflexoes.map((reflexao, index) => (
              <Reveal key={reflexao.numero} delay={index * 0.1}>
                <Link
                  href={`/reflexoes/${reflexao.slug}`}
                  className="group grid gap-5 border-b border-white/10 py-12 transition-colors hover:border-[#B58ADF]/40 md:grid-cols-[90px_1fr_130px] md:gap-10"
                >
                  <span className="font-serif text-3xl text-[#B58ADF]/60">
                    {reflexao.numero}
                  </span>

                  <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#B58ADF]">
                      {reflexao.categoria}
                    </p>

                    <h3 className="max-w-3xl font-serif text-3xl leading-tight transition-colors group-hover:text-[#B58ADF] md:text-5xl">
                      {reflexao.titulo}
                    </h3>

                    <p className="mt-6 max-w-xl leading-8 text-gray-400">
                      {reflexao.descricao}
                    </p>
                  </div>

                  <div className="flex items-end justify-between md:flex-col md:items-end">
                    <span className="text-xs uppercase tracking-widest text-gray-500">
                      {reflexao.leitura} de leitura
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-3xl text-[#B58ADF] transition-transform duration-300 group-hover:translate-x-2"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Encerramento */}
      <section className="border-t border-white/10 bg-[#100C16] px-6 py-24 text-center md:px-16">
        <Reveal>
          <p className="font-serif text-3xl italic text-white/80 md:text-4xl">
            O cinema termina.
            <br />
            <span className="text-[#B58ADF]">O sentimento, não.</span>
          </p>

          <Link
            href="/"
            className="mt-10 inline-block text-xs uppercase tracking-[0.25em] text-gray-400 transition-colors hover:text-[#B58ADF]"
          >
            ← Voltar ao início
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
