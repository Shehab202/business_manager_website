import Image, { StaticImageData } from "next/image";
import React from "react";

type props = {
  title: string;
  icon: StaticImageData;
}
const Choose_card = ({ title, icon }: props) => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-2xl shadow-md gap-5 h-56 w-56 flex flex-col justify-center items-center p-4 text-center">
        <div className="bg-[#FCEEE9] rounded-2xl w-20 h-20 flex justify-center items-center">
          <Image src={icon} alt="icon" height={40} width={40} />
        </div>
        <p className="bg-gradient-to-r from-[#F57C14] to-[#E93F1F] bg-clip-text text-transparent font-bold text-xl">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Choose_card;
