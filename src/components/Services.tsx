import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Layers, Type, Printer, Palette } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="bg-white py-32 px-4 border-b-8 border-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-6">Nossos Serviços</h2>
          <p className="mt-4 text-xl md:text-2xl font-black text-black max-w-3xl mx-auto">
            Soluções completas em comunicação visual com precisão técnica e design premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, image }: any) => {
  return (
    <CardContainer className="inter-var w-full py-0">
      <CardBody className="brutal-card relative group/card bg-white border-4 border-black w-full min-h-[500px] p-8 flex flex-col shadow-brutal hover:shadow-brutal-lg transition-all">
        <CardItem
          translateZ="50"
          className="text-2xl font-black text-black flex items-center gap-4 mb-6"
        >
          <div className="p-3 bg-black text-white border-2 border-white">
            {icon}
          </div>
          <span className="font-display uppercase tracking-tighter">{title}</span>
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className="text-black text-lg font-bold leading-tight mb-8"
        >
          {description}
        </CardItem>

        <CardItem translateZ="100" className="w-full flex-grow mb-8">
          <img
            src={image}
            className="h-64 w-full object-cover border-4 border-black shadow-brutal"
            alt={title}
            referrerPolicy="no-referrer"
          />
        </CardItem>

        <div className="mt-auto">
          <CardItem
            translateZ={20}
            as="button"
            className="w-full py-4 text-lg font-black uppercase border-4 border-black bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black transition-all"
          >
            Saiba Mais
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

const services = [
  {
    title: "Fachadas ACM/Lona",
    description: "Estruturas robustas e acabamento impecável para destacar sua empresa.",
    icon: <Layers className="h-8 w-8" />,
    image: "/acm.png",
  },
  {
    title: "Letras 3D PVC",
    description: "Letreiros com profundidade e iluminação que valorizam sua marca.",
    icon: <Type className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Impressão Digital",
    description: "Alta resolução em diversos materiais: adesivos, banners e placas.",
    icon: <Printer className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Design Gráfico",
    description: "Criação de identidades visuais e artes para todos os fins.",
    icon: <Palette className="h-8 w-8" />,
    image: "/design.jpg",
  },
];
