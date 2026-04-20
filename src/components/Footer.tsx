import React from "react";
import { Instagram, Facebook, Linkedin, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6 flex justify-start">
              <Logo className="h-[72px] md:h-24 invert brightness-0" />
            </div>
            <p className="text-neutral-400 font-medium">
              Especialistas em comunicação visual de alto padrão. Transformamos sua identidade em impacto real.
            </p>
            <div className="mt-8 flex gap-4">
              <SocialIcon icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase mb-6 text-white">Serviços</h4>
            <ul className="space-y-4 text-neutral-400 font-medium">
              <li>Fachadas ACM</li>
              <li>Letras 3D</li>
              <li>Impressão Digital</li>
              <li>Projetos de Impacto</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase mb-6 text-white">Localização</h4>
            <p className="text-neutral-400 font-medium">
              R. Tomaz Domingos da Silveira, 2263<br />
              Galpão B - São Sebastião<br />
              Palhoça - SC
            </p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=R.+Tomaz+Domingos+da+Silveira,+2263,+Galpão+B+-+São+Sebastião,+Palhoça+-+SC"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-2 text-primary font-black uppercase text-xs hover:underline"
            >
              Ver no Google Maps <MapPin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs font-bold uppercase">
          <p>© 2024 Rossi Comunicação Visual. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: any) => (
  <a href="#" className="brutal-card p-2 bg-neutral-900 border-neutral-800 hover:bg-primary hover:text-black hover:border-black transition-all">
    {icon}
  </a>
);
