import Image from "next/image";
import React from "react";
import { links } from "../components/Links";
import { Phone } from "lucide-react";
import MobileNav from "./mobailNav";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
        <div className="w-5/6 mx-auto py-5 flex justify-between items-center">
          <Link href="/">
            <Image
              alt="logo"
              src="/logo.png"
              width={75.23}
              height={70.36}
              className="object-contain cursor-pointer"
            />
          </Link>
          <div className="gap-4 hidden xl:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="lg:text-md lg:px-4 text-base font-bold text-[#231F55] transition-all hover:text-[#E93F1F] cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex w-40 rounded-full py-1 cursor-pointer items-center justify-between bg-gradient-to-r from-[#F57C14] to-[#E93F1F] px-3">
            <p className="text-white">Contact Us</p>
            <div className="flex justify-center items-center bg-white rounded-full w-10 h-10">
              <Phone color="#F57C14" size={22} />
            </div>
          </div>

          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
