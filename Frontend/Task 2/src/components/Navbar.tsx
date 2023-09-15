/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Search from "./Search";

function Navbar() {
  return (
    <header className="sm:px-16 lg:px-8 lg:py-8 absolute z-10 lg:w-[1440px] md:w-full sm:w-full  max-lg:ml-5 lg:h-[600px] ">
      <div className="flex items-center lg:gap-[24px] max-lg:flex-row max-lg:flex max-lg:pt-2  max-lg:gap-24 max-md:gap-24 max-sm:gap-24 md:justify-between">
        <div className="sm:left-0 ">
          <Link
            href="/"
            className="flex lg:gap-[24px] max-lg:gap-[12px] items-center"
          >
            <img src="/tv.png" alt="" width={50} />
            <span className="leading-[24px] text-2xl font-DMsans font-[700] text-white max-lg:text-[15px]">
              MovieBox
            </span>
          </Link>
        </div>
        <Search />
        <div className="lg:ml-[7rem]">
          <ul className=" flex justify-center items-center gap-[27px] max-sm:gap-7 ">
            <Link
              href="/"
              className="text-white font-[700] font-DMSans text-base max-sm:text-[12px] max-sm:pr-4"
            >
              Sign In
            </Link>
            <Link href="/" className="flex max-lg:hidden">
              <Image
                src="/Ellipse1.svg"
                alt=""
                width={30}
                height={30}
                className=" rounded-full"
              />
              <Image
                src="/menu.svg"
                alt=""
                width={30}
                height={30}
                className="absolute"
              />
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
