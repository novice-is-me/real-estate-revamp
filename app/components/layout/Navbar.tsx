"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [tabs, setTabs] = useState<object[]>([
    {
      name: "Home",
      link: "#",
    },
    { name: "Search", link: "/search" },
    {
      name: "Featured",
      link: "#featured",
    },
    {
      name: "Gallery",
      link: "#gallery",
    },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className=" mx-auto max-w-7xl px-4 flex h-25 items-center justify-between ">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          loading="eager"
        />

        {/* For large view */}
        <div className=" hidden md:block">
          {tabs.map((tab, index) => (
            <div key={index} className="inline-block mx-4">
              <Link href={tab.link}>{tab.name}</Link>
            </div>
          ))}
        </div>

        {/* For small view */}
        <div className="md:hidden">
          <Menu size={30} onClick={() => setIsMenuOpen((prev) => !prev)} />

          <div>
            {isMenuOpen && (
              <div className=" absolute right-4 top-16 w-40 bg-white border flex flex-col items-start px-4 py-2 md:hidden">
                {tabs.map((tab, index) => (
                  <div key={index} className=" my-2">
                    <a href={tab.link}>{tab.name}</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
