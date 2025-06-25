import { Facebook, Instagram, Linkedin, Phone } from "lucide-react";
import React from "react";

const Section_three = () => {
  return (
    <div className="grid  place-content-center xl:px-8 gap-5 ">
      <p className="text-white font-normal md:text-3xl text-xl">
        Would like to talk about your future project?
      </p>
      <div className="flex  w-40 px-3 rounded-full py-2 cursor-pointer items-center justify-between bg-white">
        <p className="text-[#E93F1F]">Contact Us </p>
        <div className="bg-[#E93F1F] flex justify-center items-center  rounded-full w-10 h-10">
          <Phone className=" " color="white" size={22} />
        </div>
      </div>
      

      <div className="xl:hidden">
        <hr className="bg-white text-amber-100" />
      </div>
      <div className="flex gap-4 my-4 md:mt-2 ">
        <Linkedin className="text-white cursor-pointer  hover:scale-110 transition-all" />
        <Facebook className="text-white cursor-pointer hover:scale-110 transition-all" />
        <Instagram className="text-white cursor-pointer hover:scale-110 transition-all" />
      </div>
    </div>
  );
};

export default Section_three;
