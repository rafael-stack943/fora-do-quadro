
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { artigos } from "@/data/artigos";
import { reflexoes } from "@/data/reflexoes";

const critica = artigos.find((artigo) => artigo.slug === "hamnet");
const reflexao = reflexoes[0];

const articles = [
  ...(critica
    ? [
        {
          category: "Crítica",
          title: critica.titulo,
          description: critica.subtitulo,
          image: critica.imagem,
          href: `/criticas/${critica.slug}`,
        },
      ]
    : []),
  ...(reflexao
    ? [
        {
          category: "Reflexão",
          title: reflexao.titulo,
          description: reflexao.descricao,
          image:
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=900",
          href: `/reflexoes/${reflexao.slug}`,
        },
      ]
    : []),
  {
    category: "Em Cartaz",
    title: "O cinema além da tela",
    description:
      "Um espaço para acompanhar histórias, estreias e novidades do entretenimento.",
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900",
    href: "/em-cartaz",
  },
];

export default function ArticleGrid() {
  return (
    <section className="bg-[#0B0B0F] px-6 py-24 md:px-16">
      <div className="mx-auto max-w-[1500px]">

        {/* Título da seção */}
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
                02 / Seleção editorial
              </p>

              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Entre cenas
                <br />
                e silêncios
                <span className="text-[#B58ADF]">.</span>
              </h2>
            </div>

            <Link
              href="/criticas"
              className="hidden border-b border-[#A875D6] pb-2 text-xs uppercase tracking-widest text-[#B58ADF] transition-colors hover:text-white md:block"
            >
              Explorar críticas →
            </Link>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal
              key={article.href}
              delay={index * 0.12}
              className="h-full"
            >
              <Link
                href={article.href}
                className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#111016] transition-colors duration-300 hover:border-[#A875D6]/60"
              >
                {/* Imagem */}
                <div className="relative h-64 shrink-0 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url("${article.image}")`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111016]/70 to-transparent" />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-7">
                  <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#B58ADF]">
                    {article.category}
                  </p>

                  <h3 className="mb-4 font-serif text-2xl leading-tight transition-colors group-hover:text-[#B58ADF]">
                    {article.title}
                  </h3>

                  <p className="mb-7 text-sm leading-6 text-gray-400">
                    {article.description}
                  </p>

                  {/* Rodapé do card */}
                  <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      Fora do Quadro
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-[#B58ADF] transition-transform duration-300 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
