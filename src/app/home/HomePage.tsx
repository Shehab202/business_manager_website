import Image from "next/image";
import React from "react";
import imag1 from "../../../public/image2.png";
import Info from "./Info";
import Heading from "../components/Heading";
import Button from "../components/Button";
const HomePage = () => {
  return (
    <section id="/" className=" md:section-padding pt-24  w-5/6 mx-auto">
      <div className="grid md:grid-cols-2 justify-around items-center grid-cols-1 ">
        <div className=" mx-auto w-full">
          <p className="bg-linear-to-r from-[#F57C14] to-[#E93F1F] bg-clip-text text-transparent font-bold text-2xl lg:text-5xl leading-[1.5] tracking-wide ">
            Transforming ideas <span className=" text-[#231f55]">Into</span>{" "}
            <br />
            Digital Soluation
          </p>
          <p className="text-[#231f55] md:mt-8 mt-3 lg:text-xl text-lg font-medium w-5/6">
            We deliver innovative UI/UX design,
             website and app development, and 
            social media solutions tailored to your business 
            needs. Let’s turn your ideas into impactful 
            digital solutions.
          </p>
          <p className="text-sm font-bold my-4 bg-linear-to-r from-[#F57C14] to-[#E93F1F] bg-clip-text text-transparent">
            BUILD YOUR WORLD
          </p>
          <Button title="Get Started" icon="right" />
        </div>
        <Image
          src={imag1}
          width={600}
          height={550}
          alt="hero"
          className="place-self-end object-contain mt-14 md:p-0 "
        />
      </div>
      <Info />
      <Heading
        title="INTRODUCTION"
        description="was founded
             in 2025 in the heart of Cairo. It works in the fields of digital
             marketing, business management, and software development. It seeks
             to provide integrated solutions that help our clients grow and
             achieve their goals efficiently and professionally."
        title2="Business Manager"
        title3="Business Manager"
        to="To"
      />{" "}
    </section>
  );
};

export default HomePage;
