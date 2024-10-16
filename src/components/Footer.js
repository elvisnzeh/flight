import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="px-6 py-10 bg-slate-600 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <p className="text-2xl font-bold">Fiyinn</p>
          <p className="text-sm">BUDGET</p>
          <p className="mt-5 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum{" "}
          </p>
          <div className="flex mt-5 space-x-3">
            <a href="#" aria-label="Facebook">
              <BsFacebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <AiFillTwitterCircle size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <AiFillInstagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <AiFillLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-2xl font-bold">Get in Touch</p>
          <div className="mt-5">
            <p className="text-sm">Phone: +92 123 456789</p>
            <p className="text-sm">Email: info@gmail.com</p>
          </div>
        </div>

        {/* Flights */}
        <div>
          <p className="text-2xl font-bold">Flights</p>
          <div className="mt-5 space-y-2">
            <p className="text-sm">Asia</p>
            <p className="text-sm">Africa</p>
            <p className="text-sm">Europe</p>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <p className="text-2xl font-bold">Useful Links</p>
          <div className="mt-5 space-y-2">
            <p className="text-sm">Contact Us</p>
            <p className="text-sm">About Us</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 text-sm">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        <p>Terms and Conditions - Privacy Policy</p>
      </div>
    </footer>
  );
};
