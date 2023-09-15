"use client"; /* eslint-disable @next/next/no-img-element */
import React from "react";
import FeaturedCard from "./FeaturedCard";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

function FeaturedMovies() {
  const [movies, setMovies] = useState([]);

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkxNGJkNTQ0YmQxN2M1NTZjOGE5MGVhMmY2YmY4YiIsInN1YiI6IjY0ZmY1MzQ1ZWZlYTdhMDBlMDM0YzYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeH1DhJJPZrGOzzuuAGND4YRD6DG-EB4d991CL5nuYM",
          },
        }
      );

      setMovies(response.data.results.slice(0, 10));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return (
    <section className="max-container max-sm:mt-4 ">
      <div className="flex flex-row  items-center justify-between gap-5">
        <Link
          href="/"
          className="font-bold text-2xl font-palanquin max-sm:text-sm"
        >
          Featured Movie
        </Link>
        <Link
          href="/"
          className="font-[400] font-DMSans text-rose-700 leading-[24px] flex gap-[8px] max-sm:text-sm"
        >
          See more
          <Image src="/more.svg" alt="" width={20} height={20} />
        </Link>
      </div>
      <div data-testid="movie-card" className="movie-card">
        {movies.length === 0 ? (
          <>
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </>
        ) : (
          movies.map((moData, id) => (
            <FeaturedCard key={id} moData={moData} id={id} />
          ))
        )}
      </div>
    </section>
  );
}

export default FeaturedMovies;
