import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import logo from "../../../public/logo2.png";
import Image from "next/image";

const Section_one = () => {
  return (
    <div className="">
      <Image
        alt="logo"
        src={logo}
        height={140}
        width={140}
        className="object-contain cursor-pointer  "
      />
      <div className="my-2">
        <hr className="bg-white text-amber-100" />
      </div>
      <div className="mt-5 text-white ">
        <div className="flex items-center gap-2 py-3 ">
          <MapPin />
          <p>27 North Sinai Street 2 Zahraa Maadi Cairo</p>
        </div>
        <div className="flex items-center gap-2 py-3">
          <Phone />
          <p>+20 10 20005596</p>
        </div>
        <div className="flex items-center gap-2 py-3">
          <Mail />
          <p>Info@Businessmanger.com</p>
        </div>
      </div>
    </div>
  );
};

export default Section_one;
