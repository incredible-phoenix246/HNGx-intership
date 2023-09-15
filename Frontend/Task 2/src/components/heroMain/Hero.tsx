"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroCard from "./HeroCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const heroData = [
  {
    id: 1,
    imgURL: "/hero.png",
    name: "john Wick 3: pallebulum",
    rating: "96.0/100",
    popularity: "99%",
    desc: "Parabellum is the third installment in the John Wick film series, starring Keanu Reeves as the titular character, John Wick. In this action-packed thriller, John Wick is on the run after being declared excommunicado by the international assassin's guild known as the High Table. ",
  },
  {
    id: 1,
    imgURL: "/hero3.png",
    name: "Spider-Man: Across The Spider",
    rating: "86.0/100",
    popularity: "97%",
    desc: "Spider-Man Across the Spider-Verse is an upcoming animated superhero film and the sequel to the highly acclaimed Spider-Man: Into the Spider-Verse.The movie continues the adventures of Miles Morales, who is once again joined by other Spider-People from different dimensions. ",
  },
  {
    id: 1,
    imgURL: "/hero4.png",
    name: "Blue Beetle",
    rating: "66.0/100",
    popularity: "60%",
    desc: "Blue Beetle is an upcoming superhero film in the DC Extended Universe (DCEU). The film will introduce the character Jaime Reyes as Blue Beetle, a teenager who gains superpowers from a mysterious scarab beetle. Directed by Angel Manuel So to abilities.",
  },
  {
    id: 1,
    imgURL: "/hero5.png",
    name: "Oppenheimer",
    rating: "86.0/100",
    popularity: "87%",
    desc: "Oppenheimer is an upcoming biographical drama film directed by Christopher Nolan. The film is expected to explore the life and work of J. Robert Oppenheimer, a prominent physicist who played a key role in the development of the atomic bomb during World War II.",
  },
  {
    id: 1,
    imgURL: "/hero6.png",
    name: "Transformers: Rise of the Beasts",
    rating: "96.0/100",
    popularity: "90%",
    desc: "Transformers: Rise of the Beasts is an upcoming installment in the popular Transformers film franchise. The movie is set to explore the origins of the Transformers on Earth and introduce new robotic characters known as Beasts.",
  },
];

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: function (currentSlide: any, nextSlide: any) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide: any) {
      console.log("after change", currentSlide);
    },
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | React.PromiseLikeOfReactNode
        | null
        | undefined
    ) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="custompagination ">{i + 1}</div>
    ),
  };
  return (
    <section className="max-w-[1440px] flex xl:flex-row flex-col mx-auto relative">
      <Slider {...settings}>
        {heroData.map((data, id) => (
          <section key={id}>
            <HeroCard {...data} />
          </section>
        ))}
      </Slider>
    </section>
  );
}

export default Hero;
