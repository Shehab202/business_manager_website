import { ArrowRight, Phone } from "lucide-react";
import React from "react";
 interface propsType {
   title: string;
   icon: string;
 }
const Button = ({ title, icon }: propsType) => {
  return (
    <div className="flex  w-40  rounded-full py-1 cursor-pointer items-center justify-around bg-linear-to-r/hsl from-[#F57C14] to-[#E93F1F]">
      <p className="text-white">{title}</p>
      <div className="flex justify-center items-center bg-white rounded-full w-10 h-10">
        {icon === "right" ? (
          <ArrowRight
            className="mr-2  rounded-full flex justify-center items-center "
            color="#F57C14"
            size={30}
          />
        ) : (
          <Phone
            className="mr-2  flex justify-center items-center "
            color="#F57C14"
            size={25}
          />
        )}
      </div>
    </div>
  );
};

export default Button;
