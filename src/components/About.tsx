import React from "react";
import { motion } from "motion/react";

const aboutSections = [
  {
    title: "Nossa História",
    description:
      "A Rossi Comunicação Visual nasceu da paixão por transformar espaços e marcas. Com anos de experiência no mercado de Palhoça e região, nos tornamos referência em qualidade e inovação técnica.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    color: "bg-black",
    textColor: "text-white"
  },
  {
    title: "Precisão em Letras 3D",
    description:
      "Utilizamos tecnologia de ponta para corte e acabamento de letras em PVC expandido, acrílico e metal. Cada detalhe é pensado para garantir a melhor visibilidade e durabilidade do seu letreiro.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    color: "bg-secondary",
    textColor: "text-black"
  },
  {
    title: "Fachadas que Vendem",
    description:
      "Sua fachada é o primeiro contato do cliente com sua marca. Criamos projetos em ACM e Lona que transmitem profissionalismo e atraem olhares, transformando sua identidade em impacto real.",
    image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=2070&auto=format&fit=crop",
    color: "bg-white",
    textColor: "text-black"
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-b-8 border-black">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-5xl md:text-7xl mb-16 font-black uppercase">Sobre a Rossi</h2>
        
        <div className="space-y-24">
          {aboutSections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 md:grid-cols-2 border-4 border-black shadow-brutal overflow-hidden ${section.color}`}
            >
              <div className={`p-8 md:p-12 flex flex-col justify-center ${idx % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                <h3 className={`text-3xl md:text-4xl font-black uppercase mb-6 ${section.textColor}`}>{section.title}</h3>
                <p className={`text-lg md:text-xl font-bold leading-relaxed ${section.textColor === 'text-white' ? 'text-white/90' : 'text-black/80'}`}>
                  {section.description}
                </p>
              </div>
              <div className={`h-[300px] md:h-auto border-t-4 md:border-t-0 border-black ${idx % 2 === 0 ? "md:order-2 md:border-l-4" : "md:order-1 md:border-r-4"}`}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
