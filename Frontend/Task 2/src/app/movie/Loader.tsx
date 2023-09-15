import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <section>
      <div>
        <div className="w-full relative">
          <div className="relative bg-black bg-opacity-10 backdrop-blur-sm h-[475px] rounded-lg">
            {/* Skeleton Image Placeholder */}
            <div className="h-full w-full bg-gray-300 animate-pulse rounded-lg"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            {/* Skeleton Play Button Placeholder */}
            <div className="bg-gray-300 w-20 h-20 rounded-full animate-pulse"></div>
            {/* Skeleton Ellipse Placeholder */}
            <div className="bg-gray-300 w-40 h-40 absolute animate-pulse"></div>
          </div>
        </div>

        <div className="pt-5 flex flex-col justify-evenly ">
          <div className="items-center ">
            <div className="mt-5 relative">
              <section>
                <div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="font-extrabold text-[23px] mb-2 mt-2 font-poppins flex items-center gap-4 text-[#404040]">
                      <div className="bg-gray-300 w-60 h-6 animate-pulse"></div>
                      {/*  Release Date  */}
                      <div className="bg-gray-300 w-20 h-6 animate-pulse"></div>
                      {/*  Runtime  */}
                      <div className="bg-gray-300 w-24 h-6 animate-pulse"></div>
                    </div>

                    {/* Genres  */}
                    <div className="ml-10">
                      <div className="text-2xl flex items-center gap-2 justify-center font-poppins leading-normal">
                        {/* tar Icon */}
                        <div className="bg-gray-300 w-8 h-8 rounded-full animate-pulse"></div>
                        {/* Vote Average  */}
                        <div className="bg-gray-300 w-20 h-6 animate-pulse"></div>
                        <span>|</span>
                        {/* Vote Count */}
                        <div className="bg-gray-300 w-24 h-6 animate-pulse"></div>
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
                    {/* Overview  */}
                    <div className="bg-gray-300 w-96 h-6 animate-pulse"></div>
                    <div className="relative mt-10">
                      {/* Info  */}
                      <div className="bg-gray-300 w-40 h-6 animate-pulse mb-4"></div>
                      <div className="bg-gray-300 w-64 h-6 animate-pulse mb-4"></div>
                      <div className="bg-gray-300 w-80 h-6 animate-pulse"></div>

                      {/* Action Buttons */}
                      <div className="w-full mt-6 flex items-center  gap-2 border border-[#C7C7C7]  rounded-[10px] text-white">
                        <div className="bg-gray-300 w-60 h-10 animate-pulse"></div>
                        <div className="bg-gray-300 w-72 h-10 animate-pulse"></div>
                        <div className="bg-gray-300 w-10 h-10 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Watch Options  */}
                  <div className="items-center w-full pb-4">
                    <div className=" flex flex-col items-center justify-center gap-[24px]">
                      <div className="bg-gray-300 w-full h-14 animate-pulse"></div>
                      <div className="bg-gray-300 w-full h-14 animate-pulse"></div>

                      {/*  Image  */}
                      <div className="w-full relative rounded-[15px] bg-gray-300 animate-pulse">
                        <div className="absolute bottom-0 left-0 right-0 rounded-[15px] h-[52px] font-poppins flex bg-black bg-opacity-10 backdrop-blur-sm items-center justify-center text-[#E8E8E8] gap-[12px]">
                          <div className="bg-gray-300 w-8 h-8 rounded-full animate-pulse"></div>
                          <div className="bg-gray-300 w-44 h-6 animate-pulse"></div>
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

export default Loader;
