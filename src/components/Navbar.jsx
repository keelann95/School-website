import React, { useState } from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" absolute z-40 shadow-lg  w-full text-white p-2  ">
      <nav>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-[30px] font-bold pl-5">
            <IoSchoolSharp className="text-[40px]" />
            Katwanyaa School of Art
          </div>

          {/* Menu Toggle Button */}
          <div className="xl:hidden pr-5">
            <button onClick={toggleMenu}>
              {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>
          </div>

          {/* Links */}
          <div className="hidden xl:flex space-x-9 gap-9 pr-[300px]">
            <NavLink to="/" className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              About
            </NavLink>
            <NavLink to="/gallery" className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              Gallery
            </NavLink>
            <NavLink to="/publications" className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              Publications
            </NavLink>
            <NavLink to="/news" className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              News
            </NavLink>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden flex flex-col items-center gap-5 bg-black pt-5">
            <NavLink to="/" onClick={toggleMenu} className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              About
            </NavLink>
            <NavLink to="/gallery" onClick={toggleMenu} className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              Gallery
            </NavLink>
            <NavLink to="/publications" onClick={toggleMenu} className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              Publications
            </NavLink>
            <NavLink to="/news" onClick={toggleMenu} className="hover:text-gray-300 transition duration-[0.6s] hover:scale-x-125">
              News
            </NavLink>
          </div>
        )}
        
      </nav>
    </div>
  );
};

export default Navbar;
