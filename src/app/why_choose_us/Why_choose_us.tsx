import { Phone } from "lucide-react";
import React from "react";
import Choose_card from "./Choose_card";
import image3 from "../../../public/icon3.png";
import image1 from "../../../public/icon1.png";
import image2 from "../../../public/icon2.png";
import image4 from "../../../public/icon4.png";
import Button from "../components/Button";

const Why_choose_us = () => {
  return (
    <section className="section-padding w-5/6 mx-auto scroll-mt-24" id="/why_Choose_US">
      <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-20 gap-8 items-center justify-between">
        <div className="lg:col-span-3 bg-[#FCEEE9] rounded-xl xl:rounded-tr-[20%] py-12 px-6 flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-6 flex-1">
            <Choose_card title="User-Friendly Interface" icon={image3} />
            <Choose_card title="Clear Vision" icon={image1} />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <Choose_card title="A True Partnership" icon={image2} />
            <Choose_card title="Specialized Expertise" icon={image4} />
          </div>
        </div>

        <div className="lg:col-span-2 relative h-auto flex flex-col gap-6">
          <div className="absolute text-center -z-30 top-0 left-0 w-20 h-20 rounded-br-4xl bg-[#FCEEE9]" />
          <p className="text-[#E93F1F] font-bold text-3xl md:text-4xl tracking-wide">
            Why choose us?
          </p>
          <p className="text-[#231f55] text-md leading-relaxed">
            We are your ideal partner in your digital success journey.
          </p>
          <Button title="Contact Us" icon="phone" />
        </div>
      </div>
    </section>
  );
};

export default Why_choose_us;
