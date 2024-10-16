import React from "react";
import coin from "./assets/coins.jpg";

export default function Services() {
  const ServiceItems = () => {
    return (
      <div className="mt-5">
        <div className="flex h-[50px] w-[50px] rounded-full bg-[#dce8f6] justify-center items-center">
          <img src={coin} className="w-[20px] h-[20px]" />
        </div>
        <p className="text-black text-lg mt-2">Price Beating Guarantee</p>
        <div className="w-[200px] mt-1">
          <p className="text-sm text-gray-400"></p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative z-10 h-auto px-5 md:px-10 lg:px-20 py-10 md:py-20">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 h-auto md:h-[90%]">
        {/* Left Section */}
        <div className="relative z-20 mb-10 md:mb-0">
          <p className="text-sm">BEST CHOICE</p>
          <p className="text-2xl md:text-3xl mt-1">
            Why Should<br />You Use
            <span className="text-[#3781c5]"> Our Services</span>
          </p>
          <div className="mt-5"></div>
          <p className="text-sm">Peace of Mind</p>
          <p className="text-sm text-gray-400 mt-1">
            Using our services can give you peace of mind knowing that your travel plans are in capable hands. We handle the logistics, so you can focus on enjoying your trip.
          </p>
          <div className="mt-10"></div>
          <p className="text-sm">Time Savings</p>
          <p className="text-sm text-gray-400 mt-1">
            Booking flights can be a time-consuming process. We streamline this process for you, saving you valuable time and effort.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative z-20">
          <div className="mt-10 md:mt-0">
            <p className="text-sm">Real-Time Updates</p>
            <p className="text-sm text-gray-400 mt-1">
              We provide real-time information on flight status, delays, cancellations, and gate changes, keeping you informed and helping you make informed decisions during your journey.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-sm">Customer Support</p>
            <p className="text-sm text-gray-400 mt-1">
              Our dedicated customer support team is available to assist you with any questions or concerns before, during, or after your flight. We prioritize your satisfaction and strive to provide excellent service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
