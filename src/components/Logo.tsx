import React from "react";

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-6xl font-black tracking-tighter text-black">R</span>
        <div className="relative flex items-center justify-center">
          <span className="text-4xl md:text-6xl font-black tracking-tighter text-black">O</span>
          <div className="absolute w-3 h-3 md:w-5 md:h-5 bg-primary rounded-full" />
        </div>
        <span className="text-4xl md:text-6xl font-black tracking-tighter text-black">S</span>
        <span className="text-4xl md:text-6xl font-black tracking-tighter text-secondary">S</span>
        <div className="w-2 h-8 md:w-3 md:h-12 bg-primary ml-1" />
      </div>
      <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black mt-[-5px]">
        Comunicação Visual
      </div>
      <div className="text-[8px] md:text-[10px] font-bold uppercase text-black/60">
        Since 2014
      </div>
    </div>
  );
};
