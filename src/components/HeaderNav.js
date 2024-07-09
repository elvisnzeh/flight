import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function HeaderNav() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div>
          <p className="text-3xl font-bold text-white">Flylinn</p>
          <p className="text-sm text-white text-center">BUDGET</p>
        </div>
      </div>
    </div>
  );
}
