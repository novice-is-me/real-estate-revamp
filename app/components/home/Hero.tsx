"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <section className=" background-image" id="home">
      <div
        className="mx-auto max-w-7xl px-6 py-16 md:py-24  lg:pb-20 flex items-center"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="flex flex-col items-center md:items-start space-y-8 max-w-4xl w-full text-center md:text-left">
          <div className="px-4 py-2 rounded-full bg-black/30 border border-white/20 backdrop-blur-sm w-fit">
            <span className="text-white text-sm font-medium tracking-wide">
              ✨ PREMIUM REAL ESTATE SERVICES
            </span>
          </div>

          {/* Main heading section */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
              MARCI METZGER
            </h1>

            <h2 className="text-3xl lg:text-4xl font-semibold text-white -mt-2">
              THE RIDGE REALTY GROUP
            </h2>

            <h3 className="text-xl lg:text-2xl text-white font-light tracking-wide">
              Pahrump Realtor
            </h3>
          </div>

          {/* Description section */}
          <div className=" max-w-2xl">
            <p className="text-lg text-white leading-relaxed drop-shadow-lg">
              We specialize in luxury properties and personalized real estate
              experiences.
            </p>
            <p className="text-lg text-white leading-relaxed drop-shadow-lg">
              Let us guide you to the perfect home that matches your lifestyle
              and aspirations.
            </p>
          </div>

          {/* CTA section */}
          <div className="flex flex-col sm:flex-row items-center md:items-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4 mb-0">
            <Link href="#gallery">
              <Button className="bg-white text-black text-center items-center">
                Explore Properties
              </Button>
            </Link>

            <div className="hidden md:flex items-center space-x-3 text-white">
              <div className="flex -space-x-2">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Client"
                  className="rounded-full border-3 border-white object-cover"
                  width={35}
                  height={35}
                  unoptimized
                />
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                  className="rounded-full border-3 border-white object-cover"
                  width={35}
                  height={35}
                  unoptimized
                />
                <Image
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Client"
                  className=" rounded-full border-3 border-white object-cover"
                  width={35}
                  height={35}
                  unoptimized
                />
              </div>
              <span className="text-sm font-medium drop-shadow-lg">
                Trusted by 500+ clients
              </span>
            </div>
          </div>

          {/* Stats section */}
          <div className="hidden md:grid grid-cols-3 gap-4 pt-8 max-w-3xl ">
            <div className="text-center p-4 blur-bg">
              <div className="text-3xl font-black text-white drop-shadow-lg mb-1">
                150+
              </div>
              <div className="text-xs text-white drop-shadow-lg font-medium uppercase tracking-wide">
                Properties Sold
              </div>
            </div>
            <div className="text-center p-4 blur-bg">
              <div className="text-3xl font-black text-white drop-shadow-lg mb-1">
                $50M+
              </div>
              <div className="text-xs text-white drop-shadow-lg font-medium uppercase tracking-wide">
                Sales Volume
              </div>
            </div>
            <div className="text-center p-4 blur-bg">
              <div className="text-3xl font-black text-white drop-shadow-lg mb-1">
                5.0★
              </div>
              <div className="text-xs text-white drop-shadow-lg font-medium uppercase tracking-wide">
                Client Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
