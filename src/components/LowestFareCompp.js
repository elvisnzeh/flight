import React from 'react';
import { LOWEST_FARE_LIST } from './constants/Appconstants';
import ButtonYellow from "../components/ButtonYellow";

export default function LowestFareCompp() {
  return (
    <div className="relative px-10 py-20 bg-[#1a63a8]">
      {/* Title Section */}
      <p className="text-sm text-center text-white">CURRENT FARE</p>
      <p className="text-2xl md:text-3xl mt-1 text-center text-white">
        Today's Lowest Fare
      </p>

      {/* Fare Items */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-auto'>
        {LOWEST_FARE_LIST.map((item) => {
          return (
            <div key={`lowest-fare-${item.id}`} className='bg-white p-5 text-center rounded-lg'>
              <img src={item.image} className='h-[150px] rounded-lg w-full object-cover' alt={item.heading} />
              <p className='mt-2 font-semibold'>{item.heading}</p>
              <p className='text-sm'>
                <span className='text-gray-400'>Starting from </span>
                <span className="text-red-400 font-semibold">{item.price}</span>
              </p>
              <ButtonYellow label={"CHECK OUT NOW"} extraStyle={"mt-5"} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
