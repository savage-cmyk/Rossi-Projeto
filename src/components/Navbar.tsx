import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Briefcase, User, Image, MessageSquare } from "lucide-react";

export const Navbar = () => {
  const navItems = [
    {
      name: "Início",
      link: "#home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Serviços",
      link: "#services",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "Sobre",
      link: "#about",
      icon: <User className="h-4 w-4" />,
    },
    {
      name: "Portfólio",
      link: "#portfolio",
      icon: <Image className="h-4 w-4" />,
    },
    {
      name: "Contato",
      link: "#contact",
      icon: <MessageSquare className="h-4 w-4" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};
