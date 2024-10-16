import React from "react";

export const InputText = ({ image, placeholder, label, extraStyle }) => {
  return (
    <div
      className={`flex border border-gray-300 px-3 py-3 rounded-md items-center ${extraStyle}
      md:px-5 md:py-4`} // Adjusts padding for medium screens and above
    >
      {/* Image/Icon */}
      {image && <div className="border-r pr-2 md:pr-4 rounded-sm">{image}</div>}
      
      {/* Input Field */}
      <input
        className="ml-2 outline-none text-sm w-full
        md:text-base lg:text-lg" // Adjusts font size for medium and large screens
        placeholder={placeholder}
      />
      
      {/* Label */}
      {label && (
        <p className="text-xs text-gray-400 ml-2 
        md:text-sm lg:text-base"> {/* Adjusts label size */}
          {label}
        </p>
      )}
    </div>
  );
};

export default InputText;
