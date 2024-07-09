import React, { useState } from "react";
import InputText from "./InputText";
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
    // You can handle form submission here, e.g., sending data to a server
    console.log("Form submitted with data:", formData);
    localStorage.setItem('userdetail',JSON.stringify(formData))
    // Reset the form
    setFormData({
      name: "",
      email: "",
      departureCity: "",
      arrivalCity: "",
      departureDate: "",
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white text-black rounded-lg shadow-lg">
      <h2 className="text-xl mb-4"> Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="departureCity" className="block">
            Departure City:
          </label>
          <input
            type="text"
            id="departureCity"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="arrivalCity" className="block">
            Arrival City:
          </label>
          <input
            type="text"
            id="arrivalCity"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="departureDate" className="block">
            Departure Date:
          </label>
          <input
            type="date"
            id="departureDate"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleInputChange}
            required
            className="w-full bg-transparent border-b border-black placeholder-black placeholder-opacity-50 px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Book
        </button>
      </form>
    </div>
  );
}

export default FlightBookingForm;
