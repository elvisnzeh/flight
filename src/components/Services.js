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
          <p className="text-sm text-gray-400">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. */}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[80%] px-20 py-20">
      <div class="grid grid-cols-2 gap-2 h-[90%]">
        <div>
          <p className="text-sm">BEST CHOICE</p>
          <p className="text-3xl mt-1">
            Why Should<br></br>You Use
            <span className="text-[#3781c5]">
              {" "}
              Our <br></br>Services
            </span>
          </p>
          <div className="mt-5"></div>
          <p className="text-sm">Peace of Mind</p>
          <p className="text-3xl mt-1">
            <p className="text-sm text-gray-400">
              Using our services can give you peace <br></br> of mind knowing
              that your travel plans are in capable hands.<br></br>We handle the
              logistics, so you can focus on enjoying your trip.
            </p>
          </p>
          <div>
            <div className="mt-20"></div>
            <p className="text-sm">Time Savings</p>
            <p className="text-3xl mt-1">
              <p className="text-sm text-gray-400">
                Booking flights can be a time-consuming process. We can{" "}
                <br></br>
                streamline this process for you, saving you valuable time and
                effort.
              </p>
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <div className="mt-20"></div>
              <p className="text-sm">Real-Time Updates</p>
              <p className="text-3xl mt-1">
                <p className="text-sm text-gray-400">
                  We provide real-time information on flight status <br></br>
                  delays, cancellations, and gate changes.<br></br>keeping you
                  informed and helping <br></br> you make informed decisions
                  during your journey.
                </p>
              </p>
              <div>
                <div className="mt-20"></div>
                <p className="text-sm">Customer Support</p>
                <p className="text-3xl mt-1">
                  <p className="text-sm text-gray-400">
                    Our dedicated customer support team is available <br></br>{" "}
                    to assist you with any questions or concerns you may
                    <br></br> have before, during, or after your flight.We
                    prioritize <br></br> your satisfaction and strive to provide excellent
                    service.
                  </p>
                </p>
              </div>
            </div>
            {/* <ServiceItems /> */}
          </div>
          <div className="flex justify-between">
            {/* <ServiceItems /> */}
            {/* <ServiceItems /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
