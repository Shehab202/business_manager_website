import React from "react";
import { links } from "../components/Links";

const Section_two = () => {
  return (
    <div className="xl:border-l-1 border-b-1 xl:border-r-1 border-amber-50/70">
      <div
        className=" flex flex-col justify-center xl:px-8
           border-b-1 border-amber-50/70
          "
      >
        {links.map((link) => (
          <div className="flex items-center gap-1 py-3 " key={link.name}>
            <p className="cursor-pointer text-white hover:scale-110 transition-all">{link.name}</p>
          </div>
        ))}
      </div>
      <div
        className="my-5 flex justify-start gap-3 xl:px-8 text-white
           
            "
      >
        <p>© 2025 Brand, Inc.</p>
        <p>Privacy · </p>
        <p>Terms</p>
      </div>
    </div>
  );
};

export default Section_two;
