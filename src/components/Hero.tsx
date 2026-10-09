
export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#0B0B0F]">

      {/* Imagem cinematográfica */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600')",
        }}
      />

      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/90 to-[#0B0B0F]/30" />

      {/* Atmosfera roxa */}
      <div className="absolute inset-0 bg-[#21152F]/20" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-8 py-24 md:px-20">

        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#B58ADF]">
          Cinema · Cultura · Existência
        </p>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          O cinema
          <br />
          termina.
          <br />
          <span className="italic text-[#B58ADF]">
            O sentimento,
            <br />
            não.
          </span>
        </h1>

        <p className="mt-8 max-w-md text-base leading-7 text-gray-300">
          Um espaço para histórias que continuam
          mesmo depois que a tela escurece.
        </p>

        <a
          href="#conteudo"
          className="mt-10 inline-flex items-center gap-8 border border-[#A875D6] px-7 py-4 text-xs uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#A875D6]/20"
        >
          Explorar conteúdo
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
