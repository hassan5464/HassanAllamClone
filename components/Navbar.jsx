"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Search, X } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const topLineRef = useRef(null)
  const bottomLineRef = useRef(null)
  const toggle = () =>{
    setSearchClicked((prev)=> !prev)
  }
  const toggleMenu = ()=>{

  }

  gsap.to(topLineRef.current,{

  })



  return (
    <nav className="fixed w-dvw left-0 top-0 h-30 bg-amber-900">
      <div className="container flex justify-between items-center gap-4 ">
        <Image
          width={240}
          height={120}
          className=""
          src="/images/download.svg"
          alt="site loge"
        />
        <div className="hidden lg:block">
          <div>
            <ul className=" flex justify-center items-center gap-4 tracking-widest">
              {navLinks.map((item, indx) => (
                <li key={indx}>
                  <Link href={item.href}>{item.linkName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <Link href={"/contact-us"}>Contact us</Link>
            <div
              onClick={toggle}
              className="cursor-pointer w-14 h-14 flex justify-center items-center rounded-full border border-black/50 "
            >
              {searchClicked ? (
                <X size={24} />
              ) : (
                <Search color={"#141414"} size={28} />
              )}
            </div>
          
          </div>
        </div>
        <div onClick={toggleMenu} 
        className="flex lg:hidden flex-col justify-center items-center
          gap-1 transition-all duration-300 rounded-full cursor-pointer border border-white w-14 h-14 md:w-16 md:h-16">
          <span ref={topLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
          <span ref={bottomLineRef} className="block w-8 h-0.5 bg-white rounded-full origin-center"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
