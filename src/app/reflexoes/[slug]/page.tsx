
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  buscarReflexao,
  reflexoes,
} from "@/data/reflexoes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return reflexoes.map((reflexao) => ({
    slug: reflexao.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const reflexao = buscarReflexao(slug);

  if (!reflexao) {
    return { title: "Reflexão não encontrada" };
  }

  return {
    title: reflexao.titulo,
    description: reflexao.descricao,
  };
}

export default async function ReflexaoIndividual({
  params,
}: Props) {
  const { slug } = await params;
  const reflexao = buscarReflexao(slug);

  if (!reflexao) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0F] text-white">
      {/* Abertura literária */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-32 md:px-16 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#7945B5]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1000px]">
          <Link
            href="/reflexoes"
            className="mb-16 inline-block text-xs uppercase tracking-[0.25em] text-[#B58ADF] transition-colors hover:text-white"
          >
            ← Voltar às reflexões
          </Link>

          <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
            {reflexao.categoria} / {reflexao.numero}
          </p>

          <h1 className="max-w-[950px] font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl">
            {reflexao.titulo}
            <span className="text-[#B58ADF]">.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            {reflexao.descricao}
          </p>

          <div className="mt-12 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.25em] text-gray-500">
            {reflexao.leitura} de leitura
          </div>
        </div>
      </section>

      {/* Texto */}
      <article className="px-6 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-[760px]">
          <p className="mb-14 border-l-2 border-[#B58ADF] pl-6 font-serif text-2xl leading-relaxed md:text-3xl">
            {reflexao.introducao}
          </p>

          <div className="space-y-9 text-lg leading-[2] text-gray-300">
            {reflexao.paragrafos.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>

          <blockquote className="my-20 border-y border-white/10 py-16 text-center">
            <span
              aria-hidden="true"
              className="mb-5 block font-serif text-6xl text-[#B58ADF]"
            >
              “
            </span>

            <p className="font-serif text-3xl italic leading-relaxed md:text-4xl">
              {reflexao.citacao}
            </p>
          </blockquote>

          <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10">
            <Link
              href="/reflexoes"
              className="text-xs uppercase tracking-[0.2em] text-[#B58ADF] transition-colors hover:text-white"
            >
              ← Todas as reflexões
            </Link>

            <Link
              href="/"
              className="text-xs uppercase tracking-[0.2em] text-gray-400 transition-colors hover:text-white"
            >
              Página inicial →
            </Link>
          </div>
        </div>
      </article>

      {/* Encerramento */}
      <section className="border-t border-white/10 bg-[#100C16] px-6 py-20 text-center">
        <p className="font-serif text-2xl italic md:text-3xl">
          O cinema termina.
          <br />
          <span className="text-[#B58ADF]">
            O sentimento, não.
          </span>
        </p>
      </section>
    </main>
  );
}
