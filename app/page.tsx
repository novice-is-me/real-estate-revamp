import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Search from "./components/home/Search";
import Featured from "./components/home/Featured";
import Gallery from "./components/home/Gallery";
import Services from "./components/home/Services";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

const page = () => {
  return (
    <main>
      <Navbar />

      <Hero />
      <Search />
      <Featured />
      <Gallery />
      <Services />
      <About />
      <Contact />

      <Footer />
    </main>
  );
};

export default page;
