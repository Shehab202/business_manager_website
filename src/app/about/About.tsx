import Image from "next/image";
import React from "react";
import image2 from "../../../public/image1.png";
import Heading from "../components/Heading";
const About = () => {
  return (
    <>
      <section className="w-5/6 mx-auto scroll-mt-26" id="/about">
        <div className=" text-[#E93F1F] ">
          <h2 className="text-3xl font-bold md:text-center">About</h2>
          <p className="text-gray-600/60 ">Business Manager</p>
        </div>
        <div className="grid md:grid-cols-2 py-5 grid-cols-1items-center ">
          <div>
            <Image src={image2} alt="image2" className="object-contain" />
          </div>
          <div>
            <p className="font-xl text-xl mb-5 mt-8 md:mb-10 md:leading-8">
              We offer innovative solutions in digital marketing, business
              management, and software development aimed at facilitating
              business operations and fostering growth.
            </p>
            <p className="font-xl text-xl mb-5 md:mb-10 md:leading-8">
              In digital marketing, we design data-driven strategies to enhance
              online presence and increase conversion rates through search
              engine optimization and social media management.
            </p>
            <p className="font-xl text-xl mb-5 md:mb-10 md:leading-8">
              In business management, we provide specialized consulting to help
              improve performance and develop integrated strategies that ensure
              continued success.
            </p>
            <p className="font-xl text-xl md:leading-8">
              Software development services include the design and development
              of web and mobile applications tailored to your business needs,
              using the latest technologies and best practices to ensure a
              seamless digital experience and a superior user interface.
            </p>
          </div>
        </div>
        <Heading
          title="Our Services"
          description="We offer innovative solutions in digital marketing, business management, and software development aimed at facilitating business operations and fostering growth."
          title2="Business Manager"
          to="To"
        />
      </section>
    </>
  );
};

export default About;
