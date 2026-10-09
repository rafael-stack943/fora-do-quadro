
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o Fora do Quadro, um espaço independente de cinema, cultura e reflexões.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">

      {/* Abertura */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-32 md:px-16 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 h-[450px] w-[450px] rounded-full bg-[#7945B5]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px]">
          <Reveal>
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              Fora do Quadro / 04
            </p>

            <h1 className="max-w-5xl font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              Há histórias que
              <br />
              continuam
              <br />
              <span className="italic text-[#B58ADF]">
                dentro de nós.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-gray-400">
              Um espaço independente dedicado ao cinema,
              à cultura e às reflexões que ultrapassam
              os limites de uma tela.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-b border-white/10 px-6 py-24 md:px-16 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1fr_1.5fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              01 / Nosso manifesto
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl leading-snug md:text-5xl">
                O cinema nunca foi apenas sobre assistir.
              </h2>

              <div className="mt-10 space-y-7 text-base leading-8 text-gray-400 md:text-lg">
                <p>
                  Algumas histórias permanecem conosco
                  muito depois que os créditos terminam.
                  Elas atravessam nossas lembranças,
                  despertam sentimentos e transformam
                  a maneira como enxergamos o mundo.
                </p>

                <p>
                  O Fora do Quadro nasceu da vontade
                  de explorar esse encontro entre
                  a arte e a experiência humana.
                </p>

                <p>
                  Aqui, o cinema é ponto de partida
                  para conversas sobre memória,
                  identidade, existência e tudo
                  aquilo que merece ser sentido
                  e pensado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Fotografia editorial */}
      <section className="px-6 py-16 md:px-16">
        <Reveal>
          <div className="relative mx-auto h-[350px] max-w-[1500px] overflow-hidden bg-[#17131D] md:h-[550px]">
            <div
              role="img"
              aria-label="Sala de cinema"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1800')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-black/20" />

            <p className="absolute bottom-8 left-8 font-serif text-2xl italic md:bottom-12 md:left-12 md:text-4xl">
              Algumas histórias nunca nos deixam.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Pilares */}
      <section className="px-6 py-24 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="mb-12 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              02 / O que nos move
            </p>
          </Reveal>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                numero: "01",
                titulo: "Cinema",
                texto:
                  "Críticas e análises que exploram histórias para além de seus aspectos técnicos.",
              },
              {
                numero: "02",
                titulo: "Cultura",
                texto:
                  "Um olhar atento às narrativas e transformações do entretenimento.",
              },
              {
                numero: "03",
                titulo: "Existência",
                texto:
                  "Reflexões sobre sentimentos, memória e a experiência de estar vivo.",
              },
            ].map((item, index) => (
              <Reveal key={item.numero} delay={index * 0.12}>
                <div className="border-t border-white/20 pt-8">
                  <span className="text-xs tracking-widest text-[#B58ADF]">
                    {item.numero}
                  </span>

                  <h3 className="mt-8 font-serif text-4xl">
                    {item.titulo}
                  </h3>

                  <p className="mt-6 max-w-sm leading-8 text-gray-400">
                    {item.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Encerramento */}
      <section className="border-t border-white/10 bg-[#100C16] px-6 py-28 text-center md:px-16">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              Nossa essência
            </p>

            <h2 className="font-serif text-4xl italic leading-snug md:text-6xl">
              O cinema termina.
              <br />
              <span className="text-[#B58ADF]">
                O sentimento, não.
              </span>
            </h2>

            <Link
              href="/criticas"
              className="mt-12 inline-flex items-center gap-5 border border-[#A875D6] px-8 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[#A875D6]/20"
            >
              Explorar histórias
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
