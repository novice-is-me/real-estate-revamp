"use client";
import CountUp from "@/components/CountUp";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <section className="dark-bg overflow-hidden relative" id="about">
      <div
        className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24 lg:px-8"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-16 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group hidden md:block">
              {/* Decorative background */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 ">
                <Image
                  src="/owner.png"
                  alt="Marci J Metzger - Professional Realtor"
                  width={500}
                  height={500}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex text-ce items-center px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="text-white font-medium tracking-wide">
                  Meet The Realtor
                </span>
              </div>
            </div>

            {/* Header */}
            <div className="text-center lg:text-left space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Marci J Metzger
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <p className="text-lg text-white/90 font-medium">
                  REALTOR for Nearly Three Decades
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-white">
              <div className="">
                <p className="text-base leading-relaxed text-white/80 italic">
                  Marci was a REALTOR, then licensed Broker, in Washington
                  State. Now, she is enjoying the sunshine, and helping clients
                  in Southern Nevada. Having helped buyers and sellers in many
                  markets since 1995, she is a wealth of knowledge.
                </p>
              </div>
            </div>

            {/* Stats or additional info could go here */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">
                  <CountUp from={0} to={30} className=" count-up-text" /> +
                </div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white">
                  <CountUp from={0} to={100} className=" count-up-text" /> +
                </div>
                <div className="text-sm text-white/70">Happy Families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
