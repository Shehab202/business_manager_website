import React from "react";
import ProgressCart from "./ProgressCart";

const Progress = () => {
  return (
    <section className="w-5/6 mx-auto xl:py-10 scroll-mt-28" id="/progress">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
        <ProgressCart title="Discovery" num="01" />
        <ProgressCart title="Planning" num="02" />
        <ProgressCart title="Design" num="03" />
        <ProgressCart title="Development" num="04" />
        <ProgressCart title="Launch" num="05" />
      </div>
    </section>
  );
};

export default Progress;
