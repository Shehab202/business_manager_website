"use client";

import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { links } from "../components/Links";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <div className="xl:hidden flex relative z-50">
      <button
        onClick={toggleOpen}
        aria-label="Toggle menu"
        className="p-2 rounded-md"
      >
        {open ? <X color="#F57C14" size={30} /> : <AlignRight color="#F57C14" size={30} />}
      </button>

      {open && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black/40 z-40"
          />

          <nav
            className="absolute right-0 top-14 w-56 z-50 rounded-2xl shadow-lg bg-[#F57C11] p-4 flex flex-col gap-3 animate-in slide-in-from-top-5 fade-in"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="text-white font-bold text-center hover:bg-white hover:text-[#F57C14] transition p-2 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </>
      )}
    </div>
  );
};

export default MobileNav;
