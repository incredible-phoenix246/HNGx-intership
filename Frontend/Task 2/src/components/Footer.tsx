import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <section className="mt-10 pt-10 pb-10 max-sm:mt-5">
      <div className="flex items-center justify-center flex-col gap-10 max-sm:gap-7">
        <div className="text-4xl flex flex-row gap-[48px] max-sm:gap-7">
          <Link href="/">
            <Image
              src="/facebook.svg"
              alt=""
              width={24}
              height={27.429}
              className="max-sm:w-[40px]"
            />
          </Link>
          <Link href="/">
            <Image
              src="/intagram.svg"
              alt=""
              width={24}
              height={27.429}
              className="max-sm:w-[40px]"
            />
          </Link>
          <Link href="/">
            <Image
              src="/twitter.svg"
              alt=""
              width={24}
              height={27.429}
              className="max-sm:w-[40px]"
            />
          </Link>
          <Link href="/">
            <Image
              src="/youtube.svg"
              alt=""
              width={24}
              height={27.429}
              className="max-sm:w-[40px]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-[48px] max-sm:gap-5 max-sm:flex-col-reverse font-DMSans font-bold">
          <Link href="/">
            <p className="text-sm max-lg:text-[12px]"> Condition of Use</p>
          </Link>
          <Link href="/">
            <p className="text-sm max-lg:text-[12px]"> Privacy & policy</p>
          </Link>
          <Link href="/">
            <p className="text-sm max-lg:text-[12px]">Press Room</p>
          </Link>
        </div>
        <div className="flex items-center gap-2 text-gray-500 font-extrabold font-DMSans leading-normal max-sm:flex-col-reverse">
          <span className="text-sm">
            <AiOutlineCopyrightCircle />
          </span>
          <p className="max-lg:text-sm max-sm:text-[9px]">
            2021 MovieBox by Brian_Miruri12
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
