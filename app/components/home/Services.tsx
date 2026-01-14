"use client";
import { title } from "process";
import React from "react";
import Image from "next/image";

const Services = () => {
  const cardData = [
    {
      title: "Real Estate Done Right",
      description:
        "Buying, selling, or investing? We guide you through every step with confidence—finding the right property at the right price, from condos to luxury homes. Local expertise, trusted connections, and stress-free service.",
      src: "/service-image1.png",
    },
    {
      title: "Commercial & Residential",
      description:
        "Whether you’re buying, selling, or investing, we make the process simple and stress-free. From fixer-uppers to luxury homes, we help you find the right property and connect you with trusted experts along the way.",
      src: "/service-image2.png",
    },
    {
      title: "Rely on Expertise",
      description:
        "We provide expert guidance for buying, selling, and investing in real estate. With deep local knowledge and trusted industry connections, we ensure a smooth, informed, and confident experience from start to finish.",
      src: "/service-image3.png",
    },
  ];
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-300 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:dark-text transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* CTA Button */}
                <div className="flex items-center dark-text font-semibold group-hover:text-gray-800 transition-colors duration-300 cursor-pointer">
                  <span className="mr-2">Learn More</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gray-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
