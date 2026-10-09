
import Link from "next/link";
import Reveal from "@/components/Reveal";

const destaques = [
  {
    title: "O futuro do cinema nas grandes telas",
    category: "Cinema",
  },
  {
    title: "As histórias que nos encontram nas séries",
    category: "Séries",
  },
  {
    title: "Novos universos, novas perspectivas",
    category: "Entretenimento",
  },
];

export default function NewsSection() {
  return (
    <section className="bg-[#0B0B0F] px-6 py-24 md:px-16">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-2">

        {/* Em Cartaz */}
        <Reveal>
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              03 / Em Cartaz
            </p>

            <h2 className="mb-10 font-serif text-4xl md:text-5xl">
              O mundo além
              <br />
              das telas<span className="text-[#B58ADF]">.</span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">

              {/* Imagem */}
              <div
                role="img"
                aria-label="Equipamentos de projeção cinematográfica"
                className="min-h-[300px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=900')",
                }}
              />

              {/* Temas editoriais */}
              <div className="flex flex-col justify-between gap-6">
                {destaques.map((item) => (
                  <Link
                    href="/em-cartaz"
                    key={item.title}
                    className="group border-b border-white/10 pb-5"
                  >
                    <p className="mb-2 text-xs uppercase tracking-widest text-[#B58ADF]">
                      {item.category} · Em preparação
                    </p>

                    <h3 className="font-serif text-xl leading-snug transition-colors duration-300 group-hover:text-[#B58ADF]">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/em-cartaz"
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#B58ADF] transition-colors hover:text-white"
            >
              Explorar Em Cartaz
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        {/* Sobre o projeto */}
        <Reveal delay={0.2}>
          <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              04 / Sobre o projeto
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Um lugar para
              <br />
              sentir e pensar.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-gray-400">
              Fora do Quadro é um espaço autoral para cinema,
              crítica, cultura e reflexões. Um arquivo de
              histórias e sentimentos que merecem existir
              além da tela.
            </p>

            <Link
              href="/sobre"
              className="mt-9 inline-flex items-center gap-8 border border-[#A875D6] px-7 py-4 text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-[#A875D6]/20"
            >
              Conhecer mais
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
