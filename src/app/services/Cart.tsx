import Image from "next/image";
import React from "react";
import image6 from "../../../public/image4.jpg";
import image4 from "../../../public/image5 (2).jpg";
import image5 from "../../../public/image6.jpg";
import { ArrowUpRight } from "lucide-react";
const Cart = ({ image,title }: any) => {
  return (
    <div >
      <div className="relative">
        <Image
          src={image}
          alt="image3"
          className="object-contain rounded-2xl "
          height={400}
          width={500}
        />
        <div className="absolute bottom-0 right-0 w-20 h-20 rounded-lg bg-white flex justify-center items-center cursor-pointer">
          <span
            className=" border-tl-full rounded-lg
            bg-linear-to-r from-[#F57C14] w-16 h-16 to-[#E93F1F] font-bold text-3xl flex 
            justify-center items-center text-white "
          >
            <ArrowUpRight />
          </span>
        </div>
      </div>
      <p className="my-2 font-bold text-xl text-[#231F55]">{title}</p>
    </div>
  );
};

export default Cart;
