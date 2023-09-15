"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

type Props = {};

function Search({}: Props) {
  return (
    <section>
      <div className=" lg:gap-10 w-[525px] max-sm:w-[300px] max-lg:absolute max-sm:absolute max-lg:-bottom-[31rem] max-sm:-bottom-[38rem] max-lg:left-0  flex items-center gap-2 p-2 lg:border lg:border-white max-lg:border max-lg:border-black max-lg:pb-2  rounded-lg text-white">
        <input
          type="text"
          placeholder="What do you want to watch??"
          className="max-sm:w-full w-full max-sm:text-[10px] text-base leading-normal text-white max-lg:text-black text-slate-gray lg:pl-5 max-sm:p-1 lg:outline-none max-sm:rounded-full bg-inherit "
        />

        <button className="flex items-center font-extrabold max-sm:relative  ">
          <span className="lg:text-white max-lg:text-black z-10">
            <AiOutlineSearch />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Search;
