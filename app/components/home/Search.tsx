"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getNames } from "country-list";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  const countries = getNames();
  const propertyTypes = ["House", "Apartment", "Condo", "Townhouse", "Villa"];
  const sortByOptions = [
    "Newest",
    "Oldest",
    "Price: Low to High",
    "Price: High to Low",
    "Bedrooms: Low to High",
    "Bedrooms: High to Low",
    "Bathrooms: Low to High",
    "Bathrooms: High to Low",
  ];

  const numbers = Array.from({ length: 5 }, (_, i) => i + 1);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="search" className=" dark-bg">
      <div
        className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8"
        data-aos="fade-up-right"
        data-aos-duration="2000"
      >
        <div className="text-center mb-10 text-white">
          <h1 className="text-4xl font-bold mb-6">
            Find Your Perfect Property
          </h1>
          <p className=" max-w-2xl mx-auto">
            Search through our extensive collection of premium listings to find
            the home that fits your needs.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white backdrop-blur-sm rounded-xl p-6 border  text-black">
          <h2 className="text-xl font-semibold mb-6 ">Search Properties</h2>

          <form className="space-y-6">
            {/* Main Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Location
                </label>
                <Select>
                  <SelectTrigger className="w-full  placeholder:text-gray-100">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Property Type
                </label>
                <Select>
                  <SelectTrigger className="w-full  placeholder:text-gray-100">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((property) => (
                      <SelectItem key={property} value={property}>
                        {property}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Sort By
                </label>
                <Select>
                  <SelectTrigger className="w-full  placeholder:text-gray-100">
                    <SelectValue placeholder="Sort Results" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortByOptions.map((options) => (
                      <SelectItem key={options} value={options}>
                        {options}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Secondary Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Bedrooms
                </label>
                <Select>
                  <SelectTrigger className="w-full  placeholder:text-gray-100">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    {numbers.map((number) => (
                      <SelectItem key={number} value={number.toString()}>
                        {number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Bathrooms */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Bathrooms
                </label>
                <Select>
                  <SelectTrigger className="w-full placeholder:text-gray-100">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    {numbers.map((number) => (
                      <SelectItem key={number} value={number.toString()}>
                        {number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium  mb-2">
                  Min Price
                </label>
                <Input
                  type="text"
                  placeholder="Minimum Price"
                  className="w-full placeholder:/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-2">
                  Max Price
                </label>
                <Input
                  type="text"
                  placeholder="Maximum Price"
                  className="w-full  placeholder:/20"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-4 flex justify-center ">
              <Button
                type="submit"
                className="w-full md:w-auto md:px-12  font-semibold py-3 rounded-lg transition-colors bg-[#212D45] hover:bg-[#1e2738]"
              >
                <SearchIcon className="/50" />
                Search Properties
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
