
"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85svh] items-center overflow-hidden bg-[#0B0B0F]">
      {/* Imagem cinematográfica */}
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-[position:65%_center] bg-no-repeat md:bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1600')",
        }}
      />

      {/* Sobreposição escura */}
      <div className="absolute inset-0 bg-[#0B0B0F]/75 md:bg-transparent md:bg-gradient-to-r md:from-[#0B0B0F] md:via-[#0B0B0F]/90 md:to-[#0B0B0F]/30" />

      {/* Atmosfera roxa */}
      <div className="pointer-events-none absolute inset-0 bg-[#21152F]/15" />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-20 md:px-20 md:py-24">
        {/* Categoria */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#B58ADF] sm:text-xs md:mb-8 md:tracking-[0.4em]"
        >
          Cinema · Cultura · Existência
        </motion.p>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="max-w-4xl font-serif text-[clamp(2.25rem,9vw,4rem)] leading-[1.08] tracking-tight md:text-7xl lg:text-8xl"
        >
          O cinema
          <br />
          termina.
          <br />
          <span className="italic text-[#B58ADF]">
            O sentimento,
            <br />
            não.
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-7 max-w-md text-sm leading-6 text-gray-300 md:mt-8 md:text-base md:leading-7"
        >
          Um espaço para histórias que continuam mesmo depois
          que a tela escurece.
        </motion.p>

        {/* Botão */}
        <motion.a
          href="#conteudo"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-9 inline-flex items-center gap-5 border border-[#A875D6] px-5 py-4 text-[11px] uppercase tracking-[0.12em] hover:bg-[#A875D6]/20 md:mt-10 md:gap-8 md:px-7 md:text-xs"
        >
          Explorar conteúdo
          <span aria-hidden="true">→</span>
        </motion.a>
      </div>
    </section>
  );
}
