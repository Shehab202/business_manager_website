import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {
  title: string;
  description: string;
  title2?: string;
  title3?: string;
  to?: string;
};
const Heading = ({ title, description, title2, title3, to }: Props) => {
  return (
    <section className="md:mt-15 my-10 ">
      <div className="grid gap-3 md:gap-0 lg:grid-cols-3 ">
        <div>
          <p className="text-[#E93F1F] font-bold text-xl ">{title}</p>
          <div className="text-[#E93F1F] flex my-2">
            <span className="text-black font-md mr-1">{to}</span> {title2}
            <ArrowRight className="text-black mx-3" />
          </div>
        </div>
        <div className="col-span-2">
          <p className="font-md text-lg">
            <span className="text-[#E93F1F]">{title3}</span> {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;
