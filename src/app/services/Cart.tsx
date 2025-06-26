import Image from "next/image";
import React from "react";

import { ArrowUpRight } from "lucide-react";

type props = {
  image: string;
  title: string;
}
const Cart = ({ image,title }: props) => {
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
