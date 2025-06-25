import Image from "next/image";
import React from "react";
import image1 from "../../../public/tec1.png";
import image2 from "../../../public/tec2.png";
import image3 from "../../../public/tec3.png";
import image4 from "../../../public/tec4.png";
import Heading from "../components/Heading";

const Technology = () => {
  return (
    <section className="w-5/6 mx-auto section-padding scroll-mt-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <Image src={image2} alt="React" height={90} width={90} />
          <p className="text-xl md:text-3xl font-bold text-[#757575]">React</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <Image src={image4} alt="Node.js" height={90} width={90} />
          <p className="text-lg md:text-3xl font-bold text-[#757575]">
            Node.js
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <Image src={image1} alt="AWS" height={90} width={90} />
          <p className="text-lg md:text-3xl font-bold text-[#757575]">AWS</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left">
          <Image src={image3} alt="GitHub" height={90} width={90} />
          <p className="text-lg md:text-3xl font-bold text-[#757575]">GitHub</p>
        </div>
      </div>

      <Heading
        title="How We Build"
        description="we follow an Agile-driven process that ensures flexibility, collaboration, and continuous improvement. Our workflow is designed to deliver high-quality results faster and more efficiently — all while keeping the client in the loop every step of the way.

From ideation to launch, we break down projects into manageable sprints, allowing us to adapt quickly, respond to feedback, and deliver scalable digital solutions that align with your goals."
        title2="See The Process We Use"
        title3="At Business Manager"
      />
    </section>
  );
};

export default Technology;
