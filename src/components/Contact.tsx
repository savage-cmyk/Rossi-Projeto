import React from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { MessageSquare, Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white border-b-8 border-black">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black uppercase mb-8">Vamos Conversar?</h2>
          <p className="text-xl md:text-2xl font-black text-black mb-12 leading-relaxed">
            Transforme a fachada da sua empresa hoje mesmo. Nossa equipe está pronta para criar o projeto ideal para você.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
            <ContactItem 
              icon={<Phone className="h-8 w-8" />} 
              label="WhatsApp" 
              value="(48) 99621-0000" 
              link="https://wa.me/5548996210000"
              color="bg-secondary"
            />
            <ContactItem 
              icon={<Mail className="h-8 w-8" />} 
              label="E-mail" 
              value="contato@rossicv.com.br" 
              link="mailto:contato@rossicv.com.br"
              color="bg-primary"
            />
          </div>

          <div className="space-y-6 w-full max-w-2xl">
            <ContactItem 
              icon={<MapPin className="h-6 w-6" />} 
              label="Endereço" 
              value="R. Tomaz Domingos da Silveira, 2263 - Palhoça - SC" 
              link="https://maps.google.com/?q=R.+Tomaz+Domingos+da+Silveira,+2263+-+Palhoça+-+SC"
            />
            <ContactItem 
              icon={<Clock className="h-6 w-6" />} 
              label="Horário" 
              value="Seg-Sex: 08:00–12:00, 13:30–18:00" 
            />
          </div>

          <div className="mt-16">
            <a href="https://wa.me/5548996210000" target="_blank" rel="noopener noreferrer">
              <ShimmerButton className="shadow-brutal-lg border-4 border-black bg-secondary h-20 px-12">
                <span className="whitespace-pre-wrap text-center text-xl font-black uppercase leading-none tracking-tighter text-white">
                  Chamar no WhatsApp
                </span>
              </ShimmerButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value, link, color = "bg-white" }: any) => {
  const Content = (
    <div className={`flex items-center gap-6 p-6 border-4 border-black shadow-brutal transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg ${color}`}>
      <div className="p-3 bg-black text-white border-2 border-white">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-xs font-black uppercase opacity-80">{label}</p>
        <p className="text-lg md:text-xl font-black uppercase">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
        {Content}
      </a>
    );
  }

  return <div className="w-full">{Content}</div>;
};
