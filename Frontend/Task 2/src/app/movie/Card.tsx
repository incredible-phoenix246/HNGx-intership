/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ movieData, movieid }: { movieData: any; movieid: any }) {
  const getPoster = (backdroppath: any) => {
    return `https://image.tmdb.org/t/p/original${backdroppath}`;
  };

  const imageUrl = getPoster(movieData.backdrop_path);

  console.log(movieData);
  return (
    <section>
      <div>
        <Link href="/">
          <div className="w-full relative">
            <div className="relative bg-black bg-opacity-10 backdrop-blur-sm h-[475px] rounded-lg">
              <div className="h-full w-full relative">
                <Image
                  src={imageUrl}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/Play.png" alt="" width={54} height={54} />
              <Image
                src="/Ellipse4.svg"
                alt=""
                width={110}
                height={110}
                className="absolute"
              />
            </div>
          </div>
        </Link>
        <div className="pt-5 flex flex-col justify-evenly ">
          <div className="items-center ">
            <div className="mt-5 relative">
              <section>
                <div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="font-extrabold text-[23px] mb-2 mt-2 font-poppins flex items-center gap-4 text-[#404040]">
                      <p>
                        <span data-testid="movie-title">
                          {movieData.title}{" "}
                        </span>
                        .{" "}
                        <span data-testid="movie-release-date">
                          {movieData.release_date}
                        </span>{" "}
                        . PG-13 .
                        <span data-testid="movie-runtime">
                          {movieData.runtime} Min
                        </span>
                      </p>
                      {movieData.genres.map(
                        (
                          genre: {
                            name:
                              | string
                              | number
                              | boolean
                              | React.ReactElement<
                                  any,
                                  string | React.JSXElementConstructor<any>
                                >
                              | Iterable<React.ReactNode>
                              | React.ReactPortal
                              | React.PromiseLikeOfReactNode
                              | null
                              | undefined;
                          },
                          index: React.Key | null | undefined
                        ) => (
                          <span
                            key={index}
                            className="inline-block border border-[#F8E7EB] rounded-[15px] px-3 py-1 text-sm font-[500] text-[#B91C1C] leading-normal"
                          >
                            {genre.name}
                          </span>
                        )
                      )}
                    </div>
                    <div className="ml-10">
                      <div className="text-2xl flex items-center gap-2 justify-center font-poppins leading-normal">
                        <img src="/star.png" alt="" width={30} height={30} />
                        <p className="text-[#E8E8E8] text-[25px] font-[500]">
                          {movieData.vote_average}
                          <span>|</span>
                        </p>
                        <p className="text-[#666] text-[20px] font-[500]">
                          {movieData.vote_count}K
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-5 relative">
              <section className="w-fit relative items-center">
                <div className="flex justify-between gap-[24px] items-center">
                  <div className="font-poppins font-[400] text-[20px]">
                    <p className="text-[#333]" data-testid="movie-overview">
                      {movieData.overview}
                    </p>
                    <div className="relative mt-10">
                      <div className="flex flex-col gap-[31px] font-[400] text-[20px]">
                        <p className="text-[#333]">
                          Director :
                          <span className="text-[#BE123C]">
                            Joseph konsinki
                          </span>
                        </p>
                        <p className="text-[#333]">
                          Writers :
                          <span className="text-[#BE123C]">
                            Jim Cash, Jack Epps Jr, Peter Craig
                          </span>
                        </p>
                        <p className="text-[#333]">
                          Director :
                          <span className="text-[#BE123C]">
                            Tom Cruise, Jennifer Connelly, Miles Teller
                          </span>
                        </p>
                      </div>
                      <div className="w-full mt-6 flex items-center  gap-2 border border-[#C7C7C7]  rounded-[10px] text-white">
                        <button className="w-[253px] text-white bg-[#BE123C] h-[55px] rounded-[10px]">
                          Top rated movie #65
                        </button>
                        <input
                          type="text"
                          placeholder="Awards 9 nominations"
                          className=" text-black font-poppins font-[500] text-[20px] bg-inherit outline-none "
                        />
                        <div className="flex absolute right-4 items-center font-extrabold">
                          <img
                            src="/Expand.png"
                            alt=""
                            width={30}
                            height={30}
                            className="text-black"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="items-center w-full pb-4">
                    <div className=" flex flex-col items-center justify-center gap-[24px]">
                      <button className="w-full flex gap-[10px] bg-[#BE123C] text-white font-[500] text-[20px] font-poppins leading-normal items-center justify-center h-[55px] rounded-[10px]">
                        <img src="/ticket.png" alt="" width={24} height={24} />
                        See Showtimes
                      </button>
                      <button className=" w-full flex gap-[10px] bg-[#F8E7EB] text-[#333] font-[500] text-[20px] font-poppins leading-normal items-center justify-center h-[55px] rounded-[10px] border border-[#BE123C]">
                        <img src="/List.png" alt="" width={24} height={24} />
                        More watch options
                      </button>
                      <div className="w-full relative rounded-[15px]">
                        <Image
                          src="/movie2.png"
                          alt=""
                          width={360}
                          height={229}
                          className="w-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 rounded-[15px] h-[52px] font-poppins flex bg-black bg-opacity-10 backdrop-blur-sm items-center justify-center text-[#E8E8E8] gap-[12px]">
                          <img src="/List2.svg" alt="" width={23} height={23} />
                          <p className="">The Best Movies Shows in September</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
