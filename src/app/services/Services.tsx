"use client";

import React from "react";
import image6 from "../../../public/image4.jpg";
import image4 from "../../../public/image5 (2).jpg";
import image5 from "../../../public/image6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Cart from "./Cart";

const Services = () => {
  const cards = [
    { image: image6, title: "Website Development" },
    { image: image4, title: "Mobile Application" },
    { image: image5, title: "Management Systems" },
  ];

  return (
    <section className="section-padding w-5/6 mx-auto scroll-mt-26" id="/services">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Cart image={card.image} title={card.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .swiper-pagination {
          margin-top: 15x;
          position: relative;
          
        }
      `}</style>
    </section>
  );
};

export default Services;
