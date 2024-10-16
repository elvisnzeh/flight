import React, { useState } from "react";
import { IoIosAirplane } from "react-icons/io";
import ButtonYellow from "./ButtonYellow";
import { Link } from "react-scroll";

function FlightBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    localStorage.setItem("userdetail", JSON.stringify(formData));
    setFormData({
      name: "",
      email: "",
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
    });
  };

  return (
    <div className="relative z-20 p-4 sm:p-6 max-w-md mx-auto bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-xl sm:text-2xl mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm sm:text-base">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1 sm:py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm sm:text-base">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1 sm:py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="departureCity" className="block text-sm sm:text-base">
            Departure City:
          </label>
          <input
            type="text"
            id="departureCity"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1 sm:py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="arrivalCity" className="block text-sm sm:text-base">
            Arrival City:
          </label>
          <input
            type="text"
            id="arrivalCity"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1 sm:py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="departureDate" className="block text-sm sm:text-base">
            Departure Date:
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1 sm:py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full sm:w-auto"
        >
          Book
        </button>
      </form>
    </div>
  );
}

export default FlightBookingForm;
