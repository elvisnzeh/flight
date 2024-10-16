import React from "react";
import ButtonYellow from "../components/ButtonYellow";
import coin from "./assets/wilo.jpg";

export const Professional = () => {
  return (
    <div className="h-auto px-5 md:px-10 lg:px-20 py-10 md:py-[100px]">
      {/* Adjust the grid layout to be responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-auto md:h-[90%]">
        {/* Image Section */}
        <div className="flex justify-center">
          <div
            className="w-[200px] md:w-[250px] lg:w-[300px] h-[200px] md:h-full bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url("${coin}")`,
            }}
          ></div>
        </div>

        {/* Text Section */}
        <div>
          <div>
            <div>
              <p className="text-sm"></p>
              <p className="text-2xl md:text-3xl mt-1">
                We Are Very Reliable<br />
                <span className="text-[#3781c5]">
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3 text-sm md:text-base">
            We understand that every journey is a story waiting to be told, 
            and we're here to help you write yours, one flight at a time.
          </p>

          <p className="mt-5 text-sm md:text-base">
            Our mission is simple: to connect you with the world and make travel accessible to everyone. We strive to provide you with the most convenient,
            reliable, and affordable way to book flights and explore the globe. Whether you're jetting off for a business meeting, embarking on a family vacation, or seeking an adventure in a far-off land, we're here to make your travel experience seamless and memorable.
          </p>

          {/* Button */}
          <div className="flex">
            <ButtonYellow label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};
