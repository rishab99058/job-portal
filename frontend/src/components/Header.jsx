import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-slate-950 h-16 text-white flex justify-between px-6 items-center relative border-b border-gray-700">
        {/* Logo */}
        <div>
          <img src="logo.png" alt="logo" className="w-16 h-16 object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10">
          <Link
            to="/jobs"
            className="text-gray-300 font-bold hover:text-green-500 hover:underline transition duration-200"
          >
            Find Job
          </Link>
          <Link
            to="/talents"
            className="text-gray-300 font-bold hover:text-green-500 hover:underline transition duration-200"
          >
            Find Talents
          </Link>
          <Link
            to="/upload"
            className="text-gray-300 font-bold hover:text-green-500 hover:underline transition duration-200"
          >
            Upload Job
          </Link>
          <Link
            to="/about"
            className="text-gray-300 font-bold hover:text-green-500 hover:underline transition duration-200"
          >
            About Us
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center">
          <CiSettings className="w-6 h-6 text-gray-300 hover:text-green-500" />
          <IoMdNotificationsOutline className="w-6 h-6 text-gray-300 hover:text-green-500" />
          <Avatar variant="rounded" sx={{ width: "2rem", height: "2rem" }}>
            B
          </Avatar>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center gap-4 py-6 md:hidden border-t border-gray-700">
            <Link
              to="/jobs"
              className="text-gray-300 font-bold hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              Find Job
            </Link>
            <Link
              to="/talents"
              className="text-gray-300 font-bold hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              Find Talents
            </Link>
            <Link
              to="/upload"
              className="text-gray-300 font-bold hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              Upload Job
            </Link>
            <Link
              to="/about"
              className="text-gray-300 font-bold hover:text-green-500"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
