import { ArrowRight } from "lucide-react";
import React from "react";
 interface propsType {
   title: string;
   num: number
 }
const ProgressCart = ({ title, num }: propsType) => {
  return (
    <div className="flex flex-col items-center gap-4" >
      <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#FBE5DE] flex items-center justify-center">
        <div className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-[#F57C14] to-[#E93F1F] flex items-center justify-center">
          <p className="text-white text-xl md:text-3xl font-bold">{num}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-center">
        <ArrowRight color="#C0B7E8" size={24} />
        <p className="text-base md:text-lg font-bold text-[#231f55]">{title}</p>
      </div>
    </div>
  );
};

export default ProgressCart;
