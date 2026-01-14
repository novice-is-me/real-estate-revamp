"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  "/partner1.png",
  "/partner2.png",
  "/partner3.png",
  "/partner4.png",
];

const Partner = () => {
  return (
    <section className="dark-bg overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Marquee speed={80} gradient={false} pauseOnHover={false}>
          <div className="flex items-center whitespace-nowrap">
            {/* First set */}
            {logos.map((src, i) => (
              <div key={`a-${i}`} className="mx-12">
                <Image
                  src={src}
                  alt={`partner-${i}`}
                  width={140}
                  height={80}
                  className="object-contain bg-white"
                  priority
                />
              </div>
            ))}

            {/* Spacer between last & first */}
            <div className="w-32" />

            {/* Second set (manual duplicate) */}
            {logos.map((src, i) => (
              <div key={`b-${i}`} className="mx-12">
                <Image
                  src={src}
                  alt={`partner-${i}`}
                  width={140}
                  height={80}
                  className="object-contain bg-white"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Partner;
