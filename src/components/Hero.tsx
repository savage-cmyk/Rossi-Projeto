import React from "react";
import { RetroGrid } from "@/components/ui/retro-grid";
import { motion } from "motion/react";
import { Logo } from "@/components/Logo";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden border-b-8 border-white bg-black flex items-center justify-center">
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Logo className="h-48 md:h-72" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl lg:text-7xl mb-8"
        >
          Transformando sua Identidade em Impacto
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mx-auto max-w-3xl text-xl font-black text-white md:text-2xl mb-12"
        >
          Especializados em projetos de comunicação visual que geram credibilidade, atraem olhares e valorizam o seu espaço comercial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a 
            href="https://wa.me/5548996210000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-black uppercase shadow-[0px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-y-1 hover:shadow-none transition-all"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
      <RetroGrid className="opacity-20" />
    </section>
  );
};
