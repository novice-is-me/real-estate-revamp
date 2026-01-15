"use client";
import React, { useEffect } from "react";
import Masonry from "@/components/Masonry";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const items = [
    {
      id: 1,
      img: "/gallery1.png",
      height: 500, // medium
    },
    {
      id: 2,
      img: "/gallery3.png",
      height: 1000, // tall (hero interior)
    },
    {
      id: 3,
      img: "/gallery2.png",
      height: 500, // short
    },
    {
      id: 4,
      img: "/gallery4.png",
      height: 500, // medium-tall
    },
    {
      id: 5,
      img: "/gallery5.png",
      height: 500, // short-medium
    },
    {
      id: 6,
      img: "/gallery6.png",
      height: 500, // medium
    },
    {
      id: 7,
      img: "/gallery7.png",
      height: 500, // tall
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="gallery">
      <div
        className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <div className="  flex justify-center flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
          <p className="dark-text border rounded-full  px-4 py-2 dark-bg text-white">
            Interior Showcase
          </p>

          <h1 className=" text-4xl font-bold">Property Gallery</h1>
          <p>
            Explore stunning interiors and architectural details from our
            premium property collection.
          </p>
        </div>

        <div className=" mt-10">
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
