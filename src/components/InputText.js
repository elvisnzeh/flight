import React from "react";

export const InputText = ({ image, placeholder, label, extraStyle }) => {
  return (
    <div className={`flex border border-gray-300 px-3 py-3 ${extraStyle}`}>
      <div className="border-r-gray-1px pr-4 rounded-sm">{image}</div>
      <input
        className="ml-3 outline-none text-sm w-full"
        placeholder={placeholder}
      />
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
};

export default InputText;
