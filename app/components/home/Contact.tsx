"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import React from "react";

const Contact = () => {
  const contactData = [
    {
      title: "Phone",
      detail: "(206) 919-6886",
      icon: Phone,
    },
    {
      title: "Address",
      detail: "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States",
      icon: MapPin,
    },
    {
      title: "Office Hours",
      detail: "Mon - Sun: 8:00 AM - 7:00 PM",
      icon: Clock,
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="  flex justify-center flex-col items-center space-y-6 text-center max-w-3xl mx-auto">
          <p className="dark-text border rounded-full  px-4 py-2 dark-bg text-white">
            Get in Touch
          </p>

          <h1 className=" text-4xl font-bold">Contact Us</h1>
          <p>
            Ready to find your dream home? Reach out to us and let's start your
            real estate journey together.
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-start">
          {/* Contact */}
          <div className="p-2 space-y-4">
            <h3 className=" text-2xl">Let's connect</h3>

            <div>
              {contactData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className=" bg-white/5 backdrop-blur-sm border border-white/20 flex gap-4 items-start p-4 rounded-2xl mb-6 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="p-3 rounded-xl  group-hover:to-white/20 transition-all duration-300">
                      <Icon className="w-6 h-6 " />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold   duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm duration-300">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-[450px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2069.0214203906166!2d-115.97932863237946!3d36.20351728788936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1768480532577!5m2!1sen!2sph"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* second column */}
          <div className=" border p-4 md:p-8 rounded-xl space-y-8 bg-gray-50/50 dark-bg h-auto">
            {/* Form */}
            <form action="" className=" space-y-4">
              <h3 className=" text-2xl ">Send A Message</h3>

              <div>
                <div className=" space-y-2">
                  <p>Full Name</p>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className=" mb-4"
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className=" space-y-2">
                    <p> Email</p>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className=" mb-4"
                    />
                  </div>
                  <div className=" space-y-2">
                    <p>Phone Number</p>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className=" mb-4"
                    />
                  </div>
                </div>
                <div className=" space-y-2">
                  <p>Message</p>
                  <textarea
                    placeholder="Your Message"
                    className=" w-full bg-transparent border border-[#212D45] rounded-lg p-4 h-32 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              <Button type="submit" className=" w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>

            {/* Consutlation Card */}
            <div className=" border p-4 bg-[#212D45] text-white rounded-lg">
              <div className=" space-y-2">
                <h3 className=" text-lg">Free Consultation</h3>
                <p>
                  Schedule a complimentary consultation to discuss your real
                  estate needs.
                </p>
              </div>
              <Button className=" w-full mt-4 bg-white text-black hover:bg-gray-200 hover:scale-none">
                <Send className=" mr-2 w-4 h-4" />
                Schedule Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
