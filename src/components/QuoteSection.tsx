
export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#100C16] px-6 py-20 md:px-16">
      {/* Iluminação atmosférica */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-96 -translate-y-1/2 rounded-full bg-[#7945B5]/15 blur-[100px]" />

      <div className="relative mx-auto max-w-[1500px]">
        <span
          aria-hidden="true"
          className="font-serif text-8xl leading-none text-[#7945B5]/40"
        >
          “
        </span>

        <blockquote className="-mt-8 max-w-4xl font-serif text-3xl italic leading-snug text-[#F0EDF3] md:text-5xl">
          Nem tudo que sentimos cabe em uma tela.
        </blockquote>

        <div className="mt-8 flex items-center gap-4">
          <span className="h-px w-12 bg-[#A875D6]" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400">
            Fora do Quadro
          </p>
        </div>
      </div>
    </section>
  );
}
