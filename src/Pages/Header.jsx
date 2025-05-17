import React, { useState } from "react";
import { Menu, Mlogo } from "../assets/DesignIcons/DesignIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center px-8 pb-6 pt-8 md:px-6 md:pb-3 lg:px-28 inter-font relative z-50">
        {/* Mobile View */}
        <div className="flex justify-between items-center w-full md:hidden">
          <img
            className="w-11 cursor-pointer"
            onClick={() => navigate("/home")}
            src={Mlogo}
            alt="Logo"
          />
          <img
            className="w-11 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            src={Menu}
            alt="Menu Icon"
          />
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between w-full">
          <h1
            onClick={() => navigate("/home")}
            className="text-zinc-200 text-3xl inter-600 cursor-pointer"
          >
            Codewithharshal.
          </h1>
          <div className="text-zinc-400 flex justify-center items-center gap-x-8 text-lg font-medium md:text-[16px]">
            <p
              className="cursor-pointer hover:text-zinc-200 transition"
              onClick={() => navigate("/home")}
            >
              Home
            </p>
            <p
              className="cursor-pointer hover:text-zinc-200 transition"
              onClick={() => navigate("/About")}
            >
              About
            </p>
            <p
              className="cursor-pointer hover:text-zinc-200 transition"
              onClick={() => navigate("/Work")}
            >
              Work
            </p>
            <p
              className="cursor-pointer hover:text-zinc-200 transition"
              onClick={() => navigate("/Hobbies")}
            >
              Hobbies
            </p>
            <a href="mailto:harshalself7@gmail.com">
              <button className="bg-zinc-700 border border-zinc-600 text-white px-3 py-2 rounded-2xl cursor-pointer text-sm font-normal">
                Let's talk
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed left-0 w-full bg-zinc-900 text-zinc-200 p-6 space-y-6 z-40 md:hidden flex flex-col items-center text-center transition-all duration-300 ease-in-out ${
          isMenuOpen ? "top-0 opacity-100" : "-top-full opacity-0"
        }`}
        style={{ height: "55vh" }}
      >
        <p
          className="cursor-pointer mt-16"
          onClick={() => {
            navigate("/home");
            setIsMenuOpen(false);
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/About");
            setIsMenuOpen(false);
          }}
        >
          About
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/Work");
            setIsMenuOpen(false);
          }}
        >
          Work
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/Hobbies");
            setIsMenuOpen(false);
          }}
        >
          Hobbies
        </p>
        <a href="mailto:harshalself7@gmail.com">
          <button className="bg-zinc-700 border border-zinc-600 text-white px-3 py-2 rounded-2xl cursor-pointer text-sm font-normal w-full">
            Let's talk
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
