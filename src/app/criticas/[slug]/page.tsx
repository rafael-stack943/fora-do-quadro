
import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarArtigo, artigos } from "@/data/artigos";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const artigo = buscarArtigo(slug);

  if (!artigo) {
    return {
      title: "Crítica não encontrada",
    };
  }

  return {
    title: artigo.titulo,
    description: artigo.subtitulo,
  };
}

export default async function CriticaIndividual({
  params,
}: Props) {
  const { slug } = await params;
  const artigo = buscarArtigo(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Banner cinematográfico */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden px-6 pb-16 pt-40 md:px-16 md:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${artigo.imagem}")`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/75 to-[#0B0B0F]/30" />

        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <Link
            href="/criticas"
            className="mb-12 inline-block text-xs uppercase tracking-[0.25em] text-[#B58ADF] transition-colors hover:text-white"
          >
            ← Voltar às críticas
          </Link>

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
            {artigo.categoria}
          </p>

          <h1 className="font-serif text-6xl tracking-tight md:text-8xl lg:text-9xl">
            {artigo.titulo}
            <span className="text-[#B58ADF]">.</span>
          </h1>

          <p className="mt-6 max-w-2xl font-serif text-2xl italic text-white/80 md:text-3xl">
            {artigo.subtitulo}
          </p>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/20 pt-6 text-xs uppercase tracking-[0.2em] text-gray-300">
            <span>{artigo.ano}</span>
            <span>Direção: {artigo.diretor}</span>
          </div>
        </div>
      </section>

      {/* Conteúdo editorial */}
      <article className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-14 border-l-2 border-[#B58ADF] pl-6 font-serif text-2xl leading-relaxed text-white/90 md:text-3xl">
            {artigo.introducao}
          </p>

          <div className="space-y-8 text-lg leading-[2] text-gray-300">
            {artigo.paragrafos.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>

          {/* Citação em destaque */}
          <blockquote className="my-20 border-y border-white/10 py-14 text-center">
            <span
              aria-hidden="true"
              className="mb-5 block font-serif text-6xl text-[#B58ADF]"
            >
              “
            </span>

            <p className="font-serif text-3xl italic leading-relaxed md:text-4xl">
              {artigo.citacao}
            </p>
          </blockquote>

          {/* Navegação */}
          <div className="border-t border-white/10 pt-10">
            <Link
              href="/criticas"
              className="text-xs uppercase tracking-[0.25em] text-[#B58ADF] transition-colors hover:text-white"
            >
              ← Explorar outras críticas
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
