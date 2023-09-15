import React from "react";
import Image from "next/image";

function HeroCard({
  imgURL,
  desc,
  name,
  popularity,
  rating,
}: {
  imgURL: any;
  desc: any;
  name: any;
  popularity: any;
  rating: any;
}) {
  return (
    <main className="w-full relative">
      <section className="w-full relative">
        <div
          className="bg-no-repeat bg-cover bg-center h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
          style={{ backgroundImage: `url(${imgURL})` }}
        >
          <Image src={imgURL} alt="" layout="fill" objectFit="cover" />
        </div>
        <div className="absolute left-0 top-0 text-white w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto z-50">
          <div className="p-4 sm:p-10 sm:ml-0 ml-4 mt-[10rem] pb-10 sm:pb-20">
            <p className="text-3xl sm:text-3xl lg:text-5xl xl:text-6xl font-DMSans text-white mt-4 pt-6 sm:pt-12 capitalize break-words">
              {name}
            </p>
            <div className="mb-4 sm:mb-8 mt-6 flex flex-wrap gap-20">
              <div className="flex items-center gap-1">
                <Image src="/imdb.png" alt="" width={30} height={60} />
                <p className="text-white text-md sm:text-xl font-semibold">
                  {rating}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <Image src="/tomato.png" alt="" width={28} height={30} />
                <p className="text-white text-sm sm:text-xl font-semibold">
                  {popularity}
                </p>
              </div>
            </div>
            <p className=" max-lg:hidden leading-6 sm:leading-7 text-sm sm:text-base text-white mt-2 sm:mt-4 mb-4 sm:mb-8">
              {desc}
            </p>
            <button className="bg-rose-700 px-4 py-2 rounded-md text-base sm:text-lg flex items-center gap-2">
              <Image src="/Play.svg" alt="" width={20} height={20} />
              <span className="text-white font-semibold">WATCH TRAILER</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HeroCard;
