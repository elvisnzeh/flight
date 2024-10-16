import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <div className="flex justify-center h-14">
        <div className="flex items-center">
          <BiPhoneCall className="text-xl sm:text-2xl" />
          <p className="text-sm ml-2">+233593424117</p>
          <MdEmail className="ml-5 text-xl sm:text-2xl" />
          <p className="text-sm ml-2">info@gmail.com</p>
        </div>
      </div>
      <div className="flex justify-center items-center h-14">
        <AiFillTwitterCircle className="text-2xl sm:text-3xl mx-2" />
        <AiFillInstagram className="text-2xl sm:text-3xl mx-2" />
        <AiFillLinkedin className="text-2xl sm:text-3xl mx-2" />
        <AiFillFacebook className="text-2xl sm:text-3xl mx-2" />
      </div>
    </div>
  );
};

export default ContactUs;
