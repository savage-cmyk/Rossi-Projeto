import React, { useState, useEffect } from "react";
import { Lens } from "@/components/ui/lens";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Fachada ACM - Loja Premium",
    category: "ACM / Fachadas",
    image: "https://picsum.photos/seed/p1/800/600",
  },
  {
    id: 2,
    title: "Letreiro 3D Retroiluminado",
    category: "Letras 3D",
    image: "https://picsum.photos/seed/p2/800/600",
  },
  {
    id: 3,
    title: "Envelopamento de Frota",
    category: "Impressão Digital",
    image: "https://picsum.photos/seed/p3/800/600",
  },
  {
    id: 4,
    title: "Totem de Sinalização",
    category: "ACM / Estruturas",
    image: "https://picsum.photos/seed/p4/800/600",
  },
  {
    id: 5,
    title: "Painel Decorativo Interno",
    category: "Design Gráfico",
    image: "https://picsum.photos/seed/p5/800/600",
  },
  {
    id: 6,
    title: "Placas Indicativas",
    category: "Sinalização",
    image: "https://picsum.photos/seed/p6/800/600",
  },
];

export const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-white border-b-8 border-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-5xl md:text-7xl">Portfólio</h2>
            <p className="mt-4 text-xl font-medium text-neutral-600">
              Explore nossos projetos recentes e sinta a qualidade do acabamento.
            </p>
          </div>
          <div className="flex gap-2">
            {["Todos", "ACM", "Letras 3D", "Digital"].map((cat) => (
              <button key={cat} className="border-2 border-black px-4 py-1 font-black uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="brutal-card p-4">
                  <Skeleton className="h-64 w-full border-2 border-black" />
                  <Skeleton className="mt-4 h-6 w-3/4 border-2 border-black" />
                  <Skeleton className="mt-2 h-4 w-1/2 border-2 border-black" />
                </div>
              ))
            : projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="brutal-card group overflow-hidden p-4"
                >
                  <Lens zoomFactor={2} lensSize={150}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-64 w-full object-cover border-4 border-black shadow-brutal"
                      referrerPolicy="no-referrer"
                    />
                  </Lens>
                  <div className="mt-4">
                    <span className="text-xs font-black uppercase text-white bg-black px-2 py-0.5">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-xl font-black uppercase">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};
