import React from "react";
import flight3 from "./assets/flight3.avif";
// import flight4 from "./assets/flight4.jpg";
import HeaderNav from "./HeaderNav";
import FlightBookingForm from "./FlightBookingForm";
import ButtonYellow from "./ButtonYellow";

export default function Header() {
  return (
    <div
      className="w-full h-[80%] bg-red-300"
      style={{
        backgroundImage: `url("${flight3}")`,
        backgroundRepeat: 'no-repeat',
        width: '100%', 
        backgroundSize: 'cover',
      }}
      
      
    >
      <HeaderNav />
      <br></br>
      <div className="grid grid-cols-2 h-[80%]">
        <div className="flex p-5 items-center">
          <div>
            <p className="text-white text-xl">Flylinn BUDGET</p>
            <p className="text-white text-5xl">we are reliable</p>
            <p className="text-yellow-400 text-5xl">profesional Experienced</p>

            <p className="text-white text-sm mt-3">
              <span className="text-yellow-400">Flylinn BUDGET</span>is a versatile z\ 
              website empowering you
            </p>

            <p className="text-white text-sm">2.,
              full service airtime offering{""}
              <span className="text-yellow-400"> reduce-fairs</span>{" "}
            </p>
            {/* <ButtonYellow label={"FIND FLIGHT"} extraStyle={" flex mt-5"} /> */}
          </div>
          </div>
        <div className="flex">
        <FlightBookingForm  />
      </div>
    </div>
    </div>
  );
}
