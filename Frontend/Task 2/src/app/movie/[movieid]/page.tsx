"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import Card from "../Card";
import Loader from "../Loader";

function MoviePage({ params: { movieid, runtime } }: any) {
  const [movieData, setMovieData] = useState({});
  const fetchMovieDetails = async () => {
    if (!movieid) return;

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkxNGJkNTQ0YmQxN2M1NTZjOGE5MGVhMmY2YmY4YiIsInN1YiI6IjY0ZmY1MzQ1ZWZlYTdhMDBlMDM0YzYzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeH1DhJJPZrGOzzuuAGND4YRD6DG-EB4d991CL5nuYM",
      },
    };

    try {
      const response = await axios.request(options);

      setMovieData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieid]);

  return (
    <section className="movie-overview">
      <Sidebar />
      {Object.keys(movieData).length > 0 ? (
        <Card movieData={movieData} movieid={movieid} />
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default MoviePage;
