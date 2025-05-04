import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Logo - Positioned on the left */}
        <a
          href="#about-me"
          className="absolute left-5 h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Stealth-AI
          </span>
        </a>

        {/* Centered Navigation Links */}
        <div className="flex items-center border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer px-4">
            About
          </a>
          <a href="#skills" className="cursor-pointer px-4">
            Tech
          </a>
          <a href="#projects" className="cursor-pointer px-4">
            Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
