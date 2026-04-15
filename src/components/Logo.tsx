import React from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/rossidefinitiva.png" 
        alt="Rossi Comunicação Visual" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
