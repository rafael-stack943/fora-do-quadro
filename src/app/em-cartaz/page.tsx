
import Link from "next/link";
import Reveal from "@/components/Reveal";

const noticias = [
  {
    id: 1,
    categoria: "Cinema",
    titulo: "As histórias que ainda estão por vir",
    descricao:
      "Um olhar sobre as narrativas que continuam transformando a experiência cinematográfica.",
    imagem:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1400",
    destaque: true,
  },
  {
    id: 2,
    categoria: "Séries",
    titulo: "A nova era das narrativas televisivas",
    descricao:
      "Como as séries conquistaram seu próprio espaço na cultura contemporânea.",
    imagem:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1000",
    destaque: false,
  },
  {
    id: 3,
    categoria: "Streaming",
    titulo: "Entre plataformas e novas experiências",
    descricao:
      "As transformações na maneira como consumimos entretenimento.",
    imagem:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1000",
    destaque: false,
  },
];

export const metadata = {
  title: "Em Cartaz",
  description:
    "Cinema, séries, streaming e novidades do entretenimento.",
};

export default function EmCartazPage() {
  const destaque = noticias[0];
  const secundarias = noticias.slice(1);

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      <section className="border-b border-white/10 px-6 pb-16 pt-32 md:px-16 md:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
              Fora do Quadro / 03
            </p>

            <h1 className="font-serif text-6xl tracking-tight md:text-8xl">
              Em Cartaz<span className="text-[#B58ADF]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              O cinema está sempre em movimento. Aqui,
              acompanhamos histórias, novidades e transformações
              que acontecem dentro e fora das telas.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-10 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-[#B58ADF]" />
              <p className="text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
                Em destaque
              </p>
            </div>
          </Reveal>

          <Reveal>
            <article className="group grid overflow-hidden border border-white/10 lg:grid-cols-2">
              <div className="relative min-h-[320px] overflow-hidden bg-[#17131D] md:min-h-[450px]">
                <div
                  role="img"
                  aria-label={destaque.titulo}
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${destaque.imagem}")`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-14">
                <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
                  {destaque.categoria} / Especial
                </p>

                <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                  {destaque.titulo}
                </h2>

                <p className="mt-7 max-w-lg leading-8 text-gray-400">
                  {destaque.descricao}
                </p>

                <span className="mt-10 inline-flex items-center gap-5 text-xs uppercase tracking-[0.2em] text-[#B58ADF]">
                  Em preparação <span aria-hidden="true">→</span>
                </span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-28 pt-8 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="font-serif text-3xl md:text-4xl">
                Outras histórias
              </h2>

              <span className="text-xs uppercase tracking-widest text-gray-500">
                {secundarias.length} matérias
              </span>
            </div>
          </Reveal>

          <div className="grid gap-12 md:grid-cols-2">
            {secundarias.map((noticia, index) => (
              <Reveal key={noticia.id} delay={index * 0.15}>
                <article className="group">
                  <div className="relative mb-7 h-[300px] overflow-hidden bg-[#17131D] md:h-[380px]">
                    <div
                      role="img"
                      aria-label={noticia.titulo}
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url("${noticia.imagem}")`,
                      }}
                    />
                  </div>

                  <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#B58ADF]">
                    {noticia.categoria}
                  </p>

                  <h3 className="font-serif text-3xl leading-tight md:text-4xl">
                    {noticia.titulo}
                  </h3>

                  <p className="mt-5 max-w-xl leading-8 text-gray-400">
                    {noticia.descricao}
                  </p>

                  <p className="mt-7 text-xs uppercase tracking-[0.2em] text-[#B58ADF]">
                    Em preparação →
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#100C16] px-6 py-20 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl italic md:text-4xl">
            Toda história começa em algum lugar.
          </h2>

          <Link
            href="/"
            className="mt-9 inline-block text-xs uppercase tracking-[0.25em] text-[#B58ADF] transition-colors hover:text-white"
          >
            ← Voltar ao início
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
