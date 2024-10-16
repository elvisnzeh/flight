import React from "react";
import flight3 from "./assets/flight3.avif";
import HeaderNav from "./HeaderNav";
import FlightBookingForm from "./FlightBookingForm";

export default function Header() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${flight3})`,
      }}
    >
      {/* Navigation */}
      <HeaderNav />

      {/* Header Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[80%] px-5 py-10">
        {/* Left Column - Text */}
        <div className="flex flex-col justify-center">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl">
            Flylinn BUDGET
          </p>
          <p className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
            We are reliable
          </p>
          <p className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-bold mt-1">
            Professional & Experienced
          </p>
          <p className="text-white text-sm md:text-base mt-3">
            <span className="text-yellow-400">Flylinn BUDGET</span> is a versatile
            website empowering you with the best flight deals.
          </p>
          <p className="text-white text-sm md:text-base mt-1">
            Full-service airtime offering{" "}
            <span className="text-yellow-400">reduced fares</span> for your travels.
          </p>

          {/* Optional Button */}
          {/* <ButtonYellow label={"FIND FLIGHT"} extraStyle={"mt-5"} /> */}
        </div>

        {/* Right Column - Flight Booking Form */}
        <div className="flex justify-center items-center">
          <FlightBookingForm />
        </div>
      </div>
    </div>
  );
}
