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
    <div className=" absolute top-0 left-0 w-full bg-yellow-700 text-white shadow-lg z-40">
      <nav className="flex justify-between items-center p-4 lg:px-12">
        {/* Logo */}
        <div className="flex items-center text-[24px] lg:text-[30px] font-bold gap-3">
          <IoSchoolSharp className="text-[32px] lg:text-[40px]" />
          Katwanyaa School of Art
        </div>

        {/* Menu Toggle Button for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex gap-8">
          <NavLink to="/" className="hover:text-gray-300 transition duration-300">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300 transition duration-300">
            About
          </NavLink>
          <NavLink to="/gallery" className="hover:text-gray-300 transition duration-300">
            Gallery
          </NavLink>
          <NavLink to="/publications" className="hover:text-gray-300 transition duration-300">
            Publications
          </NavLink>
          <NavLink to="/news" className="hover:text-gray-300 transition duration-300">
            News
          </NavLink>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-gray-900 text-center py-4">
          <NavLink to="/" onClick={toggleMenu} className="py-2 hover:text-gray-300 transition duration-300">
            Home
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className="py-2 hover:text-gray-300 transition duration-300">
            About
          </NavLink>
          <NavLink to="/gallery" onClick={toggleMenu} className="py-2 hover:text-gray-300 transition duration-300">
            Gallery
          </NavLink>
          <NavLink to="/publications" onClick={toggleMenu} className="py-2 hover:text-gray-300 transition duration-300">
            Publications
          </NavLink>
          <NavLink to="/news" onClick={toggleMenu} className="py-2 hover:text-gray-300 transition duration-300">
            News
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
