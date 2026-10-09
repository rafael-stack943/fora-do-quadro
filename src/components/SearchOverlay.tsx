
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { artigos } from "@/data/artigos";
import { reflexoes } from "@/data/reflexoes";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const conteudos = [
  ...artigos.map((artigo) => ({
    titulo: artigo.titulo,
    descricao: artigo.subtitulo,
    categoria: "Crítica",
    href: `/criticas/${artigo.slug}`,
  })),
  ...reflexoes.map((reflexao) => ({
    titulo: reflexao.titulo,
    descricao: reflexao.descricao,
    categoria: "Reflexão",
    href: `/reflexoes/${reflexao.slug}`,
  })),
];

function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export default function SearchOverlay({
  open,
  onClose,
}: SearchOverlayProps) {
  const [busca, setBusca] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleEscape);
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  const termo = normalizar(busca.trim());

  const resultados = termo
    ? conteudos.filter((conteudo) =>
        normalizar(
          `${conteudo.titulo} ${conteudo.descricao} ${conteudo.categoria}`
        ).includes(termo)
      )
    : [];

  function navegar(href: string) {
    onClose();
    setBusca("");
    router.push(href);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Pesquisar conteúdos"
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#0B0B0F]/98 px-6 py-10 backdrop-blur-xl md:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.3em] text-[#B58ADF]">
            Fora do Quadro / Busca
          </span>

          <button
            type="button"
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-gray-400 transition-colors hover:text-white"
          >
            Fechar ✕
          </button>
        </div>

        <label
          htmlFor="busca-global"
          className="mb-6 block font-serif text-3xl md:text-5xl"
        >
          O que você procura?
        </label>

        <input
          ref={inputRef}
          id="busca-global"
          type="search"
          value={busca}
          onChange={(event) => setBusca(event.target.value)}
          placeholder="Filmes, sentimentos, histórias..."
          className="w-full border-b border-white/20 bg-transparent py-5 text-lg text-white outline-none transition-colors placeholder:text-gray-600 focus:border-[#B58ADF] md:text-2xl"
        />

        <div aria-live="polite" className="mt-12">
          {!termo ? (
            <p className="text-sm text-gray-500">
              Comece a digitar para explorar nossas histórias.
            </p>
          ) : resultados.length === 0 ? (
            <p className="font-serif text-2xl italic text-gray-400">
              Nenhuma história encontrada.
            </p>
          ) : (
            <>
              <p className="mb-6 text-xs uppercase tracking-[0.2em] text-gray-500">
                {resultados.length}{" "}
                {resultados.length === 1
                  ? "resultado encontrado"
                  : "resultados encontrados"}
              </p>

              <div className="border-t border-white/10">
                {resultados.map((resultado) => (
                  <Link
                    key={resultado.href}
                    href={resultado.href}
                    onClick={(event) => {
                      event.preventDefault();
                      navegar(resultado.href);
                    }}
                    className="group block border-b border-white/10 py-7"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-[#B58ADF]">
                      {resultado.categoria}
                    </span>

                    <h3 className="mt-3 font-serif text-2xl transition-colors group-hover:text-[#B58ADF] md:text-3xl">
                      {resultado.titulo}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {resultado.descricao}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
