"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

type Props = {};
const getPoster = (posterPath: any) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

function FeaturedCard({ moData, id }: { moData: any; id: any }) {
  const imageUrl = getPoster(moData.poster_path);

  return (
    <Link
      href={`/movie/${moData.id}`}
      passHref
      key={id}
      className=" hover:scale-102 rounded-md hover:shadow-lg transform transition duration-100 ease-in-out"
    >
      <>
        <div className="bg-white pb-4 justify-between items-start">
          <img
            data-testid="movie-poster"
            className="w-full h-auto"
            src={imageUrl}
            alt="Movie Poster"
            width={250}
            height={370}
          />
          <div>
            <div className="absolute top-0 right-0 p-2 mr-2 mt-2 max-sm:w-10 max-sm:mr-0 max-sm:mt-0">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <img
                    src="/Heart.svg"
                    alt=""
                    width={30}
                    height={19.474}
                    className="p-1"
                  />
                  <img
                    src="/Ellipse3.svg"
                    alt=""
                    width={30}
                    height={29.211}
                    className="absolute top-0 left-0"
                  />
                </div>
              </Link>
            </div>
            <div className="absolute ml-2 mt-6 top-0 left-0 flex flex-start  rounded-[8px] bg-opacity-50 backdrop-blur-sm bg-[#F3F4F6]">
              <Link href="/" className="flex items-center">
                <span className="text-[12px] text-gray-900 px-1">
                  {moData.media_type}
                </span>
              </Link>
            </div>
          </div>

          <div className="p-1 ">
            <p
              className="text-slate-400  text-sm font-palanquin mt-[12px] max-sm:text-[9px] max-lg:text-[10px] max-xl:text-[10px]"
              data-testid="movie-release-date"
            >
              {moData.origin_country},{moData.release_date}
            </p>
            <div
              className="font-extrabold text-lg mb-2 mt-[12px] font-plaquin"
              data-testid="movie-title"
            >
              <p className="max-sm:text-[10px] max-lg:text-[12px] max-xl:text-[15px]">
                {moData.title}
              </p>
            </div>
            <div className="flex gap-10 mt-[12px] w-[250px] max-sm:gap-1 max-lg:text-[10px] max-lg:gap-2 max-xl:text-[12px] max-xl:gap-2">
              <p className="text-gray-900 flex gap-2 items-center max-sm:text-[7px] ">
                <span className="max-sm:w-[10px] max-lg:w-[25px] max-xl:w-[25px]">
                  <img src="/imdb.png" alt="" width={35} />
                </span>
                {moData.vote_average}/{moData.vote_count}
              </p>
              <p className="text-gray-900 ml-8 flex gap-2 max-sm:gap-1 items-center max-sm:text-[7px] max-lg:text-[10px] max-xl:text-[12px]">
                <span className="max-sm:w-[10px] max-lg:w-[20px] max-xl:w-[20px] ">
                  <img src="/tomato.png" alt="" width={25} />
                </span>
                97%
              </p>
            </div>
            <p className="text-slate-400 text-sm mt-[12px] max-sm:text-[9px] max-lg:text-[10px] max-xl:text-[12px]">
              {moData.genre_ids}
              <br />
            </p>
          </div>
        </div>
      </>
    </Link>
  );
}

export default FeaturedCard;
