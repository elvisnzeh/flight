import React from "react";
import ButtonYellow from "../components/ButtonYellow";
import coin from "./assets/wilo.jpg";

export const Professional = () => {
  return (
    <div className="h-[80%] px-20 py-[140px]">
      <div class="grid grid-cols-2 gap-5 h-[90%]">
        <div className="flex justify-center">
          <div
            className="bg-contain w-[250px]"
            style={{
              backgroundImage: `url("${coin}")`,
              backgroundRepeat: 'no-repeat',
              height:"100%",
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
        <div>
          <div>
            <div>
              <p className="text-sm"></p>
              <p className="text-3xl mt-1">
                We Are Very Reliable<br></br>
                <span className="text-[#3781c5]">
                  {" "}
                  Professional, Experienced
                </span>
              </p>
            </div>
          </div>

          <p className="mt-3">
          We understand that every journey is a story waiting to be told,
           and we're here to help you write yours, one flight at a time.
          </p>
          <p className="mt-5">
          Our mission is simple: to connect you with the world and make travel accessible to everyone. We strive to provide you with the most convenient,
           reliable, and affordable way to book flights and explore the globe. Whether you're jetting off for a business meeting, embarking on a family vacation, or seeking an adventure in a far-off land, we're here to make your travel experience seamless and memorable.
          </p>
          <div className="flex">
            <ButtonYellow label={"Read More"} extraStyle={"mt-10"} />
          </div>
        </div>
      </div>
    </div>
  );
};