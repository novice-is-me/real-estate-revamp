"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const linksData = [
    {
      name: "facebook",
      icon: FaFacebook,
      href: "https://www.facebook.com/MarciHomes/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      href: "https://www.instagram.com/marciandlauren_nvrealtors/",
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/marci-metzger-30642496/",
    },
    {
      name: "Yelp",
      icon: FaYelp,
      href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Search Listing", href: "#search" },
    { name: "Gallery", href: "#gallery" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <footer className=" dark-bg border-t border-gray-700" id="footer">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8 text-white/50">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* First col */}
          <div className=" space-y-6">
            <Image src="/logo.png" alt="Logo" width={200} height={100} />
            <p className=" text-justify">
              Your trusted partner in luxury real estate. We help you find the
              perfect home that matches your lifestyle and aspirations.
            </p>

            <p className=" text-sm mt-6">
              Copyright © 2026 Marci METZGER Homes - All Rights Reserved
            </p>
          </div>

          {/* Second col */}
          <div className="space-y-4 text-start md:text-center">
            <h3 className=" text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-wrap md:flex-col items-start md:items-center space-y-4 gap-8 md:gap-0">
              {quickLinks.map((link, index) => (
                <li key={index} className=" mb-4">
                  <Link href={link.href} className=" hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Third col */}
          <div className=" space-y-4 text-start md:text-center">
            <h3 className=" text-lg mb-6">Social</h3>
            <div className=" flex md:flex-col items-start md:items-center space-y-4">
              {linksData.map((link, index) => {
                const Icon = link.icon;

                return (
                  <Link
                    href={link.href}
                    key={index}
                    className=" mr-4 inline-block"
                    target="_blank"
                  >
                    <Icon className=" w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Fourth col */}
          <div className=" space-y-4">
            <h3 className=" text-lg mb-6"> Stay Updated</h3>
            <p>Subscribe to receive the latest listings and market updates.</p>

            <form action="">
              <div className=" space-y-2">
                <p>Full name</p>
                <Input type="text" placeholder="Full Name" className=" mb-4" />
              </div>
              <Button
                type="submit"
                className=" w-full mt-2 bg-white text-black "
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
