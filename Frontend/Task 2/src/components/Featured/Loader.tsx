import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <section>
      <div className="bg-white pb-4 justify-between items-start animate-pulse">
        <div className="w-full h-48 bg-gray-300"></div>
        <div className="mt-4 flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="ml-2 w-20 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded"></div>
        <div className="mt-2 w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="mt-2 w-1/3 h-4 bg-gray-300 rounded"></div>
      </div>
    </section>
  );
}

export default Loader;
