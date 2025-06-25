import React from "react";
import LocationMap from "./LocationMap";
import Button from "../components/Button";

const Contact = () => {
  return (
    <section className="section-padding w-5/6 mx-auto scroll-mt-26" id="/contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-3xl font-bold text-[#E93F1F]">Get in touch</p>
          <p className="text-[#231f55] text-base max-w-md">
            We're here to help! Contact us for any inquiries about our digital
            solutions, or to start building your next great software product.
          </p>

          <div className="flex flex-col gap-4 mt-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-3 text-sm w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-3 text-sm w-full"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-md p-3 text-sm w-full resize-none"
              rows={6}
            />
            <Button title="Submit" icon="right" />
          </div>
        </div>

        <LocationMap />
      </div>
    </section>
  );
};

export default Contact;
