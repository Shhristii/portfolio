import React from "react";
import { FaHome } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  text-gray-800 px-20 py-4">
      <div className="flex gap-3 justify-center items-center font-bold text-xl">
        {" "}
        Shristi Bhattarai
      </div>
      <div className="navigations">
        <ul className="flex gap-5">
          <li className="flex justify-center items-center gap-2">
            <FaHome size={17} />
            <span>Home</span>
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaFile size={15} />
            <span>Resume</span>
          </li>
          <li className="flex justify-center items-center gap-2">
            <RiContactsFill size={17} />
            Contact<span></span>
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaUser size={17} />
            <span>About Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
