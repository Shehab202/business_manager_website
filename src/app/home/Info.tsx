"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Mail, MapPin, PhoneCall } from "lucide-react";
import React from "react";

const infoData = [
  {
    icon: <MapPin size={55} color="white" />,
    title: "Pay Us a Visit",
    desc: "27 North Sinai Street 2 Zahraa Maadi Cairo",
  },
  {
    icon: <PhoneCall size={55} color="white" />,
    title: "Give Us a Call",
    desc: "+20 10 20005596",
  },
  {
    icon: <Mail size={55} color="white" />,
    title: "Send Us a Message",
    desc: "Info@Businessmanger.com",
  },
];

const InfoSlider = () => {
  return (
    <section className="bg-gradient-to-r from-[#F57C14] via-[#E93F1F] to-[#F57C14] p-8 rounded-full my-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {infoData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex items-center gap-4 bg-[#ffffff15] backdrop-blur-md md:p-6 rounded-xl h-full">
              <div>{item.icon}</div>
              <div>
                <p className="font-bold text-white text-lg mb-1">
                  {item.title}
                </p>
                <p className="text-white text-sm">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InfoSlider;
