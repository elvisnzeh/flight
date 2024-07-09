<div className="col-span-3 p-5 flex justify-center items-center">
<Link to="/" className="ml-5">
  {/* Use Link instead of <a> */}
  <div className="hover:border-b-[2px] hover:border-b-yellow-400">
    <p className="text-white">HOME</p>
  </div>
</Link>

<Link to="/about" className="ml-5">
  {/* Specify the target route in the to prop */}
  <div className="hover:border-b-[2px] hover:border-b-yellow-400">
    <p className="text-white">ABOUT US</p>
  </div>
</Link>

<Link to="/booking-terms" className="ml-5">
  <div className="hover:border-b-[2px] hover:border-b-yellow-400">
    <p className="text-white">BOOKING TERMS</p>
  </div>
</Link>

<Link to="/flight" className="ml-5">
  <div className="hover:border-b-[2px] hover:border-b-yellow-400">
    <p className="text-white">FLIGHT</p>
  </div>
</Link>
<Link to="/get-in-touch" className="ml-5">
  <div className="py-2 px-5 border-white border-[2px]">
    <p className="text-white">GET IN TOUCH</p>
  </div>
</Link>
</div>