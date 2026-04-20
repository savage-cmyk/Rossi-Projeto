import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Layers, Type, Printer, Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="bg-white py-32 px-4 border-b-8 border-black">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 text-center">
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-6">Nossos Serviços</h2>
          <p className="mt-4 text-xl md:text-2xl font-black text-black max-w-3xl mx-auto">
            Soluções completas em comunicação visual com precisão técnica e projetos de impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <ServiceCard 
              key={i} 
              {...service} 
              onOpen={() => setSelectedService(service)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white border-8 border-black p-8 md:p-12 shadow-brutal-lg"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 hover:bg-black hover:text-white transition-colors border-2 border-black"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-black text-white border-4 border-black">
                  {selectedService.icon}
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-tight">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-xl md:text-2xl font-black text-black mb-10 leading-relaxed italic">
                "{selectedService.longDescription}"
              </p>

              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/5548996210000?text=Olá! Gostaria de saber mais sobre ${selectedService.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-6 bg-secondary text-white text-2xl font-black uppercase text-center border-4 border-black shadow-brutal hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all"
                >
                  Falar com Especialista
                </a>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="w-full py-4 text-sm font-black uppercase text-black hover:underline"
                >
                  Voltar aos serviços
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, image, onOpen }: any) => {
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
            onClick={onOpen}
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
    title: "Fachadas que Vendem",
    description: "Estruturas robustas e acabamento impecável para destacar sua empresa.",
    longDescription: "A fachada é o cartão de visitas da sua empresa. Utilizamos materiais de alta qualidade como ACM e Lona para garantir durabilidade e um visual moderno que atrai clientes.",
    icon: <Layers className="h-8 w-8" />,
    image: "/fachada.png",
  },
  {
    title: "Letras 3D PVC",
    description: "Letreiros com profundidade e iluminação que valorizam sua marca.",
    longDescription: "Letreiros que saltam aos olhos. Ideais para recepções e fachadas, as letras 3D em PVC oferecem um acabamento premium e podem ser combinadas com iluminação LED.",
    icon: <Type className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Impressão Digital",
    description: "Alta resolução em diversos materiais: adesivos, banners e placas.",
    longDescription: "Alta definição para sua comunicação. Produzimos adesivos, banners, lonas e placas com as melhores tintas e materiais do mercado, garantindo cores vibrantes por mais tempo.",
    icon: <Printer className="h-8 w-8" />,
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Projetos de Impacto",
    description: "Criação de identidades visuais e artes para todos os fins.",
    longDescription: "Desenvolvemos sua identidade visual do zero ou revitalizamos sua marca. Criamos artes e projetos personalizados que conectam sua empresa com o público-alvo.",
    icon: <Palette className="h-8 w-8" />,
    image: "/design.jpg",
  },
];
