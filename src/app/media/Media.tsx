import { ArrowDown, ArrowUpRight } from "lucide-react";
import React from "react";
import Video from "./Video";

const Media = () => {
  return (
    <>
      <section className="mb-15 w-5/6 h-80 mx-auto scroll-mt-26" id="/about">
        <div>
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-40 -translate-y-1/2 w-20 h-20 rounded-full bg-[#302C42C9] flex justify-center items-center cursor-pointer">
              <span className="rounded-full  bg-gradient-to-r from-[#F57C14] to-[#E93F1F] w-16 h-16 font-bold text-3xl flex justify-center items-center text-white">
                <ArrowDown />
              </span>
            </div>

            <div className="absolute top-0 left-0 h-80 w-full object-cover  rounded-full bg-[#302C42C9]"></div>
            <div className="absolute top-0 left-0 h-80 w-full object-cover  rounded-full">
              <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-3xl text-center font-bold">TECHNOLOGIES WE USE</p>
                <p className="text-xl font-medium text-center my-1 whitespace-pre-line tracking-tight">
                  USED BY BUSINESS MANAGER
                </p>
              </div>
            </div>
            <Video />
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
